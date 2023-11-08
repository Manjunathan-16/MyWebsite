import React from "react";
import { Component } from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
import img1 from '../image.jpg';

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
            backgroundColor: "#383b3d",
            color: "white",
            width: "100%",
            fontSize: "calc(10px + 2vmin)",
            flexDirection: "column",
            display: "flex",
          }}
        >
          <h3>Quick Links</h3>
          <div className="name-container">
          <div
            className="fa fa-whatsapp span"
            style={{ marginLeft: "150px" }}
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
          <div className="fa fa-instagram span" onClick={() => this.Insta()}   style={{ marginRight: "150px" }}>
            {" "}
            Insta
          </div>
          </div>
          <div className="span" onClick={this.homePage}>
          <img
            style={{height:"100px" , width:"100px" , padding:"20px"}}
            src={img1}
            alt=""
          />
          </div>
          <p>Sash Kart. All Rights reserved</p>
        </div>
      </>
    );
  }
}
