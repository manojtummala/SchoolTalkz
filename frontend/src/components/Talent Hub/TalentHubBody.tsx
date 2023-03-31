import Image from 'next/image'
import CommunityImg from "../../asset/images/CommunityImg.png"
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JoinArrow from '@/asset/images/JoinArrow';
import MusicCategory from '@/asset/images/MusicCategory';
import Link from 'next/link';
import DanceCategory from '@/asset/images/DanceCategory';
import RoboticsCategory from '@/asset/images/RoboticsCategory';
import STEMCategory from '@/asset/images/STEMCategory';
import SpaceCategory from '@/asset/images/SpaceCategory';
import ArtCategory from '@/asset/images/ArtCategory';


const TalentHubBody = () => {


    return (
        <div className="flex-container">
            <div className="bg-light-bg-blue">
                <div className=''>
                    <div className="px-20 py-6 pt-16 flex items-center justify-between">
                        <div className="">
                            <p className="font-bold text-xl">Explore Communities</p>
                        </div>
                        <Link href='/communities'><div className="float-right cursor-pointer flex flex-col items-right text-orange-500 font-semibold border-b border-orange-500">View All</div></Link>

                    </div>
                    <div className="grid grid-cols-4 gap-6 place-items-center px-20">
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <div className="w-full">
                                <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                            </div>
                            <p className='font-semibold pt-3'>Gloal Community</p>
                            <div className='flex gap-5 pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='border-r-2 border-gray-300 pr-6'>Dance</div>
                                <div>195 Members</div>
                            </div>
                            <div className='flex items-center justify-center pt-2 cursor-pointer'>
                                <div className='text-orange-500 font-semibold mr-2'>Join</div>
                                <div><JoinArrow /></div>
                            </div>
                        </div>
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <div className="w-full">
                                <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                            </div>
                            <p className='font-semibold pt-3'>Gloal Community</p>
                            <div className='flex gap-5 pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='border-r-2 border-gray-300 pr-6'>Dance</div>
                                <div>195 Members</div>
                            </div>
                            <div className='flex items-center justify-center pt-2 cursor-pointer'>
                                <div className='text-orange-500 font-semibold mr-2'>Join</div>
                                <div><JoinArrow /></div>
                            </div>
                        </div>
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <div className="w-full">
                                <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                            </div>
                            <p className='font-semibold pt-3'>Gloal Community</p>
                            <div className='flex gap-5 pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='border-r-2 border-gray-300 pr-6'>Dance</div>
                                <div>195 Members</div>
                            </div>
                            <div className='flex items-center justify-center pt-2 cursor-pointer'>
                                <div className='text-orange-500 font-semibold mr-2'>Join</div>
                                <div><JoinArrow /></div>
                            </div>
                        </div>
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <div className="w-full">
                                <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                            </div>
                            <p className='font-semibold pt-3'>Gloal Community</p>
                            <div className='flex gap-5 pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='border-r-2 border-gray-300 pr-6'>Dance</div>
                                <div>195 Members</div>
                            </div>
                            <div className='flex items-center justify-center pt-2 cursor-pointer'>
                                <div className='text-orange-500 font-semibold mr-2'>Join</div>
                                <div><JoinArrow /></div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className='py-4'>
                    <div className="px-20 py-6 pt-16 flex items-center justify-between">
                        <div className="">
                            <p className="font-bold text-xl">Choose Category you are interested in</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6 place-items-center px-20">
                        <Link href='/music'>
                            <div className="flex p-2 bg-white w-full min-w-[200px] rounded-lg shadow-small-bottom">
                                <div className="px-2">
                                    <MusicCategory />
                                </div>
                                <p className='font-semibold p-2'>Music</p>
                            </div>
                        </Link>
                        <Link href='/dance'>
                            <div className="flex p-2 bg-white w-full min-w-[200px] rounded-lg shadow-small-bottom">
                                <div className="px-2">
                                    <DanceCategory />
                                </div>
                                <p className='font-semibold p-2'>Dance</p>
                            </div>
                        </Link>
                        <Link href='/art'>
                            <div className="flex p-2 bg-white w-full min-w-[200px] rounded-lg shadow-small-bottom">
                                <div className="px-2">
                                    <ArtCategory />
                                </div>
                                <p className='font-semibold p-2'>Art</p>
                            </div>
                        </Link>
                        <Link href='/space'>
                            <div className="flex p-2 bg-white w-full min-w-[200px] rounded-lg shadow-small-bottom">
                                <div className="px-2">
                                    <SpaceCategory />
                                </div>
                                <p className='font-semibold p-2'>Space</p>
                            </div>
                        </Link>
                        <Link href='/stem'>
                            <div className="flex p-2 bg-white w-full min-w-[200px] rounded-lg shadow-small-bottom">
                                <div className="px-2">
                                    <STEMCategory />
                                </div>
                                <p className='font-semibold p-2'>STEM</p>
                            </div>
                        </Link>
                        <Link href='/robotics'>
                            <div className="flex p-2 bg-white w-full min-w-[200px] rounded-lg shadow-small-bottom">
                                <div className="px-2">
                                    <RoboticsCategory />
                                </div>
                                <p className='font-semibold p-2'>Robotics</p>
                            </div>
                        </Link>

                    </div>
                </div>



                <div className='py-4 pb-20'>
                    <div className="px-20 py-6 pt-16 flex items-center justify-between">
                        <div className="">
                            <p className="font-bold text-xl">Explore Communities</p>
                        </div>
                        <Link href='/workshops'><div className="float-right cursor-pointer flex flex-col items-right text-orange-500 font-semibold border-b border-orange-500">View All</div></Link>
                    </div>
                    <div className="grid grid-cols-4 gap-6 place-items-center px-20">
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <div className="w-full">
                                <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                            </div>
                            <p className='font-semibold pt-3'>Gloal Community</p>
                            <div className='flex pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='pr-2'>Host :</div>
                                <div>Create with Anju</div>
                            </div>
                            <div className='flex items-center justify-center pt-2 cursor-pointer'>
                                <div className='text-orange-500 font-semibold mr-2'>Register Now</div>
                                <div><JoinArrow /></div>
                            </div>
                        </div>
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <div className="w-full">
                                <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                            </div>
                            <p className='font-semibold pt-3'>Gloal Community</p>
                            <div className='flex pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='pr-2'>Host :</div>
                                <div>Create with Anju</div>
                            </div>
                            <div className='flex items-center justify-center pt-2 cursor-pointer'>
                                <div className='text-orange-500 font-semibold mr-2'>Register Now</div>
                                <div><JoinArrow /></div>
                            </div>
                        </div>
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <div className="w-full">
                                <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                            </div>
                            <p className='font-semibold pt-3'>Gloal Community</p>
                            <div className='flex pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='pr-2'>Host :</div>
                                <div>Create with Anju</div>
                            </div>
                            <div className='flex items-center justify-center pt-2 cursor-pointer'>
                                <div className='text-orange-500 font-semibold mr-2'>Register Now</div>
                                <div><JoinArrow /></div>
                            </div>
                        </div>
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <div className="w-full">
                                <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                            </div>
                            <p className='font-semibold pt-3'>Gloal Community</p>
                            <div className='flex pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='pr-2'>Host :</div>
                                <div>Create with Anju</div>
                            </div>
                            <div className='flex items-center justify-center pt-2 cursor-pointer'>
                                <div className='text-orange-500 font-semibold mr-2'>Register Now</div>
                                <div><JoinArrow /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TalentHubBody;