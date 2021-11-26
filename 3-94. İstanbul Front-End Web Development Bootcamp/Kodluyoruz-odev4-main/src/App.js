import React, { Component } from "react";
import "./App.css";
import AddComment from "./components/addComment/AddComment";
import Comment from "./components/comment/Comment";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      inputComment: "",
      starRating: 0,
      error: "",
    };
  }

  addComFunc = () => {
    console.log(this.state.inputComment.length);
    if (
      this.state.inputComment &&
      this.state.starRating &&
      this.state.inputComment.length > 2
    ) {
      this.setState((prevState) => ({
        comments: [
          ...prevState.comments,
          {
            comment: this.state.inputComment,
            starRating: this.state.starRating,
          },
        ],
      }));
      this.setState({
        inputComment: "",
        starRating: 0,
        error: "",
      });
    } else if (!this.state.starRating) {
      this.setState({
        error: "Yorum yapmadan önce oy vermelisiniz.",
      });
    } else if (!this.state.inputComment) {
      this.setState({
        error: "Yorum yazınız.",
      });
    } else if (this.state.inputComment.length < 3) {
      console.log("en az 3 karakterli olmalı");
      this.setState({
        error: "Yorum en az 3 karakterli olmalıdır.",
      });
    } else {
      this.setState({
        error: "Yıldız veriniz",
      });
    }
  };

  onInputChange = (e) => {
    this.setState({
      inputComment: e.target.value,
    });
  };

  ratingChanged = (newRating) => {
    this.setState({
      starRating: newRating,
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Yorumlar</h2>
        <Comment comments={this?.state?.comments} />
        <AddComment
          onClickFunc={this.addComFunc}
          inputChange={this.onInputChange}
          ratingChanged={this.ratingChanged}
          value={this.state.inputComment}
          starRating={this.state.starRating}
        />
        {this.state.error && <p className="error">{this.state.error}</p>}
      </div>
    );
  }
}

export default App;
