import React, { useState } from "react";
import "./Search.scss";

import ModalSearchDevice from "../ModalDevice/SearchDeviceModal";
import AIPSearchDevice from "../../../api/AIPSearchDevice";

// Icon
import iconSearch from "../../../Icon/icon_dv_searchdevice.png";
import iconSearchAdv from "../../../Icon/icon_dv_advancedsearch.png";

export default function Search(props) {
  const { handleExpandListDevice } = props;
  const [isShowSearchDevice, setIsShowSearchDevice] = useState(false);

  const handleSearchDeivce = () => {
    setIsShowSearchDevice(true);
    AIPSearchDevice.getSearch("search").then((res) => console.log(res));
  };
  const hanldeLoseSearchDevice = () => {
    setIsShowSearchDevice(false);
  };

  return (
    <div>
      {isShowSearchDevice && (
        <ModalSearchDevice hanldeLoseSearchDevice={hanldeLoseSearchDevice} />
      )}
      <div className="search-devives">
        <button onClick={handleSearchDeivce}>
          <img src={iconSearch} alt="NoImage" />
          SAERCH DEVICES
        </button>
        <button>
          <img src={iconSearchAdv} alt="NoImage" /> ADVANCED SEARCH
        </button>
      </div>
      <div
        className="bt-expand-device"
        onClick={() => handleExpandListDevice()}
      />
    </div>
  );
}
