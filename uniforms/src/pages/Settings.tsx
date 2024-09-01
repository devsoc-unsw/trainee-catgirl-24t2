import { buttonVariants } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
function Settings() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
    {/*I feel like i can definitely replace 80 with a const but thats a problem for later...*/}
    
    <div className="w-dvw h-dvh flex flex-col align-center items-center gap-y-[5%]">
        {/*---Settings Section---*/}
        <h1 className= "pt-[2%] text-center">Settings</h1>

        {/*---User Details---*/}
        <Link to="./user" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            User details
            <ChevronRight className="w-vw h-vh" />
        </Link>

        {/*---Form Autofill Details---*/}
        <Link to="/settings" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Form autofill details
            <ChevronRight className="w-vw h-vh" />
        </Link>
        
        {/*---Support Section---*/}
        <h1 className= "text-center">Support</h1>

        {/*---Contact Us---*/}
        <Link to="/settings" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            Contact us
            <ChevronRight className="w-vw h-vh" />
        </Link>

        {/*---About---*/}
        <Link to="/settings" className={" w-[80%] " + buttonVariants({ variant: "oblong" })}>
            About
            <ChevronRight className="w-vw h-vh" />
        </Link>

        {/*---Log Out---*/}
        <a href="#" className="text-primary hover:text-primary-hover">Log out</a>
    </div>
    </>
    )
}

export default Settings
