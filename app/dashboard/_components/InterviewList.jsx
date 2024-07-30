"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { InterView } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function InterviewList() {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const router = useRouter();

  const onStart = (mockId) => {
    router.push(`/dashboard/interview/${mockId}`);
  };

  const onFeedback = (mockId) => {
    router.push(`/dashboard/interview/${mockId}/feedback`);
  };

  useEffect(() => {
    user && getInterviewList();
  }, [user]);

  const getInterviewList = async () => {
    const result = await db
      .select()
      .from(InterView)
      .where(eq(InterView.createdBy, user?.primaryEmailAddress.emailAddress))
      .orderBy(desc(InterView.id));

    console.log(result);
    setInterviewList(result);
  };

  return (
    <div>
      <h2 className="font-medium text-lg">Previous Interviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {interviewList &&
          interviewList.map((interview, index) => (
            <div className="border shadow-sm rounded-lg p-3">
              <h2 className="font-bold text-primary">{interview?.jobPos}</h2>
              <h2 className="text-sm text-zinc-600">
                {interview?.jobExp} Years of Experience
              </h2>
              <h2 className="text-xs text-zinc-400">
                Created on {interview?.createdAt}
              </h2>
              <div className="flex justify-between mt-2 gap-5">
                <Button
                  size="sm"
                  className="w-full"
                  onClick={() => onStart(interview?.mockId)}
                >
                  Continue
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => onFeedback(interview?.mockId)}
                >
                  Feedback
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default InterviewList;
