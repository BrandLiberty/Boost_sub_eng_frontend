import React from 'react';

function Gallery() {
  return (
    <section className="sample-page">
      <div className="container">
        <div className="gallery-box">
          <div className="container-fluid">
            <div className="tz-gallery">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <a className="lightbox" href="#">
                    <img className="img-fluid" src="assets/img/gallary/Tata-steel2.jpg" alt="Gallery Images" />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <a className="lightbox" href="#">
                    <img className="img-fluid" src="assets/photo/switchyard1.jpg" alt="Gallery Images" />
                  </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <a className="lightbox" href="#">
                    <img className="img-fluid" src="assets/img/gallary/Tata-steel.jpg" alt="Gallery Images" />
                  </a>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <a className="lightbox" href="#">
                    <img className="img-fluid" src="assets/img/gallary/switchyard6.jpg" alt="Gallery Images" />
                  </a>
                </div>
                {/* Add more gallery items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
