import Feed from "../Feed";
import FeedSorting from "../FeedSorting";
import { PostData } from "@/data";
import { useState, useEffect, use } from "react";
import PostCard from "../PostCard";
import FeedPosts from "../FeedPosts";
import ManageFeedPosts from "./ManageFeedPosts";
import SliderHorizontal from "@/asset/images/SliderHorizontal";
import CaretDown from '@/asset/images/CaretDown';
import ManageFeedCard from "./ManageFeedCard";
import ManageFeedCard2 from "./ManageFeedCard2";
import ManageFeedHeader from "./ManageFeedHeader";
import ManageFeedContent1 from "./ManageFeedContent1";
import ManageFeedFooter from "./ManageFeedFooter";
import ReportedLogo from "@/asset/images/ReportedLogo";
import RequestedLogo from "@/asset/images/RequestedLogo";
import PostFooter from "../PostFooter";


type FeedProp = {
    postData: any;
};

const ManageOptions = [
    { value: 'All Posts', label: 'All Posts' },
    { value: 'Reported Posts', label: 'Reported Posts' },
    { value: 'Requested posts', label: 'Requested Posts' }

]


const randomNumber: number = Math.floor(Math.random() * 10) + 1;

const ManagePostBody = () => {

    const [feedPosts, setFeedPosts] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [all, setAll] = useState(false)
    const [reported, setReported] = useState(true)
    const [requested, setRequested] = useState(false)



    const toggleOptions = () => setShowOptions(!showOptions);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setShowOptions(false);

        if (option == 'All Posts') {
            setAll(true)
            setReported(true)
            setRequested(true)
        }
        else if (option == 'Reported Posts') {
            setAll(false)
            setReported(true)
            setRequested(false)
        }
        else if (option == 'Requested Posts') {
            setAll(false)
            setReported(false)
            setRequested(true)
        }
        else {
            setAll(false)
            setReported(true)
            setRequested(false)
        }
    };


    const first = ManageOptions[1];
    const firstlabel = first.label;

    useEffect(() => {
        console.log(`fetching start`)
        fetchData();
        console.log(`fetching done`)
        setLoading(false)
        console.log(`loading false`)
    }, []);

    const fetchData = (type = "recent") => {
        setInterval(() => setFeedPosts(PostData), 2000);
    }

    return (
        <>
            {loading === false ? (
                <div className="bg-light-bg-blue pb-10">
                    <FeedSorting />
                    <div className="flex justify-end px-16">
                        <div className=''>
                            <div className="flex p-2 bg-gray-200 rounded-3xl rounded cursor-pointer">
                                <SliderHorizontal />
                                <div className='text-blue-900 text-lg font-semibold px-3' onClick={toggleOptions}>
                                    {selectedOption || firstlabel}
                                </div>
                                <div className='pt-2'><CaretDown /></div>
                            </div>
                            {showOptions && (
                                <div className='flex justify-end'>
                                    <div className="absolute z-20 w-56 border rounded-lg bg-white shadow">
                                        <div className=''>
                                            {ManageOptions.map((option) => (
                                                <div
                                                    key={option.value}
                                                    className="px-6 py-2 cursor-pointer border-b-2 border-gray-200 hover:bg-gray-100"
                                                    onClick={() => handleOptionClick(option.label)}
                                                >
                                                    {option.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className=' flex grid grid-cols-2 w-full pt-8 justify-around px-20 pb-20 gap-8'>
                            <div className="">
                                <div className="flex grid grid-row-2 gap-6 place-items-center">
                                    {feedPosts?.map((data: any, i: any) => {
                                        return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                                            <div className="bg-white w-full min-w-[380px] rounded-2xl shadow-small-bottom">
                                                <ManageFeedHeader />
                                                <div className="flex-container">
                                                    <div className="w-full">
                                                        <img src={`https://i.pravatar.cc/900?img=${randomNumber}`} className="w-full object-cover min-h-10 " />
                                                        {reported && (
                                                            <div className="flex justify-end">
                                                                <div className='-mt-96'>
                                                                    <ReportedLogo />
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {requested && (
                                                        <div className="flex justify-end">
                                                            <div className='-mt-96'>
                                                                <RequestedLogo />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {requested ? (
                                                    <ManageFeedFooter data={data} />
                                                ) : (
                                                    <PostFooter data={data} />
                                                )}
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>

                            <div className="">
                                <div className="flex grid grid-row-2 gap-6 place-items-center">
                                    {feedPosts?.map((data: any, i: any) => {
                                        return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                                            <div className="bg-white w-full min-w-[380px] rounded-2xl shadow-small-bottom">
                                                <ManageFeedHeader />
                                                <div className="flex-container">
                                                    <div className="w-full">
                                                        <div className='h-20 p-4'>
                                                            <div className='flex items-center'>
                                                                <input type="radio" name="same" id="" className='mr-4' />
                                                                <p>Running</p>
                                                            </div>
                                                            <div className='flex items-center'>
                                                                <input type="radio" name="same" id="" className='mr-4' />
                                                                <p>Activites</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {reported && (
                                                        <div className="flex justify-end">
                                                            <div className='-mt-16'>
                                                                <ReportedLogo />
                                                            </div>
                                                        </div>
                                                    )}
                                                    {requested && (
                                                        <div className="flex justify-end">
                                                            <div className='-mt-16'>
                                                                <RequestedLogo />
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                {requested ? (
                                                    <ManageFeedFooter data={data} />
                                                ) : (
                                                    <PostFooter data={data} />
                                                )}

                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-light-bg-blue ">Loading...</div>
            )}
        </>
    )

}

export default ManagePostBody;