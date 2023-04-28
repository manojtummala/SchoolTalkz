import { ThreeEllipses } from "@/asset/images";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useState } from 'react';
import X from "@/asset/images/X";
import Link from "next/link";


const randomNumber: number = Math.floor(Math.random() * 10) + 1;

const GlobalFeedCardHeader2 = () => {


    const [dlt, setDlt] = useState(false);
    const [success, setSuccess] = useState(false);
    const [report, setReport] = useState(false);


    const userdetails = [
        { id: 1, name: 'Madhan', class: 'VI', school: 'St. Jhons CBSE School', time: '1' },
        { id: 2, name: 'Madhav', class: 'VI', school: 'St. Jhons CBSE School', time: '1' },
        { id: 3, name: 'Sandheep', class: 'VI', school: 'St. Jhons CBSE School', time: '1' },
        { id: 4, name: 'Madhan', class: 'VI', school: 'St. Jhons CBSE School', time: '1' },
        { id: 4, name: 'Madhan', class: 'VI', school: 'St. Jhons CBSE School', time: '1' },
    ]

    function showDelete() {
        setDlt(!dlt)
    }

    function showSuccess() {
        setSuccess(!success)
        setDlt(false)
    }

    function showReport() {
        setReport(!report)
    }


    return (
        <div>
            <div className="flex justify-between items-center p-2 mx-2 text-sm">
                <div className="flex gap-2 items-center">
                    <img
                        src={`https://i.pravatar.cc/300?img=${randomNumber}`}
                        alt={`nr`}
                        className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold">Gurunath (Class V)</span>
                        <Link href=''><span className="text-[#D86500] border-b-2 border-orange-300">Global International School</span></Link>
                        <span className="text-dark-grey text-xs">1 hours ago</span>
                    </div>

                </div>
                <div className="flex">

                    <Menu
                        menuButton={
                            <MenuButton >
                                <div className="w-max flex justify-between items-center font-open cursor-pointer p-3">
                                    <ThreeEllipses mode="light" />
                                </div>
                            </MenuButton>
                        }
                        transition
                    >
                        <MenuItem onClick={showDelete}>Delete post</MenuItem>
                        <MenuItem onClick={showReport}>View Reported Persons</MenuItem>
                    </Menu>
                </div>



                {dlt && (
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                        <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                        <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/5 h-1/4 text-center rounded-xl'>

                            <div className='flex mb-4 justify-end w-full rounded-t-md'>
                                <div onClick={showDelete}> <X /></div>
                            </div>
                            <div className='block lg:flex lg:justify-between pt-2 pb-6 px-20'>
                                <div className=''>
                                    <span className="font-semibold">Delete the post from School Feed</span>
                                </div>
                            </div>
                            <div className="block lg:flex pt-4 px-12 pb-8 gap-2 w-full justify-center bg-white rounded-2xl shadow-2xl">
                                <button
                                    type="submit"
                                    className="flex justify-center items-center py-2 px-16 rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#25B060] to-[#25B060] mr-4 w-full mb-2 lg:w-1/4"
                                    onClick={showSuccess}
                                >
                                    Accept
                                </button>
                                <button
                                    className="flex justify-center items-center py-2 px-16 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/4"
                                    onClick={showDelete}
                                >
                                    Decline
                                </button>
                            </div>

                        </div>

                    </div>
                )}

                {success && (
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                        <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                        <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/5 h-1/4 text-center rounded-xl'>

                            <div className='block lg:flex lg:justify-between pt-12 pb-8 px-8'>
                                <div className='px-14'>
                                    <span className="font-semibold">Post Deleted Successfully !!!</span>
                                </div>
                            </div>

                            <div className='block lg:flex px-12 w-full justify-center bg-white rounded-b-2xl'>
                                <button className='flex justify-center items-center py-2 pb-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#25B060] mr-2 w-full lg:w-1/2' onClick={showSuccess}>Close</button>

                            </div>

                        </div>

                    </div>
                )}

                {report && (
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                        <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                        <div className='absolute top-24 left-1/3 ml-28 bg-white w-1/3 h-3/4 text-center rounded-xl overflow-y-scroll'>

                            <div className='flex mb-2 p-2 justify-end w-full rounded-t-md'>
                                <div onClick={showReport}> <X /></div>
                            </div>
                            <div className='px-14 pb-6 text-center justify-center'>
                                <div className="font-bold text-xl ">Reported Users</div>
                            </div>
                            <div className="flex flex-wrap">
                                {userdetails.map((userdetails) => (
                                    <div key={userdetails.id} className="w-full md:w-full lg:w-full px-3 pb-3 pt-2 border-b-2 border-gray-200">
                                        <div className="flex lg:w-full justify-between items-center p-2 mx-2 text-sm">
                                            <div className="flex gap-1 items-center">
                                                <img
                                                    src={`https://i.pravatar.cc/300?img=${randomNumber}`}
                                                    alt={`nr`}
                                                    className="h-10 w-10 rounded-full"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="font-bold">{userdetails.name} (Class {userdetails.class})</span>
                                                    <span className="text-dark-grey pl-2">{userdetails.school}</span>
                                                </div>
                                            </div>
                                            <div className="flex ml-54 p-4">
                                                <span className="text-dark-grey">{userdetails.time} Hours ago</span>
                                            </div>
                                        </div>
                                        <span>This Post is an Adult Content make sure its an adult </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                )}
            </div>
            <div className="px-7 py-2 text-sm">
                <span className="break-words">Hi, Everyone what your favorite in sports day today.</span>

            </div>
        </div>
    );
};

export default GlobalFeedCardHeader2;
