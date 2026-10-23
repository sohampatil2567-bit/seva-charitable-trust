import { ArrowUpRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <section className="not-found section-pad" aria-labelledby="not-found-title">
      <div className="page-wrap not-found__inner">
        <p className="eyebrow">404 · Page not found</p>
        <h1 id="not-found-title">This page isn’t here.</h1>
        <p>The address may have changed. Return to the SEVA homepage to find the pages currently available.</p>
        <a className="button button--primary" href="/">
          Go to the homepage <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
