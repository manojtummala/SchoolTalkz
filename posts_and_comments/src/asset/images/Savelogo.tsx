import { SVGProp } from "@/types/ui";

const Savelogo = ({ width, height }: SVGProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 17.8465L10 14.7215L5 17.8465V4.0965C5 3.93074 5.06585 3.77177 5.18306 3.65455C5.30027 3.53734 5.45924 3.4715 5.625 3.4715H14.375C14.5408 3.4715 14.6997 3.53734 14.8169 3.65455C14.9342 3.77177 15 3.93074 15 4.0965V17.8465Z"
        fill="#03194D"
        stroke="#03194D"
        stroke-width="0.523906"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Savelogo;
