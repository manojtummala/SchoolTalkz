
import { SVGProp } from "@/types/ui";

const ReportPostLogo = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 17.5C0 7.83502 7.83502 0 17.5 0H46V35H17.5C7.83502 35 0 27.165 0 17.5Z" fill="url(#paint0_linear_257_916)" />
            <path d="M2 17C2 8.71573 8.71573 2 17 2H46V32H17C8.71573 32 2 25.2843 2 17Z" fill="white" />
            <path d="M3 17C3 9.26801 9.26801 3 17 3H46V31H17C9.26801 31 3 24.732 3 17Z" fill="url(#paint1_linear_257_916)" />
            <circle cx="25" cy="17" r="10" stroke="white" stroke-width="0.560764" />
            <path d="M24.4243 11.4443C24.1347 11.4443 23.9056 11.6896 23.9255 11.9785L24.3669 18.4034C24.3842 18.6558 24.594 18.8517 24.847 18.8517C25.1017 18.8517 25.3122 18.6532 25.3274 18.399L25.7092 11.9739C25.7262 11.6866 25.4978 11.4443 25.21 11.4443H24.4243ZM23.8888 21.6295C23.8888 22.1408 24.3033 22.5554 24.8147 22.5554C25.3261 22.5554 25.7406 22.1408 25.7406 21.6295C25.7406 21.1181 25.3261 20.7035 24.8147 20.7035C24.3033 20.7035 23.8888 21.1181 23.8888 21.6295Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear_257_916" x1="23" y1="0" x2="23" y2="35" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#DE2135" />
                    <stop offset="1" stop-color="#7C090B" />
                </linearGradient>
                <linearGradient id="paint1_linear_257_916" x1="24.5" y1="3" x2="24.5" y2="31" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#DE2135" />
                    <stop offset="1" stop-color="#7C090B" />
                </linearGradient>
            </defs>
        </svg>




    );
};

export default ReportPostLogo;