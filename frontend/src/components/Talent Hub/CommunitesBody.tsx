import Image from 'next/image'
import CommunityImg from "../../asset/images/CommunityImg.png"
import { useState } from 'react';
import JoinArrow from '@/asset/images/JoinArrow';
import Link from 'next/link';

interface comdata {
    id: number;
    name: string;
    comm: string,
    number: string;
    link: string;
    status: boolean;
}

const commdetails: comdata[] = [
    { id: 1, name: 'Gloal Community', comm: 'Arts', number: '195', link: '/communityprofile', status: true },
    { id: 2, name: 'Art Start', comm: 'Arts', number: '195', link: '/communityprofile', status: true },
    { id: 3, name: 'Studio Art', comm: 'Dance', number: '195', link: '/communityprofile', status: true },
    { id: 4, name: 'Brushes and Paints', comm: 'Arts', number: '195', link: '/communityprofile', status: true },
    { id: 5, name: 'Dance with Kaushik', comm: 'Dance', number: '195', link: '/communityprofile', status: true },
    { id: 6, name: 'Chess Minds', comm: 'Sports', number: '195', link: '/communityprofile', status: true },
    { id: 7, name: 'Dance with Varun', comm: 'Dance', number: '195', link: '/communityprofile', status: true },
    { id: 8, name: 'Brushes and Paints', comm: 'Arts', number: '195', link: '/communityprofile', status: true },
    { id: 9, name: 'Sparking Community', comm: 'Arts', number: '195', link: '/communityprofile', status: true },
    { id: 10, name: 'Play with Karun', comm: 'Sports', number: '195', link: '/communityprofile', status: true },

]

const CommunitiesBody = () => {

    const [join, setJoin] = useState()

    function showJoined(commdetails: any) {
        setJoin(commdetails.status)
        commdetails.status = !commdetails.status
        setJoin(commdetails.status)
        console.log(join)
    }

    return (
        <div className="bg-light-bg-blue">

            <div className='grid grid-cols-4 gap-6 p-14 px-14'>
                {commdetails.map((commdetails) => (
                    <div className="" key={commdetails.id}>
                        <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                            <Link href={commdetails.link} >
                                <div className="w-full">
                                    <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                                </div>
                            </Link>
                            <div className='' >
                                <p className='font-semibold pt-3'>{commdetails.name}</p>
                                <div className='flex gap-5 pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                    <div className='border-r-2 border-gray-300 pr-6'>{commdetails.comm}</div>
                                    <div>{commdetails.number} Members</div>
                                </div>

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
                    </div>
                ))}
            </div>
        </div >
    )

}

export default CommunitiesBody;

