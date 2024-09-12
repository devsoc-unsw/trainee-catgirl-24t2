import { Button } from "@/components/ui/button"
import React from "react";
import { ChevronRight } from 'lucide-react';

interface CardProps {
  variant: string;
}
const Card: React.FC<CardProps> = ({ variant }) => {
    return variant === "d" ?
      <Button
        /* Professional Figma Dev Mode user*/
        className="flex-grow flex flex-col justify-end items-center rounded-[20px] w-[20vw] max-w-[220px] h-[251px] hover:animate-scale"
        style={{
          background: `linear-gradient(180deg, rgba(236, 230, 240, 0.00) 0%, #FDD6EB 75.5%), linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)`,
          border: 'none',
          boxShadow: 'none'
        }}
      >
        <div className="space-y-3 p-[10px]">
        { /*Can add card text as an input later maybe*/ }
        <p className="text-lg text-black">Card Text</p>
        { /*Can add society text as an input later maybe*/ }
        <p className="text-sm text-black">Society</p>
        </div>
      </Button>
    :
      /* set mobile card as default */
      <Button
        className="flex flex-row justify-between items-center rounded-[20px] w-[80vw] max-w-[260px] h-[45px] hover:animate-stretch"
        style={{
          background: `linear-gradient(270deg, rgba(236, 230, 240, 0.00) 0%, #FDD6EB 75.5%), linear-gradient(90deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)`,
          border: 'none',
          boxShadow: 'none'
        }}
      >
        <div className="flex flex-row items-center space-x-1 p-[10px]">
          <p className="text-m text-black font-bold">Society</p>
          <p className="text-m text-black">Event Name</p>
        </div>
        <ChevronRight className="text-black"></ChevronRight>
      </Button>
  };
  
  export { Card }