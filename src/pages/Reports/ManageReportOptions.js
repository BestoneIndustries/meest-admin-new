import React, { useEffect ,useState } from "react";
import Footer from "../../components/Footer";
import { postData } from '../apicall/apiCall';
import NotificationSystem from 'react-notification-system';

import { Link } from "react-router-dom";

export default function ManageReport() {

  var notificationSystem = React.createRef();
  const [reportOptions, setReportOptions] = useState();
  const [reportType, setReportType] = useState("Post");

  const success = (msg) => {
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'success'
    });
  };

  const error = (msg) => {
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'error'
    });
  };
  async function fetchData(type){
    setReportType(type)
    const body={ reportType:type,}
    const resData = await postData('/report/getReportOptionsByType',body);
    if(resData && resData.code===1){
      setReportOptions(resData.data);
    }
    console.log("fetchData -> resData", resData)
  }
  async function onchangeStatus(id,stat){
    const body = {
      id: id,
      status:!stat,
    }
    const resData = await postData('/report/updateReportOption',body);
    if(resData && resData.code===1){
      success("Status Update SuccessFully")
      fetchData(reportType)
    }
    else{
      error("Status Update Failed")
    }
  }
  useEffect(() => {
    fetchData("post");
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
                     <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage Abuse Reports
                    </li>
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
                        <h4 className="card-title">Manage Abuse Reports</h4>  
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div
                          id="DataTables_Table_0_wrapper"
                          className="dataTables_wrapper dt-bootstrap4"
                        >
                          <div  className="row mb-2">
                            {/* <div className="col-4 col-sm-4 col-md-3">
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
                            </div> */}
                            <div className="col-6 col-sm-6 col-md-6 mtop-r1">
                              <select
                                className="select2-size-lg form-control"
                                onChange={(e)=>{fetchData(e.target.value)}}
                                value = {reportType}
                              >
                                <option value="Post">Post</option>
                                <option value="Video">Video</option>
                                <option value="Comment">Comment</option>
                                <option value="SubComment">Sub-Comment</option>
                                <option value="Profile">Profile</option>
                                <option value="Group">Group</option>
                                <option value="Audio">Audio</option>
                              </select> 
                            </div>
                            <div className="col-6 col-sm-6 col-md-6 mtop-r1">
                              <Link
                                to="/Add-ReportOption"
                                className="float-right btn btn-primary shadow waves-effect waves-light"
                              >
                                Add Report Option
                              </Link>  
                            </div>
                          </div>
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
                                      <th>Type</th>
                                      <th>Option</th>
                                      <th>Status</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody >
                                    {reportOptions && reportOptions.length > 0 && reportOptions.map((ele, i) => {
                                      return <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{ele.reportType}</td>
                                        <td>{ele.reportOption}</td>
                                        <td>
                                          <label className="switch offer">
                                            <input type="checkbox" checked={ele.status} onChange={() => onchangeStatus(ele.id, ele.status)} />
                                            <span className="slider round"></span>
                                          </label>
                                        </td>
                                        <td>
                                          <Link
                                            to={{
                                              pathname: "/Edit-ReportOption",
                                              state: { id: ele.id }
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
              With the confirmation, the content will be deleted?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
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

      <div
        className="modal fade text-left show"
        id="default2"
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
              <i className="feather icon-info"></i> VIEW REPORT
              <p>this is a test</p>
            </div>
            <div className="modal-footer">
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
