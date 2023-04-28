import PostFooter from "../PostFooter";
import ManageFeedContent2 from "./ManageFeedContent2";
import ManageFeedFooter from "./ManageFeedFooter";
import ManageFeedHeader from "./ManageFeedHeader";
import { PostData } from "@/data";

type FeedProp = {
    postData: any;
};

const ManageFeedCard2 = ({ postData }: FeedProp) => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-2xl shadow-small-bottom">
            <ManageFeedHeader />
            <ManageFeedContent2 />
            <PostFooter data={postData} />
        </div>
    );
};

export default ManageFeedCard2;
