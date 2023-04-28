import GlobalBody from "@/components/Global/Body";
import GlobalLayout from "@/components/Global/Layout";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function Global() {
    return (
        <div className={montserrat.className}>
            <GlobalLayout>
                <div>
                    <GlobalBody />
                </div>
            </GlobalLayout>
        </div>
    );
}
