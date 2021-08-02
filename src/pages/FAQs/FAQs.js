import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData } from "../apicall/apiCall";
import readXlsxFile from "read-excel-file";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as $ from "jquery";
// import * as Yup from "yup";
import NotificationSystem from "react-notification-system";

export default function FAQs() {
  var notificationSystem = React.createRef();
  //const { dispatch } = useContext(UserContext);
  //const history = useHistory();
  const [faqData, setFAQData] = useState();
  const [deleteId, setDeleteData] = useState("");
  const [catfaqList, setFaqList] = useState([]);
  const [category, setCategory] = useState("");
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
    }
    const resData = await postData('/faq/admin/getAll', body);
    console.log("fetchData -> resData", resData.data)
    if (resData) {
      setFAQData(resData.data);
    }
  }

  async function onDeleteFAQ() {
    if (deleteId) {
      const resData = await postData("/faq/deleteFAQ", { id: deleteId });
      console.log("fetchData -> resData", resData);
      if (resData && resData.code) {
        success("Successfully deleted");
        fetchData();
      } else {
        error(resData.errorMessage);
      }
    } else {
      error("FAQ ID not set");
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
    const { code } = await postData("/faq/update", {
      faqId: id,
      status: !status,
    });
    if (code === 1) {
      success("Status successfully changed");
      fetchData(pageNumber,pageSize);
    }
  }
  function isNumeric(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  function setFile(file) {
    const faqList = [];
    var catgList = null;
    readXlsxFile(file).then((rows) => {
      rows.map((row, index) => {
        if (isNumeric(row[0])) {
          //console.log((row[1]));
          catgList.data.push({
            q: row[1],
            a: row[2],
          });
        } else {
          catgList = {
            title: row[1],
            data: [],
          };
          faqList.push(catgList);
        }
      });
      setFaqList(faqList);
    });
  }
  function SaveDataBulk(faqList) {
    var catcount = 0;
    var qstncount = 0;
    faqList.map(async (cat, index) => {
      var catid = category.find((x) => x.catagoryName === cat.title);
      if (catid) {
        console.log("found cat ", catid);
      } else {
        const values = {};
        values["catagoryName"] = cat.title;
        values["status"] = true;
        console.log("Saving Cata", values);
        const { code, data } = await postData("/faq/catagory/add", values);
        console.log("Add FAQ Category -> data", data);
        if (code == 1) {
          catid = data;
        } else {
        }
      }
      if (catid) {
        catcount += 1;
        cat.data.map(async (faq, index) => {
          qstncount += 1;
          const values = {};
          values["catagoryId"] = catid.id;
          values["description"] = faq.a;
          values["question"] = faq.q;
          values["status"] = true;
          console.log("Saving Faq: ", values);
          const { data } = await postData("/faq/add", values);
          if (data) {
            console.log("AddFAQ -> data", data);
          } else {
          }
        });
      }
    });
    alert("Loaded \nCategories: " + catcount + "\nQuestions: " + qstncount);
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
                    <li className="breadcrumb-item active">FAQs</li>
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
                        <h4 className="card-title">FAQs</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div
                          id="DataTables_Table_0_wrapper"
                          className="dataTables_wrapper dt-bootstrap4"
                        >
                          <div className="row" >
                            <div className="col-12 ">
                              <label className="float-right btn btn-primary waves-effect waves-light" style = {{"marginTop" : "32px"}}>
                                <div >Select File</div>
                                <input
                                  data-toggle="modal"
                                  data-target="#BulkLoad"
                                  accept=".xls,.xlsx"
                                  style={{ display: "none" }}
                                  type="file"
                                  onChange={(event) =>
                                    setFile(event.target.files[0])
                                  }
                                />
                              </label>
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
                              <Link
                                to="/Add-FAQ"
                                className="float-right btn btn-primary waves-effect waves-light" style = {{"marginRight" : "10px"}}
                              >
                                Add FAQs
                              </Link>
                            </div>
                          </div>

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
                                      <th>Category</th>
                                      <th>Question</th>
                                      <th>Answer</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {faqData &&
                                      faqData.rows.length > 0 &&
                                      faqData.rows.map((ele, i) => {
                                        return (
                                          <tr key={i}>
                                          <td>{(i + 1 + (pageSize * (pageNumber - 1)))}</td>
                                            <td>
                                              {ele.faqCatagory.catagoryName}
                                            </td>
                                            <td>{ele.question}</td>
                                            <td
                                              dangerouslySetInnerHTML={{
                                                __html: ele.description,
                                              }}
                                            ></td>
                                            <td>
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
                                                  pathname: "/Edit-FAQ",
                                                  state: { id: ele.id },
                                                }}
                                                className="btn btn-icon"
                                              >
                                                <i className="feather icon-edit"></i>
                                              </Link>
                                              &nbsp;&nbsp;
                                              <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#default1"
                                                className="btn btn-icon"
                                                onClick={() =>
                                                  setDeleteData(ele.id)
                                                }
                                              >
                                                <i className="feather icon-trash"></i>
                                              </a>
                                            </td>
                                          </tr>
                                        );
                                      })}
                                  </tbody>

                                </table>

                                <div style={{width:"100%"}}>
                                {
                                    pageNumber > 1 ?
                                      (
                                        <a onClick={(e) => { fetchData(pageNumber - 1, pageSize) }} href={pageNumber > 1 && ("#")}>{"  "}&lt;&lt;</a>
                                      ) : (
                                        <a></a>
                                      )
                                  }
                                  <span>  Showing Page {pageNumber}  </span>
                                  {
                                    faqData && faqData.rows.length >= pageSize ?
                                      (
                                        <a onClick={(e) => { fetchData(pageNumber + 1, pageSize) }} href={pageNumber > 1 && ("#")}>{"  "}&gt;&gt;</a>
                                      ) : (
                                        <a></a>
                                      )
                                  }
                                {/* <div style={{ width: "100%" }}>
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
                                  {faqData &&
                                  faqData.rows.length >= pageSize ? (
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
                                  )} */}

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
        className="modal fade"
        id="BulkLoad"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        style={{ paddingRight: "17px", display: "none" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle"></h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {catfaqList &&
                catfaqList.map((cat, index) => {
                  return (
                    <div class="card btn-primary" style={{ padding: "3px" }}>
                      <a
                        class="btn btn-primary"
                        data-toggle="collapse"
                        href={"#collapseExample" + index}
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        {cat.title}
                        {" Q:"}
                        {cat.data.length}
                      </a>
                      <div class="collapse" id={"collapseExample" + index}>
                        {cat.data.map((faq, ind) => {
                          return (
                            <div
                              class="card btn-warning"
                              style={{ padding: "3px" }}
                            >
                              <a
                                class="btn btn-warning"
                                data-toggle="collapse"
                                href={"#collapsefaq" + index + "faq" + ind}
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseExample"
                              >
                                {ind + 1 + ": "}
                                {faq.q}
                              </a>
                              <div
                                class="collapse "
                                id={"collapsefaq" + index + "faq" + ind}
                              >
                                <hr />
                                <sapn>Answer :- </sapn>
                                <p>{faq.a}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={() => SaveDataBulk()}
                className="float-right btn btn-primary waves-effect waves-light"
              >
                Load Data
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
            <div className="modal-body">
              Are you sure you want to delete this FAQ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={() => onDeleteFAQ()}
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
