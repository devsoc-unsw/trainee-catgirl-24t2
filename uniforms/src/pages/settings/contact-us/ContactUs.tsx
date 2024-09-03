import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsNext } from "@/components/ui/settings/settings-next"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"

function ContactUs() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <SettingsTitleDiv text="Contact us" prev="../settings"/>
            <SettingsNext text={"Faq"} next={"faq"}/>
        </CentredDiv>
    </>
    )
}

export default ContactUs