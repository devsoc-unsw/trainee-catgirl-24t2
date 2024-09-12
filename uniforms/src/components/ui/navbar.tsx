import { Button } from "@/components/ui/button"
import React from 'react'
import { Search } from 'lucide-react'
import { Menu } from 'lucide-react'
import { Link } from "react-router-dom"

interface NavBarProps {
    PageNum: number;
    variant: string;
}

const NavBar: React.FC<NavBarProps> = ( {PageNum, variant} ) => {

    const PageButton = (index: number) => {
        return index === PageNum ? "active" : "default";
    };

    return variant === "desktop" ?
        <div className="w-[20vw] h-[100vh] flex flex-col bg-primary p-[50px]">
            {/* Title at the top */}
            <div className="flex flex-col items-center gap-[50px]">
                <p className="text-4xl font-bold">UNIFORM</p>
            </div>

            {/* Buttons to the center */}
            
            <div className="flex-grow flex flex-col justify-center items-center gap-[20px]">
                <Button className="w-[80%] max-w-[160px] h-[60px] text-[16px]" variant={PageButton(1)}>View Forms</Button>
                <Button className="w-[80%] max-w-[160px] h-[60px] text-[16px]" variant={PageButton(2)}>Societies</Button>
                <Button className="w-[80%] max-w-[160px]] h-[60px] text-[16px]" variant={PageButton(3)}>Manage</Button>
                <Button className="w-[80%] max-w-[160px] h-[60px] text-[16px]" variant={PageButton(4)}>Settings</Button>
            </div>

            {/* Bottom text and logout */}
            <div className="flex flex-col items-center gap-[20px]">
                <p>Logged in as Potato</p>
                <Button variant="destructive">Logout</Button>
            </div>
        </div>
    :
        /* made the default variant as mobile */
        <div className="w-[100vh] max-w-[360px] flex flex-col bg-primary">
            <div className="h-[96px] flex flex-row justify-between p-[30px] items-center bg-primary">
                <p className="text-2xl font-bold">UNIFORM</p>
                <div className="text-black flex flex-row gap-[20px] items-center">
                    <Search></Search>
                    <Menu className="h-[40px] w-[40px]"></Menu>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Button className="w-[100%] max-w-[360px] h-[60px] text-[16px] rounded-[0px]" variant={PageButton(1)}>View Forms</Button>
                <Button className="w-[100%] max-w-[360px] h-[60px] text-[16px] rounded-[0px]" variant={PageButton(2)}>Societies</Button>
                <Button className="w-[100%] max-w-[360px] h-[60px] text-[16px] rounded-[0px]" variant={PageButton(3)}>Manage</Button>
                <Button className="w-[100%] max-w-[360px] h-[60px] text-[16px] rounded-[0px]" variant={PageButton(4)}>Settings</Button>
            </div>
        </div>
}

export { NavBar }