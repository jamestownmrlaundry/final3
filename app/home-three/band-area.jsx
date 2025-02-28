"use client";
import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const faqs = [
  {
    question: "What services does Mr. Laundry offer?",
    answer: "We provide dry cleaning, stain removal, steam ironing, and premium laundry services using eco-friendly solutions.",
  },
  {
    question: "How long does it take for laundry service?",
    answer: "Standard laundry takes 24-48 hours. Express service is available for same-day delivery at an extra charge.",
  },
  {
    question: "Do you offer pickup and delivery?",
    answer: "Yes! We offer free pickup and delivery services for your convenience. Just schedule a time that suits you.",
  },
  {
    question: "What fabrics do you handle?",
    answer: "We handle all types of fabrics including silk, wool, cotton, linen, and delicate designer garments.",
  },
  {
    question: "Are your cleaning solutions eco-friendly?",
    answer: "Yes! We use non-toxic, biodegradable cleaning agents that are safe for your clothes and the environment.",
  },
  {
    question: "Can I track my laundry order?",
    answer: "Absolutely! We provide a tracking system so you can check the status of your order in real time.",
  },
  {
    question: "Do you offer stain removal services?",
    answer: "Yes! Our expert team specializes in removing tough stains from clothes using advanced cleaning techniques.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via phone, email, or WhatsApp. Our team is available 24/7 to assist you.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.1
      }
    }
  };

  return (
    <div className="page-wrapper">
      <motion.div 
        className="faq-container"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className="faq-header" variants={headerVariants}>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know about our services</p>
        </motion.div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`faq-item ${openIndex === index ? "active" : ""}`}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <FaChevronDown className="faq-icon" />
                </motion.div>
              </button>
              {/* Fixed animation by simplifying it and ensuring content is visible */}
              <div 
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                <div className="answer-padding">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=DM+Sans:wght@400;500;700&display=swap');

        .page-wrapper {
          min-height: 100vh;
          width: 100%;
          padding: 40px 20px;
          background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .faq-container {
          max-width: 900px;
          width: 100%;
          margin: auto;
          padding: 60px 24px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .faq-header {
          text-align: center;
          margin-bottom: 40px; /* Reduced from 50px */
        }

        .faq-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 42px;
          font-weight: 700;
          color: white;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .faq-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px; /* Reduced from 16px */
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          /* Glossy effect */
          position: relative;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }

        /* Glossy shine effect */
        .faq-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.7s ease;
          z-index: 1;
          pointer-events: none;
        }

        .faq-item:hover::before {
          left: 150%;
        }

        .faq-item.active {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 20px 24px; /* Slightly reduced padding */
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
        }

        .faq-item:hover .faq-question {
          color: rgba(255, 255, 255, 1);
        }

        .faq-icon {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        .active .faq-icon {
          transform: rotate(180deg);
        }

        /* Fixed animation */
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out;
        }

        .faq-answer.open {
          max-height: 300px; /* This allows enough space for the content */
          transition: max-height 0.5s ease-in;
        }

        .answer-padding {
          padding: 0 24px 20px;
        }

        .faq-answer p {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        @media (max-width: 768px) {
          .page-wrapper {
            padding: 20px;
          }

          .faq-container {
            padding: 40px 16px;
          }

          .faq-title {
            font-size: 32px;
          }

          .faq-question {
            padding: 18px 20px;
            font-size: 16px;
          }

          .answer-padding {
            padding: 0 20px 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQSection;