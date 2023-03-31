import { SVGProp } from "@/types/ui";

type Prop = {
  mode: "dark" | "light";
};

const StaffDesigLogo = ({ mode, width, height }: SVGProp) => {
  return (
    <svg width="105" height="105" viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_110_2361)">
        <circle cx="52.5" cy="52.5" r="27.5" fill="white" />
        <circle cx="52.5" cy="52.5" r="28" stroke={mode === "light" ? "#03194D" : "#888888"} />
      </g>
      <g clip-path="url(#clip0_110_2361)">
        <rect width="32" height="32" transform="translate(36.5 36.4717)" fill="white" />
        <path d="M53.565 39.1986C53.565 39.8788 53.0127 40.4309 52.3308 40.4309C51.6504 40.4309 51.0987 39.8792 51.0987 39.1986C51.0987 38.5181 51.6504 37.9664 52.3308 37.9664C53.0127 37.9664 53.565 38.5186 53.565 39.1986Z" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="0.8" />
        <path d="M48.1881 46.73H49.5421L49.5421 46.7302H50.0754H54.9404H55.0808H55.3806H55.4731H56.8122H57.3509L57.1951 46.2145L56.2188 42.9839C56.1207 42.6435 55.8747 42.214 55.4938 41.8626C55.1051 41.5039 54.5595 41.2122 53.8682 41.1952L53.8682 41.1951L53.8586 41.195L51.2035 41.1928L51.2012 41.1928C50.4947 41.1962 49.9367 41.4866 49.5393 41.8487C49.1506 42.2028 48.9002 42.6387 48.8008 42.9826L47.8059 46.2122L47.6464 46.73H48.1881Z" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="0.8" />
        <path d="M52.2206 47.46V53.5482M52.2206 53.5482H43.0881V55.8313M52.2206 53.5482H61.353V55.8313" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="0.8" />
        <path d="M44.4326 57.4633C44.4326 58.1434 43.8804 58.6955 43.1984 58.6955C42.518 58.6955 41.9664 58.1438 41.9664 57.4633C41.9664 56.7827 42.518 56.2311 43.1984 56.2311C43.8804 56.2311 44.4326 56.7833 44.4326 57.4633Z" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="0.8" />
        <path d="M39.0561 64.9956H40.41L40.41 64.9958H40.9434H45.8083H45.9487H46.2486H46.341H47.6801H48.2189L48.063 64.4801L47.0867 61.2495C46.9886 60.9091 46.7426 60.4796 46.3617 60.1282C45.973 59.7695 45.4274 59.4778 44.7361 59.4608L44.7361 59.4607L44.7266 59.4607L42.0714 59.4584L42.0691 59.4584C41.3626 59.4619 40.8046 59.7522 40.4072 60.1143C40.0185 60.4685 39.7681 60.9043 39.6687 61.2482L38.6738 64.4779L38.5143 64.9956H39.0561Z" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="0.8" />
        <path d="M62.6973 57.4633C62.6973 58.1434 62.145 58.6955 61.4631 58.6955C60.7827 58.6955 60.2311 58.1438 60.2311 57.4633C60.2311 56.7827 60.7827 56.2311 61.4631 56.2311C62.145 56.2311 62.6973 56.7833 62.6973 57.4633Z" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="0.8" />
        <path d="M57.3207 64.9956H58.6747L58.6746 64.9958H59.208H64.0729H64.2134H64.5132H64.6056H65.9448H66.4835L66.3277 64.4801L65.3514 61.2495C65.2533 60.9091 65.0072 60.4796 64.6264 60.1282C64.2376 59.7695 63.6921 59.4778 63.0007 59.4608L63.0007 59.4607L62.9912 59.4607L60.336 59.4584L60.3337 59.4584C59.6273 59.4619 59.0693 59.7522 58.6719 60.1143C58.2832 60.4685 58.0328 60.9043 57.9334 61.2482L56.9384 64.4779L56.7789 64.9956H57.3207Z" stroke={mode === "light" ? "#03194D" : "#888888"} stroke-width="0.8" />
      </g>
      <defs>
        <filter id="filter0_d_110_2361" x="0" y="0" width="105" height="105" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0117647 0 0 0 0 0.0980392 0 0 0 0 0.301961 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_2361" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_110_2361" result="shape" />
        </filter>
        <clipPath id="clip0_110_2361">
          <rect width="32" height="32" fill="white" transform="translate(36.5 36.4717)" />
        </clipPath>
      </defs>
    </svg>



  );
};

export default StaffDesigLogo;