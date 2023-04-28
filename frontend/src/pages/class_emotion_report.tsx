import { Montserrat } from "next/font/google";
import ReportLayout from "@/components/Report/Layout";
import ClassEmotionBody from "@/components/Report/ClassEmotionBody";

const montserrat = Montserrat({ subsets: ["latin"] });


export default function ClassEmotion() {
    return (
        <div className={montserrat.className}>
            <ReportLayout>
                <div>
                    <ClassEmotionBody />
                </div>
            </ReportLayout>
        </div>
    );
}