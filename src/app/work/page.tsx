import CardProject from "../components/work/CardProject";
import { workData } from "../data/workData";
export default function Work() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="xl:text-4xl font-medium">Latest Project</h2>
      </div>
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {workData.map((p) => (
          <CardProject key={p.slug} project={p} variant="compact" />
        ))}
      </div>
    </section>
  );
}
