import { RotatingLines } from "react-loader-spinner";

import style from "./Loader.module.css";

import React from "react";

export default function Loader(): React.ReactElement {
  return (
    <div>
      <RotatingLines
        visible={true}
        width="96"
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
