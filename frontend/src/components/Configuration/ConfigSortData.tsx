import { useState } from 'react';
import { SVGProp } from "@/types/ui";
import ClassConfig from "@/asset/images/ClassLogo";
import StaffDesigLogo from "@/asset/images/StaffDesigLogo";
import SchoolInfoLogo from "@/asset/images/SchoolInfoLogo";
import AcedamicYearLogo from "@/asset/images/AcedamicYearLogo";
import LoginUsersLogo from "@/asset/images/LoginUsersLogo";


export default [
  {
    name: "Class",
    icon: <ClassConfig mode='light' />,
    link: "/configuration",
  },
  {
    name: "Staff Designation",
    icon: <StaffDesigLogo mode='light' />,
    link: "/staffdesignation",
  },
  {
    name: "School Information",
    icon: <SchoolInfoLogo mode='light' />,
    link: "/schoolinformation",
  },
  {
    name: "Acedamic Year",
    icon: <AcedamicYearLogo mode='light' />,
    link: "/acedamicyear",
  },
  {
    name: "Login Logs",
    icon: <LoginUsersLogo mode='light' />,
    link: "/loginlogs",
  },
];
