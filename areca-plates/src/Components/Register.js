import { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <>
        <p>Welcome</p>
        <div className="name-container">
          <div style={{ marginTop: "20px" }}>
            <form>
              <label htmlFor="name">Enter your Name </label>
              <br />
              <input
                type="text"
                id="name"
                className="names"
                placeholder="Enter your name"
                pattern="^[A-Z][a-z]*$"
                style={{ height: "35px", width: "250px" }}
                required
                title="Please enter a valid name (start with an uppercase letter, followed by lowercase letters)."
              />
              <br/>
              <input
                type="tel"
                id="number"
                className="names"
                placeholder="XXXXX XXXXX"
                pattern="^\d{10}$"
                style={{ height: "35px", width: "250px" }}
                required
                title="Enter 10 digit number"
              />
              <br/>
              <input className="buttons" type="submit" />
            </form>
          </div>
        </div>
      </>
    );
  }
}
