import React from 'react';

function ProjectItem({ category, imageUrl, title, description }) {
  return (
    <div className={`col-lg-4 col-md-6 portfolio-item filter-${category}`}>
      <div className="portfolio-content h-100">
        <img src={imageUrl} className="img-fluid" alt={title} />
        <div className="portfolio-info">
          <p>{description}</p>
          {/* <a href="project-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a> */}
        </div>
      </div>
    </div>
  );
}

function HomeProjects() {
  return (
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Projects</h2>
          <p>Project Closure and Handover</p>
        </div>

        {/* Projects Filters */}
        <ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" className="filter-active">All</li>
          {/* Add other filter options if needed */}
        </ul>

        {/* Projects Container */}
        <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <ProjectItem 
            category="remodeling"
            imageUrl="assets/img/projects_1/cap-bank1.jpg"
            title="xyz"
            description="11 KV Capacitor Bank Installation & Commissioning Done at Owens Corning India limited at Taloja"
          />

          <ProjectItem 
            category="construction"
            imageUrl="assets/img/projects_1/volswagon-site1.jpg"
            title="xyz"
            description="220 KV switchyard Maintenance & Isolator Alignment work done on Volkawagon Site"
          />

          <ProjectItem 
            category="construction"
            imageUrl="assets/img/projects_1/volswagon-site1.jpg"
            title="xyz"
            description="220 KV switchyard Maintenance & Isolator Alignment work done on Volkawagon Site"
          />

          <ProjectItem 
            category="construction"
            imageUrl="assets/img/projects_1/volswagon-site1.jpg"
            title="xyz"
            description="220 KV switchyard Maintenance & Isolator Alignment work done on Volkawagon Site"
          />

          <ProjectItem 
            category="construction"
            imageUrl="assets/img/projects_1/volswagon-site1.jpg"
            title="xyz"
            description="220 KV switchyard Maintenance & Isolator Alignment work done on Volkawagon Site"
          />

          <ProjectItem 
            category="construction"
            imageUrl="assets/img/projects_1/volswagon-site1.jpg"
            title="xyz"
            description="220 KV switchyard Maintenance & Isolator Alignment work done on Volkawagon Site"
          />

          
        </div>
      </div>
    </section>
  );
}

export default HomeProjects;
