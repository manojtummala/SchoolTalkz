import { SVGProp } from "@/types/ui";

const CommunitiesLogo = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_199_37748)">
                <circle cx="52.5" cy="52.5" r="27.5" fill="white" />
                <circle cx="52.5" cy="52.5" r="28" stroke={mode === "light" ? "#737272" : "#03194D"} />
            </g>
            <path d="M52 58.5C54.7614 58.5 57 56.2614 57 53.5C57 50.7386 54.7614 48.5 52 48.5C49.2386 48.5 47 50.7386 47 53.5C47 56.2614 49.2386 58.5 52 58.5Z" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M60.5 50.5C61.6647 50.4981 62.8137 50.7683 63.8554 51.2892C64.8972 51.81 65.8028 52.5671 66.5 53.5" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M37.5 53.5C38.1972 52.5671 39.1028 51.81 40.1446 51.2892C41.1863 50.7683 42.3353 50.4981 43.5 50.5" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M44.8 63.0002C45.4586 61.6516 46.4827 60.515 47.7556 59.72C49.0286 58.9249 50.4992 58.5034 52 58.5034C53.5009 58.5034 54.9715 58.9249 56.2445 59.72C57.5174 60.515 58.5415 61.6516 59.2 63.0002" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M43.5002 50.5C42.741 50.5008 41.9972 50.2855 41.3558 49.8792C40.7145 49.473 40.2019 48.8927 39.8781 48.206C39.5543 47.5193 39.4327 46.7546 39.5273 46.0014C39.6219 45.2481 39.929 44.5373 40.4126 43.9521C40.8962 43.3668 41.5364 42.9313 42.2583 42.6963C42.9802 42.4614 43.7541 42.4368 44.4895 42.6253C45.2249 42.8139 45.8915 43.2078 46.4113 43.7611C46.9312 44.3144 47.2828 45.0043 47.4252 45.75" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M56.575 45.75C56.7173 45.0043 57.0689 44.3144 57.5888 43.7611C58.1086 43.2078 58.7752 42.8139 59.5106 42.6253C60.246 42.4368 61.0199 42.4614 61.7418 42.6963C62.4637 42.9313 63.1039 43.3668 63.5875 43.9521C64.0711 44.5373 64.3782 45.2481 64.4728 46.0014C64.5674 46.7546 64.4458 47.5193 64.122 48.206C63.7982 48.8927 63.2856 49.473 62.6443 49.8792C62.0029 50.2855 61.2591 50.5008 60.5 50.5" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <filter id="filter0_d_199_37748" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.0980392 0 0 0 0 0.301961 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_199_37748" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_199_37748" result="shape" />
                </filter>
            </defs>
        </svg>


    );
};

export default CommunitiesLogo;