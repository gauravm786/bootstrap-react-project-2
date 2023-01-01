import React from 'react'
import './style.css'
import pic1 from './logo1.png'
import pic2 from './dog.png'
import pic3 from './dog2.jfif'
import pic4 from './boots-1.jpg'
import pic5 from './boots-2.jpg'
import pic6 from './boots-3.jpg'

const Boots2 = () => {
  return (
    <>
     {/* <h1>Hello, world!</h1>  */}

     {/* there is no use of using container for navbar   */}
    <nav className="navbar navbar-expand-lg navbar-dark" id="top_nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={pic1} alt="logo1" className="img-fluid" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search" id="searchform">
              <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" id="searchbox" />
              <button className="btn btn-outline-success" type="submit" id="searchbtn">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

    {/* container-fluid     */}
    <div className="container-fluid">

       {/* banner  */}
      <div className="row justify-content-center" id="banner">
        <div className="col-md-6 col-11" id="bannertext">
          <h1>First I wanted to be <br /> a veterinarian</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit hic perferendis quam deserunt dolor, quaerat possimus? Iure sunt aut nulla nihil quisquam quo excepturi cupiditate sit voluptates, molestias similique.</p>

          <button className="btn" id="banner-btn-1">Contact Us</button>
          <button className="btn" id="banner-btn-2">Our Service</button>
        </div>
        <div className="col-md-4 d-none d-md-block" id="bannerimg" >
          <img src={pic2} alt="dogs" />
        </div>
      </div>

       {/* Service  */}
      <div className="row justify-content-center">
        <div className="col-md-5 col-11" id="service-text">
          <h1>As a veterinarian and <br />lover of animals.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit hic perferendis quam deserunt dolor, quaerat possimus? Iure sunt aut nulla nihil quisquam quo excepturi cupiditate sit voluptates, molestias similique.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit hic perferendis quam deserunt dolor, quaerat possimus? Iure sunt aut nulla nihil quisquam quo excepturi cupiditate sit voluptates, molestias similique.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit hic perferendis quam deserunt dolor, quaerat possimus? Iure sunt aut nulla nihil quisquam quo excepturi cupiditate sit voluptates, molestias similique.</p>
          <button type="button" className="btn" id="service-btn">Our Service</button>
        </div>
        <div className="col-md-5" id="service-img">
          <img src={pic3} alt="" className="img-fluid" />
        </div>
      </div>

     {/* counter  */}
      <div className="row justify-content-center" id="counter-section"
       style={{marginTop:"2rem"}}>
        <div className="col-md-3 text-center  mt-5 mb-3" >
          <i className="bi bi-heart-half counter-icon"></i>
          <h3>+34793 <br />Happy Clients </h3>
        </div>
        <div className="col-md-3 text-center mt-5 mb-3">
          <i className="bi bi-buildings counter-icon"></i>
          <h3>+45382 <br />Department</h3>
        </div>
        <div className="col-md-3 text-center  mt-5 mb-3">
          <i className="bi bi-eyedropper counter-icon"></i>
          <h3>+54762 <br />Vaccinations</h3>
        </div>
      </div>

      {/* blog   */}
      <div className="row justify-content-center" id="blog">
        <div className="col-12 text-center">
          <h1 id="blog-title">Recent Posts</h1>
          <p id="blog-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Quis dolores, velit vel qui veniam alias quae animi hic cumque. 
          </p>
        </div>
        <div className="col-md-3 col-11 mt-4">
          <img src={pic4} className="img-fluid" alt="boots-1" />
          <div className="article-detail">
            <h4 className="article-title">As a veterinarian and lover of animals.</h4>
            <p className="article-date">FEBRUARY 09,2021</p>
            <p className="article-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quam beatae perspiciatis dolorum et provident hic veritatis illo natus.</p>
            <p className="article-link"><a href="#">Read More+</a></p>
          </div>
        </div>
        <div className="col-md-3 col-11 mt-4">
          <img src={pic5} className="img-fluid" alt="boots-2"/>
          <div className="article-detail">
            <h4 className="article-title">As a veterinarian and lover of animals.</h4>
            <p className="article-date">FEBRUARY 09,2021</p>
            <p className="article-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quam beatae perspiciatis dolorum et provident hic veritatis illo natus.</p>
            <p className="article-link"><a href="#">Read More+</a></p>
          </div>
        </div>
        <div className="col-md-3 col-11 mt-4">
          <img src={pic6} className="img-fluid" alt="boots-3" />
          <div className="article-detail">
            <h4 className="article-title">As a veterinarian and lover of animals.</h4>
            <p className="article-date">FEBRUARY 09,2021</p>
            <p className="article-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro quam beatae perspiciatis dolorum et provident hic veritatis illo natus.</p>
            <p className="article-link"><a href="#">Read More+</a></p>
          </div>
        </div>
 
      </div>
      
       {/* footer   */}
      <div className="row justify-content-center text-white" id="footer">
        <div className="col-md-3 col-11">
          <h4>About</h4>
          <a href="">History</a><br />
          <a href="">Our Team</a><br />
          <a href="">Brand Guidelines</a><br />
          <a href="">Terms & Conditions</a><br />
          <a href="">Privacy Policy</a><br />
        </div>
        <div className="col-md-2 col-11">
          <h4>Services</h4>
          <a href="">How to order</a><br />
          <a href="">Our Product</a><br />
          <a href="">Order Status</a><br />
          <a href="">Promo</a><br />
          <a href="">Payment Method</a><br />
        </div>
        <div className="col-md-4 col-11 text-end">
          <h4>Title Here</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <form action="" id="footer-form">
            <input type="text" id="footer-search-box" />
            <button type="submit" id="footer-search-submit">
              <i className="bi bi-cursor-fill"></i>
            </button>
          </form>
          <i className="bi bi-instagram social-icon"></i>
          <i className="bi bi-facebook social-icon"></i>
          <i className="bi bi-twitter social-icon"></i>
          <i className="bi bi-whatsapp social-icon"></i>
        </div>
      </div>
       {/* container-fluid end   */}
    </div>

    
    </>
  )
}

export default Boots2