import Head from "next/head";
import Link from "next/link";
import Select from "react-select";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Configuration/MyHeader";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function BulkUpload() {
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
            <Header />
            {/* <Studentheader/> */}
          </div>
          <div>
            <div className="relative bg-myBlue rounded-t-md">
              <div className="flex bg-myGray justify-between items-center p-4 ">
                <span></span>
                <h3 className="font-bold text-lg ml-24">Staff Bulk Upload</h3>
                <button className="border border-solid text-[#03194D] border-[#03194D] py-2 px-4 rounded-md">
                  Download Sample File
                </button>
              </div>
              <div className="bg-white p-8">
                <div className="border border-solid rounded-xl p-8">
                  <ol type="1">
                    <li>
                      1. Your CSV data should be in the format download file.
                      The first line of your CSV file should be the column
                      headers as in the table example. Also, make sure that your
                      file isUTF-8 to avoid unnecessary encoding problems.
                    </li>
                    <li>
                      2. If the column you are trying to import is date make
                      sure that is formatted in format Y-m-d (2018-06-06).
                    </li>
                    <li>
                      3. Duplicate "Roll Number" (unique in section) rows will
                      not be imported. Roll No used or not you can get from
                      student report page search on class & section.
                    </li>
                    <li>
                      4. For student "Gender" use ID(1-Male, 2-Female,
                      3-Others).
                    </li>
                    <li>
                      5. Please follow this date format(2020-06-15) for the Date
                      of birth & Admission date.
                    </li>
                  </ol>
                </div>
                <div className="block lg:flex py-4 px-12 w-full justify-end bg-white rounded-b-2xl">
                  <label className="flex justify-center items-center py-2 px-8 rounded-xl border-[#03194D] bg-transparent text-[#03194D] border border-solid border-[#03194D] cursor-pointer  mr-4 w-full mb-2 lg:w-1/5">
                    <input type="file" className="hidden p-0 m-0" />
                    Choose File
                  </label>
                  <button className="flex justify-center items-center py-2 px-8 rounded-xl border-[#03194D] bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white border border-solid border-[#03194D] cursor-pointer opacity-40  mr-4 w-full mb-2 lg:w-1/5">
                    <Link href="/Form">Upload</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
