import React from "react";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import headImg from "../assets/images/Doctor.png";
import firstImg from "../assets/images/blood-test.png";
import secondImg from "../assets/images/blood-donation (1).png";
import thirdImg from "../assets/images/blood-bank.png";
import fourthImg from "../assets/images/donor.png";
import { Zoom } from "@material-ui/core";

function Main() {
  return (
    <div>
      <Header />
      <div>
        <div className="mainHead">
          <img
            src={headImg}
            className="mainHead-fistImg"
            width="50%"
            alt=""
          ></img>
          <Zoom in={true}>
            <img
              src={firstImg}
              className="mainHead-test mainHead-test4"
              width="7%"
              alt=""
            ></img>
          </Zoom>
          <Zoom in={true}>
            <img
              src={secondImg}
              className="mainHead-test mainHead-test2"
              width="7%"
              alt=""
            ></img>
          </Zoom>
          <Zoom in={true}>
            <img
              src={thirdImg}
              className="mainHead-test mainHead-test1"
              width="7%"
              alt=""
            ></img>
          </Zoom>
          <Zoom in={true}>
            <img
              src={fourthImg}
              className="mainHead-test mainHead-test3"
              width="7%"
              alt=""
            ></img>
          </Zoom>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
