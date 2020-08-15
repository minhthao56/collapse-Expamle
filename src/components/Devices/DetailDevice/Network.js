import React from "react";

export default function Network() {
  return (
    <div className="device-info">
      <div className="device-info__header">Network</div>
      <div className="device-network">
        <div className="device-network__TCP/IP">TCP/IP</div>
        <div className="device-network__server">Server</div>
        <div className="device-network__serial">serial</div>
      </div>
    </div>
  );
}
