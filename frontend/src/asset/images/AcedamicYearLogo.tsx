import { SVGProp } from "@/types/ui";

const AcedamicYearLogo = ({ mode, width, height }: SVGProp) => {
  return (
    <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_114_1817)">
<circle cx="52.5" cy="52.5" r="27.5" fill="white"/>
<circle cx="52.5" cy="52.5" r="28" stroke={mode === "light" ? "#03194D" : "#888888"}/>
</g>
<path d="M47.9961 51.8807L56.872 48.334L65.748 51.8807L56.872 55.4273L47.9961 51.8807Z" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="1.102" stroke-linejoin="round"/>
<path d="M65.7482 51.9277V55.8219M52.031 53.7496V59.0029C52.031 59.0029 54.0619 61.0013 56.8722 61.0013C59.6829 61.0013 61.7138 59.0029 61.7138 59.0029V53.7496" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="1.102" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M55.6248 60.9997H39.7914C39.3542 60.9997 38.9998 60.6452 38.9998 60.208V44.3747C38.9998 43.9374 39.3542 43.583 39.7914 43.583H55.6248C56.062 43.583 56.4164 43.9374 56.4164 44.3747V48.333" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="1.102" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.4583 42V45.1667" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="1.102" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.9583 42V45.1667" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="1.102" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M38.9998 48.333H56.4164" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="1.102" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<filter id="filter0_d_114_1817" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.0980392 0 0 0 0 0.301961 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_114_1817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_114_1817" result="shape"/>
</filter>
</defs>
</svg>




  );
};

export default AcedamicYearLogo;