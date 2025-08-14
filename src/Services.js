const Services = () => {
    return (
        <div>
            <section 
                id="services" 
                style={{ 
                    padding: '40px', 
                    textAlign: 'center', 
                    background: "#fff" 
                }}
            >
                <h2 style={{ 
                    color: "#2c3e50",
                    fontSize: "28px", 
                    marginBottom: "10px" 
                }}>
                    Our Services
                </h2>
                <p style={{ color: "#555" }}>
                    We provide a wide range of digital marketing services to help your business grow.
                </p>
                
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-around', 
                    marginTop: '30px', 
                    flexWrap: 'wrap' 
                }}>
                    
                    <div style={{ 
                        width: '250px', 
                        padding: '20px', 
                        border: '1px solid #ccc', 
                        borderRadius: '10px', 
                        background: "linear-gradient(90deg, #ff7e5f, #feb47b)", 
                        color: "white",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
                    }}>
                        <h3>SEO Optimization</h3>
                        <p>Improve your search rankings and drive more organic traffic to your website.</p>
                    </div>

                    <div style={{ 
                        width: '250px', 
                        padding: '20px', 
                        border: '1px solid #ccc', 
                        borderRadius: '10px', 
                        background: "linear-gradient(90deg, #ff7e5f, #feb47b)", 
                        color: "white",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
                    }}>
                        <h3>Social Media Marketing</h3>
                        <p>Engage your audience and build brand awareness on social media platforms.</p>
                    </div>

                    <div style={{ 
                        width: '250px', 
                        padding: '20px', 
                        border: '1px solid #ccc', 
                        borderRadius: '10px', 
                        background: "linear-gradient(90deg, #ff7e5f, #feb47b)", 
                        color: "white",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)" 
                    }}>
                        <h3>Pay-Per-Click Ads</h3>
                        <p>Reach your ideal customers quickly with targeted paid ads.</p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services;
