import { SVGProp } from "@/types/ui";

type Prop = {
  mode: "dark" | "light";
};

const MypostLogo = ({ mode, width, height }: SVGProp) => {
  return (
    <svg
      width={width ?? "55"}
      height={height ?? "55"}
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
      <path
        d="M27 28C31.4183 28 35 24.4183 35 20C35 15.5817 31.4183 12 27 12C22.5817 12 19 15.5817 19 20C19 24.4183 22.5817 28 27 28Z"
        stroke="#737272"
        stroke-width="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 28C24 30.2 22.2 32 20 32"
        stroke="#737272"
        stroke-width="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 32C31.8 32 30 30.2 30 28"
        stroke="#737272"
        stroke-width="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 42H32"
        stroke="#737272"
        stroke-width="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 38H17V34C17 32.9 17.9 32 19 32H35C36.1 32 37 32.9 37 34V38Z"
        stroke="#737272"
        stroke-width="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MypostLogo;
