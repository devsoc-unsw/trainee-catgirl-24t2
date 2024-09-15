import { screenDetector } from "@/utils/screenDetector"
import { Page } from "@/components/ui/page"
import { Title } from "@/components/ui/title"
import { Button } from "@/components/ui/button";


function ManageMembers() {
    const { isDesktop } = screenDetector();
    let permissionLevel = "Moderator"
    return (
    <>
    {isDesktop && 
        <Page type="main" variant="desktop" page={3}>
            <Title text="Manage Members" type="title-back" prev="/managesocieties"/>
            <div className="w-[90%] mt-5 ml-20 overflow-auto flex flex-col">
                <div className="flex justify-between items-center py-2">
                    <p>Permission level: {permissionLevel}</p>
                    <Button variant="destructive">Leave society</Button>
                </div>
                <p className="font-medium">Head Administrator</p>
                <p className="font-medium">Administrators</p>
                <p className="font-medium">Moderators</p>
            </div>

        </Page>
    }
    </>
    )
}

export default ManageMembers