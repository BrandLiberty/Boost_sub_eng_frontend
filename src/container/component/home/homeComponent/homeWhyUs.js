import React from 'react';

function HomeWhyUs() {
  return (
    <section id="constructions" className="constructions">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>At Boost Subserve Engineering Pvt.Ltd, we stand out in the Electrical industry for several compelling reasons</p>
        </div>

        <div className="row gy-4">

          <CardItem
            imageUrl="assets/img/constructions-1.jpg"
            title="Experties & Experience."
            description="With years of experiance and a team of seasoned professionals, we bring unparalleled experties to every project. Our Track records of sucessful work."
            delay={100}
          />

          <CardItem
            imageUrl="assets/img/constructions-2.jpg"
            title="Integrity"
            description="We conduct ourselves with honesty, transparency, and integrity in all our interactions. We honor our commitments and uphold the highest ethical standards in every aspect of our business."
            delay={200}
          />

          <CardItem
            imageUrl="assets/photo/electric-2.jpg"
            title="Comprehensive Services"
            description="We offer wide renge of services under one roof, streamline your project need."
            delay={300}
          />

          <CardItem
            imageUrl="assets/photo/switchyard4.jpg"
            title="Safety First"
            description="Safety is at the core of everything we do. We prioritize the well being of our team, clients and the comunity, implementing rigorous safety measures on sit."
            delay={400}
          />

          <CardItem
            imageUrl="assets/photo/qality-assurance.jpeg"
            title="Quality Assurance"
            description="Quality is our top priority. We adhere to stringent quality standards, ensuring that each project is executed with precision and excellence, resulting in safe work."
            delay={500}
          />

          <CardItem
            imageUrl="assets/photo/solar-2.jpg"
            title="Client-Centric Approch"
            description="Your Satisfication is our ultimate goal . We maintain open communication, listen to your needs, and tailor our services to meet your specific requirnments."
            delay={600}
          />

          <CardItem
            imageUrl="assets/img/alt-services.jpg"
            title="Sustainability"
            description="We are dedicated to sustainability, integrating eco friendly practices and technologies into our solutions to minimize environmental impact and promote a greener future"
            delay={700}
          />

          <CardItem
            imageUrl="assets/photo/power-3.jpg"
            title="Competitive Pricing"
            description="We offer competitive pricing without compramising on quality, ensuring that you receive value for your investment."
            delay={800}
          />

        </div>

      </div>
    </section>
  );
}

function CardItem({ imageUrl, title, description, delay }) {
  return (
    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={delay}>
      <div className="card-item">
        <div className="row">
          <div className="col-xl-5">
            <div className="card-bg" style={{ backgroundImage: `url(${imageUrl})` }}></div>
          </div>
          <div className="col-xl-7 d-flex align-items-center">
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWhyUs;
