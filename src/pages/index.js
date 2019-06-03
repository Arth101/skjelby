import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section class="hero is-primary is-bold">
          <div className="hero-body hero-frontpage">
            <div className="container">
              <p className="title">
                Dungeons &amp; Dragons
              </p>
              <p className="subtitle">
                Fra Skjelby til Ard Al&apos;Hassaa
              </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Seneste eventyr</h1>
            </div>
            {posts
              .map(({ node: post }) => (
                <div class="card" key={post.id} style={{marginBottom: 20}}>
                  <header className="card-header">
                    <p className="card-header-title is-size-5 has-text-weight-semibold">
                      {post.frontmatter.title}
                    </p>
                  </header>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                        <img className="is-rounded" src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/17/100/100/636238885679566374.jpeg" alt={post.frontmatter.title} />
                        </figure>
                      </div>
                      <div className="content">
                        {post.frontmatter.description}
                        <br />
                        <Link to={post.fields.slug}>Læs mere</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
