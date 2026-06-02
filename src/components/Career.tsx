import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>NEW RC PET STORE</h5>
              </div>
              <h3>2020 – Present</h3>
            </div>
            <p>
              Scaled a pet care retail business through performance marketing, paid ads, A/B testing, Shopify optimization, FMCG partnerships, and AI automation workflows for customer communication and content scheduling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founders Intern</h4>
                <h5>Zoomies Pet Care</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Supported founders on business strategy, product development, brand positioning, product pitching, and market-gap research in the pet care segment. Contributed consumer insight and early-stage go-to-market thinking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Marketing Intern</h4>
                <h5>Brewapps LLC</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Created AI-powered social media content for SaaS products, managed brand interactions, researched AI marketing trends, and produced image and video assets using generative AI tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
