import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import InfoSection from '../components/InfoSection'
import '../styles/volunteer-page.scss'

export const ClinicManPageTemplate = (props) => {
  const { page } = props

  const mapInfo = (info) => {
    return Object.keys(info).map((key) => {
      return <InfoSection sectionInfo={info[key]} />
    })
  }

  return (
    <article className='volunteer'>
      <div className='volunteer-container  container'>
        <section className='volunteer-header'>
          <div className='volunteer-titleWrapper'>
            <h1 className='volunteer-title'>{page.frontmatter.title}</h1>
          </div>
        </section>
      </div>
      {mapInfo(page.frontmatter.content)}
    </article>
  )
}

const clinicManPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name='title' content={seoTitle} />
        <meta name='description' content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <ClinicManPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  )
}

clinicManPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default clinicManPage

export const clinicManPageQuery = graphql`
  query clinicManPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          browserTitle
          title
          description
        }
        title
        content {
          whatWeDo {
            title
            description
          }
          impact {
            title
            description
          }
          groupDynamic {
            title
            description
          }
        }
      }
    }
    ...LayoutFragment
  }
`
