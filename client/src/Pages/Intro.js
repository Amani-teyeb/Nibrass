import React from "react";
import ABC from "../assets/intro/ABC.png";
import Footer from "../Components/Footer"

import "./Intro.css";
import { NavLink } from "react-router-dom";
const Intro = () => {
  return (
    <div className="App">
      <div className="bgimg-1">
        <div className="auth ml-2">
          <img
            src={ABC}
            alt="logo"
            width="250px"
            height="115px"
            className="mt-2 ml-2"
          />

          <div className="m-2">
            <button
              className="btn btn-outline-primary m-3 p-3"
              style={{ width: "120px" }}
            >
              <NavLink
                to="/signup"
                style={{ textDecoration: "none", color: "white", fontSize:'1.3em' }}
              >
                التسجيل
              </NavLink>
            </button>
           
            <button
              className="btn btn-outline-primary m-3 mr-5 p-3"
              style={{ width: "120px" }}
            >
              <NavLink
                to="/login"
                style={{ textDecoration: "none", color: "white", fontSize:'1.3em' }}
              >
                الدخول
              </NavLink>
            </button>

            <button
              className="btn btn-outline-primary m-3 mr-5 p-3"
              style={{ width: "120px" }}
            >
              <NavLink
                to="/signupt"
                style={{ textDecoration: "none", color: "white", fontSize:'1.3em' }}
              >
               المعلم
              </NavLink>
            </button>
          
          </div>
          <div
            className="caption"
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              fontWeight: "Bold",
              textShadow:
                "1px 1px 2px black, 0 0 250px #b67338, 0 0 5px darkblue",
              color: "white"
            }}
          >
            <span className="border">
              {" "}
              {"best education with nibrass school".toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          color: "#777",
          backgroundColor: "#eee7db",
          padding: "50px 80px",
          textAlign: "justify"
        }}
      >
        <h3
          style={{
            textAlign: "center",
            fontWeight: "Bold",
            textShadow: "1px 1px 2px black, 0 0 10px #b67338, 0 0 5px darkblue",
            color: "white",
            margin: "1% 10%"
          }}
        ></h3>
       
     
            
       
       
      </div>

      <div className="bgimg-2">
        <div className="caption">
          <span
            className="border"
            style={{
              backgroundColor: "transparent",
              fontSize: "25px",
              fontWeight: "Bold",
              textShadow:
                "1px 1px 2px black, 0 0 250px #b67338, 0 0 5px darkblue",
              color: "white"
            }}
          >
            {"Learn & Learn".toUpperCase()}
          </span>
        </div>
   
      </div>
       
      <Footer/>
    </div>
  
     


    
    
  );
};

export default Intro;
