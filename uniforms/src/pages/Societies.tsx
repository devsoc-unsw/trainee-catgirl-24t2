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

function Societies() {
    const { isDesktop } = screenDetector();
    const [search, setSearch] = useState("");
    return (
    <>
    {isDesktop && 
        <Page type="main" variant="desktop" page={2}>
        <div className="flex flex-col h-[100%]">
                <div className="flex flex-row justify-between p-[80px] items-center">
                        <Search placeholder="Search societies" setState={setSearch}></Search>
                    <Dropdown items={[
                        { value: "All", label: "All"},
                        { value: "Followed", label: "Followed"},
                        { value: "Not Followed", label: "Not Followed"},
                    ]} className="relative" category="Societies"></Dropdown>
                </div>
                <div className=" overflow-auto hide-scrollbar flex flex-col items-center ">
                    <SocietyBanner imageUrl="https://media.discordapp.net/attachments/1274960540233502781/1284406338427945091/die.png?ex=66e6841e&is=66e5329e&hm=49ea1c77a8760cc3b9e95ca98ec34cd36a4903e5f0a6d8ce0dffbfd8f0cbb482&=&format=webp&quality=lossless&width=1100&height=300"></SocietyBanner>
                    <div className="flex items-center justify-between w-[80%]">
                        <div className="grow-1"></div>
                        <div className="grow-0 flex items-center justify-between">
                        <p className="font-medium mr-2">Catgirl Appreciation Society</p>
                        <Link to={`${"/societies/view"}`} className={buttonVariants({ variant: "default" }) + "text-foreground hover:text-black"} >
                            <ChevronRight className="grow-1 w-vw h-vh"></ChevronRight>
                        </Link>
                        </div>
                    </div>

                    <SocietyBanner imageUrl="https://media.discordapp.net/attachments/1274960540233502781/1284406338427945091/die.png?ex=66e6841e&is=66e5329e&hm=49ea1c77a8760cc3b9e95ca98ec34cd36a4903e5f0a6d8ce0dffbfd8f0cbb482&=&format=webp&quality=lossless&width=1100&height=300"></SocietyBanner>
                    <div className="flex items-center justify-between w-[80%]">
                        <div className="grow-1"></div>
                        <div className="grow-0 flex items-center justify-between">
                        <p className="font-medium mr-2">Catgirl Appreciation Society</p>
                        <Link to={`${"/societies/view"}`} className={buttonVariants({ variant: "default" }) + "text-foreground hover:text-black"} >
                            <ChevronRight className="grow-1 w-vw h-vh"></ChevronRight>
                        </Link>
                        </div>
                    </div>

                    <SocietyBanner imageUrl="https://media.discordapp.net/attachments/1274960540233502781/1284406338427945091/die.png?ex=66e6841e&is=66e5329e&hm=49ea1c77a8760cc3b9e95ca98ec34cd36a4903e5f0a6d8ce0dffbfd8f0cbb482&=&format=webp&quality=lossless&width=1100&height=300"></SocietyBanner>
                    <div className="flex items-center justify-between w-[80%]">
                        <div className="grow-1"></div>
                        <div className="grow-0 flex items-center justify-between">
                        <p className="font-medium mr-2">Catgirl Appreciation Society</p>
                        <Link to={`${"/societies/view"}`} className={buttonVariants({ variant: "default" }) + "text-foreground hover:text-black"} >
                            <ChevronRight className="grow-1 w-vw h-vh"></ChevronRight>
                        </Link>
                        </div>
                    </div>

                    <SocietyBanner imageUrl="https://media.discordapp.net/attachments/1274960540233502781/1284406338427945091/die.png?ex=66e6841e&is=66e5329e&hm=49ea1c77a8760cc3b9e95ca98ec34cd36a4903e5f0a6d8ce0dffbfd8f0cbb482&=&format=webp&quality=lossless&width=1100&height=300"></SocietyBanner>
                    <div className="flex items-center justify-between w-[80%]">
                        <div className="grow-1"></div>
                        <div className="grow-0 flex items-center justify-between">
                        <p className="font-medium mr-2">Catgirl Appreciation Society</p>
                        <Link to={`${"/societies/view"}`} className={buttonVariants({ variant: "default" }) + "text-foreground hover:text-black"} >
                            <ChevronRight className="grow-1 w-vw h-vh"></ChevronRight>
                        </Link>
                        </div>
                    </div>

                    <SocietyBanner imageUrl="https://media.discordapp.net/attachments/1274960540233502781/1284406338427945091/die.png?ex=66e6841e&is=66e5329e&hm=49ea1c77a8760cc3b9e95ca98ec34cd36a4903e5f0a6d8ce0dffbfd8f0cbb482&=&format=webp&quality=lossless&width=1100&height=300"></SocietyBanner>
                    <div className="flex items-center justify-between w-[80%]">
                        <div className="grow-1"></div>
                        <div className="grow-0 flex items-center justify-between">
                        <p className="font-medium mr-2">Catgirl Appreciation Society</p>
                        <Link to={`${"/societies/view"}`} className={buttonVariants({ variant: "default" }) + "text-foreground hover:text-black"} >
                            <ChevronRight className="grow-1 w-vw h-vh"></ChevronRight>
                        </Link>
                        </div>
                    </div>

                    <SocietyBanner imageUrl="https://media.discordapp.net/attachments/1274960540233502781/1284406338427945091/die.png?ex=66e6841e&is=66e5329e&hm=49ea1c77a8760cc3b9e95ca98ec34cd36a4903e5f0a6d8ce0dffbfd8f0cbb482&=&format=webp&quality=lossless&width=1100&height=300"></SocietyBanner>
                    <div className="flex items-center justify-between w-[80%]">
                        <div className="grow-1"></div>
                        <div className="grow-0 flex items-center justify-between">
                        <p className="font-medium mr-2">Catgirl Appreciation Society</p>
                        <Link to={`${"/societies/view"}`} className={buttonVariants({ variant: "default" }) + "text-foreground hover:text-black"} >
                            <ChevronRight className="grow-1 w-vw h-vh"></ChevronRight>
                        </Link>
                        </div>
                    </div>

                </div>
        </div>
        </Page>
    }
    </>
    )
}

export default Societies