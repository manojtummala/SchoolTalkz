import { Montserrat } from "next/font/google";
import ReportLayout from "@/components/Report/Layout";
import ClassLeaderboardBody from "@/components/Report/ClassLeaderboardBody";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function ClassLeaderboard() {
    return (
        <div className={montserrat.className}>
            <ReportLayout>
                <div>
                    <ClassLeaderboardBody />
                </div>
            </ReportLayout>
        </div>
    );
}