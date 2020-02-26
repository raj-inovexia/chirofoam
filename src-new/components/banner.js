import React from 'react';
import Header from '../components/header'
import {Row, Col} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import "../assets/css/animate.css"
import HomeBannerSlider from '../components/HomeBannerSlider'

const Banner = () => {

	return(
	<header className="header-outer home-page">
		<div className="banner-slider position-relative">
			<HomeBannerSlider />
		</div>
		<Header color="dark" />
	</header>
	)
}

export default Banner;
