import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData } from '../apicall/apiCall';

//import { useHistory } from "react-router-dom";
//import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as $ from 'jquery';
// import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';

export default function ManageActivities() {
  var notificationSystem = React.createRef();
  //const { dispatch } = useContext(UserContext);
  //const history = useHistory();
  const [activityData, setAactivityData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const resData = await postData('/post/activity/getAll');
    console.log("fetchData -> resData", resData.data.rows)
    if (resData) {
        setAactivityData(resData.data.rows);
    }
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
                    <li className="breadcrumb-item active">Activities </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <NotificationSystem ref={notificationSystem} />
          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-6">
                        <h4 className="card-title">Activities</h4>
                      </div>
                      <div className="col-6">
                        <Link
                          to="/Add-Activity"
                          className="float-right btn btn-primary waves-effect waves-light"
                        >
                          Add Activity
                        </Link>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div
                          id="DataTables_Table_0_wrapper"
                          className="dataTables_wrapper dt-bootstrap4"
                        >

                          <div className="row">
                            <div className="col-sm-12">
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
                                      <th>ID</th>
                                      <th>Image</th>
                                      <th>Title</th>
                                      <th>Description</th>
                                      <th>Edit</th>
                                    </tr>
                                  </thead>
                                  <tbody >
                                    {activityData && activityData.length > 0 && activityData.map((ele, i) => {
                                      return <tr key={i}>
                                        <td style={{verticalAlign: "top"}}>{i + 1}</td>
                                        <td >
                                          <img
                                            className="setting-avatar"
                                            src={ele.icon}
                                          />
                                        </td>
                                        <td >{ele.title}</td>
                                        <td >{ele.description}</td>
                                        <td>
                                          <Link
                                            to={{
                                              pathname: "/Edit-Activity",
                                              state: { id: ele.id }
                                            }}
                                            className="btn btn-icon"
                                          >
                                            <i className="feather icon-edit"></i>
                                          </Link>
                                          <Link
                                            to={{
                                              pathname: "/Manage-SubActivities",
                                              state: { id: ele.id }
                                            }}
                                            className="flot-right btn btn-primary waves-effect waves-light"
                                          >
                                           <i className="fa fa-search"></i>View
                                          </Link>
                                        </td>
                                      </tr>
                                    })}
                                  </tbody>
                                </table>
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
    </>
  );
}


