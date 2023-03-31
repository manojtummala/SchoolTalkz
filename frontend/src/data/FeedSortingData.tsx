import { LabelsLogo, MypostLogo, NewpostLogo, RecentLogo, TrendingLogo } from "@/asset/images";
import ManagePostsLogo from "@/asset/images/ManagePostsLogo";

export default [
  {
    name: "Recent",
    icon: <RecentLogo />,
    link: '/'
  },
  {
    name: "Trending",
    icon: <TrendingLogo />,
    link: '/'
  },
  {
    name: "My Post",
    icon: <MypostLogo />,
    link: '/'
  },
  {
    name: "Labels",
    icon: <LabelsLogo />,
    link: '/'
  },
  {
    name: "Manage Posts",
    icon: <ManagePostsLogo />,
    action: () => console.log("hi"),
    link: '/manageposts'
  },
];
