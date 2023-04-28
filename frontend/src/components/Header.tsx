import Link from "next/link";
import { Title } from "@/types/ui";
import { BellLogo, SchoolFeedLogo, VideoCameraLogo } from "@/asset/images";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import SignOut from "@/asset/images/SignOut";

type ProfileProp = {
  id: string,
  name: string;
  position: string;
  image: string;
  school: string;
  starsearned: string;
  classrank: string;
  schoolrank: string;
};

const titles: Title[] = [
  {
    name: "School Feed",
    link: "/",
  },
];

export const user: ProfileProp[] = [
  {
    id: "0",
    name: "Jiffin",
    position: "Student",
    image: "https://i.pravatar.cc/300?img=20",
    school: "Global International School",
    starsearned: '252',
    classrank: '2',
    schoolrank: '52',
  }
]

const RenderProfile = () => {
  return (
    <div className="flex gap-5">
      {user.map((user) => (
        <div className="flex gap-5" key={user.id}>
          <div className="flex flex-col items-end">
            <div className="font-bold">Welcome {user.name}</div>
            <div>{user.position}</div>
          </div>

          <img className="rounded-full h-10 w-10" src={user.image} />
        </div>
      ))}
    </div>
  );
};

const RenderProfileMenu = () => {
  return (
    <Menu
      menuButton={
        <MenuButton>
          <div className="w-max flex justify-between items-center font-open cursor-pointer">
            <RenderProfile />
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
    <div className="text-2xl">
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

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 fixed w-[calc(100vw-13rem)] bg-white shadow-small-bottom">
      <div className="left flex gap-5">
        <SchoolFeedLogo mode="light" />
        <RenderBreadcrumb />
      </div>
      <div className="right flex gap-8 items-center justify-center text-base">
        <button>
          <VideoCameraLogo />
        </button>
        <button className="relative">
          <BellLogo />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {10}
          </span>
        </button>
        <RenderProfileMenu />
      </div>
    </div>
  );
};

export default Header;
