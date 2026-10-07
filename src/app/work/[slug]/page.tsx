import { notFound } from "next/navigation";
import { workData } from "@/data/workData";
import HeaderDetail from "@/app/components/work/HeaderDetail";
import AnotherProjectSection from "@/app/components/work/AnotherProjectSection";

export function generateStaticParams() {
  return workData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = workData.find((p) => p.slug === slug);
  return { title: project?.title };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = workData.find((p) => p.slug === slug);

  if (!project) notFound();

  const others = workData.filter((p) => p.slug !== slug);

  return (
    <>
      <HeaderDetail project={project} />
      <AnotherProjectSection others={others} />
    </>
  );
}
