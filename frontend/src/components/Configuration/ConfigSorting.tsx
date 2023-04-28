import ArrowClockwise from "@/asset/images/ArrowClockwise";
import ConfigSortData from "./ConfigSortData";
import Link from "next/link";

const ConfigSorting = () => {

  function handleReloadClick() {
    window.location.reload();
  }

  return (
    <div className="flex-container">
      <div className=" pt-14 flex float-right cursor-pointer items-right gap-2" onClick={handleReloadClick}><ArrowClockwise />Reload Data</div>
      <div className="px-24 py-5 flex items-center justify-between">

        {ConfigSortData.map((data, i) => {
          return (
            <Link key={i} href={data.link} className="pt-8 cursor-pointer flex flex-col items-center justify-center">
              {data.icon}
              <div className="-mt-2">
                {data.name}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ConfigSorting;


