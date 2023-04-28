import PostFooter from "../PostFooter";
import PostHeader from "../PostHeader";
import PostMainContent from "../PostMainContent";
import { PostData } from "@/data";
import GlobalFeedCardHeader2 from "./GlobalFeedCardHeader2";
import PostMainContent2 from "../PostMainContent2";

type FeedProp = {
    postData: any;
};

const GlobalFeedCard2 = ({ postData }: FeedProp) => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-2xl shadow-small-bottom">
            <GlobalFeedCardHeader2 />
            <PostMainContent2 />
            <PostFooter data={postData} />
        </div>
    );
};

export default GlobalFeedCard2;
