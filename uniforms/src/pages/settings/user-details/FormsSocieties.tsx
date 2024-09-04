import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"
import { SettingsToggle } from "@/components/ui/settings/settings-toggle"
import { SettingsSave } from "@/components/ui/settings/settings-save"

function FormsSocieties() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}    {/*AAAAAAA YES FEWUSYEFBSFBSF THE COMPONENTS WORK AIUOGBFIEGAYGFBA*/}
        <CentredDiv>
            <SettingsTitleDiv text="Forms & Societies" prev="../settings/user"/>
            <SettingsBodyDiv>
                <SettingsToggle text="Form permissions" id="formPermissions"/>
                <p className="w-[80%]">Activating the form permissions toggle gives you access to the “manage forms” tab in navigation, which allows you to create and manage personal forms.</p>
                <SettingsToggle text="Society moderator" id="societyModerator"/>
                <p className="w-[80%]">Activating the society moderator toggle gives you access to the “manage societies” tab in navigation, which allows you to perform actions for any society you have moderator/administrator permissions for.</p>
            </SettingsBodyDiv>
        <SettingsSave/>
        </CentredDiv>
    </>
    )
}

export default FormsSocieties