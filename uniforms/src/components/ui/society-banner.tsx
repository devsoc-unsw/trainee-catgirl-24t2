import { Card } from "@/components/ui/card"
import React from "react";

interface SocietyBannerProps {
    imageUrl: string;
}

const SocietyBanner: React.FC<SocietyBannerProps> = ({ imageUrl }) => {
    return (
        <Card className="w-[80%] h-[50%] rounded-2xl p-0">
            <img src={imageUrl} className="w-[100%] h-[100%] rounded-2xl"></img>
        </Card>
    )
}


export { SocietyBanner }