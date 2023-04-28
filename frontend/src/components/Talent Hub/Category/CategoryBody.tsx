import { PostData } from "@/data"
import { useState } from 'react';
import CategorySortingData from "../../../data/Talent Hub/CategorySortingData";
import CategoryWorkshopCard from "./CategiryWorkshopCard";
import CategoryCommunities from "./CategoryCommunities";
import CategoryPostCard from "./CategoryPostCard";

interface Data {
    name: string;
}

const CategoryBody = () => {

    const [selectedData, setSelectedData] = useState<Data | null>(null);
    const [posts, setPosts] = useState(true)
    const [communities, setCommunities] = useState(false)
    const [workshops, setWorkShops] = useState(false)

    const handleClick = (clickedData: Data) => {
        setSelectedData(clickedData);
        if (clickedData.name == "Posts") {
            setPosts(true)
            setCommunities(false)
            setWorkShops(false)
        }
        else if (clickedData.name == "Communities") {
            setCommunities(true)
            setPosts(false)
            setWorkShops(false)
        }
        else {
            setWorkShops(true)
            setPosts(false)
            setCommunities(false)
        }
    };


    return (
        <div className="bg-light-bg-blue ">
            <div className="px-96 py-8 flex items-center justify-between">
                {CategorySortingData.map((data, i) => {
                    return (
                        <div key={i} className="cursor-pointer flex flex-col items-center justify-center" onClick={() => handleClick(data)}>
                            {data.icon}
                            <div className="-mt-3">
                                {data.name}
                            </div>
                        </div>
                    );
                })}
            </div>

            {posts && (
                <div className="lg: w-full">
                    <div className="flex grid grid-cols-2 gap-8 px-20 place-items-center px-10">
                        {PostData.map((data, i) => {
                            return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                                <CategoryPostCard />
                            </div>
                        })}
                    </div>
                </div>
            )}

            {communities && (
                <CategoryCommunities />
            )}

            {workshops && (
                <div className="lg: w-full">
                    <div className="flex grid grid-cols-2 gap-8 px-20 place-items-center px-10">
                        {PostData.map((data, i) => {
                            return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                                <CategoryWorkshopCard />
                            </div>
                        })}
                    </div>
                </div>
            )}

        </div>
    )

}

export default CategoryBody;