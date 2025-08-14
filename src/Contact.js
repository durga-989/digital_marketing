import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#eef2f3", // Softer background to match other sections
        padding: "50px 0",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          backgroundColor: "#ffffff",
          padding: "25px",
          borderRadius: "10px", // Slightly more rounded like other sections
          boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#2c3e50",
          }}
        >
          Contact Us
        </h2>
        <p style={{ textAlign: "center", color: "#666" }}>
          Fill out the form below to get in touch
        </p>

        <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label style={{ fontWeight: "bold", color: "#2c3e50" }}>Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              outline: "none",
            }}
          />

          <label style={{ fontWeight: "bold", color: "#2c3e50"}}>Email:</label>
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              outline: "none",
            }}
          />

          <label style={{ fontWeight: "bold", color: "#2c3e50" }}>Message:</label>
          <textarea
            placeholder="Your Message"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              minHeight: "80px",
              outline: "none",
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#ff7e5f", // Matches HeroSection button
              color: "white",
              fontWeight: "bold",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
