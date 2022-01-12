import React from "react"
import { Card, Button } from "react-bootstrap"

export default function NewsCard(props) {
  const { imgUrl, title, abstract, section, date } = props
  return (
    <Card style={{ width: "16rem", height: "25rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{
          width: "100%",
          height: "50%",
        }}
      />
      <Card.Text
        // className="align-items-start"
        style={{
          marginTop: "-1.1rem",
          color: "white",
          background: "rgba(0,0,0,0.2)",
          fontSize: "0.7rem",
          textAlign: "start",
        }}
      >
        Section:{section.toUpperCase()}
      </Card.Text>
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <Card.Title
          style={{
            fontSize: "1rem",
          }}
        >
          {title}
        </Card.Title>

        <Button variant="primary" size="sm">
          Detail
        </Button>
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
