import React, { useRef } from "react"
import { withRouter } from "react-router-dom"
import "../../assets/stylesheets/main.css"


const Login = (props) => {
  let email = React.useRef(null);
  let password = React.useRef(null);

  function handleLogin(e) {
    e.preventDefault();

    fetch("https://conduit.productionready.io/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email: email.current.value,
          password: password.current.value
        }
      })

    }).then(res => res.json())
      .then(userInfo => {
        if (userInfo.errors) {
          console.log(userInfo, "in err");
        } else {
          props.history.push("/");
          props.updateIsLoggedIn(true);
          localStorage.setItem('conduit-token', userInfo.user.token)
        }
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <h1 className="login_heading">Sign In</h1>
      <h2 className="login_subheading">Need an account?</h2>
      <form className="login_form">
        <div>
          <input className="login_input_email" type="email" placeholder="Email" ref={email} />
        </div>
        <div>
          <input className="login_input_email" type="password" placeholder="Password" ref={password} />
        </div>
        <button type="submit" className="login_btn" onClick={(e) => handleLogin(e)}>Sign in</button>
      </form>

    </>
  )
}

export default withRouter(Login)