import { ThreeEllipses } from "@/asset/images";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css"; import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import X from "@/asset/images/X";
import GlobalOrange from "@/asset/images/GlobalOrange";


const randomNumber: number = Math.floor(Math.random() * 10) + 1;

const PostHeader2 = () => {

    const [dlt, setDlt] = useState(false);
    const [dltsuccess, setDltSuccess] = useState(false);
    const [report, setReport] = useState(false);
    const [share, setShare] = useState(false);
    const [shareSuccess, setShareSuccess] = useState(false);
    const [reportSuccess, setreportSuccess] = useState(false);


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

    function showDltSuccess() {
        setDltSuccess(!dltsuccess)
        setDlt(false)
    }

    function showReport() {
        setReport(!report)
    }

    function showShare() {
        setShare(!share)
    }

    function showShareSuccess() {
        setShareSuccess(!shareSuccess)
        setShare(false)
    }

    function showReported() {
        setreportSuccess(!reportSuccess)
    }

    return (
        <div className="">
            <div className="flex gap-6 justify-between items-center p-4 mx-2 text-sm">
                <div className="flex gap-2 items-center">
                    <img
                        src={`https://i.pravatar.cc/300?img=${randomNumber}`}
                        alt=''
                        className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col px-2">
                        <span className="font-bold">Madhan (Class VI)</span>
                        <span className="text-dark-grey text-xs">1 hours ago</span>
                    </div>
                </div>



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
                    {/* For Staff  */}
                    {/* <MenuItem onClick={showDelete}>Delete post</MenuItem> */}

                    <MenuItem onClick={showReported} className={'m-2 mt-4'}>Report Post</MenuItem>
                    <MenuItem onClick={showShare} className={'m-2'}>Request to Share in Global Feed</MenuItem>
                </Menu>

                {/* for staff  */}

                {/* {dlt && (
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
                                onClick={showDltSuccess}
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

            {dltsuccess && (
                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                    <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/5 h-1/4 text-center rounded-xl'>

                        <div className='block lg:flex lg:justify-between pt-12 pb-8 px-8'>
                            <div className='px-14'>
                                <span className="font-semibold">Post Deleted Successfully !!!</span>
                            </div>
                        </div>

                        <div className='block lg:flex px-12 w-full justify-center bg-white rounded-b-2xl'>
                            <button className='flex justify-center items-center py-2 pb-2 px-8 rounded-xl border-none text-white cursor-pointer bg-[#25B060] mr-2 w-full lg:w-1/2' onClick={showDltSuccess}>Close</button>

                        </div>

                    </div>

                </div>
            )}

                {/* for Student */}

                {share && (
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                        <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                        <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/5 h-1/4 text-center rounded-xl'>

                            <div className='flex mb-4 justify-end w-full rounded-t-md'>
                                <div onClick={showShare}> <X /></div>
                            </div>
                            <div className='block lg:flex lg:justify-between pt-2 pb-6 px-20'>
                                <div className=''>
                                    <span className="font-normal">Are you sure to request for Global feed ?</span>
                                </div>
                            </div>
                            <div className="block lg:flex pt-4 px-12 pb-8 gap-2 w-full justify-center bg-white rounded-2xl shadow-2xl">
                                <button
                                    type="submit"
                                    className="flex justify-center items-center py-2 px-16 ml-4  rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#25B060] to-[#25B060] mr-4 w-full mb-2 lg:w-1/4"
                                    onClick={showShareSuccess}
                                >
                                    Accept
                                </button>
                                <button
                                    className="flex justify-center items-center py-2 px-16 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/4"
                                    onClick={showShare}
                                >
                                    Decline
                                </button>
                            </div>

                        </div>

                    </div>
                )}

                {shareSuccess && (
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                        <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                        <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/5 h-4/3 text-center rounded-xl'>

                            <div className='flex mb-4 justify-end w-full rounded-t-md'>
                                <div onClick={showShareSuccess}> <X /></div>
                            </div>
                            <div className='block flex flex-col lg:justify-between pb-6 px-8'>
                                <div className='flex justify-center'>
                                    <span className="flex font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#F55F01] to-[#FAA001] text-base">Well Done !</span>
                                </div>
                                <div className="flex justify-center">
                                    <span className="pt-3 text-xs">Your post is request to publish in Global Community</span>
                                </div>
                                <div className="flex justify-center pt-2">
                                    <GlobalOrange />
                                </div>
                                <div className="text-center pt-3">
                                    <div className="font-bold">You have earned 25 Stars</div>
                                    <div className="text-xs">Total Stars Earned: 234</div>
                                </div>
                            </div>

                        </div>

                    </div>
                )}

                {reportSuccess && (
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                        <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                        <div className='absolute top-1/3 left-1/3 ml-28 bg-white w-1/5 h-1/4 text-center rounded-xl'>

                            <div className='flex mb-4 justify-end w-full rounded-t-md'>
                                <div onClick={showReported}> <X /></div>
                            </div>
                            <div className='block flex flex-col lg:justify-between pt-10 pb-6 px-8'>
                                <div className='flex justify-center'>
                                    <span className="flex font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#F55F01] to-[#FAA001] text-base">Post Reported Successfully !</span>
                                </div>
                            </div>

                        </div>

                    </div>
                )}

            </div>
            <div className="flex flex-col px-7 pb-2 text-sm">
                <span className="break-words">Hi, Everyone what your favorite in sports day today.</span>

            </div>
        </div>

    );
};

export default PostHeader2;
