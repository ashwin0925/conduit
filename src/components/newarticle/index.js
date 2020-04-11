import React from "react"
import "../../assets/stylesheets/main.css"



const Newpost = (props) => {
  let title = React.createRef(null);
  let description = React.createRef(null);
  let articleBody = React.createRef(null);
  let tagList = React.createRef(null);
  function NewArticle(e) {
    e.preventDefault();
    fetch("https://conduit.productionready.io/api/articles", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Token ${localStorage["conduit-token"]}`
      },
      body: JSON.stringify({
        article: {
          title: title.current.value,
          body: articleBody.current.value,
          tagList: [],
          description: description.current.value
        }
      })

    }).then((res) => res.json())
      .then((article) => {
        if (article.errors) {
          console.log(article, "in error");
        } else {
          props.history.push('/');
          console.log(article);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form className="login_form" onSubmit={(e) => NewArticle(e)}>
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
        <button type="submit" className="login_btn newpost_btn" >Publish Article</button>
      </form>

    </>
  )
}

export default Newpost