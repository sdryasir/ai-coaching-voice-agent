"use client";
import { Button } from "@/components/ui/button";
import { ExpertsList } from "@/services/Options";
import { useUser } from "@stackframe/stack";
import Image from "next/image";
import React from "react";
import UserInputDialog from "./UserInputDialog";

function FeatureAssistants() {
  const user = useUser();
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-grey-500">My Workspace</h1>
          <p className="text-3xl font-bold">Welcome back {user?.displayName}</p>
        </div>
        <Button>Profile</Button>
      </div>
      <div className="flex items-center gap-12 my-12">
        {ExpertsList.map((item, index) => (
          <div key={index}>
            <UserInputDialog option={item}>
                <div className="bg-slate-100 hover:bg-slate-200 hover:rotate-10 transition-all  p-4 rounded-lg gap-4">
                  <Image
                    src={item.icons}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="w-16 h-16 d-block mx-auto"
                  />
                  <div>{item.name}</div>
                </div>
            </UserInputDialog>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureAssistants;
