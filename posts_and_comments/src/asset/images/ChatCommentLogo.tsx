import { SVGProp } from "@/types/ui";

  const ChatCommentLogo = ({ mode, width, height }: SVGProp) => {
    return (
        <svg 
            width={width}
            height={height} 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M16 10V16" 
                stroke={mode === "light" ? "#03194D" : "#ffffff"}
                stroke-width="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M21.2 19L16 16" 
                stroke={mode === "light" ? "#03194D" : "#ffffff"}
                stroke-width="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M23.0247 12.4619H28.0247V7.46191" 
                stroke={mode === "light" ? "#03194D" : "#ffffff"}
                stroke-width="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M23.7748 23.775C22.2367 25.3143 20.2767 26.3628 18.1427 26.788C16.0087 27.2132 13.7965 26.9958 11.786 26.1635C9.77545 25.3312 8.05696 23.9213 6.84787 22.1122C5.63877 20.3031 4.99341 18.176 4.99341 16C4.99341 13.824 5.63877 11.6969 6.84787 9.8878C8.05696 8.07866 9.77545 6.66877 11.786 5.83647C13.7965 5.00417 16.0087 4.78686 18.1427 5.21202C20.2767 5.63719 22.2367 6.68573 23.7748 8.22501L28.0248 12.4625" 
                stroke={mode === "light" ? "#03194D" : "#ffffff"}
                stroke-width="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
        
    );
  };
  
  export default ChatCommentLogo;
  