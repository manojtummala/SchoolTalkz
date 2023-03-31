import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import PostMainContent from "./PostMainContent";
import { PostData } from "@/data";

const PostCard = () => {
  return (
    <div className="bg-white w-full min-w-[380px] rounded-md shadow-small-bottom">
      <PostHeader />
      <PostMainContent />
      <PostFooter data={PostData[0]} />
    </div>
  );
};

export default PostCard;
