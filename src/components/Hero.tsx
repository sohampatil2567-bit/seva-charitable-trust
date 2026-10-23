import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import { trust } from '../content';


export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="page-wrap hero__grid">
        <div className="hero__copy">
          <p className="eyebrow"><span className="eyebrow__dot" /> A charitable trust in Harnai, Dapoli</p>
          <h1 id="hero-title">Humanity <em>begins here.</em></h1>
          <p className="hero__lead">
            SEVA Charitable Trust Harnai focuses on public benefit across education, health,
            poverty, women’s empowerment and the environment.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={trust.whatsappDonationUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={17} aria-hidden="true" /> Ask Sana about donating <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="button button--outline" href="/contact/">
              Make an enquiry <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="/our-work/">
              Explore our focus areas <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
          <p className="hero__donation-note">Opens a WhatsApp draft to the trust’s publicly listed number. You choose whether to send it; this website does not process payments.</p>
          <div className="hero__byline">
            <span className="hero__byline-rule" />
            <span><strong>{trust.founder}</strong><small>{trust.founderRole}</small></span>
          </div>
        </div>

        <div className="hero__visual hero-founder-visual">
          <div className="hero-founder-portrait">
            <img
              src="/founder/sana-kazi-founder.png"
              alt="Sana Kazi, founder of SEVA Charitable Trust, holding an award"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-founder-caption">
            <span className="hero-founder-caption__line" />
            <div><strong>Sana Kazi</strong><small>Founder · SEVA Charitable Trust</small></div>
          </div>
        </div>
      </div>
      <div className="hero__edge" aria-hidden="true" />
    </section>
  );
}
