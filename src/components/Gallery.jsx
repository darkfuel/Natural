import { Card } from 'react-bootstrap/'
const Gallery = ({ pic }) => {
  return (
    <div>
      <Card className='gallery' style={{ width: '18rem' }}>
        <Card.Img src={pic.src.original} className='photo' />
        <Card.Body>
          <Card.Title>{pic.alt}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Gallery
