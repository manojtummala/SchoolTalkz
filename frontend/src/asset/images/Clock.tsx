import { SVGProp } from "@/types/ui";

const Clock = ({ mode, width, height }: SVGProp) => {
  return (
<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z" stroke="#D86500" stroke-miterlimit="10"/>
<path d="M13 6V13H20" stroke="#D86500" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default Clock;