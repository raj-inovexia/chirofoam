import React from 'react';
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container, Row, Col} from 'reactstrap';
import SEO from '../components/seo'
import "../assets/css/bootstrap.min.css"
import Pur from "../assets/img/certipur-logo-nobkgrd-250px-1.png"
import Ecoinstitute from "../assets/img/ecoinstitute.png"
import conni1 from "../assets/img/conni1.jpg"



export default (props) => {
  return (
	<>
		<SEO title="design" />
		<Header />
		<section className="mb-0 py-3 position-relative">
			<Container>
        		<Row className="mx-0 text-center">
					<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">DESIGNED FOR MAXIMUM SUPPORT</h2>
				  	<p className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100" style={{fontSize:'26px'}}>The <strong>highest quality materials</strong> and skilled craftsmanship in every Chirofoam™ mattress.</p>
				</Row>
			</Container>
		</section>
		<section className="py-4 pt-sm-5 pb-sm-4 our-customer">
			<Row className="pt-3 pb-3 pb-sm-0 no-gutters">
				<Col sm="6" className="coolgel-img design-imgs">
					
				</Col>
				<Col sm="6" className="pt-5 pb-5 px-3">
					<div className="pl-5 pl-sm-5 pt-2 pb-2 pt-sm-5 pb-sm-4" style={{maxWidth:'500px'}}>
						<h3 className="color-primary erbaum-bold lead-text">COOL GEL INFUSED MEMORY FOAM</h3>
						<p className="text-left proxima-eb space-1 pt-5 mb-0 text-1" style={{color:'#808080'}}><span className="color-primary">Helps keep your body cool and relaxed during sleep</span> while the temperature sensitive foam helps to reduce pressure points and maintain maximum support for your back. Designed for maximum back pain relief, this foam will help to relax your joints and muscles while relieving pressure and creating the ultimate support while you sleep.</p>
					</div>
				</Col>
			</Row>
			<Row className="pb-3 pb-sm-0 no-gutters">
				<Col sm="6" className="pt-5 pb-5 px-3">
					<div className="pl-5 pl-sm-5 pt-2 pb-2 pt-sm-5 pb-sm-4" style={{maxWidth:'500px'}}>
						<h3 className="color-primary erbaum-bold lead-text pl-5">EXTRA FIRM SUPPORT CHIROFOAM™</h3>
						<p className="text-left proxima-eb space-1 pl-5 pt-5 mb-0 text-1" style={{color:'#808080'}}><span className="color-primary">An extremely firm, durable and sag resistant layer of support foam</span> provides maximum firmness for your body and spine to stretch and decompress while you sleep.  The extra firm layer creates the firmness similar to sleeping on the floor, while gently eliminating the pressure points and discomfort associated with other extra firm mattresses.</p>
					</div>
				</Col>
				<Col sm="6" className="latex-img design-imgs">
					
				</Col>
			</Row>
			<Row className="pb-3 pb-sm-0 no-gutters">
				<Col sm="6" className="design-imgs support-img">
					
				</Col>
				<Col sm="6" className="pt-5 pb-5 px-3">
					<div className="pl-5 pl-sm-5 pt-2 pb-2 pt-sm-5 pb-sm-4" style={{maxWidth:'500px'}}>
						<h3 className="color-primary erbaum-bold lead-text">CHIROFOAM™ LUMBAR SUPPORT</h3>
						<p className="text-left proxima-eb space-1 pt-5 mb-0 text-1" style={{color:'#808080'}}><span className="color-primary">Our specialized layer of Chirofoam™ lumbar support</span> provides an additional 20% of conforming support in the centre third of the mattress for improved lumbar support and increased life span of the mattress. The majority of your body’s weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The Pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far beyond our 15 year warranty period.</p>
					</div>
				</Col>
			</Row>
			<Row className="pb-3 pb-sm-0 no-gutters">
				<Col sm="6" className="pt-5 pb-5 px-3">
					<div className="pl-5 pl-sm-5 pt-2 pb-2 pt-sm-5 pb-sm-4" style={{maxWidth:'500px'}}>
						<h3 className="pl-4 color-primary erbaum-bold lead-text">BODY SUPPORT BIO FOAM CORE</h3>
						<p className="text-left proxima-eb space-1 pt-5 mb-0 text-1 pl-4" style={{color:'#808080'}}><span className="color-primary">The core is made with a high density and ultra-resilient bio foam</span> designed to cradle the weight of your body and distribute pressure evenly for many years of back pain relief and peaceful sleep. The bio foam is made from soy content in a more environmentally friendly and sustainable production method which lessens your carbon footprint on our planet.</p>
					</div>
				</Col>
				<Col sm="6" className="design-imgs foam-img">
					
				</Col>
			</Row>
		</section>
		<section>
			<Container>
				<Row className="py-3 py-sm-5 mb-0 mb-sm-5">
					<div className="m-auto text-center d-sm-flex">
						<Col sm="8" className="text-center">
							<div className="d-sm-flex">
								<img className="img-fluid" src={Pur} alt="Pur" width="150px" height="150px" />
								<img className="img-fluid" src={Ecoinstitute} alt="Ecoinstitute" width="150px" height="150px" />
								<img className="img-fluid" src={conni1} alt="conni1" width="150px" />
							</div>
							<p className="filson-pro-reg color-secondary pt-2 text-1 text-left"><span className="color-primary">CertiPUR-US®</span> approved foams are made without ozone depleters, made without PBDE flame retardants, made without mercury, lead and other heavy metals, made without formaldehyde.</p>
							<p className="filson-pro-reg color-secondary pt-2 text-1 text-left"><span className="color-primary">Eco Institut</span> tested for emission analysis in the test chamber according to ISO 16000, compound analyses for heavy metals, AOX/EOX, biocides, phthalates, flame retardants etc., odour testing according to VDA, toxicological and ecological expertise.</p>
							<p className="filson-pro-reg color-secondary pt-2 text-1 text-left"><span className="color-primary">Confidence In Textiles Oeko-Tex®</span> standard 100 certified provide extensive testing on the fabrics to ensure that no substances are present that could be harmful to humans. Oeko-Tex® Standard 100 is an international certification that sets limits for over 100 harmful chemicals, substances, and emissions in textiles.</p>
						</Col>
					</div>
				</Row>
			</Container>
		</section>
		<section>
			<Container>
				<Row className="py-3 py-sm-5 mb-0 mb-sm-5">
					<div className="m-auto text-center d-sm-flex">
						<Col sm="6" className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5">
							<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
								<Link to="/take-test/" className="btn-cta color-primary erbaum-bold space-1">TAKE THE TEST</Link>
							</p>
							See if Chirofoam™ is right for you.
						</Col>
						<Col sm="6" className="text-center filson-pro-reg color-secondary mb-5 mb-sm-0 px-sm-5">
							<p className="cta mt-0 pt-sm-0 pt-lg-0 pt-xl-0 mb-sm-2">
								<Link to="/shop-chirofoam/" className="btn-cta color-primary erbaum-bold space-1 mr-3">BUY NOW</Link>
							</p>
							Start your journey to a better sleep!
						</Col>
					</div>
				</Row>
			</Container>
		</section>
		<section className="pt-3">
			<Container>
				<Row>
					<Col sm="6">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase pl-4">SPECIALTY FEATURES OVERVIEW</h5>
						<ul className="filson-pro-reg color-secondary text-1 pb-3" style={{listStyle:'inherit',lineHeight:'24px'}}>
							<li className="pb-3"><span className="color-primary space-1"><strong>Cool Gel Infused Visco Memory Foam – </strong></span> Designed to reduce pressure points and motion transfer, while keeping you cool and comfortable during your sleep.</li>
							<li className="pb-3"><span className="color-primary space-1"><strong>Extra Firm Support Chirofoam™ – </strong></span>An extremely firm, durable, and sag resistant layer of support foam provides an additional “pressure relief buffer” between your body and the core support foam.</li>
							<li className="pb-3"><span className="color-primary space-1"><strong>Chirofoam™ Lumbar Support – </strong></span>Posture support layer keeps your back straight while you rest while providing additional support in the center third of the mattress for longevity and long term durability.</li>
							<li className="pb-3"><span className="color-primary space-1"><strong>High Density Bio-Foam Core – </strong></span>Core support layer further reduces pressure points while evenly distributing your body weight across the mattress.  Made with natural soy content foam; reducing your carbon footprint.</li>
							<li className="pb-3"><span className="color-primary space-1"><strong>Soft Luxurious and Breathable Removable Cover – </strong></span>Easy to remove and wash, soft for sleep comfort, and breathable for a cooler night’s sleep.  Made with a soft cotton top and durable denim borders.</li>
						</ul>
					</Col>
					<Col sm="6">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase pl-4">TECHNICAL SPECIFICATIONS</h5>
						<h6 className="erbaum-bold color-primary pb-2">Top Upholstery</h6>
						<ul className="filson-pro-reg color-secondary text-1 pb-3" style={{listStyle:'inherit',lineHeight:'24px'}}>
							<li>Soft Luxurious and Breathable Removable Cover with Non-Skid Bottom.</li>
							<li>Cotton top with durable denim borders.</li>
							<li>1″ Cool Gel Infused 4lb Visco Memory Foam</li>
							<li>2″ Extra Firm Support Chirofoam™</li>
						</ul>
						<h6 className="erbaum-bold color-primary pb-2">Support System</h6>
						<ul className="filson-pro-reg color-secondary text-1 pb-3" style={{listStyle:'inherit',lineHeight:'24px'}}>
							<li>Chirofoam™ Lumbar Support</li>
							<li>7″ Optimal High Density Bio-Foam</li>
							<li>Total Mattress Height: 10 inches (25cm).</li>
						</ul>
						<h6 className="erbaum-bold color-primary pb-2">Additional Information</h6>
						<ul className="filson-pro-reg color-secondary text-1 pb-3" style={{listStyle:'inherit',lineHeight:'24px'}}>
							<li>Mattress is suitable to work with any solid box spring foundation, platform bed, or slats.</li>
						</ul>
						<h6 className="erbaum-bold color-primary pb-2">Dimensions</h6>
						<ul className="filson-pro-reg color-secondary text-1 pb-3" style={{listStyle:'inherit',lineHeight:'24px'}}>
							<li><span className="color-primary space-1"><strong>Single/Twin– </strong></span>39″ x 75″ x 10″  (99cm x 191cm x 25cm)</li>
							<li><span className="color-primary space-1"><strong>Twin XL– </strong></span>39″ x 80″ x 10″ (99cm x 203cm x 25cm)</li>
							<li><span className="color-primary space-1"><strong>Double/Full– </strong></span>54″ x 75″ x 10″ (137cm x 191cm x 25cm)</li>
							<li><span className="color-primary space-1"><strong>Queen– </strong></span>60″ x 80″ x 10″ (152cm x 203cm x 25cm)</li>
							<li><span className="color-primary space-1"><strong>King– </strong></span>76″ x 80″ x 10″ (193cm x 203cm x 25cm)</li>
							<li><span className="color-primary space-1"><strong>Cali King– </strong></span>72″ x 84″ x 10″ (183cm x 213cm x 25cm)</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</section>
		<section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
			<Container className="pb-0 pb-sm-5">
				<Row className="mx-0">
					<p className="text-center w-100 star">
						<i className="fa fa-star star-small"></i>
						<i className="fa fa-star star-medium ml-2"></i>
						<i className="fa fa-star star-large mx-2"></i>
						<i className="fa fa-star star-medium mr-2"></i>
						<i className="fa fa-star star-small"></i>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>“A great quality mattress I enjoy waking up on every day…” <br/>  -Mark F. from Toronto, Ontario</p>
					<p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
						<Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</Link>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p> 
				</Row>
			</Container>
		</section>
		<Footer />
	</>
  );
};
