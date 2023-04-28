import { SVGProp } from "@/types/ui";

const LeaderboardLogo1 = ({ mode, width, height }: SVGProp) => {
  return (
    <svg width={width ?? "106"} height={height ?? "105"} viewBox="0 0 106 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_670_3322)">
        <circle cx="53" cy="52.5" r="27.5" fill="white" />
        <circle cx="53" cy="52.5" r="28" stroke={mode === "light" ? "#03194D" : "#737272"} />
      </g>
      <path d="M43.0791 43.4277V50.3152C43.0791 55.2777 47.0541 59.3902 52.0166 59.4277C53.2037 59.436 54.3808 59.2093 55.4799 58.7607C56.5791 58.3121 57.5786 57.6504 58.421 56.8139C59.2634 55.9773 59.9319 54.9824 60.3881 53.8864C60.8443 52.7904 61.0791 51.6149 61.0791 50.4277V43.4277C61.0791 43.1625 60.9737 42.9082 60.7862 42.7206C60.5987 42.5331 60.3443 42.4277 60.0791 42.4277H44.0791C43.8139 42.4277 43.5595 42.5331 43.372 42.7206C43.1845 42.9082 43.0791 43.1625 43.0791 43.4277Z" stroke={mode === "light" ? "#03194D" : "#737272"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M48.0791 64.4277H56.0791" stroke={mode === "light" ? "#03194D" : "#737272"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M52.0791 59.4277V64.4277" stroke={mode === "light" ? "#03194D" : "#737272"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M60.8545 52.4277H62.0795C63.1404 52.4277 64.1578 52.0063 64.9079 51.2562C65.6581 50.506 66.0795 49.4886 66.0795 48.4277V46.4277C66.0795 46.1625 65.9741 45.9082 65.7866 45.7206C65.5991 45.5331 65.3447 45.4277 65.0795 45.4277H61.0795" stroke={mode === "light" ? "#03194D" : "#737272"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M43.3286 52.4277H42.0661C41.0052 52.4277 39.9878 52.0063 39.2377 51.2562C38.4875 50.506 38.0661 49.4886 38.0661 48.4277V46.4277C38.0661 46.1625 38.1715 45.9082 38.359 45.7206C38.5465 45.5331 38.8009 45.4277 39.0661 45.4277H43.0661" stroke={mode === "light" ? "#03194D" : "#737272"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <filter id="filter0_d_670_3322" x="0.5" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.0980392 0 0 0 0 0.301961 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_670_3322" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_670_3322" result="shape" />
        </filter>
      </defs>
    </svg>


  );
};

export default LeaderboardLogo1;
