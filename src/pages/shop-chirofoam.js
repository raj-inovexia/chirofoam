import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner-shop-chirofoam"
import {Container, Row, Col, Media} from 'reactstrap';
import CountUp from 'react-countup';
import SEO from '~/components/seo'
import "../assets/css/bootstrap.min.css"
import mattress1 from "../assets/img/mattress1.jpg"
import run from "../assets/img/only-man.png"
//import Products from '~/components/Products'
import product1 from "../assets/img/product1.jpg"
import product2 from "../assets/img/product2.jpg"
import ScrollAnimation from 'react-animate-on-scroll';


export default (props) => {
  return (
	<>
		<SEO title="SHOP CHIROFOAM™" />
		<Header />
		<Banner/>
		<section className="mt-4 mb py-4" style={{backgroundColor:'#fff'}}>
		<ScrollAnimation animateIn="fadeInUp">
				<Row className="no-gutters">
					<Col sm="4" className="card1 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0 m-lg-0">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>Developed and Manufactured in Canada</span>
						</div>
					</Col>
					<Col sm="4" className="card2 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>100 Night Sleep Trial</span>
						</div>
					</Col>
					<Col sm="4" className="card3 com-card bg-image mx-3 mb-2 mb-sm-0 m-sm-0">
						<div className="card-layer">
							<span className="proxima-b text-center text-white" style={{position:'absolute', top:'50%', left:'0', right:'0'}}>Free Delivery in Canada and Continental USA</span>
						</div>
					</Col>
				</Row>
		</ScrollAnimation>
		</section>

		<section className="py-4 pt-sm-4 pt-lg-4 pt-xl-4 pb-sm-4 pb-lg-4 pb-xl-4 mb-0 mb-sm-3 mb-lg-3 mb-xl-3 mattresses">
			<div className="pt-0 pt-sm-5 container-large">
				<h3 className="text-center lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text color-primary erbaum-bold display-5 w-100"><ScrollAnimation animateIn="fadeInUp">THE COMFORT AND SUPPORT YOU NEED FOR A BETTER SLEEP</ScrollAnimation></h3>
				<p className="col-12 col-sm-7 text-center pb-4 pb-sm-5 px-0 px-sm-2 pt-1 mb-5 color-primary proxima-b space-1 m-auto sub-text sub-sm-text sub-md-text sub-xl-text"><ScrollAnimation animateIn="fadeInUp">We have two models to choose from. Whatever your needs are, Chirofoam has your back!</ScrollAnimation></p>
				<Row className="no-gutters row-eq-height pb-5 m-0">
					<Col sm="12" className="col-lg-6 col-xl-6 product-border-right pr-0 pr-sm-2 position-relative">
						<div className="pr-0 pr-lg-5 pr-xl-5 mr-0 mr-sm-4">
							<img src={product1} alt="Product1" width="100%" />
							<Link to="/product/the-original-chirofoam™-mattress-luxury-firm/"><h3 className="text-left text-sm-left text-lg-right text-xl-right color-primary erbaum-bold pl-0">THE ORIGINAL CHIROFOAM™ MATTRESS - LUXURY FIRM</h3></Link>
							<p className="text-left text-sm-left text-lg-right text-xl-right color-primary proxima-eb space-1 pt-1 mb-0 text-1">
								The Original Chirofoam Memory Foam Mattress is designed to increase muscle recovery to help keep you performing at your best. Made in Toronto, ON. 
							</p><br/>
							<p className="text-left text-sm-left text-lg-right color-primary proxima-eb space-1 mb-0 text-1">
								Upgrade your sleep today!
							</p><br/>
							<p className="text-left text-sm-left text-lg-right color-primary proxima-eb space-1 mb-0 text-1">
								Ideal for all sleeping positions.
							</p><br/>
							<p className="text-left text-sm-left text-lg-right color-primary proxima-eb space-1 mb-0 text-1">
								Firmness sacle: 7.5/10-Luxury Firm
							</p><br/>
							<p className="text-left text-sm-left text-lg-right mb-4 color-primary proxima-eb space-1 mb-0 text-1">
								Profile: 12 inches
							</p><br />
						</div>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 position-absolute left-btn">
							<Link to="/product/the-original-chirofoam™-mattress-luxury-firm/" className="btn-cta color-primary erbaum-bold space-1">BUY NOW</Link>
						</p>
					</Col>
					
					<Col sm="12" className="col-lg-6 col-xl-6 pl-0 pl-sm-0 pl-lg-2 pl-xl-2 position-relative mt-sm-5 mt-lg-0 mt-xl-0">
						<div className="pl-0 pl-sm-0 pl-lg-5 pl-xl-5 ml-0 ml-sm-0 ml-lg-4 ml-xl-4">
							<img src={product2} alt="Product2" width="100%" />
							<Link to="/product/the-chirofoam™-xf-mattress-extra-firm/"><h3 className="color-primary erbaum-bold pr-0">THE CHIROFOAM™ XF MATTRESS - EXTRA FIRM</h3></Link>
							<p className="text-left color-primary proxima-eb space-1 pt-1 mb-0 text-1">
								The Chirofoam XF Memory Foam Mattress is an extra firm mattress designed maximum back support. Developed for individuals and atheletes who suffer from back pain and require the greatest amount of stiffness for efficient recovery.
							</p><br/>
							<p className="text-left color-primary proxima-eb space-1 mb-0 text-1">
								Upgrade your sleep today!
							</p><br/>
							<p className="text-left color-primary proxima-eb space-1 mb-0 text-1">
								Ideal for back and stomach sleepers.
							</p><br/>
							<p className="text-left color-primary proxima-eb space-1 mb-0 text-1">
								Firmness sacle: 10/10-Extra Firm
							</p><br/>
							<p className="text-left color-primary proxima-eb space-1 mb-0 text-1">
								Profile: 10 inches
							</p><br/>
						</div>
						<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 position-absolute right-btn">
							<Link to="/product/the-chirofoam™-xf-mattress-extra-firm/" className="btn-cta color-primary erbaum-bold space-1">BUY NOW</Link>
						</p>
					</Col>
				</Row>
			</div>
		</section>
		<ScrollAnimation animateIn="fadeInUp">
		<section className="py-4 pt-sm-4 pb-sm-4 approved bg-image">
               <Container className="">
                  <Row className="pt-3 no-gutters m-0 position-relative">
                    <Col className="align-middle col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    	<div className="white-dots">
                     		 <img src={run} alt="run" width="75%" className="mt-sm-3 pl-sm-5 ml-sm-5" usemap="#workmap"/>
                     	</div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                      <div className="text-white mb-4">
                        <h3 className="approved-title text-white erbaum-bold lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">CHIROPRACTOR APPROVED</h3>
                        <p className="proxima-b space-1 p-0 pt-sm-1 text-1">Chirofoam<sup style={{fontSize:'8px'}}>TM</sup> mattresses are designed by Chiropractors to improve posture, and provide incredible pressure relief. Your back will thank you.</p>
                        <p className="cta mt-3 mt-sm-0 mt-lg-0 mt-xl-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
                          <Link to="#" className="btn-cta text-white erbaum-bold space-1">CALL TO ACTION </Link>
                        </p>
                      </div>

                      <div className="text-white mb-4 pt-1 pr-0 pr-sm-5">
                        <h3 className="approved-title text-white erbaum-bold pt-0 pt-sm-3 lead-text lead-sm-text lead-md-text lead-lg-text lead-xl-text">CUSTOMER APPROVED</h3>
                        <p className="proxima-b space-1 p-0 pt-sm-2 text-1">Our customers have reported the following benefits after sleeping on there chirofoam mattress</p>
                        <div className="ml-0 ml-sm-4 pt-0 pt-sm-0 pl-0 pr-sm-5">
                            <Media className="my-3">
                            	<span className="white-dot-1 white-dot position-absolute"></span>
                          		<div className="d-flex h-effect">
                           			<Media left middle className="my-0 pr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>97%</Media>
                            		<Media body middle className="proxima-r pl-sm-3 text-1 align-self-center">Improvement in sleep comfort and quality</Media>
                            	</div>
                            </Media>
                            <Media className="py-3">
                             	<span className="white-dot-2 white-dot position-absolute"></span>
                          		<div className="d-flex h-effect">
                           			<Media left middle className="my-0 pr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>94%</Media>
                            		<Media body middle className="proxima-r pl-sm-3 text-1 align-self-center">Increased energy in the morning and throughout the day</Media>
                            	</div>
                            </Media>
                            <Media className="py-3">
                             	<span className="white-dot-3 white-dot position-absolute"></span>
                          		<div className="d-flex h-effect">
                            		<Media left middle className="my-0 pr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>86%</Media>
                            		<Media body middle className="proxima-r pl-sm-3 pt-sm-1 text-1 align-self-center">Improved muscle recovery and/or relief in daliy experienced back pain</Media>
                           		</div>
                            </Media>
                            <Media className="py-3">
                            	<span className="white-dot-4 white-dot position-absolute"></span>
                            	<div className="d-flex h-effect">
                            		<Media left middle className="my-0 pr-4 h4 erbaum-bold" style={{fontSize:'32px'}}>82%</Media>
                            		<Media body middle className="proxima-r pl-sm-3 pt-sm-2 text-1 align-self-center">Improvement in sleep comfort and quality</Media>
                         		</div>
                         	</Media>
                        </div>
                        <p className="cta mt-3 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0">
                          <Link to="/reviews/" className="btn-cta text-white erbaum-bold space-1">READ CUSTOMER REVIEWS</Link>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Container>
            </section>
		</ScrollAnimation>
		<section className="py-sm-5 py-4">
			<Container>
				<Row>
					<Col sm="6" className="position-relative" style={{zIndex:'9'}}>
						<h4 className="lead-text-font color-primary erbaum-bold display-5"><ScrollAnimation animateIn="fadeInUp">THE ONLY MATTRESS WITH PRO LUMBAR SUPPORT BY ChirofoamTM</ScrollAnimation></h4>
						<p className="mt-4 color-primary proxima-r" style={{fontSize:'0.9rem'}}>
							<b className="proxima-eb">Our specilized layer of chirofoam<sup style={{fontSize:'7px'}}>TM</sup> lumbar support</b> provides an additional 20% of conforming support in the centre third of mattress for improved lumbar support and increased life span of the mattress. The majority of your body's weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far boyond our 15 years warranty period.
						</p>
			            <p className="cta pr-0 pt-3">
			              <Link to="/design/" className="btn-cta color-primary erbaum-bold space-1" style={{marginRight:'1rem'}}>READ MORE</Link>
			            </p>
					</Col>
					<Col sm="6">
						<img src={mattress1} alt="Mattress1" width="100%"/>
					</Col>
				</Row>
			</Container>
		</section>

		

		<Footer />
	</>
  );
};
