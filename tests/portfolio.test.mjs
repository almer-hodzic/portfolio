import assert from "node:assert/strict";
import { after, test } from "node:test";
import { readFile, stat } from "node:fs/promises";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { createServer } from "vite";
import react from "@vitejs/plugin-react";

const server = await createServer({ configFile: false, plugins: [react()], server: { middlewareMode: true }, appType: "custom" });
after(() => server.close());
const { default: App } = await server.ssrLoadModule("/src/App.tsx");
const { default: ProjectPage } = await server.ssrLoadModule("/src/pages/ProjectPage.tsx");
const { default: NotFound } = await server.ssrLoadModule("/src/pages/NotFound.tsx");
const { projects } = await server.ssrLoadModule("/src/data/projects.ts");

function render(path) {
  return renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [path] },
    React.createElement(Routes, null,
      React.createElement(Route, { path: "/", element: React.createElement(App) }),
      React.createElement(Route, { path: "/projects/:slug", element: React.createElement(ProjectPage) }),
      React.createElement(Route, { path: "*", element: React.createElement(NotFound) }),
    )));
}

function checkPage(html) {
  assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1, "one page-level heading");
  assert.match(html, /id="main-content"/);
  assert.doesNotMatch(html, /PLACEHOLDER|#replace-|placeholder preview|IronBook|NBA Clutch Agent|redesign planned/);
  assert.doesNotMatch(html, /href="(?:#|mailto:undefined|undefined)"/);
  assert.doesNotMatch(html, /<a[^>]*href=""/);
}

test("home leads with HoopsLab, then MovieShop, with real case-study destinations", () => {
  const html = render("/");
  checkPage(html);
  const titles = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/g)].map((m) => m[1].replace(/<[^>]*>/g, ""));
  assert.deepEqual(titles.slice(0, 2), ["HoopsLab", "MovieShop"]);
  assert.match(html, /href="\/projects\/hoopslab"/);
  assert.match(html, /href="\/projects\/movieshop"/);
  assert.match(html, /href="https:\/\/hoops-lab-five\.vercel\.app\/"[^>]*>Live Demo/);
  assert.match(html, /Almer Hodžić/);
  const sectionOrder = [...html.matchAll(/<section id="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(sectionOrder, ["work", "experience", "about", "contact"]);
  assert.equal((html.match(/<img\b/g) ?? []).length, 4);
});

test("boat variants change only the decorative asset and safely default to merry", async () => {
  const defaultHtml = render("/");
  const normalize = (html) => html.replace(/\/hero\/(?:minimal|merry|journey)\.png/g, "/hero/variant.png");
  for (const variant of ["minimal", "merry", "journey", "unknown", "toString"]) {
    const html = render(`/?boat=${variant}`);
    const expected = ["minimal", "journey"].includes(variant) ? variant : "merry";
    assert.ok(html.includes(`src="/hero/${expected}.png"`));
    assert.ok(html.includes('src="/hero/slika.png"'));
    assert.equal(normalize(html), normalize(defaultHtml));
  }
  assert.ok(defaultHtml.includes('src="/hero/merry.png"'));
  for (const variant of ["minimal", "merry", "journey"]) {
    const image = await readFile(`public/hero/${variant}.png`);
    assert.deepEqual(await readFile(`dist/hero/${variant}.png`), image);
  }
  assert.deepEqual(await readFile("dist/hero/slika.png"), await readFile("public/hero/slika.png"));
});

test("boat starts visible inside the sailing track instead of the transparent final keyframe", () => {
  const html = render("/?boat=merry");
  const track = html.slice(html.indexOf('data-hero-boat="true"'));
  assert.match(track, /^data-hero-boat="true"[^>]*><div[^>]*style="opacity:1;transform:none"/);
  assert.match(track, /src="\/hero\/merry\.png"[^>]*width="1774" height="887"/);
});

for (const project of projects) {
  test(`${project.name} case study has real source, figures, and accurate scope`, () => {
    const html = render(`/projects/${project.slug}`);
    checkPage(html);
    assert.ok(html.includes(`href="${project.githubUrl}"`));
    assert.ok(html.includes(`href="${project.docsUrl}"`));
    if (project.slug === "hoopslab") {
      assert.equal(project.liveUrl, "https://hoops-lab-five.vercel.app/");
      assert.match(html, /href="https:\/\/hoops-lab-five\.vercel\.app\/"[^>]*>Live Demo/);
      assert.equal((html.match(/>Live Demo /g) ?? []).length, 1);
    } else {
      assert.doesNotMatch(html, /Live Demo/i);
    }
    assert.match(html, /Verification &amp; scope/);
    if (project.slug === "hoopslab") {
      assert.match(html, /simulation API/);
      assert.match(html, /HIGH uncertainty/);
      assert.doesNotMatch(html, /Dynasty|Team Studio|Quick Sim/);
    } else {
      assert.match(html, /PayPal Sandbox/);
      assert.match(html, /order history is not implemented/);
    }
  });
}

test("all shipped project images exist, have descriptive alternatives, and preserve source dimensions", async () => {
  for (const project of projects) {
    for (const image of [project.cover, ...project.gallery]) {
      assert.ok(image.alt.length > 30);
      const asset = await readFile(`public${image.src}`);
      assert.equal(asset.subarray(1, 4).toString(), "PNG");
      assert.equal(asset.readUInt32BE(16), image.width);
      assert.equal(asset.readUInt32BE(20), image.height);
      assert.ok((await stat(`dist${image.src}`)).size > 0, "asset is in production output");
    }
  }
});

test("missing pages and missing projects render usable recovery links", () => {
  for (const path of ["/unknown", "/projects/unknown"]) {
    const html = render(path);
    checkPage(html);
    assert.match(html, /not found/);
    assert.match(html, /href="\/(?:#work)?"/);
  }
});

test("production branding and focus styles are shipped", async () => {
  const html = await readFile("dist/index.html", "utf8");
  assert.match(html, /Almer Hodžić/);
  assert.match(html, /name="description"/);
  assert.match(html, /property="og:title"/);
  assert.match(html, /favicon.svg/);
  assert.ok((await stat("dist/favicon.svg")).size > 0);
  const css = await readFile("src/styles/index.css", "utf8");
  assert.match(css, /focus-visible:ring/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /prefers-reduced-motion/);
});
