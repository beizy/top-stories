import { Container, Row, Col } from "react-bootstrap"
import NewsCard from "./NewsCard"
import { v4 as uuidv4 } from "uuid"

export default function Newslist(props) {
  const { allArticles } = props
  const displayedArticles = allArticles.filter(ele => ele.multimedia).slice(0, 20)
  const cards = displayedArticles.map(article => (
    <Col sm={12} md={6} lg={4} xl={3} key={uuidv4()}>
      <NewsCard
        title={article.title}
        abstract={article.abstract}
        section={article.section}
        imgUrl={article.multimedia[0].url}
        date={article.published_date.slice(0, 10)}
      />
    </Col>
  ))

  return (
    <Container fluid>
      <Row>{cards}</Row>
    </Container>
  )
}

//imgUlr={article.multimedia.url}
