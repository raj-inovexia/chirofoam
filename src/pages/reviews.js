import React, {useState, useEffect} from 'react'
import {graphql, useStaticQuery, Link} from "gatsby"
import Recaptcha from 'react-recaptcha'
import Header from "../components/header"
import Footer from "../components/footer"
import {
  Container,
  Jumbotron,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  Alert
} from 'reactstrap'
import SEO from '~/components/seo'
import atob from "atob"
import "~/assets/css/bootstrap.min.css"
import "~/assets/js/custom.js"

const Reviews = (props) => {
  const shopName = "chirofoam.myshopify.com"
  const [shopID, setShopID] = useState('')
  const [productID, setProductID] = useState('')
  const [productHandle, setProductHandle] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productRating, setProductRating] = useState(0)
  const [productImg, setProductImg] = useState('')
  const [showReviews, setShowReviews] = useState(5)
  const [loadingReviews, setLoadingReviews] = useState(false)
  const [avgRating, setAvgRating] = useState(0)
  const [totalRating, setTotalRating] = useState(0)
  const [data, setData] = useState([])
  const [overAllRating, setOverAllRating] = useState({})
  const [activeTab, setActiveTab] = useState('1')
  const [isVerified, setVerified] = useState(false)
  const [recaptchaInstance, setRecaptchaInstance] = useState(null)
  const [modal, setModal] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [responseColor, setResponseColor] = useState("")
  const [responseContent, setResponseContent] = useState(false)
  const [responseVisible, setResponseVisible] = useState(false)
  const dismissResponse = () => {
    setResponseVisible(false)
    setResponseContent(false)
  }
  const closeModal = () => setModal(false)
  const openModal = (e, id, item) => {
    const image = item.title.includes('XF')
      ? '//cdn.shopify.com/s/files/1/0254/7731/6663/products/chrofoam-xf-queen-10NNew-600x307_1_large.jpg'
      : '//cdn.shopify.com/s/files/1/0254/7731/6663/products/Chirofoam-Memory-Foam-Mattress-Angle-4-600x307_large.jpg'
    setProductID(id)
    setProductHandle(item.handle)
    setProductTitle(item.title)
    setProductImg(image)
    setModal(true)
  }
  const mouseOverRating = (event, selectedButton) => {
    event.preventDefault()
    const buttons = document.querySelectorAll(".rating-starts button")
    for (let i = 0; i <= selectedButton; i++) {
      buttons[i].firstChild.classList.remove('fa-star-o')
      buttons[i].firstChild.classList.add('fa-star')
    }
  }
  const mouseLeaveRating = (event, selectedButton) => {
    event.preventDefault()
    if (productRating === 0) {
      const buttons = document.querySelectorAll(".rating-starts button")
      for (let i = 0; i <= selectedButton; i++) {
        buttons[i].firstChild.classList.remove('fa-star')
        buttons[i].firstChild.classList.add('fa-star-o')
      }
    }
  }
  const changeRating = (event, selectedButton) => {
    event.preventDefault()
    const spans = document.querySelectorAll(".rating-starts button span")
    spans.forEach((span) => {
      span.classList.remove('fa-star')
      span.classList.add('fa-star-o')
    })
    const buttons = document.querySelectorAll(".rating-starts button")
    for (let i = 0; i <= selectedButton; i++) {
      buttons[i].firstChild.classList.remove('fa-star-o')
      buttons[i].firstChild.classList.add('fa-star')
    }
    setProductRating(selectedButton + 1)
  }
  const externalCloseBtn = <button className="close d-none d-md-inline-block" style={{
      position: 'absolute',
      top: '0',
      right: '15px',
      fontSize: '3em',
      color: '#fff'
    }} onClick={closeModal}>&times;</button>
  const {allShopifyProduct} = useStaticQuery(graphql `query {
      allShopifyProduct(sort: {fields: [title], order: DESC}) {
        nodes {
          title
          handle
          shopifyId
          images {
            originalSrc
          }
        }
      }
    }`)
  const response = <Alert className="rounded-0" isOpen={responseVisible} toggle={dismissResponse} color={responseColor}>{responseContent}</Alert>
  const handleLoadMore = () => {
    if (data.length >= showReviews) {
      setLoadingReviews(true)
      setTimeout(() => {
        setShowReviews(showReviews + 5)
        setLoadingReviews(false)
      }, 3000)
    }
  }
  const recaptchaReference = (event) => {
    setRecaptchaInstance(event)
  }
  const resetRecaptcha = () => {
    recaptchaInstance.reset()
  }
  const verifyCaptcha = () => {
    setResponseColor("")
    dismissResponse()
    setVerified(true)
  }
  const expiredCaptcha = () => {
    setResponseVisible(true)
    setResponseColor("warning")
    setResponseContent(<div>
      <strong>Verification Expired!&nbsp;</strong>Check the Checkbox Again.</div>)
    setVerified(false)
  }
  const submitReview = (event) => {
    event.preventDefault()
    setSubmitting(true)
    if (isVerified) {
      const reviewForm = event.target
      const elements = event.target.elements
      const data = {
        author: elements.author.value,
        email: elements.email.value,
        rating: parseInt(elements.rating.value),
        title: elements.title.value,
        body: elements.body.value,
        shopify_id: elements.shopify_id.value,
        product_id: parseInt(elements.product_id.value),
        product_handle: elements.product_handle.value,
        product_title: elements.product_title.value,
        product_image: elements.product_image.value
      }
      const sendReview = async (URL) => {
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
              setResponseVisible(true)
              setResponseColor("success")
              setResponseContent(<strong>{responseJson.message}</strong>)
              reviewForm.reset()
              setProductRating(0)
              const spans = document.querySelectorAll(".rating-starts button span")
              spans.forEach((span) => {
                span.classList.remove('fa-star')
                span.classList.add('fa-star-o')
              })
              resetRecaptcha()
              setSubmitting(false)
            })
          } else if (response.status === 422) {
            response.json().then((responseJson) => {
              setResponseVisible(true)
              setResponseColor("warning")
              setResponseContent(<><strong> {
                responseJson.message
              }</strong> < ul className = "mb-0 pl-4" > {
                Object.keys(responseJson.errors).map((error) => (<li key={error}>{responseJson.errors[error][0]}</li>))
              } < /ul></ >)
              setSubmitting(false)
            })
          }
        }).catch((error) => {
          console.log(error)
        })
      }
      sendReview(`//reviews.hulkapps.com/api/shop/${shopID}/reviews`)
    } else {
      setResponseVisible(true)
      setResponseColor("warning")
      setResponseContent(<div>
        <strong>Verify!&nbsp;</strong>
        Your are not a bot.</div>)
      setSubmitting(false)
    }
  }
  const getDate = (date) => {
    const Months = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    const msec = Date.parse(date)
    const d = new Date(msec)
    const month = Months[d.getMonth()]
    const day = d.getDate()
    const year = d.getFullYear()
    return `${month} ${day}, ${year}`
  }
  useEffect(() => {
    const fetchAllRating = async (URL) => {
      const res = await fetch(URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      res.json().then((responseJson) => {
        const allRating = responseJson.data
        let starRatings = {
          5: 0,
          4: 0,
          3: 0,
          2: 0,
          1: 0
        }
        let sum = 0
        allRating.forEach(function(v) {
          starRatings[v.rating] = (starRatings[v.rating] || 0) + 1
          sum += v.rating
        })
        setTotalRating(allRating.length)
        setAvgRating((sum / allRating.length).toFixed(2))
        setOverAllRating(starRatings)
        setData(allRating)
      })
    }
    const fetchShopID = async (URL) => {
      const res = await fetch(URL)
      res.json().then((responseJson) => {
        setShopID(responseJson.data.shopify_id)
        fetchAllRating(`//reviews.hulkapps.com/api/shop/${responseJson.data.shopify_id}/reviews/all`)
      })
    }
    fetchShopID(`//reviews.hulkapps.com/api/shop?shopify_domain=${shopName}`)
  }, [])
  return (<> < SEO title = "CHIROFOAM™ MATTRESS REVIEWS" /> <Header/>
  <section>
    <Container>
      <Row className="mx-0">
        <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
          <h2 className="font-weight-bold display-5 color-primary erbaum-bold text-uppercase pt-5 space-2">Chirofoam™ Mattress Reviews
          </h2>
          <p className="filson-pro-reg color-primary space-2 pt-5" style={{
              fontSize: '24px'
            }}>97% Customer Satisfaction Rate
          </p>
        </Jumbotron>
      </Row>
    </Container>
  </section>

  <section className="mb-0 py-5 position-relative">
    <Container>
      <Row>
        <div className="col-md-12">
          <Nav tabs={true} id="tabs" className="nav-fill flex-md-wrap flex-nowrap">
            <NavItem className="flex-md-grow-0 flex-grow-1">
              <NavLink className={activeTab === '1'
                  ? 'active'
                  : ''} onClick={() => setActiveTab('1')}>
                Customer Reviews
              </NavLink>
            </NavItem>
            <NavItem className="flex-md-grow-0 flex-grow-1">
              <NavLink className={activeTab === '2'
                  ? 'active'
                  : ''} onClick={() => setActiveTab('2')}>
                Leave A Review
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <div id="tabsContent" className="tab-content border border-top-0">
                <div id="customer-revieew" className="col-12 col-md-10 m-auto pb-5 position-relative">
                  {
                    (avgRating === 0) && <div className="h-100 w-100 bg-white d-flex justify-content-center align-items-center position-absolute" style={{
                          zIndex: 1
                        }}>
                        <div className="spinner-border color-primary" role="status" style={{
                            width: '5rem',
                            height: '5rem',
                            borderWidth: '.5rem'
                          }}>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                  }
                  <Row className="mx-0 align-items-center">
                    <Col md="6" className="pt-5 p-sm-0 text-center col-12">
                      <p className="erbaum-bold color-secondary pt-5 mt-3">{avgRating}&nbsp; out of 5 stars</p>
                      <p>
                        <span>{totalRating}&nbsp;
                        </span>
                        reviews
                      </p>
                    </Col>
                    <Col md="6" className="py-5 col-12">
                      <div className="p-0 list-unstyled col-md-9 review-details">
                        {
                          Object.keys(overAllRating).reverse().map((index) => (<div key={index} className="w-100 d-flex color-primary mb-4">
                            <span>{index}</span>
                            <i className=" pl-1 pr-3 color-primary fa fa-star"></i>
                            <div className="progress rounded-0 bg-transparent p-0 flex-grow-1 mt-1">
                              <div className="progress-bar rounded-0" style={{
                                  width: ((overAllRating[index] / totalRating) * 100) + '%',
                                  backgroundColor: 'rgb(186, 33, 84)'
                                }}></div>
                            </div>
                            <span>{overAllRating[index]}</span>
                          </div>))
                        }
                      </div>
                    </Col>
                  </Row>
                  <Row className="mx-0">
                    <div className="w-100 m-auto">
                      <ul className="list-unstyled d-inline-block p-0 mb-0 ratings">
                        {
                          data.slice(0, showReviews).map((review, index) => (<li className="border mb-4" key={index}>
                            <h4 className="color-primary erbaum-bold text-uppercase" style={{
                                fontSize: '16px'
                              }}>{review.product_title}</h4>
                            <div className="d-inline-block br-widget br-readonly pt-2" title={"Rating: " + review.rating}>
                              {
                                [...Array(review.rating)].map((elem, i) => (<button data-rating-value={i} data-rating-text={i} className={(
                                    (review.rating - 1) === i)
                                    ? "p-0 border-0 bg-transparent p-0 border-0 bg-transparent"
                                    : "br-selected p-0 border-0 bg-transparent p-0 border-0 bg-transparent"} key={i}>
                                  <span className="color-primary fa fa-star"></span>
                                </button>))
                              }
                              <div className="br-current-rating d-none">{review.rating}</div>
                            </div>
                            <p className="filson-pro-reg pt-2" style={{
                                fontSize: '14px'
                              }}>
                              <b className="color-primary">{review.author}–</b>
                              {getDate(review.created_at)}</p>
                            <p className="filson-pro-reg text-1 color-secondary mb-0 pb-0">{review.body}</p>
                          </li>))
                        }
                      </ul>
                      <div className="position-relative">
                        {
                          (loadingReviews) && <div className="h-100 w-100 bg-white d-flex justify-content-center align-items-center position-absolute" style={{
                                zIndex: 1
                              }}>
                              <div className="spinner-border color-primary" role="status" style={{
                                  width: '3rem',
                                  height: '3rem'
                                }}>
                                <span className="sr-only">Loading...</span>
                              </div>
                            </div>
                        }
                        {
                          (data.length >= showReviews) && <p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-center">
                              <button className="btn-cta color-primary erbaum-bold space-1 bg-transparent border-0 p-0" onClick={handleLoadMore} style={{
                                  outline: 'none'
                                }}>LOAD MORE</button>
                            </p>
                        }
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="2">
              <div id="tabsContent" className="tab-content border border-top-0">
                <div id="leave-review" className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
                  <Row>
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6 m-auto select-mattress">
                      <Row className="no-gutters">
                        {
                          allShopifyProduct.nodes.map((item, i) => (<div key={i} className="col-md-6 col-10 mx-auto">
                            <div className="card card-body text-center border-0 px-0 px-sm-2 px-lg-2 px-xl-2 mx-1">
                              <button onClick={e => openModal(e, atob(item.shopifyId).split("/").pop(), item)} className="filson-pro-reg space-1 px-3 px-sm-4 px-lg-4 px-xl-4">{
                                  item.title.includes('XF')
                                    ? 'Chirofoam X-Firm mattress'
                                    : 'Chirofoam Premium Mattress'
                                }</button>
                              <p className="filson-pro-reg pt-4 color-secondary">Click here to add your reviews for our {item.title}</p>
                            </div>
                          </div>))
                        }
                      </Row>
                    </div>
                  </Row>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
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
        <p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{
            fontSize: '20px'
          }}>“A great quality mattress I enjoy waking up on every day…”
          <br/>
          -Mark F. from Toronto, Ontario</p>
        <p className="cta mt-0 pt-sm-4 pt-lg-4 pt-xl-4 w-100 text-center mt-4 mt-sm-0">
          <Link to="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</Link>
        </p>
        <p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{
            fontSize: '20px'
          }}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p>
      </Row>
    </Container>
  </section>
  <Modal size="lg" isOpen={modal} toggle={closeModal} centered={true} contentClassName="rounded-0 border-0" external={externalCloseBtn}>
    <form encType="multipart/form-data" onSubmit={e => submitReview(e)}>
      <div className="modal-header border-bottom-0 position-relative">
        <h5 className="modal-title mx-auto">Write Review</h5>
        <button type="button" className="close m-0 d-md-none position-absolute" onClick={closeModal} aria-label="Close" style={{
            top: 0,
            right: 0
          }}>
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body py-0">
        <div className="card rounded-0">
          <div className="card-header bg-transparent">
            <h6 className="card-title mb-0 text-center">{productTitle}</h6>
          </div>
          <div className="card-body">
            {response}
            <div className="form-row">
              <div className="col-6 form-group">
                <input type="text" className="form-control rounded-0" name="author" placeholder="Name" required={true}/>
              </div>
              <div className="col-6 form-group">
                <input type="email" className="form-control rounded-0" name="email" placeholder="E-mail" required={true}/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-12 form-group">
                <label htmlFor="rating">Rating:&nbsp;{productRating}&nbsp;</label>
                <div className="rating-starts d-inline">
                  {
                    [...Array(5)].map((elem, i) => (<button key={i} className="p-0 border-0 bg-transparent p-0 border-0 bg-transparent outline-none" onMouseOver={e => mouseOverRating(e, i)} onFocus={e => mouseOverRating(e, i)} onMouseLeave={e => mouseLeaveRating(e, i)} onBlur={e => mouseLeaveRating(e, i)} onClick={e => changeRating(e, i)}>
                      <span className="color-primary fa fa-star-o"></span>
                    </button>))
                  }
                </div>
                <input type="hidden" name="rating" value={productRating}/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-12 form-group">
                <input type="text" className="form-control rounded-0" name="title" placeholder="Review Title" required={true}/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-12 form-group">
                <textarea className="form-control rounded-0" name="body" placeholder="Review Body" rows="4" required={true} style={{
                    resize: 'none'
                  }}></textarea>
              </div>
            </div>
            <div className="form-row">
              <div className="col-sm-12">
                <div className="d-flex justify-content-center">
                  <Recaptcha ref={e => recaptchaReference(e)} sitekey="6LcWuNwUAAAAAM1qrJeF08ksnyt_l-MFIQ9oXJj4" render="explicit" verifyCallback={verifyCaptcha} expiredCallback={expiredCaptcha}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer border-top-0 justify-content-center">
        <input type="hidden" name="shopify_id" value={shopID}/>
        <input type="hidden" name="product_id" value={productID}/>
        <input type="hidden" name="product_handle" value={productHandle}/>
        <input type="hidden" name="product_title" value={productTitle}/>
        <input type="hidden" name="product_image" value={productImg}/>
        <button type="submit" className={(
            submitting)
            ? "btn btn-custom-primary color-primary position-relative"
            : "btn btn-custom-primary text-white"} style={{
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
          Submit</button>
      </div>
    </form>
  </Modal>
  <Footer/> < />
)
}
export default Reviews
