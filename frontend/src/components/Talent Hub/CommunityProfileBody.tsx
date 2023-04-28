import Link from 'next/link';
import Image from 'next/image'
import CommunityProfileImg from '@/asset/images/CommunityProfileImg.png'
import { useState } from 'react';
import { PostData } from "@/data"
import DotsThree from '../../pages/DotsThree';
import ThumbsUp from '@/asset/images/ThumbsUp';
import ChatCircleText from '@/asset/images/ChatCircleText';
import BookmarkSimple from '@/asset/images/BookmarkSimple';
import LocationIcon from '@/asset/images/LocationIcon';
import PostsLogo from '@/asset/images/PostsLogo';
import WorkshopsLogo from '@/asset/images/WorkshopsLogo';
import CategoryPostCard from './Category/CategoryPostCard';
import CategoryPostCard2 from './Category/CategoryPostCard2';
import CategoryWorkshopCard from './Category/CategiryWorkshopCard';

type communitytype = {
    id: string,
    name: string,
    location: string,
    followers: string,
    achievements: string,
    creations: string,
    stars: string,
    status: boolean,
}

const CommunityData: communitytype[] = [
    { id: '1', name: 'Art Studio', location: 'Chennai', followers: '4.1k', creations: '3.2k', achievements: '2.3k', stars: '95', status: true },
    // { id: '2', name: 'Global International School', location: 'Chennai', followers: '7.2k', creations: '2.3k', achievements: '1.2k', stars: '100' },

]

const CommunityProfileBody = () => {

    const [posts, setPosts] = useState(true)
    const [workshop, setWorkshop] = useState(false)
    const [follow, setFollow] = useState()



    function showFollow(data: any) {
        data.status = !data.status
        setFollow(data.status)
        // console.log(follow)
    }

    function showPosts() {
        setPosts(true)
        setWorkshop(false)
    }

    function showWorkshop() {
        setPosts(false)
        setWorkshop(true)
    }

    // const fol = CommunityData[1].status


    return (
        <div>
            <div className='w-full flex-col bg-myBlue p-4 lg:h-full lg:w-full'>
                <div className='px-12 pt-6'>
                    {CommunityData.map((data, i) => (
                        <div className='block bg-gradient-to-t from-[#236E35] to-[#C6BE2A] rounded-3xl pb-2 mb-2 px-4' key={i}>
                            <div className='lg:flex block text-white items-center w-full'>
                                <div className='px-3'>
                                    <div className='w-24 h-24 rounded-full m-4'>
                                        <Image src={CommunityProfileImg} width={150} height={1500} alt="" className='w-full h-full rounded-full cursor-pointer' />
                                    </div>
                                </div>
                                <div className='flex flex-col pb-4'>
                                    <div className='flex flex-col justify-around px-2 mt-6 mb-2'>
                                        <div className=''>
                                            <h4 className='text-xl mb-1 font-bold'>{data.name}</h4>
                                            <span className='flex items-center gap-2 text-sm text-greyColor'>
                                                <LocationIcon />
                                                {data.location}
                                            </span>
                                        </div>
                                    </div>


                                    {data.status ? (
                                        <div onClick={() => showFollow(data)} className='flex flex-col justify between bg-[#03194D4D] px-16 py-2 mt-2 rounded-3xl cursor-pointer'>
                                            <div className='text-lg'>
                                                Following
                                            </div>
                                        </div>) :

                                        (<div onClick={() => showFollow(data)} className='flex flex-col justify between bg-[#0A1122] px-20 py-2 mt-2 rounded-3xl cursor-pointer'>
                                            <div className='text-lg'>
                                                Follow
                                            </div>
                                        </div>
                                        )
                                    }
                                </div>

                            </div>
                            <div className='w-full flex items-center text-center text-white justify-center gap-40 mt-4 pb-4 px-20'>
                                <div className='block items-center'>
                                    <h3 className='text-base font-bold'>{data.followers}</h3>
                                    <p className='text-base text-gray-300'>Followers</p>
                                </div>
                                <div className='block items-center'>
                                    <h3 className='text-base font-bold'>{data.creations}</h3>
                                    <p className='text-base text-gray-300'>Creations</p>
                                </div>
                                <div className='block items-center'>
                                    <h3 className='text-base font-bold'>{data.achievements}</h3>
                                    <p className='text-base text-gray-300'>Achievements</p>
                                </div>
                                <div className='block items-center'>
                                    <h3 className='text-base font-bold'>{data.stars}</h3>
                                    <p className='text-base text-gray-300'>Stars</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center gap-40'>
                    <div className="cursor-pointer flex flex-col items-center justify-center" onClick={showPosts}>
                        <PostsLogo />
                        <div className='text-lg font-semibold'>Posts</div>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center justify-center" onClick={showWorkshop}>
                        <WorkshopsLogo />
                        <div className='text-lg font-semibold'>Workshops</div>
                    </div>
                </div>

                {posts && (
                    <div className=' flex grid grid-cols-2 w-full pt-8 justify-around px-20 pb-20 gap-8'>
                        <div className="">
                            <div className="flex grid grid-row-2 gap-6 place-items-center">
                                {PostData.slice(0, 2).map((data, i) => {
                                    return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                                        <CategoryPostCard />
                                    </div>
                                })}
                            </div>
                        </div>

                        <div className="">
                            <div className="flex grid grid-row-2 gap-6 place-items-center">
                                {PostData.slice(0, 3).map((data, i) => {
                                    return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                                        <CategoryPostCard2 />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                )}

                {workshop && (
                    <div className=' flex grid grid-cols-2 w-full pt-8 justify-around px-20 pb-20 gap-8'>
                        <div className="">
                            <div className="flex grid grid-row-2 gap-6 place-items-center">
                                {PostData.slice(0, 2).map((data, i) => {
                                    return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                                        <CategoryWorkshopCard />
                                    </div>
                                })}
                            </div>
                        </div>

                        <div className="">
                            <div className="flex grid grid-row-2 gap-6 place-items-center">
                                {PostData.slice(0, 3).map((data, i) => {
                                    return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                                        <CategoryPostCard2 />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CommunityProfileBody;