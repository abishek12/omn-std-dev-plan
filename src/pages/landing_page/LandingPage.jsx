import React, { useState } from "react";

import RoadmapCard from "../../components/landing/RoadmapCard";
import ProgressSummary from "../../components/landing/ProgressSummary";
import Footer from "../../components/footer/Footer";
import RoadmapHeader from "../../components/landing/RoadmapHeader";

import roadMapItems from "../../lib/data/roadmap.item";

const LearningRoadmap = () => {
  const [roadmapItems, setRoadmapItems] = useState(roadMapItems);

  const completeItem = (itemId) => {
    setRoadmapItems((prevItems) => {
      const updatedItems = [...prevItems];
      const currentIndex = updatedItems.findIndex((item) => item.id === itemId);

      if (currentIndex >= 0 && currentIndex < updatedItems.length) {
        // Mark current as completed
        updatedItems[currentIndex].status = "completed";
        updatedItems[currentIndex].progress = 100;

        // Unlock the next item if exists
        if (currentIndex < updatedItems.length - 1) {
          updatedItems[currentIndex + 1].status = "current";
          updatedItems[currentIndex + 1].progress = 30; // Start with 30% progress for next item
        }
      }

      return updatedItems;
    });
  };

  const resetRoadmap = () => {
    setRoadmapItems((prevItems) => {
      return prevItems.map((item, index) => ({
        ...item,
        status: index === 0 ? "completed" : index === 1 ? "current" : "locked",
        progress: index === 0 ? 100 : index === 1 ? 60 : 0,
      }));
    });
  };

  const fastForward = () => {
    const currentItem = roadmapItems.find((item) => item.status === "current");
    if (currentItem) {
      completeItem(currentItem.id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <RoadmapHeader />

        {/* Enhanced Progress Summary */}
        <div className="mb-16">
          <ProgressSummary
            roadmapItems={roadmapItems}
            onReset={resetRoadmap}
            onFastForward={fastForward}
          />
        </div>

        {/* Roadmap Container */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-rose-500 hidden md:block"></div>

          {/* Roadmap Items using RoadmapCard component */}
          <div className="space-y-8 md:space-y-12">
            {roadmapItems.map((item, index) => (
              <RoadmapCard
                key={item.id}
                item={item}
                index={index}
                totalItems={roadmapItems.length}
                isEven={index % 2 === 0}
                onComplete={completeItem}
              />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <Footer />
      </div>
    </div>
  );
};

export default LearningRoadmap;
