import React, {useState, useEffect} from 'react';
import Recaptcha from 'react-recaptcha'
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import {Container,Jumbotron, Row, Col, Form} from 'reactstrap';
import "../assets/css/bootstrap.min.css"
import "~/assets/css/bootstrap.min.css"
import "~/assets/js/custom.js"



export default (props) => {
 const [data, setData] = useState([])
  const [overAllRating, setOverAllRating] = useState({})
  const [activeTab, setActiveTab] = useState('1')
  const [recaptchaInstance, setRecaptchaInstance] = useState(null)
  const [modal, setModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [responseColor, setResponseColor] = useState("")
  const [responseContent, setResponseContent] = useState(false)
  const [responseVisible, setResponseVisible] = useState(false)

const submitForm = (event) => {
    event.preventDefault()
    setSubmitting(true)
      const reviewForm = event.target
      const elements = event.target.elements
      const data = {
      	domain: elements.domain.value,
      	mail_to: elements.mail_to.value,
        name: elements.name.value,
        email: elements.email.value,
        subject: elements.subject.value,
        message: elements.message.value
      }
      const sendFormData = async (URL) => {
        return await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-requested-with': 'XMLHttpRequest'
          },
          body: JSON.stringify(data)
        }).then((response) => {
          if (response.status === 200) {
            response.json().then((responseJson) => {
    
              setSubmitting(false)
            })
            
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      sendFormData("https://contactform.hulkapps.com/ajaxcall/customcontact")
   
   
  }

  return (
	<>
		<Header />
		<section>
			<div className="container-large">
				<Row>
					<Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
						<h1 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">CUSTOMER SERVICE</h1>
					</Jumbotron>
				</Row>
			</div>
		</section>
		<section className="mb-0 py-5 position-relative">
			<Container>
				<Row>
					<Col sm="6" className="mb-3 mb-sm-5">
						<h5 className="erbaum-bold color-primary pb-2 pb-sm-5 mb-0 text-uppercase">GET IN TOUCH</h5>
						<p className="filson-pro-reg color-secondary pt-2 text-1">If you have any questions, concerns, of would like to contact us, simply fill out the contact form and a member of our team will get back to you as soon as possible.  You can also email us directly: info@chirofoam.com</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1">Prefer to talk to us by phone? <br/>
						Give us a call:
						</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1"><strong>1 (888) CHIRO-31 </strong><br/>1 (888) 244-7631</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1">Our sleep experts are on call <br/>
						Mon-Fri 10am-6pm (EST)</p>
						<p className="filson-pro-reg color-secondary pt-2 pt-sm-2 pt-lg-5 pt-xl-5 text-1">You may also call our local Toronto, Ontario office at: (905) 766-3380</p>
						<p className="filson-pro-reg color-secondary pt-2 pt-sm-2 pt-lg-5 pt-xl-5 text-1">Chirofoam Mattress Company, Head Office</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1">130 King Street West <br/> Suite 1800 <br/> Toronto, Ontario 
						<br/> M5X 1E3 <br/> Canada</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1">Office hours: <br/> Mon-Fri 10am-6pm (EST) </p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 pt-sm-2 pt-lg-5 pt-xl-5">Distribution Center:</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1">1550 Meyerside Drive <br/> Unit#2 <br/> Mississauga, Ontario 
						<br/> L5T 1V4 <br/> Canada</p>
						<p className="filson-pro-reg color-secondary pt-2 text-1 pt-sm-2 pt-lg-5 pt-xl-5">Our manufacturing plant located in Toronto, ON is not open to the public, however we may schedule a plant tour by appointment for wholesale clients.</p>
					</Col>
					<Col sm="6" className="mb-3 mb-sm-5 pt-3 pt-sm-3 pt-lg-5 pt-xl-5 email-form">
					<form action="#" method="post" id="contact_form_custom" encType="multipart/form-data" onSubmit={e => submitForm(e)}>
					
					      <div className="modal-body py-0">
					       
					          
					            <div className="form-row">
					            	<input type="hidden" name="domain" value="chirofoam.myshopify.com" />
			            			<input type="hidden" name="mail_to" value="asifaziz01@gmail.com" />
					              <div className="col-6 form-group">
					                <input type="text" className="form-control rounded-0" name="name" id="name" required={true}  className="form-control required error" placeholder="Your Name*"/>
					              </div>
					              <div className="col-6 form-group">
					                <input type="email" className="form-control rounded-0" name="email" placeholder="Your Email*" required={true}/>
					              </div>
					            </div>
					            <div className="form-row">
					              <div className="col-12 form-group">
					                <input type="text" className="form-control rounded-0" name="subject" id="subject" placeholder="Your Subject*" required={true}/>
					              </div>
					            </div>
					            <div className="form-row">
					              <div className="col-sm-12 form-group">
					                <textarea className="form-control rounded-0" name="message" id="message" placeholder="Your Message*" rows="10" required={true} style={{
					                    resize: 'none'
					                  }}></textarea>
					              </div>
					            </div>
					           
					          
					      </div>
					      <div className="modal-footer border-top-0 justify-content-center">
					       
					        <button type="submit" id="form_submit" className={(
					            submitting)
					            ? "btn btn-custom-primary color-primary position-relative w-100"
					            : "btn btn-custom-primary text-white w-100"} style={{
					            opacity: 1
					          }} disabled={submitting}>
					          {
					            (submitting) &&< div className = "h-100 w-100 bg-custom-primary d-flex justify-content-center align-items-center position-absolute" style = {{
					              zIndex: 1,
					              left: 0,
					              top: 0
					            }} > <div className="spinner-border text-white" role="status">
					                <span className="sr-only">Loading...</span>
					              </div>
					            </div>
					          }
					          SEND</button>
					      </div>
					    </form>
					</Col>
				</Row>
			</Container>
		</section>
		<section className="rating-and-review py-3">
			<Container className="pb-5 pb-lg-5 pb-xl-5">
				<Row>
					<p className="text-center w-100 star">
						<i className="fa fa-star star-small"></i>
						<i className="fa fa-star star-medium ml-2"></i>
						<i className="fa fa-star star-large mx-2"></i>
						<i className="fa fa-star star-medium mr-2"></i>
						<i className="fa fa-star star-small"></i>
					</p>
					<p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{fontSize:'20px'}}>“A great quality mattress I enjoy waking up on every day…” <br/>  -Mark F. from Toronto, Ontario</p>
					<p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center">
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
