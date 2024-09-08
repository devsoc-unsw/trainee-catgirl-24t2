import { buttonVariants } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"


const SettingsToggle = ({ text, id }: { text: string, id: string}) => {
    return (
        <div className={buttonVariants({ variant: "oblong" }) +"h-[6%] w-[80%] flex justify-between hover:bg-secondary"}>
            {`${text}`}
            <Switch id= {`${id}`} />
        </div>
    )
}

export { SettingsToggle }