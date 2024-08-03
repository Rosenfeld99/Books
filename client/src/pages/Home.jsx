import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constant/urls'
import { Link } from 'react-router-dom'

const Home = () => {
  const [books, setBooks] = useState([])


  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const { data } = await axios.get(API_URL)
        console.log(data);
        if (data) setBooks(data)

      } catch (error) {
        console.log(`Error : ${error}`);
      }
    }


    // return () => {
    fetchAllBooks()
    // }
  }, [])

  const handleDelete = async (bookId) => {
    try {
      const { data } = await axios.delete(`${API_URL}/${bookId}`)
      console.log(data);
      if (data?.books) setBooks(data.books)

    } catch (error) {
      console.log(`Error : ${error}`);
    }
  }

  return (
    <div className='max-w-7xl mx-auto px-4'>

      <div className="flex flex-col justify-center items-center px-16 py-9 w-full bg-cyan-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 items-center ml-4 w-full max-w-[1334px] max-md:max-w-full">
          <div className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[454px] max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[567px]">
              <div className="flex flex-col max-w-full text-5xl font-bold tracking-tighter leading-tight text-white rounded-none w-[458px] max-md:text-4xl">
                <div className="max-md:max-w-full max-md:text-4xl">
                  Welcome to pages
                </div>
                <div className="shrink-0 mt-5 h-[3px] w-[55px]" />
              </div>
              <div className="mt-6 text-xl tracking-normal leading-9 text-slate-300 max-md:max-w-full">
               The store of books with quelity valsue ;)
              </div>
            </div>
            <div className="gap-2.5 self-start px-14 pt-5 pb-5 mt-8 text-xl font-bold tracking-wide leading-none text-center text-white max-md:px-5 border-yellow-300 border-2">
              Order Today
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f23dec31efcbcce8b0b84e7e9b649bc4e212cef91e38fc2f63ed1cc8541b42e6?apiKey=801bf1196414482bb2fc1b27b02c48a7&&apiKey=801bf1196414482bb2fc1b27b02c48a7&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23dec31efcbcce8b0b84e7e9b649bc4e212cef91e38fc2f63ed1cc8541b42e6?apiKey=801bf1196414482bb2fc1b27b02c48a7&&apiKey=801bf1196414482bb2fc1b27b02c48a7&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23dec31efcbcce8b0b84e7e9b649bc4e212cef91e38fc2f63ed1cc8541b42e6?apiKey=801bf1196414482bb2fc1b27b02c48a7&&apiKey=801bf1196414482bb2fc1b27b02c48a7&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23dec31efcbcce8b0b84e7e9b649bc4e212cef91e38fc2f63ed1cc8541b42e6?apiKey=801bf1196414482bb2fc1b27b02c48a7&&apiKey=801bf1196414482bb2fc1b27b02c48a7&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23dec31efcbcce8b0b84e7e9b649bc4e212cef91e38fc2f63ed1cc8541b42e6?apiKey=801bf1196414482bb2fc1b27b02c48a7&&apiKey=801bf1196414482bb2fc1b27b02c48a7&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23dec31efcbcce8b0b84e7e9b649bc4e212cef91e38fc2f63ed1cc8541b42e6?apiKey=801bf1196414482bb2fc1b27b02c48a7&&apiKey=801bf1196414482bb2fc1b27b02c48a7&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23dec31efcbcce8b0b84e7e9b649bc4e212cef91e38fc2f63ed1cc8541b42e6?apiKey=801bf1196414482bb2fc1b27b02c48a7&&apiKey=801bf1196414482bb2fc1b27b02c48a7&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f23dec31efcbcce8b0b84e7e9b649bc4e212cef91e38fc2f63ed1cc8541b42e6?apiKey=801bf1196414482bb2fc1b27b02c48a7&&apiKey=801bf1196414482bb2fc1b27b02c48a7"
            className="object-contain grow shrink self-stretch my-auto aspect-[1.5] min-w-[240px] w-[527px] max-md:max-w-full"
          />
        </div>
      </div>

      <div className="my-9 gap-3 xl:gap-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
        {books?.map((item) => (
          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full aspect-[3/4] object-cover"
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{item?.title}</h2>
              <p className="text-gray-600 mt-2">{item?.description?.substring(0, 30)}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className=" text-xl font-semibold">{item?.price}$</div>
                <div className=" flex items-center gap-2">
                  <button onClick={() => handleDelete(item?.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>
                  <Link to={`/update/${item?.id}`} >
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>))}
      </div>

    </div>
  )
}

export default Home