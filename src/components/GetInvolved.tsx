import { type FormEvent, useState } from 'react';
import { ArrowUpRight, Check, Mail, MessageCircle } from 'lucide-react';
import { trust } from '../content';

export function GetInvolved() {
  const [notice, setNotice] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const values = new FormData(form);
    const subject = String(values.get('subject') ?? '').trim();
    const name = String(values.get('name') ?? '').trim();
    const email = String(values.get('email') ?? '').trim();
    const message = String(values.get('message') ?? '').trim();
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const link = `mailto:${trust.email}?subject=${encodeURIComponent(subject || 'Website enquiry')}&body=${encodeURIComponent(body)}`;

    setNotice('A draft should open in your email app. The website cannot confirm delivery; if no draft opens, email the trust directly at the address shown below.');
    window.location.href = link;
  }

  return (
    <section className="involved-section section-pad" id="get-involved" aria-labelledby="involved-title">
      <div className="page-wrap involved-section__grid">
        <div className="involved-copy">
          <p className="eyebrow">Get involved</p>
          <h2 id="involved-title">Start with a <em>conversation.</em></h2>
          <p className="involved-copy__lead">
            Have a question, a volunteering enquiry or an idea for working together? Get in touch to ask what may be possible.
          </p>
          <div className="involved-option">
            <span className="involved-option__icon" aria-hidden="true"><MessageCircle size={19} /></span>
            <span><strong>Enquire or connect</strong><small>Share a note with the trust by email.</small></span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </div>
          <div className="involved-option">
            <span className="involved-option__icon" aria-hidden="true"><Mail size={19} /></span>
            <span><strong>Ask about volunteering</strong><small>Use the form to start a conversation.</small></span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </div>
          <p className="involved-copy__small">Donation instructions are not shown because no verified payment method has been provided.</p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="enquiry-form__heading">
            <span className="eyebrow">Send an enquiry</span>
            <h3>How can we help?</h3>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="enquiry-name">Your name</label>
              <input id="enquiry-name" name="name" autoComplete="name" required maxLength={100} placeholder="Name" />
            </div>
            <div className="form-field">
              <label htmlFor="enquiry-email">Email address</label>
              <input id="enquiry-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-subject">What would you like to ask about?</label>
            <select id="enquiry-subject" name="subject" defaultValue="General enquiry">
              <option>General enquiry</option>
              <option>Volunteering enquiry</option>
              <option>Partnership enquiry</option>
              <option>Current activities</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="enquiry-message">Your message</label>
            <textarea id="enquiry-message" name="message" required minLength={8} maxLength={2000} rows={4} placeholder="Write a short message…" />
          </div>
          <button className="button button--primary enquiry-form__submit" type="submit">
            Open email draft <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          <p className="form-handoff"><Check size={14} aria-hidden="true" /> Your message stays in your email app until you choose to send it.</p>
          <p className="form-status" role="status" aria-live="polite">{notice}</p>
        </form>
      </div>
    </section>
  );
}
