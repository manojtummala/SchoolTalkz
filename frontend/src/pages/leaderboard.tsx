import LearboardBody from "@/components/Leaderboard/Body";
import LeaderboardLayout from "@/components/Leaderboard/Layout";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function Leaderboard() {
    return (
        <div className={montserrat.className}>
            <LeaderboardLayout>
                <div>
                    <LearboardBody />
                </div>
            </LeaderboardLayout>
        </div>
    );
}
