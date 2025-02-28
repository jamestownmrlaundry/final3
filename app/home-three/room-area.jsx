import React from 'react';
import { FaTshirt, FaCheckCircle, FaUsers, FaTruck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Heading = ({ title, subtitle }) => (
  <div style={headingContainerStyle}>
    <motion.h2 
      style={headingStyle}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <motion.div 
      style={accentLineStyle}
      initial={{ width: 0 }}
      whileInView={{ width: '80px' }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    ></motion.div>
    <motion.span 
      style={subtitleStyle}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {subtitle}
    </motion.span>
  </div>
);

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

// Updated Styles with professional colors and refined design
const laundryAreaStyle = {
  padding: '80px 0',
  backgroundColor: '#f8f9fa',
  fontFamily: "'Roboto', sans-serif",
  color: '#333',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
};

const headingContainerStyle = {
  textAlign: 'left',
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '42px',
  fontWeight: '700',
  color: '#2c3e50',
  marginBottom: '15px',
  fontFamily: "'Montserrat', sans-serif",
  letterSpacing: '1px',
  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
};

const subtitleStyle = {
  fontSize: '24px',
  color: '#3498db',
  fontWeight: '600',
  fontFamily: "'Open Sans', sans-serif",
};

const descriptionStyle = {
  fontSize: '18px',
  color: '#555',
  marginBottom: '35px',
  listStyle: 'none',
  padding: 0,
  lineHeight: '1.8',
  fontFamily: "'Roboto', sans-serif",
};

const offerContainerStyle = {
  display: 'flex',
  gap: '25px',
  flexWrap: 'wrap',
  marginTop: '30px',
};

const offerCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '25px',
  borderRadius: '15px',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  width: 'calc(50% - 12.5px)',
  background: '#ffffff',
  textAlign: 'center',
  transition: 'all 0.4s ease-in-out',
  color: '#2c3e50',
  border: '2px solid #e9ecef',
};

const offerItemTextStyle = {
  fontSize: '20px',
  fontWeight: '600',
  marginTop: '15px',
  fontFamily: "'Montserrat', sans-serif",
};

const iconStyle = {
  fontSize: '45px',
  color: '#3498db',
};

const imageContainerStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

const imageStyle = {
  width: '80%',
  height: 'auto',
  borderRadius: '15px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  border: '2px solid #e9ecef',
};

const accentLineStyle = {
  height: '4px',
  backgroundColor: '#3498db',
  width: '80px',
  marginBottom: '15px',
  borderRadius: '10px',
};

const bottomLineStyle = {
  height: '4px',
  backgroundColor: '#3498db',
  margin: '40px 0',
  borderRadius: '10px',
};

const additionalPoints = [
  'Eco-friendly washing methods',
  'Quick turnaround time',
  'State-of-the-art laundry equipment',
  'Affordable pricing with no hidden costs',
];

const LaundryServices = () => {
  return (
    <motion.div 
      style={laundryAreaStyle}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <Heading
              title="Premium Laundry Services"
              subtitle="Free Pickup & Delivery"
            />
            <motion.ul 
              style={descriptionStyle}
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.li variants={itemVariant}><strong>Enjoy a 10% Discount</strong> on your first order! 🎉</motion.li>
              <motion.li variants={itemVariant}><strong>Trusted by over 10,000 Customers</strong> for exceptional service! ⭐</motion.li>
              <motion.li variants={itemVariant}>We handle your garments with the utmost care! 👑</motion.li>
              {additionalPoints.map((point, index) => (
                <motion.li key={index} variants={itemVariant}>🌟 {point}</motion.li>
              ))}
            </motion.ul>

            <motion.div 
              style={offerContainerStyle}
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { icon: <FaTshirt style={iconStyle} />, text: 'Premium Quality Service' },
                { icon: <FaCheckCircle style={iconStyle} />, text: '100% Satisfaction Guarantee' },
                { icon: <FaUsers style={iconStyle} />, text: '10,000+ Satisfied Customers' },
                { icon: <FaTruck style={iconStyle} />, text: 'Free Doorstep Service' }
              ].map((offer, index) => (
                <motion.div
                  key={index}
                  style={{ ...offerCardStyle }}
                  variants={cardVariant}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
                    borderColor: '#3498db'
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4, type: "spring" }}
                    viewport={{ once: true }}
                  >
                    {offer.icon}
                  </motion.div>
                  <motion.h5 
                    style={offerItemTextStyle}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {offer.text}
                  </motion.h5>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <motion.div 
              style={imageContainerStyle} 
              className="image-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.3,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="/img/offerflat.jpg" 
                alt="Laundry Service" 
                style={imageStyle}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                  rotate: 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div 
        style={bottomLineStyle}
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      ></motion.div>

      <style>
        {`
          @media (max-width: 768px) {
            .image-container {
              display: none;
            }
          }
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&family=Roboto:wght@400;500&display=swap');
        `}
      </style>
    </motion.div>
  );
};

export default LaundryServices;