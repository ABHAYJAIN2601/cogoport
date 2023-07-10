import Blog from "./Blog";
const blogs_data = [
  {
    topic: "Expert Speak",
    heading: "Cogoport: A Global Trade Platform",
    content:
      "Cogoport leverages technology and caters to enterprises of all sizes. Our solutions improve predictability and enhance human capabilities.",
    date: "03 July 2023",
    img_src: "/Cogoport_Positioning_Banner.webp",
  },

  {
    topic: "Industry Basics",
    heading:
      "Understanding Lean Supply Chain Management: Definition and Considerations",
    content:
      "Lean Supply Chain Management represents the extension of Lean Thinking across the entire supply chain. So, what are the benefits and key components? Read on!",
    date: "24 June 2023",
    img_src: "/Eng_2205_Banner.webp",
  },
  {
    topic: "Industry Basics",
    heading:
      "Exploring Types of Supply Chain Management Strategies & Logistics",
    content: `What are the types of supply chain management? How can we effectively apply them to your business and customer service? Let's find out together!`,
    date: "22 June 2023",
    img_src: "/Eng_2405_Banner.webp",
  },
];
const Blogs = () => {
  return (
    <div className="blog-wrapper">
      <h2>Blogs</h2>

      <div className="blog-container">
        {blogs_data.map((blog) => {
          return <Blog blog={blog} />;
        })}
      </div>
      <button className="see-all-btn">{"See All->"}</button>
    </div>
  );
};

export default Blogs;
