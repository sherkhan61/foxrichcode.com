import * as React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Typography from "@material-ui/core/Typography"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import ReactMarkdown from "react-markdown"
import "../styles/Page.scss"
import HomeIcon from "@material-ui/icons/Home"
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  VKIcon,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from "react-share"
import { Partners } from "../components/Partners"
import Seo from "../components/Seo"
import Scroll from "../components/Scroll"
import * as PropTypes from "prop-types"
import axios from "axios"


export default class Page extends React.Component {
  state = {}

  componentDidMount() {
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios.get(`https://api.foxrichcode.com/users/me`, config)
      .then(response => {
          this.setUser(response.data)
        },
        error => {
          console.log(error)
        })
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    let { data } = this.props
    const review = data.strapiArticles
    const domain = `https://api.foxrichcode.com`
    const shareUrl = `${domain}/page/${review.strapiId}/${review.link}`
    const seoTitle = `${review.title} | Foxrichcode.com`


    return (
      <Layout user={this.state.user} setUser={this.setUser}>
        <Seo title={seoTitle} />
        <div className="main_container">
          <div className="container">
            <div className="row breadcrumb">
              <div className="col-lg-8">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" to={"/"}>
                    <Typography color="textPrimary">
                      <HomeIcon className="breadcrumb-link" />
                      <span className="breadcrumb-link">Главная</span>
                    </Typography>
                  </Link>
                  <Typography color="textPrimary">
                    <span className="pl-0">Категории</span>
                  </Typography>
                  <Link color="inherit" to={`/${review.category.alt}`}>
                    <Typography color="textPrimary">
                      <span className="breadcrumb-link pl-0">{review.category.name}</span>
                    </Typography>
                  </Link>
                  <Typography color="textPrimary">
                    <span className="pl-0">{review.title}</span>
                  </Typography>
                </Breadcrumbs>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="current_page_container">
                  <article className="entry">
                    <div className="single-post__entry-header">
                      <h1 className="single-post__entry-title">
                        {review.title}
                      </h1>
                      <div className="entry__meta-holder">
                        <AccessTimeIcon/>
                        <span>{review.date}</span>
                      </div>
                    </div>
                    <div className="entry__img-holder">
                      <img
                        src={`${domain}${review.media.url}`}
                        alt={review.media.name} className="entry__img"/>

                    </div>
                    <div className="info-header-heading">
                    <span className="eyebrow">
                      <Link to={`/${review.category.alt}`}>{review.category.name}</Link>
                    </span>
                    </div>
                    <div className="entry__article-wrap">
                      <div className="entry__share">
                        <div className="sticky-col">
                          <div className="socials">
                            <h3>Поделиться</h3>
                            <FacebookShareButton
                              url={shareUrl}
                              quote={"foxrichcode.com - World is yours to explore"}
                              hashtag="#foxrichcode.com"
                            >
                              <FacebookIcon size={30}/>
                              <span>Facebook</span>
                            </FacebookShareButton>
                            <TwitterShareButton
                              url={shareUrl}
                              title={review.title}
                              hashtag="#foxrichcode.com"
                            >
                              <TwitterIcon size={30}/>
                              <span>Twitter</span>
                            </TwitterShareButton>
                            <VKShareButton
                              url={shareUrl}
                              title={review.title}
                              image={review.media.url}
                            >
                              <VKIcon size={30}/>
                              <span>VK</span>
                            </VKShareButton>
                            <LinkedinShareButton
                              url={shareUrl}
                              title={review.title}
                              source={"foxrichcode.com"}
                            >
                              <LinkedinIcon size={30}/>
                              <span>Linkedin</span>
                            </LinkedinShareButton>
                            <WhatsappShareButton
                              url={shareUrl}
                              title={review.title}
                              separator=":: "
                            >
                              <WhatsappIcon size={30}/>
                              <span>Whatsapp</span>
                            </WhatsappShareButton>
                            <TelegramShareButton
                              url={shareUrl}
                              title={review.title}
                            >
                              <TelegramIcon size={30}/>
                              <span>Telegram</span>
                            </TelegramShareButton>
                            <PinterestShareButton
                              url={shareUrl}
                              media={review.media.url}
                              description={review.description}
                            >
                              <PinterestIcon size={30}/>
                              <span>Pinterest</span>
                            </PinterestShareButton>
                          </div>
                        </div>
                      </div>
                      <div className="entry__article">
                        <ReactMarkdown>{review.description}</ReactMarkdown>
                        {/*<p className="author">Автор: </p>*/}
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <aside className="col-lg-4 sidebar">
                <Partners/>
              </aside>
            </div>
          </div>
        </div>
        <Scroll showBelow={250}/>
      </Layout>
    )
  }
}

Page.propTypes = { data: PropTypes.any }

export const query = graphql`
  query page($link: String) {
    strapiArticles(link: {eq: $link}) {
      strapiId
      title
      link
      date
      media {
        name
        url
      }
      category {
        id
        name
        alt
      }
      description
    }
  }

`