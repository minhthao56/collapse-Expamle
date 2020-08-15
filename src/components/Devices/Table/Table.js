import React, { useState } from "react";

import iconPaginaion from "../../../Icon/sp_button.png";
import "./Table.scss";

export default function Table(props) {
  const [isShowOption, setIsShowOption] = useState(false);
  const [valuePagination, setValuePagination] = useState(1);
  const handleShowButton = () => {
    setIsShowOption(!isShowOption);
  };

  const handlePagination = (event) => {
    const value = event.target.value;
    console.log(value);
    setValuePagination(value);
  };

  const { title, devices } = props;

  return (
    <div className="table">
      <div className="header-table">
        <h1>{title}</h1>
        <div className="pagination-search-table">
          <form className="form-pagination">
            <button
              style={{ backgroundImage: `url(${iconPaginaion})` }}
              className="bt-start-pg"
            />
            <button
              style={{ backgroundImage: `url(${iconPaginaion})` }}
              className="bt-pev-pg"
            />
            <input
              type="text"
              value={valuePagination}
              onChange={handlePagination}
            />
            <span>/1</span>
            <button
              style={{ backgroundImage: `url(${iconPaginaion})` }}
              className="bt-next-pg"
            />
            <button
              style={{ backgroundImage: `url(${iconPaginaion})` }}
              className="bt-end-pg"
            />
            <select>
              <option value="volvo">25 rows</option>
              <option value="saab">50 rows</option>
              <option value="opel">100 rows</option>
              <option value="opel">200 rows</option>
            </select>
          </form>
          <form className="form-search">
            <input type="text" />
            <button type="submit"> Go </button>
          </form>
        </div>
      </div>
      <div className="container-option-table">
        <div>
          <div className="bt-option-table">
            <button
              onClick={handleShowButton}
              style={{ backgroundImage: `url(${iconPaginaion})` }}
            >
              ...
            </button>
          </div>
          <ul className={isShowOption ? "option-table show" : "option-table"}>
            <li>Print</li>
            <li>Column Setting</li>
            <li>Delete Data & Sync Device</li>
          </ul>
        </div>
      </div>
      <table className="table-list">
        <tbody>
          <tr className="header-table-list">
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
          {devices.map((device, i) => {
            return (
              <tr key={i}>
                <td>
                  <form>
                    <input type="checkbox" />
                  </form>
                </td>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.group}</td>
                <td>{device.devicesTpype}</td>
                <td>{device.ipAdress}</td>
                <td>{device.deivceStatus}</td>
                <td>{device.firmwareStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
