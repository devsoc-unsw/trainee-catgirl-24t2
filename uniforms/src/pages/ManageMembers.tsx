import { screenDetector } from "@/utils/screenDetector"
import { Page } from "@/components/ui/page"
import { Title } from "@/components/ui/title"


function ManageMembers() {
    const { isDesktop } = screenDetector();
    let permissionLevel = "Moderator"
    return (
    <>
    {isDesktop && 
        <Page type="main" variant="desktop" page={3}>
            <Title text="Manage Members" type="title"/>
            <p>Permission level: {permissionLevel}</p>

        </Page>
    }
    </>
    )
}

export default ManageMembers