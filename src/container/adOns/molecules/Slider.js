import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
	return (
		<section class="header-slider-area">
			<div id="carousel-example-generic" class="carousel slide carousel-fade" data-ride="carousel">


				<ol class="carousel-indicators">
					<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
					<li data-target="#carousel-example-generic" data-slide-to="1"></li>
				</ol>


				<div class="carousel-inner" role="listbox">
					<div class="item active">
						<div class="single-slide-item slide-1">
							<div class="container">
								<div class="row">
									<div class="col-sm-12">
										<div class="single-slide-item-content">
											<h2>Uniqueserve Engineering Pvt.Ltd .</h2>
											<hr
												style={{
													background: 'white',
													color: 'white',
													borderColor: 'white',
													height: '5px',
													width: '50%',
													textAlign: 'center'
												}}
											/>
											<Link to={'/about'}><button type="button" class="slide-btn">
												get started
											</button></Link>
											

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="single-slide-item slide-2">
							<div class="container">
								<div class="row">
									<div class="col-sm-12">
										<div class="single-slide-item-content">
											<h2>Uniqueserve Engineering Pvt.Ltd .</h2>
											<hr
												style={{
													background: 'white',
													color: 'black',
													borderColor: 'white',
													height: '5px',
													width: '50%',
													textAlign: 'center'
												}}
											/>
											<button type="button" class="slide-btn">
												get started
											</button>
											

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="single-slide-item slide-3">
							<div class="container">
								<div class="row">
									<div class="col-sm-12">
										<div class="single-slide-item-content">
											<h2>Uniqueserve Engineering Pvt.Ltd .</h2>
											<hr
												style={{
													background: 'white',
													color: 'white',
													borderColor: 'white',
													height: '5px',
													width: '50%',
													textAlign: 'center'
												}}
											/>
											<button type="button" class="slide-btn">
												get started
											</button>
											

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="single-slide-item slide-4">
							<div class="container">
								<div class="row">
									<div class="col-sm-12">
										<div class="single-slide-item-content">
											<h2>Uniqueserve Engineering Pvt.Ltd .</h2>
											<hr
												style={{
													background: 'white',
													color: 'white',
													borderColor: 'white',
													height: '5px',
													width: '50%',
													textAlign: 'center'
												}}
											/>
											<button type="button" class="slide-btn">
												get started
											</button>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="item">
						<div class="single-slide-item slide-5">
							<div class="container">
								<div class="row">
									<div class="col-sm-12">
										<div class="single-slide-item-content">
											<h2>Uniqueserve Engineering Pvt.Ltd .</h2>
											<hr
												style={{
													background: 'white',
													color: 'white',
													borderColor: 'white',
													height: '5px',
													width: '50%',
													textAlign: 'center'
												}}
											/>
											<button type="button" class="slide-btn">
												get started
											</button>
											
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
					<span class="lnr lnr-chevron-left"></span>
				</a>
				<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
					<span class="lnr lnr-chevron-right"></span>
				</a>
			</div>

		</section>

	)
}

export default Slider