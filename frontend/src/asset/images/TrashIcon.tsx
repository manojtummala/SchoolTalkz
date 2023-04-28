import { SVGProp } from "@/types/ui";

type Prop = {
    mode: "dark" | "light";
};

const TrashIcon = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50.625 13.125H9.375" stroke="#F10000" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M24.375 24.375V39.375" stroke="#F10000" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M35.625 24.375V39.375" stroke="#F10000" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M46.875 13.125V48.75C46.875 49.2473 46.6775 49.7242 46.3258 50.0758C45.9742 50.4275 45.4973 50.625 45 50.625H15C14.5027 50.625 14.0258 50.4275 13.6742 50.0758C13.3225 49.7242 13.125 49.2473 13.125 48.75V13.125" stroke="#F10000" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M39.375 13.125V9.375C39.375 8.38044 38.9799 7.42661 38.2766 6.72335C37.5734 6.02009 36.6196 5.625 35.625 5.625H24.375C23.3804 5.625 22.4266 6.02009 21.7234 6.72335C21.0201 7.42661 20.625 8.38044 20.625 9.375V13.125" stroke="#F10000" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export default TrashIcon;