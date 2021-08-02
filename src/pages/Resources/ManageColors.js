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

export default function ManageColors() {
  var notificationSystem = React.createRef();
  //const { dispatch } = useContext(UserContext);
  //const history = useHistory();
  const [colorData, setColorData] = useState();
  const [editColor, setEditColor] = useState();
  const [editStatus, setEditStatus] = useState();
  const [editId, setEditId] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [lastPage, setLastPage] = useState(1);
  const [pageAnchor, setPageAnchor] = useState([]);

  useEffect(() => {
    fetchData(pageNumber, pageSize);
  }, []);
  

  const success = (msg) => {
    console.log("success -> msg", msg)
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'success'
    });
  };

  const error = (msg) => {
    console.log("error -> msg", msg)
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'error'
    });
  };
  async function fetchData(pgN, pgS) {
    setPageNumber(pgN);
    setPageSize(pgS);
    const body = {
      pageSize: pgS,
      pageNumber: pgN,
    }
    const resData = await postData('/status/get/colors', body);
    console.log("fetchData -> Colors", resData.data)
    if (resData) {
      var maxpage = parseInt(resData.data.count / pgS) + 1;
      console.log("max page:", maxpage);
      const pgC = [];
      for (var i = -5; i < 5; i++) {
        if (pgN + i > 0 && pgN + i <= maxpage) {
          pgC.push(pgN + i);
        }
      }
      setLastPage(maxpage);
      console.log("all page:", pgC);
      setPageAnchor(pgC);
      setColorData(resData.data.rows);
    }
  }

  async function onchangeStatus(id, status) {
    var body={
      id: id, status: !status 
    }
    console.log("update: ", body)
    const { code } = await postData("/status/update/colors", body);
    if (code == 1) {
      success("Status successfully changed");
      fetchData(pageNumber, pageSize);
    }
  }
  
  async function onSubmitForm(e) {
    e.preventDefault();
    const body={
        status : editStatus,
        colorCode : editColor,
    }
    if(editId){
        body.id=editId
        console.log("edit Data: ",body)
        const { data } = await postData("/status/update/colors", body);
        console.log("Color -> data", data)
        if (data) {
          success("Colour successfully Updated");
          fetchData(pageNumber, pageSize);
        } else {
          error("Server Error occurred");
        }
    }
    else{
        console.log("Add Data: ",body)
        const { data } = await postData("/status/add/colors", body);
        console.log("Colour -> data", data)
        if (data) {
          success("Colour successfully added");
          fetchData(pageNumber, pageSize);
        } else {
          error("Server Error occurred");
        }
    }
    return false;
  }

  async function openForm(data) {
      if(data){
        setEditId(data.id)
        setEditColor(data.colorCode)
        setEditStatus(data.status)
      }
      else{
        setEditId(null)
        setEditColor("")
        setEditStatus(true)
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
                    <li className="breadcrumb-item active">Colours </li>
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
                        <h4 className="card-title">Colours</h4>
                      </div>
                      <div className="col-6">
                        <button
                            data-toggle="modal"
                            data-target="#add-color"
                            className="float-right btn btn-primary shadow waves-effect waves-light"
                            onClick={()=>openForm(null)}
                        >
                            <i className="fa fa-plus"></i>
                            {"    "} Add New Colour
                        </button>
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
                                      <th>Title</th>
                                      <th>Status</th>
                                      <th>Edit</th>
                                    </tr>
                                  </thead>
                                  <tbody >
                                    {colorData && colorData.length > 0 && colorData.map((ele, i) => {
                                      return <tr key={i}>
                                       <td>
                                        {i + 1 + pageSize * (pageNumber - 1)}
                                      </td>
                                        {/* <td style={{verticalAlign: "top"}}>{i + 1}</td> */}
                                       
                                        <td style={{backgroundColor:ele.colorCode}}>
                                          
                                        </td>
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
                                            data-toggle="modal"
                                            data-target="#add-color"
                                            to={{
                                              pathname: "/Edit-Activity",
                                              state: { id: ele.id }
                                            }}
                                            onClick={()=>openForm(ele)}
                                            className="btn btn-icon"
                                          >
                                            <i className="feather icon-edit"></i>
                                          </Link>
                                        </td>
                                      </tr>
                                    })}
                                  </tbody>
                                </table>
                                <div style={{ width: "100%" }}>
                              {pageNumber > 1 ? (
                                <>
                                  <a
                                  
                                    onClick={(e) => {
                                      fetchData(1, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}First
                                  </a>
                                  <a
                                    onClick={(e) => {
                                      fetchData(pageNumber - 1, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}&lt;&lt;{"  "}
                                  </a>
                                </>
                              ) : (
                                <a></a>
                              )}
                              <span>
                                {/* Showing Page
                                 {pageNumber}  */}
                                {pageAnchor.map((ele, index) => {
                                  // debugger;
                                  if (ele === pageNumber) {
                                    return (
                                      <>
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            textDecoration: "underline",
                                          }}
                                        >
                                          {ele}
                                        </span>
                                        {"    "}
                                      </>
                                    );
                                  } else {
                                    return (
                                      <a
                                        onClick={(e) => {
                                          fetchData(ele, pageSize);
                                        }}
                                        href="#"
                                      >
                                        {ele + "    "}
                                      </a>
                                    );
                                  }
                                })}
                              </span>
                              {pageNumber < lastPage ? (
                                <>
                                  <a
                                    onClick={(e) => {
                                      fetchData(pageNumber + 1, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}&gt;&gt;
                                  </a>
                                  <a
                                    onClick={(e) => {
                                      fetchData(lastPage, pageSize);
                                    }}
                                    href={pageNumber > 1 && "#"}
                                  >
                                    {"  "}Last
                                  </a>
                                </>
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

      <div
        className="modal fade"
        id="add-color"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                        {editId ? "Edit " : "Add "}Colour
                    </h5>
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
                    <form action="">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="firstName1">
                                        Colour{" "}
                                    </label>
                                    <input
                                        type="color"
                                        className="form-control"
                                        value={editColor}
                                        onChange={e=>setEditColor(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="eventLocation1">
                                        Status
                                    </label>
                                    <select 
                                        className="form-control" 
                                        value={editStatus}
                                        onChange={e=>setEditStatus(e.target.value)}
                                    >
                                    <option value={true}>Active</option>
                                    <option value={false}>Inactive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                >
                                    Close
                                </button>
                                <button
                                    onClick={e=>onSubmitForm(e)} 
                                    data-dismiss="modal" 
                                    type="sub" className="btn btn-primary"
                                >
                                Save
                            </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

      <Footer />
    </>
  );


  
  
}


