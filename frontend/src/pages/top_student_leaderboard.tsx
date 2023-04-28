import { Montserrat } from "next/font/google";
import ReportLayout from "@/components/Report/Layout";
import TopStudentBody from "@/components/Report/TopStudentBody";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function TopStudent() {
    return (
        <div className={montserrat.className}>
            <ReportLayout>
                <div>
                    <TopStudentBody />
                </div>
            </ReportLayout>
        </div>
    );
}