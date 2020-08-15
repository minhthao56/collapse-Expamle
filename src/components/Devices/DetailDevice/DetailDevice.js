import React from "react";
import { useParams } from "react-router-dom";

import "./DetailDeivce.scss";
import Information from "./Information";
import HeaderDetial from "./HeaderDetail";
import NetWork from "./Network";

export default function DetailDevice() {
  let params = useParams();
  console.log(params);

  return (
    <div className="detail-device">
      <HeaderDetial />
      <Information />
      <NetWork />
    </div>
  );
}
