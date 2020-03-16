import React from "react"
import Hero from "./hero"
import Main from "./main"
import "../../assets/stylesheets/main.css"


class Home extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Hero />
        <Main />
      </div>
    )
  }
}

export default Home