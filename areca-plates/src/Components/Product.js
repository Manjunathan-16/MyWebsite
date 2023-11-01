import { Component } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
export default class Product extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div
          style={{
            backgroundColor: "rgb(221, 208, 200)",
            color: "black",
            marginTop: "20px",
          }}
        >
          <h1>Nice Images</h1>
          <div className="name-container">
            <div className="name-left">
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "300px", height: "250px" }}
                    src="https://images3.alphacoders.com/823/82317.jpg"
                  />
                  <h4 className="App">Maldives</h4>
                </div>
              </div>
            </div>
            <div className="name-right">
              <div className="card">
                <div className="card-body bg-image hover-zoom">
                  <img
                    style={{ width: "300px", height: "250px" }}
                    src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg"
                  />
                  <h4 className="App">Gallery</h4>
                </div>
              </div>
            </div>
            <div className="name-left">
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "300px", height: "250px" }}
                    src="https://i.pinimg.com/originals/cd/7b/5c/cd7b5c8d4687b5c98a445127926a56e2.jpg"
                  />
                  <h4 className="App">Bird</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
