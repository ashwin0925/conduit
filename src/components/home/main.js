import React from "react"
import Spinner from "../common/spinner"
import "../../assets/stylesheets/main.css"
import { Link, NavLink } from "react-router-dom"


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
    console.log(this.state.articles && this.state.articles)
    return <div className="wrapper">
      <div className=" home_main_border">
        <h3 className="home_main_feed">Global Feed</h3>
      </div>
      {this.state.articles && this.state.articles.map(article => {
        return <>
          <div className="nav-bar flex-between wrapper">
            <div className="home_main_image">
              <img className="home_main_pic" src={article.author.image ? article.author.image : "https://static.productionready.io/images/smiley-cyrus.jpg"} alt="profile" />
              <div>
                <NavLink to="/" className="home_main_title">{article.author.username}</NavLink>
                <h2 className="home_main_read-more">{new Date(article.createdAt).toDateString()}</h2>
              </div>

            </div>
            <ul className="flex-between">
              <div className="home_main_fav">
                <h3 className="nav-bar__menu-item home_main_heart">
                  <a className="home_heart"><i class="fas fa-heart"></i></a>{article.favoritesCount}</h3>
              </div>
            </ul>
          </div>
          <Link to={`/article/${article.slug}`}>
            <h1 className="home_main_name">{article.title}</h1>
            <h2 className="home_main_subname">{article.description}</h2>
            <h2 className="home_main_read-more">Read More...</h2>  </Link>
          <div className="home_main_border border_2"> </div>
        </>

      })
      }
    </div>
  }

}


export default Main





// return this.state.articles ? (
//   <>
//     <h2>Articles</h2>
//     <ul>{
//       this.state.articles && this.state.articles.map(article => {
//         return <li>{article.title}</li>
//       })
//     }
//     </ul>
//     <h2>Tags</h2>
//     <ul>{
//       this.state.tags && this.state.tags.map(tag => {
//         return <li>{tag}</li>
//       })
//     }
//     </ul>
//   </>
// ) : (
//     <Spinner />
//   )







