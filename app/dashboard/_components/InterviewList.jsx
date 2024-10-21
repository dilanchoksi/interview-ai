"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { db } from "@/utils/db";
import { InterView } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

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

  const onDelete = async (mockId) => {
    await db.delete(InterView).where(eq(InterView.mockId, mockId));
    getInterviewList();
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
    setInterviewList(result);
  };

  return (
    <div>
      <h2 className="font-medium text-lg">Previous Interviews</h2>
      <div>
        {interviewList.length == 0 && (
          <h2 className="text-gray-500">
            Nothing to see here. Get started above!
          </h2>
        )}
      </div>
      <div className="flex flex-wrap gap-5 my-3">
        {interviewList &&
          interviewList.map((interview, index) => (
            <div key={index} className="border shadow-sm rounded-lg p-3">
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

                <AlertDialog>
                  <AlertDialogTrigger variant="destructive">
                    <Button size="sm" variant="destructive">
                      Delete
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDelete(interview?.mockId)}
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default InterviewList;
