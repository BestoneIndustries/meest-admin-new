import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

function AnnouncementView(props) {

  const [by,setBy] = useState('');
  const [type,setType] = useState('');
  const [date, setDate] = useState('');
  const [time,setTime] = useState('');
  const [status,setStatus] = useState('');

  useEffect(()=>{
    console.log(props.location.announcementData);
    if(props && props.location && props.location.announcementData){
      const {type,date,time,addedBy,status} = props.location.announcementData;
      setBy(addedBy || 'Admin');
      setStatus(status);
      setType(type);
      setDate(date);
      setTime(time);
    }
  },[])
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
                      <Link to="/">Announcement </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Announcement Details
                    </li>
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
                            <h4 className="card-title">Announcement Details</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div className="row">
                                  <div className="col-md-6">
                                    <fieldset className="form-group">
                                      <label>Announcement By</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Admin"
                                        value={by}
                                        disabled
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <fieldset className="form-group">
                                      <label>Announcement Date</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="02/08/2020"
                                        value={date}
                                        disabled
                                      />
                                    </fieldset>
                                  </div>

                                  <div className="col-md-6">
                                    <fieldset className="form-group">
                                      <label>Announcement Time</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="11:30 PM"
                                        value={time}
                                        disabled
                                      />
                                    </fieldset>
                                    <fieldset className="form-group">
                                      <label>Status</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Active"
                                        value={status}
                                        disabled
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <fieldset className="form-group">
                                      <label>Announcement Type</label>
                                      <textarea
                                        className="form-control"
                                        id="basicTextarea"
                                        rows="3"
                                        placeholder="Changes to the Board"
                                        value={type}
                                        disabled
                                      ></textarea>
                                    </fieldset>
                                  </div>
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
export default AnnouncementView;