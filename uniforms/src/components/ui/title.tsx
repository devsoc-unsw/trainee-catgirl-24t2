import { ChevronLeft} from "lucide-react"
import { Link } from "react-router-dom"
import { buttonVariants } from "./button"

const Title = ({ text, type, prev }: { text: string, type: string, prev?: string }) => {
    if (type == "title") {
        return(
            <div className="mx-auto container pt-5">
                <h1 className= "text-center">{`${text}`}</h1>
            </div>
        )
    } else if (type == "title-back") {
        return(
            <div className="flex p-[20px] rounded-2xl items-center ">
                <Link to={`${prev}`} className={buttonVariants({ variant: "default" }) + "text-foreground hover:text-black"} >
                    <ChevronLeft className="grow-1 w-vw h-vh"></ChevronLeft>
                </Link>
                <h1 className= "grow text-center h-10">{`${text}`}</h1>
            </div>
        )
    } else if (type == "subtitle") {
        return(
        <div className="mx-auto container p-3">
            <h2 className= "text-center">{`${text}`}</h2>
        </div>
        )
    } else if (type == "settings-title") {
        if (window.location !== window.parent.location) {
            return(
                <div className="w-[100%]">
                    <h1 className= "w-[100%] pt-7 grow text-center">{`${text}`}</h1>
                </div>
            )
        } else {
            return(
                <div className="flex w-[80%] items-center pt-7">
                    <Link to={`${prev}`} className="text-foreground hover:text-black">
                        <ChevronLeft className="grow-1 w-vw h-vh"></ChevronLeft>
                    </Link>
                    <h1 className= "grow text-center">{`${text}`}</h1>
                </div>
            )
        } 
        
    }

}

export { Title }