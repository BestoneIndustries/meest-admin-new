import React, { useEffect, useState } from "react";

import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";
// import BootstrapTable from "react-bootstrap-table-next";
import PostsComponent from "./PostsComponent";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { UserContext } from "../../context/UserContext";
//import { setOptions } from "highcharts";
import NotificationSystem from "react-notification-system";

export default function Posts() {
  var notificationSystem = React.createRef();
  //const { dispatch } = useContext(UserContext);
  const [posts, setPosts] = useState([]); //posts state
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  // const [query, setQuery] = useState(""); // searching query
  const [likeCounts, setLikeCounts] = useState("");
  const [postCounts, setPostCounts] = useState("");
  const [commentCounts, setCommentCounts] = useState("");
  const [savedPosts, setSavedPosts] = useState("");
  // const [postId, setPostId] = useState("")
  const [userId, setUserId] = useState("");
  //const [useId, setUseId] = useState("");
  const history = useHistory();

  const success = (msg) => {
    console.log("success -> msg", msg);
    const notification = notificationSystem.current;
    if (notification) return;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "success",
    });
  };

  const error = (msg) => {
    console.log("error -> msg", msg);
    const notification = notificationSystem.current;
    if (!notification) return;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "error",
    });
  };

  async function onDeletePost() {
    const { code } = await postData("/post/delete/user/admin/post", {
      // postId: postId,
      userId: userId,
    });
    console.log("delete post", code);
    if (code == 1) {
      loadPosts(pageNumber, pageSize);
      success("Posts are successfully deleted");
    }
  }

  // async function fetchData() {
  //   const { data } = await postData("/post/by/userId", {
  //     userId: history.location.state.id,
  //   });
  //   console.log("data:- ", data);
  //   if (data) {
  //     setUseId(data.rows);
  //   }
  // }

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
    const data = await postData("/post/allAdminPosts", body);
    // const data = await postData("/post/getAll", body);

    console.log("table", data.data); // the main data

    // loop for dynamic data count

    let allPostData = data.data;
    console.log(allPostData)
    let totalLikeCounts = 0;
    let totalPostCounts = 0;
    let totalCommentCounts = 0;
    let totalSavedPosts = 0;
    //totalLikeCounts = data.data.reduce((a,v) =>  totalLikeCounts = a + Number(v.likeCounts) , 0 )
    allPostData.forEach((post) => {

      totalLikeCounts = totalLikeCounts + Number(post.likeCounts);
      totalPostCounts = totalPostCounts + Number(post.totalpost);
      totalCommentCounts = totalCommentCounts + Number(post.commentCounts);
      // totalSavedPosts += post.postShareCount;
    });
    setLikeCounts(totalLikeCounts);
    setPostCounts(totalPostCounts);
    setCommentCounts(totalCommentCounts);
    setSavedPosts(totalSavedPosts);

    setPosts(data.data);
  };

  // const onQuerySubmit = async () => {
  //   const resData = await postData("/admin/allUsers");
  //   console.log("searchData -> resData", resData);
  //   if (resData) {
  //     setQuery(resData);
  //   }

  // let newData = posts[0]["user"]["username"].filter((postsEdited) => query);
  // // console.log(newData);
  // searching logic
  // };

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
    // fetchData()
    // onQuerySubmit();
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
                    <li className="breadcrumb-item active">Posts</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <PostsComponent
                  link="/Post-Details"
                  icon="feather icon-thumbs-up text-primary font-medium-5"
                  count={likeCounts}
                  title="Total Likes"
                />

                <PostsComponent
                  link="/Post-Details"
                  icon="feather icon-briefcase text-primary font-medium-5"
                  count={postCounts}
                  title="Total Posts"
                />
                <PostsComponent
                  link="/Post-Details"
                  icon="feather icon-message-circle text-primary font-medium-5"
                  count={commentCounts}
                  title="Total Comments"
                />
                {/* <PostsComponent
                  link="/Post-Details"
                  icon="feather icon-message-square text-primary font-medium-5"
                  count={savedPosts}
                  title="Total Saved Posts"
                /> */}
                {/* <PostsComponent
                  link="/Post-Details"
                  icon="feather icon-trending-up text-primary font-medium-5"
                  count={"37"}
                  title="Top Posts"
                />
                <PostsComponent
                  link="/Post-Details"
                  icon="feather icon-trending-up text-primary font-medium-5"
                  count={"80"}
                  title="Trending Posts"
                /> */}
              </div>
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage & Edit Posts</h4>
                      </div>
                    </div>
                    <NotificationSystem ref={notificationSystem} />
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
                                    loadPosts(1, e.target.value);
                                  }}
                                >
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                  <option value="200">200</option>
                                  <option value="400">400</option>
                                  <option value="500">500</option>
                                </select>
                                entries
                              </label>
                            </div>
                          </div>
                          {/* <div className="col-12 col-sm-8 col-md-6 mtop-r1">
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter bulk-btn"
                            >
                              <div className="col-7 col-md-9 pr-0 pl-0">
                                <input
                                  type="text"
                                  placeholder="Search for User's Posts"
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
                          </div> */}

                          <Formik
                            initialValues={{
                              searchText: "",
                            }}
                            validationSchema={Yup.object().shape({})}
                            onSubmit={async (
                              values,
                              { setSubmitting, resetForm }
                            ) => { 
                              var body = {
                                searchText: values.searchText,
                              };
                              console.log("searchData -->", body);
                              const resData = await postData(
                                "/post/allAdminPosts",
                                body
                              );
                              console.log("searchData -->", resData);

                              if (resData) {
                                // return
                                // setFAQData(data);
                                setPosts(resData.data.rows);
                                // setPosts(resData.user);
                              }
                            }}
                            render={({
                              values,
                              errors,
                              touched,
                              isSubmitting,
                              searchText,
                            }) => {
                              return (
                                <Form className="col-12 col-sm-8 col-md-6 mtop-r1">
                                  <div
                                    id="DataTables_Table_0_filter"
                                    className="dataTables_filter bulk-btn"
                                  >
                                    <div className="col-7 col-md-9 pr-0 pl-0">
                                      <Field
                                        type="text"
                                        placeholder="Search....."
                                        name="searchText"
                                        id="searchText"
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
                          {/* <div className="col-12 col-sm-8 col-md-6 mtop-r1">
                            <div
                              id="DataTables_Table_0_filter"
                              className="dataTables_filter bulk-btn"
                            >
                              <div className="col-7 col-md-9 pr-0 pl-0">
                                <input
                                  type="text"
                                  placeholder="Search for User's Posts"
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
                          </div> */}
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
                        {/* <BootstrapTable
                          keyField="id"
                          data={posts}
                          columns={columns}
                        /> */}
                        {posts && (
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
                                  <th
                                    data-field="username"
                                    data-editable="true"
                                  >
                                    User Name
                                  </th>
                                  <th data-field="source" data-editable="true">
                                    Post Link
                                  </th>
                                  <th data-field="email" data-editable="true">
                                    Post Count
                                  </th>
                                  <th data-field="likes">Likes</th>
                                  <th data-field="dislikes">Shares</th>
                                  {/* <th data-field="views">Views</th> */}
                                  <th data-field="share">Comments</th>
                                  {/* <th data-field="status" data-editable="true">
                                    Status
                                  </th> */}
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>

                              <tbody>
                                {/* <tr>
                                <td></td>
                                <td>1</td>
                                <td>
                                  <img
                                    className="setting-avatar"
                                    src="app-assets/images/icons/d-avatar.jpg"
                                  />{" "}
                                  Airi
                                </td>
                                <td>
                                  <Link to="/Post-Details"> Open Posts</Link>
                                </td>
                                <td>11/02/2020 11:30 PM</td>
                                <td>
                                  <a href="#" className="counter-area">
                                    26
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    11
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    15
                                  </a>
                                </td>
                                <td>
                                  <label className="switch offer">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#default1"
                                    className="btn btn-danger"
                                  >
                                    Delete
                                  </a>{" "}
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>2</td>
                                <td>
                                  <img
                                    className="setting-avatar"
                                    src="app-assets/images/icons/d-avatar.jpg"
                                  />{" "}
                                  Airi
                                </td>
                                <td>
                                  <Link to="/Post-Details"> Open Post</Link>
                                </td>
                                <td>11/06/2020 01:30 PM</td>
                                <td>
                                  <a href="#" className="counter-area">
                                    26
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    11
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    15
                                  </a>
                                </td>
                                <td>
                                  <label className="switch offer">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                  </label>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#default1"
                                    className="btn btn-danger"
                                  >
                                    Delete
                                  </a>{" "}
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                                <td>3</td>
                                <td>
                                  <img
                                    className="setting-avatar"
                                    src="app-assets/images/icons/d-avatar.jpg"
                                  />{" "}
                                  Airi
                                </td>
                                <td>
                                  <Link to="/Post-Details"> Open Post</Link>
                                </td>
                                <td>10/02/2020 10:30 AM</td>
                                <td>
                                  <a href="#" className="counter-area">
                                    26
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    11
                                  </a>
                                </td>
                                <td>
                                  <a href="#" className="counter-area">
                                    15
                                  </a>
                                </td>
                                <td>
                                  <label className="switch offer">
                                    <input type="checkbox" checked />
                                    <span className="slider round"></span>
                                  </label>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#default1"
                                    className="btn btn-danger"
                                  >
                                    Delete
                                  </a>{" "}
                                </td>
                              </tr> */}
                                {/* loop start  */}
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
                                      {id + 1 + pageSize * (pageNumber - 1)}
                                    </td>
                                    <td>
                                      {/* there will be need to change */}
                                      {/* <img
                                        className="setting-avatar"
                                        src={post.user.displayPicture}
                                      /> */}

                                      {post.displayPicture !== "null" ? (
                                        <img
                                          className="setting-avatar"
                                          src={post.displayPicture}
                                        />
                                      ) : (
                                        <img
                                          className="setting-avatar"
                                          src={
                                            "https://static.thenounproject.com/png/778835-200.png"
                                          }
                                        />
                                      )}

                                      {/* src={post.user.displayPicture ?  post.user.displayPicture: post.user.thumbnail }
                                      />{" "} */}
                                      {post.username}
                                    </td>
                                    <td>
                                      <Link
                                        to={{
                                          pathname: "/Post-Details",
                                          state: { id: post.id },  
                                        }}
                                        onClick={() => {localStorage.setItem("newId",post.id)}  }                                      
                                         >                                        
                                        {" "}
                                        All Posts
                                      </Link>
                                    </td>
                                    <td>
                                        <Link
                                          to={{
                                            pathname: "/Post-Details",
                                            state: { id: post.id },
                                          }}
                                        onClick={() => { localStorage.setItem("newId", post.id) }}
                                        >
                                          <a href="#" className="counter-area">
                                            {post.totalpost}
                                          </a>
                                        </Link>
                                      </td>
                                    <td>
                                      <a href="#" className="counter-area">
                                        {post.likeCounts}
                                      </a>
                                    </td>
                                    <td>
                                      <a href="#" className="counter-area">
                                        {post.postShareCount}
                                      </a>
                                    </td>
                                    {/* <td>
                                      <a href="#" className="counter-area">
                                        11
                                      </a>
                                    </td> */}
                                    <td>
                                      <a href="#" className="counter-area">
                                        {post.commentCounts}
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
                                        // onClick= {() => (setPostId(post.id), setUserId(post.userId))}
                                        onClick={() => setUserId(post.userId)}
                                      >
                                        Delete
                                      </a>{" "}
                                    </td>
                                  </tr>
                                ))}
                                {/* loop end  */}
                              </tbody>
                            </table>

                            {/* <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row" id="table-hover-row">
                {useId &&
                  useId.map((ele, index) => {
                    return (
                      <div className="col-lg-6 col-12">
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-start align-items-center mb-1">
                              <div className="avatar mr-1">
                                <img
                                  src={ele.user.displayPicture}
                                  alt="avtar img holder"
                                  width="45"
                                  height="45"
                                />
                              </div>
                              <div className="user-page-info">
                                <p className="mb-0">
                                  {ele.user.firstName} {ele.user.lastName}
                                </p>
                                <span className="font-small-2">
                                  {ele.createdAt}
                                </span>
                              </div>
                              <div className="ml-auto user-like text-danger">
                                <i className="fa fa-heart"></i>
                              </div>
                              <div className="ml-auto user-like text-danger">
                              <a className="dropdown-item"
                                                data-toggle="modal"
                                                data-target="#default1"
                                                
                                                  
                                                  
                                                ><button className="btn btn-danger"  ><i className="feather icon-trash"></i></button></a>
                              </div>
                            </div>
                            <p>{ele.caption}</p>
                            {ele.posts &&
                              ele.posts.map((element, ind) => {
                                return (
                                  ind == 0 && (
                                    <img
                                      className="img-fluid card-img-top rounded-sm mb-2"
                                      src={element.post}
                                      alt="avtar img holder"
                                    />
                                  )
                                );
                              })}
                            <div className="d-flex justify-content-start align-items-center mb-1">
                              <div className="d-flex align-items-center">
                                <i className="feather icon-heart font-medium-2 mr-50"></i>
                                <span>{ele.likeCounts}</span>
                              </div>
                              <div className="ml-2">
                                <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                  {ele.postLikes &&
                                    ele.postLikes
                                      .slice(0, 5)
                                      .map((postLike) => {
                                        return (
                                          <li
                                            data-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-placement="bottom"
                                            data-original-title={
                                              postLike.user.username
                                            }
                                            className="avatar pull-up"
                                          >
                                            <img
                                              className="media-object rounded-circle"
                                              src={postLike.user.displayPicture}
                                              alt="Avatar"
                                              width="30"
                                              height="30"
                                            />
                                          </li>
                                        );
                                      })}
                                  <li className="d-inline-block pl-50">
                                    {ele.postLikes.length - 5 > 0 && (
                                      <span>
                                        +{ele.postLikes.length - 5} more
                                      </span>
                                    )}
                                  </li>
                                </ul>
                              </div>
                              <p className="ml-auto d-flex align-items-center">
                                <i className="feather icon-message-square font-medium-2 mr-50"></i>
                                {ele.commentCounts}
                              </p>
                            </div>
                            {ele.postComments &&
                              ele.postComments.slice(0, 2).map((postcommet) => {
                                return (
                                  <div className="d-flex justify-content-start align-items-center mb-1">
                                    <div className="avatar mr-50">
                                      <img
                                        src={postcommet.user.displayPicture}
                                        alt="Avatar"
                                        width="30"
                                        height="30"
                                      />
                                    </div>
                                    <div className="user-page-info">
                                      <h6 className="mb-0">
                                        {postcommet.user.firstName}{" "}
                                        {postcommet.user.lastName}
                                      </h6>
                                      <span className="font-small-2">
                                        {postcommet.comment}
                                      </span>
                                    </div>
                                    <div className="ml-auto cursor-pointer">
                                      <i className="feather icon-heart mr-50"></i>
                                      <i className="feather icon-message-square"></i>
                                      
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          </div> */}
                            <div style={{ width: "100%" }}>
                              {pageNumber > 1 ? (
                                <a
                                  onClick={(e) => {
                                    loadPosts(pageNumber - 1, pageSize);
                                  }}
                                  href={pageNumber > 1 && "#"}
                                >
                                  &lt;&lt;
                                </a>
                              ) : (
                                <a>&lt;&lt;</a>
                              )}
                              <span> Showing Page {pageNumber} </span>
                              {posts.length >= pageSize ? (
                                <a
                                  onClick={(e) => {
                                    loadPosts(pageNumber + 1, pageSize);
                                  }}
                                  href={pageNumber.toString() > 1 && "#"}
                                >
                                  &gt;&gt;
                                </a>
                              ) : (
                                <a>&gt;&gt;</a>
                              )}
                            </div>
                          </div>
                        )}
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
              Are you sure you want to delete the user post?
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


