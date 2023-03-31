import Head from 'next/head'
import Image from 'next/image'
import Link, { LinkProps } from 'next/link';
import Select from 'react-select';
import Man from '@/asset/images/Man.jpg'

import Header from '@/components/Configuration/MyHeader';
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
import Configheader from '@/components/Configuration/Configheader';


export default function staffdesignation() {
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
                                <h2 className="font-bold ml-2">Staff Designation List</h2> <br />

                                <div className='lg:flex w-full block'>

                                    <div className='flex mt-1 bg-white px-6 py-1 w-full lg:w-1/4 items-center border border-solid border-[#d3d3d3] rounded-lg'>
                                        <input type="text" placeholder='Search...' className='w-full lg:w-10/12 text-sm py-1 px-2  border-none bg-transparent outline-none' />
                                        <MagnifyingGlass />
                                    </div>
                                    <button className='ml-4 w-full mt-1 lg:w-2/12 bg-gradient-to-r from-[#0A1122] to-[#03194D] text-white py-1 px-3 cursor-pointer rounded-lg ' onClick={showModal}>Add Designation</button>
                                </div>
                            </div>

                            <div className="bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                                <div className="w-1/2 lg:w-5/6">
                                    <div className="bg-white shadow-md rounded my-6 w-1/2">
                                        <div className="flex-grow overflow-auto">

                                            <table className="min-w-max table-auto w-full">
                                                <thead>
                                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                                        <th className="py-3 px-6 text-left">Designation</th>
                                                        <th className="py-3 px-6 text-left">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-gray-600 text-sm font-light overflow-y-scroll">
                                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                                                <span className="font-medium">Junior Teacher</span>
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
                                <div className='absolute top-1/4 left-1/4 ml-28 bg-white w-1/4 h-1/3 text-center  rounded-md'>

                                    <div className='flex mb-4 justify-between w-full bg-myGray rounded-t-md'>
                                        <div></div>
                                        <h2 className='font-bold py-2 border-bottom-2 border-solid border-myGray justify-center'>Add Designation</h2>
                                        <div onClick={showModal}> <X /></div>
                                    </div>
                                    <div className='block lg:flex lg:justify-between py-1 px-8'>
                                        <div className='lg:flex-col lg:w-full w-full mb-2'>
                                            <p className='float-left'>Add Designation</p>
                                            <input type="text" placeholder='Enter Designation' className='py-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm mt-1 outline-none w-full' />
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
            </main>
        </>
    )
}
