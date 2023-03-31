import CommunitiesLogo from "@/asset/images/CommunitiesLogo";
import PostsLogo from "@/asset/images/PostsLogo";
import WorkshopsLogo from "@/asset/images/WorkshopsLogo";
import { useState } from 'react';

export default [
    {
        name: "Posts",
        icon: <PostsLogo />,
        action: () => console.log("hi"),
    },
    {
        name: "Communities",
        icon: <CommunitiesLogo />,
        action: () => console.log("hi"),
    },
    {
        name: "Workshops",
        icon: <WorkshopsLogo />,
        action: () => console.log("hi"),
    },
];

