import './Blogs.css'
const Blog = (props) => {
    return ( <div className="blog">
        <img src = {props.blog.img_src} alt = {props.blog.heading}/>
        <div className='blog-content-div'>

        
        <p className='blog-topic'>{props.blog.topic}</p>
        <p className='blog-heading'>{props.blog.heading}</p>
        <p className='blog-content'>{props.blog.content}</p>
        <div className='blog-footer'>
        <h3 className='blog-see-more'>Read-more</h3>
        <p className='blog-date'>{props.blog.date}</p>
        </div>
        </div>
    </div> );
}
 
export default Blog;