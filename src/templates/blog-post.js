import React from "react"
import Layout from "../components/Layout"
import { graphql, Link} from "gatsby"
import * as blogPostStyles from "./blog.post.module.scss"
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
      html
    }
  }
`

const BlogPost  = props => {
    return(
        <Layout>
            <div>
    <h1 className={blogPostStyles.h1}>{props.data.markdownRemark.frontmatter.title}</h1>
    <span>
      <p className={blogPostStyles.date}>  posted on {props.data.markdownRemark.frontmatter.date}</p> {" "}
       <p className={blogPostStyles.space}> {props.data.markdownRemark.timeToRead} min read </p>
    </span>
    {
  props.data.markdownRemark.frontmatter.featured && (
    <Img
      fluid={
        props.data.markdownRemark.frontmatter.featured.childImageSharp.fluid
      }
      alt={props.data.markdownRemark.frontmatter.title}
    />
  )
}
    <div
           className={blogPostStyles.p}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        >
</div>
<p className={blogPostStyles.more}> return back to <Link to="/blog/">blog</Link></p>
<br />
<br />
<br />
            </div>
        </Layout>
    )
}

export default BlogPost