import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData } from "../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as $ from "jquery";
// import * as Yup from "yup";
import NotificationSystem from "react-notification-system";

export default function FAQCategory() {
  var notificationSystem = React.createRef();
  //const { dispatch } = useContext(UserContext);
 // const history = useHistory();
  const [faqCategoryData, setFAQCategoryData] = useState();
  const [deleteId, setDeleteData] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

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
    fetchData(pageNumber, pageSize);
  }, []);

  async function fetchData(pgNum, pgSize) {
    setPageSize(pgSize);
    setPageNumber(pgNum);
    var body = {
      pageNumber: pgNum,
      pageSize: pgSize,
    };
    const resData = await postData("/faq/catagory/getAllCategory", body);
    console.log("fetchData -> resData", resData.data);
    if (resData) {
      setFAQCategoryData(resData.data);
    }
  }

  async function onDeleteFAQCategory() {
    if (deleteId) {
      const resData = await postData("/faq/deleteFAQ", { id: deleteId });
      console.log("fetchData -> resData", resData);
      if (resData && resData.code) {
        success("Successfully deleted");
        fetchData(pageNumber, pageSize);
      } else {
        error(resData.errorMessage);
      }
    } else {
      error("FAQ Category ID not set");
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

  async function onchangeStatus(id, status) {
    const { code } = await postData("/faq/catagory/update", {
       id: id,
      status: !status,
    });
    if (code == 1) {
      success("Status successfully changed");
      fetchData(pageNumber, pageSize);
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
                    <li className="breadcrumb-item active">FAQ Category</li>
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
                        <h4 className="card-title">FAQ Category</h4>
                        <Link
                          to="/Add-FAQCategory"
                          className="float-right btn btn-primary shadow waves-effect waves-light"
                        >
                          Add Category
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
                                      fetchData(1, parseInt(e.target.value));
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
                                      <th>Category</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {faqCategoryData &&
                                      faqCategoryData.rows.length > 0 &&
                                      faqCategoryData.rows.map((ele, i) => {
                                        return (
                                          <tr key={i}>
                                            <td>
                                              {i +
                                                1 +
                                                pageSize * (pageNumber - 1)}
                                            </td>
                                            <td>{ele.catagoryName}</td>
                                            <td>
                                              {/* <label className="switch offer">
                                                <input
                                                  type="checkbox"
                                                  checked={ele.status}
                                                  disabled="true"
                                                />
                                                <span className="slider round"></span>
                                              </label> */}
                                              <label className="switch offer">
                                                <input
                                                  type="checkbox"
                                                  checked={ele.status}
                                                  onChange={() =>
                                                    onchangeStatus(
                                                      ele.id,
                                                      ele.status
                                                    )
                                                  }
                                                />
                                                <span className="slider round"></span>
                                              </label>
                                            </td>
                                            <td>
                                              <Link
                                                to={{
                                                  pathname: "/Edit-FAQCategory",
                                                  state: { id: ele.id },
                                                }}
                                                className="btn btn-icon"
                                              >
                                                <i className="feather icon-edit"></i>
                                              </Link>
                                              {/* &nbsp;&nbsp;
                                          <a
                                            href="#"
                                            data-toggle="modal"
                                            data-target="#default1"
                                            className="btn btn-icon"
                                            onClick={() => setDeleteData(ele.id)}
                                          >
                                            <i className="feather icon-trash"></i>
                                          </a> */}
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
                                        fetchData(pageNumber - 1, pageSize);
                                      }}
                                      href={pageNumber > 1 && "#"}
                                    >
                                      {"  "}&lt;&lt;
                                    </a>
                                  ) : (
                                    <a></a>
                                  )}
                                  <span> Showing Page {pageNumber} </span>
                                  {faqCategoryData &&
                                  faqCategoryData.rows.length >= pageSize ? (
                                    <a
                                      onClick={(e) => {
                                        fetchData(pageNumber + 1, pageSize);
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
              Are you sure you want to delete this FAQ Category?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={() => onDeleteFAQCategory()}
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
