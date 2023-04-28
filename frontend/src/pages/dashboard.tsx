import Feed from "@/components/Feed";
import Head from 'next/head';
import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import { Montserrat } from "next/font/google";
import DashboardLayout from "@/components/Dashboard/Layout";
import DashboardBody from "@/components/Dashboard/Body";
const montserrat = Montserrat({ subsets: ["latin"] });
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";



export default function SchoolFeed() {
    return (
        <div className={montserrat.className}>
            <DashboardLayout>
                <div>
                    <DashboardBody />
                </div>
            </DashboardLayout>
        </div>
    );
}