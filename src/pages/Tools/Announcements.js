/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { url } from "../apiUrl";

export default function Announcements() {

  const [announcementType,setAnnouncementType] = useState('');
  const [editAnnouncementType,setEditAnnouncementType] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [editAnnouncement, setEditAnnouncement] = useState('');
  const [status,setStatus] = useState('');
  const [editStatus,setEditStatus] = useState();
  const [error,setError] = useState({});
  const [startDateTime, setStartDateTime]= useState(new Date());
  const [editStartDateTime, setEditStartDateTime]= useState(new Date());
  const [activeUsers, setActiveUsers] = useState([]);
  const [inActiveUsers, setInActiveUsers] = useState([]);
  const [ids,setIds] = useState([]);
  const [updateId, setUpdateId] = useState('')


    function getActiveUsers(){
      const token = localStorage.meestToken;
      var myHeaders = new Headers();
      myHeaders.append("x-token", token);

      var raw = "";

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${url}/announcement/getActive`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const response = JSON.parse(result);
          if(response.code ===1 && response.success){
            setActiveUsers(response.data);
          }
        })
        .catch(error => console.log('error', error));
    }

    function getInActiveUsers(){
      const token = localStorage.meestToken;
      var myHeaders = new Headers();
      myHeaders.append("x-token", token);

      var raw = "";

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${url}/announcement/getInactive`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const response = JSON.parse(result);
          if(response.code ===1 && response.success){
            setInActiveUsers(response.data);
          }
        })
        .catch(error => console.log('error', error));
    }

  useEffect(() => {
    getActiveUsers();
    getInActiveUsers();
  },[])

  function onHandleChange(e,value) {
    if(value === 'announcement') {
      setAnnouncement(e.target.value);
      setEditAnnouncement(e.target.value)
    }
    if(value === 'editAnnouncement') {
      setEditAnnouncement(e.target.value)
    }
    if(value === "announcementType")  {
      setAnnouncementType(e.target.value);
      setEditAnnouncementType(e.target.value);
    }
    if(value === 'editAnnouncementType'){
      setEditAnnouncementType(e.target.value);
    }
    if(value === 'status'){
      setStatus(status);
      setEditStatus(status)
    }
    if(value === 'editStatus'){
      setEditStatus(e.target.value)
    }
  }

  function onSaveAnnouncement(e) {
    e.preventDefault();
    let error = {
      announcement : false,
      announcementType : false
    }
    if(announcement.length < 1 ) {
      error.announcement = true;
    }
    if(announcementType.length < 1){
      error.announcementType = true;
    }

    setError(error);
    if(!error.announcement && !error.announcementType){
      const dateTime = startDateTime;
      let date = moment(dateTime).format('YYYY-MM-DD')
      let time = moment(dateTime).format('HH:mm')
      var myHeaders = new Headers();
      const token = localStorage.meestToken;
      myHeaders.append("x-token", token);
      myHeaders.append("Content-Type", "application/json");
      var obj = {
        type: announcementType,
        date,
        time,
        description: announcement  
      }
      var raw = JSON.stringify(obj);

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      };

      fetch(`${url}/announcement/add`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const response = JSON.parse(result);
        if(response && response.code===1 && response.success){
          setAnnouncementType('');
          setAnnouncement('');
          setStartDateTime(new Date());
          getInActiveUsers();
          getActiveUsers();
        }
      })
      .catch(error => console.log('error', error));

    }
  }

  function onEditAnnouncement(e) {
    e.preventDefault();
    let error = {
      editAnnouncement : false,
      status : false,
      editAnnouncementType : false
    }
    if(editAnnouncement.length < 1 ) {
      error.editAnnouncement = true;
    }
    if(editStatus.length===0){
      error.status = true;
    }
    if(editAnnouncementType.length<1){
      error.editAnnouncementType = true
    }
    setError(error);
    if(!error.editAnnouncement && !error.editStatus && !error.editAnnouncementType){
      console.log(editStatus);
      const dateTime = editStartDateTime;
      let date = moment(dateTime).format('YYYY-MM-DD')
      let time = moment(dateTime).format('HH:mm')
      const token = localStorage.meestToken;
      var myHeaders = new Headers();
      myHeaders.append("x-token", token);
      myHeaders.append("Content-Type", "application/json");
      var obj = {
        id: updateId,
        type: editAnnouncementType,
        date,
        time,
        description: editAnnouncement,
        status: editStatus==='Active' ? true : false
      }
      var raw = JSON.stringify(obj);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${url}/announcement/update`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const response = JSON.parse(result);
          if(response && response.code===1 && response.success){
            getActiveUsers();
            getInActiveUsers();
          }
        })
        .catch(error => console.log('error', error));
    }
  }

  function onDeleteUsers(e,value) {
    e.preventDefault();
    if(value === 'cancel'){
      setIds([]);
    }
    else{
      var myHeaders = new Headers();
      const token = localStorage.meestToken;
      myHeaders.append("x-token", token);
      myHeaders.append("Content-Type", "application/json");
      var obj = {
        ids
      }
      var raw = JSON.stringify(obj);
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch(`${url}/announcement/bulkDelete`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const response = JSON.parse(result);
          if(response && response.code === 1 && response.success === true){
              getActiveUsers();
              getInActiveUsers();
          }
        })
        .catch(error => console.log('error', error));
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
                      <Link to="/">Tools </Link>
                    </li>
                    <li className="breadcrumb-item active">Announcements</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-md-12"> 
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Manage Announcements</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                              <div className="form-group">
                                  <label><strong>Announcement type</strong></label>
                                  <input
                                    type="search"
                                    placeholder="Announcement type"
                                    className="form-control input-style"
                                    onChange={(e)=>onHandleChange(e,'announcementType')}
                                    value={announcementType}
                                  />
                                  {error.announcementType && <div className="text-danger">This field can not be empty.</div>}
                                </div>
                                <fieldset className="form-group">
                                  <label className="mb-1">
                                    <strong>
                                      Create New Announcement (HTML Allowed)
                                    </strong>
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="basicTextarea"
                                    rows="3"
                                    placeholder=""
                                    onChange={(e)=>onHandleChange(e,'announcement')}
                                    value={announcement}
                                  ></textarea>
                                  {error.announcement && <div className="text-danger">Announcement field can not be empty</div>}
                                </fieldset>
                                <div className="form-group">
                                <label className="mb-1">
                                    <strong>
                                      Select Date and time for announcement
                                    </strong>
                                  </label>
                                <DatePicker
                                    selected={startDateTime}
                                    onChange={date => {
                                      setStartDateTime(date);
                                      setEditStartDateTime(date);
                                    }}
                                    timeInputLabel="Time:"
                                    dateFormat="MM/dd/yyyy h:mm aa"
                                    showTimeInput
                                  />
                                </div>
                                <div className="api-buttons my-2">
                                  <button onClick={(e)=>onSaveAnnouncement(e)} className="btn btn-primary shadow waves-effect waves-light">
                                    SAVE
                                  </button>
                                </div>
                              </form>
                              <div className="activ-announcement border-top">
                                <h3>Active Announcements</h3>
                                <div
                                  id="DataTables_Table_0_wrapper"
                                  className="dataTables_wrapper dt-bootstrap4"
                                >
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
                                          <th
                                            data-field="state"
                                            data-checkbox="true"
                                          ></th>
                                          <th data-field="id">ID</th>
                                          <th
                                            data-field="banned"
                                            data-editable="true"
                                          >
                                            Announcement By
                                          </th>
                                          <th
                                            data-field="anouncement-type"
                                            data-editable="true"
                                          >
                                            Announcement Type
                                          </th>
                                          <th
                                            data-field="anouncement-date"
                                            data-editable="true"
                                          >
                                            Announcement Date
                                          </th>
                                          <th
                                            data-field="anouncement-time"
                                            data-editable="true"
                                          >
                                            Announcement Time
                                          </th>
                                          <th
                                            data-field="status"
                                            data-editable="true"
                                          >
                                            Status
                                          </th>
                                          <th data-field="action">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {
                                          activeUsers && activeUsers.length>0 && activeUsers.map((data) => {
                                            return (
                                              <tr>
                                          <td></td>
                                          <td>{data.id}</td>
                                          <td>{data.addedBy || 'Admin'}</td>
                                          <td>{data && data.type}</td>
                                          <td>{data.date}</td>
                                          <td>{data.time}</td>
                                          <td>
                                            <label className="switch offer">
                                              <input type="checkbox" checked />
                                              <span className="slider round"></span>
                                            </label>
                                          </td>
                                          <td>
                                            <div className="d-flex">
                                              <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#announcement-edit"
                                                className="btn btn-primary"
                                                onClick={(e)=>{
                                                  e.preventDefault();
                                                  console.log(data);
                                                  setError({});
                                                  setUpdateId(data.id);
                                                  setEditAnnouncementType(data.type);
                                                  setEditAnnouncement(data.description);
                                                  setEditStatus(data.status);
                                                  setEditStartDateTime(new Date(data.date));
                                                }}
                                              >
                                                Edit
                                              </a>
                                              &nbsp;&nbsp;
                                              <Link
                                                to={{ pathname : "/Announcement-View",announcementData : data}}
                                                className="btn btn-info"
                                              >
                                                View{" "}
                                              </Link>
                                              &nbsp;&nbsp;
                                              <a
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#default1"
                                                className="btn btn-danger"
                                                onClick={(e)=>{
                                                  e.stopPropagation();
                                                  let arr = [...ids];
                                                  arr.push(data.id);
                                                  setIds(arr)
                                                }}
                                              >
                                                Delete
                                              </a>
                                            </div>
                                          </td>
                                        </tr>
                                            )
                                          })
                                        }
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="activ-announcement">
                                <h3>Inactive Announcements</h3>
                                <div
                                  id="DataTables_Table_0_wrapper"
                                  className="dataTables_wrapper dt-bootstrap4"
                                >
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
                                          <th
                                            data-field="state"
                                            data-checkbox="true"
                                          ></th>
                                          <th data-field="id">ID</th>
                                          <th
                                            data-field="banned"
                                            data-editable="true"
                                          >
                                            Announcement By
                                          </th>
                                          <th
                                            data-field="anouncement-type"
                                            data-editable="true"
                                          >
                                            Announcement Type
                                          </th>
                                          <th
                                            data-field="anouncement-date"
                                            data-editable="true"
                                          >
                                            Announcement Date
                                          </th>
                                          <th
                                            data-field="anouncement-time"
                                            data-editable="true"
                                          >
                                            Announcement Time
                                          </th>
                                          <th
                                            data-field="status"
                                            data-editable="true"
                                          >
                                            Status
                                          </th>
                                          <th data-field="action">Action</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        { inActiveUsers && inActiveUsers.length>0 && inActiveUsers.map((data) => {
                                          return (
                                            <tr>
                                            <td></td>
                                            <td>{data.id}</td>
                                            <td>{data.addedBy || 'Admin'}</td>
                                            <td>{data.type}</td>
                                            <td>{data.date}</td>
                                            <td>{data.time}</td>
                                            <td>
                                              <label className="switch offer">
                                                <input type="checkbox" />
                                                <span className="slider round"></span>
                                              </label>
                                            </td>
                                            <td>
                                              <div className="d-flex">
                                                <a
                                                  href="#"
                                                  data-toggle="modal"
                                                  data-target="#announcement-edit"
                                                  className="btn btn-primary"
                                                  onClick={(e)=>{
                                                    e.preventDefault();
                                                    console.log(data);
                                                    setError({});
                                                    setUpdateId(data.id);
                                                    setEditAnnouncementType(data.type);
                                                    setEditAnnouncement(data.description);
                                                    setEditStatus(data.status);
                                                    setEditStartDateTime(new Date(data.date));
                                                  }}
                                                >
                                                  Edit
                                                </a>
                                                &nbsp;&nbsp;
                                                <Link
                                                to={{ pathname : "/Announcement-View",announcementData : data}}
                                                className="btn btn-info"
                                              >
                                                  View{" "}
                                                </Link>
                                                &nbsp;&nbsp;
                                                <a
                                                  href="#"
                                                  data-toggle="modal"
                                                  data-target="#default1"
                                                  className="btn btn-danger"
                                                  onClick={(e)=>{
                                                    e.stopPropagation();
                                                    let arr = [...ids];
                                                    arr.push(data.id);
                                                    setIds(arr)
                                                  }}
                                                >
                                                  Delete
                                                </a>
                                              </div>
                                            </td>
                                          </tr>
                                          )
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
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="announcement-edit"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit Announcement
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
              <form>
                <fieldset>
                <label className="mb-1">
                    <strong>Edit Type</strong>
                </label>
                <input type="text" className="form-control" onChange={(e)=>onHandleChange(e,'editAnnouncementType')} value={editAnnouncementType} />  
                  {error.editAnnouncementType && <div className="text-danger">This field can not be empty.</div>}
                </fieldset>
                <fieldset className="form-group">
                  <label className="mb-1">
                    <strong>Edit Announcement (HTML Allowed)</strong>
                  </label>
                  <textarea
                    className="form-control"
                    id="basicTextarea"
                    rows="3"
                    placeholder=""
                    onChange={(e)=>onHandleChange(e,'editAnnouncement')}
                    value={editAnnouncement}
                  ></textarea>
                  {error.editAnnouncement && <div className="text-danger">This field can not be empty.</div>}
                </fieldset>
                <fieldset className="form-group">
                  <label className="mb-1">
                    <strong>Status</strong>
                  </label>
                  <select className="form-control" value={editStatus ? 'Active' : 'Inactive'} onChange={(e)=>onHandleChange(e,'editStatus')} placeholder="Select..">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                  {error.status && <div className="text-danger">Please select one option.</div>}
                </fieldset>
                <fieldset>
                  <label className="mb-1">
                    <strong> Select Date and time for announcement</strong>
                   </label>
                   <DatePicker
                       selected={editStartDateTime}
                       onChange={date => {
                             setEditStartDateTime(date)
                        }}
                       timeInputLabel="Time:"
                       dateFormat="MM/dd/yyyy h:mm aa"
                       showTimeInput
                    />
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick = {(e) => {
                  e.preventDefault();
                  setAnnouncement('');
                  setStatus('');
                }}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick = {(e)=>onEditAnnouncement(e)}>
                Save changess
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sidenav-overlay"></div>
      <div className="drag-target"></div>

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
              Are you sure you want to delete this user?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={(e)=>onDeleteUsers(e,'ok')}
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={(e)=>onDeleteUsers(e,'cancel')}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
