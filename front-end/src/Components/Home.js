import React from "react";
import { Component } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";
import SimpleImageSlider from "react-simple-image-slider";
import HomeNew from "./HomeNew";
import "../App.css";

const images = [
  {
    url: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
  },
  {
    url: "https://i.pinimg.com/originals/cd/7b/5c/cd7b5c8d4687b5c98a445127926a56e2.jpg",
  },
  {
    url: "https://images3.alphacoders.com/823/82317.jpg",
  },
];

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
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
        <HomeNew />
        <Footer />
      </div>
    );
  }
}
