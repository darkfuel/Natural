import { useContext } from 'react'
import Gallery from '../components/Gallery'
import { MyContext } from '../my_context'

const Favorites = () => {
  const { pics } = useContext(MyContext)
  return (
    <div className='container'>
      <div className='App'>
        <h1>Fotos Favoritas</h1>
        <div className='gallery grid-columns-4'>
          {pics && pics.filter(pic => pic.liked).map(pic => (
            <Gallery key={pic.id} pic={pic} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Favorites
