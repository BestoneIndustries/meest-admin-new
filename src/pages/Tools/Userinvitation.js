import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import axios from "axios";
import { url } from "../apiUrl";
import moment from 'moment';

const dateTimeDiffernce = (localTime,todayDate) => {
    var a = moment(localTime);
    var b = moment(todayDate)
    var year = b.diff(a,'year');
    var month = b.diff(a,'month');
    var days = b.diff(a,'days');
    var hours = b.diff(a,'hours');
    var minutes = b.diff(a,'minutes');
    var timeDuration = {
        key : '',type : ''
     };
    if (year > 0) {
        timeDuration = {key : year , type : year>1 ? ' years ago' : ' year ago' }
    }
    if(year === 0 && month >0 ){
        timeDuration = {key : month , type : month>1 ? ' month ago' : ' month ago' }
    }
    if(year === 0 && month  === 0 && days > 0){
        timeDuration = {key : days , type : days>1 ? ' days ago' : ' day ago' }
    }
    if(year === 0 && month  === 0 && days === 0 && hours > 0){
        timeDuration = {key : hours , type : hours>1 ? ' hours ago' : ' hour ago' }
    }
    if(year === 0 && month  === 0 &&  hours === 0 && minutes > 0){
        timeDuration = {key : minutes , type : minutes>1 ? ' minutes ago' : ' minute ago' }
    }
    return timeDuration;
}

function Userinvitation() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const token = localStorage.meestToken;
    console.log(token);
    var myHeaders = new Headers();
    myHeaders.append("x-token", token);

    var raw = "";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${url}/user/invitation/getCount`, requestOptions)
      .then(response => response.text())
      .then(result => {
        // console.log(JSON.parse(result));
        const response = JSON.parse(result);
        if(response && response.code === 1 && response.data){
            const { data } = response;
            setUsers(data);
        }
        })
      .catch(error => console.log('error', error));

  },[]);

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
                      <Link to="/">Tools</Link>
                    </li>
                    <li className="breadcrumb-item active">Users Invitation</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage Users Invitation</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
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

                                  <th data-field="created" data-editable="true">
                                    Created
                                  </th>
                                  <th data-field="code" data-editable="true">
                                    Invitation Code
                                  </th>
                                  <th data-field="status" data-editable="true">
                                    Invited User
                                  </th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {
                                users && users.length>0 && users.map((data) => {
                                  const utcData = moment.utc(data.createdAt).format('YYYY-MM-DD HH:mm:ss');
                                  var localTime  = moment.utc(utcData).toDate();
                                  localTime = moment(localTime).format('YYYY-MM-DD HH:mm:ss');
                                  const todayDate = moment().format('YYYY-MM-DD HH:mm:ss');
                                  const timeDuration = dateTimeDiffernce(localTime,todayDate);
                                  return(
                                    <tr>
                                      <td></td>
                                  <td>{timeDuration.key}{timeDuration.type}</td>
                                      <td>3664182415f22ade8a03410.38153266</td>
                                      <td>1</td>
                                      <td>
                                        <a
                                          href="#"
                                          data-toggle="modal"
                                          data-target="#default1"
                                          className="btn btn-danger"
                                        >
                                          Delete
                                        </a>
                                      </td>
                                  </tr>
                                  )
                                }) }
                                {/* <tr>
                                  <td></td>
                                  <td>22 hours ago</td>
                                  <td>3664182415f22ade8a03410.38153266</td>
                                  <td></td>
                                  <td>
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#default1"
                                      className="btn btn-danger"
                                    >
                                      Delete
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td>3 days ago</td>
                                  <td>3664182415f22ade8a03410.38153266</td>
                                  <td>2</td>
                                  <td>
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#default1"
                                      className="btn btn-danger"
                                    >
                                      Delete
                                    </a>
                                  </td>
                                </tr> */}
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
              Are you sure you want to delete this user?
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
    </>
  );
}

export default Userinvitation;