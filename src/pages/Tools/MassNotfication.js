import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Select from 'react-select';
import { url } from "../apiUrl";

export default function MassNotfication() {

  const [notificationSite,setNotificationSite] = useState('');
  const [notificationText, setNotificationText] = useState('');
  const [notificationUser, setNotificationUser] = useState('');
  const [selectedUsers, setSelectedUsers] = useState(null);
  const [options, setOptions] = useState([]);
  const [users, setUsers] = useState([]);
  const [error,setError] = useState({});

  function getFormattedSelectedUser(){
    let options = []
     for(let i=0;i<users.length;i++){
       options.push({ 
         label : `${users[i].firstName} ${users[i].lastName}`,
         value : `${users[i].firstName} ${users[i].lastName}`,
         id : `${users[i].id}`})
     }
     setOptions(options)
     return options;
   }
  useEffect(()=> {
    var myHeaders = new Headers();
    const token = localStorage.meestToken;
    myHeaders.append("x-token", token);
    myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({});

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    // body: raw,
    redirect: 'follow'
    };

    fetch(`${url}/admin/allUsers`, requestOptions)
    .then(response => response.text())
    .then(result => {
      const response = JSON.parse(result);
      if(response.code === 1){
        const { rows } = response.data;
        setUsers(rows);
      }
 })
    .catch(error => console.log('error', error));
    },[]);

    useEffect(()=>{
      getFormattedSelectedUser();
    },[users])



  function onHandleChange(e,value){
    if(value === 'notificationSite'){
      setNotificationSite(e.target.value);
    }
    if(value === 'notificationText'){
      setNotificationText(e.target.value);
    }
    if(value === 'notificationUser'){
      setNotificationUser(e.target.value);
    }
  }

  function onSendNotification(e){
    e.preventDefault();
    let error = {
      notificationSite : false,
      notificationText : false,
      notificationUser : false
    }

    if(notificationSite.length < 1){
      error.notificationSite = true;
    }
    if(notificationText.length < 1){
      error.notificationText = true;
    }
    if(selectedUsers===null){
      error.notificationUser = true;
    }
    setError(error);
    if(!error.notificationSite && !error.notificationText && !error.notificationUser) {
      const token = localStorage.meestToken;
      var myHeaders = new Headers();
      myHeaders.append("x-token", token);
      myHeaders.append("Content-Type", "application/json");
      let arr = [];
      for(let i=0;i<options.length;i++){
        arr.push(options[i].id);
      }
      const obj = {
        userIds : arr,
        message : notificationText,
        title : notificationSite
      }
      var raw = JSON.stringify(obj);

      var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
      };

      fetch(`${url}/admin/send/mass/notification`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const response = JSON.parse(result);
      })
      .catch(error => console.log('error', error));
    }
  }

  // const options = [
  //   { value: 'Chocolate', label: 'Chocolate' },
  //   { value: 'Strawberry', label: 'Strawberry' },
  //   { value: 'Vanilla', label: 'Vanilla' }
  // ];

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
                    <li className="breadcrumb-item active">Mass Notifications</li>
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
                            <h4 className="card-title">
                              Send Site Notifications To Users
                            </h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Notification title"
                                    className="form-control input-style"
                                    onChange={(e) => onHandleChange(e,'notificationSite')} 
                                    value={notificationSite}
                                  />
                                  {error.notificationSite && <div className="text-danger">This field can not be empty.</div>}
                                </div>
                                <fieldset className="form-group">
                                  <textarea
                                    className="form-control"
                                    id="basicTextarea"
                                    rows="5"
                                    placeholder="Notification Text"
                                    onChange={(e) => onHandleChange(e,'notificationText')} 
                                    value={notificationText}
                                  ></textarea>
                                  {error.notificationText && <div className="text-danger">This field can not be empty.</div>}
                                </fieldset>
                                <Select
                                  isMulti
                                  value={selectedUsers}
                                  className="basic-multi-select"
                                  onChange={(selectedOption)=>{
                                    setSelectedUsers(selectedOption);
                                  }}
                                  options={options}
                                />
                                  {error.notificationUser && <div className="text-danger">This field can not be empty.</div>}
                                <div className="api-buttons mt-2">
                                  <button onClick={(e)=>onSendNotification(e)} className="btn btn-primary shadow waves-effect waves-light">
                                    Send Notification
                                  </button>
                                </div>
                              </form>
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
