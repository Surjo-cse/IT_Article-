import React from 'react';
import { BsBookmarkPlus } from "react-icons/bs";

const Blog = ({blog, handleBookmark, handleMarkasRead}) => {
    
    // console.log(blog)
    return (
        <div className='m-2 h-full'>
            <div className="card bg-base-100 gap-5 shadow-sm mb-4">
  <figure>
    <img className='h-100'
      src={blog.cover}
      alt="Shoes" />
  </figure>
  <div className="card-body h-80">
    <div className="author flex justify-between items-center">
      <h3>{blog.author}</h3>
      <img className="w-16" src={blog.author_img} alt="" />
    </div>
    <h2 className="card-title">{blog.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
     <div className='gap-20 mb-10'>
         <div className="flex mb-7 ">
          {
          blog.hashtags.map((hash)=><p key={hash}>{hash}</p>)
        }
        </div>
    <div className="card-actions flex justify-around ">
      <button onClick={()=>handleBookmark(blog)}><BsBookmarkPlus size={25} /></button>
      <button onClick={()=>handleMarkasRead(blog.reading_time, blog.id)} className="btn btn-primary">Mark as read</button>
    </div>
     </div>
  </div>
</div>
        </div>
    );
};

export default Blog;