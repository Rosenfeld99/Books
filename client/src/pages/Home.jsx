import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant/urls'

const Home = () => {
  const [books, setBooks] = useState([])


  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const { data } = await axios.get(API_URL)
        console.log(data);
        setBooks(data)

      } catch (error) {
        console.log(`Error : ${error}`);
      }
    }


    // return () => {
    fetchAllBooks()
    // }
  }, [])


  return (
    <div>Home</div>
  )
}

export default Home