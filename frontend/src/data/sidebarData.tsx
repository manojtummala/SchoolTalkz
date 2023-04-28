import { GlobalNetworkLogo, SchoolFeedLogo, TalentHubLogo } from "@/asset/images";
import DashboardLogo from "@/asset/images/DashboardLogo";
import StudentLogo from "@/asset/images/StudentLogo";
import StaffLogo from "@/asset/images/StaffLogo";
import LeaderboardLogo from "@/asset/images/LeaderboardLogo";
import ReportLogo from "@/asset/images/ReportLogo";
import SettingLogo from "@/asset/images/SettingLogo";


export default [
    {
        name: "School Feed",
        icon: <SchoolFeedLogo width="25" />,
        link: "/schoolfeed"
    },
    {
        name: "Global",
        icon: <GlobalNetworkLogo width="25" />,
        link: "/global"
    },
    {
        name: "Talent Hub",
        icon: <TalentHubLogo width="25" />,
        link: "/talenthub"
    },
    {
        name: "Leaderboard",
        icon: <LeaderboardLogo width="25" />,
        link: "/leaderboard"
    },
    {
        name: "Dashboard",
        icon: <DashboardLogo width="25" />,
        link: "/dashboard"
    },
    {
        name: "Student",
        icon: <StudentLogo width="25" />,
        link: "/student"
    },
    {
        name: "Staff",
        icon: <StaffLogo width="25" />,
        link: "/staff"
    },
    {
        name: "Report",
        icon: <ReportLogo width="30" height="30" />,
        link: "/report"
    },
    {
        name: "Configuration",
        icon: <SettingLogo width="30" />,
        link: "/configuration"
    },
]