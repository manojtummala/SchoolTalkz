import { ModeProp } from "@/types/ui";

const Eye = ({mode}: ModeProp) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.82666 4.01184C3.13916 4.01184 1.26416 8.23059 1.26416 8.23059C1.26416 8.23059 3.13916 12.4493 7.82666 12.4493C12.5142 12.4493 14.3892 8.23059 14.3892 8.23059C14.3892 8.23059 12.5142 4.01184 7.82666 4.01184Z"
        stroke={mode === "light" ? "#545454" : "#ffffff"}
        stroke-width="1.1387"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.82666 10.5739C9.12108 10.5739 10.1704 9.52455 10.1704 8.23013C10.1704 6.93572 9.12108 5.88638 7.82666 5.88638C6.53224 5.88638 5.48291 6.93572 5.48291 8.23013C5.48291 9.52455 6.53224 10.5739 7.82666 10.5739Z"
        stroke={mode === "light" ? "#545454" : "#ffffff"}
        stroke-width="1.1387"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Eye;
