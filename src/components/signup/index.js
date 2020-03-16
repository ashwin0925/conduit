import React from "react"
import Header from "../common/header"
import "../../assets/stylesheets/main.css"


class Signup extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <Header />
        <h1 className="login_heading">Sign Up</h1>
        <h2 className="login_subheading">Have an account?</h2>
        <form className="login_form">
          <div>
            <input className="login_input_email" type="text" placeholder="Username" />
          </div>
          <div>
            <input className="login_input_email" type="email" placeholder="Email" />
          </div>
          <div>
            <input className="login_input_email" type="password" placeholder="Password" />
          </div>
          <button type="submit" className="login_btn">Sign in</button>
        </form>

      </>
    )
  }
}

export default Signup