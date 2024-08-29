import { RotatingLines } from "react-loader-spinner";

import style from "./Loader.module.css";

import React from "react";

interface RotatingLinesProps {
  visible: boolean;
  height: number;
  width: number;
  color: string;
  strokeWidth: string;
  animationDuration: string;
  ariaLabel: string;
  wrapperStyle?: object;
  wrapperClass?: string;
}

export default function Loader(): React.ReactElement<RotatingLinesProps> {
  return (
    <div>
      <RotatingLines
        visible={true}
        height={96}
        width={96}
        color="black"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
