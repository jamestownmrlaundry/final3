"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseSection = () => {
  const features = [
    {
      icon: "🌟",
      title: "Premium Quality",
      description: "We use advanced cleaning techniques and premium detergents to ensure your clothes get the best care possible."
    },
    {
      icon: "⚡",
      title: "Express Service",
      description: "Get your clothes back in as little as 24 hours with our express laundry and dry cleaning services."
    },
    {
      icon: "🚚",
      title: "Free Pickup & Delivery",
      description: "Enjoy complimentary doorstep pickup and delivery services at your preferred time slots."
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Experience premium laundry services at prices that won't break the bank. We offer the best value for your money."
    },
    {
      icon: "🌿",
      title: "Eco-Friendly",
      description: "We use environmentally friendly cleaning products and processes to protect both your clothes and the planet."
    },
    {
      icon: "👕",
      title: "Fabric Expertise",
      description: "Our experts handle different fabric types with specialized care to maintain their quality and longevity."
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <div className="why-choose-section">
      <div className="section-header">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Mr. Laundry
        </motion.h2>
        <div className="header-underline"></div>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience the difference with our premium laundry services
        </motion.p>
      </div>

      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              className="feature-card" 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="stats-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="stats-section">
            {stats.map((stat, index) => (
              <motion.div 
                className="stat-card" 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div 
                  className="stat-number"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        
      </div>

      <style jsx>{`
        .why-choose-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f0f7ff 0%, #e6f3ff 100%);
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 36px;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .header-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          margin: 15px auto;
          border-radius: 2px;
        }

        .subtitle {
          font-size: 18px;
          color: #4a5568;
          max-width: 600px;
          margin: 0 auto;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.9);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 2px solid transparent;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.15);
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 22px;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 15px;
        }

        .feature-card p {
          font-size: 16px;
          color: #4a5568;
          line-height: 1.6;
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin: 60px 0;
          padding: 40px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          border-radius: 15px;
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);
        }

        .stat-card {
          text-align: center;
          color: white;
          padding: 20px;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }

        .stat-card:last-child {
          border-right: none;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 18px;
          opacity: 0.9;
        }

        .cta-section {
          text-align: center;
          margin-top: 60px;
          padding: 60px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
        }

        .cta-content h3 {
          font-size: 28px;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 20px;
        }

        .cta-content p {
          font-size: 18px;
          color: #4a5568;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-button {
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          color: white;
          padding: 15px 40px;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .cta-button:hover {
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 768px) {
          .why-choose-section {
            padding: 60px 20px;
          }

          .section-header h2 {
            font-size: 28px;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .stats-section {
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
          }

          .stat-card {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            padding: 15px;
          }

          .stat-card:nth-last-child(-n+2) {
            border-bottom: none;
          }

          .cta-section {
            padding: 40px 20px;
          }

          .feature-card {
            padding: 20px;
          }
        }

        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .stats-section {
            grid-template-columns: 1fr;
          }

          .stat-card {
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .stat-card:last-child {
            border-bottom: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-card, .cta-button {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default WhyChooseSection;