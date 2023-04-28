import MyPostCard from "./MyPostCard";
import MyPostCard2 from "./MyPostCard2";

type FeedProp = {
    postData: any;
};

const MyPostFeed = ({ postData }: FeedProp) => {
    return (
        <div className=' flex grid grid-cols-2 w-full pt-8 justify-around px-20 pb-20 gap-8'>
            <div className="">
                <div className="flex grid grid-row-2 gap-6 place-items-center">
                    {postData?.map((data: any, i: any) => {
                        return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                            <MyPostCard postData={data} />
                        </div>
                    })}
                </div>
            </div>

            <div className="">
                <div className="flex grid grid-row-2 gap-6 place-items-center">
                    {postData?.map((data: any, i: any) => {
                        return <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
                            <MyPostCard2 postData={data} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default MyPostFeed;