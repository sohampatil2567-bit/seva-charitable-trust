import { ArrowUpRight, BookOpen, HandHeart, HeartPulse, Leaf, UsersRound } from 'lucide-react';
import { focusAreas } from '../content';

const icons = [BookOpen, HeartPulse, HandHeart, UsersRound, Leaf];

export function FocusAreas() {
  return (
    <section className="focus-section section-pad" id="our-work" aria-labelledby="focus-title">
      <div className="page-wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Areas of focus</p>
            <h2 id="focus-title">A shared commitment to <em>public good.</em></h2>
          </div>
          <p className="section-heading__aside">
            These are the areas listed on SEVA’s public profile. Specific programmes are shared only when details are confirmed.
          </p>
        </div>
        <div className="focus-list">
          {focusAreas.map((area, index) => {
            const Icon = icons[index];
            return (
              <article className="focus-card" key={area.name}>
                <span className="focus-card__number">0{index + 1}</span>
                <span className="focus-card__icon" aria-hidden="true"><Icon size={21} strokeWidth={1.5} /></span>
                <h3>{area.name}</h3>
                <p>{area.note}</p>
                <ArrowUpRight className="focus-card__arrow" size={17} aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
