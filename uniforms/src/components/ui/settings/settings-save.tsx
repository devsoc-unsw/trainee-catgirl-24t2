import { Button } from "@/components/ui/button"

const SettingsSave = () => {
    return (
        <div className="flex flex-row-reverse justify-between align-center items-center w-[80%] h-[30%]">
            {/*Only displays if save changes button is clicked*/}
            <Button className="peer">Save changes</Button>
            <p className="invisible peer-saved:visible">Settings saved!</p>
        </div>
    )
}

export { SettingsSave }

