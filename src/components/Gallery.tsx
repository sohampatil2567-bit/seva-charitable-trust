import { ArrowUpRight } from 'lucide-react';
import { trust } from '../content';

type GalleryPhoto = { url: string; name: string; project: string };

const PHOTOS: GalleryPhoto[] = [
  { url: '/gallery/seva-community-event.jpg', name: 'Community recognition event', project: 'Civic awareness & community engagement' },
  { url: '/gallery/seva-tree-plantation.jpg', name: 'Tree plantation activity', project: 'Environment & tree plantation' },
  { url: '/gallery/seva-women-empowerment.jpg', name: 'Women empowerment programme', project: 'Women empowerment' },
  { url: '/gallery/community-award.jpg', name: 'Community service award', project: 'Civic awareness & community engagement' },
  { url: '/gallery/coastal-cleanup-creek.jpg', name: 'Coastal creek clean-up', project: 'Coastal cleanliness' },
  { url: '/gallery/beach-cleanup.jpg', name: 'Beach waste collection', project: 'Coastal cleanliness' },
  { url: '/gallery/civic-democracy-event.jpg', name: 'Civic leadership event', project: 'Civic awareness & community engagement' },
  { url: '/gallery/women-community-recognition.jpg', name: 'Women at a community event', project: 'Women empowerment' },
  { url: '/gallery/community-outreach.jpg', name: 'Community outreach', project: 'Community support' },
  { url: '/gallery/trust-award-portrait.jpg', name: 'Service award presentation', project: 'Civic awareness & community engagement' },
  { url: '/gallery/women-food-training.jpg', name: 'Women’s food skills programme', project: 'Women empowerment & entrepreneurship' },
  { url: '/gallery/school-supplies.jpg', name: 'School supplies initiative', project: 'Education & essential supplies' },
  { url: '/gallery/community-appreciation.jpg', name: 'Community appreciation event', project: 'Civic awareness & community engagement' },
];

export function Gallery() {
  return (
    <section className="gallery-section section-pad" aria-labelledby="gallery-title">
      <div className="page-wrap">
        <div className="gallery-section__grid">
          <div className="gallery-section__symbol"><img src={trust.emblem} alt="SEVA Charitable Trust emblem" width="512" height="512" loading="lazy" /></div>
          <div className="gallery-section__copy">
            <p className="eyebrow">Gallery · Community moments</p>
            <h2 id="gallery-title">Real moments deserve <em>real photographs.</em></h2>
            <p>Photographs from SEVA’s community activities, recognition events, environmental work and women’s programmes. Duplicate uploads have been excluded.</p>
            <a className="button button--outline" href={trust.facebook} target="_blank" rel="noreferrer">Visit the Facebook page <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="gallery-slots gallery-slots--featured" role="list" aria-label="SEVA gallery photographs">
          {PHOTOS.map((photo, index) => {
            const number = String(index + 1).padStart(2, '0');
            return <article className="gallery-slot" role="listitem" aria-label={`Gallery photo ${number}: ${photo.name}`} key={photo.url}>
              <div className="gallery-slot__media"><img className="gallery-slot__image" src={photo.url} alt={photo.name} loading="lazy" /><span className="gallery-slot__number" aria-hidden="true">{number}</span></div>
              <p className="gallery-slot__filename">{photo.name}</p><p className="gallery-slot__project">{photo.project}</p>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
