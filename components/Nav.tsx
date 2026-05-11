import Image from "next/image";

export default function Nav() {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#top">
          <Image src="/assets/logo.png" alt="Roadmap to Success" width={160} height={34} />
        </a>
      </div>
      <div className="nav-links">
        <a href="#basecamps">Platform</a>
        <a href="#routing">Who We Serve</a>
        <a href="#banks">Banks</a>
        <a href="#associations">Chambers</a>
        <a href="#owners">Business Owners</a>
        <a href="https://calendly.com/roadmaptosuccess" className="nav-cta">Get Started</a>
      </div>
    </nav>
  );
}
