import React from "react";

interface Props {
  ClassName: string;
}

export const Domains: React.FC<Props> = ({ ClassName }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 36"
      className={ClassName}
    >
      <g>
        <defs>
          <linearGradient
            id="idss2004863385_1g-894452121"
            x1="0"
            x2="1"
            y1="9.97803636381834e-17"
            y2="1"
          >
            <stop
              offset="0"
              stopColor="hsl(0, 100%, 50%)"
              stopOpacity="1"
            ></stop>
            <stop
              offset="1"
              stopColor="hsl(58, 100%, 50%)"
              stopOpacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0 5 C 0 2.239 2.239 0 5 0 L 19 0 C 21.761 0 24 2.239 24 5 L 24 31 C 24 33.761 21.761 36 19 36 L 5 36 C 2.239 36 0 33.761 0 31 Z"
          fill="url(#idss2004863385_1g-894452121)"
        ></path>
      </g>
      <path
        d="M 2.5 6 C 2.5 4.343 3.843 3 5.5 3 L 18.5 3 C 20.157 3 21.5 4.343 21.5 6 L 21.5 30 C 21.5 31.657 20.157 33 18.5 33 L 5.5 33 C 3.843 33 2.5 31.657 2.5 30 Z"
        fill="#121212"
      ></path>
    </svg>
  );
};

export const QuickAnswer: React.FC<Props> = ({ ClassName }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 36 36"
      className={ClassName}
    >
      <g>
        <defs>
          <linearGradient
            id="idss573655674_1g-894452121"
            x1="0"
            x2="1"
            y1="9.97803636381834e-17"
            y2="1"
          >
            <stop
              offset="0"
              stopColor="hsl(0, 100%, 50%)"
              stopOpacity="1"
            ></stop>
            <stop
              offset="1"
              stopColor="hsl(58, 100%, 50%)"
              stopOpacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <path
          d="M 18 0 C 27.941 0 36 8.059 36 18 C 36 27.941 27.941 36 18 36 C 8.059 36 0 27.941 0 18 C 0 8.059 8.059 0 18 0 Z"
          fill="url(#idss573655674_1g-894452121)"
        ></path>
      </g>
      <path
        d="M 27.899 8.101 C 30.433 10.634 32 14.134 32 18 C 32 25.732 25.732 32 18 32 C 14.134 32 10.634 30.433 8.101 27.899 C 8.154 27.953 27.899 8.114 27.899 8.101 Z"
        fill="#121212"
      ></path>
    </svg>
  );
};

export const TimeSaving: React.FC<Props> = ({ ClassName }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 36 36"
      className={ClassName}
    >
      <g>
        <defs>
          <linearGradient
            id="idss1631362496_1g-894452121"
            x1="0"
            x2="1"
            y1="9.97803636381834e-17"
            y2="1"
          >
            <stop
              offset="0"
              stopColor="hsl(0, 100%, 50%)"
              stopOpacity="1"
            ></stop>
            <stop
              offset="1"
              stopColor="hsl(58, 100%, 50%)"
              stopOpacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0 8 C 0 3.582 3.582 0 8 0 L 28 0 C 32.418 0 36 3.582 36 8 L 36 28 C 36 32.418 32.418 36 28 36 L 8 36 C 3.582 36 0 32.418 0 28 Z"
          fill="url(#idss1631362496_1g-894452121)"
        ></path>
      </g>
      <path
        d="M 27.5 12 L 15 24.5 L 9 18.5"
        fill="transparent"
        strokeWidth="7"
        stroke="#121212"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
