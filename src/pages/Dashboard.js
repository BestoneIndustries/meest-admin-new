import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { postData } from "./apicall/apiCall";
import DashboardComponent from "./DashboardComponent";
import Clock from "../components/clock";

export default function Dashboard() {
  const { dispatch } = useContext(UserContext);

  const history = useHistory();
  const [todayCount, setTodayCount] = useState([]);
  const [totalCount, setTotalCount] = useState("");
  const [staticsData, setStaticsData] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [postsData, setpostsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchData();
    getCountData();
    getAllUsers()
  }, []);
console.log("abcd");
  async function fetchData() {
    const resData = await postData("/dashboard/congrats/admin");
    console.log("fetchData -> resData", resData);
    if (resData) {
      setTodayCount(resData.data);
    }
  }

  async function getCountData() {
    const resData = await postData("/dashboard/getAll/counts");
    console.log("fetchData -> resData", resData);
    if (resData) {
      setTotalCount(resData);
    }
  }
  const getAllUsers = async (pgN, pgS) => {
    setPageNumber(pgN);
    setPageSize(pgS);
    const body = {
      pageSize: pgS,
      pageNumber: pgN,
    };

    async function getStatics() {
      const resData = await postData("/admin/statistic/data", {
        startDate: "2021-04-22",
        endDate: new Date().toISOString().slice(0, 10),
      });
      console.log("User Data => ", resData);
      if (resData) {
        let userArr = [];
        let postArr = [];
        resData.data.userData.forEach((user) => userArr.push(user.count));
        resData.data.postData.forEach((post) => postArr.push(post.count));
        setStaticsData(resData);
        setUsersData([...userArr]);
        setpostsData([...postArr]);
      }
    }
    getStatics()
  }
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Average",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "2021",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Users",
        data: [...usersData],
      },
      {
        name: "Posts",
        data: [...postsData],
      },
    ],
  };

  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-lg-12">
                  <div className="admin-banner-section">
                    <div className="banner-top">
                      <div className="banner-top-section">
                        <img src="app-assets/images/dashboard/pic-left.png" />
                      </div>
                      <div className="banner-top-section">

                        <div className="d-flex justify-content-center">
                          <span>
                            {/* <i className="feather icon-award"></i> */}
                          </span>
                        </div>

                      </div>
                      <div className="banner-top-section">
                        <img src="app-assets/images/dashboard/pic-right.png" />
                      </div>
                    </div>
                    {/* <div className="banner-details admin-banner-section " style={{position:"relative"}}>
                    <img  src="app-assets/images/dashboard/admin-banner2.jpg" />
                    <Clock />
                    <div className="banner-details" style={{position:"absolute",bottom:"0px", width:"100%"}}>
                      <h3 style={{color: "#9c16f7" }} >Congratulations Admin</h3>
                      <p style={{color: "#9c16f7"}}>
                        You have got <b>{todayCount.data}</b> users in this
                        month
                      </p>
                    
                    </div>
                  </div> */}

                    {/* <div id="clock-wrap"
                      onload="startClock()" >
                      <div id="dayOfWeek"></div>
                      <div id="date"></div>
                      <div id="digital"></div>
                      <div id="circle"></div>
                      <div id="hourHand"></div>
                      <div id="minuteHand"></div>
                      <div id="secondHand"></div>
                      <div class="numbers-12"></div>
                      <div class="numbers-3"></div>
                      <div class="numbers-6"></div>
                      <div class="numbers-9"></div>
                    </div> */}
                    <Clock />
                    <div className="banner-details">

                      <h3>Congratulations Admin</h3>
                      <p>

                        You have got   <Link
                          to={{
                            pathname: "/dashboard-user",
                            // state: { id: item.id },
                          }}
                          className="user-name" style={{ color: "white" }}
                        ><b style={{ color: "hotPink" }}>{todayCount.count} users</b> </Link>  in this
                        month

                      </p>
                    </div>
                  </div>
                </div>

                <DashboardComponent
                  link="/Manage-Users"
                  icon="feather icon-users text-primary font-medium-5"
                  count={totalCount ? totalCount.data.totalUsers : 0}
                  title="Total Users"
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
                  link="/Groups"
                  icon="feather icon-package text-warning font-medium-5"
                  count={totalCount ? totalCount.data.totalGroups : 0}
                  title="Total Groups "
                /> */}

                <DashboardComponent
                  link="/Online-Users"
                  icon="feather icon-users text-warning font-medium-5"
                  count={totalCount ? totalCount.data.totalOnlineUsers : 0}
                  title="Online Users "
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
                  link="/Manage-ReportPost"
                  icon="feather icon-users  text-warning font-medium-5"
                  count={totalCount ? totalCount.data.totalReportsCount : 0}
                  title="Reports "
                />

                <div className="col-md-12 col-12">
                  <div className="card">
                    <div className="chart-header">
                      <div className="row justify-content-between">
                        <div className="col-md-6">
                          <h3>Statistics</h3>
                        </div>
                        {/* <div className="col-md-3">
                          <form>
                            <select
                              className="form-control"
                              onChange={(e) => {
                                getAllUsers(7, parseInt(e.target.value));
                              }}>
                              <option value='7 Days'>Last 7 Days</option>
                              <option value='1 Month'>Last 1 Month</option>
                              <option value='6 Months'>Last 6 Months</option>
                              <option value='1 year'>Last 1 year</option>
                            </select>
                          </form>
                        </div> */}
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <figure className="highcharts-figure">
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--<div className="col-md-6 col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between pb-0">
                                    <h4 className="card-title">Support Tracker</h4>
                                    <div className="dropdown chart-dropdown">
                                        <button className="btn btn-sm border-0 dropdown-toggle p-0" type="button" id="dropdownItem4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Last 7 Days
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownItem4">
                                            <a className="dropdown-item" href="#">Last 28 Days</a>
                                            <a className="dropdown-item" href="#">Last Month</a>
                                            <a className="dropdown-item" href="#">Last Year</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body pt-0">
                                        <div className="row">
                                            <div className="col-sm-2 col-12 d-flex flex-column flex-wrap text-center">
                                                <h1 className="font-large-2 text-bold-700 mt-2 mb-0">163</h1>
                                                <small>Tickets</small>
                                            </div>
                                            <div className="col-sm-10 col-12 d-flex justify-content-center">
                                                <div id="support-tracker-chart"></div>
                                            </div>
                                        </div>
                                        <div className="chart-info d-flex justify-content-between">
                                            <div className="text-center">
                                                <p className="mb-50">New Tickets</p>
                                                <span className="font-large-1">29</span>
                                            </div>
                                            <div className="text-center">
                                                <p className="mb-50">Open Tickets</p>
                                                <span className="font-large-1">63</span>
                                            </div>
                                            <div className="text-center">
                                                <p className="mb-50">Response Time</p>
                                                <span className="font-large-1">1d</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>--> */}
                {/* </div>*/}

                {/* <!--				  <div className="row match-height">
                        <div className="col-lg-4 col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between pb-0">
                                    <h4>Product Orders</h4>
                                    <div className="dropdown chart-dropdown">
                                        <button className="btn btn-sm border-0 dropdown-toggle p-0" type="button" id="dropdownItem2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Last 7 Days
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownItem2">
                                            <a className="dropdown-item" href="#">Last 28 Days</a>
                                            <a className="dropdown-item" href="#">Last Month</a>
                                            <a className="dropdown-item" href="#">Last Year</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <div id="product-order-chart" className="mb-3"></div>
                                        <div className="chart-info d-flex justify-content-between mb-1">
                                            <div className="series-info d-flex align-items-center">
                                                <i className="fa fa-circle-o text-bold-700 text-primary"></i>
                                                <span className="text-bold-600 ml-50">Finished</span>
                                            </div>
                                            <div className="product-result">
                                                <span>23043</span>
                                            </div>
                                        </div>
                                        <div className="chart-info d-flex justify-content-between mb-1">
                                            <div className="series-info d-flex align-items-center">
                                                <i className="fa fa-circle-o text-bold-700 text-warning"></i>
                                                <span className="text-bold-600 ml-50">Pending</span>
                                            </div>
                                            <div className="product-result">
                                                <span>14658</span>
                                            </div>
                                        </div>
                                        <div className="chart-info d-flex justify-content-between mb-75">
                                            <div className="series-info d-flex align-items-center">
                                                <i className="fa fa-circle-o text-bold-700 text-danger"></i>
                                                <span className="text-bold-600 ml-50">Rejected</span>
                                            </div>
                                            <div className="product-result">
                                                <span>4758</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-start">
                                    <div>
                                        <h4 className="card-title">Sales Stats</h4>
                                        <p className="text-muted mt-25 mb-0">Last 6 months</p>
                                    </div>
                                    <p className="mb-0"><i className="feather icon-more-vertical font-medium-3 text-muted cursor-pointer"></i></p>
                                </div>
                                <div className="card-content">
                                    <div className="card-body px-0">
                                        <div id="sales-chart"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Activity Timeline</h4>
                                </div>
                                <div className="card-content">
                                    <div className="card-body">
                                        <ul className="activity-timeline timeline-left list-unstyled">
                                            <li>
                                                <div className="timeline-icon bg-primary">
                                                    <i className="feather icon-plus font-medium-2 align-middle"></i>
                                                </div>
                                                <div className="timeline-info">
                                                    <p className="font-weight-bold mb-0">Client Meeting</p>
                                                    <span className="font-small-3">Bonbon macaroon jelly beans gummi bears jelly lollipop apple</span>
                                                </div>
                                                <small className="text-muted">25 mins ago</small>
                                            </li>
                                            <li>
                                                <div className="timeline-icon bg-warning">
                                                    <i className="feather icon-alert-circle font-medium-2 align-middle"></i>
                                                </div>
                                                <div className="timeline-info">
                                                    <p className="font-weight-bold mb-0">Email Newsletter</p>
                                                    <span className="font-small-3">Cupcake gummi bears soufflé caramels candy</span>
                                                </div>
                                                <small className="text-muted">15 days ago</small>
                                            </li>
                                            <li>
                                                <div className="timeline-icon bg-danger">
                                                    <i className="feather icon-check font-medium-2 align-middle"></i>
                                                </div>
                                                <div className="timeline-info">
                                                    <p className="font-weight-bold mb-0">Plan Webinar</p>
                                                    <span className="font-small-3">Candy ice cream cake. Halvah gummi bears</span>
                                                </div>
                                                <small className="text-muted">20 days ago</small>
                                            </li>
                                            <li>
                                                <div className="timeline-icon bg-success">
                                                    <i className="feather icon-check font-medium-2 align-middle"></i>
                                                </div>
                                                <div className="timeline-info">
                                                    <p className="font-weight-bold mb-0">Launch Website</p>
                                                    <span className="font-small-3">Candy ice cream cake. </span>
                                                </div>
                                                <small className="text-muted">25 days ago</small>
                                            </li>
                                            <li>
                                                <div className="timeline-icon bg-primary">
                                                    <i className="feather icon-check font-medium-2 align-middle"></i>
                                                </div>
                                                <div className="timeline-info">
                                                    <p className="font-weight-bold mb-0">Marketing</p>
                                                    <span className="font-small-3">Candy ice cream. Halvah bears Cupcake gummi bears.</span>
                                                </div>
                                                <small className="text-muted">28 days ago</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>-->
                  <!--  <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="mb-0">Dispatched Orders</h4>
                                </div>
                                <div className="card-content">
                                    <div className="table-responsive mt-1">
                                        <table className="table table-hover-animation mb-0">
                                            <thead>
                                                <tr>
                                                    <th>ORDER</th>
                                                    <th>STATUS</th>
                                                    <th>OPERATORS</th>
                                                    <th>LOCATION</th>
                                                    <th>DISTANCE</th>
                                                    <th>START DATE</th>
                                                    <th>EST DEL. DT</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#879985</td>
                                                    <td><i className="fa fa-circle font-small-3 text-success mr-50"></i>Moving</td>
                                                    <td className="p-1">
                                                        <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Vinnie Mostowy" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-5.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Elicia Rieske" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-7.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Julee Rossignol" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-10.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Darcey Nooner" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-8.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>Anniston, Alabama</td>
                                                    <td>
                                                        <span>130 km</span>
                                                        <div className="progress progress-bar-success mb-0">
                                                            <div className="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>14:58 26/07/2018</td>
                                                    <td>28/07/2018</td>
                                                </tr>
                                                <tr>
                                                    <td>#156897</td>
                                                    <td><i className="fa fa-circle font-small-3 text-warning mr-50"></i>Pending</td>
                                                    <td className="p-1">
                                                        <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Trina Lynes" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Lilian Nenez" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-2.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Alberto Glotzbach" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-3.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>Cordova, Alaska</td>
                                                    <td>
                                                        <span>234 km</span>
                                                        <div className="progress progress-bar-warning mt-1 mb-0">
                                                            <div className="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>14:58 26/07/2018</td>
                                                    <td>28/07/2018</td>
                                                </tr>
                                                <tr>
                                                    <td>#568975</td>
                                                    <td><i className="fa fa-circle font-small-3 text-success mr-50"></i>Moving</td>
                                                    <td className="p-1">
                                                        <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Lai Lewandowski" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-6.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Elicia Rieske" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-7.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Darcey Nooner" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-8.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Julee Rossignol" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-10.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Jeffrey Gerondale" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-9.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>Florence, Alabama</td>
                                                    <td>
                                                        <span>168 km</span>
                                                        <div className="progress progress-bar-success mt-1 mb-0">
                                                            <div className="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>14:58 26/07/2018</td>
                                                    <td>28/07/2018</td>
                                                </tr>
                                                <tr>
                                                    <td>#245689</td>
                                                    <td><i className="fa fa-circle font-small-3 text-danger mr-50"></i>Canceled</td>
                                                    <td className="p-1">
                                                        <ul className="list-unstyled users-list m-0  d-flex align-items-center">
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Vinnie Mostowy" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-5.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-placement="bottom" data-original-title="Elicia Rieske" className="avatar pull-up">
                                                                <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-7.jpg" alt="Avatar" height="30" width="30">
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td>Clifton, Arizona</td>
                                                    <td>
                                                        <span>125 km</span>
                                                        <div className="progress progress-bar-danger mt-1 mb-0">
                                                            <div className="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td>14:58 26/07/2018</td>
                                                    <td>28/07/2018</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>*/}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />
    </>
  );
}