/* eslint-disable react/prop-types */



const Blog = ({ blog, handleBookmark, handleMarkAsRead }) => {

    const { title, cover_image, author_img, reading_time, author, post_date, hashtags } = blog

    return (
        <div>
            <img src={cover_image} alt="" className="w-full" />

            <div className="flex items-center justify-between">
                <div className="flex gap-3">
                    <img src={author_img} className="w-12 rounded-full" alt="" />
                    <div>
                        <h6 className="p-0">{author}</h6>
                        <h6>{post_date}</h6>
                    </div>
                </div>
                <div className="flex gap-2">
                    <span>{reading_time}</span>
                    <button onClick={()=>handleBookmark(blog)}>Bookmark</button>
                </div>
            </div>

            <h2 className="text-2xl">{title}</h2>
            <p>
                {
                    hashtags.map((has, idx) => <span key={idx}><a href="">#{has}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)}>Mark as Read</button>
        </div>
    )
}

export default Blog