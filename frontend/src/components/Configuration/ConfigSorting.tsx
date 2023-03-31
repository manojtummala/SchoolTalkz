import ArrowClockwise from "@/asset/images/ArrowClockwise";
import ConfigSortData from "./ConfigSortData";
import Link from "next/link"


const ConfigSorting = () => {
  return (
    <div className="flex-container">
      <div className="flex float-right cursor-pointer items-right gap-2"><ArrowClockwise />Reload Data</div>
      <div className="px-24 py-5 flex items-center justify-between">

        {ConfigSortData.map((data, i) => {
          return (
            <Link key={i} href={data.link} className="cursor-pointer flex flex-col items-center justify-center">
              {data.icon}
              {data.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ConfigSorting;


