import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsNext } from "@/components/ui/settings/settings-next"
import { Title } from "@/components/ui/title"

function ContactUs() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <Title text="Contact us" type="settings-title" prev="../settings"/>
            <SettingsNext text={"FAQ"} next={"faq"}/>
            <p>Found any issues or bugs? Contact us at catgirls@meow.com.</p>
            <p>If you have any questions, please refer to the FAQ first.</p>
        </CentredDiv>
    </>
    )
}

export default ContactUs