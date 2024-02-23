import React from 'react'
import '../assets/css/footer.css'
// import '../assets/css/component/footer.css'
const Footer = () => {

	// Handle Whatsapp Integration
	const phoneNumber = '+91'; // Replace with the desired phone number
	const message = 'Hello!'; // Optional message

	const handleWhatsAppClick = () => {
		const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
		window.location.href = whatsappLink;
	};

	// Handle call integration
	function handleCall() {
		const phoneNumber = '+91'; // Replace with the phone number you want to call
		window.location.href = `tel:${phoneNumber}`;
	}

	return (
		<>
			<div className="footer-content position-relative">
				<div className="container">
					<div className="row">

						<div className="col-lg-4 col-md-6">
							<div className="footer-info">
								<h3>BSE</h3>
								<p>
									A/604, Trade Square BLDG.Mehera ind,<br />
									AK Road Mumbai-400072, Maharashtra, India.  <br /><br />
									<strong>Phone:</strong><br />
									+91 8369700470 <br />
									+91 74984 24264<br />
									<br />
									<strong>Email:</strong> <br />
									boostsubserve@gmail.com<br />
								</p>

							</div>
						</div>

						<div className="col-lg-3 col-md-3 footer-links">
							<h4>Useful Links</h4>
							<ul>
								<li><a href="home.html">Home</a></li>
								<li><a href="about.html">About us</a></li>
								<li><a href="services.html">Services</a></li>
								<li><a href="contact.html">Contact</a></li>
								<li><a href="#">Terms of service</a></li>
								<li><a href="#">Privacy policy</a></li>
							</ul>
						</div>

						<div className="col-lg-3 col-md-6 footer-links">
							<h4>Our Services</h4>
							<ul>
								<li><a href="services.html">Maintenance</a></li>
								<li><a href="services.html">Testing</a></li>
								<li><a href="services.html">Networking</a></li>
								<li><a href="services.html">Other Services</a></li>
							</ul>
						</div>

						<div className="col-lg-2 col-md-3 footer-links">
							<h4>Social Links</h4>
							<div className="social-links d-flex mt-3">
								<a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-twitter"></i></a>
								<a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-facebook"></i></a>
								<a href="#" className="d-flex align-items-center justify-content-center"><i className="bi bi-instagram"></i></a>
								<a href="https://www.linkedin.com/in/boost-subserve-engineering-0100352b3/" className="d-flex align-items-center justify-content-center"><i className="bi bi-linkedin"></i></a>
							</div>
						</div>

					</div>
				</div>
			</div>


			<div>
				{/* Whatsapp Integration */}
				<div className="wtsp-btn wp-hover-effect" onClick={handleWhatsAppClick}><i className="fa-brands fa-whatsapp wp-hover-effect"></i></div>

				{/*Call Integration*/}
				<div className="call-btn call-hover-effect" onClick={handleCall}><i className="fa-solid fa-phone call-hover-effect"></i></div>
			</div>
		</>
	)
}

export default Footer