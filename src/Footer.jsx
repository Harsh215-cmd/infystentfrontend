const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col">
          <h3>InfyStent</h3>
          <p>
            We provide modern IT solutions to help businesses grow faster
            with technology and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>SEO Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: contact@infystent.com</p>
          <p>Phone: +91 8788375564</p>
          <p>Pune, India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 InfyStent. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;