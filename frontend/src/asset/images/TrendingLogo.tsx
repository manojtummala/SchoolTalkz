import { SVGProp } from "@/types/ui";

type Prop = {
    mode: "dark" | "light";
  };
  
  const TrendingLogo = ({ mode, width, height }: SVGProp) => {
    return (
        <svg 
          width={width ?? "55"} 
          height={height ?? "55"} 
          viewBox="0 0 55 55" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="27.5" cy="27.5" r="27.5" fill="white"/>

          <path 
            d="M33.425 29.5C33.2096 30.8613 32.5686 32.1195 31.5941 33.0941C30.6195 34.0686 29.3613 34.7096 28 34.925" 
            stroke= {mode === "light" ? "#03194D" : "#737272"} 
            stroke-width="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M20 19.1748C18.075 22.0748 16.5 25.3998 16.5 28.4998C16.5 31.2846 17.6062 33.9553 19.5754 35.9244C21.5445 37.8936 24.2152 38.9998 27 38.9998C29.7848 38.9998 32.4555 37.8936 34.4246 35.9244C36.3938 33.9553 37.5 31.2846 37.5 28.4998C37.5 21.9998 33 16.9998 29.35 13.3623L25 22.4998L20 19.1748Z" 
            stroke= {mode === "light" ? "#03194D" : "#737272"} 
            stroke-width="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
    );
  };
  
  export default TrendingLogo;