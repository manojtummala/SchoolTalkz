import FeedPosts from "./FeedPosts"
import FeedSorting from "./FeedSorting"
const Feed = () => {
  return (
    <div className="bg-light-bg-blue ">
        <FeedSorting/>
        <FeedPosts/>
    </div>
  )
}

export default Feed