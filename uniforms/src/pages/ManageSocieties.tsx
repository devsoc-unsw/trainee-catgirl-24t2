import { screenDetector } from "@/utils/screenDetector"
import { Page } from "@/components/ui/page"
import { Title } from "@/components/ui/title"


function ManageSocieties() {
    const { isDesktop } = screenDetector();
    return (
    <>
    {isDesktop && 
        <Page type="main" variant="desktop" page={4}>
            <Title text="Manage Societies" type="title"/>
        </Page>
    }
    </>
    )
}

export default ManageSocieties