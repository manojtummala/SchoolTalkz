import { Eye, Savelogo, ThumbsUpLogo } from "@/asset/images";
import CommentLogo from "@/asset/images/CommentLogo";
import { SVGProp } from "@/types/ui";
import Input from "@/ui/Input";
import { useState } from "react";

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

const ManageFeedFooter = ({ data }: Prop) => {

  return (
    <div className="py-3 px-4 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <RenderTopics data={data} />
      </div>
      <div className="block lg:flex pt-2 px-12 gap-20 w-full justify-center bg-white">
        <button
          type="submit"
          className="flex justify-center items-center py-2 px-16 ml-4  rounded-xl border-none text-white cursor-pointer bg-gradient-to-r from-[#25B060] to-[#25B060] mr-4 w-full mb-2 lg:w-1/4"
        // onClick={showShareSuccess}
        >
          Accept
        </button>
        <button
          className="flex justify-center items-center py-2 px-16 rounded-xl border-none text-white cursor-pointer bg-[#de2135] mr-4 w-full mb-2 lg:w-1/4"
        // onClick={showShare}
        >
          Decline
        </button>
      </div>

    </div>
  );
};

export default ManageFeedFooter;
