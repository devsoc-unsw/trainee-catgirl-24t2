import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"
function Settings() {
    return (
    <>
    {/*Logo & nav bar*/}
    <div className="w-dvw h-dvh flex flex-col align-center items-center gap-y-[5%]">
        {/*---Settings---*/}
        <h1 className= "pt-[2%] text-center">Settings</h1>
        <Separator className="w-[60%]"></Separator>

        {/*---User Details---*/}
        <Button>
            User Details
        <ChevronRight className="w-vw h-vh" />
        </Button>

        {/*---Form Autofill Details---*/}
        <Button>Form Autofill Details
        <ChevronRight className="w-vw h-vh" />
        </Button>
        
        {/*---Support---*/}
        <h1 className= "text-center">Support</h1>
        <Separator className="w-[60%]"></Separator>

        {/*---Contact Us---*/}
        <Button>Contact Us
        <ChevronRight className="w-vw h-vh" />
        </Button>

        {/*---About---*/}
        <Button>About
        <ChevronRight className="w-vw h-vh" />
        </Button>
    </div>
    </>
    )
}

export default Settings
