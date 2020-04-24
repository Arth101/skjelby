import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <div class="card" style={{marginBottom: 20}} key={post.node.fields.slug}>
                  <header className="card-header">
                    <Link to={post.node.fields.slug}>
                      <p className="card-header-title is-size-5 has-text-weight-semibold">
                        {post.node.frontmatter.title}
                      </p>
                    </Link>
                  </header>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-64x64">
                        <img className="is-rounded" src={"/" + post.node.frontmatter.thumbnail || '/img/default-thumbnail.jpg'} alt={post.node.frontmatter.title} />
                        </figure>
                      </div>
                      <div className="content">
                        {post.node.frontmatter.description}
                        <br />
                        <Link to={post.node.fields.slug}>Læs mere</Link>
                      </div>
                    </div>
                  </div>
                </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="hero is-primary">
          <div className="hero-body hero-frontpage hero-frontpage--south">
            <div className="container">
              <p className="title is-capitalized">{tag}</p>
            </div>
          </div>
        </section>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container">
            <ul className="taglist">{postLinks}</ul>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title,
            description,
            thumbnail
          }
        }
      }
    }
  }
`
