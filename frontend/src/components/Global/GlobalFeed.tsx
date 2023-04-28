import PostCard from "../PostCard";
import PostCard2 from "../PostCard2";
import GlobalFeedCard from "./GlobalFeedCard";
import GlobalFeedCard2 from "./GlobalFeedCard2";

type FeedProp = {
    postData: any;
    // school: any;
};

const GlobalFeed = ({ postData }: FeedProp) => {
    return (
        <div className=' flex grid grid-cols-2 w-full pt-8 justify-around px-20 pb-20 gap-8'>
            <div className="">
                <div className="flex grid grid-row-2 gap-6 place-items-center">
                    {postData?.map((data: any, i: any) => {
                        return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                            <GlobalFeedCard postData={data} />
                        </div>
                    })}
                </div>
            </div>

            <div className="">
                <div className="flex grid grid-row-2 gap-6 place-items-center">
                    {postData?.map((data: any, i: any) => {
                        return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                            <GlobalFeedCard2 postData={data} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default GlobalFeed;