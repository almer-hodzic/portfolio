import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-paper/20 bg-ink text-paper/70">
      <div className="site-container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-6 text-xs leading-6 sm:text-sm">
        <p>{profile.name} · {profile.role}</p><p>{profile.location}</p>
      </div>
    </footer>
  );
}
