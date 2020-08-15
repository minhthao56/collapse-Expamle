import React from "react";
import { Link } from "react-router-dom";

export default function HeaderDetail() {
  return (
    <div className="header-device">
      <Link to="/devices/all">
        <button className="header-device__btn--back"></button>
      </Link>
      <h1>CoreStation 40 542070399 (192.168.1.65)</h1>
      <div className="header-device__action">
        <span className="header-device__action--pagination">1/1</span>
        <button className="btn btn--left"></button>
        <button className="btn btn--right"></button>
      </div>
    </div>
  );
}
