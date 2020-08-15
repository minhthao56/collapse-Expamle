import React from "react";
import "./SearchDeviceModal.scss";

export default function SearchDeviceModal(props) {
  const { hanldeLoseSearchDevice } = props;

  return (
    <div className="search-device">
      <div className="search-container">
        <h3 className="search-container__header">Search Device</h3>
        <div className="search-container__action">
          <span className="search-container__status">Found 1 device(s).</span>
          <button className="search-container__btn">Search</button>
        </div>
        <table className="table-list table-list--search">
          <tbody>
            <tr>
              <th>
                <form>
                  <input type="checkbox" />
                </form>
              </th>
              <th>Device ID</th>
              <th>Name</th>
              <th>Group</th>
              <th>Device Type</th>
              <th>IP Address</th>
              <th>Device Status</th>
              <th>Firmware Status</th>
            </tr>

            <tr>
              <td>
                <form>
                  <input type="checkbox" />
                </form>
              </td>
              <td>device.id</td>
              <td>device.name</td>
              <td>device.group</td>
              <td>device.devicesTpype</td>
              <td>device.ipAdress</td>
              <td>device.deivceStatus</td>
              <td>device.firmwareStatus</td>
            </tr>
          </tbody>
        </table>
        <div className="search-handle">
          <button className="btn btn-set">Set IP</button>
          <button className="btn btn-add">Add</button>
          <button
            className="btn btn-close"
            onClick={() => hanldeLoseSearchDevice()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
