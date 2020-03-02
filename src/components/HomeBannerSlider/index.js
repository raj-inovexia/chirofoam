import React from 'react';
import Slider from "react-slick";
import { Link } from "gatsby"
import {Container, Row, Col, Media} from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeBannerSlider =()=> {
  const settings = {
      dots:false,
      arrows: true,
      infinite: true,
      speed:1000,
      autoplaySpeed:5000,
      centerMode:false,
     autoplay:true,
     slidesToShow: 1,
      slidesToScroll: 1

    };
    return (
      <div>
        <Slider {...settings}>
         <div className="home-banner bg-image">
           <div className="container-large position-relative">
              <div className="" style={{color: '#fff',right:'0', left:'0'}}>
                <div className="">
                  <Row>
                    <Col md="6">
        
                    </Col>
                    <Col md="6" className="text-center banner-home" style={{right:'0'}}>      
                          <p className="leads filson-pro-reg space-4 pt-2 animated fadeInDown slow text-uppercase">CHIROFOAM MEMORY FOAM MATTRESS</p>
                         <h2 className="erbaum-bold space-4 pl-sm-0 pl-xl-4 pl-lg-4 animated fadeInRight slow" style={{fontStyle:'italic'}}>UPGRADE</h2>
                         <h3 className="erbaum animated fadeInUp slow">YOUR SLEEP</h3>
                         <p className="cta mt-0 pt-sm-1 pt-lg-1 pt-xl-1 mb-sm-2 pl-0 animated fadeInLeft slow">
                           <Link to="/product/the-original-chirofoam™-mattress-luxury-firm/" className="btn-cta text-white erbaum-bold space-1">BUY NOW</Link>
                         </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
         </div>
         <div className="home-banner bg-image">
           <div className="container-large position-relative">
              <div className="" style={{color: '#fff',right:'0', left:'0'}}>
                <div className="">
                  <Row>
                    <Col md="6">
        
                    </Col>
                    <Col md="6" className="text-center banner-home" style={{right:'0'}}>      
                          <p className="leads filson-pro-reg space-4 pt-2 animated fadeInDown slow text-uppercase">Chirofoam XF Extra Firm Memory Foam Mattress</p>
                         <h2 className="erbaum-bold space-4 pl-sm-0 pl-xl-4 pl-lg-4 animated fadeInRight slow" style={{fontStyle:'italic'}}>MAXIMUM</h2>
                         <h3 className="erbaum animated fadeInUp slow">SUPPORT</h3>
                         <p className="cta mt-0 pt-sm-1 pt-lg-1 pt-xl-1 mb-sm-2 pl-0 animated fadeInLeft slow">
                           <Link to="/product/the-chirofoam™-xf-mattress-extra-firm/" className="btn-cta text-white erbaum-bold space-1">BUY NOW</Link>
                         </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
         </div>
        </Slider>
      </div>
    );

}
export default HomeBannerSlider;
