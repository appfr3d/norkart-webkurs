import React from "react";
import "../index.css";

const LayerSelect = {
  borderRadius: "5px",
  marginTop: "2px",
  marginBottom: "2px",
  width: "100px",
};

const LabelStyle = {
  fontSize: "12px",
  margin: "0px",
  padding: "0px",
  color: "white",
};

const Header = ({ mapStyle, setMapStyle }) => {
  return (
    <div className="LayerShift">
      <div style={LabelStyle}>Change Style</div>
      <select
        name="mapStyle"
        style={LayerSelect}
        onChange={(event) => {
          setMapStyle(event.target.value);
        }}
        value={mapStyle}
      >
        <option value="streets-v11">Streets</option>
        <option value="light-v10">Light</option>
        <option value="dark-v10">Dark</option>
        <option value="outdoors-v11">Outdoors</option>
        <option value="satellite-v9">Satellite</option>
      </select>
    </div>
  );
};

export default Header;
