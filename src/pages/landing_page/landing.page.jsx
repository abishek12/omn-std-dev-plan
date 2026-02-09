import ProgressCard from "./components/progress.card";
import StepCard from "./components/step.card";

// development plan rtk query
import { useGetUsersDevelopmentPlanQuery } from "../../lib/services/development-plan/development.plan.api";

const LearningRoadmap = () => {
  let { data, isLoading } = useGetUsersDevelopmentPlanQuery({ user_id: 1 });
  const items = data?.items ?? [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="min-h-screen bg-leep px-6 py-10">
      <ProgressCard />

      <section className="relative max-w-5xl mx-auto mt-16">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-blue-200 hidden md:block" />

        <div className="space-y-12">
          {items.map((step, index) => (
            <TimelineItem
              key={step.id}
              step={step}
              position={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

const TimelineItem = ({ step, position }) => {
  const isLeft = position === "left";

  return (
    <div className="relative flex md:justify-between items-start">
      {/* Left column */}
      <div className={`w-full md:w-5/12 ${isLeft ? "" : "md:invisible"}`}>
        <StepCard step={step} />
      </div>

      {/* Center dot */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 hidden md:flex">
        <div
          className={`h-4 w-4 rounded-full border-4
            ${
              step.status === "completed"
                ? "bg-green-500 border-green-200"
                : step.status === "in_progress"
                  ? "bg-blue-500 border-blue-200"
                  : "bg-gray-400 border-gray-200"
            }`}
        />
      </div>

      {/* Right column */}
      <div className={`w-full md:w-5/12 ${isLeft ? "md:invisible" : ""}`}>
        <StepCard step={step} />
      </div>
    </div>
  );
};

export default LearningRoadmap;
