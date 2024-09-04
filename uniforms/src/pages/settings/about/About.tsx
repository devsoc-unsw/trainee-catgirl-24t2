import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"

function About() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <SettingsTitleDiv text="About" prev="../settings"/>
            <p>An improved google forms, catered for UNSW societies.</p>
            <p>No catgirls to be found here...or not..?</p>
        </CentredDiv>
    </>
    )
}

export default About