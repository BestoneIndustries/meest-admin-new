import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData } from "../apicall/apiCall";
import { useHistory } from "react-router-dom";
//import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import NotificationSystem from "react-notification-system";
import { ExportToExcel } from '../../components/ExportToExcel';
//import * as moment from "moment";
//import { Row } from "react-bootstrap";

export default function HashtagManager() {
  const [topTrainding, setTrainding] = useState([]);
  // const [userResponse, setUserResponse] = useState([]);
  const [response, setResponse] = useState([]);
  const [deleteId, onDelete] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //const { dispatch } = useContext(UserContext);
  const history = useHistory();
  var notificationSystem = React.createRef();
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  useEffect(() => {
    window.onclick = function (event) {
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
    fetchaAll(pageNumber, pageSize);
    fetchData();
  }, []);

  async function fetchData() {
    const { data, code, errorMessage } = await postData(
      "/hashtag/most/trending",
      {
        userId: history.location.state,
      }
    );
    console.log("fetchaData -> data", data);
    if (code) {
      setTrainding(data);
    }
  }

  async function fetchaAll(pgNum, pgSize) {
    setPageSize(pgSize);
    setPageNumber(pgNum);
    var body = {
      pageNumber: pgNum,
      pageSize: pgSize,
    };
    const { data, code, errorMessage } = await postData(
      "/hashtag/getAll",
      body
    );
    console.log("fetchaData ->all data", data);
    if (code) {
      const { rows, count } = data;
      setResponse(rows);
    }
  }

  const success = (msg) => {
    console.log("success -> msg", msg);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "success",
    });
  };

  const error = (msg) => {
    console.log("error -> msg", msg);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "error",
    });
  };

  async function deleteHash() {
    const ids = [deleteId];
    const { code, data } = await postData("/hashtag/bulk/delete", { ids });
    if (code) {
      success("Hashtag deleted successfully");
      fetchaAll(pageNumber, pageSize);
    } else {
      error("something is wrong");
    }
  }
  //   function swipe() {
  //     var largeImage = document.getElementById('largeImage');
  //     largeImage.style.display = 'block';
  //     largeImage.style.width=200+"px";
  //     largeImage.style.height=200+"px";
  //     var url=largeImage.getAttribute('ele.displayPicture');
  //     window.open(url,'','width="100%".stylewidth,height="100vh".style.height,resizable=1');
  //  }
  var slideIndex = 1;
  // function plusSlides(n) {
  //   showSlides((slideIndex += n));
  // }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
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
  }
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
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Hashtag Management
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <NotificationSystem ref={notificationSystem} />

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <Link to="Trending-Hashtag">
                      <div className="card-header align-items-start pb-0">
                        <div className="col-4 mr-0">
                          <div className="avatar bg-rgba-warning p-50 m-0">
                            <div className="avatar-content">
                              <i className="feather icon-bar-chart text-warning font-medium-5"></i>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="col-8 ml-0">
                          <h2 className="text-bold-700 mb-25">
                            #
                            {topTrainding.length > 0 && topTrainding[0].hashtag}
                          </h2>
                          <p className="mb-1">Trending Hashtag</p>
                        </div>{" "}
                      </div>
                    </Link>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <Link
                      to={{
                        pathname: "/Post-Details",
                        state: { id: topTrainding.id },
                      }}
                    >
                      <div className="card-header align-items-start pb-0">
                        <div className="col-4 mr-0">
                          <div className="avatar bg-rgba-warning p-50 m-0">
                            <div className="avatar-content">
                              <i className="feather icon-bar-chart-2 text-warning font-medium-5"></i>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="col-8 ml-0">
                          <h2 className="text-bold-700 mb-25">
                            {topTrainding.length > 0 && topTrainding[0].count}
                          </h2>
                          <p className="mb-1">Total Posts</p>
                        </div>{" "}
                      </div>
                    </Link>
                  </div>
                </div> */}
              </div>
              <div className="row" id="table-hover-row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Hashtag Manager</h4>
                      </div>
                    </div>
                    <div className="card-content  card-body">
                      <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap4"
                      >
                        <div
                          className="row mb-2"
                          style={{ alignItems: "center" }}
                        >
                          <div className="col-12 col-sm-4 col-md-3">
                            <div
                              className="dataTables_length float-left"
                              id="DataTables_Table_0_length"
                            >
                              <label>
                                Show
                                <select
                                  name="DataTables_Table_0_length"
                                  aria-controls="DataTables_Table_0"
                                  className="custom-select custom-select-sm form-control form-control-sm"
                                  onChange={(e) => {
                                    fetchaAll(1, parseInt(e.target.value));
                                  }}
                                >
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select>
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-12 col-sm-8 col-md-6 mtop-r1">
                            <Formik
                              initialValues={{
                                search: "",
                              }}
                              validationSchema={Yup.object().shape({})}
                              onSubmit={async (
                                values,
                                { setStatus, resetForm }
                              ) => {
                                try {
                                  resetForm({});
                                  setStatus({ success: true });
                                } catch (error) {
                                  setStatus({ success: false });
                                }
                                const { data } = await postData(
                                  "/hashtag/search",
                                  {
                                    key: values.search,
                                  }
                                );
                                if (data) {
                                  setResponse(data);
                                }
                              }}
                              render={({
                                values,
                                errors,
                                touched,
                                isSubmitting,
                              }) => {
                                return (
                                  <Form className="col-7 col-md-9 pr-0 pl-0">
                                    <div
                                      id="DataTables_Table_0_filter"
                                      className="dataTables_filter bulk-btn"
                                    >
                                      <div className="col-7 col-md-9 pr-0 pl-0">
                                        <Field
                                          type="text"
                                          placeholder="Search....."
                                          name="search"
                                          id="search"
                                          className="form-control full-wdth float-left"
                                        />
                                      </div>
                                      <div className="col-5 col-md-3 pr-0">
                                        <button
                                          type="submit"
                                          className="btn btn-primary float-left waves-effect waves-light"
                                        >
                                          Search
                                        </button>
                                      </div>
                                    </div>
                                  </Form>
                                );
                              }}
                            />
                          </div>
                          <div className="col-12 col-sm-6 col-md-3 mtop-r1">
                            <div className="dropdown flot-rigt">
                            <button className="btn btn-primary waves-effect waves-light dropbtn">
                                <ExportToExcel apiData={response} fileName={'All Hashtag'} />
                              </button>
                              {/* <div id="myDropdown" className="dropdown-content">
                                <a href="">Delete</a>
                                <a href="">Download</a>
                                <a href="">Export as CSV</a>
                              </div> */}
                            </div>
                          </div>
                        </div>

                        <div className="table-responsive">
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                className="table table-hover table-bordered mb-0"
                                id="table"
                                role="grid"
                                data-toggle="table"
                                data-pagination="true"
                                data-resizable="true"
                                data-click-to-select="true"
                              >
                                <thead className="thead-light">
                                  <tr>
                                    <th data-field="id">ID</th>
                                    <th
                                      data-field="hastag"
                                      data-editable="true"
                                    >
                                      Hashtags
                                    </th>
                                    <th data-field="posts" data-editable="true">
                                      Posts
                                    </th>
                                    {/* <th
                                      data-field="posts link"
                                      data-editable="true"
                                    >
                                      Post Link
                                    </th> */}
                                    <th
                                      data-field="posted"
                                      data-editable="true"
                                    >
                                      Posted
                                    </th>
                                    <th data-field="action">Action</th>
                                    <th data-field="displayPicture">Images</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {response &&
                                    response.map((ele, index) => {
                                      return (
                                        <tr key={index}>
                                          <td>
                                            {index +
                                              1 +
                                              pageSize * (pageNumber - 1)}
                                          </td>
                                          <td>
                                            <a href="#">#{ele.hashtag}</a>
                                          </td>
                                          <td>{ele.count}</td>
                                          {/* <td>
                                            <Link
                                              to={{
                                                pathname: "/Post-Details",
                                                state: { id: ele.id },
                                              }}
                                            >
                                              {" "}
                                              Open Posts
                                            </Link>
                                          </td> */}
                                          <td>
                                            {/* {moment(ele.updatedAt).format(
                                              "do, MMM, YYYY"
                                            )}{" "} */}
                                            <span title={ele.updatedAt}>
                                              {ele.updatedAt
                                                ? ele.updatedAt.substr(0, 10) +
                                                  "..."
                                                : "No Date"}
                                            </span>
                                          </td>
                                          <td>
                                            <a
                                              href="#"
                                              data-toggle="modal"
                                              data-target="#default1"
                                              className="btn btn-danger"
                                              onClick={() => onDelete(ele.id)}
                                            >
                                              Delete
                                            </a>

                                            {/* <button type="btn" className="btn btn-icon" data-toggle="tooltip" data-placement="top" title="Delete"
                                          data-toggle="modal" data-target="#default1"
                                          onClick={() => onDelete(ele.id)}
                                        >
                                          <i className="feather icon-trash"></i>
                                        </button> */}
                                          </td>
                                          <td>
                                            <a
                                              href={
                                                ele.displayPicture
                                                  ? ele.displayPicture
                                                  : "http://d3nnggev5lpenl.cloudfront.net/cover_picture.jpg"
                                              }
                                              data-lightbox="post-article-gallery"
                                              data-title=""
                                              className="link-preview"
                                            >
                                              <div
                                                className="language-icon"
                                                id="largeimaGE"
                                              >
                                                <img
                                                  src={
                                                    ele.displayPicture
                                                      ? ele.displayPicture
                                                      : "http://d3nnggev5lpenl.cloudfront.net/cover_picture.jpg"
                                                  }
                                                  width="40px"
                                                  className="setting-avatar1"
                                                  onClick={() =>
                                                    currentSlide(1)
                                                  }
                                                />
                                              </div>
                                            </a>
                                          </td>
                                        </tr>
                                      );
                                    })}
                                </tbody>
                              </table>
                              <div style={{ width: "100%" }}>
                                {pageNumber > 1 ? (
                                  <a
                                    onClick={(e) => {
                                      fetchaAll(pageNumber - 1, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}&lt;&lt;
                                  </a>
                                ) : (
                                  <a></a>
                                )}
                                <span> Showing Page {pageNumber} </span>
                                {response ? (
                                  <a
                                    onClick={(e) => {
                                      fetchaAll(pageNumber + 1, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}&gt;&gt;
                                  </a>
                                ) : (
                                  <a></a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
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
            <div className="modal-body">
              Are you sure you want to delete this Hashtag?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={() => deleteHash()}
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
    </>
  );
}
