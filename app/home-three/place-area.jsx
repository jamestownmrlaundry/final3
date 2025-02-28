import React, { useState, useEffect } from "react";
import { FaTshirt, FaSprayCan, FaCogs, FaSteam, FaClipboardCheck, FaBox, FaTruck } from "react-icons/fa";

const steps = [
  {
    title: "Sorting & Inspection",
    description: "Segregation based on care label, fabric type, and color.",
    details: "Each item is carefully inspected for fabric type, color, and care label instructions to ensure the correct cleaning method is applied.",
    icon: <FaTshirt />,
  },
  {
    title: "Stain Treatment",
    description: "Italian spotting machines | German stain removal solutions.",
    details: "Specialized stain removal treatments are applied using Italian spotting machines and high-quality German stain-removing solutions.",
    icon: <FaSprayCan />,
  },
  {
    title: "Processing",
    description: "World-Renowned Italian dry cleaning machines | Eco-friendly solutions.",
    details: "Our Italian dry cleaning machines use an eco-friendly cleaning process that ensures freshness without damaging fabric quality.",
    icon: <FaCogs />,
  },
  {
    title: "Finishing",
    description: "Unique steam ironing equipment for each garment type.",
    details: "Each garment undergoes finishing using advanced steam ironing techniques to maintain its original shape and feel.",
    icon: <FaSteam />,
  },
  {
    title: "Quality Check",
    description: "Meticulous inspection of each item by experts.",
    details: "Before packaging, every item is inspected to ensure high-quality cleaning, proper stain removal, and a flawless finish.",
    icon: <FaClipboardCheck />,
  },
  {
    title: "Packing",
    description: "Folded, hanger, or vacuum packing as per preference.",
    details: "Garments are carefully packed based on customer preferences: folded, placed on hangers, or vacuum-packed for extra protection.",
    icon: <FaBox />,
  },
  {
    title: "Delivery",
    description: "Fast & secure delivery at your doorstep.",
    details: "Your cleaned and packed garments are safely delivered to your home, ensuring convenience and timely service.",
    icon: <FaTruck />,
  },
];

const LaundryProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedStep, setExpandedStep] = useState(null);
  const [blinkingStep, setBlinkingStep] = useState(0);
  const [showStepLabel, setShowStepLabel] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  // Sequential blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinkingStep((prevStep) => (prevStep + 1) % steps.length);
      setShowStepLabel(true);
      
      // Hide the step label after 1.5 seconds
      const labelTimeout = setTimeout(() => {
        setShowStepLabel(false);
      }, 1500);
      
      return () => clearTimeout(labelTimeout);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="process-container">
      <h2 className="process-title">Our Laundry Process</h2>

      {!isMobile ? (
        <div style={{backgroundColor:"B89146"}} className="timeline-container">
          <div  className="timeline-line" />
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'} ${
                activeStep === index ? 'active' : ''
              } ${blinkingStep === index ? 'blink-animation' : ''}`}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="timeline-content">
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{activeStep === index ? step.details : step.description}</p>
              </div>
              <div className="timeline-dot" />
              {blinkingStep === index && showStepLabel && (
                <div className="step-label">Step {index + 1}</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="mobile-process">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`mobile-step ${expandedStep === index ? "expanded" : ""} ${blinkingStep === index ? 'mobile-blink-animation' : ''}`}
            >
              <div className="mobile-step-number">{index + 1}</div>
              <div className="mobile-step-content">
                <div 
                  className="mobile-step-header"
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                >
                  <div className="mobile-step-title">
                    <span className="mobile-step-icon">{step.icon}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <span className="mobile-step-toggle">{expandedStep === index ? "−" : "+"}</span>
                </div>
                <div className="mobile-step-description">
                  {expandedStep === index ? step.details : step.description}
                </div>
              </div>
              {blinkingStep === index && showStepLabel && (
                <div className="mobile-step-label">Step {index + 1}</div>
              )}
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .process-container {
          padding: 40px 20px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          max-width: 100%;
          overflow-x: hidden;
        }

        .process-title {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          color: #1a1a1a;
          margin-bottom: 60px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Desktop Timeline Styles */
        .timeline-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          padding: 40px 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background: #007bff;
          top: 0;
        }

        .timeline-step {
          width: 45%;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-step.left {
          margin-right: auto;
        }

        .timeline-step.right {
          margin-left: auto;
        }

        .timeline-content {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .timeline-step.active .timeline-content {
          transform: scale(1.05);
          background: #f0f9ff;
          box-shadow: 0 8px 25px rgba(0, 123, 255, 0.2);
        }

        .timeline-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #007bff;
          border-radius: 50%;
          top: 50%;
          transition: all 0.3s ease;
        }

        .timeline-step.left .timeline-dot {
          right: -55%;
        }

        .timeline-step.right .timeline-dot {
          left: -55%;
        }

        .timeline-step.active .timeline-dot {
          transform: scale(1.5);
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
        }

        .step-number {
          position: absolute;
          top: -15px;
          background: #007bff;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-weight: bold;
        }

        .timeline-step.left .step-number {
          right: 20px;
        }

        .timeline-step.right .step-number {
          left: 20px;
        }

        .step-icon {
          font-size: 32px;
          color: #007bff;
          margin: 20px 0;
          transition: all 0.3s ease;
        }

        .timeline-step.active .step-icon {
          transform: scale(1.2);
        }

        .timeline-content h3 {
          margin: 0 0 15px;
          color: #1a1a1a;
        }

        .timeline-content p {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }

        /* Step label that appears during animation */
        .step-label {
          position: absolute;
          background: #007bff;
          color: white;
          font-weight: bold;
          padding: 8px 15px;
          border-radius: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
          animation: fadeInOut 3s ease;
        }

        .timeline-step.left .step-label {
          left: -100px;
        }

        .timeline-step.right .step-label {
          right: -100px;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }

        /* Blinking Animation for Desktop */
        @keyframes blink {
          0% { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); transform: scale(1); }
          50% { box-shadow: 0 0 25px 5px rgba(0, 123, 255, 0.5); background: #e6f2ff; transform: scale(1.05); }
          100% { box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); transform: scale(1); }
        }

        .blink-animation .timeline-content {
          animation: blink 3s ease;
        }

        .blink-animation .step-icon {
          animation: iconBlink 3s ease;
        }

        @keyframes iconBlink {
          0% { color: #007bff; transform: scale(1); }
          50% { color: #0056b3; transform: scale(1.3); }
          100% { color: #007bff; transform: scale(1); }
        }

        /* Mobile Styles */
        .mobile-process {
          max-width: 600px;
          margin: 0 auto;
          padding: 0 15px;
        }

        .mobile-step {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: all 0.4s ease;
          position: relative;
        }

        .mobile-step.expanded {
          box-shadow: 0 4px 16px rgba(0, 123, 255, 0.2);
          background: #f0f9ff;
        }

        .mobile-step-number {
          background: #007bff;
          color: white;
          font-weight: bold;
          min-width: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
        }

        .mobile-step-content {
          flex: 1;
          padding: 15px 0;
        }

        .mobile-step-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 15px;
          cursor: pointer;
        }

        .mobile-step-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-step-icon {
          color: #007bff;
          font-size: 20px;
        }

        .mobile-step-title h3 {
          margin: 0;
          font-size: 16px;
          color: #1a1a1a;
        }

        .mobile-step-toggle {
          font-size: 24px;
          color: #007bff;
        }

        .mobile-step-description {
          padding: 10px 15px 0 0;
          font-size: 14px;
          color: #666;
          line-height: 1.5;
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .expanded .mobile-step-description {
          max-height: 200px;
          padding-top: 15px;
        }

        .mobile-step-label {
          position: absolute;
          background: #007bff;
          color: white;
          font-weight: bold;
          padding: 8px 15px;
          border-radius: 20px;
          right: -10px;
          top: -15px;
          z-index: 10;
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.5);
          animation: fadeInOut 3s ease;
        }

        /* Blinking Animation for Mobile */
        @keyframes mobileBlink {
          0% { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); transform: translateY(0); }
          50% { box-shadow: 0 0 20px 2px rgba(0, 123, 255, 0.5); background: #e6f2ff; transform: translateY(-5px); }
          100% { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); transform: translateY(0); }
        }

        .mobile-blink-animation {
          animation: mobileBlink 3s ease;
        }

        .mobile-blink-animation .mobile-step-icon {
          animation: mobileIconBlink 3s ease;
        }

        @keyframes mobileIconBlink {
          0% { color: #007bff; transform: scale(1); }
          50% { color: #0056b3; transform: scale(1.3); }
          100% { color: #007bff; transform: scale(1); }
        }

        @media screen and (max-width: 768px) {
          .process-title {
            font-size: 24px;
            margin-bottom: 30px;
          }

          .timeline-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default LaundryProcess;