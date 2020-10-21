import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import MapboxGLMap from "./components/MapboxGLMap";

const styles = {
  overflow: "hidden",
};

function App() {
  const [mapStyle, setMapStyle] = useState("streets-v11");

  return (
    <div style={styles}>
      <Header mapStyle={mapStyle} setMapStyle={setMapStyle} />
      <MapboxGLMap mapStyle={mapStyle} />
    </div>
  );
}

export default App;
