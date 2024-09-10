import { NavBar } from "@/components/ui/navbar"
import { CardGrid } from "@/components/ui/card-grid"

function ViewForms () {
    return (
        <div className="flex h-[100vh]">
            <div className="w-20%"></div>
            <NavBar PageNum={1} variant = "desktop"></NavBar>
            <div className="flex flex-col">
                <NavBar PageNum={1} variant = "mobile"></NavBar>
                <div className="flex w-[80vw] justify-center overflow-auto hide-scrollbar h-[100vh]">
                    <CardGrid variant="desktop"></CardGrid>
                    <CardGrid variant="mobile"></CardGrid>
                </div>
            </div>
        </div>
    )
}

export default ViewForms