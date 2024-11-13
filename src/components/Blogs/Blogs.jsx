/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

export const Blogs = ({handleBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='md:w-2/3 '>
            {
                blogs.map(blog => <Blog key={blog.id} handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark} blog={blog}></Blog>)
            }
        </div>
    )
}
