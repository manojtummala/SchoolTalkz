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

const CategoryPostFooter = ({ data }: Prop) => {
    const [liked, setLiked] = useState(false);
    const [commented, setCommented] = useState(false);
    const [saved, setSaved] = useState(false);

    const actionProps: SVGProp = {
        mode: "light",
        height: "15",
        width: "15",
    };

    const likeProps = {
        ...actionProps,
        filled: liked,
    };
    const commentProps = {
        ...actionProps,
        filled: commented,
    };
    const saveProps = {
        ...actionProps,
        filled: saved,
    };

    const actions = [
        {
            value: 10,
            logo: <ThumbsUpLogo {...likeProps} />,
            text: "Liked",
            onClick: () => {
                setLiked(!liked);
            },
        },
        {
            value: 15,
            logo: <CommentLogo {...commentProps} />,
            text: "Comments",
            onClick: () => {
                setCommented(!commented);
            },
        },
        {
            value: 11,
            logo: <Savelogo {...saveProps} />,
            text: "Saved",
            onClick: () => {
                setSaved(!saved);
            },
        },
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
                        <button className="flex gap-0.5 text-xs " key={i} onClick={action.onClick}>
                            {action.logo} {action.value} {action.text}
                        </button>
                    );
                })}
            </div>
            <Input actionText="Comment" placeholder="Write a comment" />
        </div>
    );
};

export default CategoryPostFooter;
