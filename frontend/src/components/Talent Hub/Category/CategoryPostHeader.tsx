import { ThreeEllipses } from "@/asset/images";
import Image from "next/image";
import ArtPostFeedImg from "../../asset/images/ArtPostFeedImg.png";

const randomNumber: number = Math.floor(Math.random() * 10) + 1;

const CategoryPostHeader = () => {
    return (
        <div className="">
            <div className="flex gap-6 justify-between items-center p-4 mx-2 text-sm">
                <div className="flex gap-2 items-center">
                    <img
                        src={`https://i.pravatar.cc/300?img=${randomNumber}`}
                        alt=''
                        className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col px-2">
                        <span className="font-bold">Art Start</span>
                        <span className="text-dark-grey text-xs">1 hours ago</span>
                    </div>
                </div>
                <ThreeEllipses mode="light" />
            </div>
            <div className="flex flex-col px-7 pb-2 text-sm">
                <span className="break-words">Made by our community student manya sharma proud of you</span>

            </div>
        </div>

    );
};

export default CategoryPostHeader;
