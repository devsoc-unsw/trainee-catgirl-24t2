{/* Default size for this div is the entire screen :3*/}

import * as React from "react"
import { NavBar } from "./navbar"

const Page = ({ children, type, variant, page }: { children: React.ReactNode, type?: string, variant:string, page:number }) => {
    if (variant == "mobile") {
        if (type == "settings-main") {
            return(
                <div className="w-dvw h-dvh flex flex-col align-center items-center gap-y-[5%]">
                    {children}
                </div>
        ) 
        {/*TODO: add settings-body-div and settings-title-div here */}
        }
    } else if (variant == "desktop") {
        if (type == "main") {
            return(
                <div className="flex w-dvw h-dvh">
                    <div className="w-[20%]">
                        <NavBar PageNum={page} variant = "desktop"></NavBar>
                    </div>
                    <div className="w-[80%]">
                        {children}
                    </div>
                </div>
            )
        }
    }
    {/* settings = */}
}
export { Page }