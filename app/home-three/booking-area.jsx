"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickupDate: "",
    pickupHour: "12",
    pickupMinutes: "00",
    amPm: "AM",
    service: "",
  });

  const [status, setStatus] = useState(null);

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

    const response = await fetch("https://formspree.io/f/manqpzgv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, pickupTime: formattedTime }),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", mobile: "", pickupDate: "", pickupHour: "12", pickupMinutes: "00", amPm: "AM", service: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="contact__section">
      <div className="contact__header">
        <h2>Reach Us</h2>
        <div className="header__underline"></div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact__form">
              <div className="form__card">
                <h3>Book a Service</h3>
                <p>Fill in the details below, and we'll schedule your laundry pickup.</p>
                {status === "success" && <p className="success-msg">✅ Booking request sent successfully!</p>}
                {status === "error" && <p className="error-msg">❌ Failed to submit request. Try again!</p>}
                {status === "invalid_mobile" && <p className="error-msg">⚠️ Enter a valid 10-digit mobile number!</p>}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <input type="text" name="mobile" placeholder="Your Mobile Number" required value={formData.mobile} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <input type="date" name="pickupDate" required value={formData.pickupDate} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label>Select Pickup Time</label>
                    <div className="time-picker">
                      <select name="pickupHour" value={formData.pickupHour} onChange={handleChange}>
                        {[...Array(12)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                      </select>
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

                  <div className="form-group">
                    <select name="service" required value={formData.service} onChange={handleChange}>
                      <option value="">Select Service</option>
                      <option value="Wash & Fold">Wash & Fold</option>
                      <option value="Wash & Iron">Wash & Iron</option>
                      <option value="Dry Cleaning">Dry Cleaning</option>
                    </select>
                  </div>

                  <button className="submit-btn" type="submit">Book Now</button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="right-content">
              <div className="map__area">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3949.535347474748!2d77.55463027500879!3d8.148692091881614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDgnNTUuMyJOIDc3wrAzMyczNS45IkU!5e0!3m2!1sen!2sin!4v1739801890915!5m2!1sen!2sin" width="100%" height="300px" style={{ border: "none", borderRadius: "10px" }} allowFullScreen loading="lazy"></iframe>
              </div>
              
              <div className="contact-info">
                <div className="info-card">
                  <h4>Contact Information</h4>
                  <ul>
                    <li>
                      <i className="fas fa-phone"></i>
                      <span>+91 6385856384</span>
                    </li>
                    <li>
                      <i className="fas fa-envelope"></i>
                      <span>info@laundryservice.com</span>
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>
                      <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
                    </li>
                  </ul>
                </div>
                
                <div className="quick-contact">
                  <h4>Quick Contact</h4>
                  <p>Need immediate assistance? Send us a message on WhatsApp or give us a call!</p>
                  <a 
  href="https://wa.me/6385856384" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="whatsapp-btn"
>
  <i className="fab fa-whatsapp"></i>
  Chat on WhatsApp
</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact__section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f6f9fc 0%, #e9f1f9 100%);
        }

        .contact__header {
          text-align: center;
          margin-bottom: 50px;
        }

        .contact__header h2 {
          font-size: 36px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .header__underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #007bff, #00bcd4);
          margin: 0 auto;
          border-radius: 2px;
        }

        .contact__form {
          background: white;
          padding: 3px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
          border: 2px solid #e1e8ed;
        }

        .form__card {
          padding: 37px;
          border-radius: 13px;
          background: white;
        }

        .contact__form:hover {
          transform: translateY(-5px);
        }

        h3 {
          font-size: 28px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 20px;
        }

        h4 {
          font-size: 20px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 15px;
        }

        p {
          font-size: 16px;
          color: #666;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .form-group {
          margin-bottom: 20px;
        }

        input, select {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e1e8ed;
          border-radius: 8px;
          font-size: 15px;
          transition: all 0.3s ease;
          background: #f8fafc;
          outline: 1px solid transparent;
        }

        input:focus, select:focus {
          border-color: #007bff;
          outline: 2px solid rgba(0, 123, 255, 0.2);
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        .time-picker {
          display: flex;
          gap: 12px;
        }

        .time-picker select {
          flex: 1;
          min-width: 80px;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(90deg, #007bff, #00bcd4);
          color: white;
          padding: 14px 25px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .submit-btn:hover {
          background: linear-gradient(90deg, #0056b3, #008ba3);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.2);
        }

        .success-msg {
          color: #00a854;
          font-weight: 600;
          padding: 12px;
          background: #f6ffed;
          border-radius: 6px;
          border: 1px solid #b7eb8f;
        }

        .error-msg {
          color: #f5222d;
          font-weight: 600;
          padding: 12px;
          background: #fff1f0;
          border-radius: 6px;
          border: 1px solid #ffa39e;
        }

        .right-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .map__area {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 2px solid #e1e8ed;
        }

        .contact-info {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .info-card, .quick-contact {
          flex: 1;
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 2px solid #e1e8ed;
        }

        .info-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .info-card ul li {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          color: #666;
        }

        .info-card ul li i {
          margin-right: 10px;
          color: #007bff;
          width: 20px;
        }

        .whatsapp-btn {
          background: #25d366;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .whatsapp-btn:hover {
          background: #128c7e;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact__section {
            padding: 60px 20px;
          }
          
          .contact__form {
            margin-bottom: 30px;
          }
          
          .contact__header h2 {
            font-size: 28px;
          }

          .contact-info {
            flex-direction: column;
          }

          .form__card {
            padding: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;