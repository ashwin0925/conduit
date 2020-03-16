import React from "react"
import Spinner from "../common/spinner"
import "../../assets/stylesheets/main.css"
import { NavLink } from "react-router-dom"


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: null,
      tags: null
    };
  }
  componentDidMount() {
    let articles = "https://conduit.productionready.io/api/articles?limit=10&offset=0";

    let tags = "https://conduit.productionready.io/api/tags";

    let articleP = fetch(articles).then(res => res.json());
    let tagsP = fetch(tags).then(res => res.json());
    Promise.all([articleP, tagsP]).then(res => {
      this.setState({ articles: res[0].articles, tags: res[1].tags })
    });
  }

  render() {
    return <div className="wrapper">
      <div className=" home_main_border">
        <h3 className="home_main_feed">Global Feed</h3>
      </div>
      {this.state.articles && this.state.articles.map(article => {
        return <>
          <div className="nav-bar flex-between wrapper">
            <div className="home_main_image">
              <img className="home_main_pic" src="https://static.productionready.io/images/smiley-cyrus.jpg" alt="profile" />
              <div>
                <NavLink to="/" className="home_main_title">{article.title}</NavLink>
              </div>

            </div>
            <ul className="flex-between">
              <h3 className="nav-bar__menu-item">1</h3>
            </ul>
          </div>
          <h1 className="home_main_name">hello</h1>
          <h2 className="home_main_subname">hello</h2>
          <div className="home_main_border"> </div>
        </>

      })
      }
    </div>
  }

}


export default Main












