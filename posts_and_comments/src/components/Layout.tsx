import { ReactNode, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Sidebar from "./Sidebar";
type Props = {
  children: ReactNode;
  pageTitle?: string;
};

const Layout = ({ children, pageTitle }: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle || "Home"}</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="w-full ml-52">
          <header className="text-2xl">
            <Header />
          </header>
          <main className="flex mt-[5.5rem]">
            <div className="flex-1">{children}</div>
          </main>
        </div>
      </div>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
