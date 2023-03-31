import { ReactNode, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ReportHeader from "@/components/Report/Header";
import Sidebar from "../Sidebar";
type Props = {
    children: ReactNode;
    pageTitle?: string;
};

const ReportLayout = ({ children, pageTitle }: Props) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>School Talkz</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../images/logo.png" />
            </Head>
            <main className='w-cover flex p-4 justify-around pl-10'>
                <div className='w-1/12 flex flex-col items-center'>
                    <Sidebar />
                </div>
                <div className='w-full pl-10 rounded-3xl'>
                    <div>
                        <ReportHeader />
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};

export default ReportLayout;
