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
  AboutUs = () => {
    window.location = "/AboutUs";
  };
  Registers = () => {
    window.location = "/Register";
  };
  Products = () => {
    window.location = "/Product";
  };

  inputChange = (e) => {
    this.setState({ name: e.target.value });
    window.localStorage.setItem("word", e.target.value);
  };

  render() {
    return (
      <>
        <div>
          <div
            style={{
              backgroundColor: "rgb(221, 208, 200)",
              fontSize: "calc(10px + 2vmin)",
            }}
          >
            <div className="name-container">
              <div className="name-left span" onClick={this.homePage}>
                <h1>LOGO</h1>
              </div>
              <div className="name-right" style={{ marginTop: "50px" }}>
                <span
                  style={{ marginLeft: "30px", color: "black" }}
                  onClick={this.Products}
                >
                  <i className="fa fa-tags span" style={{ color: "black" }}>
                    {" "}
                    Product
                  </i>
                </span>

                <span
                  style={{ marginLeft: "30px", color: "black" }}
                  onClick={this.AboutUs}
                >
                  <i className="span" style={{ color: "black" }}>
                    {" "}
                    About Us
                  </i>
                </span>

                <span style={{ marginLeft: "30px", color: "black" }}>
                  <i
                    className="fa fa-phone span"
                    style={{ marginLeft: "5px", color: "black" }}
                    onClick={() => this.contact()}
                  >
                    {" "}
                    Contact us
                  </i>
                </span>

                <span style={{ marginLeft: "30px", color: "black" }}>
                  {" "}
                  <i
                    className="fa fa-folder span"
                    style={{ marginLeft: "5px", color: "black" }}
                    onClick={this.Registers}
                  >
                    {" "}
                    Register
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
