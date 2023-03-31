import { SVGProp } from "@/types/ui";

const CommentLogo = ({ height, mode, width, filled }: SVGProp) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.54709 14.1746C2.61653 12.6046 2.29103 10.7489 2.6317 8.95596C2.97237 7.16298 3.95578 5.55601 5.39731 4.43672C6.83883 3.31743 8.63934 2.7628 10.4608 2.87695C12.2823 2.9911 13.9995 3.76619 15.29 5.05669C16.5805 6.3472 17.3556 8.06438 17.4697 9.88586C17.5839 11.7073 17.0292 13.5078 15.91 14.9494C14.7907 16.3909 13.1837 17.3743 11.3907 17.715C9.59774 18.0556 7.74208 17.7301 6.17209 16.7996V16.7996L3.57834 17.534C3.47207 17.565 3.3594 17.567 3.25213 17.5395C3.14487 17.5121 3.04696 17.4563 2.96866 17.378C2.89037 17.2997 2.83459 17.2018 2.80715 17.0945C2.77971 16.9873 2.78163 16.8746 2.81271 16.7683L3.54709 14.1746Z"
        stroke={mode === "dark" ? "#fff" : "#737272"}
        fill={filled ? "#03194D" : "#ffffff"}
        stroke-width="0.523906"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 9.0965H12.5"
        stroke={mode === "dark" ? "#fff" : "#737272"}
        fill={filled ? "#03194D" : "#ffffff"}
        stroke-width="0.523906"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 11.5958H12.5"
        stroke={mode === "dark" ? "#fff" : "#737272"}
        fill={filled ? "#03194D" : "#ffffff"}
        stroke-width="0.523906"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CommentLogo;
