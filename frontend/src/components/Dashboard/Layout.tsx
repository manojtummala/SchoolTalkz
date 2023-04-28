import { ReactNode, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";
import GlobalHeader from "./Header";
import DashboardHeader from "./Header";
type Props = {
  children: ReactNode;
  pageTitle?: string;
};

const DashboardLayout = ({ children, pageTitle }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle || "School Talkz"}</title>
      </Head>
      <main className='w-cover flex justify-around'>
        <div className='flex flex-col items-center'>
          <Sidebar />
        </div>
        <div className='w-full pl-52 rounded-3xl'>
          <div>
            <DashboardHeader />
          </div>
          <div>
            {children}
          </div>
        </div>
      </main>
      {/* <footer className="bg-light-bg-blue">Footer</footer> */}
    </>
  );
};

export default DashboardLayout;
