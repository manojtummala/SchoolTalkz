import { SVGProp } from "@/types/ui";

const LoginUsersLogo = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_117_3310)">
<circle cx="52.5" cy="52.5" r="27.5" fill="white"/>
<circle cx="52.5" cy="52.5" r="28" stroke={mode === "light" ? "#03194D" : "#888888"}/>
</g>
<path d="M51.5 62.6663H38.6665V58.6663C38.6665 55.1063 45.7732 53.333 49.3332 53.333C50.6665 53.333 52.8932 53.5067 54.6665 54M49.3332 51.9997C52.2798 51.9997 54.6665 49.613 54.6665 46.6663C54.6665 43.7197 52.2798 41.333 49.3332 41.333C46.3865 41.333 43.9998 43.7197 43.9998 46.6663C43.9998 49.613 46.3865 51.9997 49.3332 51.9997Z" stroke={mode === "light" ? "#03194D" : "#888888"}/>
<path d="M55.3031 56.9469C55.0593 56.3487 54.9351 55.7085 54.9375 55.0625C54.9375 54.0612 55.2344 53.0825 55.7907 52.2499C56.347 51.4174 57.1376 50.7685 58.0627 50.3854C58.9877 50.0022 60.0056 49.9019 60.9876 50.0973C61.9697 50.2926 62.8717 50.7748 63.5797 51.4828C64.2877 52.1908 64.7699 53.0928 64.9652 54.0749C65.1606 55.0569 65.0603 56.0748 64.6771 56.9998C64.294 57.9249 63.6451 58.7155 62.8126 59.2718C61.9801 59.8281 61.0013 60.125 60 60.125C59.354 60.1274 58.7138 60.0032 58.1156 59.7594L57.1875 60.6875H55.5V62.375H53.8125V64.0625H51V61.25L55.3031 56.9469Z" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M61.4062 54.5C61.8722 54.5 62.25 54.1222 62.25 53.6562C62.25 53.1903 61.8722 52.8125 61.4062 52.8125C60.9403 52.8125 60.5625 53.1903 60.5625 53.6562C60.5625 54.1222 60.9403 54.5 61.4062 54.5Z" fill="#03194D"/>
<defs>
<filter id="filter0_d_117_3310" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="12"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.0980392 0 0 0 0 0.301961 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_117_3310"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_117_3310" result="shape"/>
</filter>
</defs>
</svg>




    );
};

export default LoginUsersLogo;