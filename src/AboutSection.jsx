const AboutSection = () => {
  return (
    <section className="about">
      <h2 className="about-title">About Our Company</h2>

      <div className="about-container">

        {/* Left Image */}
        <div className="about-left">
          <img src="/images/about-img.png" alt="About Us" />
        </div>

        {/* Right Content */}
        <div className="about-right">

          {/* Who We Are */}
          <div className="top-about-box-one">
            <h3>Who We Are</h3>

            <p className="about-highlight">
              We build smart digital solutions for modern businesses.
            </p>

            <div className="about-points">
              <div>💡 Innovation Driven</div>
              <div>⚡ High Performance</div>
              <div>🎯 User Focused</div>
              <div>🚀 Growth Oriented</div>
            </div>
          </div>

          {/* Our Process */}
          <div className="top-about-box-two">
            <h3>Our Process</h3>

            <div className="roadmap">
              <div className="step">Planning</div>
              <div className="arrow">→</div>

              <div className="step">Design</div>
              <div className="arrow">→</div>

              <div className="step">Development</div>
              <div className="arrow">→</div>

              <div className="step">Testing</div>
              <div className="arrow">→</div>

              <div className="step">Deploy</div>
              <div className="arrow">→</div>

              <div className="step">Support</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;