"use client";

import { db } from "@/utils/db";
import { InterView } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import Questions from "./_components/Questions";

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  useEffect(() => {
    GetInterviewDetails();
  }, []);
  /* Used to get Interview Details by MockId/InterviewId*/

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(InterView)
      .where(eq(InterView.mockId, params.interviewId));
    setInterviewData(result[0]);

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    setInterviewData(result[0]);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Questions */}
        <Questions mockInterviewQuestion={mockInterviewQuestion} />

        {/* Video/Audio recording */}
      </div>
    </div>
  );
}

export default StartInterview;
