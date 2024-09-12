import { screenDetector } from "@/utils/screenDetector"
import { Page } from "@/components/ui/page"
import { Title } from "@/components/ui/title"


function Societies() {
    const { isDesktop } = screenDetector();
    return (
    <>
    {isDesktop && 
        <Page type="main" variant="desktop" page={2}>
            <Title text="Societies" type="title"/>
        </Page>
    }
    </>
    )
}

export default Societies