import React from 'react';
import Header from "~/components/header"
import Footer from "~/components/footer"
import {Container, Row, Col, Form} from 'reactstrap';
import SEO from '~/components/seo'
import "~/assets/css/bootstrap.min.css"
import RecentPosts from "~/components/Blogs/RecentPostsFooter"

const ArticlePage = ({data}) => {
  const article = data.shopifyArticle
  const article_id = window.atob(article.shopifyId).split("/").pop()
  const blog_id = window.atob(article.blog.shopifyId).split("/").pop()
  const jsonToQueryString = (json) => {
    return '?' + Object.keys(json).map(function(key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
  }
  const getData = {
    "api": "/admin/api/2020-01/comments.json",
    "blog_id": blog_id,
    "article_id": article_id
  }
  const totalcomments = article.comments.length
  console.log(article, getData);
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
                <span className="pl-2">2</span>
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
        }}>SHOWING {article.comments.length}
        COMMENTS</h3>

      {
        article.comments.map((comment, index) => (<div className="mb-4">
          <div className="profile-card pl-3">
            <span>
              <i class="fa fa-user-circle"></i>
            </span>
            <strong className="color-secondary filson-pro-reg pl-3 color-secondary" style={{
                fontSize: '12px'
              }}>{comment.author.name}</strong>
            <p></p>
            <strong className="pl-3" style={{
                fontSize: '12px'
              }}>
              <a href="#" className="color-secondary">Reply</a>
            </strong>
          </div>
          <div className="comment-card p-3 position-relative mt-3">
            <p className="filson-pro-reg text-1 color-secondary">{comment.content}</p>
          </div>
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
          <form method="post" action="">
            <Col className="col-12">
              <textarea placeholder="LEAVE YOUR COMMENT" className="w-100 text-1 color-secondary filson-pro-reg" rows="10"/>
            </Col>
            <Row className="mx-0 input-data-field">
              <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <input type="text" name="author" placeholder="Name (Required)" required="required" className="w-100 text-1 color-secondary filson-pro-reg"/>
              </Col>
              <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <input type="email" name="email" placeholder="Email (Required)" required="required" className="w-100 text-1 color-secondary filson-pro-reg"/>
              </Col>
              <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <input type="text" name="website" placeholder="Website" className="w-100 text-1 color-secondary filson-pro-reg"/>
              </Col>
            </Row>
            <Col sm="12">
              <input type="hidden" name="ip"/>
              <input type="hidden" name="blog_id"/>
              <input type="hidden" name="article_id"/>
            </Col>
            <Col className="col-12">
              <button type="submit" className="comment-submit text-1 filson-pro-reg mt-3">POST COMMENT</button>
            </Col>
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
    comments {
      author {
        email
        name
      }
      contentHtml
      content
    }
    contentHtml
    comments {
      id
      author {
        email
        name
      }
      content
      contentHtml
    }
    excerpt
    image {
      src
      altText
    }
    publishedAt(formatString: "MMMM DD, YYYY")
  }
}`

export default ArticlePage
