import React from "react";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import headImg from "../assets/images/Doctor.png";
import firstImg from "../assets/images/blood-test.png";
import secondImg from "../assets/images/blood-donation (1).png";
import thirdImg from "../assets/images/blood-bank.png";
import fourthImg from "../assets/images/donor.png";
import { Zoom } from "@material-ui/core";
import { Link } from "react-router-dom";
import leftArrow from "../assets/images/right-arrow.png";

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
        <div className="mainContainer">
          <div className="mainCard">
            <p>
              <img src={fourthImg} width="30%" alt=""></img>Blood Donation is
              very Benefical for boody mediacaly so to donate blood choose
              nearest blood donation camp and book a schedule vist as per your
              convenience{" "}
            </p>
            <hr />
            <Link to="/blood/donate">
              <p>Donate for Cause</p>
                <img src={leftArrow} width="10%" alt=""></img>
            </Link>
          </div>
          <div className="mainCard">
            <p>
              <img src={secondImg} width="30%" alt=""></img>
              In Every 2s someone somewhere needs blood to save his/her life,
              unavailability of same blood is real threat to life sometimes.Get
              required blood in no time.
            </p>
            <hr />
            <Link to="/blood/fetch">
              <p>Recieve vital Blood</p>
              <img src={leftArrow} width="10%" alt=""></img>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
