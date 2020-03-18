import React from "react"


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
          <button className="profile_btn">Edit Profile Settings</button>
        </div>
        <div className="wrapper wrapper_profile">
          <small className="profile_articles">My Articles</small>
          <small className="profile_articles">Favorited Articles</small>
        </div>
        <div className="setting_border profile_border">

        </div>

      </>
    )
  }
}

export default Profile