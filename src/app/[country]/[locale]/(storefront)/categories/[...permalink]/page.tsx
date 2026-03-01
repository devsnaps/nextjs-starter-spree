import { redirect } from "next/navigation";

const TAXONOMY_PREFIX = "categories/";

function toCategorySlugPath(permalink: string): string {
  return permalink.startsWith(TAXONOMY_PREFIX)
    ? permalink.slice(TAXONOMY_PREFIX.length)
    : permalink;
}

interface LegacyCategoriesPageProps {
  params: Promise<{
    country: string;
    locale: string;
    permalink: string[];
  }>;
}

export default async function LegacyCategoriesPage({
  params,
}: LegacyCategoriesPageProps) {
  const { country, locale, permalink } = await params;
  redirect(
    `/${country}/${locale}/collections/${toCategorySlugPath(permalink.join("/"))}`,
  );
}
