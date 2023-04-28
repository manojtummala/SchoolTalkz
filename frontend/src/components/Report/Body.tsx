import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import ClassLeaderboard from "@/asset/images/ClassLeaderboard.png"
import LeaderboardClassCompare from "@/asset/images/LeaderboardClassCompare.png"
import TopStudentLeaderboard from "@/asset/images/TopStudentLeaderboard.png"
import StaffLeaderboard from "@/asset/images/StaffLeaderboard.png"
import ClassEmotionRate from "@/asset/images/ClassEmotionRate.png"
import Link from 'next/link';


const leaderboarddata = [
    { name: 'CLASS LEADERBOARD', img: ClassLeaderboard, link: 'class_leaderboard' },
    { name: 'LEADERBOARD CLASS COMPARISION', img: LeaderboardClassCompare, link: 'leaderboard_class_compare' },
    { name: 'TOP STUDENT LEADERBOARD', img: TopStudentLeaderboard, link: 'top_student_leaderboard' },
    { name: 'STAFF LEADERBOARD', img: StaffLeaderboard, link: 'staff_leaderboard' },
]

const emotioncapturedata = [
    { name: 'CLASS EMOTION RATE REPORT', img: ClassEmotionRate, link: 'class_emotion_report' },
]

const ReportBody = () => {
    return (
        <div className="w-full flex-col bg-myBlue p-4 pt-28 lg:w-full h-full pb-32">

            <div className='p-4'>
                <h4 className="font-bold ml-2">Leaderboard Report</h4> <br />
                <div className='grid grid-cols-4 gap-8 pb-12'>
                    {leaderboarddata.map((data, i) => (
                        <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-8 mt-6 mx-2' key={i}>
                            <Link href={data.link}><button>
                                <div className='flex items-center justify-center -mt-10'>
                                    <Image src={data.img} alt="" className='relative' />
                                </div>
                                <div className='text-xs font-semibold mt-4'>
                                    {data.name}
                                </div>
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className='pt-6'>
                    <h4 className="font-bold ml-2">Emotion Capture Report</h4> <br />
                    <div className='pb-24 grid grid-cols-4 gap-8'>
                        {emotioncapturedata.map((data, i) => (
                            <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-8 mt-6 mx-2' key={i}>
                                <Link href={data.link}><button>
                                    <div className='flex items-center justify-center -mt-10'>
                                        <Image src={data.img} alt="" className='relative' />
                                    </div>
                                    <div className='text-xs font-semibold mt-4'>
                                        {data.name}
                                    </div>
                                </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReportBody