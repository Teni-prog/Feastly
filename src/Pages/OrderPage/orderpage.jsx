// import react from react;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import toggleMenu from "./script";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
export default function Order() {
  // const [filteredData, setFilteredData] = useState([]);
  // const [globalFilter, setGlobalFilter] = useState("");
  // useEffect(() => {
  //   // Filter data based on the globalFilter
  //   if (globalFilter) {
  //     const lowerCaseFilter = globalFilter.toLowerCase();
  //     const filtered = data.filter((item) =>
  //       Object.keys(item).some((key) =>
  //         String(item[key]).toLowerCase().includes(lowerCaseFilter)
  //       )
  //     );
  //     setFilteredData(filtered);
  //   } else {
  //     setFilteredData(data);
  //   }
  // }, [globalFilter, data]);
  return (
    <>
      <div className="flex justify-around">
        <nav id="hamburger-nav">
          <div className="hamburger-menu">
            <div className="hamburger-icon" onClick={() => toggleMenu()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="menu-links">
              <li>
                <a href="#about" onClick={() => toggleMenu()}>
                  About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => toggleMenu()}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => toggleMenu()}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => toggleMenu()}>
                  Contact
                </a>
              </li>
            </div>
          </div>
        </nav>
        <div>
          <p className="nav-p">
            <b>Order</b> Something ♥︎
          </p>
        </div>
        <div className="flex border-2 rounded-[15px]  mt-[10px] w-[330px] h-[40px]">
          <InputText
            type="search"
            //   value={globalFilter}
            //   onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="border-0 rounded-[15px] w-[300px]"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mt-[12px] ml-[2px] cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
