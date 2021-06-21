import React from 'react'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import { GatsbyImage } from 'gatsby-plugin-image'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'
import moment from 'moment-timezone'

import 'katex/dist/katex.min.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const m_start = moment(post.frontmatter.date, 'YYYY-MM-DD hh:mm:ss ZZ')
    const m_end = moment(post.frontmatter.end, 'YYYY-MM-DD hh:mm:ss ZZ')
    const date = m_start.format(`MMMM DD`)
    const time_UK = m_start.tz("Europe/London").format(`HH:mm`)
    const time_CH = m_start.tz("Europe/Zurich").format(`HH:mm`)
    const end_UK = m_end.tz("Europe/London").format(`HH:mm`)
    const end_CH = m_end.tz("Europe/Zurich").format(`HH:mm`)

    return (
      <DefaultLayout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div className="clearfix post-content-box">
          <article className="article-page">
            <div className="page-content">
              {post.frontmatter.img && (
                <div className="page-cover-image">
                  <figure>
                    <GatsbyImage
                      image={
                        post.frontmatter.img.childImageSharp.gatsbyImageData
                      }
                      className="page-image"
                      key={
                        post.frontmatter.img.childImageSharp.gatsbyImageData.src
                      }
                      alt=""
                    />
                  </figure>
                </div>
              )}
              <div className="wrap-content">
                <header className="header-page">
                  <h1 className="page-title">{post.frontmatter.title}</h1>
                  <div className="page-date">
                    <span>{date}, {time_UK}-{end_UK} (UK), {time_CH}-{end_CH} (CH) </span>
                  </div>
                </header>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <div className="page-footer">
                  <div className="page-tag">
                    {post.frontmatter.tags &&
                      post.frontmatter.tags.map((tag) => (
                        <span key={tag}>
                          <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>
                            # {tag}
                          </Link>
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        end
        tags
        img {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [AUTO, AVIF, WEBP])
          }
        }
      }
    }
  }
`
