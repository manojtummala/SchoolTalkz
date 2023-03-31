import { SVGProp } from "@/types/ui";

const SearchIcon = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.875 19.25C15.2242 19.25 18.75 15.7242 18.75 11.375C18.75 7.02576 15.2242 3.5 10.875 3.5C6.52576 3.5 3 7.02576 3 11.375C3 15.7242 6.52576 19.25 10.875 19.25Z" stroke="#181818" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.4438 16.9438L21 21.5001" stroke="#181818" stroke-linecap="round" stroke-linejoin="round" />
        </svg>


    );
};

export default SearchIcon;