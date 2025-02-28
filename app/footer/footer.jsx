// Import necessary components and icons
import Image from "next/image";
import Link from "next/link";
import Social from "../socials/page";
import footerOne from "@/components/data/footerOne";
import laundryLogo from "../header/mrlaundry.png"; // Updated logo import

const Footer = () => {
  return (
    <div className="footer__area" style={{ 
      background: "linear-gradient(to bottom, #2c3e50, #1a252f)",
      color: "#f8f9fa"
    }}>
      <div className="container py-16">
        <div className="row flex justify-between">
          {/* Company Logo & Description */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <div className="footer__area-widget-about">
                <div className="footer__area-widget-about-logo  p-3 rounded-lg inline-block mb-4">
                  <Link href="/">
                    <img
                      layout="responsive"
                      src={laundryLogo}
                      alt="Company Logo"
                      width={200}
                      height={50}
                      className="drop-shadow-sm"
                    />
                  </Link>
                </div>
                <p className="text-gray-300 mb-4">{footerOne.description}</p>
                <div className="footer__area-widget-about-social">
                  <Social />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              <h5 className="text-xl font-semibold mb-6 text-white pb-2 border-b border-gray-600">Contact Details</h5>
              <div className="footer__area-widget-contact">
                {footerOne.officeInfos.map((item, index) => (
                  <div className="footer__area-widget-contact-item flex items-center mb-4" key={index}>
                    <div className="footer__area-widget-contact-item-icon mr-3 text-blue-300">
                      {item.icon}
                    </div>
                    <div className="footer__area-widget-contact-item-content">
                      <span>
                        <Link href={item.link} className="text-gray-300 hover:text-white transition-colors">{item.info}</Link>
                      </span>
                    </div>
                  </div>
                ))}

                {/* Static Address (No Map) */}
                <div className="footer__area-widget-contact-item flex items-center mb-4">
                  <div className="footer__area-widget-contact-item-icon mr-3 text-blue-300">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span className="text-gray-300">
                      Nagarcovil
                      <br />
                      <Link
                        href="https://www.google.com/maps?q=8.1486944,77.5571944"
                        target="_blank"
                        className="text-blue-300 hover:text-blue-200 transition-colors"
                      >
                        View on Google Maps
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              <h5 className="text-xl font-semibold mb-6 text-white pb-2 border-b border-gray-600">{footerOne.title_3}</h5>
              <div className="footer__area-widget-menu">
                <ul>
                  {footerOne.widgetMenus.map((item, index) => (
                    <li key={index} className="mb-3">
                      <Link aria-disabled href={item.link} className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <i className="fal fa-angle-double-right mr-2 text-blue-300"></i>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
            <div className="footer__area-widget">
              <h5 className="text-xl font-semibold mb-6 text-white pb-2 border-b border-gray-600">{footerOne.title_4}</h5>
              <div className="footer__area-widget-subscribe">
                <form action="#" className="relative">
                  <input 
                    type="text" 
                    name="email" 
                    placeholder="Email Address" 
                    className="w-full py-3 px-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition-colors text-white"
                  >
                    <i className="fal fa-hand-pointer"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright__area py-4" style={{ 
        background: "#151f2b",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
        <div className="container">
          <div className="row items-center">
            <div className="col-xl-6 col-lg-6 col-md-7 md-mb-10">
              <div className="copyright__area-left md-t-center">
                <p className="text-gray-400">
                  Copyright © 2023
                  <a href="https://themeforest.net/user/themeori/portfolio" className="mx-1 text-gray-300 hover:text-white">
                    
                  </a>
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="copyright__area-right t-right md-t-center">
                <ul className="flex space-x-4 justify-end md:justify-center">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
