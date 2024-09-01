import { Button } from "@/components/ui/button"
import React from "react";

interface CardProps {
  imageUrl: string;
}
const Card: React.FC<CardProps> = ({ imageUrl }) => {
    return (
      <Button
        className="flex-grow flex flex-col justify-end items-center rounded-[20px] w-[220px] h-[251px] p-[10px]"
        style={{
          background: `linear-gradient(180deg, rgba(236, 230, 240, 0.00) 0%, #FDD6EB 75.5%), 
                        linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), 
                        url('${imageUrl}$') lightgray 50% / cover no-repeat`,
        }}
      >
        <div className="space-y-3 p-[10px]">
        <p className="text-lg text-black">Card Text</p>
        <p className="text-sm text-black">Society</p>
        </div>
      </Button>
    );
  };
  
  export { Card }