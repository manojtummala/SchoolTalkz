type Prop = {
    mode: "dark" | "light";
  };
  
  const NewpostLogo = ({ mode }: Prop) => {
    return (
        <svg 
            width="55" 
            height="55" 
            viewBox="0 0 55 55" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="27.5" cy="27.5" r="27.5" fill="url(#paint0_linear_367_3987)"/>
            <path 
                d="M27.7507 18V35.5" 
                stroke="white" 
                stroke-width="2.1875" 
                strokeLinecap="round"
            />
            <path 
                d="M19 26.75H36.5" 
                stroke="white" 
                stroke-width="2.1875" 
                strokeLinecap="round"
            />
            <defs>
                <linearGradient id="paint0_linear_367_3987" x1="27.5" y1="0" x2="27.5" y2="55" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0A1122"/>
                    <stop offset="1" stop-color="#03194D"/>
                </linearGradient>
            </defs>
        </svg>
        
    );
  };
  
  export default NewpostLogo;
  