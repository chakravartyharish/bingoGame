import React from "react"

export default function Bloc(props) {
  // state for the selected item to be displayed on the grid when a user clicks on a square
  return (
    <div
      className={`bloc ${props.isClicked ? "blocClick" : ""}`}
      onClick={props.onToggle}
    >
      {props.children}
    </div>
  )
}
