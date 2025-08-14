const Footer = () => {
  return (
    <footer style={{
      background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // matching navbar gradient
      color: "white",
      padding: "40px 20px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      textAlign: "left"
    }}>
      
      {/* Column 1 - Logo & Tagline */}
      <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
        <div style={{display:"flex"}}>
            <img
                            src="/logo.jpg"
                            alt="Logo"
                            style={{
                                height: "60px",
                                marginRight: "15px",
                                borderRadius: "8px",
                                border: "2px solid white"
                            }}
                        />
            <h2 style={{ color: "#fff", marginBottom: "10px" }}>My Digital Agency</h2>
        </div>
        <p style={{ color: "#f8f8f8" }}>
          Empowering businesses with creative digital solutions.
        </p>
      </div>

      {/* Column 2 - Quick Links */}
      <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
        <h4 style={{ marginBottom: "10px", color: "#fff" }}>Quick Links</h4>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
          <li><a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a></li>
          <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
          <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
        </ul>
      </div>

      {/* Column 3 - Contact Info */}
      <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
        <h4 style={{ marginBottom: "10px", color: "#fff" }}>Contact Us</h4>
        <p>Email: contact@myagency.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Hyderabad, India</p>
      </div>

      {/* Bottom Bar */}
      <div style={{
        width: "100%",
        textAlign: "center",
        marginTop: "20px",
        borderTop: "1px solid rgba(255,255,255,0.3)",
        paddingTop: "10px",
        color: "white",
        fontSize: "14px"
      }}>
        © {new Date().getFullYear()} My Digital Agency | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
