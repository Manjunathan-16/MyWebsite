import React from "react";
import { Component } from "react";
import "../App.css";
//import "react-pro-sidebar/dist/css/styles.css";

export default class Navbar extends Component {
  state = {
    searchToggle: false,
    cart: false,
    name: "",
  };
  scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  scrollToContent = () => {
    const contentUsSection = document.getElementById("content");
    if (contentUsSection) {
      contentUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  contact = () => {
    window.location = "https://wa.me/7892823716";
  };
  homePage = () => {
    window.location = "/";
  };

  inputChange = (e) => {
    this.setState({ name: e.target.value });
    window.localStorage.setItem("word", e.target.value);
  };

  render() {
    return (
      <>
        <div>
          <div style={{ backgroundColor: "#de1013" }}>
            <span
              style={{ marginLeft: "950px", color: "#d4cac9" }}
              onClick={this.scrollToAboutUs}
            >
              <i
                className="fa fa-question-circle span"
                style={{ color: "#d4cac9" }}
              >
                About Us{" "}
              </i>
              &nbsp;&nbsp;|
            </span>

            <span style={{ marginLeft: "5px", color: "#d4cac9" }}>
              <i
                className="fa fa-phone span"
                style={{ marginLeft: "10px", color: "#d4cac9" }}
                onClick={() => this.contact()}
              >
                Contact us{" "}
              </i>
              &nbsp;&nbsp;|
            </span>

            <span style={{ marginLeft: "5px", color: "#d4cac9" }}>
              {" "}
              <i
                className="fa fa-folder span"
                style={{ marginLeft: "5px", color: "#d4cac9" }}
                onClick={this.scrollToContent}
              >
                {" "}
                Content
              </i>
            </span>
          </div>
          <div className="name-left span">
            <img
              onClick={() => this.homePage()}
              src="data:image/jpeg;base64,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"
            />
          </div>
        </div>
      </>
    );
  }
}
