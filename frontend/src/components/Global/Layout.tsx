import { ReactNode, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";
import GlobalHeader from "./Header";
type Props = {
  children: ReactNode;
  pageTitle?: string;
};

const GlobalLayout = ({ children, pageTitle }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle || "Home"}</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-52 min-h-screen">
          <header className="text-2xl">
            <GlobalHeader />
          </header>
          <main className="flex mt-[5.5rem] bg-light-bg-blue">
            <div className="flex-1">{children}</div>
          </main>
        </div>
      </div>
      {/* <footer className="bg-light-bg-blue">Footer</footer> */}
    </>
  );
};

export default GlobalLayout;
