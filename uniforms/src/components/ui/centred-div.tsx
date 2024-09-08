{/* Default size for this div is the entire screen :3*/}

import * as React from "react"

const CentredDiv = ({ children }: { children: React.ReactNode }) => {
    return(
        <div className="w-dvw h-dvh flex flex-col align-center items-center gap-y-[5%]">
            {children}
        </div>
    )
}

export { CentredDiv }