import Theme1Home from "@/components/theme-1/Home";
import Theme2Home from "@/components/theme-2/Home";
import Theme3Home from "@/components/theme-3/Home";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ theme: "1" }, { theme: "2" }, { theme: "3" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ theme: string }>;
}) {
  const { theme } = await params;

  if (theme === "1") return <Theme1Home />;
  if (theme === "2") return <Theme2Home />;
  if (theme === "3") return <Theme3Home />;

  notFound();
}
