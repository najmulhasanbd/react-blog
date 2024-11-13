/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmark}) => {

  
  return (
    <div className='md:w-1/3 '>
      <h2 className='text-2xl font-bold mb-2'>Bookmark : {bookmark.length}</h2>
      {
        bookmark.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
      }
    </div>
  )
}

export default Bookmarks