import { screenDetector } from "@/utils/screenDetector"
import { Page } from "@/components/ui/page"
import { Title } from "@/components/ui/title"
import { Search } from "@/components/ui/search";
import { Dropdown } from "@/components/ui/dropdown";
import { useState } from "react"
import { SocietyBanner } from "@/components/ui/society-banner";
import { Button } from "@/components/ui/button";
import { SocietyCard } from "@/components/ui/card-society";
import { CardGrid } from "@/components/ui/card-grid";
import { Link } from "react-router-dom"
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

function SocietyManage() {
    const { isDesktop } = screenDetector();
    const [search, setSearch] = useState("");
    return (
    <>
    {isDesktop && 
        <Page type="main" variant="desktop" page={4}>
        <div className="flex flex-col h-[100%]">
                <div className="pl-7 w-[80%]">
                    <Title text="Catgirl Appreciation Society" type="title-back" prev="/managesocieties"></Title>
                </div>
                <div className="overflow-auto hide-scrollbar flex flex-col items-center pt-[20px]">
                    <SocietyBanner imageUrl="https://media.discordapp.net/attachments/1274960540233502781/1284406338427945091/die.png?ex=66e6841e&is=66e5329e&hm=49ea1c77a8760cc3b9e95ca98ec34cd36a4903e5f0a6d8ce0dffbfd8f0cbb482&=&format=webp&quality=lossless&width=1100&height=600"></SocietyBanner>
                    <div className="flex w-[80%] justify-between">
                        <p>Permission level: Moderator</p>
                        <Link to={`${"./members"}`} className={buttonVariants({ variant: "default" }) + "text-foreground hover:text-black"} >
                            <p>View Members</p>
                        </Link>
                    </div>
                    <CardGrid variant="desktop" editable={true}>
                        <SocietyCard variant="desktop" cardText="Never gonna give you up" societyText="Catgirl Appreciation Society"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="Never gonna let you down" societyText="Catgirl Appreciation Society"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="Never gonna run around" societyText="Catgirl Appreciation Society"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="And desert you" societyText="Catgirl Appreciation Society"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="Never gonna make you cry" societyText="Catgirl Appreciation Society"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="the duck walked up to the lemonade stand and he said the man running the stands" societyText="Catgirl Appreciation Society"></SocietyCard> 
                    </CardGrid>
                </div>
        </div>
        </Page>
    }
    </>
    )
}

export default SocietyManage