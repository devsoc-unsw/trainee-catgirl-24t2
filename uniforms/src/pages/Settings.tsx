import { CentredDiv } from "@/components/ui/centred-div"
import {  SettingsNext } from "@/components/ui/settings/settings-next"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"
import { screenDetector } from "@/utils/screenDetector"
import { NavBar } from "@/components/ui/navbar"
import { Page } from "@/components/ui/page"
import { Title } from "@/components/ui/title"
import { useState } from 'react';

function Settings() {
    const { isMobile, isDesktop } = screenDetector();
    const links: { [id: string] : string; } = {};
    links["email"] = "settings/user/account/email"
    links["username"] = "settings/user/account/username"
    links["password"] = "settings/user/account/password"
    links["delete"] = "settings/user/account/delete"
    links["forms"] = "settings/user/forms"
    links["autofill"] = "settings/autofill"
    links["contact"] = "settings/contact"
    links["faq"] = "settings/contact/faq"
    links["about"] = "settings/about"
    const [active, setActive] = useState<string>('');
    return (
    <>
    {/*Logo & nav bar should go up at the top!!!*/}
    {isMobile && 
        <CentredDiv>
            <NavBar PageNum={4} variant = "mobile"></NavBar>
            <SettingsBodyDiv>
                <h1 className= "pt-[5%] text-center">Settings</h1>
                <SettingsNext text={"User details"} next={"user"}/>
                <SettingsNext text={"Form autofill details"} next={"autofill"}/>
                <h1 className= "text-center">Support</h1>
                <SettingsNext text={"Contact us"} next={"contact"}/>
                <SettingsNext text={"About"} next={"about"}/>
            </SettingsBodyDiv>
            <a href="#" className="h-[10%] text-foreground hover:text-black">Log out</a>
        </CentredDiv>
    }
    {isDesktop && 
        <Page type="main" variant="desktop" page={5}>
            <div className="flex w-[100%] h-[90%] pt-10">
                <div className="w-[300px] h-[90%] mt-5 ml-20 overflow-auto">
                    <div className="mr-7 flex flex-col items-center justify-center">
                    <Title text="Account Details" type="subtitle"></Title>
                    <SettingsNext text={"Email"} next={"email"} active={active} setActive={setActive} />
                    <SettingsNext text={"Username"} next={"username"} active={active} setActive={setActive} />
                    <SettingsNext text={"Password"} next={"password"} active={active} setActive={setActive} />
                    <SettingsNext text={"Delete account"} next={"delete"} active={active} setActive={setActive} />

                    <Title text="Forms & societies" type="subtitle"></Title>
                    <SettingsNext text={"Forms & societies"} next={"forms"} active={active} setActive={setActive} />

                    <Title text="Autofill details" type="subtitle"></Title>
                    <SettingsNext text={"Form autofill details"} next={"autofill"} active={active} setActive={setActive} />

                    <Title text="Support" type="subtitle"></Title>
                    <SettingsNext text={"Contact us"} next={"contact"} active={active} setActive={setActive} />
                    <SettingsNext text={"About"} next={"about"} active={active} setActive={setActive} />
                    </div>
                </div>
                <div className="flex items-center justify-center w-[60%] h-[100%] p-2">
                    <iframe src={`${links[active]}`} className="w-full h-full"/>
                </div>
            </div>
        </Page>
    }
    </>
    )
}

export default Settings