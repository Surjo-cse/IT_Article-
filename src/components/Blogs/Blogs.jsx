import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark, handleMarkasRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("blogs.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    }, [])
    // console.log(blogs); 
    return (
        <div>
            <h1 className="text-6xl text-black mb-5 ">Total Blogs : {blogs.length}</h1>
            <div className="all_blogs grid grid-cols-2">
                {
                    blogs.map((blog)=><Blog key={blog.id} blog={blog} handleMarkasRead={handleMarkasRead} handleBookmark={handleBookmark}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;