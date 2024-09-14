import { NavBar } from "@/components/ui/navbar"
import { CardGrid } from "@/components/ui/card-grid"
import { SocietyCard } from "@/components/ui/card-society"
import { Search } from "@/components/ui/search"
import { useState } from "react"
import { Dropdown } from "@/components/ui/dropdown"

function ViewForms () {
    const [search, setSearch] = useState("")
    return (
        <div className="flex flex-row h-[100vh]">
            <div className="w-20%"></div>
            <NavBar PageNum={1} variant = "desktop"></NavBar>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between p-[80px] items-center">
                        <Search placeholder="Search event" setState={setSearch}></Search>
                    <Dropdown items={[
                        { value: "DevSoc", label: "DevSoc"},
                        { value: "EngSoc", label: "EngSoc"},
                        { value: "AUNSW", label: "AUNSW"},
                        { value: "PokeSoc", label: "PokeSoc"},
                    ]} className="relative" category="Societies"></Dropdown>
                </div>
                <div className="flex w-[80vw] justify-center overflow-auto hide-scrollbar h-[100vh]">
                    <CardGrid variant="desktop">
                        <SocietyCard variant="desktop" cardText="Weekly Gaming Session with DevSoc" societyText="DevSocUNSW"></SocietyCard> 
                    </CardGrid>
                </div>
            </div>
        </div>
    )
}

export default ViewForms