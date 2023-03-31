import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import ClassLeaderboard from "@/asset/images/ClassLeaderboard.png"
import LeaderboardClassCompare from "@/asset/images/LeaderboardClassCompare.png"
import TopStudentLeaderboard from "@/asset/images/TopStudentLeaderboard.png"
import StaffLeaderboard from "@/asset/images/StaffLeaderboard.png"
import ClassEmotionRate from "@/asset/images/ClassEmotionRate.png"
import Link from 'next/link';


const ReportBody = () => {
    return (
        <div className='relative rounded-b-3xl w-full flex-col bg-myBlue p-4 lg:h-full lg:w-full pb-20'>
            <div className='p-4'>
                <h4 className="font-bold ml-2">Leaderboard Report</h4> <br />
                <div className='grid grid-cols-4 gap-4 pb-12'>
                    <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-10'>
                        <Link href='class_leaderboard'><button>
                            <div className='flex items-center justify-center'>
                                <Image src={ClassLeaderboard} alt="" className='relative' />
                            </div>
                            <div className='text-xs font-semibold'>
                                CLASS LEADERBOARD
                            </div>
                        </button>
                        </Link>
                    </div>

                    <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-10'>
                        <Link href='leaderboard_class_compare'><button>
                            <div className='flex items-center justify-center'>
                                <Image src={LeaderboardClassCompare} alt="" className='relative' />
                            </div>
                            <div className='text-xs font-semibold'>
                                LEADERBOARD CLASS COMPARISION
                            </div>
                        </button>
                        </Link>
                    </div>

                    <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-10'>
                        <Link href='top_student_leaderboard'><button>
                            <div className='flex items-center justify-center'>
                                <Image src={TopStudentLeaderboard} alt="" className='relative' />
                            </div>
                            <div className='text-xs font-semibold'>
                                TOP STUDENT LEADERBOARD
                            </div>
                        </button>
                        </Link>
                    </div>

                    <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-10'>
                        <Link href='staff_leaderboard'><button>
                            <div className='flex items-center justify-center'>
                                <Image src={StaffLeaderboard} alt="" className='relative' />
                            </div>
                            <div className='text-xs font-semibold'>
                                STAFF LEADERBOARD
                            </div>
                        </button>
                        </Link>
                    </div>
                </div>

                <div className='pt-6'>
                    <h4 className="font-bold ml-2">Emotion Capture Report</h4> <br />
                    <div className='pb-24'>
                        <div className='lg: flex items-center justify-center rounded-3xl w-1/4 shadow-xl object-none object-bottom bg-white pb-10'>
                            <Link href='class_emotion_report'><button>
                                <div className='flex items-center justify-center'>
                                    <Image src={ClassEmotionRate} alt="" className='relative' />
                                </div>
                                <div className='text-xs font-semibold'>
                                    CLASS EMOTION RATE REPORT
                                </div>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportBody