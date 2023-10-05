import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";

const LinkScraper = () => {
  //const api = "https://wikiscraperapi.onrender.com";
  const api = "http://localhost:5000/";
  const [url, setUrl] = useState("");
  const [scrapedUrls, setScrapedUrls] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [historyData, setHistoryData] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api}/scrapeurl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const urlsResponse = await fetch(`${api}/getbyurl?url=${url}`);
        if (urlsResponse.ok) {
          const data = await urlsResponse.json();
          setScrapedUrls(data.scraped_urls);
          console.log(scrapedUrls)
          setShowAll(false);
          setHistoryData((prevData) => [
            { url, scrapedUrls: data.scraped_urls },
            ...prevData,
          ]);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const historyResponse = await fetch(`${api}/getalldata`);
        if (historyResponse.ok) {
          const data = await historyResponse.json();
          setHistoryData(data.data);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchHistoryData();
  }, [historyData]);

  return (
    <Container className="w-75">
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

      <div>
        <h2>Scraped URLs:</h2>
        {showAll && <Button onClick={toggleShowAll}>Show Less</Button>}
        <ListGroup>
          {showAll
            ? scrapedUrls.map((scrapedUrl, index) => (
                <ListGroup.Item key={index}>
                  <a
                    href={scrapedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {scrapedUrl}
                  </a>
                </ListGroup.Item>
              ))
            : scrapedUrls.slice(0, 3).map((scrapedUrl, index) => (
                <ListGroup.Item key={index}>
                  <a
                    href={scrapedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {scrapedUrl}
                  </a>
                </ListGroup.Item>
              ))}
        </ListGroup>
        {!showAll && scrapedUrls.length > 3 && (
          <Button onClick={toggleShowAll}>Show More</Button>
        )}
      </div>

      <div className="pt-5">
        <h2>History:</h2>
        <div>
          {historyData.map((historyItem, index) => (
            <div key={index} className="mb-4">
              <h4 className="text-secondary bg-light">
                <a
                  className="link-secondary text-decoration-none"
                  target="_blank"
                  href={historyItem.url}
                  rel="noopener noreferrer"
                >
                  {historyItem.url}
                </a>
              </h4>
              <ListGroup>
                {historyItem.paradata &&
                  historyItem.paradata.slice(1, 2).map((para, index) => (
                    <ListGroup.Item key={index} className="overflow-auto">
                      <strong>
                        <p
                          className="font-monospace"
                          href={historyItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {para}
                        </p>
                      </strong>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default LinkScraper;
