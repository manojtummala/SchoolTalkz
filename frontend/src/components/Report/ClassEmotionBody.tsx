import Head from 'next/head'
import Image from 'next/image'
import Select from 'react-select';
import { useEffect, useState, SyntheticEvent } from "react";
import { authInstance } from "../../pages/api/axios";
import ReportStudentsImg from "@/asset/images/ReportStudentsImg.png"
import PositivityImg from "@/asset/images/PositivityImg.png"
import StudentNeedHelpImg from "@/asset/images/StudentNeedHelpImg.png"
import Link from 'next/link';
import QuestionMark from "@/asset/images/QuestionMark.png"
import PrinterLogo from '@/asset/images/PrinterLogo';
import HappyEmoji from "@/asset/images/HappyEmoji.png"
import NeutralEmoji from "@/asset/images/NeutralEmoji.png"
import ExcitedEmoji from "@/asset/images/ExcitedEmoji.png"
import ScaredEmoji from "@/asset/images/ScaredEmoji.png"
import DisturbedEmoji from "@/asset/images/DisturbedEmoji.png"
import NotUpdatedEmoji from "@/asset/images/NotUpdatedEmoji.png"


interface OptionType {
    label: string;
    value: string;
}

interface TableType {
    name: string;
    emotion: any;
}


const classOptions: OptionType[] = [
    { value: 'Class I', label: 'Class (I)', },
    { value: 'Class II', label: 'Class (II)', },
    { value: 'Class III', label: 'Class (III)', },
    { value: 'Class IV', label: 'Class (IV)', },
    { value: 'Class V', label: 'Class (V)', },
    { value: 'Class VI', label: 'Class (VI)', },
    { value: 'Class VII', label: 'Class (VII)', },
    { value: 'Class VIII', label: 'Class (VIII)', },

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
    { name: 'Akash', emotion: DisturbedEmoji },
    { name: 'Akash', emotion: HappyEmoji },
    { name: 'Akash', emotion: ExcitedEmoji },
    { name: 'Akash', emotion: NotUpdatedEmoji },
    { name: 'Akash', emotion: HappyEmoji },
    { name: 'Akash', emotion: NotUpdatedEmoji },
    { name: 'Akash', emotion: NotUpdatedEmoji },
    { name: 'Akash', emotion: ExcitedEmoji },
]

const ClassEmotionBody = () => {

    const [selectedclass, setSelectedClass] = useState<OptionType | null>(null);
    const [selecteddate, setSelectedDate] = useState<string | number | readonly string[] | undefined>('');
    const [selectedmonth, setSelectedMonth] = useState<OptionType | null>(null);

    const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawDate = event.target.value;
        const dateParts = rawDate.split('-');
        const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
        setSelectedDate(formattedDate);
    };

    const isBothSelected1 = selectedclass && selecteddate;
    const isBothSelected2 = selectedclass && selectedmonth;

    const path = HappyEmoji;



    const RenderClass = ({
        name,
        emotion
    }: TableType) => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <span>{name}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className='flex'>
                        <Image src={emotion} width={40} height={40} alt="" className='' />
                    </div>
                </td>
            </tr>
        );
    };

    return (
        <div className=" w-full flex-col bg-myBlue p-4 pt-24 pt-10 lg:w-full h-full">
            <div className='p-4'>
                <h4 className="font-bold text-xl ml-4">Class Emotion Report</h4> <br />
                <div className='grid grid-cols-2 gap-4'>
                    <div className='block lg:flex lg: justify-between py-1 px-4'>
                        <div className='lg:flex-col lg:w-1/2 w-1/2 mb-6'>
                            <Select
                                name="colors"
                                options={classOptions}
                                className="basic-multi-select"
                                placeholder='Select Class'
                                value={selectedclass}
                                onChange={(option) => setSelectedClass(option)}
                            />
                        </div>

                        <div className='lg:flex-col lg:w-1/2 w-1/2 mb-6 ml-4'>
                            <input
                                type="date"
                                id='dob'
                                placeholder="Enter Date of birth"
                                className="pb-2.5 px-6 border border-solid border-[#d3d3d3] rounded-sm outline-none w-full"
                                value={selecteddate}
                                onChange={handleDobChange}
                            />
                        </div>

                        <div className='pl-4 pt-2'>or</div>

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
                    </div>
                </div>
            </div>

            {!isBothSelected1 ? (
                <div className='p-16 mt-12 pb-64'>
                    <div className='lg: flex flex-col rounded-3xl w-full shadow-xl bg-white pb-9'>
                        <div className='grid grid-row-3 items-center justify-center mt-12 mb-4 text-lg pr-32'>
                            <span>Kindly Select</span>
                            <span className='text-green-600 font-semibold'>Class and Date or Month</span>
                            <span>to view class emotion report</span>
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
                                <span className='font-bold text-xl'>{selectedclass.label}</span>
                                <span className='font-light pt-4 break-words text-wrap w-40'>({selecteddate}) Emotion Report</span>
                                <button className='flex block bg-white w-36 pb-2 mt-4 items-center justify-center gap-1 rounded-xl text-[#03194D]'>
                                    <div className='py-1 pt-2'>
                                        <PrinterLogo />
                                    </div>
                                    <div className='py-1 font-semibold'>
                                        Print
                                    </div>
                                </button>
                            </div>

                            <div className='grid grid-cols-3 gap-10 pt-12'>
                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2 px-20'>
                                    <button>
                                        <div className='flex items-center justify-center  -mt-12  rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16'>
                                            <Image src={ReportStudentsImg} alt="" className='relative' />
                                        </div>

                                        <div className='font-bold mt-3 mb-4'>
                                            STUDENTS
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            33
                                        </div>
                                    </button>
                                </div>

                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-12 mr-6 rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16 ml-6'>
                                            <Image src={PositivityImg} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold mt-3 mb-4'>
                                            POSITIVITY
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            6%
                                        </div>
                                    </button>
                                </div>

                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-16 ml-16 rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16'>
                                            <Image src={StudentNeedHelpImg} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold mt-4 mb-4'>
                                            STUDENTS NEEDING HELP
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            0
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex block bg-[#EEEEEE] rounded-3xl pb-10 mb-6 px-4 mt-6'>
                            <div className='grid grid-cols-6 gap-4 pt-12 px-4'>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={HappyEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            HAPPY
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            4%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={ExcitedEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            EXCITED
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            2%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={NeutralEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            NEUTRAL
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            0%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={ScaredEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            SCARED
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            1%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={DisturbedEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            DISTURBED
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            0%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={NotUpdatedEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            NOT UPDATED
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            4%
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 flex font-sans ">
                            <div className="w-1/2 lg:w-1/2 max-h-96 overscroll-contain overflow-y-scroll">
                                <div className="bg-white shadow-md rounded my-6">
                                    <table className="min-w-max table-auto w-full">
                                        <thead className='sticky top-0'>
                                            <tr className="bg-gray-200 text-gray-600 text-md font-medium leading-normal">
                                                <th className="py-3 px-6 text-left">Student</th>
                                                <th className="py-3 px-6 text-left">Emotion</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-md">
                                            {studentData.map((data, i) => {
                                                return (
                                                    <RenderClass key={i}
                                                        name={data?.name ?? "NA"}
                                                        emotion={data?.emotion ?? "NA"}
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

            {/* {!isBothSelected2 ? (
                <div className='p-16 mt-12 pb-64'>
                    <div className='lg: flex flex-col rounded-3xl w-full shadow-xl bg-white pb-9'>
                        <div className='grid grid-row-3 items-center justify-center mt-12 mb-4 text-lg pr-32'>
                            <span>Kindly Select</span>
                            <span className='text-green-600 font-semibold'>Class and Date or Month</span>
                            <span>to view class emotion report</span>
                        </div>
                    </div>
                    <div className='absolute flex left-0 top-40 pl-52'>
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
                                <span className='font-bold text-xl'>{selectedclass.label}</span>
                                <span className='font-light pt-4 break-words text-wrap w-40'>{selectedmonth.label} Emotion Report</span>
                                <button className='flex block bg-white w-36 pb-2 mt-4 items-center justify-center gap-1 rounded-xl text-[#03194D]'>
                                    <div className='py-1 pt-2'>
                                        <PrinterLogo />
                                    </div>
                                    <div className='py-1 font-semibold'>
                                        Print
                                    </div>
                                </button>
                            </div>

                            <div className='grid grid-cols-3 gap-10 pt-12'>
                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2 px-20'>
                                    <button>
                                        <div className='flex items-center justify-center  -mt-12  rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16'>
                                            <Image src={ReportStudentsImg} alt="" className='relative' />
                                        </div>

                                        <div className='font-bold mt-3 mb-4'>
                                            STUDENTS
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            33
                                        </div>
                                    </button>
                                </div>

                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-12 mr-6 rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16 ml-6'>
                                            <Image src={PositivityImg} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold mt-3 mb-4'>
                                            POSITIVITY
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            6%
                                        </div>
                                    </button>
                                </div>

                                <div className='lg: flex items-center justify-center rounded-3xl w-full shadow-xl object-none object-bottom bg-white pb-2'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-16 ml-16 rounded-full bg-gradient-to-t from-[#0A112280] to-[#03194D80] w-16 h-16'>
                                            <Image src={StudentNeedHelpImg} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold mt-4 mb-4'>
                                            STUDENTS NEEDING HELP
                                        </div>
                                        <div className='font-extrabold text-5xl'>
                                            0
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex block bg-[#EEEEEE] rounded-3xl pb-10 mb-2 px-4 mt-6'>
                            <div className='grid grid-cols-6 gap-4 pt-12 px-4'>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={HappyEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            HAPPY
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            4%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={ExcitedEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            EXCITED
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            2%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={NeutralEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            NEUTRAL
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            0%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={ScaredEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            SCARED
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            1%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={DisturbedEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            DISTURBED
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            0%
                                        </div>
                                    </button>
                                </div>
                                <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-2 px-8'>
                                    <button>
                                        <div className='flex items-center justify-center -mt-8 mr-6 ml-6'>
                                            <Image src={NotUpdatedEmoji} alt="" className='relative' />
                                        </div>
                                        <div className='font-bold text-sm mb-4'>
                                            NOT UPDATED
                                        </div>
                                        <div className='font-extrabold text-3xl'>
                                            4%
                                        </div>
                                    </button>
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
                                            {studentData.map((data) => {
                                                return (
                                                    <RenderClass
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
            } */}


        </div>
    )
}

export default ClassEmotionBody;