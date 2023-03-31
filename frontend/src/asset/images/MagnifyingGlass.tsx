import { SVGProp } from "@/types/ui";

const MagnifyingGlass = ({ mode, width, height }: SVGProp) => {
  return (
    <svg className='w-1/12 h-1/2 cursor-pointer' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6748 19.1145C16.024 19.1145 19.5498 15.5922 19.5498 11.2472C19.5498 6.9022 16.024 3.37988 11.6748 3.37988C7.32556 3.37988 3.7998 6.9022 3.7998 11.2472C3.7998 15.5922 7.32556 19.1145 11.6748 19.1145Z" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.2434 16.8101L21.7997 21.3619" stroke="#999999" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};

export default MagnifyingGlass;