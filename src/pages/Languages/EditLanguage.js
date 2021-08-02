import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData, postDataAll } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function EditLanguage() {
  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [key, addKey] = useState();
  const [pageName, addPage] = useState();

  const [editID, addEditID] = useState({});

  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState("");


  const onChangeSearch = (e) => setSearch(e.target.value);


  const handleKeyChange = (e) => addKey(e.target.value);
  const handlePageCHange = (e) => addPage(e.target.value);

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
    getKyes();
  }, []);

  async function getKyes() {
    const { code, data } = await postData('/languagePack/getByLanguageId', { languageId: history.location.state.id });
    if (code) {
      setResponse(data);
    }
  }

  async function onSearch() {
    const { code, data } = await postData('/languagePack/search/getByLanguageId', { languageId: history.location.state.id, searchText: search });
    if (code) {
      setResponse(data);
    }
  }


  async function onUpdate(formValue) {
    var data = {
      key: key ? key : formValue.key,
      TranslatedText: pageName ? pageName : formValue.TranslatedText,
      languageId: history.location.state.id,
      id: formValue.id
    }
    const { code, errorMessage } = await postData('/languagePack/update', data);
    if (code) {
      addKey("");
      addPage("");
      success("Updated succesfully")
    } else {
      error(errorMessage)
    }
  }


  const success = (msg) => toast(msg);
  const error = (msg) => toast.error(msg);

  return (
    <>
      <ToastContainer />

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
                      <Link to="/">Languages</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {" "}
                      Manage Languages
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h3 className="card-title">
                          Manage &amp; Edit Languages
                        </h3>
                      </div>
                    </div>
                    <div className="card-content mt-2">
                      <div className="col-12">
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
                                    placeholder="Search"
                                    name="query"
                                    id="query"
                                    onChange={onChangeSearch}
                                    className="form-control full-wdth float-left"
                                  />
                                </div>
                                <div className="col-5 col-md-3 pr-0">
                                  <button className="btn btn-primary float-left waves-effect waves-light" onClick={() => onSearch()}>
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
                                <div
                                  id="myDropdown"
                                  className="dropdown-content"
                                >
                                  <a href="#">Delete</a>
                                  <a href="#">Download</a>
                                  <a href="#">Export as CSV</a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="table-responsive">
                            <table className="table table-hover table-bordered mb-0" id="table" role="grid" data-toggle="table" data-pagination="true" data-resizable="true" data-click-to-select="true" >
                              <thead className="thead-light">
                                <tr>
                                  <th data-field="state" data-checkbox="true"></th>
                                  <th data-field="id">ID</th>
                                  <th data-field="keyname" data-editable="true">Key Name</th>
                                  <th data-field="value" data-editable="true">Value</th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {response && response.map((ele, index) => {
                                  return <tr className="key-language">
                                    <td></td>
                                    <td>{index + 1}</td>
                                    <td>
                                      <div className="cate-input">
                                        <input type="text" name="key" onChange={handleKeyChange} className="form-control" defaultValue={ele.key} placeholder="Login" disabled={ele.id == editID ? false : true} />
                                      </div>
                                    </td>
                                    <td>
                                      <div className="cate-input">
                                        <input type="text" name="TranslatedText" onChange={handlePageCHange} className="form-control" defaultValue={ele.TranslatedText} placeholder="Login" disabled={ele.id == editID ? false : true} />
                                      </div>
                                    </td>
                                    <td>
                                      <button type="btn" className="btn btn-primary edit-butn" onClick={() => addEditID(ele.id)}>Edit</button>
                                      <button type="btn" className="btn btn-info right-btn" onClick={() => onUpdate(ele)}>Update</button>
                                    </td>
                                  </tr>
                                })}
                              </tbody>
                            </table>
                            <br />
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
