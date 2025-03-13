import React from "react";

export default function Menu() {
  return (
    <>
      <div className="bg-[#fff] flex justify-center align-center" style={{}}>
        <div className=" firstpage p-[5px] max-w-[35%]" style={{}}>
          <div className="menu-page justify-center align-center">
            <h1 className="  mt-[50px]">SINGLE BOXED LUNCHES</h1>
            <hr />
            <hr />
            <p className=" text-[#ea6d27]">
              All Single Boxed Lunches Include Chocolate Chip Cookie
            </p>
          </div>
          <div className="list-food relative">
            <div className="flex justify-center">
              <p className="max-w-[20%]">
                <b>• Pulled Pork Sandwich $16.00</b>
              </p>
              <p className="max-w-[65%]">
                Smoked pulled pork tossed in our signature house BBQ Sauce,
                Pickles & Slaw served on a freshly Baked Bun.
                <br />
                <strong>On the side: {""}</strong> Bag o'chips
              </p>
            </div>
            <div className="flex justify-center">
              <p className="max-w-[20%]">
                <b>• Fried Chicken Sandwich $16.00</b>
              </p>
              <p className="max-w-[65%]">
                Our Seasoned Fried Chicken with White BBQ Sauce, Pimento Cheese
                & Pickles served on a Freshly Baked Bun.
                <br />
                <strong>On the side: {""}</strong> Bag o'chips
              </p>
            </div>
            <div className="flex  justify-center">
              <p className="max-w-[20%]">
                <b>• BLT Sandwich $16.00</b>
              </p>
              <p className="max-w-[65%]">
                Heirloom Tomatoes, Applewood Smoked Bacon, Bibb Lettuce on
                Toasted Butter Bread.
                <br />
                <strong>On the side: {""}</strong> Bag o'chips
              </p>
            </div>
            <div className="flex  justify-center">
              <p className="max-w-[20%]">
                <b>• Pastrami Sandwich $16.00</b>
              </p>
              <p className="max-w-[65%]">
                Pastrami, Swiss Cheese, Housemade SauerKraut, Thousand Island
                served on Rye Bread
                <br />
                <strong>On the side: {""}</strong> Bag o'chips
              </p>
            </div>
            <div className="flex  justify-center">
              <p className="max-w-[23%]">
                <b>
                  • Smoked Half Chicken <br />
                  $16.00
                </b>
              </p>
              <p className="max-w-[65%]">
                Seasoned & Smoked Chicken on the bone. White BBQ Sauce &
                Signature House BBQ sauce, House Pickle Medley, White Bread{" "}
              </p>
            </div>
            <div className="flex justify-center">
              <p className="max-w-[23%]">
                <b>• Bibb Lettuce Salad $16.00</b>
              </p>
              <p className="max-w-[65%]">
                Bibb Lettuces, Corn, Goat Cheese, Herbs, Pickled Shallots.
                <br />
                <strong>On the side: {""}</strong> Candied Walnuts & Buttermilk
                <b>
                  {" "}
                  Ranch Dressing <br /> **Add Chopped Chicken Thigh - $5.00**
                </b>
              </p>
            </div>
            <div className="flex  justify-center">
              <p className="max-w-[20%]">
                <b>
                  • Heirloom Tomato Salad <br />
                  $16.00
                </b>
              </p>
              <p className="max-w-[65%]">
                Heirloom Tomatoes, Cucumber, Toasted Sourdough Breadcrumbs, Goat
                Cheese, Herbs.
                <br />
                <strong>On the side: {""}</strong> Red Wine Vinaigrette <br />
                <b>**Add Chopped Chicken Thigh - $5.00**</b>
              </p>
            </div>
            <div>
              <h2>ADD-ONS</h2>
              <table>
                <tr>
                  <th>Add-ons</th>
                  <th>Price</th>
                </tr>
                <tr>
                  <td>
                    Coleslaw - Mac & Cheese -Collard Greens - Potato Salad
                  </td>
                  <td>$4.00 PER ITEM</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className=" firstpage p-[5px] max-w-[35%] " style={{}}>
          <div className="menu-page justify-center align-center">
            <h1 className="  mt-[50px]">GROUP SIDES</h1>
            <hr />
            <hr />
            {/* <p className=" text-[#ea6d27]">
              All Single Boxed Lunches Include Chocolate Chip Cookie
            </p> */}
          </div>
          <div className="list-food relative top-[30px]">
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>• Large Bibb Salad </b>
                </p>
                <p>
                  <b>$40.00 (10 Serv.) </b>
                </p>
              </div>
              <div className="flex  justify-center  ">
                <p className="">
                  Bibb Lettuces, Corn, Herbs, Goat Cheese, Pickled Shallots
                  <br />
                  <strong>On the side: {""}</strong> Candied Walnuts &
                  Buttermilk Ranch Dressing
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>• Broccoli Salad </b>
                </p>
                <p>
                  <b>$35.00 (10 Serv.) </b>
                </p>
              </div>
              <div className="flex  justify-center ">
                <p className="max-w-[70%]">
                  Broccoli, Carrots, Chickpeas & Red Peppers tossed in a Ginger
                  Sesame Dressing
                  {/* <strong>On the side: {""}</strong> Candied Walnuts &
                  Buttermilk Ranch Dressing */}
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>• Quinoa Grain Bowl </b>
                </p>
                <p>
                  <b>$60.00 (10 Serv.) </b>
                </p>
              </div>
              <div className="flex  justify-center ">
                <p className="max-w-[80%]">
                  Quinoa, Farro, Spinach, Cucumber, Red Onion & Cherry Tomatoes
                  w/Roasted Shallot Vinaigrette served on the side
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>• Brunswick Stew </b>
                </p>
                <p>
                  <b>$35.00 (10 Serv.) </b>
                </p>
                <p>
                  <b>$60.00 (20 Serv.) </b>
                </p>
              </div>
              <div className="flex  justify-center ">
                <p className="">
                  Southern Stew with Pulled Pork. A Southern Staple!
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>• Collard Green </b>
                </p>
                <p>
                  <b>$25.00 (10 Serv.) </b>
                </p>
                <p>
                  <b>$45.00 (20 Serv.) </b>
                </p>
              </div>
              <div className="flex justify-center ">
                <p className="">Stewed Greens with Bacon, Onion & Garlic</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>• Potato Salad </b>
                </p>
                <p>
                  <b>$25.00 (10 Serv.) </b>
                </p>
                <p>
                  <b>$40.00 (40 Serv.) </b>
                </p>
              </div>
              <div className="flex  justify-center">
                <p className="">
                  Red potatoes, celery and oions tossed with our White BBQ
                  Sauce. Topped with chives
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>• Mac & Cheese </b>
                </p>
                <p>
                  <b>$35.00 (10 Serv.) </b>
                </p>
                <p>
                  <b>$60.00 (10 Serv.) </b>
                </p>
              </div>
              <div className="flex  justify-center ">
                <p className="">
                  Cavatappi Pasta & Creamy Cheese Sauce.
                  <br />
                  Topped with Toasted Sourdough Breadcrumbs and Chives.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>• Mac & Cheese </b>
                </p>
                <p>
                  <b>$35.00 (10 Serv.) </b>
                </p>
                <p>
                  <b>$60.00 (10 Serv.) </b>
                </p>
              </div>
              <div className="flex  justify-center ">
                <p className="">
                  Cavatappi Pasta & Creamy Cheese Sauce.
                  <br />
                  Topped with Toasted Sourdough Breadcrumbs and Chives.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" firstpage p-[5px] max-w-[35%] " style={{}}>
          <div className="menu-page justify-center align-center">
            <h1 className="  mt-[50px]">DESSERTS</h1>
            <hr />
            <hr />
            {/* <p className=" text-[#ea6d27]">
              All Single Boxed Lunches Include Chocolate Chip Cookie
            </p> */}
          </div>
          <div className="list-food relative top-[30px]">
            <div>
              <div className="flex  ">
                <p>
                  <b>
                    • Whole Key Lime Pie (6-8 Serv) . . . . . . . . . . . . . .
                    . . . $42.00
                  </b>
                </p>
              </div>
              <div className="flex  justify-center  ">
                <p className="">
                  The perfect mix of fart & sweet, topped with fresh whipped
                  cream.
                </p>
              </div>
            </div>
            <div>
              <div className="flex ">
                <p>
                  <b>
                    • Whole Chocolate Pie (6-8 Serv) . . . . . . . . . . . . . .
                    . . . . $42.00
                  </b>
                </p>
              </div>
              <div className="flex  justify-center ">
                <p className="">
                  Old Fashioned Goodness-creamy & chocolatey, topped with fresh
                  whipped cream.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between ">
                <p>
                  <b>
                    • Banana Pudding (20 Serv) . . . . . . . . . . . . . . . . .
                    . . . . . . $42.00
                  </b>
                </p>
              </div>
              <div className="flex  justify-center ">
                <p className="">
                  Traditional & Delish! Nilla Wafers, bananas, pudding and fresh
                  whipped cream.
                </p>
              </div>
            </div>

            <div className="flex justify-between ">
              <p>
                <b>
                  • Chocolate Brownie Tray (12 Serv) . . . . . . . . . . . . . .
                  . . {""}$30.00
                </b>
              </p>
            </div>

            <div className="flex justify-between ">
              <p>
                <b>
                  • Chocolate Chip Cookie Tray (12 Serv) . . . . . . . . . . . .
                  {""} $30.00
                </b>
              </p>
            </div>
            <div className="flex justify-between">
              <img
                src="/coffee.jpg"
                alt="icon"
                width="110"
                height="110"
                className=""
                style={{ float: "left", marginTop: "50px" }}
              />
              <div className="menu-page ">
                <h2 className="  mt-[80px]">BEVERGES</h2>
                <hr />
                <hr />
              </div>
              <img
                src="/drink.jpg"
                alt="icon"
                width="100"
                height="100"
                className=""
                style={{ float: "right", marginTop: "50px" }}
              />
            </div>
            <div className="">
              {/* <div>
                <div className="flex justify-between ">
                  <p>
                    <b>• Unsweetened Iced Tea (6-8 Serv) </b>
                  </p>
                  <p>
                    <b>$12.00 </b>
                  </p>
                </div>
                <div className="flex  ">
                  <p className="">
                    Includes sugars, cups, lids and straws. Half Gallon
                    Container.
                  </p>
                </div>
              </div> */}
              <div>
                <div className="flex justify-between ">
                  <p>
                    <b>• Sweetened Iced Tea (6-8 Serv) </b>
                  </p>
                  <p>
                    <b>$12.00 </b>
                  </p>
                </div>
                <div className="flex   ">
                  <p className="">
                    Includes cups, lids and straws. Half Gallon Container
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between ">
                  <p>
                    <b>• Lemonade (6-8 Serv) </b>
                  </p>
                  <p>
                    <b>$12.00 </b>
                  </p>
                </div>
                <div className="flex   ">
                  <p className="">
                    Includes cups, lids and straws. Half Gallon Container
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between ">
                  <p>
                    <b>• Counter Culture Coffee Box (10 Serv) </b>
                  </p>
                  <p>
                    <b>$33.00 </b>
                  </p>
                </div>
                <div className="flex   ">
                  <p className="">
                    Hot and caffeinated. Includes cups, cream and sugar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
