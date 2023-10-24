import React from "react";
import { Component } from "react";
import "../App.css";
export default class Content extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "#C2B280",
            color: "black",
            marginTop: "20px",
          }}
        >
          <div id="content" style={{ padding: "20px" }}>
            <h2>Content</h2>
            <p>
              Holds liquid items for 4 hours without leakage. Good for hot, wet
              and cold food items. Food plates thrown after eating will be
              naturally degraded within 60 days of time like any plant matter.
              Manufacturing waste of Areca sheaths will be used for vermin
              compost, dry fodder for animals, bio-fuel bricks.
            </p>
          </div>
        </div>
      </>
    );
  }
}
