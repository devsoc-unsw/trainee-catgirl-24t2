import * as React from "react";
import { buttonVariants } from "@/components/ui/button"
import { ChevronRight} from "lucide-react"
import { Link } from "react-router-dom"
import { screenDetector } from "@/utils/screenDetector"

interface SettingsNextProps {
    text: string,
    next: string,
    active?: string,
    setActive?: React.Dispatch<React.SetStateAction<string>>
}
const SettingsNext = ({ text, next, active, setActive }: SettingsNextProps) => {
    const { isMobile, isDesktop } = screenDetector();
    if (active == next && isDesktop) {
        return(
            <Link onClick={() => setActive!(next) } to="" className={"bg-tertiary-hover w-[100%] my-1 " + buttonVariants({ variant: "setting" })}>
                {`${text}`}
            </Link>
            )
    } else if (isDesktop) {
        return(
        <Link onClick={() => setActive!(next) } to="" className={" w-[100%] my-1 " + buttonVariants({ variant: "setting" })}>
            {`${text}`}
        </Link>
        )
    } else if (isMobile) {
        return(
            <Link to={`./${next}`} className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
                {`${text}`}
                <ChevronRight className="w-vw h-vh" />
            </Link>
        )
    }
}

export { SettingsNext }