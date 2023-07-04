import './Blogs.css'
const Blog = (props) => {
    return ( <div className="blog">
        <img src = {props.blog.img_src} alt = {props.blog.heading}/>
        <p className='blog-topic'>{props.blog.topic}</p>
        <p className='blog-heading'>{props.blog.heading}</p>
        <p className='blog-content'>{props.blog.content}</p>
        <div className='blog-footer'>
        <p className='blog-see-more'>see-more</p>
        <p className='blog-date'>{props.blog.date}</p>
        </div>
    </div> );
}
 
export default Blog;