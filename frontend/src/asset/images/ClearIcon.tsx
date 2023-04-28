import { SVGProp } from "@/types/ui";

const ClearIcon = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill={mode === "light" ? "#F5F5F5" : "#BA0000"} />
            <path d="M22 10L10 22" stroke={mode === "light" ? "#999999" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22 22L10 10" stroke={mode === "light" ? "#999999" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default ClearIcon;