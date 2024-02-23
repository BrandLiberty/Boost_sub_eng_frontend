import React from 'react';
import"../../../assets/css/component/home/homecomponent/homeFeaturedServices.css"

function HomeFeaturedServices() {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container">
        <div className="row">
          <ServiceBox
            iconClass="bi bi-laptop"
            title="Mission"
            description="Through our comprehensive substation services, we aim to empower communities and industry with dependable, economical, and sustainable electrical solutions, ensuring efficient power distribution and enhancing everyone's standard of life."
          />
          <ServiceBox
            iconClass="bi bi-card-checklist"
            title="Vision"
            description="Our vision is to lead the global substation services sector by advancing technology, building resilience, and promoting energy accessibility. In order to leave a legacy of sustainable development for future generations, we are interested in creating a future in which electricity acts as a catalyst for prosperity and growth by establishing long-lasting collaborations and leading the way in innovative solutions."
          />
          <ServiceBox
            iconClass="bi bi-clipboard-data"
            title="Values"
            description="Our values revolve around reliability, technology advancement, and sustainability. We aim to empower communities and industries with dependable, economical, and sustainable electrical solutions while advocating for energy accessibility worldwide. Through collaboration and innovation, we strive to lead the global substation services sector and leave a legacy of sustainable development for future generations."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceBox({ iconClass, title, description }) {
  return (
    <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
      <div className="icon-box">
        <div className="icon"><i className={iconClass}></i></div>
        <h4 className="title"><a href="">{title}</a></h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default HomeFeaturedServices;
