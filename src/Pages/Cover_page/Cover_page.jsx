import React from "react";
import "../../Components/Cover_page/coverpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Cover_page() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" bg-[#F0F0F0] max-w-[100%] h-[100%]">
        <div className="bg-[#fff] max-w-[45%] h-[100%] container grid grid-cols-2 w-full md:grid-cols-1">
          <div className="Leftpage w-full md:w-1/2 p-4">
            <div className="flex justify-evenly item-center">
              <h2 className="mt-[20px]">
                <Link to="/home">
                  <b>Feastly</b>
                </Link>
              </h2>
              <div>
                <ul>
                  <li
                    onClick={() => navigate("/menu")}
                    className="cursor-pointer"
                  >
                    <a className="active">Menu</a>
                  </li>
                  <li
                    onClick={() => navigate("/order")}
                    className="cursor-pointer"
                  >
                    <a href="#news">Order</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                </ul>
              </div>
              <button className="button">Book a table</button>
            </div>
            <div className="flex justify-between">
              <div>
                <h1 className="card  ">
                  <b>
                    We Provide the best <br /> food for you{" "}
                  </b>
                </h1>
                <h4 className="card ">
                  “Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit,
                  <br /> sed do eiusmod tempor.”
                </h4>
                <div className="my-buttons">
                  <button className="small" onClick={() => navigate("/menu")}>
                    Menu
                  </button>
                  <button className="smaller">Book a table</button>
                </div>
                <div className="icons">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </div>
                <hr
                  style={{
                    width: "25%",
                    top: "130px",
                    float: "right",
                    position: "relative",
                  }}
                />
              </div>
              <img
                src="/food.jpeg"
                alt="food"
                width="350"
                height="450"
                className="food"
              />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <br /> */}
            <div className=" bg-[#F0F0F0] p-[5px]">
              <div className="text-center">
                <h1>Our Special Dishes</h1>
                <h4>
                  “Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit,
                  <br /> sed do eiusmod tempor.”
                </h4>
              </div>
              <div className="special">
                <div className="dishes flex">
                  <img
                    src="/lumpia.jpg"
                    alt="lumpia"
                    width="100%"
                    height="200"
                    className="lumpia "
                  />
                  <span className="price-badge">$12</span>

                  <div className="sauce">
                    {" "}
                    <b>Lumpia with sauce</b>
                  </div>
                  <p
                    className=""
                    style={{
                      position: "relative",
                      top: "150px",
                      fontSize: "14px",
                    }}
                  >
                    “Lorem ipsum dolor sit <br /> amet, eiusmod tempor.”
                  </p>
                </div>
                <div className="dishes flex">
                  <img
                    src="/fish.jpg"
                    alt="fish"
                    width="100%"
                    height="200"
                    className="lumpia "
                  />
                  <span className="price-badge">$12</span>
                  <div className="sauce">
                    {" "}
                    <b>Fish with Veggies</b>
                  </div>
                  <p
                    className=""
                    style={{
                      position: "relative",
                      top: "150px",
                      fontSize: "14px",
                    }}
                  >
                    “Lorem ipsum dolor sit <br /> amet, eiusmod tempor.”
                  </p>
                </div>
                <div className="dishes flex">
                  <img
                    src="/tofu.jpg"
                    alt="tofu"
                    width="100%"
                    height="200"
                    className="lumpia "
                  />
                  <span className="price-badge">$12</span>
                  <div className="sauce">
                    {" "}
                    <b>
                      Tofu <br /> Chili
                    </b>
                  </div>
                  <p
                    className=""
                    style={{
                      position: "relative",
                      top: "150px",
                      fontSize: "14px",
                    }}
                  >
                    “Lorem ipsum dolor sit <br /> amet, eiusmod tempor.”
                  </p>
                </div>
                <div className="dishes flex">
                  <img
                    src="/salad.jpg"
                    alt="salad"
                    width="100%"
                    height="200"
                    className="lumpia "
                  />
                  <span className="price-badge">$12</span>
                  <div className="sauce">
                    {" "}
                    <b>Egg and Cucumber</b>
                  </div>
                  <p
                    className=""
                    style={{
                      position: "relative",
                      top: "150px",
                      fontSize: "14px",
                    }}
                  >
                    “Lorem ipsum dolor sit <br /> amet, eiusmod tempor.”
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Rightpage w-full md:w-1/2 p-4">
            <div>
              <div className="descriptions">
                <h2>Our Expert chef</h2>
                <p>
                  “Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit,
                  <br /> sed do eiusmod tempor.”
                </p>
              </div>
              <div className="chef-img ">
                <img
                  src="/chef4.jpg"
                  alt="chef"
                  width="430"
                  height="300"
                  className="chef "
                />
              </div>
              <div
                className="relative text-center ml-[30px] flex gap-[20px] "
                style={{
                  margin: "290px 0 20px 20px",
                }}
              >
                <button className="small">Menu</button>
                <button className="smaller">Book a table</button>
              </div>
            </div>
            <div className=" bg-[#F0F0F0] p-[20px] relative ">
              <div className="text-center text-2xl ">
                <b className="text-2xl">Our Happy Customers</b>
                <p>
                  “Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit,
                  <br /> sed do eiusmod tempor.”
                </p>
              </div>

              <div className="relative customer p-[5px] flex flex-col items-center text-center">
                <span className="img-container absolute ">
                  <img
                    src="/woman.jpg"
                    alt="woman"
                    width="100"
                    height="70"
                    // className=" "
                    style={{ clipPath: "circle(40%)" }}
                  />
                  <div className="stars relative top-[-9px]">★★★★★</div>
                </span>

                <div className="absolute  ">
                  <p className="p-[75px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="text-center mx-auto mt-[130px] w-fit">
                  <h4>
                    <b>Ama Ampomah</b>
                  </h4>
                  <p>CEO & Founder Inc</p>
                </div>
              </div>
              <div className="mx-auto mt-[-60px] relative w-fit">
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
                  <h1 className="cozy-text">
                    Get Your Promo Code by Subscribing to our Newsletter
                  </h1>
                </div>
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="input-container overflow-hidden bg-white relative top-[200px] shadow-md">
                    <input type="email" placeholder="Enter your emai" />
                    <button>Subscribe</button>
                  </div>
                </div>
                <img
                  src="/restaurant.jpg"
                  alt="restaurant"
                  width="600"
                  height="350"
                  className="cozy object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
