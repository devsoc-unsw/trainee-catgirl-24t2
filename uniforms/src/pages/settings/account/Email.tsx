import { buttonVariants } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
function Email() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        
    <div className="w-dvw h-dvh flex flex-col align-center items-center gap-y-[5%]">

        <h1 className= "pt-[2%] text-center">Email</h1>

        <Link to="/settings" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Account settings
            <ChevronRight className="w-vw h-vh" />
        </Link>

        <Link to="/settings" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Admin & societies
            <ChevronRight className="w-vw h-vh" />
        </Link>
        

    </div>
    </>
    )
}

export default Email
