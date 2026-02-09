import Theme1Layout from "@/components/theme-1/Layout";
import Theme2Layout from "@/components/theme-2/Layout";
import Theme3Layout from "@/components/theme-3/Layout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ theme: "1" }, { theme: "2" }, { theme: "3" }];
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ theme: string }>;
}) {
  const { theme } = await params;

  if (theme === "1") return <Theme1Layout>{children}</Theme1Layout>;
  if (theme === "2") return <Theme2Layout>{children}</Theme2Layout>;
  if (theme === "3") return <Theme3Layout>{children}</Theme3Layout>;

  notFound();
}
