import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './layout.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faGreaterThan, faShareNodes, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export function Layout_1(){
    return(
        <>
        {/* nav bar */}
          <nav class="navbar navbar-expand-lg navbar-light btn-violet">
            <a className="navbar-brand text-light" href="#"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a class="nav-link text-light" href="#">Home<FontAwesomeIcon icon={faGreaterThan} className="mx-2"/>Profile</a></li>
              </ul>
            <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-violet btn-outline-light my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faShareNodes} className="mx-2"/>Share Profile</button>
            </form>
            </div>
          </nav>
          {/* main */}
          <div className="bord-bottom container-fluid">
            <div className="row mb-md-5 pb-md-3">
                <div className="col-lg-3 cent pt-5">
                  <img src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png" className="col-lg-12"/>
                  <h3 className="text-violet">SP ID: SP0001</h3>
                </div>
                <div className="col-lg-9">
                  <div className="bg-layout2 d-lg-block d-none"></div>
                  <div className="px-lg-3">
                    <h2 className="text-violet">ANANYA ANAND</h2>
                    <h4 className="text-violet">UI/UX Designer</h4>
                    <h6>Full stack Product Designer with Hans-on experience in solving problems ranging from real estates, hospitals, rentals, On-Demand Health care, IT Services and Social networking among others. I have good communication skill and user-centered approach to design.</h6>
                  </div>
                </div>
            </div>
          </div>
          {/* body */}
          <div className="container-fluid">
            <div className="row">
             {/* skills */}
            <div className="col-lg-3 bord-right p-lg-3">
              <h5 className="text-violet text-center pb-lg-4">TOP SKILLS</h5>
              <div className="row bord-bottom1">
                <figure className="col-lg-6 text-center col-4">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png" className="col-lg-8"/>
                  <figcaption>Adobe XD</figcaption>
                </figure>
                <figure className="col-lg-6 text-center col-4">
                  <img src="https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/adobe-photoshop-icon-13-256.png" className="col-lg-8"/>
                  <figcaption>Photo Shop</figcaption>
                </figure>
                <figure className="col-lg-6 text-center col-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/8202/8202993.png" className="col-lg-8"/>
                  <figcaption>Wire Frames</figcaption>
                </figure>
                <figure className="col-lg-6 text-center col-4">
                  <img src="https://static.vecteezy.com/system/resources/previews/010/794/341/non_2x/purple-artificial-intelligence-technology-circuit-file-free-png.png" className="col-lg-10 col-12"/>
                  <figcaption>AI</figcaption>
                </figure>
                <figure className="col-lg-6 text-center col-4">
                  <img src="https://icones.pro/wp-content/uploads/2021/04/symbole-telephone-portable-violet.png" className="col-lg-8 col-10"/>
                  <figcaption>Mobile Apps</figcaption>
                </figure>
                <figure className="col-lg-6 text-center col-4">
                  <img src="https://blog.bit.ai/wp-content/uploads/2021/07/Sentiment-analysis-bro-1024x1024.png" className="col-lg-8 col-10"/>
                  <figcaption>User Research</figcaption>
                </figure>
              </div>
              <h5 className="text-violet text-center py-lg-4">HOBBIES</h5>
              <div className="row bord-bottom1">
                <figure className="col-lg-6 text-center col-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/6635/6635575.png" className="col-lg-8"/>
                  <figcaption>Drawing</figcaption>
                </figure>
                <figure className="col-lg-6 text-center col-3">
                  <img src="https://cdn-icons-png.flaticon.com/512/7273/7273128.png" className="col-lg-8"/>
                  <figcaption>Travelling</figcaption>
                </figure>
                <figure className="col-lg-6 text-center col-3">
                  <img src="https://cdn3.iconfinder.com/data/icons/ios-web-user-interface-flat-circle-vol-3/512/Book_books_education_library_reading_open_book_study-512.png" className="col-lg-8"/>
                  <figcaption>Reading Books</figcaption>
                </figure>
                <figure className="col-lg-6 text-center col-3">
                  <img src="https://play-lh.googleusercontent.com/VlMBLkok87QKbpxQ-9vQbY7MxESbFlwWo2pMD6N66md287VVmm4iq72EvL_pDk2z2hw" className="col-lg-8"/>
                  <figcaption>Listening Music</figcaption>
                </figure>
              </div>
            </div>
            {/* information */}
            <div className="col-lg-9 p-lg-3 container-fluid bord-bottom1">
              <h5 className="text-violet">BASIC INFORMATION</h5>
              <div className="row my-2 bord-bottom1">
                <div className="d-flex flex-row col-lg-6">
                  <div className="col-lg-6 text-violet">
                    <h6>Age</h6>
                    <h6>Date Of Birth</h6>
                    <h6>Marital Status</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6>27</h6>
                    <h6>December 31, 1995</h6>
                    <h6>Single</h6>
                  </div>
                </div>
                <div className="d-flex flex-row col-lg-6">
                  <div className="col-lg-6 text-violet">
                    <h6>Location</h6>
                    <h6>Years of Experience</h6>
                    <h6>Annual Income</h6>
                  </div>
                  <div className="col-lg-6">
                    <h6>Gandhipuram, Coimbatore</h6>
                    <h6>3 Years 2 Months</h6>
                    <h6>13.5 LPA</h6>
                  </div>
                </div>
              </div>
              {/* Work Experience */}
              <h5 className="text-violet">WORK EXPERIENCE</h5>
              <div className="my-3 bord-bottom1">
                <div className="row p-lg-2">
                  <div className="col-lg-3 cent">
                      <img src="https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png" className="col-lg-8 col-8"/>
                  </div>
                  <div className="col-lg-9">
                    <h6 className="text-violet"><b>UI/UX Designer</b> 1 Year 2 Months</h6>
                    <p>Plan and implement new designs. Communicate with clients to understand their business goals and objectives. Develop technical and business requirements and always strive to deliver intuitive and user-centered solutions.</p>
                  </div>
                </div>
                <div className="row p-lg-2">
                  <div className="col-lg-3 cent">
                      <img src="https://preciseal.com/img/bg-img/1.png" className="col-lg-8 col-8"/>
                  </div>
                  <div className="col-lg-9">
                    <h6 className="text-violet"><b>Web Designer</b> 2 Year</h6>
                    <p>Create products with a good user experience. Understand what users want from their device and then designing it so they can find all of its features easily without any hassle.</p>
                  </div>
                </div>
              </div>
              {/* Projects */}
              <h5 className="text-violet">PROJECTS</h5>
              <div className="my-3">
                <div className="row p-lg-2">
                  <div className="col-lg-3 cent">
                      <img src="https://cdn-icons-png.flaticon.com/512/5027/5027513.png" className="col-lg-7 col-5"/>
                  </div>
                  <div className="col-lg-9">
                    <h6 className="text-violet">Restaurant Menu</h6>
                    <p>Create products with a good user experience. Understand what users want from their device and then designing it so they can find all of its features easily without any hassle.</p>
                  </div>
                </div>
                <div className="row p-lg-2">
                  <div className="col-lg-3 cent">
                      <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/4752/direct/1573598146940-Spiceworks%20IT%20Ticketing%20System.png" className="col-lg-8 col-7"/>
                  </div>
                  <div className="col-lg-9">
                    <h6 className="text-violet">Internal Ticket System</h6>
                    <p>Create products with a good user experience. Understand what users want from their device and then designing it so they can find all of its features easily without any hassle.</p>
                  </div>
                </div>
                <div className="row p-lg-2">
                  <div className="col-lg-3 cent">
                      <img src="https://i.pinimg.com/550x/ae/a5/19/aea51998697e9fb2489fe9f9504de74c.jpg" className="col-lg-8 col-7"/>
                  </div>
                  <div className="col-lg-9">
                    <h6 className="text-violet">Smart TV App Layout</h6>
                    <p>Screen sizes and overscan. Variations in lighting in the room throughout the day. Living room layouts and typical viewer distance. Sunlight and reflections. Navigation using a D-pad.</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          {/* footer */}
          <div className="container-fluid text-center">
            <h6>Show More</h6>
            <FontAwesomeIcon icon={faAngleDown} className="text-violet"/>
          </div>
        </>
    );
}