import React from "react";
import { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#FFC0CB",
          color: "black",
          marginTop: "20px",
        }}
      >
        <div id="about-us" style={{ padding: "20px" }}>
          <h2>About Us</h2>
          <p>
            Welcome to our company. We are dedicated to providing high-quality
            services and products to our customers. Learn more about our history
            and mission.
          </p>
        </div>
      </div>
    );
  }
}
