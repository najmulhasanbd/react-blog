import { useState } from "react";
import { Blogs } from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };

  return (
    <>
      <Header />

      <div className="md:flex max-w-6xl mx-auto gap-5 p-3">
        <Blogs handleBookmark={handleBookmark} />
        <Bookmarks bookmark={bookmark} />
      </div>
    </>
  );
}
