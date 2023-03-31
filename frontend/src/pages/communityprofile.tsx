import { Montserrat } from "next/font/google";
import TalentHubLayout from "@/components/Talent Hub/Layout";
import CommunityProfileBody from "@/components/Talent Hub/CommunityProfileBody";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function CommunityProfile() {
    return (
        <TalentHubLayout>
            <div>
                <CommunityProfileBody />
            </div>
        </TalentHubLayout>
    );
}
