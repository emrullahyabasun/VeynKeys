import React from 'react'

function BlogGrid() {
  return (
    <>
    {/*======================
    Blog Grid area Start
    ==========================*/}
<div className="blog-fullwidth">
  <div className="container">
    <div className="row mt-20">
      <div className="col-lg-4 col-md-6">
        {/* Single Blog Start */}
        <div className="single-blog mt-30">
          <div className="blog-image mb-30">
            <a href="blog-details.html"><img src="assets/images/blog/blog-grid-1.jpg" alt="" className="img-fluid" /></a>
          </div>
          <div className="blog-content">
            <ul className="meta">
              <li><i className="fa fa-calendar" /><a href="#">Jun 22, 2020</a></li>
              <li><i className="fa fa-user-circle" /> Posts by : admin</li>
              <li><i className="fa fa-folder-open" /><a href="#"> Fashion</a></li>
            </ul>
            <h5 className="title"><a href="blog-details.html">Praesent Imperdiet</a></h5>
            <div className="desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eum in, nemo quod deleniti impedit quis inventore maxime corporis, necessitatibus quae!…</p>
            </div>
            <a href="blog-details.html" className="link">Read More</a>
          </div>
        </div>
        {/* Single Blog End */}
      </div>
      <div className="col-lg-4 col-md-6">
        {/* Single Blog start */}
        <div className="single-blog mt-30">
          <div className="blog-image mb-30">
            <a href="blog-details.html"><img src="assets/images/blog/blog-grid-2.jpg" alt="" className="img-fluid" /></a>
          </div>
          <div className="blog-content">
            <ul className="meta">
              <li><i className="fa fa-calendar" /><a href="#">July 22, 2020</a></li>
              <li><i className="fa fa-user-circle" /> Posts by : admin</li>
              <li><i className="fa fa-folder-open" /><a href="#"> Fashion</a></li>
            </ul>
            <h5 className="title"><a href="blog-details.html">This is fourth post for XipBlog.</a></h5>
            <div className="desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eum in, nemo quod deleniti impedit quis inventore maxime corporis, necessitatibus quae!…</p>
            </div>
            <a href="blog-details.html" className="link">Read More</a>
          </div>
        </div>
        {/* Single Blog End */}
      </div>
      <div className="col-lg-4 col-md-6">
        {/* Single Blog start */}
        <div className="single-blog mt-30">
          <div className="blog-image mb-30">
            <a href="blog-details.html"><img src="assets/images/blog/blog-grid-3.jpg" alt="" className="img-fluid" /></a>
          </div>
          <div className="blog-content">
            <ul className="meta">
              <li><i className="fa fa-calendar" /><a href="#">February 21, 2020</a></li>
              <li><i className="fa fa-user-circle" /> Posts by : admin</li>
              <li><i className="fa fa-folder-open" /><a href="#"> Fashion</a></li>
            </ul>
            <h5 className="title"><a href="blog-details.html">Faux Map Drawer Dresser.</a></h5>
            <div className="desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium eum in, nemo quod deleniti impedit quis inventore maxime corporis, necessitatibus quae!…</p>
            </div>
            <a href="blog-details.html" className="link">Read More</a>
          </div>
        </div>
        {/* Single Blog End */}
      </div>
    </div>
 
  </div>
</div>
{/*======================
    Blog Grid area End
    ==========================*/}

    </>
  )
}

export default BlogGrid