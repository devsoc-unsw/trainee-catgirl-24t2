import { Input } from "@/components/ui/input"
import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"
import { SettingsSave } from "@/components/ui/settings/settings-save"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"

function Username() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
    <CentredDiv>
        <SettingsTitleDiv text="Username" prev="../settings/user/account"/>
        <SettingsBodyDiv>
            <p className="w-[80%]">You may change your username once every 14 days. Usernames must contain only letters, numbers, and dashes.</p>
            <Input className="w-[80%] h-[10%] peer" type="Username" placeholder="Your Username here!"/>
            {/*Error message, only displays if invalid input*/}
            <p className="w-[80%] text-destructive invisible peer-invalid:visible">You've changed your username too many times.</p>
        </SettingsBodyDiv>
        <SettingsSave/>
    </CentredDiv>
        
    </>
    )
}

export default Username