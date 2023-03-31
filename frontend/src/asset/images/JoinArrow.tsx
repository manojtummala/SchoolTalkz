
import { SVGProp } from "@/types/ui";

const JoinArrow = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.04923 9.79701L9.38726 1.45898" stroke="#D86500" stroke-width="1.56338" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.61259 1.45898H9.38724V8.23363" stroke="#D86500" stroke-width="1.56338" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default JoinArrow;