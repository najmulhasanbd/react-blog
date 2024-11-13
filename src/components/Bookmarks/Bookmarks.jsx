/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react'
import Bookmark from '../Bookmark/Bookmark'

// eslint-disable-next-line no-unused-vars
const Bookmarks = ({bookmark, readingTime}) => {

  
  return (
    <div className='md:w-1/3 '>
      <h1>Reading Time : {readingTime}</h1>
      <h2 className='text-2xl font-bold mb-2'>Bookmark : {bookmark.length}</h2>
      {
        bookmark.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
      }
    </div>
  )
}

export default Bookmarks