import React from "react";

export default function TransactionHistory() {
  return (
    <>
      <div
        className="tab-pane"
        id="transaction-history"
        aria-labelledby="transaction-history-tab"
        role="tabpanel"
      >
        <div className="friend-list">
          <h3>Transaction History</h3>
          <div
            id="DataTables_Table_0_wrapper"
            className="dataTables_wrapper dt-bootstrap4"
          >
            No Transaction History
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
                        <th data-field="id">Transaction ID</th>
                        <th data-field="image">User Image</th>
                        <th data-field="fieldname" data-editable="true">
                          User Name
                        </th>
                        <th data-field="amount" data-editable="true">
                          Amount
                        </th>
                        <th data-field="date" data-editable="true">
                          Date
                        </th>
                        <th data-field="placement" data-editable="true">
                          Status
                        </th>
                        <th data-field="action">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>5446554555</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Sandeep Goyal</td>
                        <td>Rs 500</td>
                        <td>10/08/2020 - 05:30 AM</td>
                        <td>
                          <p className="activ-bg">Paid</p>
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
                                  <i className="fa fa-eye"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-trash"></i>
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5446554555</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Sandeep Goyal</td>
                        <td>Rs 500</td>
                        <td>10/08/2020 - 05:30 AM</td>
                        <td>
                          <p className="activ-bg">Paid</p>
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
                                  <i className="fa fa-eye"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-trash"></i>
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5446554555</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Sandeep Goyal</td>
                        <td>Rs 500</td>
                        <td>10/08/2020 - 05:30 AM</td>
                        <td>
                          <p className="activ-bg">Paid</p>
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
                                  <i className="fa fa-eye"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-trash"></i>
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5446554555</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Sandeep Goyal</td>
                        <td>Rs 500</td>
                        <td>10/08/2020 - 05:30 AM</td>
                        <td>
                          <p className="activ-bg">Paid</p>
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
                                  <i className="fa fa-eye"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-trash"></i>
                                  Delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5446554555</td>
                        <td>
                          <img
                            className="user-avatar"
                            src="app-assets/images/icons/d-avatar.jpg"
                          />
                        </td>
                        <td>Sandeep Goyal</td>
                        <td>Rs 500</td>
                        <td>10/08/2020 - 05:30 AM</td>
                        <td>
                          <p className="activ-bg">Paid</p>
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
                                  <i className="fa fa-eye"></i>View
                                </a>
                                <a className="dropdown-item" href="#">
                                  <i className="feather icon-trash"></i>
                                  Delete
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
