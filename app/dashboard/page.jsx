import React from "react";
import InterviewPrompt from "./_components/InterviewPrompt";
import InterviewList from "./_components/InterviewList";

const Dashboard = () => {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Dashboard</h2>
      <h2 className="text-gray-500">Create and start your interview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <InterviewPrompt />
      </div>

      {/* Previous interviews list */}
      <InterviewList />
    </div>
  );
};

export default Dashboard;
