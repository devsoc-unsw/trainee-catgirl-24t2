import { NavBar } from "@/components/ui/navbar"
import { CardGrid } from "@/components/ui/card-grid"
import { SocietyCard } from "@/components/ui/card-society"
import { Search } from "@/components/ui/search"
import { useState } from "react"
import { Dropdown } from "@/components/ui/dropdown"
import { ChevronLeft} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocietyBanner } from "@/components/ui/society-banner"
import { Title } from "@/components/ui/title"

function ViewForms () {
    const [search, setSearch] = useState("")
    return (
        <div className="flex flex-row h-[100vh]">
            <div className="w-20%"></div>
            <NavBar PageNum={1} variant = "desktop"></NavBar>
            <div className="flex flex-col items-center">
                <div className="flex flex-row justify-between p-[30px] items-center ml-[80px] mr-[80px] gap-[30%] w-[80%]">
                    <Button className="p-[20px] rounded-2xl items-center ">
                        <ChevronLeft></ChevronLeft>
                    </Button>
                    <Search placeholder="Search event" setState={setSearch}></Search>
                </div>
                <div className="overflow-auto hide-scrollbar flex flex-col items-center">
                    <SocietyBanner imageUrl="https://media.discordapp.net/attachments/1274960540233502781/1284406338427945091/die.png?ex=66e6841e&is=66e5329e&hm=49ea1c77a8760cc3b9e95ca98ec34cd36a4903e5f0a6d8ce0dffbfd8f0cbb482&=&format=webp&quality=lossless&width=1100&height=688"></SocietyBanner>
                    <div className="flex flex-row justify-between items-center w-[80%] mb-[10px] p-[10px]">
                        <Title className="flex items-center justify-between p-0 ml-[20px]" text="Catgirl Appreciation Society" type="title"></Title>
                        <Button className="h-[100%]">Follow Society</Button>
                    </div>
                    <div className="flex flex-row justify-between items-left w-[80%] mb-[20px] ml-[60px]">
                        <p>Description</p>
                    </div>
                    <div className="flex w-[80vw] justify-center h-[100vh]">
                        <CardGrid variant="desktop">
                            <SocietyCard variant="desktop" cardText="Weekly Gaming Session with DevSoc" societyText="DevSocUNSW"></SocietyCard> 
                            <SocietyCard variant="desktop" cardText="Weekly Gaming Session with DevSoc" societyText="DevSocUNSW"></SocietyCard> 
                            <SocietyCard variant="desktop" cardText="Weekly Gaming Session with DevSoc" societyText="DevSocUNSW"></SocietyCard> 
                            <SocietyCard variant="desktop" cardText="Weekly Gaming Session with DevSoc" societyText="DevSocUNSW"></SocietyCard> 
                            <SocietyCard variant="desktop" cardText="Weekly Gaming Session with DevSoc" societyText="DevSocUNSW"></SocietyCard>
                        </CardGrid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewForms