import PostFooter from "../PostFooter";
import PostHeader from "../PostHeader";
import PostMainContent from "../PostMainContent";
import { PostData } from "@/data";
import GlobalFeedCardHeader from "./GlobalFeedCardHeader";

type FeedProp = {
    postData: any;
    // school: any;
};

const GlobalFeedCard = ({ postData }: FeedProp) => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-2xl shadow-small-bottom">
            <GlobalFeedCardHeader />
            <PostMainContent />
            <PostFooter data={postData} />
        </div>
    );
};

export default GlobalFeedCard;
