import { SVGProp } from "@/types/ui";

const X = ({ mode, width, height }: SVGProp) => {
  return (
<svg width="24" height="24" className="mt-1 mr-1 cursor-pointer"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 5.25L5.25 18.75" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 18.75L5.25 5.25" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default X;