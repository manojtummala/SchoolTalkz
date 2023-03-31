import { FeedSortingData } from "@/data";
import Link from "next/link";
import AddPostSchoolFeed from "./Configuration/AddPostSchoolFeed";

const FeedSorting = () => {
  return (
    <div className="px-24 pt-5 flex items-center justify-between">
      {FeedSortingData.map((data, i) => {
        return (
          <Link key={i} href={data.link} className="cursor-pointer flex flex-col items-center justify-center py-6">
            {data.icon}
            {data.name}
          </Link>
        );
      })}
      <AddPostSchoolFeed />
    </div>
  );
};

export default FeedSorting;
