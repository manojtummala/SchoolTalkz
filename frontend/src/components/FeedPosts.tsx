import PostCard from "./PostCard";

type FeedProp = {
  postData: any;
};

const FeedPosts = ({ postData }: FeedProp) => {
  return (
    <div className="grid grid-cols-2 gap-3 place-items-center px-10">
      {postData?.map((data: any, i: any) => {
        return (
          <div className={`w-full ${i % 2 === 0 ? "" : ""}`} key={i}>
            <PostCard postData={data} />
          </div>
        );
      })}
    </div>
  );
};

export default FeedPosts;