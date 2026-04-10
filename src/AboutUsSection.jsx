const AboutUsSection = () => {
  return (
    <section className="about">

      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">
          <h1>We Build Smart Digital Solutions</h1>

          <p>
            We help businesses grow with modern technology and innovative ideas.
            Our focus is on performance, scalability, and user experience to
            deliver impactful digital products.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        {/* RIGHT MOBILE */}
        <div className="about-right">

          <div className="phone">

            {/* Top Camera + Speaker */}
            <div className="notch">
              <div className="camera"></div>
              <div className="speaker"></div>
            </div>

            {/* Messages */}
            <div className="msg left msg1">Fast Development</div>
            <div className="msg right msg2">Modern UI</div>
            <div className="msg left msg3">Secure System</div>
            <div className="msg right msg4">Scalable Apps</div>
            <div className="msg left msg5">24/7 Support</div>

            {/* Bottom Buttons */}
            <div className="phone-bottom">
              <div className="square"></div>
              <div className="circle"></div>
              <div className="arrow">➜</div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AboutUsSection;