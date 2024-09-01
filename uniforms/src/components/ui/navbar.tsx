import { Button } from "@/components/ui/button"

const NavBar = () => {
    return (
        <div className="w-[300px] h-[100vh] flex flex-col bg-primary p-[50px]">
            {/* Title at the top */}
            <div className="flex flex-col items-center gap-[50px]">
                <p className="text-4xl font-bold">UNIFORM</p>
            </div>

            {/* Buttons to the center */}
            <div className="flex-grow flex flex-col justify-center items-center gap-[20px]">
                <Button className="w-[160px] h-[60px] text-[16px]">View Forms</Button>
                <Button className="w-[160px] h-[60px] text-[16px]">Societies</Button>
                <Button className="w-[160px] h-[60px] text-[16px]">Manage</Button>
                <Button className="w-[160px] h-[60px] text-[16px]">Settings</Button>
            </div>

            {/* Bottom text and logout */}
            <div className="flex flex-col items-center gap-[20px]">
                <p>Logged in as Potato</p>
                <Button variant="destructive">Logout</Button>
            </div>
        </div>
    )
}

export { NavBar }