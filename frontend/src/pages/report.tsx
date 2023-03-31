import { Montserrat } from "next/font/google";
import ReportLayout from "@/components/Report/Layout";
import ReportBody from "@/components/Report/Body";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function report() {
    return (
        <ReportLayout>
            <div>
                <ReportBody />
            </div>
        </ReportLayout>
    );
}


