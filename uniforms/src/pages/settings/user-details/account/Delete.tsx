import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsTitleDiv } from "@/components/ui/settings/settings-title-div"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"

function AccountSettings() {
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}

    <CentredDiv>
        <SettingsTitleDiv text="Delete account" prev="../settings/user/account"/>
        <SettingsBodyDiv>
            <p className="w-[80%]">Once you have deleted your account any forms you have individually made will also be deleted. Your responses will remain on forms that you have filled out.</p>
            <p className="w-[80%]">If you are a member, moderator or administrator of a society, you and any permissions you have will be automatically removed from that society.</p>
            <p className="w-[80%] text-destructive">Deleting your account is an irreversible action.</p>
        </SettingsBodyDiv>
    </CentredDiv>
    </>
    )
}

export default AccountSettings