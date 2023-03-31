import Image from 'next/image'
import CommunityImg from "../../../asset/images/CommunityImg.png"
import { useState } from 'react';
import JoinArrow from '@/asset/images/JoinArrow';

interface comdata {
    id: number;
    name: string;
    comm: string,
    number: string;
}

const commdetails: comdata[] = [
    { id: 1, name: 'Gloal Community', comm: 'Arts', number: '195' },
    { id: 2, name: 'Art Start', comm: 'Arts', number: '195' },
    { id: 3, name: 'Brushes and Paints', comm: 'Arts', number: '195' },
    { id: 4, name: 'Brushes and Paints', comm: 'Arts', number: '195' },
    { id: 5, name: 'Sparking Community', comm: 'Arts', number: '195' },
    { id: 6, name: 'Gloal Community', comm: 'Arts', number: '195' },
    { id: 7, name: 'Art Start', comm: 'Arts', number: '195' },
    { id: 8, name: 'Brushes and Paints', comm: 'Arts', number: '195' },

]

const CategoryCommunities = () => {

    const [join, setJoin] = useState(true)

    function showJoined() {
        setJoin(!join)
    }

    function joined() {
        {
            join ? (
                <div onClick={showJoined} className='flex items-center justify-center pt-2 cursor-pointer'>
                    <div className='text-orange-500 font-semibold mr-2'>Join</div>
                    <div><JoinArrow /></div>
                </div>) :

                (<div className='flex items-center justify-center pt-2 cursor-pointer'>
                    <div className='text-gray-500 font-semibold mr-2'>Joined</div>
                </div>
                )

        }
    }
    return (

        <div className='grid grid-cols-4 gap-6 p-14 px-14'>
            {commdetails.map((commdetails) => (
                <div key={commdetails.id} className="">
                    <div className=" p-2 bg-white w-full min-w-[200px] rounded-md shadow-small-bottom">
                        <div className="w-full">
                            <Image src={CommunityImg} alt='' className="w-full object-cover h-54 max-h-96" />
                        </div>
                        <div className='' >
                            <p className='font-semibold pt-3'>{commdetails.name}</p>
                            <div className='flex gap-5 pt-2 pb-3 text-xs text-gray-500 border-b-2 border-gray-300'>
                                <div className='border-r-2 border-gray-300 pr-6'>{commdetails.comm}</div>
                                <div>{commdetails.number} Members</div>
                            </div>
                            {
                                join ? (
                                    <div onClick={showJoined} className='flex items-center justify-center pt-2 cursor-pointer'>
                                        <div className='text-orange-500 font-semibold mr-2'>Join</div>
                                        <div><JoinArrow /></div>
                                    </div>) :

                                    (<div className='flex items-center justify-center pt-2 cursor-pointer'>
                                        <div className='text-gray-500 font-semibold mr-2'>Joined</div>
                                    </div>
                                    )

                            }
                        </div>
                    </div>


                </div>
            ))}

        </div>
    )
}

export default CategoryCommunities;