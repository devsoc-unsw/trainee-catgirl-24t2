import { Input } from "@/components/ui/input"
import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsSave } from "@/components/ui/settings/settings-save"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"

function Password() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        
    <CentredDiv>
        <SettingsTitleDiv text="Password" prev="../settings/user/account"/>
        <SettingsBodyDiv>
            <Input className="w-[80%] h-[10%]" type="password" placeholder="Enter current password"/>
            <Input className="w-[80%] h-[10%]" type="password" placeholder="Enter new password"/>
            {/*Error message, only displays if invalid input*/}
            <p className="w-[80%] text-destructive">Your password was incorrect.</p>
            <p className="w-[80%]">Your password must be at least 8 characters long, contain at least one capital letter, one lower case letter and one symbol.</p>
        </SettingsBodyDiv>
        <SettingsSave/>
    </CentredDiv>
    </>
    )
}

export default Password