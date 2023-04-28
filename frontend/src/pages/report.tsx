import ReportLayout from "@/components/Report/Layout";
import ReportBody from "@/components/Report/Body";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function report() {
    return (
        <div className={montserrat.className}>
            <ReportLayout>
                <div>
                    <ReportBody />
                </div>
            </ReportLayout>
        </div>
    );
}


