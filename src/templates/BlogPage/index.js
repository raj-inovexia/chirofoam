import React, {useState, useEffect} from 'react';
import Header from "~/components/header"
import Footer from "~/components/footer"
import {graphql, Link, navigate} from 'gatsby'
import atob from "atob"
import {
  Jumbotron,
  Row,
  Col,
  Pagination,
  PaginationItem,
  UncontrolledPopover,
  PopoverBody
} from 'reactstrap';
import SEO from '~/components/seo'
import "~/assets/css/bootstrap.min.css"
import RecentBlogs from "~/components/Blogs/RecentBlogs"
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon
} from "react-share"

const BlogPage = ({data}) => {
  const URL = typeof window !== 'undefined'
    ? window.location.origin
    : ''
  const allShopifyArticle = data.allShopifyArticle;
  const token = "8688ae404288aacf2fd070b0bf36952a"
  const pageInfo = allShopifyArticle.pageInfo;
  const currentPage = pageInfo.currentPage;
  const previousPage = (currentPage === 1)
    ? currentPage
    : (currentPage - 1);
  const nextPage = (currentPage === pageInfo.pageCount)
    ? currentPage
    : (currentPage + 1);
  const handlePagination = (e, toPage) => {
    if (currentPage !== toPage) {
      e.preventDefault();
      let path = (toPage === 1)
        ? `/blogs/`
        : `/blogs/${toPage}/`;
      navigate(path)
    }
  }
  const [pageLoaded, setPageLoaded] = useState(false)
  const [ip, setIp] = useState("")
  const jsonToQueryString = (json) => {
    return '?' + Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    }).join('&')
  }
  const fetchLikeCount = (index, articleId, blogId) => {
    console.log(index, articleId, blogId)
    if(pageLoaded){
      const getData = {
        "api": `/admin/api/2020-01/blogs/${blogId}/articles/${articleId}/metafields.json`,
        "namespace": "postlike",
        "value_type": "string",
        "fields": "namespace,key,value"
      }
      const reqData = jsonToQueryString(getData)
      const fetchData = (async (URL) => {
        return await fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            "X-Shopify-Access-Token": token
          }
        }).then((response) => {
          if (response.status === 200) {
            response.json().then((responseJson) => {
              console.log(responseJson)
              document.getElementById(`count-${index}`).innerHTML = responseJson.response.metafields.length
            })
          }
        }).catch((error) => {
          console.error(error)
        })
      })(`//icbtc.com/development/shopify-api/${reqData}`)
    }
  }
  const postLike = (event, index, articleId, blogId, Ip) => {
    const data = {
      api: `/admin/api/2020-01/blogs/${blogId}/articles/${articleId}/metafields.json`,
      query: {
        metafield: {
          namespace: "postlike",
          key: Ip,
          value: "liked",
          value_type: "string"
        }
      }
    }
    const sendLike = (async (URL) => {
      console.log(URL, data)
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
            fetchLikeCount(index, articleId, blogId)
            console.log(responseJson, index, articleId, blogId)
          })
        }
      }).catch((error) => {
        console.error(error)
      })
    })(`//icbtc.com/development/shopify-api/`)
  }
  useEffect(() => {
    const getIp = (async () => {
      return await fetch(`//api.ipify.org/?format=json`, {method: 'GET'}).then(results => results.json()).then((data) => {
        setIp(data.ip)
        setPageLoaded(true)
      })
    })()
  }, [])
  return (<> <SEO title="Chirofoam™ Memory Foam Mattresses" description="Sleep Education and Chirofoam™ News" /> <Header/>
  <section className="blue-bg charity">
    <Jumbotron className="mb-0 text-center text-white bg-transparent space-1 w-100 m-auto">
      <h2 className="font-weight-bold erbaum-bold text-uppercase pt-md-5 space-2 pt-sm-1">Chirofoam™ Memory Foam Mattresses</h2>
      <p className="space-4 proxima-r text-white m-auto text-center px-0 px-sm-5 px-lg-5 px-xl-5 pt-2 pt-sm-4" style={{
          width: '90%',
          fontSize: '26px'
        }}>Sleep Education and Chirofoam™ News</p>
    </Jumbotron>
  </section>
  <section className="mb-0 py-5 position-relative">
    <div className="container-large">
      <Row>
        <Col sm="8" className="align-middle">
          {
            allShopifyArticle.edges
              ? allShopifyArticle.edges.map(({
                node: {
                  id,
                  shopifyId,
                  url,
                  title,
                  content,
                  excerpt,
                  publishedAt,
                  image,
                  author,
                  blog,
                  comments
                }
              }, index) => (<div className="blogs-section mb-4" key={index}>
                {fetchLikeCount(index, parseInt(atob(shopifyId).split("/").pop()), parseInt(atob(blog.shopifyId).split("/").pop()))}
                <div className="featured-image position-relative overflow-hidden">
                  <Link to={`/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} state={{
                      fromFeed: true
                    }}>
                    <img src={image.src} className="img-fluid" alt="Blog" style={{
                        transition: 'all 0.15s ease-in-out'
                      }}/>
                    <div className="card-layer">
                      <div className="img-icon position-absolute" style={{
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%,-50%)'
                        }}>
                        <i className="fa fa-image" style={{
                            fontSize: '50px',
                            color: '#fff'
                          }}></i>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="blogs-content d-flex mt-4">
                  <Col className="blog-icon text-center pr-0 d-table col-1 border-right">
                    <div style={{
                        color: 'rgba(0,0,0,0.4)'
                      }} className="d-block mb-3 pr-2 pr-sm-2 pr-lg-0 pr-xl-0" id={"popover-" + index}>
                      <i className="fa fa-share-alt"></i>
                      <span className="d-block">2</span>
                    </div>
                    <UncontrolledPopover trigger="legacy" placement="bottom" target={"popover-" + index}>
                      <PopoverBody>
                        <FacebookShareButton url={`${URL}/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} className="p-1"><FacebookIcon size={25} round={true}/></FacebookShareButton>
                        <TwitterShareButton url={`${URL}/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} className="p-1"><TwitterIcon size={25} round={true}/></TwitterShareButton>
                        <PinterestShareButton media={image.src} url={`${URL}/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} className="p-1"><PinterestIcon size={25} round={true}/></PinterestShareButton><br/>
                        <LinkedinShareButton url={`${URL}/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} className="p-1"><LinkedinIcon size={25} round={true}/></LinkedinShareButton>
                      </PopoverBody>
                    </UncontrolledPopover>
                    <div className="d-block mb-3 border-top border-bottom py-2 pr-2 pr-sm-2 pr-lg-0 pr-xl-0" style={{
                        color: 'rgba(0,0,0,0.4)'
                      }}>
                      <i className="fa fa-envelope"></i>
                      <span className="d-block">{comments.length}</span>
                    </div>
                    <div className="mb-0 pr-2 pr-sm-2 pr-lg-0 pr-xl-0" style={{
                        color: 'rgba(0,0,0,0.4)'
                      }} onClick={(e) => postLike(e, index, parseInt(atob(shopifyId).split("/").pop()), parseInt(atob(blog.shopifyId).split("/").pop()), ip)}>
                      <i className="fa fa-heart"></i>
                      <span className="d-block" id={`count-${index}`}>0</span>
                    </div>
                  </Col>
                  <Col className="pl-2 pl-sm-2 pl-lg-4 pl-xl-4 col-11 blog-content">
                    <p style={{
                        fontSize: '12px'
                      }}>By
                      <span>{author.name}</span>
                      In
                      <span>{blog.title}</span>
                      Posted
                      <span>
                        {publishedAt}</span>
                    </p>
                    <h3 className="mb-3">
                      <Link to={`/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} state={{
                          fromFeed: true
                        }} className="text-uppercase erbaum space-1 text-dark">{title}</Link>
                    </h3>
                    <p className="filson-pro-reg" style={{
                        fontSize: '14px'
                      }}>{excerpt}</p>
                    <p className="cta mt-0 pt-sm-3 pt-lg-3 pt-xl-3 w-100">
                      <Link to={`/blogs/${blog.url.split("/").pop()}/${url.split("/").pop()}/`} state={{
                          fromFeed: true
                        }} className="btn-cta color-primary erbaum-bold space-1">READ MORE</Link>
                    </p>
                  </Col>
                </div>
              </div>))
              : <p>No Products found!</p>
          }
          {
            (pageInfo.pageCount > 1) && <Pagination aria-label="Page navigation">
                <PaginationItem disabled={!pageInfo.hasPreviousPage}>
                  <button className="page-link btn-custom-primary" aria-label="Previous" onClick={e => handlePagination(e, previousPage)} disabled={!pageInfo.hasPreviousPage}>
                    <span aria-hidden="true">‹</span>
                    <span className="sr-only">Previous</span>
                  </button>
                </PaginationItem>
                {
                  [...Array(pageInfo.pageCount)].map((page, i) => <PaginationItem active={(i + 1) === currentPage} key={i}>
                    <button onClick={e => handlePagination(e, (i + 1))} className="page-link btn-custom-primary">
                      {i + 1}
                    </button>
                  </PaginationItem>)
                }
                <PaginationItem disabled={!pageInfo.hasNextPage}>
                  <button className="page-link btn-custom-primary" aria-label="Next" onClick={e => handlePagination(e, nextPage)} disabled={!pageInfo.hasNextPage}>
                    <span aria-hidden="true">›</span>
                    <span className="sr-only">Next</span>
                  </button>
                </PaginationItem>
              </Pagination>
          }
        </Col>
        <RecentBlogs/>
      </Row>
    </div>
  </section>
  <section className="rating-and-review py-3 py-sm-5 mb-4 mb-sm-0">
    <div className="container-fluid pb-0 pb-sm-5">
      <Row>
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
          <a href="/reviews/" className="btn-cta color-primary erbaum-bold space-1">SEE REVIEWS</a>
        </p>
        <p className="filson-pro-reg color-secondary pt-3 w-75 m-auto text-center space-1" style={{
            fontSize: '20px'
          }}>Chirofoam™ Memory Foam Mattresses are proudly developed and manufactured in Toronto, ON, Canada.</p>
      </Row>
    </div>
  </section>
  <Footer/>
</>)
}

export const query = graphql `
  query ($skip: Int!) {
    allShopifyArticle(sort: {order: DESC, fields: publishedAt}, limit: 10, skip: $skip) {
      edges {
        node {
          id
          shopifyId
          title
          excerpt
          url
          publishedAt(formatString: "MMM DD, YYYY")
          image {
            src
          }
          author {
            name
          }
          blog {
            title
            url
            shopifyId
          }
          comments {
            shopifyId
          }
        }
      }
      pageInfo {
        perPage
        pageCount
        itemCount
        hasPreviousPage
        hasNextPage
        currentPage
      }
      totalCount
    }
  }
`
export default BlogPage
