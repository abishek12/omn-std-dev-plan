import ProgressCard from "./components/progress.card";
import StepCard from "./components/step.card";

import roadMapItems from "../../lib/data/roadmap.item";

const LearningRoadmap = () => {
  return (
    <main className="min-h-screen bg-leep px-6 py-10">
      <ProgressCard />
      <section className="w-full max-w-6xl mx-auto mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {roadMapItems.map((step) => (
          <StepCard key={step.id} step={step} />
        ))}
      </section>
    </main>
  );
};

export default LearningRoadmap;
