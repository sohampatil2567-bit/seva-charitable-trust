import { ArrowUpRight } from 'lucide-react';
import { siteRoutes } from '../routes';

const pageDescriptions: Record<string, string> = {
  about: 'The trust’s public purpose and verified profile details.',
  'our-work': 'The five public-benefit areas named by the trust.',
  activities: 'Explore the trust’s community projects across women’s empowerment, healthcare, family support, coastal protection and civic awareness.',
  gallery: 'Twenty photo spaces for genuine trust activity images.',
  'get-involved': 'Ask the trust about volunteering or working together.',
  contact: 'Find the verified phone number, email and address.',
};

export function HomePages() {
  return (
    <section className="home-pages section-pad" aria-labelledby="home-pages-title">
      <div className="page-wrap">
        <p className="eyebrow">Explore the site</p>
        <div className="home-pages__heading">
          <h2 id="home-pages-title">Learn more about <em>SEVA.</em></h2>
          <p>Each section has its own page, with the information available today.</p>
        </div>
        <div className="home-pages__grid">
          {siteRoutes.filter((route) => route.key !== 'home').map((route) => (
            <a className="home-pages__card" href={route.href} key={route.key}>
              <span className="home-pages__label">{route.label}</span>
              <span className="home-pages__description">{pageDescriptions[route.key]}</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
