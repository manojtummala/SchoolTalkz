import { Montserrat } from "next/font/google";
import ReportLayout from "@/components/Report/Layout";
import StaffLeaderboardBody from "@/components/Report/StaffLeaderboardBody";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function StaffLeaderboard() {
    return (
        <div className={montserrat.className}>
            <ReportLayout>
                <div>
                    <StaffLeaderboardBody />
                </div>
            </ReportLayout>
        </div>
    );
}