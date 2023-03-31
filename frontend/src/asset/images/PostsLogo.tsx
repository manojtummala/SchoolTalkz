import { SVGProp } from "@/types/ui";

const PostsLogo = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_199_37022)">
                <circle cx="52.5" cy="52.5" r="27.5" fill="white" />
                <circle cx="52.5" cy="52.5" r="28" stroke={mode === "light" ? "#737272" : "#03194D"} />
            </g>
            <path d="M48 48H56" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M48 52H56" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M48 56H52" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M55.5875 63H42C41.7348 63 41.4804 62.8946 41.2929 62.7071C41.1054 62.5196 41 62.2652 41 62V42C41 41.7348 41.1054 41.4804 41.2929 41.2929C41.4804 41.1054 41.7348 41 42 41H62C62.2652 41 62.5196 41.1054 62.7071 41.2929C62.8946 41.4804 63 41.7348 63 42V55.5875C63.0005 55.7174 62.9753 55.846 62.926 55.9661C62.8766 56.0862 62.8041 56.1955 62.7125 56.2875L56.2875 62.7125C56.1955 62.8041 56.0862 62.8766 55.9661 62.926C55.846 62.9753 55.7174 63.0005 55.5875 63V63Z" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M62.9125 56H56V62.9125" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <filter id="filter0_d_199_37022" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.0980392 0 0 0 0 0.301961 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_199_37022" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_199_37022" result="shape" />
                </filter>
            </defs>
        </svg>

    );
};

export default PostsLogo;