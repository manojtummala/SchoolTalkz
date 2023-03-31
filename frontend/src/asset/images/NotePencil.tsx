import { SVGProp } from "@/types/ui";

const NotePencil = ({ mode, width, height }: SVGProp) => {
  return (
<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00781 10H6.00586V8L12.0117 2L14.0137 4L8.00781 10Z" stroke="#181818" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5103 3.5L12.5122 5.5" stroke="#181818" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.5132 7.5V13C13.5132 13.1326 13.4605 13.2598 13.3666 13.3536C13.2727 13.4473 13.1454 13.5 13.0127 13.5H3.00293C2.87019 13.5 2.74289 13.4473 2.64903 13.3536C2.55517 13.2598 2.50244 13.1326 2.50244 13V3C2.50244 2.86739 2.55517 2.74021 2.64903 2.64645C2.74289 2.55268 2.87019 2.5 3.00293 2.5H8.5083" stroke="#181818" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  );
};

export default NotePencil;