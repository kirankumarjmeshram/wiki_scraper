import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Form = ({handleSubmit, url, setUrl}) => {
  return (
    <div>
      <h1 className="mt-4">Wiki Scraper</h1>
      <Form onSubmit={handleSubmit} className="mb-4">
        <Form.Group as={Row} controlId="formUrl">
          <Form.Label column sm={2}>
            Enter URL:
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              value={url}
              placeholder="Add Wikipedia URL here"
              onChange={(e) => setUrl(e.target.value)}
            />
          </Col>
          <Col sm={2}>
            <Button type="submit">Scrape</Button>
          </Col>
        </Form.Group>
      </Form>
      </div>
  )
}

export default Form