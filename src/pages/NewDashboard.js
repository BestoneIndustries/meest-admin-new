import React, { useEffect, useContext, useState, useRef } from "react";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { postData } from "./apicall/apiCall";
import DashboardComponent from "./DashboardComponent";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { Row, Card, Col } from "reactstrap";
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import $ from "jquery";

let isMenuOpen = false;

const BorderLine = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  border: 1px solid gray;
`;

export default function Dashboard() {
  const { meestUser, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [totalCount, setTotalCount] = useState("");
  const [staticsData, setStaticsData] = useState({});
  const [datee, setDate] = useState([]);

  const [usersData, setUsersData] = useState([]);
  const [postsData, setpostsData] = useState([]);
  const [content, setContent] = useState("");
  const target = useRef(null);
  const [usersCountResponse, setUsersCountResponse] = useState({});
  const [tableData, setTableData] = useState([]);
  const [pageNumberr, setPageNumberr] = useState(1);
  const [pageSizeOnline, setPageSizeOnline] = useState();
  const [femaleCount, setFemaleCount] = useState(0);
  const [maleCount, setMaleCount] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState({});
  const [offlineUsers, setOfflineUsers] = useState({});
  const [otherCount, setOtherCount] = useState({});

  async function showOnlineUsers(pgNum, pgSize) {
    setPageSizeOnline(pgSize);
    setPageNumberr(pgNum);
    var body = {
      pageNumberr: pgNum,
      pageSize: pgSize,
      isOnline: true,
    };
    const resData = await postData("/admin/getOnlineUsers", body);
    console.log("onlineUsersData================>", resData);
    if (resData) {
      setTableData(resData.data.rows);
    }
  }
  const state = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Active",
        backgroundColor: "Green",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 65, 59, 80, 81, 56],
      },
      {
        label: "Online",
        backgroundColor: "Orange",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [onlineUsers],
      },
      {
        label: "Offline",
        backgroundColor: "red",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [offlineUsers],
      },
    ],
  };

  const month = {
    labels: [
      "jan",
      "feb",
      "mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users",
        backgroundColor: "Green",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [...usersData],
      },
      {
        label: "Posts",
        backgroundColor: "Orange",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [...postsData],
      },
    ],
  };

  useEffect(() => {
    getCountData();
    getStatics();
    fetchUsersCount();
    showOnlineUsers(1, 9);
  }, []);

  async function getCountData() {
    const resData = await postData("/dashboard/getAll/counts");
    console.log("fetchDataB2 -> resData", resData);
    if (resData) {
      setTotalCount(resData);
    }
  }
  async function getStatics() {
    const resData = await postData("/admin/statistic/data", {
      startDate: "2021-01-01",
      endDate: new Date().toISOString().slice(0, 10),
    });
    console.log("getStatics=================> ", resData);
    if (resData) {
      let userArr = [];
      let postArr = [];
      resData.data.userData.forEach((user) => userArr.push(user.count));
      resData.data.postData.forEach((post) => postArr.push(post.count));
      setStaticsData(resData.data);
      setDate(resData.data.postData);
      setUsersData([...userArr]);
      setpostsData([...postArr]);
    }
  }

  async function fetchUsersCount() {
    const resData = await postData("/dashboard/getAll/male/female/count");
    if (resData) {
      console.log("fetchUsersCountformaleand female", resData);

      setUsersCountResponse(resData.data);

      setFemaleCount(resData.data.totalFemale.count);
      setMaleCount(resData.data.totalMale.count);
      setOtherCount(resData.data.totalOtherUsers);

      setOnlineUsers(resData.data.totalOnlineUsers);
      setOfflineUsers(resData.data.totalOflineUsers);
    }
  }

  const users = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        label: "Users",
        backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00"],

        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [maleCount, femaleCount, otherCount],
      },
    ],
  };
  const onMenuBtnClick = () => {
    $("body").addClass("menu-open");
    isMenuOpen = true;
  };

  $("html").click(function () {
    if (isMenuOpen) {
      console.log("11 object");
      $("body").removeClass("menu-open");
      isMenuOpen = false;
    }
  });

  const onLogoutClickHandler = () => {
    localStorage.setItem("meestUser", null);
    localStorage.setItem("token", "");
    dispatch({ type: "CLEAR" });
    history.push("/login");
  };

  return (
    <>
      <nav className="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
        <div className="navbar-wrapper">
          <div className="navbar-container content">
            <div className="navbar-collapse" id="navbar-mobile">
              <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center navIcon">
                <ul className="nav navbar-nav">
                  <li
                    className="nav-item mobile-menu d-xl-none mr-auto mymenu"
                    onClick={onMenuBtnClick}
                  >
                    <a
                      className="nav-link nav-menu-main menu-toggle hidden-xs"
                      href="#"
                    >
                      <i className="ficon feather icon-menu"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="main-box">
                <div className="left-side">
                  <ul>
                    <li>
                      <a className="dashboard-overview">
                        Dashboard Overview <br></br>
                        <form>
                          <select
                            className="form-control"
                            style={{
                              width: "50%",
                              borderColor: "black",
                              border: "solid",
                            }}
                          >
                            <option value="Today">Today</option>
                            <option value="7 Days">Last Week</option>
                            <option value="1 Month">Last 1 Month</option>
                            <option value="6 Months">Last 6 Months</option>
                            <option value="1 year">Last 1 year</option>
                          </select>
                        </form>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="right-side">
                  <ul className="nav navbar-nav">
                    <li className="dropdown dropdown-user nav-item">
                      <a
                        className="dropdown-toggle nav-link dropdown-user-link"
                        href="#"
                        data-toggle="dropdown"
                      >
                        <span>
                          <img
                            className="round"
                            src={meestUser && meestUser.displayPicture}
                            alt="avatar"
                            height="40"
                            width="40"
                          />
                        </span>
                        &nbsp; &nbsp;
                        <div className="user-nav d-sm-flex d-none">
                          <span className="user-name text-bold-600">
                            {meestUser &&
                              `${meestUser.firstName} ${meestUser.lastName}`}
                          </span>
                          <span
                            className="user-status"
                            style={{ marginTop: "7px" }}
                          >
                            Available
                          </span>
                        </div>
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="edit-profile.html">
                          <i className="feather icon-user"></i> Edit Profile
                        </a>
                        <div className="dropdown-divider"></div>
                        <div
                          className="dropdown-item"
                          onClick={onLogoutClickHandler}
                        >
                          <i className="feather icon-power"></i> Logout
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body" style={{ display: "flex" }}>
            <section
              id="dashboard-analytics"
              className="center-box"
              style={{ width: "75%" }}
               >
              <div className="row" style={{ marginRight: "14px" }}>
                <DashboardComponent
                  link="/Manage-Users"
                  icon="feather icon-users text-primary font-medium-5"
                  count={totalCount ? totalCount.data.totalUsers : 0}
                  title="Total Users"
                />

                <DashboardComponent
                  link="/Online-Users"
                  icon="feather icon-users text-warning font-medium-5"
                  count={totalCount ? totalCount.data.totalOnlineUsers : 0}
                  title="Online Users "
                />

                <DashboardComponent
                  link="/Posts"
                  icon="feather icon-edit text-primary font-medium-5"
                  count={totalCount ? totalCount.data.totalPosts : 0}
                  title="Total Posts"
                />

                <DashboardComponent
                  link="/Images"
                  icon="fa fa-file-image-o text-primary font-medium-5"
                  count={totalCount ? totalCount.data.ImagesCount : 0}
                  title="Total Images "
                />

                {/* <DashboardComponent
                  link="/Advertisement-Dashboard"
                  icon="fa fa-address-card text-warning font-medium-5"
                  count={totalCount ? totalCount.data.advtRunningCount : 0}
                  title="Total Ads "
                /> */}

                <DashboardComponent
                  link="/Videos"
                  icon="fa fa-file-video-o text-warning font-medium-5"
                  count={totalCount ? totalCount.data.totalVideoCount : 0}
                  title="Total Videos "
                />

                <DashboardComponent
                  link="/Manage-Reports"
                  icon="feather icon-users  text-warning font-medium-5"
                  count={totalCount ? totalCount.data.totalReportsCount : 0}
                  title="Reports "
                />
              </div>
            </section>

            <section className="carousel_section">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* <!-- Indicators --> */}
                <ul className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ul>

                {/* <!-- The slideshow --> */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="http://lorempixel.com/g/400/200"
                      alt="Los Angeles"
                      width="1100"
                      height="200"
                      className="responsive-img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="http://lorempixel.com/400/200/sports"
                      alt="Chicago"
                      width="1100"
                      height="200"
                      className="responsive-img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="http://lorempixel.com/400/200/sports/1"
                      alt="New York"
                      width="1100"
                      height="200"
                      className="responsive-img"
                    />
                  </div>
                </div>

                {/* <!-- Left and right controls --> */}
                <a
                  className="carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>
            </section>
          </div>

          <Row>
            <Col md={8}>
              <Card className="card_style">
                <Row style={{ padding: "1rem" }}>
                  <Col md={6}>
                    <Line
                      data={state}
                      options={{
                        title: {
                          display: true,
                          text: "Users Graph",
                          fontSize: 20,
                        },

                        legend: {
                          display: true,
                          position: "left",
                          labels: {
                            usePointStyle: true,
                            pointStyle: "triangle",
                          },
                        },
                      }}
                    />
                  </Col>

                  <Col md={6}>
                    <Bar
                      data={month}
                      options={{
                        title: {
                          display: true,
                          text: "Users and Posts ",
                          fontSize: 20,
                        },

                        legend: {
                          display: true,
                          position: "right",
                          labels: {
                            usePointStyle: true,
                            pointStyle: "round",
                          },
                        },
                      }}
                    />
                  </Col>
                </Row>

                <Row style={{ padding: "5rem" }}>
                  <Col md={7}>
                  
                    {/* <div style={{backgroundColor:"#3895D3", borderRadius:"150px",padding:"30px"}}> */}
                    {/* <div style={{ marginTop: "1rem", padding: "20px" }}> */}

                    <MapChart setTooltipContent={setContent}  />

                    <ReactTooltip>{content}</ReactTooltip>

                    {/* </div> */}
                  </Col>

                  <Col md={5}>
                    <div style={{ padding: "30px", marginTop: "70px" }}>
                      <Doughnut
                        data={users}
                        options={{
                          title: {
                            display: true,
                            text: "Average Users per month",
                            fontSize: 20,
                          },
                          legend: {
                            display: true,
                            position: "right",
                          },
                        }}
                      />
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col md={4} >
              <Card className="card_style">
                <h5 className="header_section textStyle">Online Users</h5>
                <BorderLine />

                <div className="scroller">
                  {tableData &&
                    tableData.map((ele, index) => (
                      <div className="tableWrapper">
                        {ele.displayPicture === "null" ? (
                          <img
                            src="http://d3nnggev5lpenl.cloudfront.net/Display_picture_large.png"
                            className="image_cover"
                          />
                        ) : (
                          <img
                            src={ele.displayPicture}
                            className="image_cover"
                          />
                        )}
                        <div style={{ marginLeft: "5px" }}>
                          <div style={{ display: "flex", marginLeft: "5px" }}>
                            <p>{ele.firstName}&nbsp;</p>
                            <p>{ele.lastName}</p>
                          </div>
                          <h6
                            style={{
                              color: "lightGray",
                              marginLeft: "5px",
                              marginTop: "-10px",
                            }}
                          >
                            {ele.email}
                          </h6>
                        </div>
                      </div>
                    ))}
                </div>

                <button
                  className="btnStyle"
                  onClick={() =>
                    showOnlineUsers(pageNumberr + 1, pageSizeOnline + 5)
                  }
                >
                  show more{" "}
                </button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <Footer />
    </>
  );
}
