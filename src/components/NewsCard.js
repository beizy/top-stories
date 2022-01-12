import React from "react"
import { Card, Button } from "react-bootstrap"

export default function NewsCard(props) {
  const { imgUrl, title, abstract } = props
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{abstract}</Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
    </Card>
  )
}
