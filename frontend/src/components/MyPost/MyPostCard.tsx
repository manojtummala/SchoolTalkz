import MyPostHeader from "./MyPostHeader";
import PostFooter from "../PostFooter";
import PostHeader from "../PostHeader";
import PostMainContent from "../PostMainContent";
import { PostData } from "@/data";

type FeedProp = {
    postData: any;
};

const MyPostCard = ({ postData }: FeedProp) => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-2xl shadow-small-bottom">
            <MyPostHeader />
            <PostMainContent />
            <PostFooter data={postData} />
        </div>
    );
};

export default MyPostCard;
