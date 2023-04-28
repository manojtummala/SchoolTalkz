import Image from 'next/image'
import CommunityImg from "../../asset/images/CommunityImg.png"
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import JoinArrow from '@/asset/images/JoinArrow';
import MusicCategory from '@/asset/images/MusicCategory.png';
import Link from 'next/link';
import DanceCategory from '@/asset/images/DanceCategory.png';
import RoboticsCategory from '@/asset/images/RoboticsCategory.png';
import STEMCategory from '@/asset/images/STEMCategory.png';
import SpaceCategory from '@/asset/images/SpaceCategory.png';
import ArtCategory from '@/asset/images/ArtCategory.png';


interface comdata {
    id: number;
    img: any;
    name: string;
    comm: string,
    number: string;
    link: string;
    status: boolean;
}

interface workdata {
    id: number;
    img: any;
    name: string;
    host: string;
    link: string;
    status: boolean;
}

interface catdata {
    name: string,
    logo: any,
    link: string
}

const commdetails: comdata[] = [
    { id: 1, img: CommunityImg, name: 'Gloal Community', comm: 'Arts', number: '195', link: '/communityprofile', status: true },
    { id: 2, img: CommunityImg, name: 'Art Start', comm: 'Arts', number: '195', link: '/communityprofile', status: true },
    { id: 3, img: CommunityImg, name: 'Studio Art', comm: 'Dance', number: '195', link: '/communityprofile', status: true },
    { id: 4, img: CommunityImg, name: 'Brushes and Paints', comm: 'Arts', number: '195', link: '/communityprofile', status: true },
]

const catdata: catdata[] = [
    { name: 'Music', logo: MusicCategory, link: '/music' },
    { name: 'Dance', logo: DanceCategory, link: '/dance' },
    { name: 'Art', logo: ArtCategory, link: '/art' },
    { name: 'Space', logo: SpaceCategory, link: '/space' },
    { name: 'STEM', logo: STEMCategory, link: '/stem' },
    { name: 'Robotics', logo: RoboticsCategory, link: '/robotics' },
]

const workdetails: workdata[] = [
    { id: 1, img: CommunityImg, name: 'Canvas Painting workshop (5-8 years)', host: 'Create with anju', link: '/communityprofile', status: true },
    { id: 2, img: CommunityImg, name: 'Canvas Painting workshop (5-8 years)', host: 'Create with anju', link: '/communityprofile', status: true },
    { id: 3, img: CommunityImg, name: 'Canvas Painting workshop (5-8 years)', host: 'Create with anju', link: '/communityprofile', status: true },
    { id: 4, img: CommunityImg, name: 'Canvas Painting workshop (5-8 years)', host: 'Create with anju', link: '/communityprofile', status: true },
]



const TalentHubBody = () => {

    const [join, setJoin] = useState(commdetails[1].status)
    const [register, setRegister] = useState(workdetails[1].status)

    function showJoined(commdetails: any) {
        commdetails.status = !commdetails.status
        setJoin(commdetails.status)
        console.log(join)
    }

    function showRegister(data: any) {
        data.status = !data.status
        setRegister(data.status)
    }


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
                        {commdetails.map((commdetails) => (
                            <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom" key={commdetails.id}>
                                <Link href={commdetails.link}>
                                    <div className="w-full">
                                        <Image src={commdetails.img} alt='' className="w-full object-cover h-54 max-h-96" />
                                    </div>
                                </Link>
                                <p className='font-semibold pt-3 px-2'>{commdetails.name}</p>
                                <div className='flex gap-5 pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300 px-2'>
                                    <div className='border-r-2 border-gray-300 pr-6'>{commdetails.comm}</div>
                                    <div>{commdetails.number} Members</div>
                                </div>
                                {commdetails.status ? (
                                    <div onClick={() => showJoined(commdetails)} className='flex items-center justify-center pt-2 cursor-pointer'>
                                        <div className='text-orange-500 font-semibold mr-2'>Join</div>
                                        <div><JoinArrow /></div>
                                    </div>) :

                                    (<div className='flex items-center justify-center pt-2 cursor-pointer' onClick={() => showJoined(commdetails)}>
                                        <div className='text-gray-500 font-semibold mr-2'>Joined</div>
                                    </div>
                                    )

                                }
                            </div>
                        ))}
                    </div>
                </div>

                <div className='py-4'>
                    <div className="px-20 py-6 pt-16 flex items-center justify-between">
                        <div className="">
                            <p className="font-bold text-xl">Choose Category you are interested in</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-6 gap-6 place-items-center px-20">
                        {catdata.map((data, i) => (
                            <Link key={i} href={data.link}>
                                <div className="flex p-2 bg-white w-full min-w-[200px] rounded-lg shadow-small-bottom">
                                    <div className="px-2">
                                        <Image src={data.logo} alt='' />
                                    </div>
                                    <p className='font-semibold p-2'>{data.name}</p>
                                </div>
                            </Link>
                        ))}
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
                        {workdetails.map((data) => (
                            <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom" key={data.id}>
                                <Link href={data.link}>
                                    <div className="w-full">
                                        <Image src={data.img} alt='' className="w-full object-cover h-54 max-h-96" />
                                    </div>
                                </Link>
                                <p className='font-semibold pt-3 flex flex-wrap w-52 px-2'>{data.name}</p>
                                <div className='flex pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300 px-2'>
                                    <div className='pr-2'>Host : </div>
                                    <div>{data.host}</div>
                                </div>
                                {data.status ? (
                                    <div onClick={() => showRegister(data)} className='flex items-center justify-center pt-2 cursor-pointer'>
                                        <div className='text-orange-500 font-semibold mr-2'>Register</div>
                                        <div><JoinArrow /></div>
                                    </div>) :

                                    (<div className='flex items-center justify-center pt-2 cursor-pointer' onClick={() => showRegister(data)}>
                                        <div className='text-gray-500 font-semibold mr-2'>Registered</div>
                                    </div>
                                    )

                                }
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TalentHubBody;