import './Blogs.css'
const Blog = (props) => {
    return ( <div className="blog">
        <img src = {props.blog.img_src} alt = {props.blog.heading}/>
        <div className='blog-content-div'>

        
        <p className='blog-topic'>{props.blog.topic}</p>
        <h4>{props.blog.heading}</h4>
        <p className='blog-content'>{props.blog.content}</p>
        <div className='blog-footer'>
        <p className='blog-see-more'>see-more</p>
        <p className='blog-date'>{props.blog.date}</p>
        </div>
        </div>
    </div> );
}
 
export default Blog;