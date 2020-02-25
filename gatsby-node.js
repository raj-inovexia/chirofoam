const http = require('http')
const fs = require('fs');
const server = http.createServer(function(req, res) {
  console.log(`req was made: ${req.url}`)
  if (req.url === '/css/bootstrap.min.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css'
    })
    fs.createReadStream(__dirname + `/assets/css/bootstrap.min.css`).pipe(res)
  } else if (req.url === '/4364180095031') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    fs.createReadStream(__dirname + `/4364180095031.html`).pipe(res)
  } else if (req.url === '/4381174923319') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    fs.createReadStream(__dirname + `/4381174923319.html`).pipe(res)
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    res.end('Not Found')
  }
})
server.listen(3000)

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allShopifyArticle {
        edges {
          node {
            id
            url
            blog {
              url
            }
          }
        }
        totalCount
      }
    }
  `).then(result => {
    const paginate = [...Array(Math.ceil(result.data.allShopifyArticle.totalCount/10))];
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/product/${node.handle}/`,
        component: path.resolve(`./src/templates/ProductPage/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
    result.data.allShopifyArticle.edges.forEach(({ node }) => {
      createPage({
        path: `/blogs/${node.blog.url.split("/").pop()}/${node.url.split("/").pop()}/`,
        component: path.resolve(`./src/templates/ArticlePage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          id: node.id,
        },
      })
    })
    paginate.forEach((page, i) => {
      createPage({
        path: `/blogs/${i+1}/`,
        component: path.resolve(`./src/templates/BlogPage/index.js`),
        context: {
          // Data passed to context is available
          // in article queries as GraphQL variables.
          skip: (10*i)
        },
      })
    })
  })
}
