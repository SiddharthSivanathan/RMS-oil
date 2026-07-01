import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { PageShell } from "../components/ui";

export function NotFound() {
  return (
    <PageShell>
      <Seo title="Page Not Found | RMS Gold" description="The requested RMS Gold page could not be found." />
      <section className="grid min-h-screen place-items-center px-4 text-center">
        <div>
          <p className="font-serif text-8xl text-gold">404</p>
          <h1 className="mt-4 font-serif text-5xl text-forest">This page has not been bottled yet.</h1>
          <Link className="mt-8 inline-flex rounded-full bg-forest px-6 py-3 font-semibold text-ivory" to="/">Return home</Link>
        </div>
      </section>
    </PageShell>
  );
}
