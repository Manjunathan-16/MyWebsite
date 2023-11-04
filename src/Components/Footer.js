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
  homePage = () => {
    window.location = "/";
  };
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#00008B",
            color: "white",
            width: "100%",
            fontSize: "calc(10px + 2vmin)",
          }}
        >
          <h3>Quick Links</h3>
          <div
            className="fa fa-whatsapp span"
            style={{ marginRight :"100px" }}
            onClick={() => this.Contact()}
          >
{" "}
            +91 73497 61612
          </div>
          <div
            className="name-right fa fa-linkedin-square span"
            style={{ marginRight: "100px" }}
            onClick={() => this.LinkdIn()}
          >
            {" "}
            linkdIn
          </div>
  
        <div
          className="fa fa-instagram span"
          onClick={() => this.Insta()}
        >
          {" "}
          Insta
        </div>
        <div className="span" onClick={this.homePage}>
          <h1>LOGO</h1>
        </div>
        <p>Sash Kart. All Rights reserved</p>
        </div>
      </>
    );
  }
}
