import Head from 'next/head'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link';
import Select from 'react-select';
import Man from '@/asset/images/Man.jpg'

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
import SchoolInfoLabel from '@/asset/images/SchoolInfoLabel';
import EditIcon from '@/asset/images/EditIcon';
import Configheader from '@/components/Configuration/Configheader';


export default function Configuration() {
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

                            <div className='block h-full lg:flex lg:justify-around text-white mt-4 lg:w-full'>

                                <div><EditIcon /></div>
                                <SchoolInfoLabel />
                            </div>
                            <br />

                            <div className='p-4'>
                                <h4 className="font-bold ml-2">Admin List</h4> <br />

                                <div className='lg:flex w-full block'>


                                    <button className='w-full mt-1 lg:w-2/12 bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white py-1 px-3 cursor-pointer rounded-lg ' onClick={showModal}>Add Admin</button>
                                </div>
                            </div>

                            <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                                <div className="w-full lg:w-5/6">
                                    <div className="bg-white shadow-md rounded my-6">
                                        <div className="overscroll-contain">

                                            <table className="min-w-max table-auto w-full">
                                                <thead>
                                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                        <th className="py-3 px-6 text-left">Name</th>
                                                        <th className="py-3 px-6 text-left">Email</th>
                                                        <th className="py-3 px-6 text-left">Phone No</th>
                                                        <th className="py-3 px-6 text-left">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light">
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Mr. Selvaraj</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-left">
                                                            <div className="flex items-center">
                                                                <span>selvaraj123@gmail.com</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex items-center">
                                                                <span>9876543210</span>
                                                            </div>
                                                        </td>
                                                        <td className="py-3 px-6 text-center">
                                                            <div className="flex item-left justify-left">
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                                    </svg>
                                                                </div>
                                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="Red">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                    </svg>
                                                                </div>
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
                        {modal && (
                            <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                                <div className='absolute top-1/4 right-1/4 ml-28 bg-white w-1/2 h-1/2 text-center  rounded-md'>

                                    <div className='flex mb-4 justify-between w-full bg-myGray rounded-t-md'>
                                        <div></div>
                                        <h2 className='font-bold py-2 border-bottom-2 border-solid border-myGray justify-center'>Add Admin</h2>
                                        <div onClick={showModal}> <X /></div>
                                    </div>
                                    <div className='block lg:flex lg:justify-between py-1 px-8'>
                                        <div className='lg:flex-col lg:w-full w-full mb-2'>
                                            <p className='float-left'>Admin Name</p>
                                            <input type="text" placeholder='Enter admin name ' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
                                        </div>
                                        <div className='lg:flex-col lg:w-full w-full mb-2'>
                                            <p className='float-left'>Email</p>
                                            <input type="text" placeholder='Enter email ' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
                                        </div>
                                        <div className='lg:flex-col lg:w-full w-full mb-2'>
                                            <p className='float-left'>Phone Number</p>
                                            <input type="text" placeholder='Enter Phone number ' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
                                        </div>


                                    </div>
                                    <div className='block lg:flex py-4 px-12 w-full justify-center bg-white rounded-b-2xl'>
                                        <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/5'><Link href=''>Cancel</Link></button>
                                        <button className='flex justify-center items-center py-2 px-8 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#0A1122] to-[#03194D] mr-4 w-full mb-2 lg:w-1/5'>Submit</button>

                                    </div>

                                </div>

                            </div>
                        )}

                    </div>

                </div>
            </main >
        </>
    )
}
