import { ChevronLeft} from "lucide-react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils";
import React from "react";

interface TitleProps {
    text: string;
    type: string;
    prev?: string;
    className: string;
}

const Title = ({ text, type, prev, className }: TitleProps) => {
    if (type == "title") {
        return(
            <div className={cn("mx-auto container pt-5", className)}>
                <h1 className= "text-center">{`${text}`}</h1>
            </div>
        )
    } else if (type == "subtitle") {
        return(
        <div className={cn("mx-auto container p-3", className)}>
            <h2 className= "text-center">{`${text}`}</h2>
        </div>
        )
    } else if (type == "settings-title") {
        if (window.location !== window.parent.location) {
            return(
                <div className={cn("w-[100%]", className)}>
                    <h1 className= "w-[100%] pt-7 grow text-center">{`${text}`}</h1>
                </div>
            )
        } else {
            return(
                <div className={cn("flex w-[80%] items-center pt-7", className)}>
                    <Link to={`${prev}`} className="text-foreground hover:text-black">
                        <ChevronLeft className="grow-1 w-vw h-vh"></ChevronLeft>
                    </Link>
                    <h1 className= "grow text-center">{`${text}`}</h1>
                </div>
            )
        } 
        
    }

}

export { Title }