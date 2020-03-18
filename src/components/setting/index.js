import React from "react"


class Setting extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <h1 className="login_heading">Your Settings</h1>
        <form className="login_form">

          <div>
            <input className="login_input_email" type="text" placeholder="ashwin" />
          </div>

          <div>
            <input className="login_input_email" type="text" placeholder="ashwin" />
          </div>
          <div>
            <textarea />
          </div>
          <div>
            <input className="login_input_email" type="text" placeholder="ash@gmail.com" />
          </div>
          <div>
            <input className="login_input_email" type="text" placeholder="......." />
          </div>
          <button type="submit" className="login_btn">Update Setting</button>
        </form>
        <button type="submit" className="login_btn">Logout</button>

      </>
    )
  }
}

export default Setting