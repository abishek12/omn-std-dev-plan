import Layout from "../../Layout";
import RoadmapDetailTemplate from "../../components/ui/RoadmapDetailTemplate";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const PlanOne = () => {
  return (
    <Layout>
      <RoadmapDetailTemplate
        title="Getting Started"
        description="Welcome to your learning journey! This step will guide you through the platform setup and course introduction."
        icon={<AcademicCapIcon className="h-8 w-8" />}
        color="from-blue-500 to-cyan-400"
        estimatedTime="1-2 hours"
        prerequisites={[
          "Create your account",
          "Review the syllabus",
          "Set up your learning environment",
        ]}
        resources={[
          {
            type: "video",
            title: "Welcome Video",
            description: "Introduction to the course and platform features",
            link: "#",
          },
          {
            type: "document",
            title: "Course Syllabus",
            description: "Detailed outline of topics and assessments",
            link: "#",
          },
        ]}
        actions={[
          {
            title: "Complete Profile Setup",
            description: "Fill out your profile and learning preferences",
            deadline: "Due in 2 days",
          },
          {
            title: "Join Course Discussion",
            description: "Introduce yourself in the course forum",
            deadline: "Due in 3 days",
          },
        ]}
        nextStepId={2}
        prevStepId={null}
        detailedContent={
          <div>
            <h2>Welcome to Your Learning Journey</h2>
            <p>
              Congratulations on taking the first step toward mastering new
              skills! This "Getting Started" module is designed to help you
              become familiar with our learning platform and set you up for
              success.
            </p>

            <h3>What You'll Accomplish</h3>
            <ul>
              <li>Set up your personalized learning environment</li>
              <li>Understand the course structure and expectations</li>
              <li>Connect with your instructors and peers</li>
              <li>Learn how to navigate the platform efficiently</li>
            </ul>

            <h3>Important Notes</h3>
            <p>
              Take your time with this step. A strong foundation will make the
              rest of your learning journey smoother and more enjoyable. If you
              have any questions, don't hesitate to reach out to your instructor
              or teaching assistant.
            </p>
          </div>
        }
      />
    </Layout>
  );
};

export default PlanOne;
