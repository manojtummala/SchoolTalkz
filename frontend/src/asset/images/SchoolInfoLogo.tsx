import { SVGProp } from "@/types/ui";

type Prop = {
  mode: "dark" | "light";
};

const SchoolInfoLogo = ({ mode, width, height }: SVGProp) => {
  return (
    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
      <g clip-path="url(#clip0_110_2378)">
        <path d="M27 20.6L35.5333 24.8667V41.9333H18.4667V24.8667L27 20.6ZM27 20.6V11M11 41.9333H43M14.2 41.9333V29.1333H18.4667M39.8 41.9333V29.1333H35.5333M24.8667 41.9333V35.5333H29.1333V41.9333M27 12.0667H33.4V16.3333H27M27 31.2667C26.4342 31.2667 25.8916 31.0419 25.4915 30.6418C25.0914 30.2417 24.8667 29.6991 24.8667 29.1333C24.8667 28.5675 25.0914 28.0249 25.4915 27.6248C25.8916 27.2248 26.4342 27 27 27C27.5658 27 28.1084 27.2248 28.5085 27.6248C28.9086 28.0249 29.1333 28.5675 29.1333 29.1333C29.1333 29.6991 28.9086 30.2417 28.5085 30.6418C28.1084 31.0419 27.5658 31.2667 27 31.2667Z" stroke={mode === "light" ? "#03194D" : "#888888"} />
      </g>
      <defs>
        <clipPath id="clip0_110_2378">
          <rect width="32" height="32" fill="white" transform="translate(11 11)" />
        </clipPath>
      </defs>
    </svg>



  );
};

export default SchoolInfoLogo;