import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { EyeOff } from 'lucide-react'

function Login () {
    return (
        /*TO DO (maybe with backend): have red text for invalid input (not too important tbh)*/
        <div className="flex flex-col w-[100vw] h-full items-center justify-center gap-[50px]">
            <p className="text-4xl font-bold">UNIFORM</p>
            <div className="flex flex-col items-left w-[50vh] h-[60%] gap-[16px] p-[30px] border-2 rounded-3xl">
                <p>Email</p>
                <Input></Input>
                <p>Password</p>
                <div className="relative flex flex-row items-center">
                    <Input></Input>
                    <EyeOff className="absolute right-[3%]"></EyeOff>
                </div>
                <Button>Sign In</Button>
                <p className="underline">Forgot Password?</p>
                <p className="underline">Create a new account</p>
            </div>
        </div>
    )
}

export default Login