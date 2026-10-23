import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { trust } from '../content';

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-wrap">
        <div className="contact-section__heading">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">We’d be glad to <em>hear from you.</em></h2>
        </div>
        <div className="contact-section__grid">
          <div className="contact-item">
            <span className="contact-item__icon" aria-hidden="true"><MapPin size={18} /></span>
            <span><small>Address</small><strong>{trust.address}</strong></span>
          </div>
          <a className="contact-item" href={`tel:${trust.phoneHref}`}>
            <span className="contact-item__icon" aria-hidden="true"><Phone size={18} /></span>
            <span><small>Phone</small><strong>{trust.phoneDisplay}</strong></span>
          </a>
          <a className="contact-item" href={`mailto:${trust.email}`}>
            <span className="contact-item__icon" aria-hidden="true"><Mail size={18} /></span>
            <span><small>Email</small><strong>{trust.email}</strong></span>
          </a>
        </div>
        <p className="contact-section__source">
          These contact details are listed on the trust’s <a href={trust.facebook} target="_blank" rel="noreferrer">public Facebook page <ArrowUpRight size={12} aria-hidden="true" /></a>.
        </p>
      </div>
    </section>
  );
}
