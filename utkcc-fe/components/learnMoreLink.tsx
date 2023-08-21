import Link from 'next/link';

/**
 * subpage link generator.
 * use only if there is a subpage.
 */
export default function LearnMoreLink({ name }: { name: string }) {
  return (
    <Link
      href={`/${name}`}
      className="block my-3 underline underline-offset-[6px] text-kcc-gray"
    >
      Learn more
    </Link>
  );
}
