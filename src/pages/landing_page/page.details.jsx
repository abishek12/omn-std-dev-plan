import { useLocation } from "react-router-dom";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import Layout from "../../Layout";
import RoadmapDetailTemplate from "../../components/ui/RoadmapDetailTemplate";

const PageDetails = () => {
  const location = useLocation();
  const items = location.state?.items;

  if (!items) {
    return (
      <Layout>
        <div className="flex h-[50vh] items-center justify-center">
          <p className="text-gray-500">
            No details available. Please select a step from the roadmap.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <RoadmapDetailTemplate
        title={items.title || ""}
        description={items.short_description || items.caption || ""}
        icon={<AcademicCapIcon className="h-8 w-8" />}
        color={items.color || "from-blue-500 to-cyan-400"}
        estimatedTime={items.duration || ""}
        prerequisites={items.prerequisites || []}
        resources={items.resources || []}
        actions={items.actions || []}
        nextStepId={items.nextStepId}
        prevStepId={items.prevStepId}
        detailedContent={items.detailedContent || items.description}
      />
    </Layout>
  );
};

export default PageDetails;
