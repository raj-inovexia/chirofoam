import React, {useState, useEffect} from 'react';
import {useStaticQuery, Link} from "gatsby"
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
  Modal
} from 'reactstrap';
import SEO from '~/components/seo'
import "../assets/css/bootstrap.min.css"

const Reviews = (props) => {
  const shopName = "chirofoam.myshopify.com"
  const [shopID, setShopID] = useState('')
  const [productID, setProductID] = useState('')
  const [productHandle, setProductHandle] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productRating, setProductRating] = useState(0)
  const [productImg, setProductImg] = useState('')
  const [showReviews, setShowReviews] = useState(5)
  const [avgRating, setAvgRating] = useState(0)
  const [totalRating, setTotalRating] = useState(0)
  const [data, setData] = useState([])
  const [overAllRating, setOverAllRating] = useState({})
  const [activeTab, setActiveTab] = useState('1')
  const [modal, setModal] = useState(false)
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

  const handleLoadMore = () => {
    if (data.length >= showReviews) {
      setShowReviews(showReviews + 5)
    }
  }
  const submitReview = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
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
      const res = await fetch(URL);
      res.json().then((responseJson) => {
        setShopID(responseJson.data.shopify_id)
        fetchAllRating(`https://reviews.hulkapps.com/api/shop/${responseJson.data.shopify_id}/reviews/all`)
      })
    }
    fetchShopID(`https://reviews.hulkapps.com/api/shop?shopify_domain=${shopName}`)
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
      <div className="col-md-12">
        <Nav tabs={true} id="tabs" className="d-block">
          <NavItem>
            <NavLink className={activeTab === '1'
                ? 'active'
                : ''} onClick={() => setActiveTab('1')}>
              Customer Reviews
            </NavLink>
          </NavItem>
          <NavItem>
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
              <div id="customer-revieew" className="tab-pane active show m-auto pb-5 position-relative" style={{
                  width: '85%'
                }}>
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
                <Row className="mx-0">
                  <Col sm="6" className="text-center py-0 py-sm-5 py-lg-5 py-xl-5">
                    <p className="erbaum-bold color-secondary pt-5 mt-3">{avgRating}
                      out of 5 stars</p>
                    <p>
                      <span>{totalRating}
                      </span>
                      reviews
                    </p>
                  </Col>
                  <Col sm="6" className="py-5">
                    <div className="p-0 list-unstyled review-details w-75 float-left float-sm-right float-lg-right float-xl-right">
                      {
                        Object.keys(overAllRating).reverse().map((index) => (<div key={index} className="w-100 d-flex color-primary mb-4">{index}<i className=" pl-1 pr-3 color-primary fa fa-star"></i>
                          <div className="progress rounded-0 bg-transparent w-75 mt-1">
                            <div className="progress-bar rounded-0 mr-4" style={{
                                width: ((overAllRating[index] / totalRating) * 100) + '%',
                                backgroundColor: 'rgb(186, 33, 84)'
                              }}></div>
                          </div>{overAllRating[index]}</div>))
                      }
                    </div>
                  </Col>
                </Row>
                <Row className="mx-0">
                  <div className="w-100 m-auto">
                    <ul className="list-unstyled p-0 ratings">
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
                    {
                      (data.length >= showReviews) && <p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0 text-center">
                          <button className="btn-cta color-primary erbaum-bold space-1 bg-transparent border-0 p-0" onClick={handleLoadMore} style={{
                              outline: 'none'
                            }}>LOAD MORE</button>
                        </p>
                    }
                  </div>
                </Row>
              </div>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div id="tabsContent" className="tab-content border border-top-0">
              <div id="leave-review" className="m-auto py-5 col-12 col-sm-10 col-lg-10 col-xl-10 p-0 px-sm-2">
                <Row className="mx-0">
                  <div className="col-12 col-sm-12 col-lg-6 col-xl-6 m-auto d-flex no-gutters select-mattress">
                    {
                      allShopifyProduct.nodes.map((item, i) => (<Col key={i} className="col-6">
                        <div className="card card-body text-center border-0 px-0 px-sm-2 px-lg-2 px-xl-2 mx-1">
                          <button onClick={e => openModal(e, window.atob(item.shopifyId).split("/").pop(), item)} className="filson-pro-reg space-1 px-3 px-sm-4 px-lg-4 px-xl-4">{
                              item.title.includes('XF')
                                ? 'Chirofoam X-Firm mattress'
                                : 'Chirofoam Premium Mattress'
                            }</button>
                          <p className="filson-pro-reg pt-4 color-secondary">Click here to add your reviews for our {item.title}</p>
                        </div>
                      </Col>))
                    }
                  </div>
                </Row>
              </div>
            </div>
          </TabPane>
        </TabContent>
      </div>
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
      <div className="modal-header border-bottom-0">
        <h5 className="modal-title mx-auto">Write Review</h5>
        <button type="button" className="close ml-0 d-md-none" onClick={closeModal} aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body py-0">
        <div className="card rounded-0">
          <div className="card-header bg-transparent">
            <h6 className="card-title mb-0 text-center">{productTitle}</h6>
          </div>
          <div className="card-body">
            <div className="form-row">
              <div className="col-6 form-group">
                <input type="text" className="form-control rounded-0" name="author" placeholder="Name" required={true}/>
              </div>
              <div className="col-6 form-group">
                <input type="email" className="form-control rounded-0" name="email" placeholder="E-mail" required={true}/>
              </div>
            </div>
            <div className="col-12 form-group">
              <label>Rating:&nbsp;</label>
              <div className="rating-starts">
                {
                  [...Array(5)].map((elem, i) => (<button key={i} rating-value={i} rating-text={i} className="p-0 border-0 bg-transparent p-0 border-0 bg-transparent">
                    <span className="color-primary fa fa-star-o"></span>
                  </button>))
                }
              </div>
            <input type="hidden" name="rating" value={productRating} />
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
          </div>
        </div>
      </div>
      <div className="modal-footer border-top-0 justify-content-center">
        <input type="hidden" name="shopify_id" value={shopID}/>
        <input type="hidden" name="product_id" value={productID}/>
        <input type="hidden" name="product_handle" value={productHandle}/>
        <input type="hidden" name="product_title" value={productTitle}/>
        <input type="hidden" name="product_image" value={productImg}/>
        <button type="submit" className="btn btn-custom-primary text-white" style={{
            opacity: 1
          }}>Submit</button>
      </div>
    </form>
  </Modal>
  <Footer/> < />
);
};
export default Reviews;
