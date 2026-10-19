import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="site-container flex min-h-screen items-center justify-center bg-paper text-ink">
      <div>
        <h1 className="font-display text-5xl font-semibold">Page not found</h1>
        <Link className="text-link mt-8 inline-flex min-h-11 items-center gap-2 text-muted hover:text-ink" to="/">
          <ArrowLeft size={16} />
          Return home
        </Link>
      </div>
    </main>
  );
}
