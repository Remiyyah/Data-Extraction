import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Revolutionize Workplace Communication</h1>
          <p className="hero-description">
            Analyze communication velocity and sentiment while ensuring privacy and security.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      {/* Privacy Solutions Section */}
      <section className="privacy-solutions">
        <h2 className="section-title">How We Ensure Privacy</h2>
        <div className="solutions-grid">
          <div className="solution-card">
            <h3>Legal Contracts</h3>
            <p>
              We use legally binding contracts to ensure transparency and compliance with data protection laws.
            </p>
          </div>
          <div className="solution-card">
            <h3>Department Restrictions</h3>
            <p>
              Only analyze less sensitive departments like Marketing, Sales, and IT. Exclude HR, Finance, and C-Suite by default.
            </p>
          </div>
          <div className="solution-card">
            <h3>Anonymizer Tool</h3>
            <p>
              Data is anonymized using a scrubbing tool hosted on your servers, ensuring no identifiable information is exposed.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Monitoring Section */}
      <section className="ongoing-monitoring">
        <h2 className="section-title">Continuous Insights</h2>
        <div className="monitoring-content">
          <p>
            This tool provides ongoing monitoring of employee activity, giving you real-time insights into communication patterns.
          </p>
          <p>
            With work-from-home becoming the norm, this tool helps you stay connected and informed without compromising privacy.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Sentiment Analysis</h3>
            <p>
              Understand the tone of communication with advanced sentiment analysis.
            </p>
          </div>
          <div className="feature-card">
            <h3>Communication Velocity</h3>
            <p>
              Measure response times and message frequency to optimize workflows.
            </p>
          </div>
          <div className="feature-card">
            <h3>Anonymized Data</h3>
            <p>
              Analyze anonymized data to ensure privacy while gaining valuable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2 className="cta-title">Ready to Transform Your Workplace?</h2>
        <button className="cta-button">Explore Analytics</button>
      </section>
    </div>
  );
};

export default Home;