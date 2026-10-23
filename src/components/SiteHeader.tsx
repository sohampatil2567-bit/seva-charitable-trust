import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, trust } from '../content';

export function SiteHeader({ currentPath }: { currentPath: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  return (
    <>
      <div className="utility-bar">
        <div className="page-wrap utility-bar__inner">
          <span>208, Harnai · Dapoli, Maharashtra</span>
          <div className="utility-bar__links">
            <a href={`tel:${trust.phoneHref}`}>
              <Phone size={13} aria-hidden="true" />
              {trust.phoneDisplay}
            </a>
            <a href={`mailto:${trust.email}`}>
              <Mail size={13} aria-hidden="true" />
              Email the trust
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="page-wrap site-header__inner">
          <a className="wordmark" href="/" aria-label={`${trust.name} — home`}>
            <span className="wordmark__symbol" aria-hidden="true"><img src={trust.emblem} alt="" width="512" height="512" /></span>
            <span className="wordmark__copy">
              <strong>SEVA</strong>
              <small>CHARITABLE TRUST · HARNAI</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} aria-current={item.href === currentPath ? 'page' : undefined}>{item.label}</a>)}
          </nav>

          <a className="header-cta" href="/contact/">
            Get in touch <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} aria-current={item.href === currentPath ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
                {item.label}<ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
