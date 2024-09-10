import { CentredDiv } from "@/components/ui/centred-div"
import { SettingsNext } from "@/components/ui/settings/settings-next"
import { SettingsBodyDiv } from "@/components/ui/settings/settings-body-div"
import { screenDetector } from "@/utils/screenDetector"
import { NavBar } from "@/components/ui/navbar"
import { Page } from "@/components/ui/page"
import { Title } from "@/components/ui/title"


function Settings() {
    const { isMobile, isDesktop } = screenDetector();
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
        <Page type="main" variant="desktop" page={4}>
            <Title text="Settings" prev=""/>
            <div className="flex w-fill h-fill">
                <div className="w-[30%]">
                    
                </div>
                <div className="w-[70%]">

                </div>
            </div>
        </Page>
    }
    </>
    )
}

export default Settings