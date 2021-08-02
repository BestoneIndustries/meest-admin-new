import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";
import moment from 'moment';

function AdminCampaign() {
  const [adminCampaign, setAdminCampaign] = useState([]);

  const loadAdminCampaign = async () => {
    const data = await postData("/campaign/getAll");
    if (data.code) {
      setAdminCampaign(data.data.rows);
    }
  };

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
    loadAdminCampaign();
  }, []);

  return (
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
                    <Link to="/">Advertisements</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    List/Manage Campaign
                  </li>
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
                      <h4 className="card-title">List/Manage Campaign</h4>
                    </div></div>
                  <div className="card-content">
                    <div className="card-body card-dashboard">

                      <div className="table-responsive">
                        <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4">
                          <div className="row mb-2" style={{ alignContent: "center" }}>
                            <div className="col-12 col-sm-4 col-md-3">
                              <div className="dataTables_length float-left" id="DataTables_Table_0_length">
                                <label>
                                  Show
                                                         <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="custom-select custom-select-sm form-control form-control-sm">
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
                              <div id="DataTables_Table_0_filter" className="dataTables_filter bulk-btn">

                                <div className="col-7 col-md-9 pr-0 pl-0">
                                  <input type="text" placeholder="Search....." name="query" id="query" className="form-control full-wdth float-left" value="" />

                                </div>
                                <div className="col-5 col-md-3 pr-0">
                                  <button className="btn btn-primary float-left waves-effect waves-light">Search</button>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-3 mtop-r1">
                              <div className="dropdown flot-rigt">
                                <button onclick="myFunction()" className="btn btn-primary waves-effect waves-light dropbtn">Bulk Option</button>
                                <div id="myDropdown" className="dropdown-content">
                                  <a href="#">Delete</a>
                                  <a href="#">Download</a>
                                  <a href="#">Export as CSV</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row"><div className="col-sm-12">
                            <table className="table table-hover table-bordered mb-0" id="table" role="grid" data-toggle="table" data-pagination="true" data-resizable="true" data-click-to-select="true" >
                              <thead className="thead-light">
                                <tr>
                                  <th data-field="state" data-checkbox="true"></th>
                                  <th data-field="id">ID</th>
                                  <th data-field="companyname" data-editable="true">Campaign Name</th>
                                  <th data-field="image" data-editable="true">Image</th>
                                  {/* <th data-field="video" data-editable="true">Video</th> */}
                                  <th data-field="campaign-title" data-editable="true">Campaign Type</th>
                                  <th data-field="campaign-description" data-editable="true">Campaign Description</th>
                                  <th data-field="strat-date" data-editable="true">Start Date</th>
                                  <th data-field="end-date" data-editable="true">Campaign Duration</th>
                                  <th data-field="website" data-editable="true">Website Url</th>
                                  <th data-field="location" data-editable="true">Location</th>
                                  <th data-field="audience" data-editable="true">Audience</th>
                                  <th data-field="views" data-editable="true">View</th>
                                  <th data-field="likes" data-editable="true">Like</th>
                                  <th data-field="share" data-editable="true">Share</th>
                                  <th data-field="action">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                {adminCampaign && adminCampaign.map((ele, index) => {
                                  return <tr key={index}>
                                    <td></td>
                                    <td>{index + 1}</td>
                                    <td>{ele.campaignTitle}</td>
                                    <td><a href={ele.fileURL}><img className="advertisement-image" src={ele.fileURL ? ele.fileURL : "app-assets/images/pages/graphic-2.png"} alt="" /></a></td>
                                    {/* <td><iframe width="200" height="100" src="https://www.youtube.com/embed/cSLAO7zxS2M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></td> */}
                                    <td>{ele.campaignType}</td>
                                    <td>{ele.campaignText}</td>
                                    <td>{moment(ele.startDate).format('DD MMM YYYY')}</td>
                                    <td>{}</td>
                                    <td>{ele.websiteUrl}</td>
                                    <td>{ele.location}</td>
                                    <td>{ele.websiteUrl}</td>
                                    <td><a href="#" className="counter-area">{ele.viewerCount}</a></td>
                                    <td><a href="#" className="counter-area">{ele.postReactions}</a></td>
                                    <td><a href="#" className="counter-area">{ele.postShares}</a></td>
                                    <td><div className="d-flex"><a href="edit-campaign.html" className="btn btn-icon" data-toggle="tooltip" data-placement="top" title="Edit"><i className="feather icon-edit"></i></a>&nbsp;&nbsp;<a href="view-campaign.html" className="btn btn-icon" data-toggle="tooltip" data-placement="top" title="View"><i className="feather icon-eye"></i></a>&nbsp;&nbsp;<a href="#" data-toggle="modal" data-target="#default1" className="btn btn-icon"><span data-toggle="tooltip" data-placement="top" title="Delete"><i className="feather icon-trash"></i></span></a></div></td>
                                  </tr>
                                })}
                              </tbody>
                            </table>
                          </div></div>
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
  );
}

export default AdminCampaign;
