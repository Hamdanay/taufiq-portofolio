const META_IMAGE_PATH = '/profile_photo.png';

export function applySocialMetaTags() {
  if (typeof document === 'undefined') return;

  const origin = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')
    || window.location.origin;
  const imageUrl = `${origin}${META_IMAGE_PATH}`;

  const setMeta = (selector: string, content: string) => {
    const el = document.querySelector<HTMLMetaElement>(selector);
    if (el) el.content = content;
  };

  setMeta('meta[property="og:image"]', imageUrl);
  setMeta('meta[name="twitter:image"]', imageUrl);
  setMeta('meta[property="og:url"]', `${origin}/`);
}
