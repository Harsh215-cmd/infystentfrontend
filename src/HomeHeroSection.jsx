const HomeHeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-left">
          <h1>
            Build Smart Digital Solutions for Your Business
          </h1>

          <p>
            We create modern, scalable, and high-performing web applications. <br />
            Our team helps startups and businesses grow digitally. <br />
            From idea to deployment — we handle everything.
          </p>

          <ul>
            <li>✔️ Custom Web Development</li>
            <li>✔️ Fast & Responsive Design</li>
            <li>✔️ Secure & Scalable Solutions</li>
            <li>✔️ 24/7 Support & Maintenance</li>
          </ul>

          <div className="hero-btn">
            <button className="btn1">Contact us</button>
            <button className="btn2" >Explore More</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-right">
          <img 
            src="/images/hero-img.png" 
            alt="IT Company Services" 
          />
        </div>

      </div>
    </section>
  );
};

export default HomeHeroSection;