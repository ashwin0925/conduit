import React, { Component } from "react";
import Header from "../common/header.js"
import "../../assets/stylesheets/main.css"
import Spinner from "../common/spinner.js";
import Hero from "../home/hero"
import { Link, NavLink } from "react-router-dom"


class Tag extends React.Component {
  state = {
    articles: null
  }
  componentDidMount() {
    fetch(`https://conduit.productionready.io/api/articles?tag=${this.props.match.params.name}&limit=10&offset=0`).then(res => res.json()).then(({ articles }) => {
      this.setState({ articles })
    })
  }
  render() {
    return this.state.articles ? (
      <div>
        <Hero />
        <div>
          {this.state.articles && this.state.articles.map(article => {
            return <div className="wrapper">
              <div className="home_main_flex">
                <div className="flex-item">
                  <div className=" home_main_border">
                    <h3 className="home_main_feed tags_heading">#tags</h3>
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
              </div>
            </div>
          }
          )
          }
        </div>
      </div>
    ) : (
        <Spinner />
      )
  };
}

export default Tag;