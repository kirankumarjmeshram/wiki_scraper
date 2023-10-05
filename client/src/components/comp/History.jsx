import React from 'react';
import { ListGroup } from 'react-bootstrap';

const History = ({historyData}) => {
  return (
    <div className='pt-5'>
        <h2>History:</h2>
        <div>
          {historyData.map((historyItem, index) => (
            <div key={index} className="mb-4">
              <h4 className='text-secondary bg-light'><a className="link-secondary text-decoration-none" target="_blank" href={historyItem.url} rel="noopener noreferrer">{historyItem.url}</a></h4>
              <ListGroup>
                {historyItem.paradata &&
                  historyItem.paradata.slice(1, 2).map((para, index) => (
                    <ListGroup.Item key={index} className='overflow-auto'>
                      <strong><p className="font-monospace" href={historyItem.url} target="_blank" rel="noopener noreferrer">
                        {para}
                      </p></strong>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </div>
          ))}
        </div>
      </div>
  )
}

export default History