import React, { useEffect } from "react";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function ApprovedVideos() {
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }

  // function openModal() {
  //   document.getElementById("mydocument").style.display = "block";
  // }

  // function closeModal() {
  //   document.getElementById("mydocument").style.display = "none";
  // }

  var slideIndex = 1;

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // function currentSlide(n) {
  //   showSlides((slideIndex = n));
  // }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    //var captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
  }

  useEffect(() => {
    window.onClick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains("show")) {
            openDropdown.classList.remove("show");
          }
        }
      }
    };

    showSlides(slideIndex);
  }, []);

  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Video Management</Link>
                    </li>
                    <li className="breadcrumb-item">Approved Videos</li>
                    <li className="breadcrumb-item active">Videos Details</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="card">
                <div className="card-header border-bottom">
                  <div className="col-12">
                    <h4 className="card-title">Approved Videos</h4>
                  </div>
                  <a className="heading-elements-toggle">
                    <i className="fa fa-ellipsis-v font-medium-3"></i>
                  </a>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li>
                        <a data-action="collapse">
                          <i className="feather icon-chevron-down"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="">
                          <i className="feather icon-rotate-cw users-data-filter"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="close">
                          <i className="feather icon-x"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="profile-details">
                    <div>
                      <img
                        className="profile-avatar-pic"
                        src="app-assets/images/icons/d-avatar.jpg"
                        alt=""
                      />
                    </div>
                    <div className="pl-2">
                      <h4>@user899370</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="video-section">
                        <video width="100%" controls>
                          <source src="mov_bbb.mp4" type="video/mp4" />
                          <source src="mov_bbb.ogg" type="video/ogg" />
                          Your browser does not support HTML video.
                        </video>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="video-section">
                        <video width="100%" controls>
                          <source src="mov_bbb.mp4" type="video/mp4" />
                          <source src="mov_bbb.ogg" type="video/ogg" />
                          Your browser does not support HTML video.
                        </video>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="video-section">
                        <video width="100%" controls>
                          <source src="mov_bbb.mp4" type="video/mp4" />
                          <source src="mov_bbb.ogg" type="video/ogg" />
                          Your browser does not support HTML video.
                        </video>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="video-section">
                        <video width="100%" controls>
                          <source src="mov_bbb.mp4" type="video/mp4" />
                          <source src="mov_bbb.ogg" type="video/ogg" />
                          Your browser does not support HTML video.
                        </video>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="video-section">
                        <video width="100%" controls>
                          <source src="mov_bbb.mp4" type="video/mp4" />
                          <source src="mov_bbb.ogg" type="video/ogg" />
                          Your browser does not support HTML video.
                        </video>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="video-section">
                        <video width="100%" controls>
                          <source src="mov_bbb.mp4" type="video/mp4" />
                          <source src="mov_bbb.ogg" type="video/ogg" />
                          Your browser does not support HTML video.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />

      <div
        className="modal fade text-left show"
        id="mydocument"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel18"
        style={{ paddingRight: "17px", display: "none" }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="mySlides">
                {/* <!-- <div className="numbertext">1 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-avatar.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                {/* <!-- <div className="numbertext">2 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-page.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                {/* <!-- <div className="numbertext">3 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-avatar.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                {/* <!-- <div className="numbertext">4 / 4</div> --> */}
                <img
                  src="app-assets/images/icons/d-page.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <a className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </a>
              <a className="next" onClick={() => plusSlides(1)}>
                &#10095;
              </a>
            </div>
            <div className="modal-footer">
              {/* <!-- <button type="button" className="btn btn-primary waves-effect waves-light" data-dismiss="modal">Ok</button> --> */}
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade text-left show"
        id="mydocument1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel18"
        style={{ paddingRight: "17px", display: "none" }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <img
                src="app-assets/images/icons/d-avatar.jpg"
                style={{ width: "100%" }}
              />
            </div>
            <div className="modal-footer">
              {/* <!-- <button type="button" className="btn btn-primary waves-effect waves-light" data-dismiss="modal">Ok</button> --> */}
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade text-left show"
        id="default1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel18"
        style={{ paddingRight: "17px", display: "none" }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            {/* <!--<div className="modal-header">
                  <h4 className="modal-title" id="myModalLabel18">Default Modal</h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
                  </div>--> */}
            <div className="modal-body">
              Are you sure you want to delete this user?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade text-left show"
        id="default2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel18"
        style={{ paddingRight: "17px", display: "none" }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              Are you sure you want to delete this Post?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade text-left show"
        id="default3"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel18"
        style={{ paddingRight: "17px", display: "none" }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel18">
                Add Followers
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="controls">
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      placeholder="How many followers you want to add? You can add between 1 and 515."
                      required=""
                      aria-invalid="false"
                    />
                    <div className="help-block"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Start
              </button>
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
