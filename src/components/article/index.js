import React from "react"
import Header from "../common/header.js"
import "../../assets/stylesheets/main.css"
import Spinner from "../common/spinner"


class Article extends React.Component {
  state = {
    articleInfo: null
  }

  componentDidMount() {
    let { slug } = this.props.match.params || "";
    fetch(`https://conduit.productionready.io/api/articles/${slug}`).then(res => res.json()).then(({ article }) => {
      console.log(article, "indexpage")
      this.setState({ articleInfo: article })
    });
  }
  render() {
    return this.state.articleInfo ? (
      <>
        <Header />
        {/* {this.state.articleInfo && this.state.articleInfo.map(article => {
          return <>
            <h1>{article.title}</h1>
          </>
        })} */}
        <div className="article_page">
          <h1 className="article_title wrapper">{this.state.articleInfo && this.state.articleInfo.title}</h1>

          <div className="nav-bar flex-between wrapper">
            <div className="home_main_image">
              <img className="home_main_pic" src={this.state.articleInfo && this.state.articleInfo.author.image ? this.state.articleInfo.author.image : "https://static.productionready.io/images/smiley-cyrus.jpg"} alt="profile" />
              <div>
                <h2 to="/" className="home_main_title index_title">{this.state.articleInfo && this.state.articleInfo.author.username}</h2>
                <h3 className="home_main_read-more">{new Date(this.state.articleInfo && this.state.articleInfo.createdAt).toDateString()}</h3>
              </div>


            </div>
          </div>
        </div>
        <h2 className="article_description wrapper">{this.state.articleInfo && this.state.articleInfo.description}</h2>

      </>
    ) : (
        <Spinner />
      )
  };
}


export default Article