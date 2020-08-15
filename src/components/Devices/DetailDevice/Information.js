import React, { useState } from "react";
import { Row, Col } from "antd";
import moment from "moment";

import DataTimeZone from "./timeZone.json";

export default function Information() {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [isSynchronization, setIsSynchronization] = useState(true);

  // Handle Time and Date
  const handleChangeTime = (e) => {
    const value = e.target.value;
    setTime(value);
  };
  const handleChangeDate = (e) => {
    const value = e.target.value;
    setDate(value);
  };
  // Time now
  let timeNow = moment(time).format("HH:mm");
  let dateNow = moment(date).format("yyyy-MM-DD");

  //hanlde Synchronization Time sever
  const hanldeSynchronizationTime = (e) => {
    const value = e.target.checked;
    setIsSynchronization(value);
  };

  // hanlde TimeZone
  const hanldeTimeZone = (e) => {
    const value = e.target.value;
    console.log(value);
  };

  return (
    <div className="device-info">
      <div className="device-info__header">Information</div>
      <Row className="device-info__row">
        <Col span={12} className="device-info__col">
          <div className="device-info__content">
            <span className="device-info__lable">Name</span>
            <input type="text" className="device-info__input" />
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Device ID</span>
            <input type="text" className="device-info__input" />
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Firmware Version</span>
            <div className="device-info__firmware-up">
              <input
                type="text"
                className="device-info__input device-info__input--up-firmware"
              />
              <button className="bt-info bt-info--firmware">
                Firmware Upgrade
              </button>
            </div>
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Hardware Verstion</span>
            <input type="text" className="device-info__input" />
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Lock</span>
            <input type="text" className="device-info__input" />
          </div>
          <label>
            <input
              type="checkbox"
              checked={isSynchronization}
              onChange={hanldeSynchronizationTime}
            />
            Time Synchronization with Server
          </label>
        </Col>
        <Col span={12} className="device-info__col">
          <div className="device-info__content">
            <span className="device-info__lable">Group</span>
            <select
              name="group"
              className="device-info__input device-info__input--select"
            >
              <option>All Device</option>
              <option>Waitting Deivce</option>
              <option>USB Device</option>
            </select>
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Device Type</span>
            <input type="text" className="device-info__input" />
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Product Name</span>
            <input type="text" className="device-info__input" />
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Kernel Version</span>
            <input type="text" className="device-info__input" />
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Restore to default</span>
            <div className="device-info__restore">
              <button className="bt-info bt-info--restore">All</button>
              <button className="bt-info bt-info--restore">
                Without Network
              </button>
            </div>
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Time zone</span>
            <select
              name="timeZone"
              className="device-info__input device-info__input--select"
              onChange={hanldeTimeZone}
            >
              {DataTimeZone.map((timeZone, i) => {
                return (
                  <option value={timeZone.value} key={i}>
                    {timeZone.text}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="device-info__content">
            <span className="device-info__lable">Daylight Saving Time</span>
            <select
              name="group"
              className="device-info__input device-info__input--select"
            >
              <option></option>
            </select>
          </div>
        </Col>
      </Row>
      <div className="time-select">
        <span className="time-select__title">Systerm</span>
        <div className="time-select__action">
          <div>
            <span className="time-select__sub">Display Date</span>
            <input
              type="date"
              value={dateNow}
              onChange={handleChangeDate}
              className={
                isSynchronization
                  ? "time-select__input time-select__input--disabled"
                  : "time-select__input"
              }
              disabled={isSynchronization ? true : false}
            />
            <input
              type="time"
              value={timeNow === "Invalid date" ? time : timeNow}
              onChange={handleChangeTime}
              className={
                isSynchronization
                  ? "time-select__input time-select__input--disabled"
                  : "time-select__input"
              }
              disabled={isSynchronization ? true : false}
            />
          </div>
          <div>
            <button className="bt-info">Get time</button>
            <button
              className={
                isSynchronization ? "bt-info bt-info--disabled" : "bt-info"
              }
              disabled={isSynchronization ? true : false}
            >
              Set time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
