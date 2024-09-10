{/* Default size for this div is the entire screen :3*/}

import * as React from "react"
import { NavBar } from "./navbar"

const PageDiv = ({ children, type, variant, page }: { children: React.ReactNode, type?: string, variant:string, page:number }) => {
    if (variant == "m") {
        if (type == "settings-main") {
            return(
                <div className="w-dvw h-dvh flex flex-col align-center items-center gap-y-[5%]">
                    {children}
                </div>
        ) 
        {/*TODO: add settings-body-div and settings-title-div here */}
        }
    } else if (variant == "d") {
        if (type == "main") {
            return(
                <div className="flex w-dvw h-dvh">
                    <div className="w-[20%]">
                        <NavBar PageNum={page} variant = "d"></NavBar>
                    </div>
                    <div className="w-[80%] p-[10px]">
                        {children}
                    </div>
                </div>
            )
        }
    }
    {/* settings = */}
}
export { PageDiv }