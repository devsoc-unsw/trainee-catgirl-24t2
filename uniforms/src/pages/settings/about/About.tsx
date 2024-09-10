import { CentredDiv } from "@/components/ui/centred-div"
import { TitleDiv } from "@/components/ui/title-div"

function About() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <TitleDiv text="About" prev="../settings"/>
            <p>An improved google forms, catered for UNSW societies.</p>
            <p>No catgirls to be found here...or not..?</p>
        </CentredDiv>
    </>
    )
}

export default About