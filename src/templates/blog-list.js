import React from 'react'
import { Link, graphql } from 'gatsby'

import DefaultLayout from '../components/layout'
import SEO from '../components/seo'
import moment from 'moment-timezone'
import styled from "@emotion/styled"

const Content = styled.div`
`

const Tag = styled.div`
	float: right;
	color: white;
	padding: .5em;
	font-weight: bold;
	text-align: center;
	border-bottom-left-radius: 15px;
	margin-left: .5em;
	@media screen and (max-width: 992px) {
		width: 100%;
		border-bottom-right-radius: 0px;
		border-bottom-left-radius: 0px;
	}
`

const TagETH = styled(Tag)`
	background-color: #215CAF;
`

const TagEDI = styled(Tag)`
	background-color: #D50032;
`

const TagOnline = styled(Tag)`
	background-color: #007894;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = '/' + (currentPage - 1 === 1 ? '/' : (currentPage - 1).toString())
    const nextPage = '/' + ((currentPage + 1).toString())

    return (
      <DefaultLayout>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div className="content-box clearfix">
          {posts.map(({ node }) => {
	    const m_start = moment(node.frontmatter.date, 'YYYY-MM-DD hh:mm:ss ZZ')
	    const m_end = moment(node.frontmatter.end, 'YYYY-MM-DD hh:mm:ss ZZ')
	    const date = m_start.format(`MMMM DD`)
	    const time_UK = m_start.tz("Europe/London").format(`HH:mm`)
	    const time_CH = m_start.tz("Europe/Zurich").format(`HH:mm`)
	    const end_UK = m_end.tz("Europe/London").format(`HH:mm`)
	    const end_CH = m_end.tz("Europe/Zurich").format(`HH:mm`)
            return (
              <article className="post" key={node.fields.slug}>
                {node.frontmatter.img &&
                  node.frontmatter.img.childImageSharp &&
                  node.frontmatter.img.childImageSharp.gatsbyImageData && (
                    <Link
                      to={node.fields.slug}
                      className="post-thumbnail"
                      style={{
                        backgroundImage: `url(${node.frontmatter.img.childImageSharp.gatsbyImageData.images.fallback.src})`,
                      }}
                    />
                  )}
                <Content>
		{ node.frontmatter.tags.includes('ETH') && <TagETH>In Person | ETH</TagETH>}
		{ node.frontmatter.tags.includes('EDI') && <TagEDI>In Person | Edinburgh</TagEDI>}
		{ (!node.frontmatter.tags.includes('ETH') && !node.frontmatter.tags.includes('EDI')) && <TagOnline>Online</TagOnline>}
                <div className="post-content">
                  <h2 className="post-title">
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h2>
                  <p>{node.excerpt}</p>
                  <span className="post-date">
                    {date}, {time_UK}-{end_UK} (UK), {time_CH}-{end_CH} (CH)
                  </span>
                </div>
		</Content>
              </article>
            )
          })}
          <div className="container">
            <nav className="pagination" role="navigation">
              <ul>
                <p>
                  {!isFirst && (
                      <Link to={prevPage} rel="prev" className="newer-posts">
                        ← Previous Page
                      </Link>
                  )}

                  {!isFirst && !isLast && (
		      <> | </>
                  )}

                  {!isLast && (
                      <Link to={nextPage} rel="next" className="older-posts">
                        Next Page →
                      </Link>
                  )}
                </p>
              </ul>
            </nav>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date
            end 
            title
	    tags
            img {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [AUTO, AVIF, WEBP])
              }
            }
          }
        }
      }
    }
  }
`
