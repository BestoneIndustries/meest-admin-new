import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as $ from 'jquery';
// import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';

export default function ManageCustomPages() {
  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [aboutPrivacyData, setAboutPrivacyData] = useState();

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
    fetchData();
  }, []);

  async function fetchData() {
    const resData = await postData('/aboutPrivacy/getAll',{type:"About"});
    console.log("fetchData -> resData", resData.data)
    if (resData) {
      setAboutPrivacyData(resData.data);
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
                    <li className="breadcrumb-item active">Custom Pages</li>
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
                      <div className="col-12">
                        <h4 className="card-title">Custom Pages</h4>
                             <Link
                                to="/Add-New-Custom"
                                className="float-right btn btn-primary waves-effect waves-light"
                              >
                                Add CUSTOM PAGES
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
                                      <th>Page Title</th>
                                      <th>Page Description</th>
                                      <th>Edit Content</th>
                                    </tr>
                                  </thead>
                                  <tbody >
                                    {aboutPrivacyData && aboutPrivacyData.length > 0 && aboutPrivacyData.map((ele, i) => {
                                      return <tr key={i}>
                                        
                                        <td style={{verticalAlign: "top"}}>{i + 1}</td>
                                        <td style={{verticalAlign: "top"}}>{ele.type}</td>
                                        <td dangerouslySetInnerHTML={{ __html: ele.text }}></td>
                                        <td style={{verticalAlign: "top"}}>
                                          <Link
                                            to={{
                                              pathname: "/Edit-Custom-Pages",
                                              state: { 
                                                id: ele.id ,
                                                type: ele.type ,
                                              }
                                            }}
                                            className="btn btn-icon"
                                          >
                                            <i className="feather icon-edit"></i>
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


