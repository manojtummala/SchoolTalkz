import { SVGProp } from "@/types/ui";

const EditIcon = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_244_4060)">
                <circle cx="25" cy="25" r="25" fill="white" fill-opacity="0.09" />
            </g>
            <path d="M25 28.9805H21V24.9844L33 12.9961L37 16.9922L25 28.9805Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M30 15.9932L34 19.9893" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M36 23.9854V34.9746C36 35.2396 35.8946 35.4937 35.7071 35.681C35.5196 35.8684 35.2652 35.9737 35 35.9737H15C14.7348 35.9737 14.4804 35.8684 14.2929 35.681C14.1054 35.4937 14 35.2396 14 34.9746V14.9941C14 14.7292 14.1054 14.4751 14.2929 14.2877C14.4804 14.1004 14.7348 13.9951 15 13.9951H26" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <defs>
                <filter id="filter0_b_244_4060" x="-57" y="-57" width="164" height="164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="28.5" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_244_4060" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_244_4060" result="shape" />
                </filter>
            </defs>
        </svg>


    );
};

export default EditIcon;