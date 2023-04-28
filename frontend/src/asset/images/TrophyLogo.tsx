import { SVGProp } from "@/types/ui";

const TrophyLogo = ({ mode, width, height }: SVGProp) => {
    return (
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="27.5" cy="27.5" r="27.5" fill="white" />
            <path d="M17.5791 18.4277V25.3152C17.5791 30.2777 21.5541 34.3902 26.5166 34.4277C27.7037 34.436 28.8808 34.2093 29.9799 33.7607C31.0791 33.3121 32.0786 32.6504 32.921 31.8139C33.7634 30.9773 34.4319 29.9824 34.8881 28.8864C35.3443 27.7904 35.5791 26.6149 35.5791 25.4277V18.4277C35.5791 18.1625 35.4737 17.9082 35.2862 17.7206C35.0987 17.5331 34.8443 17.4277 34.5791 17.4277H18.5791C18.3139 17.4277 18.0595 17.5331 17.872 17.7206C17.6845 17.9082 17.5791 18.1625 17.5791 18.4277Z" stroke="#737272" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M22.5791 39.4277H30.5791" stroke="#737272" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M26.5791 34.4277V39.4277" stroke="#737272" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M35.3545 27.4277H36.5795C37.6404 27.4277 38.6578 27.0063 39.4079 26.2562C40.1581 25.506 40.5795 24.4886 40.5795 23.4277V21.4277C40.5795 21.1625 40.4741 20.9082 40.2866 20.7206C40.0991 20.5331 39.8447 20.4277 39.5795 20.4277H35.5795" stroke="#737272" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M17.8287 27.4277H16.5662C15.5053 27.4277 14.4879 27.0063 13.7377 26.2562C12.9876 25.506 12.5662 24.4886 12.5662 23.4277V21.4277C12.5662 21.1625 12.6715 20.9082 12.8591 20.7206C13.0466 20.5331 13.3009 20.4277 13.5662 20.4277H17.5662" stroke="#737272" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export default TrophyLogo;