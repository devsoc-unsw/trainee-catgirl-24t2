import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsNext } from "@/components/ui/settings/settings-next"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"

function ContactUs() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <SettingsTitleDiv text="Contact us" prev="../settings"/>
            <SettingsNext text={"FAQ"} next={"faq"}/>
            <p>Found any issues or bugs? Contact us at catgirls@meow.com.</p>
            <p>If you have any questions, please refer to the FAQ first.</p>
        </CentredDiv>
    </>
    )
}

export default ContactUs