import React from "react"
import { Card, Button } from "react-bootstrap"

export default function NewsCard(props) {
  const { imgUrl, title, abstract, section, date } = props
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{abstract}</Card.Text>
        <Card.Text>Section:{section.toUpperCase()}</Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Published on:{date}</small>
      </Card.Footer>
    </Card>
  )
}
