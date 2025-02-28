import React, { useState } from "react";
import { Blog, Home, Page, Room } from "./Menu";
import Social from "../socials/page";
import Link from "next/link";
import DropDown from "./Down";
import laundrylogo from "./mrlaundry.png"; // Import Laundry Logo
import Banner from "../home-three/banner";

const HeaderThree = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="header__sticky">
        <div className="header__area two">
          <div className="container custom__container">
            <div className="header__area-menubar">
              <div className="header__area-menubar-left">
                <div className="header__area-menubar-left-logo">
                  {/* Set Laundry Logo */}
                  <Link href="/">
                    <img style={{width:'90px'}} src={laundrylogo.src} alt="Laundry Logo" />
                  </Link>
                  <div className="responsive-menu"></div>
                </div>
              </div>
              <div className="header__area-menubar-right">
                <div className="header__area-menubar-right-info">
                  <span>
                    <a>
                      <i className="fal fa-map-marker-alt"></i>6385856384 James town
                      
                    </a>
                  </span>
                </div>
                <div className="header__area-menubar-right-sidebar">
                <div className="header__area-menubar-right-info">
                  <span>
                    <a>
                      <i className="fal fa-map-marker-alt"></i>Take a Look
                      
                    </a>
                  </span>
                </div>
                </div>
                {/* Menu Sidebar Area */}
                <div
                  className={`header__area-menubar-right-sidebar-popup two ${
                    sidebarOpen ? "active" : ""
                  }`}
                >
                  <div
                    className="sidebar-close-btn"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <i className="fal fa-times"></i>
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-logo">
                    <Link href="/">
                      <img src={laundrylogo.src} alt="Laundry Logo" />
                    </Link>
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-menu">
                    <ul className="side__menu">
                      <li className="menu-item-has-children">
                        <a href="#">Home</a>
                 
                        <ul className="sub-menu">
                          <Banner />
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages</a>
                      
                        <ul className="sub-menu">
                          <Page />
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Room</a>
                        <DropDown />
                        <ul className="sub-menu">
                          <Room />
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog</a>
                        <DropDown />
                        <ul className="sub-menu">
                          <Blog />
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header__area-menubar-right-sidebar-popup-bottom">
                    <p>
                      Copyright © 2023{" "}
                      <a href="https://themeforest.net/user/themeori/portfolio">
                        ThemeOri
                      </a>{" "}
                      Website by <a href="index.html">Hostily</a>
                    </p>
                    <div className="header__area-menubar-right-sidebar-popup-social">
                      <Social />
                    </div>
                  </div>
                </div>
                <div
                  className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderThree;
