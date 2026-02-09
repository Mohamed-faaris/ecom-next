import Theme1Cart from "@/components/theme-1/Cart";
import Theme2Cart from "@/components/theme-2/Cart";
import Theme3Cart from "@/components/theme-3/Cart";
import { notFound } from "next/navigation";

export default async function CartPage({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme } = await params;

  if (theme === "1") return <Theme1Cart />;
  if (theme === "2") return <Theme2Cart />;
  if (theme === "3") return <Theme3Cart />;

  notFound();
}
