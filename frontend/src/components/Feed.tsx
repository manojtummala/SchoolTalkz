import FeedPosts from "./FeedPosts";
import { useState, useEffect } from "react";
import FeedSorting from "./FeedSorting";
import { PostData } from "@/data";
import Labels from "./Labels";
const Feed = () => {
  const [feedPosts, setFeedPosts] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(`fetching start`)
    fetchData();
    console.log(`fetching done`)
    setLoading(false)
    console.log(`loading false`)
  }, []);

  const fetchData = (type = "recent") => {
    setInterval(() => setFeedPosts(PostData), 4000);
  };

  return (
    <>
      {loading === false ? (
        <div className="bg-light-bg-blue">
          <FeedSorting />
          <FeedPosts postData={feedPosts} />
          <Labels />
        </div>
      ) : (
        <div className="bg-light-bg-blue ">Loading...</div>
      )}
    </>
  );
};

export default Feed;
