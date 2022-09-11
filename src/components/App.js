import React, { useState, useEffect } from "react"

import Confetti from "./Confetti"
import BallAnimation from "./BallAnimation"
import Bloc from "./Bloc"
import Balloons from "./Balloons"

export default function App() {
  // array for generating simple bingo 5x5 grid
  const data = [
    "Ball Drop",
    "Balloons",
    "Calendar",
    "Champagne",
    "Clock",
    "Countdown",
    "Dancing",
    "December 31st",
    "Fireworks",
    "Games",
    "Hat",
    "Invitation",
    "January 1st",
    "Midnight",
    "Music",
    "Love",
    "New Year's Eve",
    "Parade",
    "Resolution",
    "Auld Lang Syne",
    "Sparklers",
    "Streamers",
    "Times Square",
    "Toast",
    "Tradition",
  ]

  // state for the bingo grid and the selected items in the grid
  // passed initial state [12]: "Invitation" to create a free slot
  //which is ""on"" in the middle of the grid
  const [state, setState] = useState({
    selected: { [12]: "Invitation" },
  })

  // state for the animation to be displayed on the grid when a user clicks on a square
  // passed initial state "": no animation displayed on the grid when the page loads
  const checkForBingo = (selected) => {
    const arr = [0, 1, 2, 3, 4]
    const myVar = undefined

    return (
      arr.every(function (idx) {
        return selected[idx * 5 + idx]
      }) ||
      arr.find(function (x) {
        return arr.every(function (y) {
          return selected[x * 5 + y]
        })
      }) !== myVar ||
      arr.find(
        (idx) =>
          selected[idx * 5 - 3] &&
          selected[idx * 5 + 1] &&
          selected[idx * 5 + 3] &&
          selected[idx * 5 + 7]
      ) !== myVar ||
      arr.find((y) => arr.every((x) => selected[x * 5 + y])) !== myVar ||
      arr.every(function (idx) {
        return selected[idx * 5 + 4 - idx]
      })
    )
  }

  // function to handle the click on the grid items and update the state accordingly
  // if the item is already selected, it will be unselected and vice versa (toggle)
  // if the item is selected, it will be added to the state.selected object
  // if the item is unselected, it will be removed from the state.selected object
  // the state.selected object is used to check for bingo and to display the selected items in the grid

  const Toggle = (id) => {
    setState((state) => {
      const selected = {
        ...state.selected,
        [id]: !state.selected[id],
      }

      const Bingo = checkForBingo(selected)
      return { Bingo, selected }
    })
  }

  // function to return the confetti and balloons animation if the bingo is true (checkForBingo) and the state.
  //Bingo is true (set in the Toggle function)

  const Congratulations = () => {
    useEffect(() => {
      //API to create balloons canvas
      Balloons()

      //to create confetti falling animation effect
      Confetti()
      //BallAnimation()
      //animations will stop after 5 seconds
      setInterval(() => {
        window.location.reload()
      }, 5000)
    })
    return <canvas id="canvas" />
  }

  // function to clear the grid and the state
  //when the user clicks on the "Clear" button at the bottom of the page
  const handleClick = () =>
    setState(() => {
      const selected = { [12]: "Invitation" }
      return { selected }
    })

  //function to select a player 1
  const getButtonId = (e) => {
    if (e.currentTarget.id === "ID") {
      alert("You clicked on the button with player1")
    }
  }

  //function to select a  player 2
  const getButtonId2 = (e) => {
    if (e.currentTarget.id === "ID") {
      alert("You clicked on the button with player2")
    }
  }

  return (
    <>
      <div className="blocOuterDiv">
        <h1 style={{ color: "red", fontFamily: "cursive" }}>
          Bingo Code Challenge - Front End - SensoryMinds
        </h1>

        <div className="blocContainer">
          {Object.keys(data).map((id) => (
            <Bloc
              key={id}
              id={id}
              onToggle={() => Toggle(id)}
              isClicked={!state.selected[id]}
            >
              {data[id]}
            </Bloc>
          ))}
        </div>

        {state.Bingo ? <Congratulations /> : null}
      </div>
      {"    "}
      <button
        onClick={() => {
          handleClick()
        }}
        className="card"
        id="cleanCard"
      >
        ClearBoard
      </button>
      <button
        id="ID"
        onClick={(e) => {
          getButtonId(e)
        }}
        className="Select"
      >
        P1
      </button>
      <button
        onClick={(e) => {
          getButtonId2(e)
        }}
        className="Select"
        id="ID"
      >
        {" "}
        P2
      </button>
    </>
  )
}
