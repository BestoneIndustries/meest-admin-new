import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";

function AdvDashboard() {
  const [allCampaign, setAllCampaign] = useState([]);
  const [cmapaignCount, setCampaignCount] = useState("");
  const [showValue, setShowValue] = useState(10);
  const [showPage, setShowPage] = useState(0);
  const [showCamp, setShowCamp] = useState("");
  const [showPay, setShowPay] = useState("");
  const [showAdmin, setShowAdmin] = useState("");
  const [showPause, setShowPause] = useState("");

  const getAllCampaing = async (showVal,showPag,showCamp,showPay,showAdmin,showPause) => {
    const data = await postData("/campaign/getAll",{
      campaignStatus:showCamp,
      paymentStatus:showPay,
      adminBlocked:showAdmin,
      isPaused:showPause,
    });
    setCampaignCount(data.data.count);
    setShowValue(showVal)
    setShowPage(showPag)
    setShowCamp(showCamp)
    setShowPay(showPay)
    setShowAdmin(showAdmin)
    setShowPause(showPause)
    const filterData = data.data.rows;
    const afterFilter = filterData.slice(showPag*showVal, showVal+(showPag*showVal));
    console.log("Campaigen Data  ", afterFilter)
    console.log("Campaigen Count  ", data.data.count)
    afterFilter.map((e,i)=>{
      if(!Array.isArray(e.location))e.location=[]
    })
    setAllCampaign(afterFilter);
  };

  const updateCampaignStatus = async (camp) => {
    const body = {
      isApproved:true,
      id: camp.id,
    }
    const startDate = new Date(camp.startDate)
    const endDate = new Date(camp.endDate)
    const currdate = new Date() 
    if(currdate > startDate && currdate < endDate){
      body.campaignStatus= "Running"
    }
    console.log(body)
    const updateStatus = await postData("/campaign/update",body);
    getAllCampaing(showValue,showPage,showCamp,showPay,showAdmin,showPause);
  };

  useEffect(() => {
    getAllCampaing(showValue,showPage,showCamp,showPay,showAdmin,showPause);
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
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-user text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">{cmapaignCount}</h2>
                        <p className="mb-1">Total Advertisement</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-user text-warning font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">
                          {allCampaign.filter((campaign) => campaign.status === true).length}
                        </h2>
                        <p className="mb-1">Active Advertisement</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-users text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">
                          {
                            allCampaign.filter(
                              (campaign) => campaign.status === false
                            ).length
                          }
                        </h2>
                        <p className="mb-1">Inactive Advertisement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Advertisement Dashboard</h4>
                      </div>
                    </div>
                    <div className="card-content card-body">
                      <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap4"
                      >
                        <div  className="row mb-2">
                         </div>
                        <div className="row mb-2" style={{justifyContent:"space-between"}} >
                          <div className="">
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
                                  onChange={(e) => getAllCampaing(parseInt(e.target.value),showPage,showCamp,showPay,showAdmin,showPause)}
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
                          <div className="">
                            <div
                              className="dataTables_length float-right"
                              id="DataTables_Table_0_length"
                            >
                              <label>
                                Status {"   "}
                                <select
                                  name="DataTables_Table_0_length"
                                  aria-controls="DataTables_Table_0"
                                  className="custom-select  form-control "
                                  onChange={(e) => getAllCampaing(showValue, 0, e.target.value,showPay,showAdmin,showPause)}
                                >
                                  <option value="">All</option>
                                  <option value="Drafted">Drafted</option>
                                  <option value="Completed">Completed</option>
                                  <option value="Running">Running</option>
                                </select>
                              </label>
                            </div>
                          </div>
                          <div className="">
                            <div
                              className="dataTables_length float-right"
                              id="DataTables_Table_0_length"
                            >
                              <label>
                                Payment{"   "}
                                <select
                                  name="DataTables_Table_0_length"
                                  aria-controls="DataTables_Table_0"
                                  className="custom-select  form-control "
                                  onChange={(e) => getAllCampaing(showValue, 0, showCamp,e.target.value,showAdmin,showPause)}
                                >
                                  <option value="">All</option>
                                  <option value="Success">Success</option>
                                  <option value="Pending">Pending</option>
                                  <option value="Failed">Failed</option>
                                </select>
                              </label>
                            </div>
                          </div>
                          <div className="">
                            <div
                              className="dataTables_length float-right"
                              id="DataTables_Table_0_length"
                            >
                              <label>
                                Admin Blocked {"   "}
                                <select
                                  name="DataTables_Table_0_length"
                                  aria-controls="DataTables_Table_0"
                                  className="custom-select  form-control "
                                  onChange={(e) => getAllCampaing(showValue, 0, showCamp,showPay,e.target.value,showPause)}
                                >
                                <option value="">All</option>
                                <option value={true}>Blocked</option>
                                <option value={false}>Not Blocked</option>
                                </select>
                              </label>
                            </div>
                          </div>
                          <div className="">
                            <div
                              className="dataTables_length float-right"
                              id="DataTables_Table_0_length"
                            >
                              <label>
                                Running{"   "}
                                <select
                                  name="DataTables_Table_0_length"
                                  aria-controls="DataTables_Table_0"
                                  className="custom-select  form-control "
                                  onChange={(e) => getAllCampaing(showValue, 0, showCamp,showPay,showAdmin,e.target.value)}
                                >
                                  <option value="">All</option>
                                <option value={true}>Paused</option>
                                <option value={false}>Not Paused</option>
                                </select>
                              </label>
                            </div>
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
                                <th data-field="id">ID</th>
                                <th data-field="userid" data-editable="true">
                                  User ID
                                </th>
                                <th data-field="type" data-editable="true">
                                  Title
                                </th>
                                <th
                                  data-field="campaign-source"
                                  data-editable="true"
                                >
                                  Status
                                </th>
                                <th data-field="type" data-editable="true">
                                  Type
                                </th>
                                <th data-field="audience" data-editable="true">
                                  Audience
                                </th>
                                <th
                                  data-field="performance"
                                  data-editable="true"
                                >
                                  Performance
                                </th>
                                <th data-field="budget" data-editable="true">
                                  Budget
                                </th>
                                <th data-field="action">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {allCampaign.map((campaign, id) => (
                                <tr key={id}>
                                  <td>{(id = id + 1)+(showPage*showValue)}</td>
                                  <td>
                                    {
                                      campaign.user &&
                                      (
                                        <div className="user-image-name">      
                                          <img
                                            className="setting-avatar"
                                            src={  campaign.user.displayPicture}
                                          />
                                          {campaign.user && campaign.user.username}    
                                        </div>
                                      )
                                    }
                                                               
                                  </td>

                                  <td>{campaign.campaignTitle}</td>
                                   <td>{campaign.campaignStatus}</td>
                                  <td>{campaign.campaignType}</td>
                                  <td style={{overflowWrap: "break-word"}}>
                                    Gender:{ "  "+campaign.gender.join(", ")}
                                    <br />
                                    
                                    <span data-toggle="tooltip"
                                          data-placement="top" title={campaign.location.join(", ")} >
                                         Location:{"  "+campaign.location.join(", ").substring(1, 15)}   
                                         {campaign.location.join(", ").length>15 && "..."}
                                    </span>
                                  </td>
                                  <td>{campaign.viewerCount}</td>
                                  <td>Rs.{campaign.dailyBudget}</td>
                                  <td>
                                    <div className="d-flex">
                                      <Link
                                        to={{
                                          pathname: "/View-Campaign",
                                          state: { id: campaign.id }
                                        }}
                                        className="btn btn-primary"
                                      >
                                        View
                                      </Link>
                                      &nbsp;&nbsp;
                                      {(campaign.campaignStatus.toLowerCase() === "pending for approval" || campaign.campaignStatus.toLowerCase() === "drafted") &&<button
                                        data-toggle="modal"
                                        data-target="#default1"
                                        className="btn"
                                        style={{"background-color":"#239B56",color:"white"}}
                                        onClick={(e) => updateCampaignStatus(campaign)}
                                      >
                                        Approve
                                      </button>
                                      }
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div style={{width:"100%"}}>
                            {
                              showPage>0?
                              (
                                <a 
                                  onClick={(e) =>{getAllCampaing(showValue,showPage-1,showCamp,showPay,showAdmin,showPause);}} 
                                  href={ showPage>1 &&("#")}>{"  "}&lt;&lt;</a>
                              ):(
                                <a></a>
                              )
                            }
                            <span>  Showing Page {showPage+1}  </span>
                            {
                              ((showPage+1)*showValue) <= cmapaignCount?
                              (
                              <a 
                                onClick={(e) =>{getAllCampaing(showValue,showPage+1,showCamp,showPay,showAdmin,showPause)}} 
                                href={ showPage>1 &&("#")}>{"  "}&gt;&gt;</a>
                              ):(
                                <a></a>
                              )
                            }
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
      <Footer />
      {/* <div
        className="modal fade text-left show"
        id="default1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel18"
        style={{
          paddingRight: "17px",
          display: "none",
        }}
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
                onClick={() => DelCampaign()}
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
      </div> */}
    </>
  );
}

export default AdvDashboard;
