import Head from 'next/head'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link';
import Select from 'react-select';
import Man from '@/asset/images/Man.jpg'

import Configheader from '@/components/Configuration/Configheader';
import Sidebar from '@/components/Sidebar';
import ArrowLeft from "@/asset/images/ArrowLeft";
import ArrowUpRight from "@/asset/images/ArrowUpRight";

import Orange from "@/asset/images/Orange";
import Add from "@/asset/images/Add";
import MagnifyingGlass from "@/asset/images/MagnifyingGlass";
import NotePencil from "@/asset/images/NotePencil";
import X from "@/asset/images/X";
import Categories from '@/components/Configuration/ConfigSorting';


import Camera from "@/asset/images/Camera";


import { useState } from 'react';
import ConfigSorting from '@/components/Configuration/ConfigSorting';



export default function loginlogs() {
    const [modal, setModal] = useState(false)

    function showModal() {
        setModal(!modal)
    }
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
                        <Configheader />
                        {/* <Studentheader/> */}
                    </div>
                    <div>

                        <div className='relative rounded-b-3xl w-full flex-col bg-myBlue p-4 lg:h-full lg:w-full'>
                            <ConfigSorting />


                            <div className='p-4'>
                                <h4 className="font-bold ml-2">Login Logs List</h4> <br />

                                <div className='lg:flex w-full block'>

                                    <div className='flex mt-1 bg-white px-6 py-1 w-full lg:w-1/4 items-center border border-solid border-[#d3d3d3] rounded-lg'>
                                        <input type="text" placeholder='Search...' className='w-full lg:w-10/12 text-sm py-1 px-2  border-none bg-transparent outline-none' />
                                        <MagnifyingGlass />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                                <div className="w-full lg:w-5/6">
                                    <div className="bg-white shadow-md rounded my-6">
                                        <div className="overscroll-contain">

                                            <table className="min-w-max table-auto w-full">
                                                <thead>
                                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                        <th className="py-3 px-6 text-left">ID</th>
                                                        <th className="py-3 px-6 text-left">Name</th>
                                                        <th className="py-3 px-6 text-left">Type</th>
                                                        <th className="py-3 px-6 text-left">Device/Browser/Platform</th>
                                                        <th className="py-3 px-6 text-left">Status</th>
                                                        <th className="py-3 px-6 text-left">Created at</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light">
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">A-00004(Admin)</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Pravin</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Web</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Webkit/Chrome/Windows</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">P</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">03-Feb-2023 10:57:08</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">A-00004(Admin)</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Pravin</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Web</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Webkit/Chrome/Windows</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">P</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">03-Feb-2023 10:57:08</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">A-00004(Admin)</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Pravin</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Web</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Webkit/Chrome/Windows</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">P</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">03-Feb-2023 10:57:08</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">A-00004(Admin)</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Pravin</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Web</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Webkit/Chrome/Windows</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">P</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">03-Feb-2023 10:57:08</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">A-00004(Admin)</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Pravin</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Web</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Webkit/Chrome/Windows</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">P</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">03-Feb-2023 10:57:08</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">A-00004(Admin)</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Pravin</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Web</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Webkit/Chrome/Windows</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">P</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">03-Feb-2023 10:57:08</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">A-00004(Admin)</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Pravin</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Web</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Webkit/Chrome/Windows</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">P</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">03-Feb-2023 10:57:08</span>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">A-00004(Admin)</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Pravin</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Web</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Webkit/Chrome/Windows</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">P</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">03-Feb-2023 10:57:08</span>
                                                            </div>
                                                        </td>
                                                    </tr>




                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='flex-col'>



                        </div>


                    </div>

                </div>
            </main>
        </>
    )
}