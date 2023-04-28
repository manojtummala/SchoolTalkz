import { Montserrat } from "next/font/google";
import TalentHubLayout from "@/components/Talent Hub/Layout";
import TalentHubBody from "@/components/Talent Hub/TalentHubBody";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function TalentHub() {
    return (
        <div className={montserrat.className}>
            <TalentHubLayout>
                <div>
                    <TalentHubBody />
                </div>
            </TalentHubLayout>
        </div>
    );
}
