import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Questions = () => {
  return (
    <div className="min-w-[300px] md:min-w-[500px]">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it Cotton?</AccordionTrigger>
          <AccordionContent>
            Yes. It is cotton made to waer in the hottest of months in India,
            while you maintain your style.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>When is it gonna be delivered to me?</AccordionTrigger>
          <AccordionContent>
            We will deliver this package within a 7 to 14 days from the time of ordering.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is my size Available?</AccordionTrigger>
          <AccordionContent>
            You can select your prferred size on the next page, which can be reached by chicking the 
            <span className="text-blue-1 text-lg">Buy Now</span> button.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is the delivery available throughout India?</AccordionTrigger>
          <AccordionContent>
            Yes, our partners have a all India service.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Questions;
