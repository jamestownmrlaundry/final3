import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
];

const LaundryServices = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [viewMode, setViewMode] = useState("card"); // State for view mode
  const [loading, setLoading] = useState(true); // Loading state
  const [imagesLoaded, setImagesLoaded] = useState({}); // Track loaded images

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Simulate initial loading delay for component
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      clearTimeout(timer);
    };
  }, []);

  // Handle image loading
  const handleImageLoad = (index) => {
    setImagesLoaded(prev => ({
      ...prev,
      [index]: true
    }));
  };

  // Loading animation for entire component
  if (loading) {
    return (
      <div className="services-section">
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading services...</p>
          </div>
        </div>
        <style jsx>{loadingStyles}</style>
      </div>
    );
  }

  return (
    <div className="services-section">
      <div className="container">
        <div className="header">
          <div className="title">
            <span className="subtitle">Premium Care</span>
            <h2>Our Laundry Services</h2>
          </div>
          <div className="view-toggle">
            <button
              className={`toggle-btn ${viewMode === "card" ? "active" : ""}`}
              onClick={() => setViewMode("card")}
            >
              Card View
            </button>
            <button
              className={`toggle-btn ${viewMode === "table" ? "active" : ""}`}
              onClick={() => setViewMode("table")}
            >
              Table View
            </button>
            <button>
              <Link href='/services'> View all </Link>
            </button>
          </div>
        </div>

        {viewMode === "card" ? (
          <div className="services-grid">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Link href="/service-details">
                  <div className="service-image">
                    {!imagesLoaded[index] && (
                      <div className="image-skeleton">
                        <div className="loading-pulse"></div>
                      </div>
                    )}
                    <motion.img
                      src={service.img}
                      alt={service.title}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onLoad={() => handleImageLoad(index)}
                      style={{ display: imagesLoaded[index] ? 'block' : 'none' }}
                    />
                  </div>
                </Link>
                <div className="service-content">
                  <h4>{service.title}</h4>
                  <p>{service.des}</p>
                  <div className="service-meta">
                    <span className="time">⏳ {service.time}</span>
                    <span className="rating">⭐ {service.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="services-table"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Description</th>
                  <th>Time</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {allServices.map((service, index) => (
                  <tr key={index}>
                    <td>{service.title}</td>
                    <td>{service.des}</td>
                    <td>{service.time}</td>
                    <td>⭐ {service.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

        .services-section {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 4rem 0;
          text-align: center;
          font-family: "Poppins", sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 1rem;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .title {
          text-align: left;
        }

        .subtitle {
          color: #3498db;
          font-size: 1rem;
          font-weight: 600;
        }

        .title h2 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin: 0;
        }

        .view-toggle {
          display: flex;
          gap: 1rem;
        }

        .toggle-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #2c3e50;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }

        .toggle-btn.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }

        .toggle-btn:hover {
          background: #3498db;
          color: white;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          justify-items: center;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: left;
          max-width: 320px;
          transition: 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
        }

        .service-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .service-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .image-skeleton {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #e0e0e0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .loading-pulse {
          width: 30%;
          height: 30%;
          border-radius: 50%;
          background-color: #cccccc;
          animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { opacity: 0.6; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.6; transform: scale(0.8); }
        }

        .service-content {
          padding: 1.5rem;
        }

        .service-content h4 {
          font-size: 1.25rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }

        .service-content p {
          font-size: 1rem;
          color: #7f8c8d;
          margin-bottom: 1rem;
        }

        .service-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.9rem;
          color: #7f8c8d;
        }

        .services-table {
          width: 100%;
          overflow-x: auto;
          margin-top: 2rem;
        }

        .services-table table {
          width: 100%;
          border-collapse: collapse;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .services-table th,
        .services-table td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          color: #2c3e50;
        }

        .services-table th {
          background: rgba(255, 255, 255, 0.2);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            text-align: center;
          }

          .title {
            margin-bottom: 1rem;
          }

          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>

      <style jsx>{loadingStyles}</style>
    </div>
  );
};

// Separate loading styles for organization
const loadingStyles = `
  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 100%;
  }

  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid rgba(52, 152, 219, 0.2);
    border-radius: 50%;
    border-top-color: #3498db;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  .loading-container p {
    color: #2c3e50;
    font-size: 1.2rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default LaundryServices;