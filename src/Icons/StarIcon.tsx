import { ComponentProps } from "react";

interface props extends ComponentProps<"svg"> {}
export default function StarIcon(props: props) {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.8415 0.92794L12.5551 4.57458C12.6323 4.73738 12.7414 4.87063 12.8747 4.9677C13.0085 5.06478 13.1683 5.12809 13.3456 5.1504L17.3449 5.65145C17.6621 5.69124 17.9461 5.81545 18.1764 6.00598C18.4061 6.19591 18.581 6.45217 18.6799 6.75666C18.7775 7.05873 18.7866 7.36805 18.7124 7.65686C18.6383 7.94688 18.4815 8.21459 18.2493 8.43165L15.3094 11.1877C15.1779 11.3113 15.0845 11.456 15.0338 11.6134C14.9832 11.7696 14.9735 11.9408 15.0073 12.1181L15.7646 16.0765C15.8249 16.39 15.7947 16.6987 15.685 16.9761C15.5753 17.254 15.3853 17.5 15.1273 17.6875C14.8698 17.8745 14.5774 17.9788 14.2753 17.9975C13.9762 18.0143 13.6766 17.9474 13.3998 17.7949L9.86955 15.8516C9.71218 15.7653 9.54576 15.7213 9.38056 15.7213C9.21535 15.7213 9.04893 15.7647 8.89156 15.8516L5.36069 17.7949C5.08152 17.9486 4.77884 18.0149 4.48098 17.9969C4.18252 17.9782 3.89009 17.8738 3.63324 17.6869C3.37517 17.5 3.18525 17.254 3.07611 16.9767C2.96698 16.6993 2.93683 16.3906 2.99652 16.0771L3.75383 12.1187C3.78759 11.942 3.77795 11.7702 3.7273 11.614C3.67665 11.4573 3.58319 11.3119 3.45175 11.1883L0.512971 8.43225C0.280835 8.21459 0.124068 7.94748 0.0493022 7.65746C-0.0248607 7.36865 -0.0164194 7.05934 0.0818615 6.75726C0.180745 6.45277 0.355601 6.19652 0.585325 6.00659C0.814446 5.81666 1.09964 5.69305 1.41679 5.65326L5.43847 5.14799C5.60609 5.12327 5.75864 5.06176 5.88706 4.96831C6.02092 4.87123 6.13005 4.73858 6.20542 4.57699L7.91961 0.929146C8.05527 0.63973 8.26088 0.406991 8.51231 0.247812C8.76434 0.0874278 9.06159 0 9.38056 0C9.69891 0 9.99677 0.0880307 10.2488 0.247812C10.5002 0.407594 10.7058 0.63973 10.8415 0.929146V0.92794Z"
        fill="url(#paint0_linear_1121_13303)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1121_13303"
          x1="0"
          y1="9"
          x2="18.7615"
          y2="9"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E70F0F" />
          <stop offset="1" stopColor="#FF5F5F" />
        </linearGradient>
      </defs>
    </svg>
  );
}
