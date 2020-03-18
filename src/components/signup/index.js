import React from "react"
import "../../assets/stylesheets/main.css"


const Signup = () => {
  let username = React.useRef(null);
  let email = React.useRef(null);
  let password = React.useRef(null);

  function handleSignup(e) {
    e.preventDefault();
    fetch("https://conduit.productionready.io/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value
        }
      })
    }).then(res => res.json()).then(userData => console.log(userData))
  }

  return (
    <>
      <h1 className="login_heading">Sign Up</h1>
      <h2 className="login_subheading">Have an account?</h2>
      <form className="login_form">
        <div>
          <input className="login_input_email" type="text" placeholder="Username" ref={username} />
        </div>
        <div>
          <input className="login_input_email" type="email" placeholder="Email" ref={email} />
        </div>
        <div>
          <input className="login_input_email" type="password" placeholder="Password" ref={password} />
        </div>
        <button type="submit" className="login_btn" onClick={(e) => handleSignup(e)}>Sign in</button>
      </form>

    </>
  )
}


export default Signup