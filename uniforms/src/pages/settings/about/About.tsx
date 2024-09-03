import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"

function About() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <SettingsTitleDiv text="About" prev="../settings"/>
        </CentredDiv>
    </>
    )
}

export default About