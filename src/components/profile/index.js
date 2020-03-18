import React from "react"
import Hero from "../home/hero"


class Profile extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <>
        <div className="home_hero profile_hero">
          <img className="profile_image" src="https://static.productionready.io/images/smiley-cyrus.jpg" />
          <h2 className="home_subheading profile_name">ashwin</h2>
          <button>Edit Profile</button>
        </div>
        <small className="profile_articles">My Articles</small>
        <small>Favorited Articles</small>

      </>
    )
  }
}

export default Profile