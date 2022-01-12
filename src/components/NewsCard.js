import React from "react"
import { Card, Button } from "react-bootstrap"

export default function NewsCard(props) {
  const { imgUrl, title, abstract, section, date } = props
  return (
    <Card style={{ width: "18rem", height: "25rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{
          width: "100%",
          height: "50%",
        }}
      />
      <Card.Body className="justify-content-around">
        <Card.Title
          style={{
            fontSize: "1rem",
          }}
        >
          {title}
        </Card.Title>
        {/* <Card.Text
          style={{
            fontSize: "0.9rem",
          }}
        >
          {abstract}
        </Card.Text> */}
        <Card.Text>Section:{section.toUpperCase()}</Card.Text>
        <Button variant="primary">Detail</Button>
      </Card.Body>
      <Card.Footer
        style={{
          height: "1.5rem",
          fontSize: "0.7rem",
          fontColor: "#757E85",
          padding: "2px 0",
        }}
      >
        Published on:{date}
      </Card.Footer>
    </Card>
  )
}
