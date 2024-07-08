import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";


const HoverInfo = ({trigger, content}: {trigger: string, content: string}) => {
  return (
    <HoverCard>
      <HoverCardTrigger className="text-blue-1 ">
        <div className="flex">
        {trigger}

        </div>
      </HoverCardTrigger>
      <HoverCardContent>
        {content}
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverInfo;
