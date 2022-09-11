import React from "react"

export default function Bloc(props) {
  return (
    <div
      className={`bloc ${props.isClicked ? "blocClick" : ""}`}
      onClick={props.onToggle}
    >
      {props.children}
    </div>
  )
}
