import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsNext } from "@/components/ui/settings/settings-next"
import { Title } from "@/components/ui/title"

function AccountSettings() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}

    <CentredDiv>
        <Title text="Account Settings" type="settings-title" prev="../settings/user"/>
        <p>Username goes here!</p>
        <SettingsNext text={"Email"} next={"email"}/>
        <SettingsNext text={"Username"} next={"username"}/>
        <SettingsNext text={"Password"} next={"password"}/>
        <SettingsNext text={"Delete account"} next={"delete"}/>
    </CentredDiv>
    </>
    )
}

export default AccountSettings