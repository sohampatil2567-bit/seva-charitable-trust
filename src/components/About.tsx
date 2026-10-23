import { ArrowUpRight, HeartHandshake } from 'lucide-react';
import { trust } from '../content';

export function About() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="page-wrap about-section__grid">
        <div className="section-intro">
          <p className="eyebrow">About the trust</p>
          <h2 id="about-title">A purpose grounded in <em>humanity.</em></h2>
        </div>
        <div className="about-copy">
          <div className="about-copy__icon" aria-hidden="true"><HeartHandshake size={23} strokeWidth={1.5} /></div>
          <p className="about-copy__lead">
            “{trust.tagline}” is the phrase SEVA shares publicly. Its profile describes work for
            public benefit across five areas, bringing a broad and people-centred purpose into view.
          </p>
          <div className="founder-card">
            <span className="founder-card__initials" aria-hidden="true">SK</span>
            <span><strong>{trust.founder}</strong><small>{trust.founderRole}</small></span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </div>
          <p className="about-copy__note">
            More about the trust’s history, approach and formal vision can be added once those details are confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}
