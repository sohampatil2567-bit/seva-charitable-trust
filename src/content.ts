import { siteRoutes } from './routes';

const publishedPhoneHref = '+918381092292';
const donationEnquiryMessage = 'Hello Sana, I’m interested in supporting SEVA Charitable Trust Harnai. Please share the official donation instructions. Thank you.';

export const trust = {
  name: 'SEVA Charitable Trust Harnai',
  shortName: 'SEVA',
  tagline: 'Humanity Begins Here',
  emblem: '/brand/seva-trust-emblem.png',
  emblemPublicUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519664038100478/fVnZTRmqUIpvNxcT.png',
  founder: 'Sana Muzammil Kazi',
  founderRole: 'Founder and President',
  address: '208, Harnai, Dapoli, Maharashtra, India',
  phoneDisplay: '+91 83810 92292',
  phoneHref: publishedPhoneHref,
  whatsappDonationUrl: `https://wa.me/${publishedPhoneHref.replace(/\D/g, '')}?text=${encodeURIComponent(donationEnquiryMessage)}`,
  email: 'sanakazi0185@gmail.com',
  facebook: 'https://www.facebook.com/share/1CgBoG9roz/',
} as const;

export const navigation = siteRoutes.map(({ label, href }) => ({ label, href }));

export const focusAreas = [
  {
    name: 'Education',
    note: 'Education is named as an area of public benefit in the trust’s profile.',
  },
  {
    name: 'Health',
    note: 'Health is named as an area of public benefit in the trust’s profile.',
  },
  {
    name: 'Poverty',
    note: 'Poverty is named as an area of public benefit in the trust’s profile.',
  },
  {
    name: 'Women’s empowerment',
    note: 'Women’s empowerment is named as an area of public benefit in the trust’s profile.',
  },
  {
    name: 'Environment',
    note: 'The environment is named as an area of public benefit in the trust’s profile.',
  },
] as const;
