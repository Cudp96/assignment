import React, { useState } from "react";
import LogoImg from "../../assets/logo.png";
import LogoImgBlack from "../../assets/logo_b.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import "./index.css";

const Navbar = () => {
  const [dropdownState, setDropdownState] = useState({
    brandStory: false,
    trainingProgram: false,
    theClipNews: false,
    customerCenter: false,
  });

  const [isLogoBlack, setIsLogoBlack] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropdownToggle = (key) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleLogoHover = () => {
    setIsLogoBlack(true);
  };

  const handleLogoLeave = () => {
    setIsLogoBlack(false);
  };

  const handleMenuToggle = () => {
    document.body.classList.toggle("menu-open");
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseButtonClick = () => {
    document.body.classList.remove("menu-open");
    setIsMenuOpen(false);
  };

  return (
    <nav
      className=""
      onMouseEnter={handleLogoHover}
      onMouseLeave={handleLogoLeave}
    >
      <div className="Navbar">
        <div>
          <img src={isLogoBlack ? LogoImgBlack : LogoImg} alt="Logo Image" />
        </div>
        <div className="hidden lg:block xl:block">
          <ul className="nav-menu">
            <li
              className="nav-item"
              onMouseEnter={() => handleDropdownToggle("brandStory")}
              onMouseLeave={() => handleDropdownToggle("brandStory")}
            >
              <a href="#">Brand Story</a>
              {dropdownState.brandStory && (
                <div className="dropdown-content">
                  <a href="#" className="ml-64">
                    About THE Clip
                  </a>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleDropdownToggle("trainingProgram")}
              onMouseLeave={() => handleDropdownToggle("trainingProgram")}
            >
              <a href="#">Training Program</a>
              {dropdownState.trainingProgram && (
                <div className="dropdown-content">
                  <ul className="dropdown-list flex justify-center">
                    <li>
                      <a href="#">Learning Process</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Course and Level</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Lecture Support System</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Online Learning </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Test Center </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleDropdownToggle("theClipNews")}
              onMouseLeave={() => handleDropdownToggle("theClipNews")}
            >
              <a href="#">The CLIP News</a>
              {dropdownState.theClipNews && (
                <div className="dropdown-content flex justify-center">
                  <a href="#" className="ml-52">
                    notice
                  </a>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => handleDropdownToggle("customerCenter")}
              onMouseLeave={() => handleDropdownToggle("customerCenter")}
            >
              <a href="#">Customer Center</a>
              {dropdownState.customerCenter && (
                <div className="dropdown-content">
                  <ul className="dropdown-list flex justify-end right-10">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Simple Textbook Application</a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Consultation Application</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div
          onClick={isMenuOpen ? handleCloseButtonClick : handleMenuToggle}
          className="hamburger-icon"
        >
          <GiHamburgerMenu size={32} color={isLogoBlack ? "black" : "white"} />
        </div>
      </div>
      <hr className="-mt-[20px] z-10" />

      {isMenuOpen && (
        <div className={`fullscreen-menu ${isMenuOpen ? "menu-open" : ""}`}>
          {" "}
          <div className="absolute top-8 left-4 bg-transparent">
            <img src={LogoImgBlack} alt="Logo Image" />
          </div>
          <div
            className="close-button hamburger-icon"
            onClick={handleCloseButtonClick}
          >
            <RxCross1 size={32} className="mt-5" />
          </div>
          <div className="mt-96 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-center bg-white">
            <div className="sm:border-b-0 sm:h-16 md:h-96 md:border-r-2 border-gray-300 relative">
              <h1 className="text-[30px] font-extrabold relative z-10 text-center">
                Brand story
                <span className="absolute bottom-1 left-[69px] w-[10rem] h-2 -z-10 bg-[rgba(58,216,199,255)]"></span>
              </h1>
              <p className="mt-12 text-center text-[20px]">About The CLIP</p>
            </div>
            <div className="sm:border-r-0 sm:h-16 md:h-96 md:border-r-2 border-gray-300 bg-white text-blacks">
              <h1 className="text-[30px] font-extrabold relative z-10 text-center mb-12">
                Education Program
                <span className="absolute bottom-1 left-[16px] w-[17rem] h-2 -z-10 bg-[rgba(58,216,199,255)]"></span>
              </h1>
              <ul className="text-left text-[20px]">
                <li>Learning Process</li>
                <li>Course Level</li>
                <li>Lecture Support System</li>
                <li>Online Learning</li>
                <li>Test Centers</li>
              </ul>
            </div>
            <div className="">
              <h1 className="text-[30px] font-extrabold relative z-10 text-center">
                The CLIP News
                <span className="absolute bottom-1 left-[44px] w-[14rem] h-2 -z-10 bg-[rgba(58,216,199,255)]"></span>
              </h1>
              <p className="text-center mt-12 text-[20px]">notice</p>
            </div>
            <div className="sm:border-l-0 h-16 md:h-96 md:border-l-2 border-gray-300 ">
              <h1 className="text-[30px] font-extrabold relative z-10 text-center mb-12">
                The Customer Center
                <span className="absolute bottom-1 left-0 w-[19rem] h-2 -z-10 bg-[rgba(58,216,199,255)]"></span>
              </h1>
              <ul className="text-left text-[20px]">
                <li>FAQ</li>
                <li>Simple Textbook Application</li>
                <li>Consultation Application</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
