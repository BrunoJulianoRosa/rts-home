export default function Routing() {
  return (
    <section className="routing" id="routing">
      <div className="inner">
        <div className="section-eyebrow">Who We Serve</div>
        <h2 className="section-title">Built for Community.<br />Delivered With <em>Purpose.</em></h2>
        <p className="section-sub">RTS is deployed through institutional partners who are invested in small business success. Find your path.</p>
        <div className="routing-grid">
          <div className="route-card gold fade-up" id="banks">
            <div className="route-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" /><path d="M3 10h18" /><path d="M5 6l7-3 7 3" />
                <path d="M4 10v11" /><path d="M20 10v11" /><path d="M8 14v3" /><path d="M12 14v3" /><path d="M16 14v3" />
              </svg>
            </div>
            <h3>Banks &amp; Community Lenders</h3>
            <p>Strengthen your small business portfolio, satisfy CRA requirements, and generate a pipeline of 40+ pre-qualified borrowers per cohort — at zero monetary cost in Year 1.</p>
            <a href="https://calendly.com/roadmaptosuccess" className="route-link">Bank Partner Page</a>
          </div>
          <div className="route-card fade-up" id="associations">
            <div className="route-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18" /><path d="M5 21V9l7-5 7 5v12" /><path d="M9 9h6v12H9z" />
              </svg>
            </div>
            <h3>Chambers &amp; Associations</h3>
            <p>Deliver measurable member value with structured programming, peer cohorts, and outcome reporting that demonstrates your organization&apos;s economic impact to boards and funders.</p>
            <a href="https://calendly.com/roadmaptosuccess" className="route-link">Associations Page</a>
          </div>
          <div className="route-card green fade-up" id="owners">
            <div className="route-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
            <h3>Business Owners</h3>
            <p>Get the structure, tools, and guided coaching to grow with clarity and confidence — from wherever you&apos;re starting. Built for businesses between $300K and $30M.</p>
            <a href="https://calendly.com/roadmaptosuccess" className="route-link">Business Owners Page</a>
          </div>
        </div>
      </div>
    </section>
  );
}
