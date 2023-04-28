import Image from 'next/image'
import Select from 'react-select';
import { useEffect, useState, SyntheticEvent } from "react";
import { authInstance } from "../../pages/api/axios";
import PostsIcon from "@/asset/images/PostsIcon.png"
import AchievementsIcon from "@/asset/images/AchievementsIcon.png"
import PollsIcon from "@/asset/images/PollsIcon.png"
import StarsIcon from "@/asset/images/StarsIcon.png"
import Link from 'next/link';
import QuestionMark from "@/asset/images/QuestionMark.png"
import PrinterLogo from '@/asset/images/PrinterLogo';

interface OptionType {
    label: string;
    value: string;
}

interface TableType {
    name: string;
    posts: string;
    achievements: string;
    polls: string;
    stars: string;
}


const ratingOptions: OptionType[] = [
    { value: '10', label: 'Top 10' },
    { value: '15', label: 'Top 15' },
    { value: '20', label: 'Top 20' },
]

const monthOptions: OptionType[] = [
    { value: 'Overall', label: 'Overall', },
    { value: 'January', label: 'January', },
    { value: 'February', label: 'February', },
    { value: 'March', label: 'March', },
    { value: 'April', label: 'April', },
    { value: 'May', label: 'May', },
    { value: 'June', label: 'June', },
    { value: 'July', label: 'July', },
    { value: 'August', label: 'August', },
    { value: 'September', label: 'September', },
    { value: 'October', label: 'October', },
    { value: 'November', label: 'November', },
    { value: 'Decemeber', label: 'Decemeber', },

]

const studentData: TableType[] = [
    { name: 'Akash', posts: '20', achievements: '5', polls: '6', stars: '140' },
    { name: 'Akash', posts: '20', achievements: '5', polls: '6', stars: '140' },
    { name: 'Akash', posts: '20', achievements: '5', polls: '6', stars: '140' },
    { name: 'Akash', posts: '20', achievements: '5', polls: '6', stars: '140' },
    { name: 'Akash', posts: '20', achievements: '5', polls: '6', stars: '140' },
    { name: 'Akash', posts: '20', achievements: '5', polls: '6', stars: '140' },
    { name: 'Akash', posts: '20', achievements: '5', polls: '6', stars: '140' },
    { name: 'Akash', posts: '20', achievements: '5', polls: '6', stars: '140' },
]

const TopStudentBody = () => {

    const [selectedmonth, setSelectedMonth] = useState<OptionType | null>(null);
    const [selectedrating, setSelectedRating] = useState<OptionType | null>(null);

    const isBothSelected = selectedmonth && selectedrating

    const RenderClass = ({
        name,
        posts,
        achievements,
        polls,
        stars
    }: TableType) => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <span>{name}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                        <span>{posts}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span>{achievements}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span>{polls}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-center">
                    <div className="flex items-center">
                        <span>{stars} Stars</span>
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <div className=" w-full flex-col bg-myBlue p-4 pt-24 pt-10 lg:w-full h-full">
            <div className='p-4'>
                <h4 className="font-bold text-xl ml-8">Top Student Leaderboard</h4> <br />
                <div className='grid grid-cols-2 gap-4'>
                    <div className='block lg:flex lg: justify-between py-1 px-4'>
                        <div className='lg:flex-col lg:w-1/2 w-1/2 mb-6 ml-4'>
                            <Select
                                name="colors"
                                options={monthOptions}
                                className="basic-multi-select"
                                placeholder='Select Month'
                                value={selectedmonth}
                                onChange={(option) => setSelectedMonth(option)}
                            />
                        </div>
                        <div className='lg:flex-col lg:w-1/2 w-1/2 mb-6 ml-4'>
                            <Select
                                name="colors"
                                options={ratingOptions}
                                className="basic-multi-select"
                                placeholder='Select Rating'
                                value={selectedrating}
                                onChange={(option) => setSelectedRating(option)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {!isBothSelected ? (
                <div className='p-16 mt-12 pb-64'>
                    <div className='lg: flex flex-col rounded-3xl w-full shadow-xl bg-white pb-9'>
                        <div className='grid grid-row-3 items-center justify-center mt-12 mb-4 text-lg pr-32'>
                            <span>Kindly Select</span>
                            <span className='text-green-600 font-semibold'>Month and Rating</span>
                            <span>to view top student leaderboard</span>
                        </div>
                    </div>
                    <div className='absolute flex top-60 pl-40'>
                        <div className=''>
                            <Image src={QuestionMark} alt="" height='300' className='' />
                        </div>
                    </div>
                </div>
            )
                :

                (
                    <div className='px-16 pb-24'>
                        <div className='flex block bg-gradient-to-t from-[#03194D] to-[#0A1122] rounded-3xl pb-10 mb-2 px-4'>
                            <div className='grid grid-row-3 items-left pt-12 pl-6 text-lg pr-28 text-white'>
                                <span className='font-bold text-xl uppercase'>{selectedmonth.label} </span>
                                <span className='font-light pt-4 break-words text-wrap w-40'>(2022) {selectedrating.label} Student Leaderboard</span>
                                <button className='flex block bg-white w-36 pb-2 mt-4 items-center justify-center gap-1 rounded-xl text-[#03194D]'>
                                    <div className='py-1 pt-2'>
                                        <PrinterLogo />
                                    </div>
                                    <div className='py-1 font-semibold'>
                                        Print
                                    </div>
                                </button>
                            </div>

                            <div className='grid grid-cols-4 gap-6 pt-12'>
                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2 px-16'>
                                    <Link href='class_leaderboard'><button>
                                        <div className='flex items-center justify-center  -mt-12  rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16'>
                                            <Image src={PostsIcon} alt="" className='relative' />
                                        </div>

                                        <div className='font-bold mt-3 mb-4'>
                                            POSTS
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            89
                                        </div>
                                    </button>
                                    </Link>
                                </div>

                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2'>
                                    <Link href='leaderboard_class_compare'><button>
                                        <div className='flex items-center justify-center -mt-12 rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16 ml-6'>
                                            <Image src={AchievementsIcon} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold mt-3 mb-4'>
                                            ACHIEVEMENTS
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            11
                                        </div>
                                    </button>
                                    </Link>
                                </div>

                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2'>
                                    <Link href='top_student_leaderboard'><button>
                                        <div className='flex items-center justify-center -mt-16 rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16'>
                                            <Image src={PollsIcon} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold mt-3 mb-4'>
                                            POLLS
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            23
                                        </div>
                                    </button>
                                    </Link>
                                </div>

                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2'>
                                    <Link href='staff_leaderboard'><button>
                                        <div className='flex items-center justify-center -mt-12 rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16 ml-2'>
                                            <Image src={StarsIcon} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold mt-3 mb-4'>
                                            STARS
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            458
                                        </div>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 flex items-center justify-center font-sans overscroll-contain overflow-y-scroll">
                            <div className="w-full lg:w-full max-h-96">
                                <div className="bg-white shadow-md rounded my-6">
                                    <table className="min-w-max table-auto w-full">
                                        <thead className='sticky top-0'>
                                            <tr className="bg-gray-200 text-gray-600 text-md font-medium leading-normal">
                                                <th className="py-3 px-6 text-left">Student</th>
                                                <th className="py-3 px-6 text-left">Posts</th>
                                                <th className="py-3 px-6 text-left">Achievements</th>
                                                <th className="py-3 px-6 text-left">Polls</th>
                                                <th className="py-3 px-6 text-left">Stars</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-md">
                                            {studentData.map((data, i) => {
                                                return (
                                                    <RenderClass key={i}
                                                        name={data?.name ?? "NA"}
                                                        posts={data?.posts ?? "NA"}
                                                        achievements={data?.achievements ?? "NA"}
                                                        polls={data?.polls ?? "NA"}
                                                        stars={data?.stars ?? "NA"}
                                                    />
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default TopStudentBody;