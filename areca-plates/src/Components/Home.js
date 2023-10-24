import React from "react";
import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import Content from "./Content";
import AboutUs from "./AboutUs";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://www.ibrahima-ndaw.com/static/071d617e5aa4518d315ea2a4777faafe/6db29/cover.png",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6EV0JUTIoEeaDOS1kAsugZHBHMTF7VSDJw&usqp=CAU",
  },
  {
    url: "",
  },
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          style={{
            backgroundColor: "#009688",
            color: "white",
            marginTop: "20px",
          }}
        >
          <h1>Areca Plates</h1>
          <div className="name-container">
            <div className="name-left">
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://5.imimg.com/data5/VL/RE/MY-10519833/eco-friendly-areca-plates-500x500.jpg"
                    alt=""
                  />
                  <h4 className="App">Plate</h4>
                </div>
              </div>
            </div>
            <div className="name-right">
              <div className="card">
                <div className="card-body bg-image hover-zoom">
                  <img
                    style={{ width: "100%" }}
                    src="https://5.imimg.com/data5/VL/RE/MY-10519833/eco-friendly-areca-plates-500x500.jpg"
                    alt=""
                  />
                  <h4 className="App">Plate</h4>
                </div>
              </div>
            </div>
            <div className="App">
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://5.imimg.com/data5/VL/RE/MY-10519833/eco-friendly-areca-plates-500x500.jpg"
                    alt=""
                  />
                  <h4 className="App">Plate</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "20px", marginTop: "20px" }}>
          <SimpleImageSlider
            width={1200}
            height={450}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={0.5}
            autoPlay={true}
            autoPlayDelay={3.0}
          />
        </div>
        <Content />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}
