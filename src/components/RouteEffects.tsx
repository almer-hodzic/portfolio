import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProject } from "../data/projects";
import { profile } from "../data/profile";

const defaultDescription = "Almer Hodžić, Software Engineer. Explore HoopsLab historical NBA analytics and MovieShop, an Angular and .NET commerce application.";

export default function RouteEffects() {
  const { pathname, hash } = useLocation();
  useLayoutEffect(() => {
    const project = pathname.startsWith("/projects/") ? getProject(pathname.split("/")[2]) : undefined;
    const title = project ? `${project.name} — ${profile.name}` : pathname === "/" ? `${profile.name} — ${profile.role}` : `Page not found — ${profile.name}`;
    const description = project?.description ?? defaultDescription;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalUrl = new URL(pathname, canonical?.href ?? window.location.href).href;
    canonical?.setAttribute("href", canonicalUrl);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", canonicalUrl);
    document.title = title;
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) {
      document.querySelector(selector)?.setAttribute("content", description);
    }
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
      document.querySelector(selector)?.setAttribute("content", title);
    }
    const frame = requestAnimationFrame(() => {
      let id = "main-content";
      try { if (hash) id = decodeURIComponent(hash.slice(1)); } catch { /* Invalid fragments fall back to main. */ }
      const target = document.getElementById(id) ?? document.getElementById("main-content");
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        if (hash) target.scrollIntoView();
        else window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
