import React from 'react'
import Layout from '../components/layout';
import Metadata from '../components/metadata'
import {useStaticQuery, graphql, Link} from "gatsby"
import * as blogStyles from "../components/blog.module.scss"
import Img from "gatsby-image"


const Blog = () => {

    const data = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC}){
                    edges {
                        node {
                            frontmatter {
                                title
                                date(formatString: "DD MMMM, YYYY")
                                featured {
                                    childImageSharp {
                                      fluid(maxWidth: 750) {
                                        ...GatsbyImageSharpFluid
                                      }
                                    }
                                  }
                                
                            }
                            timeToRead
                            excerpt
                            id
                            fields {
                                slug
                            }
                        }
                    }
                }

            }
            `
    )
    return(
        <Layout>
            <Metadata title="Blog" description="my blog page"></Metadata>
            <div className="full-width-image-container margin-top-0"
               style={{
                backgroundImage: `url('../imgs/blog-index.jpg')`,
              }}
            >
<h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: 'black',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
            </div>
            <div className="columns is-multiline">
            {data.allMarkdownRemark.edges.map(edge => {
                return(
                    <div className="is-parent column is-6" key={edge.node.id}>
                    <article className={`blog-list-item tile is-child box notification`}>
                        <div className="title has-text-primary is-size-3">
                <h1 className={blogStyles.h1}>
                    <Link to={`/blog/${edge.node.fields.slug}/`}>
                    {edge.node.frontmatter.title}
                    </Link>
                    </h1>

                
                </div>
                <br/>
                <br/>
                <span className="subtitle is-size-5 is-block">
                   posted  on {edge.node.frontmatter.date}<span>/</span>{" "}<br/>
                   {edge.node.timeToRead} min read
                    </span>
                    {
  edge.node.frontmatter.featured && (
    <Img
      className={blogStyles.featured}
      fluid={edge.node.frontmatter.featured.childImageSharp.fluid}
      alt={edge.node.frontmatter.title}
    />
  )
}
                    <br />
                <p className={blogStyles.excerpt}>{edge.node.excerpt}</p>
                <Link to={`/blog/${edge.node.fields.slug}/`}>Read More</Link>
                <div>

                </div>
                    </article>

                </div>
                )
            })}
                

            </div>
            
        </Layout>
    )
}

export default Blog