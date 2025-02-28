"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, Table } from "lucide-react";

const allServices = [
  {
    img: "/images/shirtiron.jpg",
    title: "Shirt Ironing",
    des: "Perfectly pressed shirts to keep you looking sharp.",
    time: "12",
    rating: "4.8",
  },
  {
    img: "/images/phantiron.jpg",
    title: "Shirt Wash & Iron",
    des: "Freshly washed and ironed shirts for a crisp look.",
    time: "24",
    rating: "4.9",
  },
  {
    img: "/images/shirtiron.jpg",
    title: "Pant Ironing",
    des: "Expert ironing for wrinkle-free trousers.",
    time: "12",
    rating: "4.7",
  },
  {
    img: "/images/phantiron.jpg",
    title: "Pant Wash & Iron",
    des: "Complete cleaning and ironing for your trousers.",
    time: "24",
    rating: "4.8",
  },
];

const Homeservice = () => {
  const [viewMode, setViewMode] = useState("card");

  return (
    <div className="page-wrapper">
      <motion.div
        className="services-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="services-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="header-content">
            <h2 className="services-title">Our Services</h2>
            <p className="services-subtitle">Professional Laundry & Dry Cleaning Services</p>
          </div>
          <div className="view-toggle">
            <button
              className={`toggle-btn ${viewMode === "card" ? "active" : ""}`}
              onClick={() => setViewMode("card")}
            >
              <Grid size={20} />
              <span>Card View</span>
            </button>
            <button
              className={`toggle-btn ${viewMode === "table" ? "active" : ""}`}
              onClick={() => setViewMode("table")}
            >
              <Table size={20} />
              <span>Table View</span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === "card" ? (
            <motion.div
              className="services-grid"
              key="card-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {allServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <div className="card-image">
                    <img src={service.img} alt={service.title} />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-description">{service.des}</p>
                    <div className="service-details">
                      <span className="service-time">⏱ {service.time} hours</span>
                      <span className="service-rating">⭐ {service.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="table-container"
              key="table-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <table className="services-table">
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
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    >
                      <td>{service.title}</td>
                      <td>{service.des}</td>
                      <td>⏱ {service.time} hours</td>
                      <td>⭐ {service.rating}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        .page-wrapper {
          min-height: 100vh;
          width: 100%;
          padding: 40px 20px;
          background: linear-gradient(135deg, #2D3748 0%, #1A202C 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .services-container {
          max-width: 1600px;
          width: 100%;
          margin: auto;
          padding: 40px;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .services-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .services-title {
          font-size: 42px;
          color: white;
          margin: 0;
          font-weight: 700;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .services-subtitle {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.8);
          margin: 8px 0 0 0;
        }

        .view-toggle {
          display: flex;
          gap: 12px;
        }

        .toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: rgba(255, 255, 255, 0.08);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .toggle-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-2px);
        }

        .toggle-btn.active {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          padding: 20px 0;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .service-card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .card-image {
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .service-card:hover .card-image img {
          transform: scale(1.08);
        }

        .card-content {
          padding: 28px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 24px;
          color: white;
          margin: 0 0 12px 0;
          font-weight: 600;
        }

        .card-description {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 20px 0;
          line-height: 1.6;
          flex-grow: 1;
        }

        .service-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .service-time,
        .service-rating {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
        }

        .table-container {
          width: 100%;
          overflow: hidden;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .services-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          color: white;
        }

        .services-table th,
        .services-table td {
          padding: 20px;
          text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .services-table th {
          background: rgba(255, 255, 255, 0.08);
          font-weight: 600;
          font-size: 16px;
        }

        .services-table td {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.9);
        }

        @media (max-width: 1400px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-container {
            padding: 20px;
          }

          .services-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .services-title {
            font-size: 32px;
          }

          .services-subtitle {
            font-size: 18px;
          }

          .table-container {
            overflow-x: auto;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .card-content {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Homeservice;