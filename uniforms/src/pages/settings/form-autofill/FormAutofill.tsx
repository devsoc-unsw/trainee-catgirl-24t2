import { CentredDiv } from "@/components/ui/centred-div"
import { Title } from "@/components/ui/title"
import { SettingsSave } from "@/components/ui/settings/settings-save"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

function FormAutofill() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
        <CentredDiv>
            <Title text="Form autofill details" type="settings-title" prev="../settings"/>
            <SettingsBodyDiv>
                <p className="w-[80%]">Name</p>
                <Input className="w-[80%] h-[10%]" type="name" placeholder="Your name here!"/>
                <p className="w-[80%]">ZID (Leave blank if not a UNSW student)</p>
                <Input className="w-[80%] h-[10%]" type="zid" placeholder="Exclude the Z"/>
                <p className="w-[80%]">Email</p>
                <Input className="w-[80%] h-[10%]" type="email" placeholder="Your email here!"/>
                <div className="w-[80%] h-[10%] mt-[1%] flex align-center items-center gap-x-[2.5%]">
                    <Checkbox id="arcmember" className="max-h-[100%] aspect-square"/>
                    <p className="text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Are you an Arc member?</p>
                </div>
            </SettingsBodyDiv>
            <SettingsSave/>
            
        </CentredDiv>
    </>
    )
}

export default FormAutofill