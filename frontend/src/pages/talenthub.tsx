import Feed from "@/components/Feed";
import Head from 'next/head';
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { Montserrat } from "next/font/google";
import TalentHubLayout from "@/components/Talent Hub/Layout";
import TalentHubBody from "@/components/Talent Hub/TalentHubBody";
const montserrat = Montserrat({ subsets: ["latin"] });



export default function TalentHub() {
    return (
        <TalentHubLayout>
            <div>
                <TalentHubBody />
            </div>
        </TalentHubLayout>
    );
}
