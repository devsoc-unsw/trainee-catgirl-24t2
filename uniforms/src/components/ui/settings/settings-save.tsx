import { Button } from "@/components/ui/button"

const SettingsSave = () => {
    return (
        <div className="flex justify-between align-center items-center w-[80%] h-[30%]">
            {/*Only displays if save changes button is clicked*/}
            <p>Settings saved!</p>
            <Button>Save changes</Button>
        </div>
    )
}

export { SettingsSave }

