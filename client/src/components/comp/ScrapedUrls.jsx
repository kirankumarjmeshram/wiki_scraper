import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const ScrapedUrls = ({toggleShowAll, showAll, scrapedUrls}) => {
  return (
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
  )
}

export default ScrapedUrls