import { Card } from 'react-bootstrap/'
import IconHeart from '../components/IconHeart'
import { useContext } from 'react'
import { MyContext } from '../my_context'

const Gallery = (pic) => {
  const { pics, setPics } = useContext(MyContext)

  const favorite = (id) => {
    const newArray = pics.map(pic => {
      if (pic.id === id) {
        return {
          ...pic,
          liked: !pic.liked
        }
      }
      return pic
    })
    setPics(newArray)
  }

  return (
    <div>
      <Card className='gallery' style={{ width: '18rem' }}>
        <span className='gallery' onClick={() => favorite(pic.pic.id)}><IconHeart filled={pic.pic.liked} /></span>
        <Card.Img src={pic.pic.src.original} className='photo' />
        <Card.Body>
          <Card.Title>{pic.pic.alt}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Gallery
