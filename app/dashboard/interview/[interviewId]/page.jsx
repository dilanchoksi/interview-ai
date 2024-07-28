"use client";
import { db } from "@/utils/db";
import { InterView } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect } from "react";

function Interview({ params }) {
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(InterView)
      .where(eq(InterView.mockId, params.interviewId));
    console.log(result);
  };
  return <div>Interview</div>;
}

export default Interview;
