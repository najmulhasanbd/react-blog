import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

export const Blogs = ({handleBookmark}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='md:w-2/3 '>
            {
                blogs.map(blog => <Blog key={blog.id} handleBookmark={handleBookmark} blog={blog}></Blog>)
            }
        </div>
    )
}
