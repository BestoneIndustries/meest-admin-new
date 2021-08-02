import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";
import { useHistory } from "react-router-dom";
import moment from "moment";

function ViewCampaign() {
const history = useHistory();
  const [campaignData, setCampaignData] = useState(null);


  const getCampaing = async (filter) => {
    const resData = await postData("/campaign/getCampaignById",{id:history.location.state.id});
    if (resData){

      var a = moment(new Date(resData.data.endDate));
      var b = moment(new Date(resData.data.startDate));
      
      var years = a.diff(b, 'year');
      b.add(years, 'years');
      
      var months = a.diff(b, 'months');
      b.add(months, 'months');
      
      var days = a.diff(b, 'days');
      if(days)resData.data.interval = days + ' days '
      if(months)resData.data.interval += months + ' months'
      if(years)resData.data.interval += years + ' years'

      if(!Array.isArray(resData.data.location))resData.data.location=[]
      if(!Array.isArray(resData.data.otherImageVideos))resData.data.otherImageVideos=[]
      var gender = []
      resData.data.gender.map((e,i)=>{
        gender.push( e.toLowerCase())
      })
      resData.data.gender = gender
      resData.data.startDate = moment(new Date(resData.data.startDate)).format("DD-MMMM-YYYY") 
      resData.data.endDate = moment(new Date(resData.data.endDate)).format("DD-MMMM-YYYY") 
      setCampaignData(resData.data);
    } 
    console.log("Campaigen Data  ", resData.data.gender)
  };

  useEffect(() => {
    if (history.location.state) {
      getCampaing(history.location.state.id);
    }
  }, []);
  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper">
        <div className="content-header row">
          <div className="content-header-left col-md-9 col-12 mb-2">
            <div className="row breadcrumbs-top">
              <div className="col-12">
                {/* <h2 className="content-header-title float-left mb-0">
                  Advertisement
                </h2> */}
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/Advertisement-Dashboard">Campaign</Link>
                    </li>
                    <li className="breadcrumb-item active">Campaign Details</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-body">
          {/* <!-- Form wizard with number tabs section start --> */}
          <section id="number-tabs">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header border-bottom">
                    <div className="col-12">
                      <h4 className="card-title">Campaign Details</h4>
                    </div>
                  </div>
                  <div className="card-content" id="card-content">
                    <div className="card-body">
                      {!campaignData && <span>Loading...</span>}
                      {campaignData && <form action="#">
                        <fieldset>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label for="firstName1">Campaign Name </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Campaign Name"
                                  disabled
                                  value={campaignData.name}
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {
                          campaignData && campaignData.otherImageVideos.map((ele, i) => {
                            if(ele.fileType.toLowerCase() === "video"){
                              return(
                                <div className="form-group">
                                  <label>Video : {ele.heading}</label>
                                  <div className="campaign-image">
                                    <iframe
                                      width="360"
                                      height="215"
                                      src={ele.fileUrl}
                                      frameborder="0"
                                      allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                </div>
                            )}
                            if(ele.fileType.toLowerCase() === "image"){
                              return(
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <label for="lastName1">Image</label>
                                    <div className="campaign-image">
                                      <a
                                        href={ele.fileUrl}
                                        data-lightbox="post-article-gallery"
                                        data-title=""
                                        className="link-preview"
                                        title="Adhaar Card"
                                      >
                                        <img
                                          className="setting-avatar1"
                                          src={ele.fileUrl}
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )
                            }
                          })
                        }
                        <fieldset>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label for="proposalTitle1">
                                  Campaign Title
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="mahindra"
                                  disabled
                                  value={campaignData.campaignTitle}
                                />
                              </div>
                              <div className="form-group">
                                <label for="jobtitle">Website url</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Website-Url"
                                  disabled
                                  value={campaignData.websiteUrl}
                                />
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label for="shortDescription1">
                                  Campaign Description :
                                </label>
                                <textarea
                                  name="shortDescription"
                                  id="shortDescription1"
                                  rows="5"
                                  className="form-control"
                                  placeholder="Lorem Ipsum has been the industry's"
                                  disabled
                                  value={campaignData.campaignText}
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label for="jobtitle">Start Date</label>
                                <input
                                  className="form-control pickadate"
                                  placeholder="Start Date"
                                  disabled
                                  value={campaignData.startDate}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label for="jobtitle">End Date</label>
                                <input
                                  className="form-control pickadate"
                                  placeholder="End Date"
                                  disabled
                                  value={campaignData.endDate}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label for="eventName1">Location</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="India"
                                  disabled
                                  id="eventName1"
                                  value={campaignData.location.join()}
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label for="eventLocation1">
                                  How many days you want to run your Campaign
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="30 days"
                                  disabled
                                  id="eventName1"
                                  value={campaignData.interval}
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="form-group">
                                <label for="eventLocation1">
                                  Campaign Budget Per Day
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Rs 10,000"
                                  disabled
                                  id="eventName1"
                                  value={campaignData.totalAmmount}
                                />
                              </div>

                              <div className="form-group">
                                <label for="eventLocation1">
                                  Estimated reach (will show count on the basis
                                  of registered audience )
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  disabled
                                  id="eventName1"
                                  value={campaignData.viewerCount}
                                />
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="form-group">
                                <label for="eventLocation1">Gender</label>
                                <ul className="list-unstyled mb-0">
                                  <li className="d-inline-block mr-2">
                                    <input
                                      type="radio"
                                      disabled
                                      checked={campaignData.gender.includes("male") ||campaignData.gender.includes("all") }
                                    />{" "}
                                    Male
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <input
                                      type="radio"
                                      disabled
                                      checked={campaignData.gender.includes("female")||campaignData.gender.includes("all")}
                                    />{" "}
                                    Female
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <input
                                      type="radio"
                                      disabled
                                      checked={campaignData.gender.includes("other") ||campaignData.gender.includes("all") }
                                    />{" "}
                                    Other
                                  </li>
                                </ul>
                              </div>
                              {/* <div className="form-group">
                                <label for="eventLocation1">Placement</label>
                                <ul className="list-unstyled mb-0">
                                  <li className="d-inline-block mr-2">
                                    <input
                                      type="radio"
                                      disabled
                                      className="active"
                                      name="status"
                                    />{" "}
                                    Post
                                  </li>
                                  <li className="d-inline-block mr-2">
                                    <input
                                      type="radio"
                                      disabled
                                      name="status"
                                    />{" "}
                                    Sidebar
                                  </li>
                                </ul>
                              </div> */}
                            </div>
                          </div>
                        </fieldset>
                      </form>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Form wizard with number tabs section end --> */}
        </div>
      </div>
    </div>
  );
}

export default ViewCampaign;
