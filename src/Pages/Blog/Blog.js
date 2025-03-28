import React from "react";
import "./Blog.scss";
import salad1 from "../../assets/salad1.png";
import salad2 from "../../assets/salad2.png";
import salad3 from "../../assets/salad3.png";
import salad4 from "../../assets/salad4.png";
import salad6 from "../../assets/salad6.png";
function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Salad Rolls You Must Try!",
      excerpt:
        "From classic California rolls to spicy tuna – discover the most loved sushi types around the world.",
      image: salad1,
    },
    {
      id: 2,
      title: "Why Sushi Is Good For Your Health",
      excerpt:
        "Rich in omega-3 and low in fat – sushi is not just tasty, but also a healthy food choice.",
      image: salad2,
    },
    {
      id: 3,
      title: "The Art of Japanese Cuisine",
      excerpt:
        "Learn the cultural story behind sushi, wasabi, and more. It's food with a legacy.",
      image: salad3,
    },
    {
      id: 4,
      title: "Top 5 Salad Rolls You Must Try!",
      excerpt:
        "From classic California rolls to spicy tuna – discover the most loved sushi types around the world.",
      image: salad4,
    },
  ];

  return (
    <div className="blog-container">
      <div className="blog">
        <div className="blog-header">
          <h2>
            {" "}
            Our Blog <img src={salad1} alt="" width="50" className="img-blog" />
          </h2>
          <p>
            After A Good Dinner One Can Forgive Anybody, Even One's Own
            Relations
          </p>
        </div>
        <div className="blog-top-img">
          <img src={salad2} alt="" className="img-top" />
        </div>
      </div>
      <div className="blog2">
        <div className="img-bl2">
          <img src={salad6} alt="" className="img-l-bl2" />
        </div>
        <div className="title2">
          <div className="top-title2">
            <span className="sp-title2">About Us</span>
            <span className="sp-title-bd2">
              We Provide <img src={salad6} alt="" className="img-tl2" /> <br />{" "}
              healthy food
            </span>
            <span className="sp-title-f2">
              Food For Us Comes From Our Relatives, Whether They Have Wings Or
              Fins Or Roots. That Is How We Consider Food. Food Has A Culture.
              It Has A History. It Has A Story. It Has Relationships
            </span>
          </div>
        </div>
      </div>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
