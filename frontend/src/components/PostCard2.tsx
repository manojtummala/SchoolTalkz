import { PostData } from "@/data";
import PostFooter from "./PostFooter";
import PostMainContent2 from "./PostMainContent2";
import PostHeader2 from "./PostHeader2";

type FeedProp = {
    postData: any;
};

const PostCard2 = ({ postData }: FeedProp) => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-lg shadow-large-bottom">
            <PostHeader2 />
            <PostMainContent2 />
            <PostFooter data={postData} />
        </div>
    );
};

export default PostCard2;
