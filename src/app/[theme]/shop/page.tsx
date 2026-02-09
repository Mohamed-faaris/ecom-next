import Theme1Shop from "@/components/theme-1/Shop";
import Theme2Shop from "@/components/theme-2/Shop";
import Theme3Shop from "@/components/theme-3/Shop";
import { notFound } from "next/navigation";

export default async function ShopPage({
  params,
  searchParams,
}: {
  params: Promise<{ theme: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { theme } = await params;
  const search = await searchParams; // Next.js 15 searchParams is a promise

  // Parse searchParams
  const category =
    typeof search.category === "string" ? search.category : undefined;

  if (theme === "1") return <Theme1Shop category={category} />;
  if (theme === "2") return <Theme2Shop category={category} />;
  if (theme === "3") return <Theme3Shop category={category} />;

  notFound();
}
