import React, { useState } from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";

import Collapsible from "./Collpasible/Collapsible";
import Search from "./Search/Search";
import Table from "./Table/Table";

// Scss
import "./Devices.scss";

// call AIP here
const devices = [
  {
    name: "CoreStation 01",
    id: 1,
    group: "All Devices",
    devicesTpype: "CoreStation",
    ipAdress: "1.1.1.1",
    deivceStatus: "Nomal",
    firmwareStatus: "",
  },
  {
    name: "CoreStation 02",
    id: 2,
    group: "All Devices",
    devicesTpype: "CoreStation",
    ipAdress: "1.1.1.1",
    deivceStatus: "Nomal",
    firmwareStatus: "",
  },
  {
    name: "CoreStation 03",
    id: 3,
    group: "Watting Devices",
    devicesTpype: "CoreStation",
    ipAdress: "1.1.3.1",
    deivceStatus: "Nomal",
    firmwareStatus: "",
  },
  {
    name: "CoreStation 04",
    id: 4,
    group: "USB Devices",
    devicesTpype: "CoreStation",
    ipAdress: "1.1.1.2",
    deivceStatus: "Nomal",
    firmwareStatus: "",
  },
];
// filter devices
const allDevice = devices.filter((device) => {
  return device.group === "All Devices";
});
const waittingDevice = devices.filter((device) => {
  return device.group === "Watting Devices";
});
const usbDevice = devices.filter((device) => {
  return device.group === "USB Devices";
});

export default function Devices(props) {
  let { path } = useRouteMatch();

  let [showMoreDevice, setShowMoreDevevice] = useState(0);

  const handleExpandListDevice = () => {
    showMoreDevice = showMoreDevice + 1;
    if (showMoreDevice > 2) {
      showMoreDevice = 0;
    }
    setShowMoreDevevice(showMoreDevice);
  };

  return (
    <div
      className={
        showMoreDevice === 0
          ? "devices"
          : showMoreDevice === 1
          ? "devices more-devices"
          : "devices less-devices"
      }
    >
      <div className="container-devices-tree">
        <Search handleExpandListDevice={handleExpandListDevice} />
        <div className="container-type-device">
          <Collapsible typeDevie="All devices" devices={allDevice} />
          <Collapsible
            typeDevie="Waitting devices"
            devices={waittingDevice}
            initiallyCollapsed
          />
          <Collapsible
            typeDevie="USB devices"
            devices={usbDevice}
            initiallyCollapsed
          />
        </div>
      </div>
      <div className="table-deviecs">
        <Switch>
          <Route path={`${path}/all`}>
            <Table title="All devices" devices={allDevice} />
          </Route>
          <Route path={`${path}/waitting`}>
            <Table title="Waitting devices" devices={waittingDevice} />
          </Route>
          <Route path={`${path}/usb`}>
            <Table title="USB devices" devices={usbDevice} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
