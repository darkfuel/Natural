import { createContext, useState, useEffect } from 'react'
export const MyContext = createContext()

const DataProvider = ({ children }) => {
  const [pics, setPics] = useState([])
  const getData = async () => {
    const res = await fetch('/photos.json')
    const data = await res.json()
    const newArray = Object.values(data.photos).flatMap(pic => pic)
    setPics(newArray)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <MyContext.Provider value={{ pics, setPics }}>
      {children}
    </MyContext.Provider>

  )
}

export default DataProvider
