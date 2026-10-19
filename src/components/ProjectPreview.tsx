import type { Project, ProjectImage } from "../data/projects";

type ProjectPreviewProps = {
  project: Project;
  image?: ProjectImage;
  priority?: boolean;
  caption?: boolean;
};

export default function ProjectPreview({ project, image = project.cover, priority = false, caption = true }: ProjectPreviewProps) {
  return (
    <figure className="min-w-0">
      <a href={image.src} aria-label={`Open full-size image: ${image.caption}`}
        className="focus-link group block overflow-hidden rounded-lg border border-line/80 bg-[#0b0c0e] shadow-[0_8px_28px_rgba(17,17,17,0.05)]">
        <img src={image.src} alt={image.alt} width={image.width} height={image.height}
          loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async"
          className="block h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.005]" />
      </a>
      {caption && <figcaption className="mt-3 text-sm leading-6 text-muted">{image.caption} <span className="whitespace-nowrap">Open full size ↗</span></figcaption>}
    </figure>
  );
}
