import { Montserrat } from "next/font/google";
import TalentHubLayout from "@/components/Talent Hub/Layout";
import CategoryBody from "@/components/Talent Hub/Category/CategoryBody";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function DanceCategory() {
    return (
        <div className={montserrat.className}>
            <TalentHubLayout>
                <div>
                    <CategoryBody />
                </div>
            </TalentHubLayout>
        </div>
    );
}


