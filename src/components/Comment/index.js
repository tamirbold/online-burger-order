import React, { Component } from "react";

import "./style.css";

import { MyCoolButton } from "../MyCoolButton";

export class Comment extends Component {
  constructor() {
    super();

    this.state = {
      publisher: "",
      comment: "",
    };
  }

  typeHandler = (e) => {
    this.setState({ comment: e.target.value });
  };

  render() {
    return (
      <div>
        <span>Comment ...</span>
        <br />
        <textarea onChange={this.typeHandler}></textarea>
        <div> Publisher: {this.props.publisher}</div>
        <div className="CoolText">{this.state.comment}</div>
        <MyCoolButton
          comment={this.state.comment}
          buttonTitle="Write your comment"
          buttonName="Save"
        />
      </div>
    );
  }
}
