import { Montserrat } from "next/font/google";
import GlobalLayout from "@/components/Global/Layout";
import SchoolProfileBody from "@/components/Global/SchoolProfileBody";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function SchoolProfile() {
    return (
        <div className={montserrat.className}>
            <GlobalLayout>
                <div>
                    <SchoolProfileBody />
                </div>
            </GlobalLayout>
        </div>
    );
}
