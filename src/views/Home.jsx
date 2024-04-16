import { useContext } from 'react'
import Gallery from '../components/Gallery'
import { MyContext } from '../my_context'

const Home = () => {
  const { pics } = useContext(MyContext)
  return (
    <div className='container'>
      <div className='App'>
        <h1>Natural Pic</h1>
        <div className='gallery grid-columns-4'>
          {pics && pics.map(pic => (
            <Gallery key={pic.id} pic={pic} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
