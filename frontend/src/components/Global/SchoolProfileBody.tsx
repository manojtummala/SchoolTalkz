import Link from 'next/link';
import Image from 'next/image'
import SchoolProfileImage from '@/asset/images/SchoolProfileImage.png'
import StudentA from '@/asset/images/Student1.png'
import StudentB from '@/asset/images/Student2.png'
import StudentC from '@/asset/images/Student3.png'
import { useState, useEffect } from 'react';
import { PostData } from "@/data"
import Labels from "../Labels";
import LocationIcon from '@/asset/images/LocationIcon';
import PostsLogo from '@/asset/images/PostsLogo';
import WorkshopsLogo from '@/asset/images/WorkshopsLogo';
import GlobalFeed from './GlobalFeed';
import { RecentLogo, TrendingLogo } from '@/asset/images';
import LeaderboardLogo from '@/asset/images/LeaderboardLogo';
import TrophyLogo from '@/asset/images/TrophyLogo';
import { SchoolsData } from '@/data';
import WinnerTrophy from '@/asset/images/WinnerTrophy';

type FeedProp = {
    postData: any;
};

type schooltype = {
    id: string,
    name: string,
    location: string,
    followers: string,
    achievements: string,
    creations: string,
    stars: string,
}

type data = {
    id: string;
    student: {
        name: string,
        // stars: string,
    }[];
};

const SchoolData: schooltype[] = [
    { id: '1', name: 'Sparkling International School', location: 'Chennai', followers: '5.9k', creations: '2.3k', achievements: '1.2k', stars: '95' },
    // { id: '2', name: 'Global International School', location: 'Chennai', followers: '7.2k', creations: '2.3k', achievements: '1.2k', stars: '100' },

]
const LeaderboardData: data[] = [
    {
        id: "1",
        student: [
            { name: "Olive Angel" },
            // { stars: '252' },
        ]
    },
];


const SchoolProfileBody = () => {

    const [follow, setFollow] = useState(true)
    const [feedPosts, setFeedPosts] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [recent, setRecent] = useState(true)
    const [trending, setTrending] = useState(false)
    const [leaderboard, setLeaderboard] = useState(false)
    const [leaderfeed, setLeaderFeed] = useState(false)

    useEffect(() => {
        console.log(`fetching start`)
        fetchData();
        console.log(`fetching done`)
        setLoading(false)
        console.log(`loading false`)

    }, []);

    const fetchData = (type = "recent") => {
        setInterval(() => setFeedPosts(PostData), 4000);
    };


    function showFollow(data: any) {
        data.status = !data.status
        setFollow(data.status)
    }

    function showRecent() {
        setRecent(true)
        setTrending(false)
        setLeaderboard(false)

    }

    function showTrending() {
        setRecent(false)
        setTrending(true)
        setLeaderboard(false)

    }

    function showLeaderboard() {
        setRecent(false)
        setTrending(false)
        setLeaderboard(true)
    }

    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn);
        setLeaderFeed(!leaderfeed)
    }

    return (
        <div>
            <div className=' w-full flex-col bg-myBlue p-4 lg:h-full lg:w-full'>
                <div className='px-12 pt-6'>
                    {SchoolData.map((data, i) => (
                        <div className='block bg-gradient-to-t from-[#F55F01] to-[#FAA001] rounded-3xl pb-2 mb-2 px-4' key={i}>

                            <div className='lg:flex block text-white items-center w-full' >
                                <div className='px-3'>
                                    <div className='w-24 h-24 rounded-full m-4'>
                                        <Image src={SchoolProfileImage} width={150} height={1500} alt="" className='w-full h-full rounded-full cursor-pointer' />
                                    </div>
                                </div>
                                <div className='flex flex-col pb-4'>
                                    <div className='flex flex-col justify-around px-2 mt-6 mb-2'>
                                        <div className='' >
                                            <h4 className='text-xl mb-1 font-bold'>{data.name}</h4>
                                            <span className='flex items-center gap-2 text-sm text-greyColor'>
                                                <LocationIcon />
                                                {data.location}
                                            </span>
                                        </div>

                                    </div>


                                    {follow ? (
                                        <div onClick={() => showFollow(data)} className='flex flex-col justify between bg-[#03194D4D] px-16 py-2 mt-2 w-52 rounded-3xl cursor-pointer'>
                                            <div className='text-lg'>
                                                Following
                                            </div>
                                        </div>) :

                                        (<div onClick={() => showFollow(data)} className='flex flex-col justify between bg-[#0A1122] px-20 py-2 mt-2 w-52 rounded-3xl cursor-pointer'>
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

                <div className='flex items-center justify-center gap-40 pt-6'>
                    <div className="cursor-pointer flex flex-col items-center justify-center" onClick={showRecent}>
                        <RecentLogo />
                        <div className='text-lg font-semibold'>Recent</div>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center justify-center" onClick={showTrending}>
                        <TrendingLogo />
                        <div className='text-lg font-semibold'>Trending</div>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center justify-center" onClick={showLeaderboard}>
                        <TrophyLogo />
                        <div className='text-lg font-semibold'>Leaderboard</div>
                    </div>
                </div>

                {recent && (
                    <div>
                        <GlobalFeed postData={feedPosts} />
                        <Labels />
                    </div>
                )}

                {trending && (
                    <div>
                        <GlobalFeed postData={feedPosts} />
                        <Labels />
                    </div>
                )}

                {leaderboard && (
                    <div className='p-8 px-14'>
                        <div className='flex flex-col items-center justify-center bg-black'>
                            <div className='flex p-6'>
                                <button
                                    className={`bg-${isOn ? 'white' : '[#523A12]'} text-${isOn ? '[#737272]' : 'white'} font-bold text-lg py-2 px-4 rounded-l-3xl`}
                                    onClick={handleClick}
                                >
                                    This Month
                                </button>
                                <button
                                    className={`bg-${isOn ? '[#523A12]' : 'white'} text-${isOn ? 'white' : '[#737272]'} font-bold text-lg py-2 px-4 rounded-r-3xl`}
                                    onClick={handleClick}
                                >
                                    Year
                                </button>
                            </div>
                            <div className='flex pt-3'>
                                <WinnerTrophy />
                            </div>
                            <div className='pb-20'>
                                {leaderfeed ? (
                                    <div className='grid grid-cols-3'>
                                        {/* {LeaderboardData.map((data) => (
                                            <div key={data.id}>
                                                {data.student.map((topic) => ( */}
                                        {/* <div> */}
                                        <div className='flex flex-col block bg-white p-8 mt-8 ml-6 w-52 h-60 items-center justify-center text-black rounded-2xl'>
                                            <div className='flex'>
                                                <Image src={StudentC} width={110} height={110} alt='' />
                                            </div>
                                            <div className='flex justify-center font-bold text-xl pt-4 '>Olive Angel</div>
                                            <div className='flex justify-center font-light text-lg'>250 Stars</div>
                                        </div>
                                        <div className='flex flex-col block bg-gradient-to-t from-[#32C3F1] to-[#29F857] px-12 pb-12 pt-8 text-center rounded-2xl'>
                                            <div className='flex'>
                                                <Image src={StudentA} width={160} height={160} alt='' />
                                            </div>
                                            <div className='flex justify-center text-white font-bold text-xl pt-4 '>Harish S</div>
                                            <div className='flex justify-center text-white font-light text-lg'>252 Stars</div>
                                        </div>
                                        <div className='flex flex-col block bg-white p-8 mt-8 ml-6 w-52 h-60 items-center justify-center text-black rounded-2xl'>
                                            <div className='flex'>
                                                <Image src={StudentB} width={110} height={110} alt='' />
                                            </div>
                                            <div className='flex justify-center font-bold text-xl pt-4 '>Dency</div>
                                            <div className='flex justify-center font-light text-lg'>251 Stars</div>
                                        </div>
                                        {/* </div> */}
                                        {/* ))}
                                            </div>
                                        ))} */}
                                    </div>) :
                                    (<div className='grid grid-cols-3'>
                                        <div className='flex flex-col block bg-white p-8 mt-8 ml-6 w-52 h-60 items-center justify-center text-black rounded-2xl'>
                                            <div className='flex'>
                                                <Image src={StudentC} width={110} height={110} alt='' />
                                            </div>
                                            <div className='flex justify-center font-bold text-xl pt-4 '>Olive Angel</div>
                                            <div className='flex justify-center font-light text-lg'>250 Stars</div>
                                        </div>
                                        <div className='flex flex-col block bg-gradient-to-t from-[#32C3F1] to-[#29F857] px-12 pb-12 pt-8 items-center justify-center rounded-2xl'>
                                            <div className='flex'>
                                                <Image src={StudentB} width={160} height={160} alt='' />
                                            </div>
                                            <div className='flex justify-center text-white font-bold text-xl pt-4 '>Dency</div>
                                            <div className='flex justify-center text-white font-light text-lg'>252 Stars</div>
                                        </div>
                                        <div className='flex flex-col block bg-white p-8 mt-8 w-52 ml-6 h-60 items-center justify-center text-black rounded-2xl'>
                                            <div className='flex'>
                                                <Image src={StudentA} width={110} height={110} alt='' />
                                            </div>
                                            <div className='flex justify-center font-bold text-xl pt-4 '>Harish S</div>
                                            <div className='flex justify-center font-light text-lg'>251 Stars</div>
                                        </div>
                                    </div>)
                                }

                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default SchoolProfileBody;