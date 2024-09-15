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

function ManageForms() {
    const { isDesktop } = screenDetector();
    const [search, setSearch] = useState("");
    return (
    <>
    {isDesktop && 
        <Page type="main" variant="desktop" page={3}>
        <div className="flex flex-col h-[100%]">
                <div className="flex flex-row justify-between p-[80px] items-center">
                        <Search placeholder="Search forms" setState={setSearch}></Search>
                    <Dropdown items={[
                        { value: "All forms", label: "All forms"},
                        { value: "Owned by you", label: "Owned by you"},
                        { value: "Owned by others", label: "Owned by others"},
                    ]} className="relative" category="Forms"></Dropdown>
                </div>
                <div className=" overflow-auto hide-scrollbar flex flex-col items-center ">
                <div className="flex w-[80vw] justify-center overflow-auto hide-scrollbar h-[100vh]">
                    <CardGrid variant="desktop" editable={true}>
                        <SocietyCard variant="desktop" cardText="Never gonna give you up" societyText="Potato"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="Never gonna let you down" societyText="Potato"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="Never gonna run around" societyText="Potato"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="And desert you" societyText="Potato"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="Never gonna make you cry" societyText="Potato"></SocietyCard> 
                        <SocietyCard variant="desktop" cardText="Weekly Gaming Session with DevSoc" societyText="Potato"></SocietyCard> 
                    </CardGrid>
                </div>
                </div>
        </div>
        </Page>
    }
    </>
    )
}

export default ManageForms