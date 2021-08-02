import $ from "jquery";
import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { postData, postDataAll } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

//import AddNewLanguage from './AddNewLanguage';

export default function ManageLanguages() {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [response, setState] = useState([]);
  const [selectedId, setDeletedId] = useState("");

  useEffect(() => {
    $(document).ready(function () {
      $(".disable-enable-btn").click(function () {
        $(this)
          .parents(".language-btn")
          .find(".disable-enable-btn")
          .toggleClass("active");
      });
    });
    console.log("onEdit -> history", history)
    getAllData();
  }, []);


  async function getAllData() {
    const { code, data } = await postDataAll('/pub/admin/languages');
    if (code) {
      setState(data.rows);
    }    
  }
  console.log(response);
  async function onDelete() {
    const { code } = await postData("/pub/admin/deleteLang", { id: selectedId });
    if (code) {
      getAllData();
    }
  }

  async function onDisableEnable(id, type) {
    const { code } = await postData("/pub/admin/updateLang", { id: id, status: type == 'e' ? true : false });
    if (code) {
      getAllData();
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
                      <Link to="/">Languages</Link>
                    </li>
                    <li className="breadcrumb-item active"> Manage Languages</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dashboard-analytics">
              {/* <AddNewLanguage/> */}
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage & Edit Languages</h4>
                      </div></div>
                    <div className="card-content">
                      <div className="card-body">
                        <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4">
                          <div className="table-responsive">
                            <table className="table table-hover table-striped table-bordered mb-0">
                              <thead> 
                                <tr>
                                  <th>Icon</th>
                                  <th scope="row">Language Name</th>
                                  <th>Progress</th>
                                  <th>Done</th>
                                  <th>Total</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {response && response.map(ele => {
                                  return <tr>
                                    <td>

                                      <div className="language-icon">

                                        <img src= {ele.image ? ele.image :  "https://static.thenounproject.com/png/778835-200.png"} alt="language-icon" width="40px" />

                                      </div>
                                    </td>
                                    <td scope="row">{ele.languageNameEnglish}</td>
                                    <td>
                                      <div className="progress" style={{ height: '26px' }}>
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${isNaN((ele.totalCount * 100) / ele.balancedCount) ? 0 : parseInt((ele.totalCount * 100) / ele.balancedCount)}%` }}
                                          aria-valuenow={isNaN((ele.totalCount * 100) / ele.balancedCount) ? 0 : parseInt((ele.totalCount * 100) / ele.balancedCount)} aria-valuemin="0" aria-valuemax="100">{isNaN((ele.totalCount * 100) / ele.balancedCount) ? 0 : parseInt((ele.totalCount * 100) / ele.balancedCount)}%</div>
                                      </div>
                                    </td>
                                    <td>{ele.balancedCount}</td>
                                    <td>{ele.totalCount}</td>
                                    <td>
                                      <div className="language-btn d-flex" ><button type="btn" data-toggle="tooltip" data-placement="top" title="Edit" className="btn btn-icon"
                                        onClick={(e) => history.push({ pathname: '/edit-language', state: { id: ele.id } })}
                                      >  <i className="feather icon-edit"></i></button>&nbsp;&nbsp;&nbsp;
                                        <button type="btn" className="btn btn-icon" data-toggle="tooltip" data-placement="top" title="Delete" data-toggle="modal" data-target="#default1"
                                          onClick={() => setDeletedId(ele.id)}
                                        >
                                          <i className="feather icon-trash"></i></button>&nbsp;&nbsp;&nbsp;
                                     -   <div className="disable-enable-btn">
                                          {!ele.status && <span className=" btn btn-icon" data-toggle="tooltip"
                                            data-placement="top" title="Disable" type="button" id="type-info" onClick={() => onDisableEnable(ele.id, 'e')}> <i className="feather icon-eye-off"></i></span>}
                                          {ele.status && <span className=" btn btn-icon" data-toggle="tooltip" data-placement="top" title="Enable" type="button"
                                            id="type-success" onClick={() => onDisableEnable(ele.id, 'd')}> <i className="feather icon-eye"></i></span>}</div></div></td>
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
            {/* <!--<div className="modal-header">
                <h4 className="modal-title" id="myModalLabel18">Default Modal</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
                </div>--> */}
            <div className="modal-body">Are you sure you want to delete this?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={() => onDelete()}
              >
                Ok
              </button>
              <button
                className="delete-field pointer black"
                onclick="Wo_DeleteLang('spanish');"
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
