import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsNext } from "@/components/ui/settings/settings-next"
import { TitleDiv } from "@/components/ui/title-div"

function UserDetails() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
    {/*AAAAAAA YES FEWUSYEFBSFBSF THE COMPONENTS WORK AIUOGBFIEGAYGFBA*/}
        <CentredDiv>
            <TitleDiv text="User details" prev="../settings"/>
            <SettingsNext text={"Account settings"} next={"account"}/>
            <SettingsNext text={"Forms & societies"} next={"forms"}/>
        </CentredDiv>
    </>
    )
}

export default UserDetails