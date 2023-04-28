import PostFooter from "../PostFooter";
import MyPostHeader2 from "./MyPostHeader2";
import PostMainContent2 from "../PostMainContent2";

type FeedProp = {
    postData: any;
};

const MyPostCard2 = ({ postData }: FeedProp) => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-2xl shadow-small-bottom">
            <MyPostHeader2 />
            <PostMainContent2 />
            <PostFooter data={postData} />
        </div>
    );
};

export default MyPostCard2;
