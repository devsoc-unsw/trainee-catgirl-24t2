import { screenDetector } from "@/utils/screenDetector"
import { Page } from "@/components/ui/page"
import { Title } from "@/components/ui/title"


function ManageSocieties() {
    const { isDesktop } = screenDetector();
    return (
    <>
    {isDesktop && 
        <Page type="main" variant="desktop" page={3}>
            <Title text="Manage" type="title"/>
        </Page>
    }
    </>
    )
}

export default ManageSocieties