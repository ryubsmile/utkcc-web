/*
 * reused function compilations
 */

/** threshold 배열 생성함수 */
export const thresholdArray = (steps: number) =>
  Array(steps + 1)
    .fill(0)
    .map((_, index) => index / steps || 0);

/** smooth scroll */
export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  // first prevent the default behavior
  e.preventDefault();
  const hash = e.currentTarget.hash;

  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, '');

  const isAtHomePage = href.replace(/.*\//, '') === hash;

  if (!isAtHomePage && window.innerWidth < 1024) {
    window.location.assign(`${window.location.origin}/${hash}`);
  }

  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: 'smooth',
    // block: 'end',
    // inline: 'nearest',
  });
  history.pushState(
    '',
    document.title,
    window.location.pathname + window.location.search + hash,
  );
};

const IS_SERVER = typeof window === 'undefined';
/** get the current base URL */
export function getURL(path: string) {
  const baseURL = IS_SERVER
    ? process.env.NEXT_PUBLIC_BASE_URL
    : window.location.origin;
  return new URL(path, baseURL).toString();
}

// import { getPlaiceholder } from 'plaiceholder';

// /**
//  * Get the base64 blurred image url from the href source url
//  */
// async function getBase64(imageUrl: string) {
//   try {
//     const res = await fetch(imageUrl);
//     if (!res.ok) {
//       throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
//     }

//     const buffer = await res.arrayBuffer();
//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));
//     return base64;
//   } catch (e) {
//     if (e instanceof Error) console.log(e.stack);
//   }
// }
