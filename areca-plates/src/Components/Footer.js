import React from "react";
import { Component } from "react";
import "../App.css";

import "font-awesome/css/font-awesome.min.css";

export default class Footer extends Component {
  Contact = () => {
    window.location = "https://wa.me/7892823716";
  };
  LinkdIn = () => {
    window.location = "https://www.linkedin.com/";
  };
  Insta = () => {
    window.location = "https://www.instagram.com/";
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#de1013",
            color: "white",
            marginTop: "20px",
          }}
        >
          <div className="name-container">
            <i
              className="name-left line fa fa-phone"
              style={{ marginLeft: "100px" }}
            >
              {" "}
              Contact Us{" "}
            </i>
            <i className="name-right line" style={{ marginRight: "100px" }}>
              Social media details{" "}
            </i>
          </div>
          <div className="name-container">
            <div
              className="name-left span"
              style={{ marginLeft: "100px" }}
              onClick={() => this.Contact()}
            >
              Santhosh Mobile number :{" "}
            </div>
            <div
              className="name-right span"
              style={{ marginRight: "100px" }}
              onClick={() => this.LinkdIn()}
            >
              linkdIn{" "}
            </div>
          </div>
          <div className="name-container">
            <div className="name-left span" style={{ marginLeft: "100px" }}>
              Madhesh Mobile number :
            </div>
            <div
              className="name-right span"
              style={{ marginRight: "100px" }}
              onClick={() => this.Insta()}
            >
              Insta
            </div>
          </div>
        </div>
      </>
    );
  }
}
