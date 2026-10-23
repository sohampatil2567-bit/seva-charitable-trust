import { ArrowUpRight, HeartHandshake, Leaf, Stethoscope, Utensils, Waves, Users } from 'lucide-react';
import { trust } from '../content';

const projects = [
  {
    icon: Users,
    title: 'Women Empowerment & Entrepreneurship',
    body: 'We promote women’s skills, local traditions and opportunities for self-employment through community initiatives such as Konkanachi Khadya Jatra, which showcases traditional Konkani food and women’s culinary skills.',
    focus: 'Women’s empowerment, entrepreneurship, traditional food culture and livelihood opportunities.',
    photos: [{ url: '/gallery/women-food-training.jpg', alt: 'Women participating in a community food preparation and skills programme' }, { url: '/gallery/women-community-recognition.jpg', alt: 'Women being recognised at a community programme' }],
  },
  {
    icon: Stethoscope,
    title: 'Community Healthcare & Medical Assistance',
    body: 'We take part in community health and wellbeing initiatives, helping connect residents with information, local support and opportunities to access healthcare through community partners.',
    focus: 'Health awareness, medical consultations and access to treatment through participating providers.',
    photos: [{ url: '/gallery/community-outreach.jpg', alt: 'Community outreach with local families' }],
  },
  {
    icon: Utensils,
    title: 'Food & Essential Supplies Distribution',
    body: 'Our community support work helps families access essential supplies and everyday necessities. We work alongside local schools and community members to support people with care and dignity.',
    focus: 'Essential food and supplies, family support and community giving.',
    photos: [{ url: '/gallery/school-supplies.jpg', alt: 'Supplies arranged for a community school initiative' }],
  },
  {
    icon: Waves,
    title: 'Coastal Cleanliness & Plastic Waste Collection',
    body: 'Through beach and coastal clean-up activities, volunteers and local residents work together to collect litter and plastic waste and help keep Harnai’s coastline and shared spaces cleaner.',
    focus: 'Beach cleanliness, waste collection, plastic reduction and community participation.',
    photos: [{ url: '/gallery/beach-cleanup.jpg', alt: 'Volunteers collecting waste from the beach' }, { url: '/gallery/coastal-cleanup-creek.jpg', alt: 'Volunteers collecting rubbish near a coastal creek' }],
  },
  {
    icon: Leaf,
    title: 'Environmental Awareness & Tree Plantation',
    body: 'We encourage environmental responsibility through tree-planting and awareness activities that invite residents to care for local green spaces and protect the natural environment.',
    focus: 'Tree planting, environmental education and local environmental care.',
    photos: [{ url: '/gallery/seva-tree-plantation.jpg', alt: 'Community members at a tree plantation activity' }],
  },
  {
    icon: HeartHandshake,
    title: 'Civic Awareness & Community Engagement',
    body: 'We support civic learning, community participation and local partnerships. Activities and recognition events create opportunities for residents and community organisations to come together around shared public goals.',
    focus: 'Civic awareness, community participation and collaboration.',
    photos: [{ url: '/gallery/civic-democracy-event.jpg', alt: 'Community representative attending a democracy and civic leadership event' }, { url: '/gallery/community-award.jpg', alt: 'Community member receiving recognition for service' }, { url: '/gallery/trust-award-portrait.jpg', alt: 'SEVA representative holding a community service award' }, { url: '/gallery/community-appreciation.jpg', alt: 'Community appreciation event with local participants' }],
  },
] as const;

export function Activities() {
  return (
    <section className="projects-section section-pad" aria-labelledby="projects-title">
      <div className="page-wrap">
        <div className="section-heading projects-heading">
          <div>
            <p className="eyebrow">Our Projects</p>
            <h2 id="projects-title">Small Acts of Kindness. <em>Meaningful Community Impact.</em></h2>
          </div>
          <p className="section-heading__aside">At SEVA Charitable Trust, we believe lasting change begins with community participation, compassion and opportunity.</p>
        </div>
        <p className="projects-intro">Explore our community initiatives through photographs from activities and events. Each project includes a short description of the work it supports.</p>
        <div className="projects-grid">
          {projects.map(({ icon: Icon, title, body, focus, photos }) => (
            <article className="project-card" key={title}>
              <div className="project-card__icon"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <div className="project-card__photos" aria-label={`${title} photographs`}>
                {photos.map((photo) => <img key={photo.url} src={photo.url} alt={photo.alt} loading="lazy" />)}
              </div>
              <div className="project-card__description">
                <p>{body}</p>
                <div className="project-card__focus"><span>Project focus</span><strong>{focus}</strong></div>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-cta">
          <div><p className="eyebrow">Be Part of the Change</p><h3>Every contribution, volunteer hour and community partnership can help create a more caring, empowered and sustainable society.</h3></div>
          <div className="projects-cta__links">
            <a className="button button--dark" href="/get-involved/">Get Involved <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="text-link" href={`mailto:${trust.email}?subject=${encodeURIComponent('Volunteer with SEVA Charitable Trust')}`}>Volunteer With Us <ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="text-link" href={trust.whatsappDonationUrl} target="_blank" rel="noreferrer">Support Our Initiatives <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
