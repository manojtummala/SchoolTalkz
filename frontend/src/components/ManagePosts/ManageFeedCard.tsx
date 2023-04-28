import PostFooter from "../PostFooter";
import ManageFeedContent1 from "./ManageFeedContent1";
import ManageFeedFooter from "./ManageFeedFooter";
import ManageFeedHeader from "./ManageFeedHeader";
import { PostData } from "@/data";

type FeedProp = {
    postData: any;
};

const ManageFeedCard = ({ postData }: FeedProp) => {
    return (
        <div className="bg-white w-full min-w-[380px] rounded-2xl shadow-small-bottom">
            <ManageFeedHeader />
            <ManageFeedContent1 />
            <ManageFeedFooter data={postData} />
        </div>
    );
};

export default ManageFeedCard;
