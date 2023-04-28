import PrinterLogo from '@/asset/images/PrinterLogo';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import HappyEmoji from "@/asset/images/HappyEmoji.png"
import NeutralEmoji from "@/asset/images/NeutralEmoji.png"
import ExcitedEmoji from "@/asset/images/ExcitedEmoji.png"
import ScaredEmoji from "@/asset/images/ScaredEmoji.png"
import DisturbedEmoji from "@/asset/images/DisturbedEmoji.png"
import NotUpdatedEmoji from "@/asset/images/NotUpdatedEmoji.png"
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import CaretDown from '@/asset/images/CaretDown';
import StudentEmotionImg from "@/asset/images/StudentEmotionImg.png"
import ActiveUsers from "@/asset/images/ActiveUsers.png"
import InactiveUsers from "@/asset/images/InactiveUsers.png"
import MostEngaged from "@/asset/images/MostEngaged.png"
import NoOfPosts from "@/asset/images/NoOfPosts.png"
import NoOfAchievements from "@/asset/images/NoOfAchievements.png"
import NoOfPolls from "@/asset/images/NoOfPolls.png"
import X from '@/asset/images/X';

interface TableType1 {
    name: string;
    classs: string,
    emotion: string,
}

interface TableType3 {
    name: string;
    classs: string,
    posts: string,
    polls: string,
    stars: string,
}

interface TableType2 {
    classs: string,
    scared: string,
    depressed: string,
}

const EmotionOptions = [
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'one day before', label: 'One day before' },
    { value: 'two days before', label: 'Two days before' }

]

const StudentEmotionData: TableType1[] = [
    { name: 'Akash', classs: 'II', emotion: 'scared' },
    { name: 'Akash', classs: 'II', emotion: 'scared' },
    { name: 'Akash', classs: 'II', emotion: 'scared' },
    { name: 'Akash', classs: 'II', emotion: 'scared' },
    { name: 'Akash', classs: 'II', emotion: 'scared' },
    { name: 'Akash', classs: 'II', emotion: 'scared' },
    { name: 'Akash', classs: 'II', emotion: 'scared' },
    { name: 'Akash', classs: 'II', emotion: 'scared' },
]

const ClassEmotionData: TableType2[] = [
    { classs: 'II', scared: '2', depressed: '4' },
    { classs: 'II', scared: '2', depressed: '4' },
    { classs: 'II', scared: '2', depressed: '4' },
    { classs: 'II', scared: '2', depressed: '4' },
    { classs: 'II', scared: '2', depressed: '4' },
    { classs: 'II', scared: '2', depressed: '4' },
    { classs: 'II', scared: '2', depressed: '4' },
    { classs: 'II', scared: '2', depressed: '4' },
]

const ClassLeaderboardData: TableType3[] = [
    { name: 'Akash', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Akash', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Akash', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Akash', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Akash', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Akash', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Akash', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Akash', classs: 'II', posts: '20', polls: '6', stars: '140' },
]

const SchoolLeaderboardData: TableType3[] = [
    { name: 'Ramesh', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Ramesh', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Ramesh', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Ramesh', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Ramesh', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Ramesh', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Ramesh', classs: 'II', posts: '20', polls: '6', stars: '140' },
    { name: 'Ramesh', classs: 'II', posts: '20', polls: '6', stars: '140' },
]

const EmotionChart = [
    { name: 'HAPPY', count: '0', img: HappyEmoji },
    { name: 'EXCITED', count: '0', img: ExcitedEmoji },
    { name: 'NEUTRAL', count: '0', img: NeutralEmoji },
    { name: 'SCARED', count: '0', img: ScaredEmoji },
    { name: 'DISTURBED', count: '0', img: DisturbedEmoji },
    { name: 'NOT UPDATED', count: '2', img: NotUpdatedEmoji },
]

const EngagementChart = [
    { name: 'ACTIVE USERS', count: '2', img: ActiveUsers },
    { name: 'INACTIVE USERS', count: '57', img: InactiveUsers },
    { name: 'MOST ENGAGED', count: '0', img: MostEngaged },
    { name: 'NO OF POSTS', count: '3', img: NoOfPosts },
    { name: 'NO OF ACHIEVEMENTS', count: '0', img: NoOfAchievements },
    { name: 'NO OF POLLS', count: '1', img: NoOfPolls },
]

const DashboardBody = () => {

    const [isOn, setIsOn] = useState(true);
    const [emotion, setEmotion] = useState(true);
    const [selectedchartOption, setSelectedChartOption] = useState<string | null>(null);
    const [selectedtableOption, setSelectedTableOption] = useState<string | null>(null);
    const [schoolL, setschoolL] = useState(false);
    const [classL, setClassL] = useState(false);
    const [classEmo, setClassEmo] = useState(false);
    const [studentEmo, setStudentEmo] = useState(false);


    const handleChartClick = (option: string) => {
        setSelectedChartOption(option);
    }
    const handleTableClick = (option: string) => {
        setSelectedTableOption(option);
    }

    function handleClick() {
        setIsOn(!isOn);
        setEmotion(!emotion);
    }

    const RenderClass = ({
        name,
        emotion,
        classs,
    }: TableType1) => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <span><Image src={StudentEmotionImg} alt='' /></span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div className="flex items-center">
                        <span className='font-semibold'>{name}  ({classs})</span>
                    </div>
                </td>
                <td className="py-3 text-center">
                    <div className="flex items-center">
                        <span className='font-semibold'>{emotion}</span>
                    </div>
                </td>
            </tr>
        );
    };

    const RenderClass2 = ({
        classs,
        scared,
        depressed,
    }: TableType2) => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-4 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center justify-center rounded-full bg-[#EEEEEE]">
                        <span className=''>{classs}</span>
                    </div>
                </td>
                <td className="py-3 px-6 text-left">
                    <div className="flex items-center justify-center">
                        <span className='font-semibold'>{scared} Students are scared</span>
                    </div>
                </td>
                <td className="py-3 text-center">
                    <div className="flex items-center justify-center">
                        <span className='font-semibold'>{depressed} Students are depressed</span>
                    </div>
                </td>
            </tr>
        );
    };

    const RenderClass3 = ({
        name,
        classs,
        posts,
        polls,
        stars,
    }: TableType3) => {
        return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                        <span><Image src={StudentEmotionImg} alt='' /></span>
                    </div>
                </td>
                <td className="py-3 text-center">
                    <div className="flex items-center">
                        <span className='font-semibold'>{name}  ({classs})</span>
                    </div>
                </td>
                <td className="py-3 text-center">
                    <div className="flex items-center">
                        <span className='font-semibold'>{posts} Posts</span>
                    </div>
                </td>
                <td className="py-3 text-center">
                    <div className="flex items-center">
                        <span className='font-semibold'>{polls} Polls</span>
                    </div>
                </td>
                <td className="py-3 text-center">
                    <div className="flex items-center">
                        <span className='font-semibold'>{stars} Stars</span>
                    </div>
                </td>
            </tr>
        );
    };

    function showClassL() {
        setClassL(!classL);
    }

    function showSchoolL() {
        setschoolL(!schoolL);
    }

    function showClassEmo() {
        setClassEmo(!classEmo);
    }

    function showStudentEmo() {
        setStudentEmo(!studentEmo);
    }

    return (
        <div className="w-full flex-col bg-myBlue p-4 pt-24 lg:w-full h-full pb-72">
            <div className='p-10'>
                <div className="flex justify-center block bg-white lg:w-1/3 rounded-3xl">
                    <button className={`block bg-white lg:w-full w-1/2 py-2 font-bold text-lg rounded-2xl border-${isOn ? '2 border-[#0A1122]' : '2 border-white'} `} onClick={handleClick}>
                        Emotion Capture
                    </button>
                    <button className={`block bg-white lg:w-full w-1/2 py-2 font-bold text-lg rounded-2xl border-${isOn ? '2 border-white' : '2 border-[#0A1122]'} `} onClick={handleClick}>
                        Engagements
                    </button>
                </div>
            </div>
            {emotion ? (
                <div className='px-16 pb-24'>
                    <div className='flex block bg-gradient-to-t from-[#03194D] to-[#0A1122] rounded-3xl px-4'>
                        <div className='flex flex-col items-left pt-12 pl-6 text-lg pr-4 text-white'>
                            <div className='font-bold pt-4 text-xl'>EMOTIONS</div>
                            <div className='font-light pt-4 break-words text-wrap w-36'>Students emotions for {selectedchartOption ? selectedchartOption.toLocaleLowerCase() : 'today'}</div>
                            <div className='flex block bg-white w-48 mt-6 items-center justify-center gap-1 rounded-xl text-[#03194D]'>
                                <Menu
                                    menuButton={
                                        <MenuButton >
                                            <div className="flex justify-evenly w-max font-open gap-6 cursor-pointer p-3">
                                                <div className='text-[#181818]'>{selectedchartOption || 'Today'}</div>
                                                <div className='pt-2'><CaretDown /></div>
                                            </div>
                                        </MenuButton>
                                    }
                                    transition
                                >
                                    {EmotionOptions.slice(0, 3).map((option, i) => (
                                        <div className='px-2' key={i}>
                                            <MenuItem className={'border-b-2 border-gray-300'} onClick={() => handleChartClick(option.label)} >{option.label}</MenuItem>
                                        </div>
                                    ))}
                                </Menu>
                            </div>
                        </div>

                        <div className='flex block rounded-3xl pb-10 mb-6 pr-2 mt-6'>
                            <div className='grid grid-cols-6 gap-4 pt-12 px-4'>
                                {EmotionChart.map((data, i) => (
                                    <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white pb-10 px-6' key={i}>
                                        <button>
                                            <div className='flex items-center justify-center mx-6'>
                                                <Image src={data.img} width={80} height={80} alt="" className='absolute' />
                                            </div>
                                            <div className='font-bold text-sm mt-12 mb-6'>
                                                {data.name}
                                            </div>
                                            <div className='font-bold text-5xl'>
                                                {data.count}
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='flex block bg-[#FAFAFA] border-2 border-[#D3D3D3] w-60 mt-6 items-center justify-center gap-1 rounded-xl text-[#03194D]'>
                        <Menu
                            menuButton={
                                <MenuButton >
                                    <div className="flex justify-evenly w-max font-open gap-6 cursor-pointer p-3">
                                        <div className='text-[#181818]'>{selectedtableOption || 'Today'}</div>
                                        <div className='pt-2'><CaretDown /></div>
                                    </div>
                                </MenuButton>
                            }
                            transition
                        >
                            {EmotionOptions.map((option, i) => (
                                <div className='px-2' key={i}>
                                    <MenuItem className={'border-b-2 border-gray-300'} onClick={() => handleTableClick(option.label)} >{option.label}</MenuItem>
                                </div>
                            ))}
                        </Menu>
                    </div>

                    <div className='flex grid grid-cols-2 items-center justify-center pt-8 gap-4'>
                        <div className='block lg:w-full'>
                            <div className='rounded-t-2xl bg-[#EEEEEE] p-6'>
                                <div className='text-center text-xl font-bold'>Student Needing Attention</div>
                            </div>
                            <div className="bg-white shadow-md rounded pt-4">
                                <table className="min-w-max table-auto w-full">
                                    <tbody className="text-md">
                                        {StudentEmotionData.slice(0, 3).map((data, i) => {
                                            return (
                                                <RenderClass key={i}
                                                    name={data?.name ?? "NA"}
                                                    classs={data?.classs ?? "NA"}
                                                    emotion={data?.emotion ?? "NA"}
                                                />
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div className='flex justify-end p-4'>
                                    <span onClick={showStudentEmo} className='text-[#0A1122] font-bold border-b-2 border-[#0A1122] cursor-pointer'>View More</span>
                                </div>
                            </div>
                        </div>
                        <div className='block lg:w-full'>
                            <div className='rounded-t-2xl bg-[#EEEEEE] p-6'>
                                <div className='text-center text-xl font-bold'>Class Needing Attention</div>
                            </div>
                            <div className="bg-white shadow-md rounded pt-4">
                                <table className="min-w-max table-auto w-full">
                                    <tbody className="text-md">
                                        {ClassEmotionData.slice(0, 3).map((data, i) => {
                                            return (
                                                <RenderClass2 key={i}
                                                    classs={data?.classs ?? "NA"}
                                                    scared={data?.scared ?? "NA"}
                                                    depressed={data?.depressed ?? "NA"}
                                                />
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div className='flex justify-end p-4 '>
                                    <span onClick={showClassEmo} className='text-[#0A1122] font-bold border-b-2 border-[#0A1122] cursor-pointer'>View More</span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {classEmo && (
                        <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                            <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                            <div className='absolute top-24 left-1/3 ml-28 bg-white w-1/3 h-3/4 text-center rounded-2xl'>
                                <div className='block lg:w-full'>
                                    <div className='flex flex-row rounded-t-2xl bg-[#EEEEEE] p-6 px-4'>
                                        <div className='basis-full'>
                                            <div className='text-center text-xl font-bold'>Class Needing Attention</div>
                                        </div>
                                        <div className='basis-1/12'>
                                            <div onClick={showClassEmo}> <X /></div>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-2xl pt-4">
                                        <table className="min-w-max table-auto w-full">
                                            <tbody className="text-md">
                                                {ClassEmotionData.map((data, i) => {
                                                    return (
                                                        <RenderClass2 key={i}
                                                            classs={data?.classs ?? "NA"}
                                                            scared={data?.scared ?? "NA"}
                                                            depressed={data?.depressed ?? "NA"}
                                                        />
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                        <div className='flex justify-end p-4 pr-6 '>
                                            <div className={'text-[#0A1122] font-bold cursor-pointer p-2 rounded-2xl border-2 border-[#0A1122]'}>
                                                <div className='px-4'>Export</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )}
                    {studentEmo && (
                        <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                            <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                            <div className='absolute top-24 left-1/3 ml-28 bg-white w-1/3 h-3/4 text-center rounded-2xl'>
                                <div className='block lg:w-full'>
                                    <div className='flex flex-row rounded-t-2xl bg-[#EEEEEE] p-6 px-4'>
                                        <div className='basis-full'>
                                            <div className='text-center text-xl font-bold'>School Needing Attention</div>
                                        </div>
                                        <div className='basis-1/12'>
                                            <div onClick={showStudentEmo}> <X /></div>
                                        </div>
                                    </div>

                                    <div className="bg-white pt-4 rounded-2xl">
                                        <table className="min-w-max table-auto w-full">
                                            <tbody className="text-md">
                                                {StudentEmotionData.map((data, i) => {
                                                    return (
                                                        <RenderClass key={i}
                                                            name={data?.name ?? "NA"}
                                                            classs={data?.classs ?? "NA"}
                                                            emotion={data?.emotion ?? "NA"}
                                                        />
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                        <div className='flex justify-end p-4 pr-6 '>
                                            <div className={'text-[#0A1122] font-bold cursor-pointer p-2 rounded-2xl border-2 border-[#0A1122]'}>
                                                <div className='px-4'>Export</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    )}
                </div>
            ) :
                (
                    <div className='px-4 pb-24'>
                        <div className='flex block bg-[#FAFAFA] border-2 border-[#D3D3D3] w-60 mt-6 items-center justify-center rounded-xl text-[#03194D]'>
                            <Menu
                                menuButton={
                                    <MenuButton >
                                        <div className="flex justify-evenly w-max font-open gap-6 cursor-pointer p-3">
                                            <div className='text-[#181818]'>{selectedtableOption || 'Today'}</div>
                                            <div className='pt-1'><CaretDown /></div>
                                        </div>
                                    </MenuButton>
                                }
                                transition
                            >
                                {EmotionOptions.map((option, i) => (
                                    <div className='px-2' key={i}>
                                        <MenuItem className={'border-b-2 border-gray-300'} onClick={() => handleTableClick(option.label)} >{option.label}</MenuItem>
                                    </div>
                                ))}
                            </Menu>
                        </div>

                        <div className='flex justify-content gap-10'>
                            <div className='grid grid-cols-3 gap-6 pt-12'>
                                {EngagementChart.map((data, i) => (
                                    <div className='lg: flex items-center justify-center rounded-2xl w-full shadow-lg object-none object-bottom bg-white py-6 mt-6 px-20' key={i}>
                                        <button>
                                            <div className='flex items-center justify-center mx-6'>
                                                <Image src={data.img} alt="" className='absolute' />
                                            </div>
                                            <div className='font-bold text-sm mt-12 mb-6'>
                                                {data.name}
                                            </div>
                                            <div className='font-bold text-5xl'>
                                                {data.count}
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className='lg: flex text-center rounded-2xl shadow-lg object-none object-bottom bg-white pb-4 mt-12 px-20'>
                                <button>
                                    <div className='font-bold text-lg mt-14 mb-4'>
                                        Positivity Rate
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className='flex grid grid-cols-2 items-center justify-center pt-12 gap-4'>
                            <div className='block lg:w-full'>
                                <div className='rounded-t-2xl bg-[#EEEEEE] p-6'>
                                    <div className='text-center text-xl font-bold'>Class Leaderboardd</div>
                                </div>
                                <div className="bg-white shadow-md rounded pt-4">
                                    <table className="min-w-max table-auto w-full">
                                        <tbody className="text-md">
                                            {ClassLeaderboardData.slice(0, 3).map((data, i) => {
                                                return (
                                                    <RenderClass3 key={i}
                                                        name={data?.name ?? "NA"}
                                                        classs={data?.classs ?? "NA"}
                                                        posts={data?.posts ?? "NA"}
                                                        polls={data?.polls ?? "NA"}
                                                        stars={data?.stars ?? "NA"}
                                                    />
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                    <div className='flex justify-end p-4'>
                                        <span onClick={showClassL} className='text-[#0A1122] font-bold border-b-2 border-[#0A1122] cursor-pointer'>View More</span>
                                    </div>
                                </div>
                            </div>
                            <div className='block lg:w-full'>
                                <div className='rounded-t-2xl bg-[#EEEEEE] p-6'>
                                    <div className='text-center text-xl font-bold'>School Leaderboard</div>
                                </div>
                                <div className="bg-white shadow-md rounded pt-4">
                                    <table className="min-w-max table-auto w-full">
                                        <tbody className="text-md">
                                            {SchoolLeaderboardData.slice(0, 3).map((data, i) => {
                                                return (
                                                    <RenderClass3 key={i}
                                                        name={data?.name ?? "NA"}
                                                        classs={data?.classs ?? "NA"}
                                                        posts={data?.posts ?? "NA"}
                                                        polls={data?.polls ?? "NA"}
                                                        stars={data?.stars ?? "NA"}
                                                    />
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                    <div className='flex justify-end p-4 '>
                                        <span onClick={showSchoolL} className='text-[#0A1122] font-bold border-b-2 border-[#0A1122] cursor-pointer'>View More</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {classL && (
                            <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                                <div className='absolute top-24 left-1/3 ml-28 bg-white w-1/3 h-3/4 text-center rounded-2xl'>
                                    <div className='block lg:w-full'>
                                        <div className='flex flex-row rounded-t-2xl bg-[#EEEEEE] p-6 px-4'>
                                            <div className='basis-full'>
                                                <div className='text-center text-xl font-bold'>Class Leaderboard</div>
                                            </div>
                                            <div className='basis-1/12'>
                                                <div onClick={showClassL}> <X /></div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-2xl pt-4">
                                            <table className="min-w-max table-auto w-full">
                                                <tbody className="text-md">
                                                    {ClassLeaderboardData.map((data, i) => {
                                                        return (
                                                            <RenderClass3 key={i}
                                                                name={data?.name ?? "NA"}
                                                                classs={data?.classs ?? "NA"}
                                                                posts={data?.posts ?? "NA"}
                                                                polls={data?.polls ?? "NA"}
                                                                stars={data?.stars ?? "NA"}
                                                            />
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                            <div className='flex justify-end p-4 pr-6 '>
                                                <div className={'text-[#0A1122] font-bold cursor-pointer p-2 rounded-2xl border-2 border-[#0A1122]'}>
                                                    <div className='px-4'>Export</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )}
                        {schoolL && (
                            <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed'>
                                <div className='w-full h-full top-0 left-0 right-0 bottom-0 fixed bg-overlay'></div>
                                <div className='absolute top-24 left-1/3 ml-28 bg-white w-1/3 h-3/4 text-center rounded-2xl'>
                                    <div className='block lg:w-full'>
                                        <div className='flex flex-row rounded-t-2xl bg-[#EEEEEE] p-6 px-4'>
                                            <div className='basis-full'>
                                                <div className='text-center text-xl font-bold'>School Leaderboard</div>
                                            </div>
                                            <div className='basis-1/12'>
                                                <div onClick={showSchoolL}> <X /></div>
                                            </div>
                                        </div>

                                        <div className="bg-white pt-4 rounded-2xl">
                                            <table className="min-w-max table-auto w-full">
                                                <tbody className="text-md">
                                                    {SchoolLeaderboardData.map((data, i) => {
                                                        return (
                                                            <RenderClass3 key={i}
                                                                name={data?.name ?? "NA"}
                                                                classs={data?.classs ?? "NA"}
                                                                posts={data?.posts ?? "NA"}
                                                                polls={data?.polls ?? "NA"}
                                                                stars={data?.stars ?? "NA"}
                                                            />
                                                        );
                                                    })}
                                                </tbody>
                                            </table>
                                            <div className='flex justify-end p-4 pr-6 '>
                                                <div className={'text-[#0A1122] font-bold cursor-pointer p-2 rounded-2xl border-2 border-[#0A1122]'}>
                                                    <div className='px-4'>Export</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                )}
        </div>
    )

}

export default DashboardBody;