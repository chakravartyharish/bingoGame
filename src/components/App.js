import React, { useState, useEffect } from "react"

import Confetti from "./Confetti"
import BallAnimation from "./BallAnimation"
import Bloc from "./Bloc"

import Balloons from "./Balloons"

export default function App() {
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

  const [state, setState] = useState({
    selected: { [12]: "Invitation" },
  })

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

  const Congratulations = () => {
    useEffect(() => {
      Balloons()
      Confetti()
      //BallAnimation()

      setInterval(() => {
        window.location.reload()
      }, 5000)
    }, [])
    return <canvas id="canvas" />
  }

  const handleClick = () =>
    setState(() => {
      const selected = { [12]: "Invitation" }
      return { selected }
    })

  const getButtonId = (e) => {
    if (e.currentTarget.id === "ID") {
      alert("You clicked on the button with player1")
    }
  }

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
        onClick={(e) => {
          handleClick(e)
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
