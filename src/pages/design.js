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
import poster from "../assets/img/poster.jpg"
import clip1 from "../assets/img/bed1.jpg"
import clip2 from "../assets/img/clip.jpg"



export default (props) => {
  return (
	<>
		<SEO title="design" />
		<Header />
		<section className="mb-0 py-3 position-relative">
			<Container>
        		<Row className="mx-0 text-center">
					<h2 className="font-weight-bold display-5 erbaum-bold text-uppercase pt-5 space-2 pt-sm-1 pt-lg-5 pt-xl-5 color-primary w-100">DESIGNED FOR PERFECT SUPPORT</h2>
				  	<p className="filson-pro-reg color-primary pt-2 space-4 proxima-r m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-sm-2 w-100" style={{fontSize:'26px'}}>The <strong>highest quality materials</strong> and skilled craftsmanship in every Chirofoam™ mattress.</p>
				</Row>
			</Container>
		</section>
		<section className="py-4 pt-sm-5 pb-sm-4 our-customer design-for-customer">
			<Row className="pt-3 pb-3 pb-sm-0 no-gutters">
				<Col  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-0 pt-sm-2 pt-md-3 pt-lg-5 pt-xl-5 pb-0 pb-md-3 pb-lg-5 px-3">
					<div className="pl-0 pl-sm-1 pl-md-3 pl-lg-5 pl-xl-5 pt-2 pb-2 pt-sm-5 pb-sm-4" style={{maxWidth:'500px'}}>
						<h3 className="color-primary erbaum-bold lead-text">COOL GEL INFUSED MEMORY FOAM</h3>
						<p className="text-left filson-pro-reg space-1 pt-0 pt-sm-1 pt-md-3 pt-lg-5 pt-xl-5 mb-0 text-1 color-secondary"><span className="color-primary">Helps keep your body cool and relaxed during sleep</span> while the temperature sensitive foam adjusts to your body’s natural shape and curves. Designed for back pain relief, this foam will help to relax your joints and muscles while relieving pressure and creating the ultimate comfort while your body rests.</p>
					</div>
				</Col>
				<Col  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 coolgel-img design-imgs">
					
				</Col>
			</Row>
			<Row className="pb-3 pb-sm-0 no-gutters">
				<Col  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-0 pt-sm-0 pt-md-3 pt-lg-5 pb-0 pb-md-3 pb-lg-5 px-3">
					<div className="pl-0 pl-sm-1 pl-md-3 pl-lg-5 pl-xl-5 pt-2 pb-2 pt-sm-5 pb-sm-4" style={{maxWidth:'500px'}}>
						<h3 className="color-primary erbaum-bold lead-text pl-0 pl-sm-1 pl-md-3 pl-lg-5 pl-xl-5">FIRM SUPPORT CHIROFOAM™</h3>
						<p className="text-left filson-pro-reg space-1 pl-0 pl-sm-1 pl-md-3 pl-lg-5 pl-xl-5 pt-0 pt-sm-2 pt-md-3 pt-lg-5 pt-xl-5 mb-0 text-1 color-secondary"><span className="color-primary">An extremely durable and sag resistant layer of support foam</span> provides an additional “pressure relief buffer” between your body and the core support foam. This layer helps cradle and protect your muscles, joints, and bones from excess pressure during sleep.  The foam creates ultra comfortable “push back” support to keep your spine in an optimal natural sleeping position, while relieving back pain.</p>
					</div>
				</Col>
				<Col  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 latex-img design-imgs">
					
				</Col>
			</Row>
			<Row className="pb-3 pb-sm-0 no-gutters">
				<Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-0 pt-md-3 pt-lg-5 pb-0 pb-md-3 pb-lg-5 px-3">
					<div className="pl-0 pl-sm-1 pl-md-3 pl-lg-5 pl-xl-5 pt-2 pb-2 pt-sm-5 pb-sm-4" style={{maxWidth:'500px'}}>
						<h3 className="color-primary erbaum-bold lead-text">CHIROFOAM™ LUMBAR SUPPORT</h3>
						<p className="text-left filson-pro-reg space-1 pt-0 pt-md-3 pt-lg-5 mb-0 text-1 color-secondary"><span className="color-primary">Our specialized layer of Chirofoam™ lumbar support</span> provides an additional 20% of conforming support in the centre third of the mattress for improved lumbar support and increased life span of the mattress. The majority of your body’s weight rests in the centre third of the mattress where you need the most support to keep your spine in optimal alignment while relieving back pain. The Pro Lumbar Support layer is also designed to resist sagging and keeps your mattress comfortable and more supportive even far beyond our 15 year warranty period.</p>
					</div>
				</Col>
				<Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 design-imgs support-img">
					
				</Col>
			</Row>
			<Row className="pb-3 pb-sm-0 no-gutters">
				<Col  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-0 pt-md-3 pt-lg-5 pb-0 pb-md-3 pb-lg-5 px-3">
					<div className="pl-0 pl-sm-1 pl-md-3 pl-lg-5 pl-xl-5 pt-2 pb-2 pt-sm-5 pb-sm-4" style={{maxWidth:'500px'}}>
						<h3 className="pl-0 pl-sm-1 pl-md-3 pl-xl-5 pl-lg-5 color-primary erbaum-bold lead-text">BODY SUPPORT BIO FOAM CORE</h3>
						<p className="text-left filson-pro-reg space-1 pt-0 pt-sm-2 pt-md-3 pt-lg-5 pt-xl-5 mb-0 text-1 pl-0 pl-md-3 pl-lg-5 color-secondary"><span className="color-primary">The core is made with a high density and ultra-resilient bio foam</span> designed to cradle the weight of your body and distribute pressure evenly for many years of back pain relief and peaceful sleep. The bio foam is made from soy content in a more environmentally friendly and sustainable production method which lessens your carbon footprint on our planet.</p>
					</div>
				</Col>
				<Col  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 design-imgs foam-img">
					
				</Col>
			</Row>
		</section>
		<section className="m-auto text-center py-0 py-sm-0 py-md-2 py-lg-5 py-xl-5">
			<Container>
				<Row className="pt-3 pb-3 pb-sm-0 text-center mx-0">
					<Col className="col-12 col-lg-8 col-xl-8 mx-auto px-0">
						<div className="text-left text-sm-center text-md-left text-lg-left text-xl-left pt-0 pt-sm-0 pt-md-2 pt-lg-5 pb-0 pb-md-3 pb-lg-5 mb-0 mb-md-0 mb-xl-5 mb-lg-5">
							<div className="image-box d-table-cell px-3 px-sm-2 px-md-3 px-lg-3 px-xl-3">
								<img className="img-fluid" src={Pur} alt="Pur" width="150px" height="150px" />
							</div>
							<div className="image-box d-table-cell px-3 px-sm-2 px-md-3 px-lg-3 px-xl-3">
								<img className="img-fluid" src={Ecoinstitute} alt="Ecoinstitute" width="150px" height="150px" />
							</div>
							<div className="image-box d-table-cell px-3 px-sm-2 px-md-3 px-lg-3 px-xl-3">
								<img className="img-fluid" src={conni1} alt="conni1" width="150px" height="90px" />
							</div>
						</div>
						<p className="filson-pro-reg color-secondary pt-2 text-1 text-left"><span className="color-primary">CertiPUR-US®</span> approved foams are made without ozone depleters, made without PBDE flame retardants, made without mercury, lead and other heavy metals, made without formaldehyde.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 text-left"><span className="color-primary">Eco Institut</span> tested for emission analysis in the test chamber according to ISO 16000, compound analyses for heavy metals, AOX/EOX, biocides, phthalates, flame retardants etc., odour testing according to VDA, toxicological and ecological expertise.</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 text-left"><span className="color-primary">Confidence In Textiles Oeko-Tex®</span> standard 100 certified provide extensive testing on the fabrics to ensure that no substances are present that could be harmful to humans. Oeko-Tex® Standard 100 is an international certification that sets limits for over 100 harmful chemicals, substances, and emissions in textiles.</p>
					</Col>
				</Row>
			</Container>
		</section>
		<section>
			<Container>
				<Row className="mx-0">
					<div className="chirofoam-video mx-auto">
						<video className="" src="https://chirofoam.com/wp-content/uploads/2016/08/Chiro%20Video%202%20HD%20recut%20final_2.mp4" poster={poster} width="100%" controls="controls" autoplay="true" preload="auto" autoplay loop muted="muted" type="video/mp4"/>
					</div>
				</Row>
			</Container>
		</section>
		<section>
			<Container>
				<Row className="py-3 py-sm-5 mb-0 mb-sm-5 mx-0">
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
				<Row className="mx-0 no-gutters">
					<Col className="left-list col-12 col-md-6 col-lg-6 px-0 px-sm-0 px-md-2 px-lg-3 px-xl-3">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">SPECIALTY FEATURES OVERVIEW</h5>
						<ul className="pl-0 list-unstyled left-list filson-pro-reg color-secondary">
							<li>
								<strong>Cool Gel Infused Visco Memory Foam </strong> – Designed to reduce pressure points and motion transfer, while keeping you cool and comfortable during your sleep.
							</li>
							<li>
								<strong>Firm Support Chirofoam™ </strong>– An extremely durable and sag resistant layer of support foam provides an additional “pressure relief buffer” between your body and the core support foam.
							</li>
							<li>
								<strong>Chirofoam™ Lumbar Support </strong> – Posture support layer keeps your back straight while you rest while providing additional support in the center third of the mattress for longevity and long term durability.
							</li>
							<li>
								<strong>High Density Bio-Foam Core</strong> – Core support layer further reduces pressure points while evenly distributing your body weight across the mattress.  Made with natural soy content foam; reducing your carbon footprint.
							</li>
							<li>
								<strong>Soft Luxurious and Breathable Removable Cover</strong> – Easy to remove and wash, soft for sleep comfort, and breathable for a cooler night’s sleep.  Made with a soft cotton top and durable denim borders.
							</li>
						</ul>
					</Col>
					<Col className="right-list col-12 col-md-6 col-lg-6 px-0 px-sm-0 px-md-2 px-lg-3 px-xl-3">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 text-uppercase">TECHNICAL SPECIFICATIONS</h5>
						<p className="filson-pro-reg color-primary">Top Upholstery</p>
						<ul className="color-secondary filson-pro-reg">
							<li>Soft Luxurious and Breathable Removable Cover with Non-Skid Bottom.</li>
							<li>Cotton top with durable denim borders.</li>
							<li>2″ Cool Gel Infused 4lb Visco Memory Foam</li>
							<li>2″ Firm Support Chirofoam™</li>
						</ul>
						<p className="filson-pro-reg color-primary">Support System</p>
						<ul className="color-secondary filson-pro-reg">
							<li>Chirofoam™ Lumbar Support</li>
							<li>8″ Optimal High Density Bio-Foam</li>
							<li>Total Mattress Height: 12 inches (30cm).</li>
						</ul>
						<p className="filson-pro-reg color-primary">Additional Information</p>
						<ul className="color-secondary filson-pro-reg">
							<li>Mattress is suitable to work with any solid box spring foundation, platform bed, or slats.</li>
						</ul>
						<p className="filson-pro-reg color-primary">Dimensions</p>
						<ul className="color-secondary filson-pro-reg">
							<li><strong>Single/Twin–</strong> 39″ x 75″ x 12″  (99cm x 191cm x 30cm)</li>
							<li><strong>Twin XL–</strong> 39″ x 80″ x 12″ (99cm x 203cm x 30cm)</li>
							<li><strong>Double/Full–</strong> 54″ x 75″ x 12″ (137cm x 191cm x 30cm)</li>
							<li><strong>Queen–</strong> 60″ x 80″ x 12″ (152cm x 203cm x 30cm)</li>
							<li><strong>King–</strong> 76″ x 80″ x 12″ (193cm x 203cm x 30cm)</li>
							<li><strong>Cali King–</strong> 72″ x 84″ x 12″ (183cm x 213cm x 30cm)</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</section>
		<section className="py-5">
				<div class="twentytwenty-wrapper twentytwenty-horizontal">
				<div className="twentytwenty twentytwenty-container">
					<img title="Chirofoam™ Memory Foam Mattress, Toronto, ON" alt="chirofoamtm-memory-foam-mattress-toronto-on" src={clip1} className="twentytwenty-before" style={{clip:'rect(0px,636px,534px,0px)'}} />
					<img title="Chirofoam™ Memory Foam Mattress, Toronto, ON" alt="chirofoamtm-memory-foam-mattress-toronto-on" src={clip2} className="twentytwenty-after" />
					<div className="twentytwenty-overlay">
						<div className="twentytwenty-before-label">
						</div>
						<div className="twentytwenty-after-label">
						</div>
					</div>
					<div className="twentytwenty-handle" style={{left:'636px'}}>
						<span className="twentytwenty-left-arrow"></span>
						<span className="twentytwenty-right-arrow"></span>
					</div>
				</div>
				</div>
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
