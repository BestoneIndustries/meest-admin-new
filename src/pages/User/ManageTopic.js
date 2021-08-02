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

export default function ManageTopics() {
  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [tpoicData, setTopicData] = useState();
  const [editTopic, setEditTopic] = useState();
  const [editStatus, setEditStatus] = useState();
  const [editId, setEditId] = useState();

  useEffect(() => {
    fetchData();
  }, []);

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
  async function fetchData() {
    const resData = await postData("/topics/getAll");
    console.log("fetchData -> topics", resData.data.rows);
    if (resData) {
      setTopicData(resData.data.rows);
    }
  }

  async function onchangeStatus(id, status) {
    const { code } = await postData("/topics/update", {
      id: id,
      status: !status,
    });
    if (code == 1) {
      success("Status successfully changed");
      fetchData();
    }
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    const body = {
      status: editStatus,
      topic: editTopic,
    };
    if (editId) {
      body.id = editId;
      console.log("edit Data: ", body);
      const { data } = await postData("/topics/update", body);
      console.log("Interest -> data", data);
      if (data) {
        success("Interest successfully Updated");
        fetchData();
      } else {
        error("Server Error occurred");
      }
    } else {
      console.log("Add Data: ", body);
      const { data } = await postData("/topics/insert", body);
      console.log("Interest -> data", data);
      if (data) {
        success("Interest successfully added");
        fetchData();
      } else {
        error("Server Error occurred");
      }
    }
    return false;
  }

  async function openForm(data) {
    if (data) {
      setEditId(data.id);
      setEditTopic(data.topic);
      setEditStatus(data.status);
    } else {
      setEditId(null);
      setEditTopic("");
      setEditStatus(true);
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
                    <li className="breadcrumb-item active">Interest </li>
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
                        <h4 className="card-title">Interest</h4>
                      </div>
                      <div className="col-6">
                        <button
                          data-toggle="modal"
                          data-target="#add-topic"
                          className="float-right btn btn-primary shadow waves-effect waves-light"
                          onClick={() => openForm(null)}
                        >
                          <i className="fa fa-plus"></i>
                           Add New Interest
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
                                  <tbody>
                                    {tpoicData &&
                                      tpoicData.length > 0 &&
                                      tpoicData.map((ele, i) => {
                                        return (
                                          <tr key={i}>
                                            <td
                                              style={{ verticalAlign: "top" }}
                                            >
                                              {i + 1}
                                            </td>
                                            <td>{ele.topic}</td>
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
                                                data-target="#add-topic"
                                                to={{
                                                  pathname: "/Edit-Activity",
                                                  state: { id: ele.id },
                                                }}
                                                onClick={() => openForm(ele)}
                                                className="btn btn-icon"
                                              >
                                                <i className="feather icon-edit"></i>
                                              </Link>
                                            </td>
                                          </tr>
                                        );
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

      <div
        className="modal fade"
        id="add-topic"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {editId ? "Edit " : "Add "}Interest
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
                      <label htmlFor="firstName1">Interest </label>
                      <input
                        type="text"
                        className="form-control"
                        value={editTopic}
                        onChange={(e) => setEditTopic(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="eventLocation1">Status</label>
                      <select
                        className="form-control"
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                      >
                        <option value={true}>Active</option>
                        <option value={false}>Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary"
                    onClick={(e) => onSubmitForm(e)}
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      onClick={(e) => onSubmitForm(e)}
                      data-dismiss="modal"
                      type="sub"
                      className="btn btn-primary"
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
