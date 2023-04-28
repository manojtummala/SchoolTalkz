import { Montserrat } from "next/font/google";
import PromoteStudentLayout from "../components/Promote-Student/Layout";
import PromoteStudentBody from "@/components/Promote-Student/PromoteStudentBody";
const montserrat = Montserrat({ subsets: ["latin"] });
import { useState } from 'react';




export default function report() {
    return (
        <div className={montserrat.className}>
            <PromoteStudentLayout>
                <div>
                    <PromoteStudentBody />
                </div>
            </PromoteStudentLayout>
        </div>
    );
}