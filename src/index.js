// import React from "react"
// import ReactDOM from "react-dom"
// import "./styles.css"
// import App from "./components/App"
// const rootElement = document.getElementById("root")
// ReactDOM.render(<App />, rootElement)

import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./styles.css"
import App from "./components/App"
const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
