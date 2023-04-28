import { Montserrat } from "next/font/google";
import ReportLayout from "@/components/Report/Layout";
import LeaderboardClassCompareBody from "@/components/Report/LeaderboardClassCompareBody";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function LeaderboardClassCompare() {
    return (
        <div className={montserrat.className}>
            <ReportLayout>
                <div>
                    <LeaderboardClassCompareBody />
                </div>
            </ReportLayout>
        </div>
    );
}