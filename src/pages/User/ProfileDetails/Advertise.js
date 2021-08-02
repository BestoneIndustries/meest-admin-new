import React from "react";

export default function Advertise() {
  return (
    <>
      <div
        className="tab-pane"
        id="advertise"
        aria-labelledby="advertise-tab"
        role="tabpanel"
      >
        <div className="friend-list">
          <h3>Advertise List</h3>
          <div
            id="DataTables_Table_0_wrapper"
            className="dataTables_wrapper dt-bootstrap4"
          >
            No Advertise
            {/* <div className="row mb-2" style={{ alignItems: "center" }}>
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
            </div>
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
                        <th data-field="id">Advertisement ID</th>
                        <th data-field="fieldname" data-editable="true">
                          Image
                        </th>
                        <th data-field="fieldname" data-editable="true">
                          Advertisement Type
                        </th>
                        <th data-field="start-date" data-editable="true">
                          Start Date
                        </th>
                        <th data-field="end-date" data-editable="true">
                          End Date
                        </th>
                        <th data-field="length" data-editable="true">
                          Description
                        </th>
                        <th data-field="placement" data-editable="true">
                          Status
                        </th>
                        <th data-field="action">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>7867868886</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Video Ads</td>
                        <td>10/08/2020</td>
                        <td>10/09/2020</td>
                        <td>The Hindu</td>
                        <td>
                          <label className="switch offer">
                            <input type="checkbox" checked />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td>
                          <div className="actions action-btns">
                            <div className="btn-group dropdown actions-dropodown">
                              <button
                                type="button"
                                className="btn btn-white px-1 py-1 dropdown-toggle waves-effect waves-light"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="feather icon-sliders"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                x-placement="top-end"
                                style={{
                                  position: "absolute",
                                  willChange: "transform",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translate3d(-9px, -16px, 0px)",
                                }}
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-eye"></i>View Advertise
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-ban"></i>Block
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-save"></i>
                                  Report
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>7867868886</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Product Placement</td>
                        <td>10/08/2020</td>
                        <td>10/09/2020</td>
                        <td>The Hindu</td>
                        <td>
                          <label className="switch offer">
                            <input type="checkbox" checked />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td>
                          <div className="actions action-btns">
                            <div className="btn-group dropdown actions-dropodown">
                              <button
                                type="button"
                                className="btn btn-white px-1 py-1 dropdown-toggle waves-effect waves-light"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="feather icon-sliders"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                x-placement="top-end"
                                style={{
                                  position: "absolute",
                                  willChange: "transform",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translate3d(-9px, -16px, 0px)",
                                }}
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-eye"></i>View Advertise
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-ban"></i>Block
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-save"></i>
                                  Report
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>7867868886</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Video Ads</td>
                        <td>10/08/2020</td>
                        <td>10/09/2020</td>
                        <td>The Hindu</td>
                        <td>
                          <label className="switch offer">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td>
                          <div className="actions action-btns">
                            <div className="btn-group dropdown actions-dropodown">
                              <button
                                type="button"
                                className="btn btn-white px-1 py-1 dropdown-toggle waves-effect waves-light"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="feather icon-sliders"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                x-placement="top-end"
                                style={{
                                  position: "absolute",
                                  willChange: "transform",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translate3d(-9px, -16px, 0px)",
                                }}
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-eye"></i>View Advertise
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-ban"></i>Block
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-save"></i>
                                  Report
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>7867868886</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Video Ads</td>
                        <td>10/08/2020</td>
                        <td>10/09/2020</td>
                        <td>The Hindu</td>
                        <td>
                          <label className="switch offer">
                            <input type="checkbox" checked />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td>
                          <div className="actions action-btns">
                            <div className="btn-group dropdown actions-dropodown">
                              <button
                                type="button"
                                className="btn btn-white px-1 py-1 dropdown-toggle waves-effect waves-light"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="feather icon-sliders"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                x-placement="top-end"
                                style={{
                                  position: "absolute",
                                  willChange: "transform",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translate3d(-9px, -16px, 0px)",
                                }}
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-eye"></i>View Advertise
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-ban"></i>Block
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-save"></i>
                                  Report
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>7867868886</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Video Ads</td>
                        <td>10/08/2020</td>
                        <td>10/09/2020</td>
                        <td>The Hindu</td>
                        <td>
                          <label className="switch offer">
                            <input type="checkbox" checked />
                            <span className="slider round"></span>
                          </label>
                        </td>
                        <td>
                          <div className="actions action-btns">
                            <div className="btn-group dropdown actions-dropodown">
                              <button
                                type="button"
                                className="btn btn-white px-1 py-1 dropdown-toggle waves-effect waves-light"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i className="feather icon-sliders"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-right"
                                x-placement="top-end"
                                style={{
                                  position: "absolute",
                                  willChange: "transform",
                                  top: "0px",
                                  left: "0px",
                                  transform: "translate3d(-9px, -16px, 0px)",
                                }}
                              >
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-eye"></i>View Advertise
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="fa fa-ban"></i>Block
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-save"></i>
                                  Report
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
           */}
          </div>
        </div>
      </div>
    </>
  );
}
