import { Component } from "react";

export default class HomeNew extends Component {
  render() {
    return (
      <>
        <div className="App-header">
          <h2> Serving place </h2>
          <p className="formatted-paragraph">
            When it comes to building websites, content is a necessity! Without
            content, your website is like a blank piece of paper or an empty
            toolbox there is nothing to help or equip your visitors. The
            challenge is often putting together all the right content needed for
            websites. Let's take a look at a few questions that will help you
            during the web development process to figure out what content is
            important.
          </p>
          <button type="button" className="buttons">
            Enter
          </button>
          <img
            style={{ width: "100%" }}
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/wellsw0vj2/marten-bjork-F68K6buOR2s-unsplash%201.png"
            alt=""
          />
        </div>
      </>
    );
  }
}
