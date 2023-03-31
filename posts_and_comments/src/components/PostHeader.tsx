import { ThreeEllipses } from "@/asset/images";

const randomNumber: number = Math.floor(Math.random() * 10) + 1;

const PostHeader = () => {
  return (
    <div className="flex justify-between items-center p-2 mx-2 text-sm">
      <div className="flex gap-2 items-center">
        <img
          src={`https://i.pravatar.cc/300?img=${randomNumber}`}
          alt={`nr`}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col">
          <span className="font-bold">Gurunath (Class V)</span>
          <span className="text-dark-grey text-xs">1 hours ago</span>
        </div>
      </div>
      <ThreeEllipses mode="light" />
    </div>
  );
};

export default PostHeader;
