import { Component } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      value:"",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const handleFormSubmit = () => {
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const emailContent = `
      Name: ${name} \n
      Phone Number: ${phone} \n
      Email: ${email} \n
      Message: ${message}`;

      // Use the "mailto" link to open the user's default email client.
      window.location.href = `mailto:manja21ms@gmail.com?subject=Details of registered customer &body=${emailContent}`;
    };
    return (
      <>
        <Navbar />
        <div className="App-header">
        <div className="forms">
        <h2 style={{color:"white"}}>Please Fill out the Details and submit</h2>
            <form>
              <br />
              <input
                type="text"
                id="name"
                className="names"
                placeholder="Name"
                style={{ height: "50px", width: "500px" }}
                required
                title="Please enter your name."
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <input
                type="tel"
                id="phone"
                className="names"
                placeholder="Phone No"
                style={{ height: "50px", width: "500px" }}
                required
                title="Please enter  your phone number"
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <input
                type="email"
                id="email"
                className="names"
                placeholder="Email"
                style={{ height: "50px", width: "500px" }}
                required
                title="Please enter your email id"
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <input 
                type="text"
                id="message"
                className="names"
                placeholder="Provide descritpion about the product you required"
                style={{ height: "135px", width: "500px"}}
                required
                title="Please provide a detail description about the product you needed"
                onChange={this.handleInputChange}
              />
              <br />
              <br />
              <button
                type="button"
                className="buttons"
                onClick={handleFormSubmit}
                style={{
                  height: "50px",
                  width: "500px",
                  backgroundColor: "#e2850a",
                  marginBottom :"30px"
                }}
              >
                Submit
              </button>
            </form>
          </div>
          </div>
        <Footer />
      </>
    );
  }
}
