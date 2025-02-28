import Image from "next/image";
import Link from "next/link";
import  allServices  from "../home-three/deluxe"; // Correct import (with named export)

const ServicesPage = () => {
  return (
    <div className="container">
      <h2>All Laundry Services</h2>
      <div className="row">
        {allServices && allServices.length > 0 ? (
          allServices.map((service, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 mt-30">
              <div className="deluxe__two-item">
                <div className="deluxe__two-item-image">
                  <Image src={service.img} alt={service.title} width={500} height={500} />
                </div>
                <div className="deluxe__two-item-content">
                  <span>${service.price}/Service</span>
                  <h4>{service.title}</h4>
                  <p>{service.des}</p>
                </div>
              </div>  
            </div>
          ))
        ) : (
          <p>No services available.</p>
        )}
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default ServicesPage;
