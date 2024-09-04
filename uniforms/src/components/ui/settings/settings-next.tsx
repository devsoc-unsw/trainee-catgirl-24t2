import { buttonVariants } from "@/components/ui/button"
import { ChevronRight} from "lucide-react"
import { Link } from "react-router-dom"


const SettingsNext = ({ text, next }: { text: string, next: string }) => {
    return (
        <Link to={`./${next}`} className={" h-[6%] w-[80%] " + buttonVariants({ variant: "oblong" })}>
            {`${text}`}
            <ChevronRight className="w-vw h-vh" />
        </Link>
    )
}

export { SettingsNext }