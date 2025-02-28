import Image from "next/image";
import Link from "next/link";
import shirtironimg from "./images/shirtiron.jpg"; // Importing local image

const laundryServices = [
  {
    img: shirtironimg, // Using imported local image
    title: "Dry Cleaning",
    price: "15",
    des: "Professional dry cleaning to keep your clothes fresh and spotless.",
    time: "24",
    rating: "4.8",
  },
  {
    img: shirtironimg,
    title: "Ironing & Pressing",
    price: "10",
    des: "Crisp and wrinkle-free clothes with our expert ironing services.",
    time: "12",
    rating: "4.7",
  },
  {
    img: shirtironimg,
    title: "Wash & Fold",
    price: "12",
    des: "Convenient washing and folding services for all fabric types.",
    time: "24",
    rating: "4.9",
  },
  {
    img: shirtironimg,
    title: "Stain Removal",
    price: "20",
    des: "Effective stain removal treatment for stubborn marks and spots.",
    time: "6",
    rating: "4.6",
  },
];

const AllServices = () => {
  return (
    <div className="deluxe__two section-padding" id="services">
      <div className="container">
        <div className="row align-items-end mb-30">
          <div className="col-xl-6 col-md-8">
            <div className="deluxe__two-title md-mb-40">
              <span className="subtitle__one">Premium Care</span>
              <h2>Our Laundry Services</h2>
            </div>
          </div>
          <div className="col-xl-6 col-md-4">
            <div className="deluxe__two-btn t-right md-t-left">
              <Link className="theme-border-btn" href="/services">
                View All Services<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>3
          
        </div>
        <div className="row">
          {laundryServices.map((service, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 mt-30">
              <div className="deluxe__two-item">
                <div className="deluxe__two-item-image">
                  <Link href="/service-details">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={500}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="deluxe__two-item-content">
                  <span>${service.price}/Service</span>
                  <h4>
                    <Link href="/service-details">{service.title}</Link>
                  </h4>
                  <p>{service.des}</p>
                  <div className="deluxe__two-item-content-meta">
                    <ul>
                      <li>
                        <i className="fal fa-clock"></i> {service.time} hrs
                      </li>
                      <li>
                        <i className="fas fa-star"></i> {service.rating} Rating
                      </li>
                    </ul>
                  </div>
                  <div className="deluxe__two-item-content-bottom">
                    <Link className="simple-btn" href="/service-details">
                      <i className="far fa-chevron-right"></i> Read More
                    </Link>
                    <p>
                      <i className="fas fa-users"></i> 1.5k+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
