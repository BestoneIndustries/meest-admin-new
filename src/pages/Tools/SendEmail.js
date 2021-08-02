import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { url } from "../apiUrl";

export default function SendEmail() {

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailTo, setEmailTo] = useState('');
  const [searchUser, setSearchUser] = useState(''); 
  const [check, setCheck] = useState(false);
  const [error,setError] = useState({});

  const [emailList, setEmailList] = useState([]);

  useEffect(()=>{
    var token = localStorage.meestToken;
    var myHeaders = new Headers();
    myHeaders.append("x-token", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${url}/admin/send/mail/receipents`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        const response = JSON.parse(result);
        if(response.code === 1 && response.success){
          setEmailList(response.data);
        }
      })
      .catch(error => console.log('error', error));
  },[]);

  function onHandleChange(e,value){
    if(value === 'subject') {
      setSubject(e.target.value);
    }
    if(value === 'message') {
      setMessage(e.target.value);
    }
    if(value === 'emailTo') {
      setEmailTo(e.target.value);
    }
    if(value === 'searchUser') {
      setSearchUser(e.target.value);
    }
    if(value === 'checkbox') {
      setCheck(e.target.checked);
    }
  }

  function onSendEmail(e) {
    e.preventDefault();
    let error = {
      subject : false,
      message : false,
      emailTo : false
    }
    if(subject.length <4 ) {
      error.subject = true;
    }
    if(message.length < 10) {
      error.message = true;
    }
    if(emailTo.length<1){
      error.emailTo = true;
    }
    setError(error);
    console.log(emailTo);

    if(!error.subject && !error.message && !error.emailTo){
      var str = emailTo;
      var oneWeek = str.includes("week");
      var month = str.includes("a month");
      var threeMonths = str.includes("3 month");
      var sixMonths = str.includes("6 month");
      var nineMonths = str.includes("9 month");  
      var twelveMonths = str.includes("12 month");    
      var arr = {};
      if(oneWeek){
        arr = emailList.oneWeek.rows || [];
      }
      if(month){
        arr = emailList.Week.rows || [];
      }
      if(threeMonths){
        arr = emailList.threeMonths.rows || [];
      }
      if(sixMonths){
        arr = emailList.sixMonths.rows || [];
      }
      if(nineMonths){
        arr = emailList.nineMonths.rows || [];
      }
      if(twelveMonths){
        arr = emailList.twelveMonths.rows || [];
      }
      var token = localStorage.meestToken;
      var myHeaders = new Headers();
      myHeaders.append("x-token", token);
      myHeaders.append("Content-Type", "application/json");

      var obj = {
        emails : arr,
        subject,
        body : message
      }
      var raw = JSON.stringify({obj});
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
     
      fetch(`${url}/admin/send/mail/toUsers`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          const response = JSON.parse(result);
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
                    <li className="breadcrumb-item active">Send Email</li>
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
                            <h4 className="card-title">Send E-mail To Users</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div id="" className="form-group">
                                  <label>Subject</label>
                                  <input
                                    type="text"
                                    placeholder=""
                                    onChange={(e)=>onHandleChange(e,'subject')}
                                    value={subject}
                                    className="form-control input-style"
                                  />
                                  {error.subject && <div className="text-danger">Subject length must be greater than 3</div>}
                                </div>
                                <fieldset className="form-group">
                                  <label>Message (HTML Allowed)</label>
                                  <textarea
                                    className="form-control"
                                    id="basicTextarea"
                                    rows="5"
                                    placeholder=""
                                    value={message}
                                    onChange={(e)=>onHandleChange(e,'message')}
                                  ></textarea>
                                  {error.message && <div className="text-danger">Message length must be greater than 10</div>}
                                </fieldset>
                                <div id="" className="form-group">
                                  <label>Send Email To</label>
                                  <select className="form-control"  value={emailTo} onChange={(e)=>onHandleChange(e,'emailTo')}>
                                    <option>Select</option>
                                    <option>
                                      Users who didn`t login for a week -----
                                      approximately ({emailList && emailList.oneWeek && emailList.oneWeek.count} User)
                                    </option>
                                    <option>
                                      Users who didn`t login for a month -----
                                      approximately ({emailList && emailList.oneMonths && emailList.oneMonths.count} User)
                                    </option>
                                    <option>
                                      Users who didn`t login for a 3 month -----
                                      approximately ({emailList && emailList.threeMonths && emailList.threeMonths.count} User)
                                    </option>
                                    <option>
                                      Users who didn`t login for a 6 month -----
                                      approximately ({emailList && emailList.sixMonths && emailList.sixMonths.count} User)
                                    </option>
                                    <option>
                                      Users who didn`t login for a 9 month -----
                                      approximately ({emailList && emailList.nineMonths && emailList.nineMonths.count} User)
                                    </option>
                                    <option>
                                      Users who didn`t login for a year -----
                                      approximately ({emailList && emailList.twelveMonths && emailList.twelveMonths.count} User)
                                    </option>
                                  </select>
                                  {error.emailTo && <div  className="text-danger">Please select one option</div>}
                                </div>
                                <div className="form-group">
                                  <label>Search Users (Optional)</label>
                                  <input
                                    type="search"
                                    placeholder=""
                                    className="form-control input-style"
                                    onChange={(e)=>onHandleChange(e,'searchUser')}
                                    value={searchUser}
                                  />
                                </div>
                                <div className="form-group">
                                  <input type="checkbox"  onChange={(e)=>onHandleChange(e,'checkbox')} value={check} />{" "}
                                  <span>
                                    Test Message{" "}
                                    <small>(Send to my email first)</small>
                                  </span>
                                </div>
                                <div className="api-buttons mt-2">
                                  <button className="btn btn-primary shadow waves-effect waves-light" onClick={(e)=>onSendEmail(e)}>
                                    Send
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
