import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "6385856384";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const [showBookingForm, setShowBookingForm] = useState(false);
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
      setFormData({
        name: "",
        mobile: "",
        pickupDate: "",
        pickupHour: "12",
        pickupMinutes: "00",
        amPm: "AM",
        service: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 9999 }}>
      {!showBookingForm && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-end" }}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#25d366",
              color: "white",
              fontSize: "24px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            aria-label="Contact via WhatsApp"
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#128C7E")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#25d366")}
          >
            <FaWhatsapp size={30} />
          </a>

          <a
            href={`tel:+${phoneNumber}`}
            style={{
              display: "inline-block",
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#007bff",
              color: "white",
              fontSize: "24px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              textDecoration: "none",
              transition: "background-color 0.3s ease",
            }}
            aria-label="Call"
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            <FaPhoneAlt size={30} />
          </a>

          <button
            onClick={() => setShowBookingForm(true)}
            style={{
              padding: "10px 15px",
              backgroundColor: "#007bff",
              color: "white",
              fontSize: "16px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            Book Now
          </button>
        </div>
      )}

      {showBookingForm && (
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", marginTop: "10px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)", width: "350px", position: "relative" }}>
          <button
            onClick={() => setShowBookingForm(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              color: "red",
            }}
            aria-label="Close form"
          >
            <FaTimes />
          </button>

          <h3 style={{ marginBottom: "15px" }}>Book a Service</h3>
          <p style={{ marginBottom: "15px" }}>Fill in the details below, and we’ll schedule your laundry pickup.</p>

          {status === "success" && <p style={{ color: "green", fontWeight: "bold", marginBottom: "15px" }}>✅ Booking request sent successfully!</p>}
          {status === "error" && <p style={{ color: "red", fontWeight: "bold", marginBottom: "15px" }}>❌ Failed to submit request. Try again!</p>}
          {status === "invalid_mobile" && <p style={{ color: "red", fontWeight: "bold", marginBottom: "15px" }}>⚠️ Enter a valid 10-digit mobile number!</p>}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <input type="text" name="mobile" placeholder="Your Mobile Number" required value={formData.mobile} onChange={handleChange} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <input type="date" name="pickupDate" required value={formData.pickupDate} onChange={handleChange} style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Select Pickup Time</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <select name="pickupHour" value={formData.pickupHour} onChange={handleChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", flex: 1 }}>
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                <select name="pickupMinutes" value={formData.pickupMinutes} onChange={handleChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", flex: 1 }}>
                  {["00", "15", "30", "45"].map((min) => (
                    <option key={min} value={min}>{min}</option>
                  ))}
                </select>
                <select name="amPm" value={formData.amPm} onChange={handleChange} style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", flex: 1 }}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            <button type="submit">Book Now</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;