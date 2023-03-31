import { SVGProp } from "@/types/ui";

const WorkshopsLogo = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_199_37863)">
                <circle cx="52.5" cy="52.5" r="27.5" fill="white" />
                <circle cx="52.5" cy="52.5" r="28" stroke={mode === "light" ? "#737272" : "#03194D"} />
            </g>
            <g clip-path="url(#clip0_199_37863)">
                <path d="M61.3333 45.3335C61.3333 45.3335 54.6666 54.6668 44.6666 54.6668C41.9999 54.6668 37.3333 56.0002 37.3333 61.3335V66.6668H51.9999V61.3335C51.9999 58.0002 55.9999 60.0002 61.3333 50.6668L59.3333 48.6668M39.9999 42.6668V38.6668H66.6666V57.3335H62.6666M50.6666 37.3335H55.9999V40.0002H50.6666V37.3335ZM44.6666 54.6668C45.9043 54.6668 47.0912 54.1752 47.9664 53.3C48.8416 52.4248 49.3333 51.2378 49.3333 50.0002C49.3333 48.7625 48.8416 47.5755 47.9664 46.7003C47.0912 45.8252 45.9043 45.3335 44.6666 45.3335C43.4289 45.3335 42.2419 45.8252 41.3668 46.7003C40.4916 47.5755 39.9999 48.7625 39.9999 50.0002C39.9999 51.2378 40.4916 52.4248 41.3668 53.3C42.2419 54.1752 43.4289 54.6668 44.6666 54.6668V54.6668Z" stroke={mode === "light" ? "#737272" : "#03194D"} stroke-width="2" />
            </g>
            <defs>
                <filter id="filter0_d_199_37863" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.0980392 0 0 0 0 0.301961 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_199_37863" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_199_37863" result="shape" />
                </filter>
                <clipPath id="clip0_199_37863">
                    <rect width="32" height="32" fill="white" transform="translate(36 36)" />
                </clipPath>
            </defs>
        </svg>


    );
};

export default WorkshopsLogo;