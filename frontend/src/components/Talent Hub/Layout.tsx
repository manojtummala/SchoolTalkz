import { ReactNode, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";
import TalentHubHeader from "./Header";

type Props = {
  children: ReactNode;
  pageTitle?: string;
};

const TalentHubLayout = ({ children, pageTitle }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle || "School Talkz"}</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-52">
          <header className="text-2xl">
            <TalentHubHeader />
          </header>
          <main className="flex mt-[5.5rem]">
            <div className="flex-1">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default TalentHubLayout;
