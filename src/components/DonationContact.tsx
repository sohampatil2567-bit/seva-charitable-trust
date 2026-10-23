import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, MessageCircle, HeartHandshake, Send } from 'lucide-react';
import { trust } from '../content';

export function DonationContact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    const amount = String(form.get('amount') ?? '').trim();
    const purpose = String(form.get('purpose') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    const whatsappMessage = [
      'Hello Sana, I would like to support SEVA Charitable Trust Harnai.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Donation amount: ₹${amount}`,
      `Purpose: ${purpose}`,
      message ? `Message: ${message}` : '',
      '',
      'Please share the official donation/payment instructions. Thank you.',
    ].filter(Boolean).join('\n');

    setSubmitted(true);
    window.open(`https://wa.me/${trust.phoneHref.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="donation-contact section-pad" id="donate" aria-labelledby="donation-title">
      <div className="page-wrap">
        <div className="donation-contact__grid">
          <div className="donation-contact__intro">
            <p className="eyebrow"><span className="eyebrow__dot" /> Support SEVA</p>
            <h2 id="donation-title">Your support can <em>create change.</em></h2>
            <p>
              Tell us how you would like to contribute. The form prepares a WhatsApp message for Sana,
              so the trust can share the official donation instructions with you directly.
            </p>
            <div className="donation-contact__direct">
              <div className="donation-contact__direct-icon"><MessageCircle size={20} aria-hidden="true" /></div>
              <div>
                <strong>Want to talk directly?</strong>
                <span>Chat with {trust.founder} on WhatsApp</span>
              </div>
              <a className="button button--whatsapp" href={trust.whatsappDonationUrl} target="_blank" rel="noreferrer">
                WhatsApp Sana <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <p className="donation-contact__note">No payment is taken on this website. You will review the WhatsApp message before sending it.</p>
          </div>

          <form className="donation-form" onSubmit={handleSubmit}>
            <div className="donation-form__head">
              <div>
                <span className="donation-form__icon"><HeartHandshake size={19} aria-hidden="true" /></span>
                <h3>Donation enquiry</h3>
              </div>
              <span className="donation-form__secure">Direct to Sana</span>
            </div>

            <div className="form-row">
              <label>Name<input name="name" type="text" placeholder="Your full name" required /></label>
              <label>Phone / WhatsApp<input name="phone" type="tel" placeholder="Your phone number" required /></label>
            </div>

            <div className="form-row">
              <label>Donation amount (₹)<input name="amount" type="number" min="1" step="1" placeholder="e.g. 1000" required /></label>
              <label>Support area
                <select name="purpose" defaultValue="General support" required>
                  <option>General support</option>
                  <option>Education</option>
                  <option>Health</option>
                  <option>Poverty relief</option>
                  <option>Women’s empowerment</option>
                  <option>Environment</option>
                </select>
              </label>
            </div>

            <label>Message (optional)<textarea name="message" rows={3} placeholder="Tell us anything you would like Sana to know..." /></label>

            <button className="button button--primary donation-form__submit" type="submit">
              <Send size={16} aria-hidden="true" /> Continue on WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
            </button>
            {submitted && <p className="donation-form__success" role="status">WhatsApp opened with your donation details. Please review and send the message.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
