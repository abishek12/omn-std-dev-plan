import Layout from "../../Layout";
import RoadmapDetailTemplate from "../../components/ui/RoadmapDetailTemplate";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const PlanOne = () => {
  const location = useLocation();
  const items = location.state?.items;
  return (
    <Layout>
      <RoadmapDetailTemplate
        title={items?.title ?? ""}
        description={items?.short_description ?? ""}
        icon={<AcademicCapIcon className="h-8 w-8" />}
        color="from-blue-500 to-cyan-400"
        estimatedTime={items?.duration ?? "1 weeks"}
        prerequisites={items?.prerequisites ?? []}
        resources={items?.resources ?? []}
        nextStepId={2}
        prevStepId={null}
        detailedContent={items?.description}
      />
    </Layout>
  );
};

export default PlanOne;
