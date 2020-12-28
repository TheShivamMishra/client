import React from "react";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import bloodDrop from "../assets/images/blood-drop (1).png";
import backgroundImage from "../assets/images/background.png";
import firstImg from "../assets/images/donor.png";
import SecondImg from "../assets/images/blood-donation (1).png";
import { useHistory } from "react-router-dom";

function Home() {
   
  let history = useHistory();

  function handler(event){
   history.push("/login");
  }

  return (
    <div>
      <Header />
      <div className="homeHead">
        <img
          className="headerImg"
          src={backgroundImage}
          width="100%"
          alt="backgroundImage"
        ></img>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <div className="container">
            <img src={bloodDrop} alt="" height="50vh"></img>
            <h3>Donate Blood Save Life With Us</h3>
            <p>Each unit of blood can save upto 3 lives, so please</p>
            <Button onClick={handler} variant="outlined">
              Donate Now
            </Button>
          </div>
        </Slide>
      </div>
      <hr />
      <div className="bd">
        <div className="container1">
          <p>
            <img className="temp" src={firstImg} alt=""></img>
            Donate Blood according to your time we have designed this app with
            advance API which gives to many options in your locatity to donate
            blood. We have collaboarted with many Blood Banks and Hospitals
            Chains to provide you best of easy to donate blood. So Login or
            SignUp with us to donate blood and save lives.
          </p>
          <Button onClick={handler} variant="outlined">
            Donate Now
          </Button>
        </div>
        <hr />
        <div className="container1">
          <p>
            <img className="temp1" src={SecondImg} alt=""></img>
            According to a reasearch, Every 2 secdons, a person needs blood in
            this country. Getting right blood at right time is the most
            important thing to save life!. We have a user database within your
            city who can donate blood when needed and also some ohter blood
            banks who can help us to provide blood. So login or SignUp to know
            more.
          </p>
          <Button onClick={handler} variant="outlined">
            Get Blood
          </Button>
        </div>
        <hr className="last" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
