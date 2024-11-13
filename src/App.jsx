import { useState } from "react";
import { Blogs } from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {
  const [bookmark, setBookmark] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  // eslint-disable-next-line no-unused-vars
  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };

  return (
    <>
      <Header />

      <div className="md:flex max-w-6xl mx-auto gap-5 p-3">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsRead={handleMarkAsRead}
        />
        <Bookmarks bookmark={bookmark} readingTime={readingTime} />
      </div>
    </>
  );
}
