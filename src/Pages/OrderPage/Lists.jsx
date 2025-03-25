// import * as React from "react";
import { useState } from "react";
import Modal from "react-modal";

export default function List(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div className=" ">
        <div className=" mt-[50px]">
          <h1 className="ml-[20px] mb-[20px]">Popular Dishes</h1>
          <div className="grid grid-cols-3 gap-[40px]">
            <div className=" ">
              <img
                src="/lumpia.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <div>
                <div className="text-center">
                  <p>
                    <b
                      className="cursor-pointer"
                      onClick={() => setModalIsOpen(true)}
                    >
                      • Lumpia with ketchup $10.00{" "}
                    </b>
                  </p>
                  <p>★★★★ 4.0</p>
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    style={{
                      content: {
                        width: "700px",
                        margin: "auto",
                        padding: "20px",
                        borderRadius: "10px",
                      },
                    }}
                  >
                    <img
                      src="/lumpia.jpg"
                      alt="lumpia"
                      width="700"
                      height="300"
                      // className=" rounded-[25px]"
                    />
                    <h2> • Lumpia with ketchup $10.00</h2>
                    <div className="characteristics">
                      <p>$${""} • American • Asian dish</p>
                      <p>★★★★ 4.0 200+ Ratings</p>
                      <button onClick={() => setModalIsOpen(false)}>
                        Close
                      </button>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
            <div className=" ">
              <img
                src="/smokedchicken.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <div className="text-center">
                <p>
                  <b>• Smoked Half Chicken $16.00</b>
                </p>
                <p>★★★★ 4.0</p>
              </div>
            </div>
            <div className=" ">
              <img
                src="/chicken.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <div className="text-center">
                <p>
                  <b>• Fried Chicken Sandwich $16.00</b>
                </p>
                <p>★★★★ 4.0</p>
              </div>
            </div>
            <div className=" ">
              <img
                src="/mac&cheese.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <div className="text-center">
                <p>
                  <b>• Mac & Cheese $35.00 (10 Serv.) $60.00 (10 Serv.)</b>
                </p>
                <p>★★★★ 4.0</p>
              </div>
            </div>
            <div className=" ">
              <img
                src="/cavatappi.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <div className="text-center">
                <p>
                  <b>• Cavatappi Pasta & Creamy Cheese Sauce. $25.00</b>
                </p>
                <p>★★★★ 4.0</p>
              </div>
            </div>
            <div className=" ">
              <img
                src="/chocolate.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <div className="text-center">
                <p>
                  <b>• Whole Chocolate Pie (6-8 Serv) $42.00</b>
                </p>
                <p>★★★★ 4.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
