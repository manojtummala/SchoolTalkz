import { useState } from 'react';
import GoalsLogo from "@/asset/images/GoalsLogo";
import LeaderboardLogo1 from "@/asset/images/LeaderboardLogo1";
import Image from 'next/image'
import LeaderboardStar from "@/asset/images/LeaderboardStar.png";
import X from '@/asset/images/X';
import WinnerTrophy from '@/asset/images/WinnerTrophy';
import Student1 from '@/asset/images/Student1.png'
import Student2 from '@/asset/images/Student2.png'
import Student3 from '@/asset/images/Student3.png'
import { user } from '../Header';

type GoalsType = {
    name: string,
    stars: string,
    defstar: string,
}

const GoalsData: GoalsType[] = [
    { name: 'Create a post (1st 10 creations)', stars: '11', defstar: '1 Star' },
    { name: 'Create a achievement (1st 10 creations)', stars: '15', defstar: '3 Stars' },
    { name: 'Create a poll (1st 10 creations)', stars: '12', defstar: '5 Stars' },
    { name: 'Use Inspirations', stars: '20', defstar: 'Varies' },
    { name: 'Engaging with peers', stars: '9', defstar: '3 Stars' },
    { name: 'Post Recognition', stars: '15', defstar: '2 Stars' },
]


const LearboardBody = () => {

    const [goal, setGoal] = useState(true)
    const [leaderboard, setLeaderboard] = useState(false)
    const [goals, setGoals] = useState(false)
    const [leaderfeed, setLeaderFeed] = useState(false)


    function showGoal() {
        setGoal(true)
        setLeaderboard(false)
    }

    function showLeaderboard() {
        setGoal(false)
        setLeaderboard(true)
    }

    function showGoals() {
        setGoals(!goals)
    }

    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn);
        setLeaderFeed(!leaderfeed)
    }


    return (
        <div className="bg-light-bg-blue">
            <div className='w-full flex-col bg-myBlue p-4 lg:h-full lg:w-full'>
                <div className='flex items-center justify-center gap-40'>
                    <div className="cursor-pointer flex flex-col items-center justify-center" onClick={showGoal}>
                        <GoalsLogo />
                        <div className='text-lg -mt-4 font-semibold'>Goals</div>
                    </div>
                    <div className="cursor-pointer flex flex-col items-center justify-center" onClick={showLeaderboard}>
                        <LeaderboardLogo1 mode="dark" />
                        <div className='text-lg -mt-4 font-semibold'>Leaderboard</div>
                    </div>
                </div>
            </div>
            {goal && (
                <div className=' flex-container'>

                    <div className='flex flex-col items-center justify-center py-10'>
                        {user.map((data) => (
                            <div className='flex justify-between lg:w-2/3 w-full  block bg-gradient-to-t from-[#7C090B] to-[#DE2135] rounded-3xl text-white p-10' key={data.id}>
                                <div className='text-3xl font-bold pt-1'>Stars you Earned</div>
                                <div className='text-5xl font-bold -mr-80'>{data.starsearned} Stars</div>
                                <div className='-mt-28 -mr-6'><Image src={LeaderboardStar} alt='' /></div>
                            </div>
                        ))}
                        <div className='lg:w-2/3 w-full block bg-white pb-10 rounded-b-2xl'>
                            <div className=' flex justify-center pt-8 text-xl font-bold'>
                                Your Rewards
                            </div>

                            <div className='pt-14 px-16 '>
                                {GoalsData.map((data, i) => (
                                    <div className='flex justify-between border-b-2 gray-300 py-6' key={i}>
                                        <div className='font-semibold text-gray-600'>
                                            {data.name}
                                        </div>
                                        <div className='font-bold'>
                                            {data.stars} Stars
                                        </div>
                                    </div>

                                ))}
                            </div>

                            <div className='text-[#D86500] font-semibold text-center pt-12 cursor-pointer' onClick={showGoals}>
                                <span className='border-b-2 border-[#D86500]'>
                                    View Goals
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {goals && (
                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                    <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                    <div className='absolute top-24 right-1/4 ml-28 bg-white w-2/5 h-3/4 text-center rounded-3xl'>

                        <div className='flex mb-2 p-4 pr-8 justify-end w-full rounded-t-md'>
                            <div onClick={showGoals}> <X /></div>
                        </div>
                        <div className='px-14 pb-6 text-center justify-center'>
                            <div className="font-bold text-xl ">Your Goals</div>
                        </div>
                        <div className='pt-6 px-16 '>
                            {GoalsData.map((data, i) => (
                                <div className='flex justify-between border-b-2 gray-300 py-6' key={i}>
                                    <div className='font-semibold text-gray-600'>
                                        {data.name}
                                    </div>
                                    <div className='font-bold'>
                                        {data.defstar}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                            {leaderfeed ? (<div className='grid grid-cols-3'>
                                <div className='flex flex-col block bg-white p-8 mt-8 ml-6 w-52 h-60 items-center justify-center text-black rounded-2xl'>
                                    <div className='flex'>
                                        <Image src={Student3} width={110} height={110} alt='' />
                                    </div>
                                    <div className='flex justify-center font-bold text-xl pt-4 '>Olive Angel</div>
                                    <div className='flex justify-center font-light text-lg'>250 Stars</div>
                                </div>
                                <div className='flex flex-col block bg-gradient-to-t from-[#32C3F1] to-[#29F857] px-12 pb-12 pt-8 text-center rounded-2xl'>
                                    <div className='flex'>
                                        <Image src={Student1} width={160} height={160} alt='' />
                                    </div>
                                    <div className='flex justify-center text-white font-bold text-xl pt-4 '>Harish S</div>
                                    <div className='flex justify-center text-white font-light text-lg'>252 Stars</div>
                                </div>
                                <div className='flex flex-col block bg-white p-8 mt-8 ml-6 w-52 h-60 items-center justify-center text-black rounded-2xl'>
                                    <div className='flex'>
                                        <Image src={Student2} width={110} height={110} alt='' />
                                    </div>
                                    <div className='flex justify-center font-bold text-xl pt-4 '>Dency</div>
                                    <div className='flex justify-center font-light text-lg'>251 Stars</div>
                                </div>
                            </div>) :
                                (<div className='grid grid-cols-3'>
                                    <div className='flex flex-col block bg-white p-8 mt-8 ml-6 w-52 h-60 items-center justify-center text-black rounded-2xl'>
                                        <div className='flex'>
                                            <Image src={Student3} width={110} height={110} alt='' />
                                        </div>
                                        <div className='flex justify-center font-bold text-xl pt-4 '>Olive Angel</div>
                                        <div className='flex justify-center font-light text-lg'>250 Stars</div>
                                    </div>
                                    <div className='flex flex-col block bg-gradient-to-t from-[#32C3F1] to-[#29F857] px-12 pb-12 pt-8 items-center justify-center rounded-2xl'>
                                        <div className='flex'>
                                            <Image src={Student2} width={160} height={160} alt='' />
                                        </div>
                                        <div className='flex justify-center text-white font-bold text-xl pt-4 '>Dency</div>
                                        <div className='flex justify-center text-white font-light text-lg'>252 Stars</div>
                                    </div>
                                    <div className='flex flex-col block bg-white p-8 mt-8 w-52 ml-6 h-60 items-center justify-center text-black rounded-2xl'>
                                        <div className='flex'>
                                            <Image src={Student1} width={110} height={110} alt='' />
                                        </div>
                                        <div className='flex justify-center font-bold text-xl pt-4 '>Harish S</div>
                                        <div className='flex justify-center font-light text-lg'>251 Stars</div>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>

                    {user.map((data) => (
                        <div key={data.id}>
                            <div className='pt-10' >
                                <div className='block flex flex-col bg-white py-10 rounded-3xl'>
                                    <div className='flex items-center justify-center font-bold text-2xl'>
                                        My Class Position
                                    </div>
                                    <div className='flex justify-between pt-8 px-24 text-lg font-semibold'>
                                        <div className='flex'>{data.name}</div>
                                        <div className='flex text-[#D86500]'>Rank {data.classrank}</div>
                                        <div className='flex'>{data.starsearned} Stars</div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-10'>
                                <div className='block flex flex-col bg-white py-10 rounded-3xl'>
                                    <div className='flex items-center justify-center font-bold text-2xl'>
                                        My School Position
                                    </div>
                                    <div className='flex justify-between pt-8 px-24 text-lg font-semibold'>
                                        <div className='flex'>{data.name}</div>
                                        <div className='flex text-[#D86500]'>Rank {data.schoolrank}</div>
                                        <div className='flex'>{data.starsearned} Stars</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    )
}

export default LearboardBody;