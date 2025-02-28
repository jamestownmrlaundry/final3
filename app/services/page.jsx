"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaClock, FaStar, FaTshirt, FaTable, FaTh, FaDollarSign, FaTimes } from "react-icons/fa";

const allServices = [
  {
    sno: 1,
 
    img: "/images/s3.jpeg",
    title: "Shirt Wash & Iron",
    des: "Freshly washed and ironed shirts for a crisp look.",
    time: "24",
    rating: "4.9",
    price: 40,
  },
  {
    sno: 2,
  
    
    img: "/images/saree1.jpg",
    title: "Saree Wash & Ironing",
    des: "Expert washing and ironing for your sarees.",
    time: "24",
    rating: "5.0",
    price: 140,
  },
  {
    sno: 3,
    img: "/images/polishiron.jpg",
    title: "Pattu Saree Wash, Ironing & Polishing",
    des: "Complete premium care for silk sarees including wash, ironing, and polishing.",
    time: "24",
    rating: "5.0",
    price: 350,
   
  },
  {
    sno: 4,
    img: "/images/shoe.jpg",
    title: "Shoe Cleaning",
    des: "Deep cleaning for all types of shoes to keep them fresh.",
    time: "24",
    rating: "4.7",
    price: 100,
   
  },
  {
    sno: 5,
    img: "/images/tshirttrackphants.jpg",
    title: "T-shirt, Track Pant, Shorts Wash",
    des: "Thorough wash for your casual wear.",
    time: "24",
    rating: "4.7",
    price: 10,
  },
  {
    sno: 6,
    img: "/images/tshirttrackiron.jpg",
    title: "T-shirt, Track Pant, Shorts Wash & Iron",
    des: "Complete cleaning and ironing for your casual wear.",
    time: "24",
    rating: "4.8",
    price: 20,
  },
  {
    sno: 7,
    img: "/images/pattusareeironing.jpg",
    title: "Saree Ironing",
    des: "Professional saree ironing for a flawless drape.",
    time: "24",
    rating: "4.9",
    price: 100,
  },
  {
    sno: 8,
    img: "/images/shirtiron.jpg",
    title: "Shirt Ironing",
    des: "Perfectly pressed shirts to keep you looking sharp.",
    time: "12",
    rating: "4.8",
  },
  {
    sno: 9,
    img: "/images/silksare.jpg",
    title: "Pattu Saree Ironing",
    des: "Gentle ironing to maintain the elegance of silk sarees.",
    time: "24",
    rating: "5.0",
    price: 200,
  },
  {
    sno: 10,
    img: "/images/pattusareepolish.jpg",
    title: "Pattu Saree Polishing",
    des: "Premium polishing to enhance the shine of silk sarees.",
    time: "24",
    rating: "5.0",
    price: 250,
  },
  {
    sno: 11,
    img: "/images/silksareewashiron.jpg",
    title: "Pattu Saree Wash & Ironing",
    des: "Complete care including wash and ironing for silk sarees.",
    time: "24",
    rating: "5.0",
    price: 300,
  },
  {
    sno: 12,
    img: "/images/phantiron.jpg",
    title: "Pant Ironing",
    des: "Expert ironing for wrinkle-free trousers.",
    time: "12",
    rating: "4.7",
    price: 10,
  
  },
  {
    sno: 13,
    img: "/images/phantwashandiron.jpg",
    title: "Pant Wash & Iron",
    des: "Complete cleaning and ironing for your trousers.",
    time: "24",
    rating: "4.8",
    price: 30,
  },
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [viewMode, setViewMode] = useState("card"); // "card" or "table"
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickupDate: "",
    pickupHour: "12",
    pickupMinutes: "00",
    amPm: "AM",
    service: "",
    quantity: 1,
  });
  const [status, setStatus] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "card" ? "table" : "card");
  };

  const openBookingForm = (service) => {
    setFormData({
      ...formData,
      service: service.title,
    });
    setShowBookingForm(true);
    // Close the modal if it's open
    if (selectedService) {
      setSelectedService(null);
    }
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(formData.mobile)) {
      setStatus("invalid_mobile");
      return;
    }

    const formattedTime = `${formData.pickupHour}:${formData.pickupMinutes} ${formData.amPm}`;

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setShowBookingForm(false);
        setStatus(null);
        setFormData({
          name: "",
          mobile: "",
          pickupDate: "",
          pickupHour: "12",
          pickupMinutes: "00",
          amPm: "AM",
          service: "",
          quantity: 1,
        });
      }, 2000);
    }, 1000);

    // For actual implementation, uncomment this:
    
    const response = await fetch("https://formspree.io/f/manqpzgv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, pickupTime: formattedTime }),
    });

    if (response.ok) {
      setStatus("success");
      setTimeout(() => {
        setShowBookingForm(false);
        setStatus(null);
        setFormData({
          name: "",
          mobile: "",
          pickupDate: "",
          pickupHour: "12",
          pickupMinutes: "00",
          amPm: "AM",
          service: "",
          quantity: 1,
        });
      }, 2000);
    } else {
      setStatus("error");
    }
    
  };

  return (
    <div className="page-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Image src="/logo-1.png" alt="Logo" width={90} height={80} />
          </div>
        </div>
      </nav>

      {/* Back Button and View Toggle */}
      <div className="action-container">
        <Link href="/home-three" className="back-button">
          ⬅ Back to Home
        </Link>
        <button className="view-toggle-button" onClick={toggleViewMode}>
          {viewMode === "card" ? (
            <>
              <FaTable /> Table View
            </>
          ) : (
            <>
              <FaTh /> Card View
            </>
          )}
        </button>
      </div>

      {/* Services Section */}
      <div className="container">
        <h2 className="page-title">Our Laundry Services</h2>
        
        {viewMode === "card" ? (
          <div className="service-grid">
            {allServices.length > 0 ? (
              allServices.map((service, index) => (
                <div key={index} className="service-card" onClick={() => openModal(service)}>
                  <div className="image-wrapper">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="service-image"
                    />
                  </div>
                  <div className="service-content">
                    <h4>{service.title}</h4>
                    <p>{service.des}</p>
                    <div className="service-meta">
                      <span className="meta-item">
                        <FaClock /> {service.time} hrs
                      </span>
                      <span className="meta-item">
                        <FaStar /> {service.rating}
                      </span>
                    </div>
                    <button 
                      className="quick-book-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openBookingForm(service);
                      }}
                    >
                      Quick Book
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-services">No services available.</p>
            )}
          </div>
        ) : (
          <div className="table-container">
            <table className="services-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th className="description-column">Description</th>
                  <th>Time</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allServices.map((service, index) => (
                  <tr key={index}>
                    <td>
                      <div className="table-service-info">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="table-image"
                        />
                        <span>{service.title}</span>
                      </div>
                    </td>
                    <td className="description-column">{service.des}</td>
                    <td><FaClock /> {service.time} hrs</td>
                    <td><FaStar /> {service.rating}</td>
                    <td>
                      <div className="table-actions">
                        <button  
                          className="book-now-btn"
                          onClick={() => openBookingForm(service)}
                        >
                          Book Now
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <h3>{selectedService.title}</h3>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={selectedService.img}
                  alt={selectedService.title}
                  className="modal-img"
                />
              </div>
              <div className="modal-details">
                <p className="modal-description">{selectedService.des}</p>
                <div className="modal-meta">
                  <div className="meta-box">
                    <FaClock className="meta-icon" />
                    <div>
                      <span className="meta-label">Turnaround Time</span>
                      <span className="meta-value">{selectedService.time} hours</span>
                    </div>
                  </div>
                  <div className="meta-box">
                    <FaStar className="meta-icon" />
                    <div>
                      <span className="meta-label">Customer Rating</span>
                      <span className="meta-value">{selectedService.rating}/5.0</span>
                    </div>
                  </div>
                  <div className="meta-box">
                    <FaDollarSign className="meta-icon" />
                    <div>
                      <span className="meta-label">Price</span>
                      <span className="meta-value">${selectedService.price}</span>
                    </div>
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="book-now" onClick={() => openBookingForm(selectedService)}>Book Now</button>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && (
  <div className="modal-overlay" onClick={closeBookingForm}>
    <div 
      className="booking-form-container" 
      onClick={(e) => e.stopPropagation()}
      style={{ maxHeight: "60vh", overflowY: "auto" }}
    >
      <button className="close-modal" onClick={closeBookingForm}>
        <FaTimes />
      </button>
      
      <div className="booking-form-header">
        <h3>Book a Service</h3>
        <p>Fill in your details below</p>
      </div>
      
      {status === "success" && <p className="success-msg">✅ Booking request sent successfully!</p>}
      {status === "error" && <p className="error-msg">❌ Failed to submit request. Try again!</p>}
      {status === "invalid_mobile" && <p className="error-msg">⚠️ Enter a valid 10-digit mobile number!</p>}
      
      <form onSubmit={handleSubmit} className="compact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="10-digit mobile number"
              required
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Service</label>
            <input
              type="text"
              name="service"
              value={formData.service}
              readOnly
              className="readonly-input"
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Pickup Date</label>
            <input
              type="date"
              name="pickupDate"
              required
              value={formData.pickupDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Pickup Time</label>
            <div className="time-picker">
              <select name="pickupHour" value={formData.pickupHour} onChange={handleChange}>
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <span>:</span>
              <select name="pickupMinutes" value={formData.pickupMinutes} onChange={handleChange}>
                {["00", "15", "30", "45"].map((min) => (
                  <option key={min} value={min}>{min}</option>
                ))}
              </select>
              <select name="amPm" value={formData.amPm} onChange={handleChange}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>
        
        <button className="submit-btn" type="submit">Confirm Booking</button>
      </form>
    </div>
  </div>
)}

      {/* Add responsive styles for mobile screens */}
      <style jsx>{`
        /* General styles */
        .page-container {
          padding: 0 15px;
        }
        
        /* Service grid responsive styling */
        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        
        /* Mobile responsive styling - 2 cards per row */
        @media (max-width: 991px) {
          .service-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 767px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
          
          .service-card {
            margin-bottom: 0;
          }
          
          .service-content h4 {
            font-size: 16px;
            margin-bottom: 5px;
          }
          
          .service-content p {
            font-size: 13px;
            margin-bottom: 8px;
          }
          
          .service-meta {
            font-size: 12px;
          }
          
          .action-container {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .back-button, .view-toggle-button {
            margin-bottom: 10px;
          }
          
          /* Hide description column in table view on mobile */
          .description-column {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          
          .modal-body {
            flex-direction: column;
          }
          
          .modal-image, .modal-details {
            width: 100%;
          }
          
          .form-row {
            flex-direction: column;
          }
          
          .form-group {
            width: 100%;
            margin-right: 0;
            margin-bottom: 10px;
          }
          
          /* Hide description column in table view on mobile */
          .description-column {
            display: none;
          }
          
          /* Make table more compact on small screens */
          .services-table th, .services-table td {
            padding: 8px 5px;
            font-size: 13px;
          }
          
          .table-image {
            width: 40px;
            height: 40px;
            margin-right: 5px;
          }
          
          .table-service-info span {
            font-size: 12px;
            display: block;
          }
          
          .book-now-btn {
            padding: 6px 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;