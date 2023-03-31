import Link from "next/link";
import { Title } from "@/types/ui";
import { BellLogo, SchoolFeedLogo, VideoCameraLogo } from "@/asset/images";

const titles: Title[] = [
  {
    name: "School Feed",
    link: "/",
  },
  // {
  //   name: "School Feed",
  //   link: "/",
  // },
  // {
  //   name: "School Feed",
  //   link: "/",
  // },
];

const RenderBreadcrumb = () => {
  return (
    <div className="text-2xl">
      {titles.map((title, i) => {
        return (
          <span key={i} className={`${i === 0 ? "font-bold" : ""}`}>
            {i === 0 ? "" : "/"}
            <Link href={""} className={`px-2 ${i === 0 ? "pl-0" : ""}`}>
              {title.name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 fixed w-[calc(100vw-13rem)] bg-white shadow-small-bottom">
      <div className="left flex gap-5">
        <SchoolFeedLogo mode="light" />
        <RenderBreadcrumb />
      </div>
      <div className="right flex gap-7 items-center justify-center text-base">
        <button><VideoCameraLogo/></button>
        <button className="relative">
          <BellLogo />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {10}
          </span>
        </button>
        <div className="flex gap-5">
          <div className="flex flex-col items-end">
            <div className="font-bold">Welcome {"Jifin"}</div>
            <div>{"Student"}</div>
          </div>
          <img
            className="rounded-full h-10 w-10"
            src="https://i.pravatar.cc/300?img=20"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
