const Navbar = () => {
    return (
        <div>
            <nav style={{
                background: "linear-gradient(90deg, #ff7e5f, #feb47b)", // gradient background
                padding: "10px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
            }}>
                {/* Left side - Logo */}
                <div style={{ display: "flex", alignItems: "center" }}>
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
                    <h2 style={{ margin: 0, color: "#fff" }}>My Digital Agency</h2>
                </div>

                {/* Right side - Menu links */}
                <div style={{ marginRight: "100px" }}>
                    <a href="#home" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Home</a>
                    <a href="#services" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Services</a>
                    <a href="#about" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>About</a>
                    <a href="#contact" style={{ color: "white", textDecoration: "none", margin: "0 10px" }}>Contact</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
