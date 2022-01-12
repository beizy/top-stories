import { Container, Row, Col } from "react-bootstrap"
import NewsCard from "./NewsCard"

export default function Newslist(props) {
  const { allArticles } = props
  const displayedArticles = allArticles.slice(0, 20)
  const cards = displayedArticles.map(article => (
    <NewsCard imgUlr={article.multimedia.url} title={article.title} abstract={article.abstract} />
  ))

  return (
    <Container>
      <Row>
        <Col>{cards}</Col>
      </Row>
    </Container>
  )
}
