import React from "react";
import "./ReviewStyles.css";
import ReviewStats from "./ReviewStats.jsx";

function BarGroup({data, barHeight}) {
  let barPadding = 2
  let barColour = '#525252'
  let widthScale = d => d * 10

  let width = widthScale(data.value)
  let yMid = barHeight * 0.5

  return <g className="bar-group">
    <text className="name-label" x="-6" y={yMid} alignmentBaseline="middle" >{data.name}</text>
    <rect y={barPadding * 0.5} width={width} height={barHeight - barPadding} fill={barColour} />
    <text className="value-label" x={width- 8} y={yMid} alignmentBaseline="middle" >{data.value}</text>
  </g>
}

export default BarGroup;