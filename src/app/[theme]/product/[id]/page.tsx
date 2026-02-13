import Theme1Product from "@/components/theme-1/Product";
import Theme2Product from "@/components/theme-2/Product";
import Theme3Product from "@/components/theme-3/Product";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export async function generateStaticParams() {
  const params = [];
  for (const theme of ["1", "2", "3"]) {
    for (const product of products) {
      params.push({ theme, id: product.id });
    }
  }
  return params;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ theme: string; id: string }>;
}) {
  const { theme, id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) return notFound();

  if (theme === "1") return <Theme1Product product={product} />;
  if (theme === "2") return <Theme2Product product={product} />;
  if (theme === "3") return <Theme3Product product={product} />;

  notFound();
}
