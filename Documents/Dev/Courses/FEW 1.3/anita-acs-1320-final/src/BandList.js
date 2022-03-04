import React from "react";
import data from "./metal.json";
import Band from "./Band.js";
import "./BandList.css";

function BandList() {
  const spaces = data.map(
    ({ band_name, formed, origin, fans, split, style }) => {
      fans = fans * 1000;
      return (
        <Band
          name={band_name}
          formed={formed}
          origin={origin}
          fans={fans.toLocaleString("en")}
          split={split}
          style={style}
        />
      );
    }
  );

  return <div className="BandList">{spaces}</div>;
}

export default BandList;