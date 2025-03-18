import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// // import SwiperCore from "swiper";

const reviews = [
  {
    id: 1,
    image: "/woman.jpg",
    name: "Ama Ampomah",
    position: "CEO & Founder Inc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 2,
    image: "/man.jpg",
    name: "John Smith",
    position: "Marketing Head",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    id: 3,
    image: "/customer.jpg",
    name: "Jane Doe",
    position: "Customer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

export default function Home_page() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="flex justify-evenly item-center">
          <h2 className="mt-[20px]">
            <b>Feastly</b>
          </h2>
          <div>
            <ul>
              <li onClick={() => navigate("/menu")} className="cursor-pointer">
                <a className="active">Menu</a>
              </li>
              <li onClick={() => navigate("/order")} className="cursor-pointer">
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
        <span>
          <img
            src="/Group1.jpg"
            alt="icon"
            width="80"
            height="80"
            className=""
            style={{ marginLeft: "180px", marginTop: "50px" }}
          />
        </span>
        <div
          className="flex justify-between"
          style={{ margin: "10px 0 0 240px" }}
        >
          <div>
            <h1 className=" " style={{ fontSize: "60px" }}>
              <b>
                We Provide the best <br /> food for you{" "}
              </b>
            </h1>
            <h4 className="" style={{ fontSize: "15px", fontWeight: "100" }}>
              “Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              <br /> sed do eiusmod tempor.”
            </h4>
            <div
              className="flex "
              style={{
                gap: "20px",
              }}
            >
              <button className="small" onClick={() => navigate("/menu")}>
                Menu
              </button>
              <button className="smaller">Book a table</button>
            </div>
            <div
              className="flex relative "
              style={{
                gap: "25px",
                top: "80px",
                cursor: "pointer",
              }}
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </div>
            <hr
              className="relative"
              style={{
                top: "65px",
                width: "19%",
                marginRight: "290px",
                float: "right",
              }}
            />
          </div>
          <div className="relative" style={{ display: "inline-block" }}>
            <img
              src="/page.jpg"
              alt="food"
              width="500"
              height="700"
              className=""
              style={{
                marginRight: "100px",
                marginBottom: "20px",
                clipPath: "xywh(0 5px 100% 75% round 15% 0)",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
              }}
            />
            <img
              src="/dish2.jpg"
              alt="food"
              width="290"
              height="290"
              className="absolute"
              style={{
                bottom: "60px",
                left: "-110px",
                clipPath: "circle(40%)",
                boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
        </div>
        <div className=" bg-[#F0F0F0] p-[5px]">
          <div className="text-center">
            <h1 className="mb-[20px] mt-[20px]">Our Special Dishes</h1>
            <h4>
              “Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              <br /> sed do eiusmod tempor.”
            </h4>
          </div>
          <div className="special justify-center" style={{ gap: "40px" }}>
            <div
              className=" flex"
              style={{
                position: "relative",
                top: "50px",
                backgroundColor: "white",
                clipPath: "xywh(0 5px 100% 75% round 15% 0)",
                padding: "35px",
                width: "10%",
                height: "45vh",
                textAlign: "center",
                display: "inline-block",
              }}
            >
              <img
                src="/lumpia.jpg"
                alt="lumpia"
                width="200"
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
            <div
              className=" flex"
              style={{
                position: "relative",
                top: "50px",
                backgroundColor: "white",
                clipPath: "xywh(0 5px 100% 75% round 15% 0)",
                padding: "35px",
                width: "10%",
                height: "45vh",
                textAlign: "center",
                display: "inline-block",
              }}
            >
              <img
                src="/fish.jpg"
                alt="fish"
                width="200"
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
            <div
              className=" flex"
              style={{
                position: "relative",
                top: "50px",
                backgroundColor: "white",
                clipPath: "xywh(0 5px 100% 75% round 15% 0)",
                padding: "35px",
                width: "10%",
                textAlign: "center",
                height: "45vh",
                display: "inline-block",
              }}
            >
              <img
                src="/tofu.jpg"
                alt="tofu"
                width="200"
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
                “Lorem ipsum dolor sit <br /> amet, eiusmod ”{/* tempor. */}
              </p>
            </div>
            <div
              className=" flex"
              style={{
                position: "relative",
                top: "50px",
                backgroundColor: "white",
                clipPath: "xywh(0 5px 100% 75% round 15% 0)",
                padding: "35px",
                width: "10%",
                height: "45vh",
                textAlign: "center",
                display: "inline-block",
              }}
            >
              <img
                src="/salad.jpg"
                alt="salad"
                width="200"
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
          <div className="flex items-center justify-center space-x-8">
            {/* Image Container */}
            <div>
              <img
                src="/dish2.jpg"
                alt="food"
                width="680"
                height="680"
                className="mt-10 rounded-full"
                style={{ clipPath: "circle(40%)" }}
              />
            </div>

            {/* Text Container */}
            <div
              style={{
                maxWidth: "500px",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <h1 className="text-3xl font-bold">Welcome to Our Restaurant</h1>
              <p
                className=""
                style={
                  {
                    //   display: "inline-block",
                    //   lineHeight: "1.5",
                  }
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div
                className="flex "
                style={{
                  gap: "20px",
                  justifyContent: "center",
                }}
              >
                <button className="small">Menu</button>
                <button className="smaller">Book a table</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="text-3xl font-bold"
            style={{ marginLeft: "150px", marginTop: "80px" }}
          >
            <h1>Our Expert chef</h1>
            <p>
              “Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              <br /> sed do eiusmod tempor.”
            </p>
          </div>
          <div
            className=" "
            style={{
              width: "430px",
              height: "430px",
              backgroundColor: "#EA6D27",
              clipPath: "circle(50%)",
              position: "relative",
              /* top: 60px; */
              // marginLeft: "30px",
              float: "right",
              top: "-100px",
            }}
          >
            <img
              src="/chef4.jpg"
              alt="chef"
              width="600"
              height="450"
              className="chef "
            />
          </div>
          {/* <div>
            <label className="circle-checkbox">
              <input type="checkbox" checked="checked" />
              <span className="checkmark"></span>
            </label>
          </div> */}
          <section className="chef-section">
            <div className="features-grid">
              <div className="feature">
                <span className="icon">✔</span>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className="feature">
                <span className="icon">✔</span>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className="feature">
                <span className="icon">✔</span>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className="feature">
                <span className="icon">✔</span>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className="feature">
                <span className="icon">✔</span>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
              <div className="feature">
                <span className="icon">✔</span>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
              </div>
            </div>
          </section>
          <div
            className="relative text-center ml-[30px] flex gap-[20px] "
            style={{
              margin: "50px 0 20px 150px",
            }}
          >
            <button className="small">Menu</button>
            <button className="smaller">Book a table</button>
          </div>
        </div>
        <div className=" bg-[#F0F0F0] p-[20px] relative ">
          <div className="text-center text-2xl">
            <h1>
              <b className="text-2xl ">Our Happy Customers</b>
            </h1>
            <p>
              “Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              <br /> sed do eiusmod tempor.”
            </p>
          </div>

          <div
            className="relative p-[5px] flex flex-col items-center text-center"
            style={{
              backgroundColor: "white",
              marginTop: "20px",
              width: "32%",
              minHeight: "55vh",
              clipPath: "xywh(0 5px 100% 75% round 15% 0)",
              textAlign: "center",
              display: "flex",
              borderRadius: "12px",
              margin: "0 auto",
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            <span className="img-container absolute ">
              <img
                src="/woman.jpg"
                alt="woman"
                width="100"
                height="70"
                style={{ clipPath: "circle(40%)" }}
              />
              <div className="stars relative top-[-9px]">★★★★★</div>
            </span>

            <div className="absolute  ">
              <p className="p-[85px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="text-center mx-auto mt-[150px] w-fit">
              <h4>
                <b>Ama Ampomah</b>
              </h4>
              <p>CEO & Founder Inc</p>
            </div>
          </div>
          {/* <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="overflow-hidden w-full"
          >
            {" "}
            {reviews.map((review) => (
              <SwiperSlide
                key={review.id}
                style={{
                  backgroundColor: "white",
                  clipPath: "xywh(0 5px 100% 75% round 15% 0)",
                  display: "flex",
                  margin: "0 auto",
                  textAlign: "center",
                  fontSize: "13px",
                  lineHeight: "1.5",
                  marginRight: "460px",
                  // justifyContent: "center",
                  // alignItems: "center",
                }}
                className=" relative p-[5px] flex flex-col items-center text-center max-w-[32%] min-h-[55vh] bg-white mt-[30px]"
              >
                <span className="img-container absolute ">
                  <img
                    src={review.image}
                    alt={review.name}
                    width="100"
                    height="70"
                    style={{ clipPath: "circle(40%)" }}
                  />
                  <div className="stars relative top-[-9px] text-yellow-500 text-lg">
                    ★★★★★
                  </div>
                </span>
                <div className="absolute  ">
                  <p className="p-[75px]">{review.text}</p>
                </div>
                <div className="text-center mx-auto mt-[100px] w-fit">
                  <h4 className="font-bold">{review.name}</h4>
                  <p>{review.position}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          <div className="mx-auto mt-[30px] relative w-fit">
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
              width="720"
              height="350"
              className="cozy object-cover"
            />
          </div>
        </div>
        {/* <footer className=" p-10 relative">
          <div className="mx-auto max-w-6xl">
            <div
              className="flex flex-wrap justify-between footer-section"
              style={{
                gap: "20px",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div className="max-w-[250px] ">
                <h1>
                  <b>Feastly</b>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.{" "}
                  <a
                    className="font-bold no-underline text-blue-500 hover:underline"
                    href="#"
                  >
                    Learn more
                  </a>
                </p>
              </div>
              <div className="min-w-[150px] ">
                <h4 className="text-lg font-bold mb-[10px] ">Opening Hours</h4>
                <p>
                  Monday - Friday
                  <br />
                  8:00 am to 9:00 pm
                </p>
                <p>
                  Saturday
                  <br />
                  8:00 am to 9:00 pm
                </p>
                <p>
                  Sunday
                  <br />
                  <strong>CLOSED</strong>
                </p>
              </div>
              <div className="min-w-[150px] footer-links">
                <h4 className="text-lg font-bold mb-[10px] ">Navigation</h4>
                <ul className="list-none p-0 space-y-2">
                  <li>
                    <a href="#">Menu</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Main dishes</a>
                  </li>
                </ul>
              </div>
              <div className="min-w-[150px] footer-links">
                <h4 className="text-lg font-bold mb-[10px] ">Dishes</h4>
                <ul className="list-none p-0 space-y-2">
                  <li>
                    <a href="#">Fish & Veggies</a>
                  </li>
                  <li>
                    <a href="#">Tofu Chili</a>
                  </li>
                  <li>
                    <a href="#">Egg & Cucumber</a>
                  </li>
                  <li>
                    <a href="#">Lumpia w/Sauce</a>
                  </li>
                </ul>
              </div>
              <div className="min-w-[150px] ">
                <h4 className="text-lg font-bold mb-[10px] "> Follow Us</h4>
                <div className="social-icons flex" style={{ gap: "10px" }}>
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </div>
              </div>
            </div>
            <div
              className="footer-bottom flex justify-between item-center mt-[20px]"
              style={{
                borderTop: "1px solid #ddd",
                paddingTop: "15px",
                fontSize: "12px",
              }}
            >
              <p>
                © 2025 Restaurants. All Rights Reserved. Built by {""}
                <strong>Teni Ajet♥︎</strong>
              </p>
              <div className="footer-policy">
                <a
                  className="no-underline text-blue-500 hover:underline"
                  style={{
                    marginLeft: "15px",
                    color: "#666",
                  }}
                  href="#"
                >
                  Terms of Service
                </a>
                <a
                  className="no-underline text-blue-500 hover:underline"
                  style={{
                    marginLeft: "15px",
                    color: "#666",
                  }}
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer> */}
        <footer className="footer">
          <div className="containerss">
            <div className="footer-section">
              <div className="footer-logo">
                <h1>
                  <b>Feastly</b>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <a href="#">Learn more</a>
              </div>

              <div className="footer-info">
                <h4>Opening Hours</h4>
                <p>
                  Monday - Friday
                  <br />
                  8:00 am to 9:00 pm
                </p>
                <p>
                  Saturday
                  <br />
                  8:00 am to 9:00 pm
                </p>
                <p>
                  Sunday
                  <br />
                  <strong>CLOSED</strong>
                </p>
              </div>

              <div className="footer-links">
                <h4>Navigation</h4>
                <ul>
                  <li>
                    <a href="#">Menu</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Main dishes</a>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h4>Dishes</h4>
                <ul>
                  <li>
                    <a href="#">Fish & Veggies</a>
                  </li>
                  <li>
                    <a href="#">Tofu Chili</a>
                  </li>
                  <li>
                    <a href="#">Egg & Cucumber</a>
                  </li>
                  <li>
                    <a href="#">Lumpia w/Sauce</a>
                  </li>
                </ul>
              </div>

              <div className="footer-social">
                <h4>Follow Us</h4>
                <div className="social-icons" style={{ gap: "10px" }}>
                  <FontAwesomeIcon icon={faFacebook} size="xl" />
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                  <FontAwesomeIcon icon={faTwitter} size="xl" />
                </div>
              </div>
            </div>

            <div
              className="footer-bottom flex justify-between item-center mt-[20px]"
              style={{
                borderTop: "1px solid #ddd",
                paddingTop: "15px",
                fontSize: "12px",
              }}
            >
              <p>
                © 2025 Restaurants. All Rights Reserved. Built by {""}
                <strong>Teni Ajet♥︎</strong>
              </p>
              <div className="footer-policy">
                <a
                  className="no-underline text-blue-500 hover:underline"
                  style={{
                    marginLeft: "15px",
                    color: "#666",
                  }}
                  href="#"
                >
                  Terms of Service
                </a>
                <a
                  className="no-underline text-blue-500 hover:underline"
                  style={{
                    marginLeft: "15px",
                    color: "#666",
                  }}
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
