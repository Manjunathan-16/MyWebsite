import { Component } from "react";
import Navbar from './NavBar';
import Footer from "./Footer";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: "",
      submitted: false,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ submitted: true });
  };
  render() {
    const { submitted } = this.state;
    return (
      <>
        <Navbar/>
        <div className="name-container">
          <div style={{ marginTop: "20px" }}>
            <form onSubmit={this.handleSubmit}>
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
                title="Please enter a valid name."
                onChange={this.handleInputChange}
              />
              <br />
              <input
                type="tel"
                id="number"
                className="names"
                placeholder="XXXXX XXXXX"
                pattern="^\d{10}$"
                style={{ height: "35px", width: "250px" }}
                required
                title="Enter 10 digit number"
                onChange={this.handleInputChange}
              />
              <br />
              <input className="buttons" type="submit" />
            </form>
            {submitted &&
              <div>Successfully Submitted</div>
            }
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}
