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
        icon: <SchoolFeedLogo width="20" />,
        link: "/"
    },
    {
        name: "Global",
        icon: <GlobalNetworkLogo width="20" />,
        link: "/"
    },
    {
        name: "Talent Hub",
        icon: <TalentHubLogo width="20" />,
        link: "/talenthub"
    },
    {
        name: "Leaderboard",
        icon: <LeaderboardLogo width="20" />,
        link: "/"
    },
    {
        name: "Dashboard",
        icon: <DashboardLogo width="20" />,
        link: "/dashboard"
    },
    {
        name: "Student",
        icon: <StudentLogo width="20" />,
        link: "/studentprofile"
    },
    {
        name: "Staff",
        icon: <StaffLogo width="20" />,
        link: "/dashboard"
    },
    {
        name: "Report",
        icon: <ReportLogo mode="light" width="20" />,
        link: "/report"
    },
    {
        name: "Configuration",
        icon: <SettingLogo width="20" />,
        link: "/configuration"
    },
]