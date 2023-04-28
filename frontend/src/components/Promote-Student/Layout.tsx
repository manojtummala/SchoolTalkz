import { ReactNode, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";
import PromoteStudentHeader from "./Header";
type Props = {
    children: ReactNode;
    pageTitle?: string;
};

const PromoteStudentLayout = ({ children, pageTitle }: Props) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>School Talkz</title>
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="../../images/logo.png" />
            </Head>
            <main className='w-cover flex justify-around'>
                <div className='flex flex-col items-center'>
                    <Sidebar />
                </div>
                <div className='w-full pl-52 rounded-3xl'>
                    <div>
                        <PromoteStudentHeader />
                    </div>
                    <div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default PromoteStudentLayout;
