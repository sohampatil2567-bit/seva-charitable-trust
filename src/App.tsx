import { useEffect } from 'react';
import { About } from './components/About';
import { Activities } from './components/Stories';
import { ContactSection } from './components/ContactSection';
import { CertificateSection } from './components/CertificateSection';
import { DonationContact } from './components/DonationContact';
import { FocusAreas } from './components/FocusAreas';
import { Gallery } from './components/Gallery';
import { GetInvolved } from './components/GetInvolved';
import { Hero } from './components/Hero';
import { HomePages } from './components/HomePages';
import { NotFoundPage } from './components/NotFoundPage';
import { PageIntro } from './components/PageIntro';
import { PageMetadata } from './components/PageMetadata';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { findSiteRoute, normalizeRoutePath, notFoundRoute } from './routes';

type AppProps = {
  pathname: string;
};

const pageHeadings: Record<string, string> = {
  about: 'About the trust',
  'our-work': 'Our work',
  activities: 'Activities & projects',
  gallery: 'Gallery',
  'get-involved': 'Get involved',
  contact: 'Contact SEVA',
};

export function App({ pathname }: AppProps) {
  const currentPage = findSiteRoute(pathname);
  const isNotFoundPath = normalizeRoutePath(pathname) === '/404';
  const isUnrecognized = !currentPage && !isNotFoundPath;

  useEffect(() => {
    if (isUnrecognized) window.location.replace('/404/');
  }, [isUnrecognized]);

  const metadata = currentPage ?? notFoundRoute;

  return (
    <>
      <PageMetadata metadata={metadata} noindex={!currentPage} />
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader currentPath={currentPage?.href ?? '/404/'} />
      <main id="main-content">
        {isNotFoundPath || isUnrecognized ? (
          <NotFoundPage />
        ) : currentPage?.key === 'home' ? (
          <>
            <Hero />
            <CertificateSection />
            <DonationContact />
            <HomePages />
          </>
        ) : (
          <>
            <PageIntro
              eyebrow={currentPage?.label ?? 'SEVA'}
              title={pageHeadings[currentPage?.key ?? ''] ?? 'Page'}
              description={currentPage?.description ?? ''}
              className={currentPage?.key === 'our-work' ? 'page-intro--our-work' : ''}
            />
            {currentPage?.key === 'about' && <About />}
            {currentPage?.key === 'our-work' && <FocusAreas />}
            {currentPage?.key === 'activities' && <Activities />}
            {currentPage?.key === 'gallery' && <Gallery />}
            {currentPage?.key === 'get-involved' && <GetInvolved />}
            {currentPage?.key === 'contact' && <ContactSection />}
          </>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
