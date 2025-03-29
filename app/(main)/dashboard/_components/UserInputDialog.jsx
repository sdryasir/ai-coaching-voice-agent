import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { CoachingExpertsList } from "@/services/Options";
import Image from "next/image";

function UserInputDialog({ children, option }) {


    const [selectedExpert, setSelectedExpert] = React.useState(null);

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{option?.name}</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-3">
              <h2 className="mb-2 text-black">
                Enter a topic to master your skills in {option.name}
              </h2>
              <Textarea placeholder="Enter your topic here" />

              <h2 className="my-2 text-black">Select your tutor</h2>
              <div className="flex gap-4">
                {CoachingExpertsList.map((item, index) => (
                    <div key={index} onClick={()=>setSelectedExpert(item.name)} className="bg-slate-100 hover:bg-slate-200 hover:rotate-10 transition-all  p-4 rounded-lg gap-4">
                    <Image
                        src={item.icons}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-16 h-16 d-block mx-auto rounded-full"
                    />
                    <div className="text-center mt-2 text-xl">{item.name}</div>
                    </div>
                ))}
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default UserInputDialog;
