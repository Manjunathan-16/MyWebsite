import React from "react";
import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import SimpleImageSlider from "react-simple-image-slider";
import HomeNew from "./HomeNew";

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
        <div style={{ marginTop: "20px" }}>
          <SimpleImageSlider
            width={"100%"}
            height={450}
            images={images}
            showBullets={true}
            showNavs={true}
            slideDuration={0.5}
            autoPlay={true}
            autoPlayDelay={3.0}
          />
        </div>
        <HomeNew />
        <Footer />
      </div>
    );
  }
}
