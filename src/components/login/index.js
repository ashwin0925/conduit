import React from "react"
import Header from "../common/header"
import "../../assets/stylesheets/main.css"


class Login extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <Header />
        <h1 className="login_heading">Sign In</h1>
        <h2 className="login_subheading">Need an account?</h2>
        <form className="login_form">
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

export default Login