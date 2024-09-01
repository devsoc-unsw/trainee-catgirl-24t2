import { buttonVariants } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
function AccountSettings() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
    {/*I feel like i can definitely replace 80 with a const but idk how to...*/}
    
    <div className="w-dvw h-dvh flex flex-col align-center items-center gap-y-[5%]">
        <h1 className= "pt-[2%] text-center">Account settings</h1>

        <p>Username goes here!</p>

        {/*---Email---*/}
        <Link to="./email" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Email
            <ChevronRight className="w-vw h-vh" />
        </Link>

        {/*---Username---*/}
        <Link to="./username" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Username
            <ChevronRight className="w-vw h-vh" />
        </Link>

        {/*---Password---*/}
        <Link to="./password" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Password
            <ChevronRight className="w-vw h-vh" />
        </Link>

        {/*---Delete Account---*/}
        <Link to="./delete" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Delete account
            <ChevronRight className="w-vw h-vh" />
        </Link>
        

    </div>
    </>
    )
}

export default AccountSettings
