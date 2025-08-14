const HeroSection=()=>{
    return(
        <div>
            <section style={{
                backgroundColor: "#f4f4f4",
                padding: "50px 20px",
                textAlign: "center"
                }}>
                <h1 style={{ color: "#2c3e50",fontSize: "36px", marginBottom: "20px" }}>
                    Grow Your Business with Our Digital Marketing
                </h1>
                <p style={{ fontSize: "18px", color: "#555", marginBottom: "30px" }}>
                    We help businesses boost their online presence and increase revenue through smart marketing strategies.
                </p>
                <button style={{
                    backgroundColor: "#ff7e5f",
                    color: "white",
                    padding: "10px 20px",
                    fontSize: "16px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>
                    Get Started
                </button>
            </section>
        </div>
    )
}

export default HeroSection