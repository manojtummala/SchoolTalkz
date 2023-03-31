import Feed from "../Feed";
import FeedSorting from "../FeedSorting";
import ManagePostOptions from "./ManagePostOptions";
import { PostData } from "@/data";
import { useState, useEffect } from "react";
import PostCard from "../PostCard";
import FeedPosts from "../FeedPosts";

type FeedProp = {
    postData: any;
};

const ManagePostBody = () => {

    const [feedPosts, setFeedPosts] = useState<any>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log(`fetching start`)
        fetchData();
        console.log(`fetching done`)
        setLoading(false)
        console.log(`loading false`)
    }, []);

    const fetchData = (type = "recent") => {
        setInterval(() => setFeedPosts(PostData), 4000);
    }

    return (
        // <div className="bg-light-bg-blue ">
        //     <FeedSorting />
        //     <div className="flex justify-end px-16">
        //         <ManagePostOptions />
        //     </div>

        //     <FeedPosts postData={feedPosts} />
        // </div>

        <>
            {loading === false ? (
                <div className="bg-light-bg-blue pb-10">
                    <FeedSorting />
                    <div className="flex justify-end px-16">
                        <ManagePostOptions />
                    </div>
                    <div className="pt-6">
                        <FeedPosts postData={feedPosts} />
                    </div>
                </div>
            ) : (
                <div className="bg-light-bg-blue ">Loading...</div>
            )}
        </>
    )

}

export default ManagePostBody;