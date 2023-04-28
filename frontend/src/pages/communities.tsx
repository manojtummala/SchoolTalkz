import { Montserrat } from "next/font/google";
import Communities from "@/components/Talent Hub/CommunitesBody";
import TalentHubLayout from "@/components/Talent Hub/Layout";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function Community() {
    return (
        <div className={montserrat.className}>
            <TalentHubLayout>
                <div>
                    <Communities />
                </div>
            </TalentHubLayout>
        </div>
    );
}


