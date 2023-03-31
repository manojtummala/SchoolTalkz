import { Eye, Savelogo, ThumbsUpLogo } from "@/asset/images";
import CommentLogo from "@/asset/images/CommentLogo";
import { SVGProp } from "@/types/ui";
import Input from "@/ui/Input";

type Prop = {
  data: {
    id: string;
    topics: { name: string }[];
  };
};

const RenderTopics = ({ data }: Prop) => {
  return (
    <div className="flex gap-2">
      {data.topics.map((topic, i) => {
        return (
          <button
            key={i}
            className="bg-light-orange text-dark-orange rounded-full px-2 py-0.5 text-xs"
          >
            {topic.name}
          </button>
        );
      })}
    </div>
  );
};

const PostFooter = ({ data }: Prop) => {
  const actionProps: SVGProp = {
    mode: "light",
    height: "15",
    width: "15",
  };
  const actions = [
    { value: 10, logo: <ThumbsUpLogo {...actionProps} />, text: "Liked" },
    { value: 15, logo: <CommentLogo {...actionProps} />, text: "Comments" },
    { value: 11, logo: <Savelogo {...actionProps} />, text: "Saved" },
  ];
  return (
    <div className="py-3 px-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <RenderTopics data={data} />
        <div className="flex gap-1 text-xs bg-light-grey text-dark-grey rounded-full px-2 py-0.5">
          <Eye mode="light" />
          <span>Class V, VI</span>
        </div>
      </div>
      <div className="flex justify-between mx-4">
        {actions.map((action, i) => {
          return (
            <button className="flex gap-0.5 text-xs">
              {action.logo} {action.value} {action.text}
            </button>
          );
        })}
      </div>
      <Input actionText="Comment" placeholder="Write a comment" />
    </div>
  );
};

export default PostFooter;
