import React, { useState } from "react";

const BookingModal = ({ closeModal }) => {
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
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeModal}>✖</button>
        <h3>Book a Service</h3>
        <p>Fill in the details below, and we’ll schedule your laundry pickup.</p>
        
        {status === "success" && <p className="success-msg">✅ Booking request sent successfully!</p>}
        {status === "error" && <p className="error-msg">❌ Failed to submit request. Try again!</p>}
        {status === "invalid_mobile" && <p className="error-msg">⚠️ Enter a valid 10-digit mobile number!</p>}

        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <input type="text" name="mobile" placeholder="Your Mobile Number" required value={formData.mobile} onChange={handleChange} />
          <input type="date" name="pickupDate" required value={formData.pickupDate} onChange={handleChange} />

          <label>Select Pickup Time</label>
          <div className="time-picker">
            <select name="pickupHour" value={formData.pickupHour} onChange={handleChange}>
              {[...Array(12)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </select>
            <select name="pickupMinutes" value={formData.pickupMinutes} onChange={handleChange}>
              {["00", "15", "30", "45"].map((min) => <option key={min} value={min}>{min}</option>)}
            </select>
            <select name="amPm" value={formData.amPm} onChange={handleChange}>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>

          <select name="service" required value={formData.service} onChange={handleChange}>
            <option value="">Select Service</option>
            <option value="Wash & Fold">Wash & Fold</option>
            <option value="Wash & Iron">Wash & Iron</option>
            <option value="Dry Cleaning">Dry Cleaning</option>
          </select>

          <button className="submit-btn" type="submit">Book Now</button>
        </form>
      </div>

      <style jsx>{`
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; z-index: 10000; }
        .modal { background: white; padding: 30px; border-radius: 10px; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2); position: relative; width: 90%; max-width: 400px; }
        .close-btn { position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 20px; cursor: pointer; }
        h3 { font-size: 24px; margin-bottom: 10px; }
        p { font-size: 16px; margin-bottom: 20px; }
        input, select { width: 100%; padding: 10px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 5px; }
        .submit-btn { background: #007bff; color: white; padding: 10px 15px; border: none; border-radius: 5px; cursor: pointer; }
        .submit-btn:hover { background: #0056b3; }
        .success-msg { color: green; font-weight: bold; }
        .error-msg { color: red; font-weight: bold; }
        .time-picker { display: flex; gap: 10px; }
      `}</style>
    </div>
  );
};

export default BookingModal;
