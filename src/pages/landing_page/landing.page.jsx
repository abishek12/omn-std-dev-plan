import ProgressCard from "./components/progress.card";
import StepCard from "./components/step.card";

// development plan rtk query
import { useGetUsersDevelopmentPlanQuery } from "../../lib/services/development-plan/development.plan.api";

const LearningRoadmap = () => {
  let { data: items, isLoading } = useGetUsersDevelopmentPlanQuery({
    user_id: 1,
  });
  items = items?.items;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="min-h-screen bg-leep px-6 py-10">
      <ProgressCard />
      <section className="w-full max-w-6xl mx-auto mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {items?.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </section>
    </main>
  );
};

export default LearningRoadmap;
