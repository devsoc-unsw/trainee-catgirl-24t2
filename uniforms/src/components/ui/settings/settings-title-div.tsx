import { ChevronLeft} from "lucide-react"
import { Link } from "react-router-dom"

const SettingsTitleDiv = ({ text, prev }: { text: string, prev: string }) => {
    return(
        <div className="flex w-[80%] items-center pt-[5%]">
            <Link to={`${prev}`} className="text-foreground hover:text-black">
            <ChevronLeft className="grow-1 w-vw h-vh"></ChevronLeft>
            </Link>
            <h1 className= "grow text-center">{`${text}`}</h1>
        </div>
    )
}

export { SettingsTitleDiv }