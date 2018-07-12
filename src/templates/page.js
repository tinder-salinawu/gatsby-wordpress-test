import React, {Component} from "react"
import Img from "gatsby-image";

import ProductHeader from '../components/ProductHeader';

class PageTemplate extends Component {
    render() {
      const siteMetadata = this.props.data.site.siteMetadata;
      const currentPage = this.props.data.wordpressPage;
      const { acf, title } = currentPage;

      if (!acf) return null;

      const resolutions = acf.product_icon ? acf.product_icon.localFile.childImageSharp.resolutions : null;

      console.log(currentPage);
      return (
        <ProductHeader name={acf.product_name} header={acf.subheader} icon={<Img resolutions={resolutions} />}/>
      )

      return (
          <div>
              <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
              <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

              <p dangerouslySetInnerHTML={{__html: currentPage.date}} />
              <p dangerouslySetInnerHTML={{__html: currentPage.slug}} />
          </div>
      )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
            acf {
              product_name
              subheader
              product_icon {
                localFile{
                  childImageSharp{
                    resolutions(width:300, height:300) {
                      src
                      width
                      height
                    }
                  }
                }
                alt_text
              }
            }
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`
