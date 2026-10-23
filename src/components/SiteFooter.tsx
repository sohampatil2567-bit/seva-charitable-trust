import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { navigation, trust } from '../content';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="wordmark wordmark--footer" href="/" aria-label={`${trust.name} — back to home`}>
              <span className="wordmark__symbol" aria-hidden="true"><img src={trust.emblem} alt="" width="512" height="512" /></span>
              <span className="wordmark__copy"><strong>SEVA</strong><small>CHARITABLE TRUST · HARNAI</small></span>
            </a>
            <p>“{trust.tagline}”</p>
            <a className="footer-facebook" href={trust.facebook} target="_blank" rel="noreferrer">
              Follow the public Facebook page <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="footer-column">
            <h2>Explore</h2>
            {navigation.filter((item) => item.href !== '/').map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </div>

          <div className="footer-column footer-column--contact">
            <h2>Contact</h2>
            <a href={`mailto:${trust.email}`}><Mail size={15} aria-hidden="true" />{trust.email}</a>
            <a href={`tel:${trust.phoneHref}`}><Phone size={15} aria-hidden="true" />{trust.phoneDisplay}</a>
            <span><MapPin size={15} aria-hidden="true" />{trust.address}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {trust.name}</span>
          <span>Information shown here is based on publicly available trust details.</span>
          <a href="/">Home ↑</a>
        </div>
      </div>
    </footer>
  );
}
