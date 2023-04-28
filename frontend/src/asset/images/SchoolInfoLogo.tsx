import { SVGProp } from "@/types/ui";

type Prop = {
  mode: "dark" | "light";
};

const SchoolInfoLogo = ({ mode, width, height }: SVGProp) => {
  return (
    <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_114_815)">
        <circle cx="52.5" cy="52.5" r="27.5" fill="white" />
        <circle cx="52.5" cy="52.5" r="28" stroke={mode === "light" ? "#03194D" : "#888888"} />
      </g>
      <g clip-path="url(#clip0_114_815)">
        <path d="M52 45.6L60.5333 49.8667V66.9333H43.4667V49.8667L52 45.6ZM52 45.6V36M36 66.9333H68M39.2 66.9333V54.1333H43.4667M64.8 66.9333V54.1333H60.5333M49.8667 66.9333V60.5333H54.1333V66.9333M52 37.0667H58.4V41.3333H52M52 56.2667C51.4342 56.2667 50.8916 56.0419 50.4915 55.6418C50.0914 55.2417 49.8667 54.6991 49.8667 54.1333C49.8667 53.5675 50.0914 53.0249 50.4915 52.6248C50.8916 52.2248 51.4342 52 52 52C52.5658 52 53.1084 52.2248 53.5085 52.6248C53.9086 53.0249 54.1333 53.5675 54.1333 54.1333C54.1333 54.6991 53.9086 55.2417 53.5085 55.6418C53.1084 56.0419 52.5658 56.2667 52 56.2667Z" stroke={mode === "light" ? "#03194D" : "#888888"} />
      </g>
      <defs>
        <filter id="filter0_d_114_815" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.0980392 0 0 0 0 0.301961 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_815" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_815" result="shape" />
        </filter>
        <clipPath id="clip0_114_815">
          <rect width="32" height="32" fill="white" transform="translate(36 36)" />
        </clipPath>
      </defs>
    </svg>



  );
};

export default SchoolInfoLogo;