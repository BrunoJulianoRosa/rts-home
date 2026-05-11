import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Image src="/assets/logo.png" alt="Roadmap to Success" width={160} height={42} />
          <p>Guiding small business journeys from survival to scale — through data, strategy, and guided execution.</p>
        </div>
        <div className="footer-col">
          <h5>Platform</h5>
          <a href="#basecamps">Business X-Ray (BXR)</a>
          <a href="#basecamps">Vision to Bottom Line</a>
          <a href="#basecamps">High Performance Framework</a>
          <a href="#basecamps">Business Accelerator</a>
        </div>
        <div className="footer-col">
          <h5>Who We Serve</h5>
          <a href="#banks">Banks &amp; Lenders</a>
          <a href="#associations">Chambers &amp; Associations</a>
          <a href="#owners">Business Owners</a>
          <a href="https://calendly.com/roadmaptosuccess">Plans &amp; Pricing</a>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <a href="#">About</a>
          <a href="mailto:explore@roadmaptosuccess.ai">Contact Us</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Roadmap to Success. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/dsbusinessconsulting" title="LinkedIn">in</a>
          <a href="https://www.instagram.com/roadmaptosuccess.ai/" title="Instagram">ig</a>
        </div>
      </div>
    </footer>
  );
}
