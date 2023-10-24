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
              className="name-left fa fa-whatsapp span"
              style={{ marginLeft: "100px" }}
              onClick={() => this.Contact()}
            >
              {" "}+91 73497 61612
            </div>
            <div
              className="name-right fa fa-linkedin-square span"
              style={{ marginRight: "100px" }}
              onClick={() => this.LinkdIn()}
            >
              {" "}linkdIn
            </div>
          </div>
            <div
              className="name-right fa fa-instagram span"
              style={{ marginLeft: "1000px" }}
              onClick={() => this.Insta()}
            >
              {" "}Insta
            </div>
          </div>
      </>
    );
  }
}
