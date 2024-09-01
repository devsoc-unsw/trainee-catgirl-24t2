import { buttonVariants } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
function UserDetails() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
    {/*I feel like i can definitely replace 80 with a const but idk how to...*/}
    
    <div className="w-dvw h-dvh flex flex-col align-center items-center gap-y-[5%]">
        {/*---Settings Section---*/}
        <h1 className= "pt-[2%] text-center">User details</h1>

        {/*---Account Settings---*/}
        <Link to="./account" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Account settings
            <ChevronRight className="w-vw h-vh" />
        </Link>

        {/*---Admin & Societies---*/}
        <Link to="/settings" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Admin & societies
            <ChevronRight className="w-vw h-vh" />
        </Link>
        

    </div>
    </>
    )
}

export default UserDetails
