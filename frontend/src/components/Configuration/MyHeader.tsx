import Link from "next/link";
import { Title } from "@/types/ui";
import { BellLogo, SearchIcon, VideoCameraLogo } from "@/asset/images";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import SignOut from "@/asset/images/SignOut";
import SettingLogo from "@/asset/images/SettingLogo";
import { Montserrat } from "next/font/google";
import Student from "@/asset/images/Student";
import Moon from "@/asset/images/Moon";
import StaffLogo from "@/asset/images/StaffLogo";
import Staff from "@/asset/images/Staff";

const montserrat = Montserrat({ subsets: ["latin"] });

type ProfileProp = {
  image: string;
};

const titles: Title[] = [
  {
    name: "Staff",
    link: "/staff",
  },
];

const RenderProfile = ({ image }: ProfileProp) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-end">
      </div>
      <img className="rounded-full h-10 w-10" src={image} />
    </div>
  );
};

const RenderProfileMenu = (props: ProfileProp) => {
  return (
    <Menu
      menuButton={
        <MenuButton>
          <div className="w-max flex justify-between items-center font-open cursor-pointer">
            <RenderProfile {...props} />
          </div>
        </MenuButton>
      }
      transition
    >
      <MenuItem>
        <Link href="/profile">Profile</Link>
      </MenuItem>
      <MenuItem>
        <div className="flex">
          <SignOut />
          Log out
        </div>
      </MenuItem>
    </Menu>
  );
};

const RenderBreadcrumb = () => {
  return (
    <div className="text-xl">
      {titles.map((title, i) => {
        return (
          <span key={i} className={`${i === 0 ? "font-bold" : ""}`}>
            {i === 0 ? "" : "/"}
            <Link href={title.link} className={`px-2 ${i === 0 ? "pl-0" : ""}`}>
              {title.name}
            </Link>
          </span>
        );
      })}
    </div>
  );
};

const StaffHeader = () => {
  return (
    <div className={montserrat.className}>
      <div className="flex items-center justify-between px-10 py-5 fixed w-[calc(100vw-13rem)] bg-myBlue shadow-large-bottom rounded-t-3xl">
        <div className="left flex gap-5">
          <Staff mode="light" />
          <RenderBreadcrumb />
        </div>
        <div className="right flex gap-8 items-center justify-center text-base">
          <button className="relative">
            <BellLogo />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {10}
            </span>
          </button>
          <button className="relative">
            <Moon />
          </button>
          <RenderProfileMenu
            image="https://i.pravatar.cc/300?img=20"
          />
        </div>
      </div>
    </div>
  );
};

export default StaffHeader;
