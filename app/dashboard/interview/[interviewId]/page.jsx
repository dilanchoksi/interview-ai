"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { InterView } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnabled, setWebCamEnabled] = useState(false);

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
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5">
          <div className="flex flex-col gap-5 p-5 rounded-lg border">
            <h2 className="text-lg">
              <strong> Job Position/Role: </strong>
              {interviewData ? interviewData.jobPos : "Loading..."}
            </h2>
            <h2 className="text-lg">
              <strong> Job Description: </strong>
              {interviewData ? interviewData.jobDesc : "Loading..."}
            </h2>
            <h2 className="text-lg">
              <strong> Years of Experience: </strong>
              {interviewData ? interviewData.jobExp : "Loading..."}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-500">
              Enable WebCam and Microphone to start your AI-Generated Mock
              Interview. There will be five questions for you to record your
              response, and you'll get a feedback report at the very end. NOTE:
              We never save your recordings, and you can disable WebCam access
              whenever you want.
            </h2>
          </div>
        </div>
        <div>
          {webCamEnabled ? (
            <Webcam
              className="border-2 border-primary rounded-lg"
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(false)}
              mirrored={true}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full my-4 p-20 bg-secondary rounded-lg border" />
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable WebCam and Microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Link href={`/dashboard/interview/${params.interviewId}/start`}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
}

export default Interview;
