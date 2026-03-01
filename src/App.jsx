
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/navbar/navbar'

function App() {
 const [bookMarked, setBookMarked] = useState([]); 
 const [readingCount, setReadingCount] = useState(0); 
  const handleBookmark =(blog)=> {
    setBookMarked([...bookMarked, blog])
  }
 const handleMarkasRead = (time, id)=>
 {
  setReadingCount(readingCount+time)
  const remainingBookmark = bookMarked.filter((marked)=>marked.id!==id)
  setBookMarked(remainingBookmark); 
    
 }
  
  return (
    <>
      <Navbar></Navbar>

      <div className="mainContainer flex text-center">
        <div className="left-container w-[70%] ml-4 border-2">
          
           <Blogs handleMarkasRead={handleMarkasRead} handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className="right-container w-[30%] text-black">
          <h1>Reading time : {readingCount} </h1>
          <h1>Bookmark count : {bookMarked.length} </h1>

          {
            bookMarked.map((marked)=><p key={marked.id} className=' border-2 p-4 border-amber-100 bg-gray-400 shadow-2xl m-2'>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
