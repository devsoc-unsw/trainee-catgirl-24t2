import { Input } from "@/components/ui/input"
import { SettingsSave } from "@/components/ui/settings/settings-save"
import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"

function Email() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
    <CentredDiv>
        <SettingsTitleDiv text="Email" prev="../settings/user/account"/>
        <SettingsBodyDiv>
            <Input className="w-[80%] h-[10%]" type="email" placeholder="Your email here!"/>
            {/*Error message, only displays if invalid input*/}
            <p className="w-[80%] text-destructive">Please provide a valid email..</p>
            <p className="w-[80%]">You must have an email linked to your account.</p>
        </SettingsBodyDiv>
        <SettingsSave/>
    </CentredDiv>
    </>
    )
}

export default Email