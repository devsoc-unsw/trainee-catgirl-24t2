import { CentredDiv } from "@/components/ui/centred-div"
import { Title } from "@/components/ui/title"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"

function Faq() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <Title text="FAQ" type="settings-title" prev="../settings"/>
            <SettingsBodyDiv>
                {/*I know I could have used ul here but 1. faq is fairly unimportant rn and 2. its easier to format like this*/}
                {/* I could have also made a component but uhh......... :3 */}
                <h2 className="font-bold w-[80%]">1. How do I create forms?</h2>
                <p className="w-[80%]">Go to settings → admin & societies and activate the "form permissions" toggle.</p>
                <h2 className="font-bold w-[80%]"> 2. How do I moderate societies?</h2>
                <p className="w-[80%]">Go to settings → admin & societies and activate the "society moderator" toggle.</p>
                <h2 className="font-bold w-[80%]"> 3. How do I create a society?</h2>
                <p className="w-[80%]">Go to the manage tab and press “create a society”. Then, you will need to enter all relevant details and authentications about yourself and await contact to be approved. </p>
                <h2 className="font-bold w-[80%]">4. How do I get a cat girlfriend??</h2>
                <p className="w-[80%]">Acquire the sacrifice. Complete the ritual.</p>
            </SettingsBodyDiv>
        </CentredDiv>
    </>
    )
}

export default Faq