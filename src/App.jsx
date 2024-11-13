import { Blogs } from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

export default function App() {

  

  return (
    <>
      <Header />

      <div className="md:flex max-w-6xl mx-auto gap-5 p-3">
        <Blogs />
        <Bookmarks />
      </div>

    </>
  )
}