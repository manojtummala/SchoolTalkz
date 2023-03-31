import { SVGProp } from "@/types/ui";

const Circle = ({ mode, width, height }: SVGProp) => {
  return (
<svg className='rounded-xl' width="105" height="115" viewBox="0 0 105 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="95.9588" cy="17.3175" r="83.3175" fill="url(#paint0_linear_59_1858)"/>
<g opacity="0.2" filter="url(#filter0_b_59_1858)">
<circle cx="89.6383" cy="25.3619" r="83.3175" fill="url(#paint1_linear_59_1858)"/>
</g>
<g opacity="0.15" filter="url(#filter1_b_59_1858)">
<circle cx="83.3175" cy="31.6827" r="83.3175" fill="url(#paint2_linear_59_1858)"/>
</g>
<defs>
<filter id="filter0_b_59_1858" x="-14.3649" y="-78.6413" width="208.006" height="208.006" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="10.3429"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_59_1858"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_59_1858" result="shape"/>
</filter>
<filter id="filter1_b_59_1858" x="-25.2825" y="-76.9173" width="217.2" height="217.2" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="12.6413"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_59_1858"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_59_1858" result="shape"/>
</filter>
<linearGradient id="paint0_linear_59_1858" x1="95.9588" y1="-66" x2="95.9588" y2="100.635" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE600"/>
<stop offset="1" stop-color="#EF2800"/>
</linearGradient>
<linearGradient id="paint1_linear_59_1858" x1="89.6383" y1="-57.9556" x2="89.6383" y2="108.679" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE600"/>
<stop offset="1" stop-color="#EF2800"/>
</linearGradient>
<linearGradient id="paint2_linear_59_1858" x1="83.3175" y1="-51.6348" x2="83.3175" y2="115" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE600"/>
<stop offset="1" stop-color="#EF2800"/>
</linearGradient>
</defs>
</svg>


  );
};

export default Circle;