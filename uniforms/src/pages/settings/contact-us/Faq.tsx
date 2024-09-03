import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsNext } from "@/components/ui/settings/settings-next"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"

function UserDetails() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <SettingsTitleDiv text="User details" prev="../settings"/>
            <SettingsNext text={"Account settings"} next={"account"}/>
            <SettingsNext text={"Admin & societies"} next={"admin"}/>
        </CentredDiv>
    </>
    )
}

export default UserDetails