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
            <input className="login_input_email setting_url" type="text" placeholder="URL of profile picture" />
          </div>

          <div>
            <input className="login_input_email setting_username" type="text" placeholder="ashwin" />
          </div>
          <div>
            <textarea className="newpost_textarea setting_textarea" placeholder="Short bio about you" />
          </div>
          <div>
            <input className="login_input_email setting_username" type="text" placeholder="ash@gmail.com" />
          </div>
          <div>
            <input className="login_input_email setting_username" type="text" placeholder="......." />
          </div>
          <button type="submit" className="login_btn setting_btn">Update Settings</button>
        </form>
        <div className="setting_border">
        </div>

        <button type="submit" className="login_btn setting_logout_btn">or click here to logout.</button>

      </>
    )
  }
}

export default Setting