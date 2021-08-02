import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";
import { url } from "../apiUrl";

export default function Blacklist() {
  const [blackLists, setBlackLists] = useState([]);

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  const loadBlackList = async () => {
    const blacklist = await postData("/admin/getAll/from/blacklist");
    setBlackLists(blacklist.data.rows);
  };
  const [getBanCodes, setGetBanCodes] = useState([]);
  const [ids, setIds] = useState([]);
  const [banUser, setBanUser] = useState('');
  //const [error,setError] = useState({});


  function getBannCodesData(){
    var myHeaders = new Headers();
    const token = localStorage.meestToken;
    myHeaders.append("x-token", token);
    var raw = "";

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${url}/admin/getAll/from/blacklist`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const response = JSON.parse(result);
        if(response && response.code===1 && response.success) {
          const { rows } = response.data;
          setGetBanCodes(rows) 
        }
      })
      .catch(error => console.log('error', error));
  }
  useEffect(() => {
    getBannCodesData()
  },[]);

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
    loadBlackList();
  }, []);

function onDeleteBannedUsers(e,value) {
  e.preventDefault(e);
  if(value === 'cancel'){
    setIds([]);
  }
  else {
    console.log(ids);
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
    
    fetch(`${url}/admin/bulk/remove/from/blacklist`, requestOptions)
      .then(response => response.text())
      .then(result => {
        const response = JSON.parse(result);
        if(response && response.code === 1 && response.success === true){
          getBannCodesData();
        }
      })
      .catch(error => console.log('error', error));
  }
}

  function onHandleChange(e,value) {
    if(value === 'banUser') {
      setBanUser(e.target.value);
    }
  }

  function onBanUser(e) {
    e.preventDefault();
    let error ={
      banUser : false
    }
    if(banUser.length<1){
      error.banUser = true;
    }
    if(!error.banUser){
      const token = localStorage.meestToken;
      var myHeaders = new Headers();
      myHeaders.append("x-token", token);
      myHeaders.append("Content-Type", "application/json");
      const text = banUser;
      let email = text.includes('@');
      var obj = {
        email : email ? banUser : '',
        username : email === false? banUser : '' 
      }
      var raw = JSON.stringify(obj);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`${url}/admin/add/into/blacklist`, requestOptions)
        .then(response => response.text())
        .then(result => {
          const response = JSON.parse(result);
          if(response.code===1 && response.success){
            setBanUser('');
            getBannCodesData();
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
                      <Link to="/">Tools</Link>
                    </li>
                    <li className="breadcrumb-item active">Blacklist Users</li>
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
                        <h4 className="card-title">
                          Ban IP, email or username
                        </h4>
                        <p className="mb-0 mt-2">
                          Add any email, username to prevent users from
                          creating accounts within the blacklist.
                        </p>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="api-key-wrapper">
                          <form>
                            <div id="" className="form-group">
                              <input
                                type="text"
                                placeholder="IP Address, Email Address, E-mail range or Username"
                                className="form-control input-style"
                                value={banUser}
                                onChange={(e) => onHandleChange(e,'banUser')}
                              />
                            </div>

                            <div className="api-buttons mt-2">
                              <button onClick={(e) => onBanUser(e)} className="btn btn-primary shadow waves-effect waves-light">
                                Ban
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  {/* <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Filters</h4>
                      </div>
                      <a className="heading-elements-toggle">
                        <i className="fa fa-ellipsis-v font-medium-3"></i>
                      </a>
                      <div className="heading-elements">
                        <ul className="list-inline mb-0">
                          <li>
                            <a data-action="collapse">
                              <i className="feather icon-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a data-action="">
                              <i className="feather icon-rotate-cw users-data-filter"></i>
                            </a>
                          </li>
                          <li>
                            <a data-action="close">
                              <i className="feather icon-x"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-content collapse show">
                      <div className="card-body">
                        <div className="users-list-filter">
                          <form>
                            <div
                              className="row"
                              style={{ alignItems: "center" }}
                            >
                              <div className="col-12 col-sm-6 col-lg-3">
                                <label for="users-list-verified">Banned</label>
                                <fieldset className="form-group">
                                  <select
                                    className="form-control"
                                    id="users-list-verified"
                                  >
                                    <option value="">Banned</option>
                                    <option value="true">Subrata</option>
                                    <option value="false">Arindam</option>
                                  </select>
                                </fieldset>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <label for="users-list-role">ID</label>
                                <fieldset className="form-group">
                                  <select
                                    className="form-control"
                                    id="users-list-role"
                                  >
                                    <option value="">ID</option>
                                    <option value="user">EUR</option>
                                    <option value="staff">INR</option>
                                  </select>
                                </fieldset>
                              </div>
                              <div className="col-12 col-sm-6 col-lg-3">
                                <div className="form-group">
                                  <div className="controls">
                                    <label for="users-list-status">
                                      Zip Code
                                    </label>
                                    <input
                                      type="text"
                                      name="text"
                                      className="form-control"
                                      placeholder="Zip Code"
                                      required=""
                                      aria-invalid="false"
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-12 col-sm-6 col-lg-3">
                                <a
                                  href="#"
                                  className="float-right btn btn-primary shadow full-wdth"
                                >
                                  Filter{" "}
                                </a>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage Banned IPs</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
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
                                    placeholder="Search....."
                                    name="query"
                                    id="query"
                                    className="form-control full-wdth float-left"
                                    value=""
                                  />
                                </div>
                                <div className="col-5 col-md-3 pr-0">
                                  <button className="btn btn-primary float-left waves-effect waves-light">
                                    Search
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* <div className="col-12 col-sm-6 col-md-3 mtop-r1">
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
                            </div> */}
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
                                  <th
                                    data-field="state"
                                    data-checkbox="true"
                                  ></th>
                                  <th data-field="id">ID</th>
                                  <th data-field="banned" data-editable="true">
                                    Banned
                                  </th>
                                  {/* <th data-field="value" data-editable="true">
                                    Value
                                  </th> */}
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                              {getBanCodes && getBanCodes.length>0 && getBanCodes.map((data) => {
                                  return(
                                <tr>
                                  <td></td>
                                  <td>{data.id}</td>
                                  <td>{data.emailAddress || data.username}</td>
                                  <td>
                                    <a
                                      // href="#"
                                      data-toggle="modal"
                                      data-target="#default1"
                                      className="btn btn-danger"
                                      onClick={(e)=>{
                                        e.preventDefault();
                                        let arr = [...ids];
                                        arr.push(data.id)
                                        setIds(arr);
                                      }}
                                    >
                                      Delete
                                    </a>
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
                onClick={(e)=>onDeleteBannedUsers(e,'ok')}
              >
                Ok
              </button>
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
                onClick={(e)=>onDeleteBannedUsers(e,'cancel')}
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
