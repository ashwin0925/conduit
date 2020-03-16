import React from "react"
import Header from "../common/header"
import "../../assets/stylesheets/main.css"


class Hero extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Header />
        <div className="home_hero">
          <h1 className="home_heading">conduit</h1>
          <h2 className="home_subheading">A place to share your knowledge.</h2>
        </div>

      </div>
    )
  }
}

export default Hero