import React from "react";

const BlogGrid = () => {
  const blogs = Array.from({ length: 6 }, (_, index) => ({
    category: "Category",
    title: "Blog title heading goes here",
    description: "Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.",
  }));

  return (
    <>
    <header className="text-center my-4">
      <p className="text-muted">Tagline</p>
      <h1 className="display-5">Short heading goes here</h1>
      <nav className="d-flex justify-content-center gap-3 mt-3">
        <a href="yy" className="text-decoration-none">
          Link one
        </a>
        <a href="yy" className="text-decoration-none">
          Link two
        </a>
        <a href="yy" className="text-decoration-none">
          Link three
        </a>
        <a href="yy" className="text-decoration-none">
          Link four
        </a>
      </nav>
    </header>
    <section className="container my-5">
      <div className="row g-4">
        {blogs.map((blog, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100">
              <div
                className="card-img-top bg-secondary"
                style={{ height: "150px" }}
              ></div>
              <div className="card-body">
                <p className="text-muted">{blog.category}</p>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <a href="tt" className="btn btn-link">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default BlogGrid;
