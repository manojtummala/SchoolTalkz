import { PostData } from "@/data"
import PostCard from "./PostCard"

const FeedPosts = () => {
  return (
    <div className="grid grid-cols-2 gap-3 place-items-center px-10">
        {PostData.map((data, i) => {
            return <div className={`w-full ${i%2===0 ? "": ""}`}>
                <PostCard/>
            </div>
        })}
    </div>
  )
}

export default FeedPosts