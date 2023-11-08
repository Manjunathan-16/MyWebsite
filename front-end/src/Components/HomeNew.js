import { Component } from "react";
import '../App.css';
export default class HomeNew extends Component {
  render() {
    return (
      <>
        <div className="App-header">
          <h2>
            {" "}
            Welcome to Sash Kart - Your Premier Source for Stylish Window
            Enhancements
          </h2>
          <p className="formatted-paragraph">
            At Sash Kart, we're dedicated to bringing you a world of window
            elegance. Whether you're looking to elevate the aesthetics of your
            home, improve energy efficiency, or enhance the overall
            functionality of your windows, we have you covered. Explore our wide
            range of premium sash window solutions and make your windows a focal
            point of beauty and functionality.
          </p>
          <img
            style={{padding:"20px" }}
            src="https://ci.carmel.ca.us/sites/main/files/imagecache/lightbox/main-images/camera_lense_0.jpeg"   
            alt=""
          />
        </div>
      </>
    );
  }
}
