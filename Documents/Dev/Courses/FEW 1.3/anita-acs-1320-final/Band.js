import React from "react";
import Like from "./Like.js";
import "./Band.css";

function Band(props) {
  const { name, formed, origin, fans, split, style } = props;
  if(split === "-") {
    return (
      <div className="Band">
        <h1>{name}</h1>
        <div>Formed: {formed}</div>
        <div>{origin}</div>
        <div>Fans: {fans}</div>
        <div>Split: {split}</div>
        <div>Style: {style}</div>
        <Like />
      </div>
    )
  } else {
  return (
    <div className="Band">
      <h1>{name}</h1>
      <div>Formed: {formed}</div>
      <div>{origin}</div>
      <div>Fans: {fans}</div>
      <div>Split: {split}</div>
      <div>Style: {style}</div>
      </div>
    )
  }
}

export default Band;