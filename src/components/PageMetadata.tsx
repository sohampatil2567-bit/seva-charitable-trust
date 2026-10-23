import { useEffect } from 'react';
import { trust } from '../content';

type Metadata = {
  title: string;
  description: string;
};

type PageMetadataProps = {
  metadata: Metadata;
  noindex?: boolean;
};

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

export function PageMetadata({ metadata, noindex = false }: PageMetadataProps) {
  useEffect(() => {
    document.title = metadata.title;
    upsertMeta('name', 'description', metadata.description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', trust.name);
    upsertMeta('property', 'og:title', metadata.title);
    upsertMeta('property', 'og:description', metadata.description);
    upsertMeta('property', 'og:image', trust.emblemPublicUrl);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', metadata.title);
    upsertMeta('name', 'twitter:description', metadata.description);
    upsertMeta('name', 'twitter:image', trust.emblemPublicUrl);

    const existingRobots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noindex) upsertMeta('name', 'robots', 'noindex,follow');
    else existingRobots?.remove();
  }, [metadata.title, metadata.description, noindex]);

  return null;
}
