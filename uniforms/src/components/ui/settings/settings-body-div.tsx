import * as React from "react"

const SettingsBodyDiv = ({ children }: { children: React.ReactNode }) => {
    return(
        <div className="w-dvw h-full flex flex-col align-center items-center gap-y-[5%]">
            {children}
        </div>
    )
}

export { SettingsBodyDiv }