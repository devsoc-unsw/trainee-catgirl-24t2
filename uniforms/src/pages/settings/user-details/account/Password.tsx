import { Input } from "@/components/ui/input"
import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsSave } from "@/components/ui/settings/settings-save"
import { Title } from "@/components/ui/title"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"



function Password() {
    {/*TODO: create a fuction for error handling passwords 
        - password is not valid (missing a character or something)
        - new password is your current password
    */}
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        
    <CentredDiv>
        <Title text="Password" type="settings-title" prev="../settings/user/account"/>
        <SettingsBodyDiv>
            <p className="w-[80%]">Your password must be at least 8 characters long, contain at least one capital letter, one lower case letter and one symbol.</p>
            <Input className="w-[80%] h-[10%]" type="password" placeholder="Enter current password"/>
            <Input className="w-[80%] h-[10%] peer" type="password" placeholder="Enter new password"/>
            {/*Error message, only displays if invalid input*/}
            <p className="w-[80%] text-destructive invisible peer-invalid:visible">Your password was incorrect.</p>        </SettingsBodyDiv>
        <SettingsSave/>
    </CentredDiv>
    </>
    )
}

export default Password