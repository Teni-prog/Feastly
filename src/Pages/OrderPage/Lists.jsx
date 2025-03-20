// import * as React from "react";

export default function List(props) {
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
              <p className="text-center">
                <b>• Lumpia with ketchup $10.00 </b>
              </p>
            </div>
            <div className=" ">
              <img
                src="/smokedchicken.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <p className="text-center">
                <b>• Smoked Half Chicken $16.00</b>
              </p>
            </div>
            <div className=" ">
              <img
                src="/chicken.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <p className="text-center">
                <b>• Fried Chicken Sandwich $16.00</b>
              </p>
            </div>
            <div className=" ">
              <img
                src="/mac&cheese.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <p className="text-center">
                <b>• Mac & Cheese $35.00 (10 Serv.) $60.00 (10 Serv.)</b>
              </p>
            </div>
            <div className=" ">
              <img
                src="/cavatappi.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <p className="text-center">
                <b>• Cavatappi Pasta & Creamy Cheese Sauce. $25.00</b>
              </p>
            </div>
            <div className=" ">
              <img
                src="/chocolate.jpg"
                alt="lumpia"
                width="400"
                height="200"
                className="ml-[20px] rounded-[25px]"
              />
              <p className="text-center">
                <b>• Whole Chocolate Pie (6-8 Serv) $42.00</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
