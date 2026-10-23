export const siteRoutes = [
  {
    key: 'home',
    label: 'Home',
    href: '/',
    title: 'SEVA Charitable Trust Harnai | Humanity Begins Here',
    description: 'SEVA Charitable Trust Harnai focuses on public benefit across education, health, poverty, women’s empowerment and the environment.',
  },
  {
    key: 'about',
    label: 'About Us',
    href: '/about/',
    title: 'About SEVA Charitable Trust Harnai',
    description: 'Learn about SEVA Charitable Trust Harnai, its public-facing purpose, founder and the Humanity Begins Here statement.',
  },
  {
    key: 'our-work',
    label: 'Our Work',
    href: '/our-work/',
    title: 'Our Work | SEVA Charitable Trust Harnai',
    description: 'Explore the five areas named on SEVA Charitable Trust Harnai’s public profile: education, health, poverty, women’s empowerment and environment.',
  },
  {
    key: 'activities',
    label: 'Activities',
    href: '/activities/',
    title: 'Activities & Projects | SEVA Charitable Trust Harnai',
    description: 'Explore SEVA Charitable Trust Harnai projects supporting women, healthcare, families, coastal cleanliness, marine conservation and civic awareness.',
  },
  {
    key: 'gallery',
    label: 'Gallery',
    href: '/gallery/',
    title: 'Gallery | SEVA Charitable Trust Harnai',
    description: 'Browse the SEVA gallery or select photos for temporary local previews in twenty image spaces.',
  },
  {
    key: 'get-involved',
    label: 'Get Involved',
    href: '/get-involved/',
    title: 'Get Involved | SEVA Charitable Trust Harnai',
    description: 'Contact SEVA Charitable Trust Harnai to ask about volunteering, partnerships or a general enquiry.',
  },
  {
    key: 'contact',
    label: 'Contact',
    href: '/contact/',
    title: 'Contact SEVA Charitable Trust Harnai',
    description: 'Contact SEVA Charitable Trust Harnai in Harnai, Dapoli, Maharashtra by phone, email or its public Facebook page.',
  },
] as const;

export type SiteRoute = (typeof siteRoutes)[number];

export const notFoundRoute = {
  key: 'not-found',
  title: 'Page not found | SEVA Charitable Trust Harnai',
  description: 'This page could not be found. Return to the SEVA Charitable Trust Harnai homepage.',
} as const;

export function normalizeRoutePath(pathname: string): string {
  const path = pathname.split(/[?#]/, 1)[0] || '/';
  if (path === '/') return '/';
  return path.replace(/\/+$/, '') || '/';
}

export function findSiteRoute(pathname: string): SiteRoute | undefined {
  const normalized = normalizeRoutePath(pathname);
  return siteRoutes.find((route) => normalizeRoutePath(route.href) === normalized);
}
