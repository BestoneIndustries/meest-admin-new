import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { Link } from "react-router-dom";

import Footer from "../../components/Footer";

export default function ManagePayments() {
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Monthly Average",
    },
    // subtitle: {
    //    text: 'Source: WorldClimate.com'
    // },
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
        text: "2020",
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
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
        ],
      },
      {
        name: "Pages",
        data: [
          83.6,
          78.8,
          98.5,
          93.4,
          106.0,
          84.5,
          105.0,
          104.3,
          91.2,
          83.5,
          106.6,
          92.3,
        ],
      },
      {
        name: "Groups",
        data: [
          48.9,
          38.8,
          39.3,
          41.4,
          47.0,
          48.3,
          59.0,
          59.6,
          52.4,
          65.2,
          59.3,
          51.2,
        ],
      },
      {
        name: "Posts",
        data: [
          42.4,
          33.2,
          34.5,
          39.7,
          52.6,
          75.5,
          57.4,
          60.4,
          47.6,
          39.1,
          46.8,
          51.1,
        ],
      },
    ],
  };

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
                      <Link to="/">User</Link>
                    </li>
                    <li className="breadcrumb-item active">Manage Users</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-dollar-sign font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">0</h2>
                        <p className="mb-1">Total Earnings</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-dollar-sign font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">0</h2>
                        <p className="mb-1">Earnings This Month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-star text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">0</h2>
                        <p className="mb-1">Star Sales</p>
                      </div>
                    </div>
                    {/* <!--  <div className="card-content">
                           <div id="subscribe-gain-chart"></div>
                           </div>-->	 */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-zap text-warning font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">0</h2>
                        <p className="mb-1">Hot Sales</p>
                      </div>
                    </div>
                    {/* <!--<div className="card-content">
                           <div id="subscribe-gain-chart"></div>
                           </div>--> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-zap text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">0</h2>
                        <p className="mb-1">Ultimate Sales</p>
                      </div>
                    </div>
                    {/* <!--<div className="card-content">
                           <div id="subscribe-gain-chart"></div>
                           </div>--> */}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-navigation text-warning font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">0</h2>
                        <p className="mb-1">VIP Sales</p>
                      </div>
                    </div>
                    {/* <!--<div className="card-content">
                           <div id="orders-received-chart"></div>
                           </div>--> */}
                  </div>
                </div>
              </div>
            </section>

            <section id="apexchart">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header px-2">
                      <h4 className="card-title">Static</h4>
                    </div>
                    <div className="card-body">
                      <figure className="highcharts-figure">
                        {/* <div id="container"></div> */}
                        <HighchartsReact
                          highcharts={Highcharts}
                          options={options}
                        />
                      </figure>
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
    </>
  );
}
