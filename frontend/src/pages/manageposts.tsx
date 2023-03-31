import { Montserrat } from "next/font/google";
import ManagePostLayout from "@/components/ManagePosts/Layout";
import ManagePostBody from "@/components/ManagePosts/Body";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function ManagePost() {
    return (
        <ManagePostLayout>
            <div>
                <ManagePostBody />
            </div>
        </ManagePostLayout>
    );
}
