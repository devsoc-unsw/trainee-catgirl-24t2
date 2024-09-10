import { Button } from "@/components/ui/button"
import React from 'react'
import { Search } from 'lucide-react'
import { Menu } from 'lucide-react'
import { buttonVariants } from "@/components/ui/button"
import { Link } from "react-router-dom"
import ViewForms from "@/pages/ViewForms"

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
                <Button className="w-[160px] h-[60px] text-[16px] hover:text-foreground" variant={PageButton(1)} asChild>
                    <Link to="../viewforms">View Forms</Link>
                </Button>
                <Button className="w-[160px] h-[60px] text-[16px] hover:text-foreground" variant={PageButton(2)} asChild>
                    <Link to="../societies">Societies</Link>
                </Button>
                <Button className="w-[160px] h-[60px] text-[16px] hover:text-foreground" variant={PageButton(3)} asChild>
                    <Link to="../manage">Manage</Link>
                </Button>
                <Button className="w-[160px] h-[60px] text-[16px] hover:text-foreground" variant={PageButton(4)} asChild>
                    <Link to="../settings">Settings</Link>
                </Button>
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
                <Button className="w-[360px] h-[60px] text-[16px] rounded-[0px] hover:text-foreground" variant={PageButton(1)} asChild>
                    <Link to="../viewforms">View Forms</Link>
                </Button>
                <Button className="w-[360px] h-[60px] text-[16px] rounded-[0px] hover:text-foreground" variant={PageButton(2)} asChild>
                    <Link to="../societies">Societies</Link>
                </Button>
                <Button className="w-[360px] h-[60px] text-[16px] rounded-[0px] hover:text-foreground" variant={PageButton(3)} asChild>
                    <Link to="../manage">Manage</Link>
                </Button>
                <Button className="w-[360px] h-[60px] text-[16px] rounded-[0px] hover:text-foreground" variant={PageButton(4)} asChild>
                    <Link to="../settings">Settings</Link>
                </Button>
            </div>
        </div>
}

export { NavBar }