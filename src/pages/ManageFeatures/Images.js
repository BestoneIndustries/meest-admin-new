import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";
// import BootstrapTable from "react-bootstrap-table-next";
import NotificationSystem from "react-notification-system";

export default function Images() {
  var notificationSystem = React.createRef();
  const [posts, setPosts] = useState([]); //posts state
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [query, setQuery] = useState(""); // searching query
  const [userId, setUserId] = useState(""); //Delete userid
  const [postId, setPostId] = useState(""); //Delete posted image

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  const loadPosts = async (pgNum, pgSize) => {
    if (pgSize) setPageSize(pgSize);
    if (pgNum) setPageNumber(pgNum);
    var body = {
      pageNumber: pgNum,
      pageSize: pgSize,
    };
    const data = await postData("/admin/user/all/imagesAndVideosOfPosts", body);
    // const data = await postData("/post/getAll", body);
    console.log("Images Data ---->", data.data.rows); // the main data
    const resData = data.data.rows.filter((ele) => ele.posts[0].image === 1);
    setPosts(resData);
  };

  const onQuerySubmit = async () => {
    var body = {
      key: query,
    };
    const res = await postData("/search/images", body);

    setPosts(res.data.rows);
  };

  // delete user's post
  async function onDeletePost() {
    const { code } = await postData("/post/delete/user/admin/post", {
      // userId: userId,
      postId: postId,
    });
    if (code == 1) {
      loadPosts(pageNumber, pageSize);
      success("Post deleted successfully");
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

  const currentSlide = () => {};

  // const showFilter = (e) => {
  //   let filterData = e.target.value;
  //   const newData = posts.slice(0, filterData);
  //   SetPosts(newData);
  // };

  // const columns = [
  //   {
  //     dataField: "id",
  //     text: "ID",
  //   },
  //   {
  //     dataField: "user/username",
  //     text: "Publisher",
  //   },
  //   {
  //     dataField: "price",
  //     text: "Post Link",
  //   },
  //   {
  //     dataField: "price",
  //     text: "Posted",
  //   },
  //   {
  //     dataField: "likes",
  //     text: "Likes",
  //   },
  //   {
  //     dataField: "views",
  //     text: "Views",
  //   },
  //   {
  //     dataField: "share",
  //     text: "Share",
  //   },
  //   {
  //     dataField: "status",
  //     text: "Status",
  //   },
  //   {
  //     dataField: "action",
  //     text: "Action",
  //   },
  // ];

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
    loadPosts(pageNumber, pageSize);
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
                      <Link to="/">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Images</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-message-square text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">21</h2>
                        <p className="mb-1">Total Comments</p>
                      </div>
                    </div>
                    {/* <!--  <div className="card-content">
                                    <div id="subscribe-gain-chart"></div>
                                </div>-->	 */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-thumbs-up text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">18</h2>
                        <p className="mb-1">Total Likes</p>
                      </div>
                    </div>
                    {/* <!--<div className="card-content">
                                    <div id="subscribe-gain-chart"></div>
                                </div>--> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-message-square text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">539</h2>
                        <p className="mb-1">Total Wonders / Dislikes</p>
                      </div>
                    </div>
                    {/* <!--<div className="card-content">
                                    <div id="subscribe-gain-chart"></div>
                                </div>--> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-share text-warning font-medium-5"></i>
                          </div>
                        </div>{" "}
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">2</h2>
                        <p className="mb-1">Total Replies</p>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <Link to="/top-images">
                      <div className="card-header align-items-start pb-0">
                        <div className="col-4 mr-0">
                          <div className="avatar bg-rgba-warning p-50 m-0">
                            <div className="avatar-content">
                              <i className="feather icon-bar-chart-2 text-warning font-medium-5"></i>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="col-8 ml-0">
                          <h2 className="text-bold-700 mb-25">...</h2>
                          <p className="mb-1">Top Images</p>
                        </div>{" "}
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <Link to="/trending-images">
                      <div className="card-header align-items-start pb-0">
                        <div className="col-4 mr-0">
                          <div className="avatar bg-rgba-warning p-50 m-0">
                            <div className="avatar-content">
                              <i className="feather icon-bar-chart text-warning font-medium-5"></i>
                            </div>
                          </div>{" "}
                        </div>
                        <div className="col-8 ml-0">
                          <h2 className="text-bold-700 mb-25">...</h2>
                          <p className="mb-1">Trending Images</p>
                        </div>{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <NotificationSystem ref={notificationSystem} />
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage & Edit Images</h4>
                      </div>
                    </div>

                    <div className="card-content card-body">
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
                                    loadPosts(1, parseInt(e.target.value));
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
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter bulk-btn"
                            >
                              <div className="col-7 col-md-9 pr-0 pl-0">
                                <input
                                  type="text"
                                  placeholder="Search for Image's caption"
                                  name="query"
                                  id="query"
                                  className="form-control full-wdth float-left"
                                  value={query}
                                  onChange={(e) => setQuery(e.target.value)}
                                />
                              </div>
                              <div className="col-5 col-md-3 pr-0">
                                <button
                                  className="btn btn-primary float-left waves-effect waves-light"
                                  onClick={() => onQuerySubmit()}
                                >
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-3 mtop-r1">
                            <div className="dropdown flot-rigt">
                              <button
                                onClick={myFunction}
                                className="btn btn-primary waves-effect waves-light dropbtn"
                              >
                                Bulk Option
                              </button>
                              <div id="myDropdown" className="dropdown-content">
                                {/* <a href="#">Delete</a>
                                <a href="#">Download</a> */}
                                <a href="#">Export as CSV</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="table-responsive">
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
                                <th
                                  data-field="state"
                                  data-checkbox="true"
                                ></th>
                                <th data-field="id">ID</th>
                                <th data-field="username" data-editable="true">
                                  Username
                                </th>
                                <th data-field="source" data-editable="true">
                                  Image
                                </th>
                                {/* <th data-field="email" data-editable="true">
                                  Posted
                                </th> */}
                                <th data-field="likes">Likes</th>
                                {/* <th data-field="views">Views</th> */}
                                <th data-field="share">Views</th>
                                <th data-field="status" data-editable="true">
                                  Share
                                </th>
                                <th data-field="action">Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              {posts.map((post, id = 1) => (
                                <tr key={id}>
                                  <td>
                                    {/* <input
                                      type="checkbox"
                                      name="checkbox"
                                      id=""
                                    /> */}
                                  </td>
                                  <td>
                                    {
                                      (id =
                                        id + 1 + pageSize * (pageNumber - 1))
                                    }
                                  </td>
                                  <td>
                                    {/*<img
                                      className="setting-avatar"
                                      src={post.posts[0].post}
                                    />{" "}
                                      {post.caption ? post.caption : "No caption"}*/}
                                    <img
                                      className="setting-avatar"
                                      src={post.user.thumbnail}
                                    />{" "}
                                    {post.user.username}
                                  </td>
                                  <td>
                                    {/*<Link
                                      to={{
                                        pathname: "/Post-Details",
                                        state: { id: post.user.id },
                                      }}
                                    >
                                      {" "}
                                      Open Images
                                    </Link>*/}
                                    <a
                                      href={post.posts[0].post}
                                      data-lightbox="post-article-gallery"
                                      data-title=""
                                      className="link-preview"
                                      title="IMG"
                                    >
                                      <img
                                        className="setting-avatar"
                                        onClick={() => currentSlide()}
                                        src={post.posts[0].post}
                                      />{" "}
                                    </a>
                                    <span title={post.caption}>
                                      {" "}
                                      {post.caption
                                        ? post.caption.substr(0, 10) + "..."
                                        : "No caption"}
                                    </span>
                                  </td>
                                  {/* <td>{post.createdAt}</td> */}
                                  <td>
                                    <a href="#" className="counter-area">
                                      {post.liked}
                                    </a>
                                  </td>
                                  <td>
                                    <a href="#" className="counter-area">
                                      {post.disliked}
                                    </a>
                                  </td>
                                  <td>
                                    <a href="#" className="counter-area">
                                      {post.shareCount}
                                    </a>
                                  </td>
                                  {/* <td>
                                    <label className="switch offer">
                                      <input type="checkbox" />
                                      <span className="slider round"></span>
                                    </label>
                                  </td> */}
                                  <td>
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#default1"
                                      className="btn btn-danger"
                                      onClick={() => (
                                        setUserId(post.userId),
                                        setPostId(post.id)
                                      )}
                                    >
                                      {/* <i className="feather icon-trash" /> */}
                                      Delete

                                    </a>{" "}
                                  </td>
                                </tr>
                              ))}
                              {/* loop end  */}
                            </tbody>
                          </table>
                          <div style={{ width: "100%" }}>
                            {pageNumber > 1 ? (
                              <a
                                onClick={(e) => {
                                  loadPosts(pageNumber - 1, pageSize);
                                }}
                                href={pageNumber > 1 && "#"}
                              >
                                {"  "}&lt;&lt;
                              </a>
                            ) : (
                              <a></a>
                            )}
                            <span> Showing Page {pageNumber} </span>
                            {posts ? (
                              <a
                                onClick={(e) => {
                                  loadPosts(pageNumber + 1, pageSize);
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
              </div>{" "}
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
        tabIndex="-1"
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
              Are you sure you want to delete this posted image ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={() => onDeletePost()}
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
