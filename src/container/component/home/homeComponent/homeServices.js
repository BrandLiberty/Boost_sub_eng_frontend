import React from 'react';

function HomeService() {
    return (
        <>
            {/* Services Section */}
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Services</h2>
                        <p>With our team of experts, you can count on us to handle all sorts of Electrical projects, Electrical retrofitting quickly, efficiently, and safely.</p>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-item  position-relative">
                                <div className="icon">
                                    <i className="fa-solid fa-mountain-city"></i>
                                </div>
                                <h3> MAINTENANCE</h3><br />
                                <a href="services.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="fa-solid fa-arrow-up-from-ground-water"></i>
                                </div>
                                <h3>Testing</h3><br />
                                <a href="services.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className="fa-solid fa-mountain-city"></i>
                                </div>
                                <h3>Networking</h3><br />
                                <a href="services.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features section-bg">
                <div className="container" data-aos="fade-up">
                    <ul className="nav nav-tabs row g-2 d-flex">
                        <li className="nav-item col-3">
                            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                                <h4>Switchyard</h4>
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                <h4>Capacitor Bank</h4>
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                                <h4>xyz</h4>
                            </a>
                        </li>
                        <li className="nav-item col-3">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                                <h4>xyz</h4>
                            </a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        {/* Tab 1 Content */}
                        <div className="tab-pane active show" id="tab-1">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                                    <h3>Switchyard</h3>
                                    <p className="fst-italic">The switchyard comprises transformers plus a series of large switches, breakers, and other protective devices that can usually be manually or remotely opened and controlled to energize or de-energize specific transmission circuits leaving the plant.</p>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> Switchyards enable operators to manage the transmission and distribution of electricity effectively.</li>
                                        <li><i className="bi bi-check2-all"></i> Safety is a critical concern in switchyards due to the high voltages involved.</li>
                                        <li><i className="bi bi-check2-all"></i> Switchyards are designed to handle high voltages, often ranging from tens of kilovolts to several hundred kilovolts, depending on the specific application and the scale of the power system.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                                    <img src="assets/img/projects_1/switchyard2.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        {/* Tab 2 Content */}
                        <div className="tab-pane" id="tab-2">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                    <h3>Capacitor Bank</h3>
                                    <p className="fst-italic">Capacitor banks work by storing electrical energy in their components and using it when needed to correct power factor lags or phase shifts in an AC (alternative current) power supply. This helps maintain optimum efficiency and prevents undesirable dips or surges in voltage which can damage electrical equipment.</p>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> primary purposes of capacitor banks is to improve the power factor of electrical systems.</li>
                                        <li><i className="bi bi-check2-all"></i> Power factor is a measure of how effectively electrical power is being used in a system.</li>
                                        <li><i className="bi bi-check2-all"></i> Capacitor banks provide reactive power support by supplying capacitive reactive power to the system.</li>
                                        <li><i className="bi bi-check2-all"></i> Many modern capacitor banks are equipped with automatic control systems that monitor power factor, voltage levels, and other parameters in real-time.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src="assets/img/projects_1/cap-bank2.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        {/* Tab 3 Content */}
                        <div className="tab-pane" id="tab-3">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                    <h3>Voluptatibus commodi accusamu</h3>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                                    </ul>
                                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src="assets/photo/electric-2.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        {/* Tab 4 Content */}
                        <div className="tab-pane" id="tab-4">
                            <div className="row">
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                                    <h3>Omnis fugiat ea explicabo sunt</h3>
                                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 text-center">
                                    <img src="assets/photo/solar-3.jpg" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeService;
