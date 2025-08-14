const About = () => {
    return (
        <div>
            <section
                id="about"
                style={{
                    padding: "50px 20px",
                    textAlign: "center",
                    color: "#333", // clean dark text
                    backgroundColor: "transparent" // no section background
                }}
            >
                <h2 style={{
                    fontSize: "2rem",
                    marginBottom: "20px",
                    color: "#2c3e50", // matches typical navbar text color
                    display: "inline-block",
                    paddingBottom: "5px"
                }}>
                    About Us
                </h2>

                <p style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    lineHeight: "1.6",
                    color: "#555"
                }}>
                    At <strong style={{ color: "#2c3e50" }}>My Digital Agency</strong>, we help businesses shine in the
                    online world. Our team of experienced marketers, designers, and
                    strategists work together to create impactful campaigns that
                    attract the right audience and drive measurable results.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "30px",
                        marginTop: "40px",
                        flexWrap: "wrap"
                    }}
                >
                    <div
                        style={{
                            background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                            backgroundColor: "transparent",
                            padding: "20px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            width: "250px",
                            color: "white"
                        }}
                    >
                        <h3>Our Mission</h3>
                        <p>
                            Empower businesses of all sizes to grow online through
                            innovative and data-driven marketing solutions.
                        </p>
                    </div>

                    <div
                        style={{
                            background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                            backgroundColor: "transparent",
                            padding: "20px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            width: "250px",
                            color: "white"
                        }}
                    >
                        <h3>Our Vision</h3>
                        <p>
                            To be the go-to digital marketing partner that drives
                            sustainable growth for brands worldwide.
                        </p>
                    </div>

                    <div
                        style={{
                            background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                            backgroundColor: "transparent",
                            padding: "20px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            width: "250px",
                            color: "white"
                        }}
                    >
                        <h3>Why Choose Us</h3>
                        <p>
                            We combine creativity, analytics, and industry expertise to
                            deliver results that matter to you.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
