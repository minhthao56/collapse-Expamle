import React, { useRef, useEffect, useState } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import iconDevice from "../../../Icon/sp_layout.png";

import "./Collapsible.scss";

export default function Collapsible(props) {
  const { typeDevie, initiallyCollapsed, devices } = props;
  const [subLink, setSubLink] = useState("");
  const [isShow, setIsShow] = useState(false);
  const ref = useRef(null);

  let { url } = useRouteMatch();
  let location = useLocation();

  const toggleCollapse = () => {
    if (ref.current.style.height !== "0px") {
      ref.current.style.height = "0px";
      setIsShow(false);
    } else {
      ref.current.style.height = `${ref.current.scrollHeight}px`;
      setIsShow(true);
    }
  };

  useEffect(() => {
    if (!initiallyCollapsed) {
      ref.current.style.height = `${ref.current.scrollHeight}`;
    } else {
      ref.current.style.height = "0px";
    }

    const group = devices[0].group;
    if (group === "All Devices") {
      setSubLink("all");
    } else if (group === "Watting Devices") {
      setSubLink("waitting");
    } else {
      setSubLink("usb");
    }
  }, [initiallyCollapsed, devices]);

  return (
    <div className="types-devices">
      <div
        className={
          location.pathname === "/devices/" + subLink
            ? "container-header light"
            : "container-header"
        }
      >
        <div className="header-list">
          <div
            className={isShow ? "icon-minus" : "icon-plus"}
            style={{ backgroundImage: `url(${iconDevice})` }}
            onClick={toggleCollapse}
          />

          <div
            className="icon-device"
            style={{ backgroundImage: `url(${iconDevice})` }}
          />
          <Link to={`${url}/${subLink}`}>
            <span>{typeDevie}</span>
          </Link>
        </div>
      </div>
      <div
        className="container-icon-list"
        ref={ref}
        style={{
          overflow: "hidden",
          transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      >
        {devices.map((device, i) => {
          return (
            <div key={i} className="list-device">
              <div>
                <div
                  className="icon-list"
                  style={{ backgroundImage: `url(${iconDevice})` }}
                ></div>
                <Link to={"/detail/device/" + device.id}>
                  <span>{device.name}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
