import { FeedSortingData } from "@/data";

const FeedSorting = () => {
  return (
    <div className="px-24 py-5 flex items-center justify-between">
      {FeedSortingData.map((data, i) => {
        return (
          <div key={i} className="cursor-pointer flex flex-col items-center justify-center" onClick={data.action}>
            {data.icon}
            {data.name}
          </div>
        );
      })}
    </div>
  );
};

export default FeedSorting;
