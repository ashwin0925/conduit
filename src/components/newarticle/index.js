import React from "react"

class Newpost extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <form className="login_form">
          <div>
            <input className="login_input_email newpost_title" type="text" placeholder="Article Title" />
          </div>
          <div>
            <input className="login_input_email newpost_about" type="text" placeholder="What's this article about?" />
          </div>
          <div>
            <textarea className="newpost_textarea" placeholder="Write your article (in markdown)" />
          </div>
          <div>
            <input className="login_input_email newpost_about" type="text" placeholder="Enter tags" />
          </div>
          <button type="submit" className="login_btn newpost_btn">Publish Article</button>
        </form>

      </>
    )
  }
}

export default Newpost