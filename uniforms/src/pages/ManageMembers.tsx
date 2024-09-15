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
        <Page type="main" variant="desktop" page={4}>
            <Title text="Manage Members" type="title-back" prev="/managesocieties/view"/>
            <div className="w-[90%] mt-5 ml-20 overflow-auto hide-scrollbar flex flex-col h-[80%]">
                <div className="flex justify-between items-center py-2">
                    <p>Permission level: {permissionLevel}</p>
                    <Button variant="destructive">Leave society</Button>
                </div>
                <p className="font-medium m-2">Head Administrator</p>
                <Button variant="oblong" className="w-[30%] my-2 ">Supreme Overlord Dylan</Button>
                <p className="font-medium m-2">Administrators</p>
                <div className="flex flex-wrap">
                    <Button variant="oblong" className="w-[30%] m-2">Wise Leader Jayden</Button>
                    <Button variant="oblong" className="w-[30%] m-2">Skibidi Sigma Lachlan</Button>
                    <Button variant="oblong" className="w-[30%] m-2">GOAT OF ALL TIME Nicole</Button>
                </div>
                <p className="font-medium m-2">Moderators</p>
                <div className="flex flex-wrap">
                    <Button variant="oblong" className="w-[30%] m-2">Potato</Button>
                    <Button variant="oblong" className="w-[30%] m-2">Beetroot</Button>
                    <Button variant="oblong" className="w-[30%] m-2">AAAA</Button>
                    <Button variant="oblong" className="w-[30%] m-2">BBBB</Button>
                </div>
                <p className="font-medium m-2">Members</p>
                <div className="flex flex-wrap">
                    <Button variant="oblong" className="w-[30%] m-2">meow</Button>
                    <Button variant="oblong" className="w-[30%] m-2">miaow</Button>
                    <Button variant="oblong" className="w-[30%] m-2">mao</Button>
                    <Button variant="oblong" className="w-[30%] m-2">MAO???</Button>
                    <Button variant="oblong" className="w-[30%] m-2">MAO???????</Button>
                    <Button variant="oblong" className="w-[30%] m-2">NOOOOOOOO</Button>
                    <Button variant="oblong" className="w-[30%] m-2">IHATEMAO123</Button>
                    <Button variant="oblong" className="w-[30%] m-2">I mean...</Button>
                    <Button variant="oblong" className="w-[30%] m-2">WEHATEMAO123</Button>
                    <Button variant="oblong" className="w-[30%] m-2">WAAAAAA</Button>
                    <Button variant="oblong" className="w-[30%] m-2">fhqhikfbjlagvfavj</Button>
                </div>
            </div>

        </Page>
    }
    </>
    )
}

export default ManageMembers