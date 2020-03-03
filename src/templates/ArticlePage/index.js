import React, {useState, useEffect} from 'react'
import Recaptcha from 'react-recaptcha'
import Header from "~/components/header"
import Footer from "~/components/footer"
import {Container, Row, Col, Alert} from 'reactstrap'
import { graphql } from 'gatsby'
import SEO from '~/components/seo'
import RecentPosts from "~/components/Blogs/RecentPostsFooter"
import atob from "atob"
import "~/assets/css/bootstrap.min.css"
import "~/assets/js/custom.js"

const ArticlePage = ({data}) => {
  const article = data.shopifyArticle
  const [articleId, setArticleId] = useState(parseInt(atob(article.shopifyId).split("/").pop()))
  const [blogId, setBlogId] = useState(parseInt(atob(article.blog.shopifyId).split("/").pop()))
  const [ip, setIp] = useState("")
  const token = "8688ae404288aacf2fd070b0bf36952a"
  const jsonToQueryString = (json) => {
    return '?' + Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    }).join('&')
  }
  const getIp = (async () => {
    return await fetch(`//api.ipify.org/?format=json`, {
      method: 'GET'
    }).then(results => results.json()).then((data) => {
      setIp(data.ip)
    })
  })()
  const getData = {
    "api": "/admin/api/2020-01/comments.json",
    "blog_id": blogId,
    "article_id": articleId,
    "status": "published",
    "order": "updated_at asc"
  }
  const getDate = (date) => {
    const Months = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
    const d = new Date(date)
    const month = Months[d.getMonth()]
    const day = d.getDate()
    const year = d.getFullYear()
    return `${month} ${day}, ${year}`
  }
  const reqData = jsonToQueryString(getData)
  const [totalComments, setTotalComments] = useState(0)
  const [comments, setComments] = useState([])
  const [submitting, setSubmitting] = useState(false)
  const [responseColor, setResponseColor] = useState("")
  const [responseContent, setResponseContent] = useState(false)
  const [responseVisible, setResponseVisible] = useState(false)
  const [isVerified, setVerified] = useState(false)
  const [recaptchaInstance, setRecaptchaInstance] = useState(null)
  const dismissResponse = () => {
    setResponseColor("")
    setResponseVisible(false)
    setResponseContent(false)
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
  const response = <Alert className="rounded-0" isOpen={responseVisible} toggle={dismissResponse} color={responseColor}>{responseContent}</Alert>
  const handlePostComment = (event) => {
    event.preventDefault()
    setSubmitting(true)
    if (isVerified) {
    const elements = event.target.elements
    const data = {
      api: "/admin/api/2020-01/comments.json",
      query: {
        comment: {
          author: elements.author.value,
          email: elements.email.value,
          body: elements.body.value,
          article_id: articleId,
          blog_id: blogId,
          ip: ip
        }
      }
    }
    const sendComment = async (URL) => {
      return await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "X-Shopify-Access-Token": token
        },
        body: JSON.stringify(data)
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((responseJson) => {
            setResponseVisible(true)
            setResponseColor("success")
            setResponseContent(<div>Your comment has been submitted <strong>Successfully</strong> and will be published soon.</div>)
            resetRecaptcha()
            setSubmitting(false)
            console.log(responseJson)
          })
        } else {
          response.json().then((responseJson) => {
            console.log(responseJson);
          })
        }
      }).catch((error) => {
        console.error(error)
      })
    }
    sendComment(`//icbtc.com/development/shopify-api/`)
  } else {
    setResponseVisible(true)
    setResponseColor("warning")
    setResponseContent(<div>
      <strong>Verify!&nbsp;</strong>
      Your are not a bot.</div>)
    setSubmitting(false)
  }
  }
  useEffect(() => {
    const fetchComments = (async (URL) => {
      const res = await fetch(URL, {
        method: 'GET',
        headers: {
          "Content-type": "application/json",
          "X-Shopify-Access-Token": token
        }
      })
      res.json().then((responseJson) => {
        if (responseJson.status === 200) {
          setComments(responseJson.response.comments)
          setTotalComments(responseJson.response.comments.length)
        }
      })
    })(`//icbtc.com/development/shopify-api/${reqData}`)
  }, [])
  return (<> <SEO title = {
    article.title
  }
  description = {
    article.excerpt
  } /> <Header/>
  <section className="single-blog py-3 py-sm-3 py-lg-5 py-xl-5" style={{
      backgroundColor: 'rgba(0,0,0,0.1)'
    }}>
    <div className="container">
      <h3 className="text-uppercase filson-pro-reg m-0" style={{
          fontSize: '22px'
        }}>{article.title}</h3>
    </div>
  </section>
  <section className="mb-0 py-5 position-relative">
    <div className="container">
      <Row>
        <Col sm="12" className="align-middle single-article">

          <div className="featured-image position-relative overflow-hidden">
            <img src={article.image.src} className="img-fluid" alt={article.image.altText} style={{
                transition: 'all 0.15s ease-in-out',
                width: '100%'
              }}/>
          </div>
          <h2 className="mb-3 color-primary text-uppercase erbaum-bold pt-4 space-1">{article.title}</h2>
          <Row>
            <Col sm="6">
              <p style={{
                  fontSize: '12px'
                }}>By
                <span>{article.author.firstName}</span>
                In
                <span>{article.blog.title}</span>
                Posted
                <span>{article.publishedAt}</span>
              </p>
            </Col>
            <Col sm="6" className="text-left text-sm-right text-lg-right text-xl-right" style={{
                display: 'ruby'
              }}>
              <span style={{
                  color: 'rgba(0,0,0,0.4)'
                }} className="ml-0 ml-sm-0 ml-lg-4 ml-xl-4">
                <i className="fa fa-share-alt"></i>
                <span className="pl-2">2</span>
              </span>
              <span className="px-2 ml-4" style={{
                  color: 'rgba(0,0,0,0.4)'
                }}>
                <i className="fa fa-envelope"></i>
                <span className="pl-2">{totalComments}</span>
              </span>
              <span className="mb-0 ml-4" style={{
                  color: 'rgba(0,0,0,0.4)'
                }}>
                <i className="fa fa-heart"></i>
                <span className="pl-2">2</span>
              </span>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm="12">
              <div className="filson-pro-reg single-article-content" style={{
                  color: 'rgba(0,0,0,0.5)',
                  fontSize: '13px',
                  lineHeight: '30px'
                }} dangerouslySetInnerHTML={{
                  __html: article.contentHtml
                }}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </section>
  <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
    <div className="container pb-0 pb-sm-5">
      <h3 className="text-center mb-4" style={{
          fontSize: '18px'
        }}>RECENT POSTS</h3>
      <RecentPosts/>
    </div>
  </section>

  <section id="comments" className="py-5 py-sm-3 py-md-3 py-lg-5 py-xl-5">
    <Container>
      <h3 className="text-center mb-4" style={{
          fontSize: '18px'
        }}>SHOWING&nbsp;{totalComments}&nbsp;COMMENTS</h3>
      {
        comments.map((comment, index) => (<div key={index} className="mb-4">
          <div className="profile-card pl-3">
            <div className="media">
              <span className="media-left">
                <i className="fa fa-user-circle"></i>
              </span>
              <div className="media-body my-auto">
                <div className="media">
                  <strong className="media-left color-secondary filson-pro-reg pl-3 color-secondary mt-auto" style={{
                      fontSize: '12px'
                    }}>{comment.author}</strong>
                  <time className="media-body pl-3 color-secondary fs-1 mt-auto" dateTime={comment.published_at}>{getDate(comment.published_at)}</time>
                  <div className="media-right pl-3">
                    <button className="btn btn-link color-secondary p-0 border-0">
                      <strong style={{
                          fontSize: '12px'
                        }}>Reply</strong>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment-card p-3 position-relative mt-3 filson-pro-reg text-1 color-secondary" dangerouslySetInnerHTML={{
              __html: comment.body_html
            }}></div>
        </div>))
      }

    </Container>
  </section>
  <section className="py-5 py-sm-3 py-md-3 py-lg-5 py-xl-5">
    <Container>
      <h3 className="text-center mb-4" style={{
          fontSize: '18px'
        }}>LEAVE A COMMENT</h3>
      <Row className="mx-0">
        <div className="comment-form w-100">
          {response}
          <form onSubmit={e => handlePostComment(e)}>
            <Col className="col-12">
              <textarea name="body" placeholder="LEAVE YOUR COMMENT" className="w-100 text-1 color-secondary filson-pro-reg" rows="10"/>
            </Col>
            <Row className="mx-0 input-data-field">
              <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <input type="text" name="author" placeholder="Name (Required)" required="required" className="w-100 text-1 color-secondary filson-pro-reg"/>
              </Col>
              <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <input type="email" name="email" placeholder="Email (Required)" required="required" className="w-100 text-1 color-secondary filson-pro-reg"/>
              </Col>
              <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <input type="url" name="website" placeholder="Website" className="w-100 text-1 color-secondary filson-pro-reg"/>
              </Col>
            </Row>
            <Row className="mx-0 input-data-field">
              <Col className="col-12">
                  <Recaptcha ref={e => recaptchaReference(e)} sitekey="6LcWuNwUAAAAAM1qrJeF08ksnyt_l-MFIQ9oXJj4" render="explicit" verifyCallback={verifyCaptcha} expiredCallback={expiredCaptcha}/>
              </Col>
            </Row>
            <Row className="mx-0 input-data-field">
              <Col className="col-12">
                  <button type="submit" className={"btn btn-custom-primary btn-lg text-1 filson-pro-reg mt-3 "+(
                      submitting)
                      ? "color-primary position-relative"
                      : "text-white"} style={{
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
                    POST COMMENT</button>
              </Col>
            </Row>
          </form>
        </div>
      </Row>
    </Container>
  </section>
  <Footer/> </>)
}

export const query = graphql `
query ($id: String!) {
  shopifyArticle(id: {eq: $id}) {
    shopifyId
    title
    author {
      firstName
    }
    blog {
      title
      url
      shopifyId
    }
    contentHtml
    excerpt
    image {
      src
      altText
    }
    publishedAt(formatString: "MMMM DD, YYYY")
  }
}`

export default ArticlePage
