import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsNext } from "@/components/ui/settings/settings-next"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"

function Settings() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <SettingsBodyDiv>
                <h1 className= "pt-[5%] text-center">Settings</h1>
                <SettingsNext text={"User details"} next={"user"}/>
                <SettingsNext text={"Form autofill details"} next={"autofill"}/>
                <h1 className= "text-center">Support</h1>
                <SettingsNext text={"Contact us"} next={"contact"}/>
                <SettingsNext text={"About"} next={"about"}/>
            </SettingsBodyDiv>
            <a href="#" className="h-[10%] text-foreground hover:text-black">Log out</a>
        </CentredDiv>
    </>
    )
}

export default Settings