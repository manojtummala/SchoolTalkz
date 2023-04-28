import Image from 'next/image'
import { useState, useEffect } from "react";
import { FeedSortingData, PostData } from "@/data";
import Labels from "../Labels";
import GlobalFeed from "./GlobalFeed";
import Link from "next/link";
import AddPostSchoolFeed from "../Configuration/AddPostSchoolFeed";
import Smiley from '@/asset/images/Smiley';
import MyPostFeed from '../MyPost/MyPostFeed';
import X from '@/asset/images/X';
import ClearIcon from '@/asset/images/ClearIcon';


interface Data {
    name: string;
}

interface Label {
    id: string;
    name: string;
    stars: string;
}

const LabelsData: Label[] = [
    { id: "0", name: "Morning", stars: "6" },
    { id: "1", name: "Comeptition", stars: "5" },
    { id: "2", name: "Sports", stars: "5" },
    { id: "3", name: "Robotics", stars: "4" },
    { id: "4", name: "Nature", stars: "0" },
    { id: "5", name: "Kites", stars: "2" },
    { id: "6", name: "Place", stars: "6" },
    { id: "7", name: "Historical", stars: "1" },
    { id: "8", name: "Art", stars: "4" },
]

const GlobalBody = () => {
    const [feedPosts, setFeedPosts] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [empty, setEmpty] = useState(true);
    const [selectedData, setSelectedData] = useState<Data | null>(null);
    const [recent, setRecent] = useState(true)
    const [trending, setTrending] = useState(false)
    const [myPost, setMyPost] = useState(false)
    const [label, setlabel] = useState(false)
    const [postFeed, setPostFeed] = useState(false)
    const isSelected1 = myPost && empty;
    const isSelected2 = myPost && postFeed;
    const [searchItem, setSearchItem] = useState("");

    function HideEmpty() {
        setEmpty(false)
        setPostFeed(true)
    }

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

    const handleClick = (clickedData: Data) => {
        setSelectedData(clickedData);
        if (clickedData.name == "Recent") {
            setRecent(true)
            setTrending(false)
            setlabel(false)
            setMyPost(false)

        }
        else if (clickedData.name == "Trending") {
            setRecent(false)
            setTrending(true)
            setlabel(false)
            setMyPost(false)


        }
        else if (clickedData.name == "My Post") {
            setRecent(false)
            setTrending(false)
            setlabel(false)
            setMyPost(true)

        }
        else if (clickedData.name == "Labels") {
            setRecent(false)
            setTrending(false)
            setlabel(true)
            setMyPost(false)


        }
    };

    function CloseIcon() {
        setSearchItem("")
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchItem(event.target.value);
    }

    const filteredItems = LabelsData.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <>
            {loading === false ? (
                <div className="bg-light-bg-blue">
                    <div className="px-24 pt-5 flex items-center justify-between">
                        {FeedSortingData.map((data, i) => {
                            return (
                                <div key={i} className="cursor-pointer flex flex-col items-center justify-center py-6" onClick={() => handleClick(data)}>
                                    {data.icon}
                                    {data.name}
                                </div>
                            );
                        })}
                        <AddPostSchoolFeed />
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

                    {isSelected1 && (
                        <div className='flex flex-col lg:w-full items-center justify-center pt-32 pb-80'>
                            <div className='flex font-bold text-xl'>Oops!</div>
                            <div className='pt-2'>
                                <Smiley />
                            </div>
                            <div className='break-words text-wrap w-48 text-center text-sm'>
                                Nothing to Preview in your post page
                            </div>
                            <button className='flex block bg-gradient-to-t from-[#F35101] to-[#FAA101] py-1 mt-4 px-32 items-center justify-center gap-1 rounded-xl text-[#03194D]' onClick={HideEmpty}>
                                <div className='py-2 font-semibold text-white'>
                                    Add Post
                                </div>
                            </button>
                        </div>
                    )}

                    {isSelected2 && (
                        <div>
                            <MyPostFeed postData={feedPosts} />
                            <Labels />
                        </div>
                    )}

                    {label && (
                        <div className='items-center justify-center w-full h-full px-24 pb-52 pt-4'>
                            <div className='w-full h-full bg-white text-center shadow-xl pb-16 overflow-y-scroll'>

                                <div className='flex mb-2 p-2 justify-end w-full rounded-t-md'>
                                    <div> <X /></div>
                                </div>
                                <div className='px-14 pb-6 text-center justify-center'>
                                    <div className="font-bold text-xl ">Jump in School Activities</div>
                                </div>
                                <div className="p-2">
                                    <div className="block lg:flex lg:w-full lg:justify-center">
                                        <div className="flex mt-1 bg-white px-6 w-full lg:w-4/5 items-center border border-solid border-[#d3d3d3] rounded-lg shadow-xl">
                                            <input
                                                type="text"
                                                placeholder="Search Labels"
                                                className="border-none bg-none text-md outline-none w-full"
                                                value={searchItem}
                                                onChange={handleInputChange}
                                            />
                                            {searchItem.length == 0 ? (
                                                <div className='flex p-3 cursor-pointer'>
                                                    <ClearIcon mode='light' />
                                                </div>
                                            ) : (
                                                <div className='flex p-3 cursor-pointer' onClick={CloseIcon}>
                                                    <ClearIcon mode='dark' />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {searchItem.length == 0 ? (
                                    <div className="flex flex-wrap pb-10">
                                        {LabelsData.map((data) => (
                                            <div key={data.id} className="w-full md:w-full px-40 pb-1 pt-2">
                                                <div className="flex gap-8 jsutify-between lg:w-full p-2 text-md">
                                                    <div className='grid grid-cols-2 w-full py-2 border-b-2 border-gray-200 '>
                                                        <div className="flex justify-start p-2 pt-4">
                                                            <span className="font-semibold">{data.name}</span>
                                                        </div>
                                                        <div className="flex justify-end p-2 pt-4">
                                                            <span className="text-dark-grey font-semibold">{data.stars} Stars</span>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap pb-10">
                                        {filteredItems.map((data) => (
                                            <div key={data.id} className="w-full md:w-full px-40 pb-1 pt-2">
                                                <div className="flex gap-8 jsutify-between lg:w-full p-2 text-md">
                                                    <div className='grid grid-cols-2 w-full py-2 border-b-2 border-gray-200 '>
                                                        <div className="flex justify-start p-2 pt-4">
                                                            <span className="font-semibold">{data.name}</span>
                                                        </div>
                                                        <div className="flex justify-end p-2 pt-4">
                                                            <span className="text-dark-grey font-semibold">{data.stars} Stars</span>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                )
                                }




                            </div>

                        </div>
                    )}

                </div>
            ) : (
                <div className="bg-light-bg-blue ">Loading...</div>
            )}

        </>
    );
};



export default GlobalBody;
