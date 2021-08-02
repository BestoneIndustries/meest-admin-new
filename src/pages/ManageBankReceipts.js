import React, { useEffect } from "react";

import Footer from "../components/Footer";

export default function ManageBankReceipts() {
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
                    <li className="breadcrumb-item active">
                      <a href="#">Manage bank receipts</a>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-primary p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-check text-primary font-medium-5"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">539</h2>
                        <p className="mb-1">Approved</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                  <div className="card">
                    <div className="card-header align-items-start pb-0">
                      <div className="col-4 mr-0">
                        <div className="avatar bg-rgba-warning p-50 m-0">
                          <div className="avatar-content">
                            <i className="feather icon-cut text-warning font-medium-5">
                              X
                            </i>
                          </div>
                        </div>{" "}
                      </div>
                      <div className="col-8 ml-0">
                        <h2 className="text-bold-700 mb-25">2</h2>
                        <p className="mb-1">Disapproved</p>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Manage bank receipts</h4>
                      </div>
                    </div>

                    <div className="card-content card-body">
                      <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap4"
                      >
                        <div className="row mb-2" style={{ alignItems: "center" }}>
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
                          <div className="col-12 col-sm-6 col-md-3 mtop-r1">
                            <div className="dropdown flot-rigt">
                              <button
                                onClick={myFunction}
                                className="btn btn-primary waves-effect waves-light dropbtn"
                              >
                                Bulk Option
                              </button>
                              <div id="myDropdown" className="dropdown-content">
                                <a href="#">Delete</a>
                                <a href="#">Download</a>
                                <a href="#">Export as CSV</a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="table-responsive">
                          <table className="table table-hover table-striped mb-0">
                            <tbody>
                              <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="card">
                                    <div className="p-1 bg-grey">
                                      <div className="align-items-center bodr-b">
                                        <div className="user-page-info">
                                          <h6>
                                            {" "}
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />{" "}
                                            Osarieme OUMWEN{" "}
                                          </h6>
                                        </div>
                                      </div>

                                      <img
                                        className="img-fluid card-img-top rounded-sm mb-2"
                                        src="app-assets/images/logo/b-r.jpg"
                                        alt="avtar img holder"
                                      />
                                      <p style={{ textAlign: "center" }}>
                                        Vip package = <b>$259</b>
                                      </p>
                                      <div className="d-flex justify-content-start align-items-center mb-1">
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s flot-rigt btn btn-danger waves-effect waves-light"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s float-right btn btn-success waves-effect waves-light"
                                          >
                                            Approve
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="card">
                                    <div className="p-1">
                                      <div className="align-items-center bodr-b">
                                        <div className="user-page-info">
                                          <h6>
                                            {" "}
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />{" "}
                                            Rehmanii{" "}
                                          </h6>
                                        </div>
                                      </div>

                                      <img
                                        className="img-fluid card-img-top rounded-sm mb-2"
                                        src="app-assets/images/logo/b-r.jpg"
                                        alt="avtar img holder"
                                      />
                                      <p style={{ textAlign: "center" }}>
                                        Vip package = <b>$259</b>
                                      </p>
                                      <div className="d-flex justify-content-start align-items-center mb-1">
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s flot-rigt btn btn-danger waves-effect waves-light"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s float-right btn btn-success waves-effect waves-light"
                                          >
                                            Approve
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="card">
                                    <div className="p-1 bg-grey">
                                      <div className="align-items-center bodr-b">
                                        <div className="user-page-info">
                                          <h6>
                                            {" "}
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />{" "}
                                            Shravan{" "}
                                          </h6>
                                        </div>
                                      </div>

                                      <img
                                        className="img-fluid card-img-top rounded-sm mb-2"
                                        src="app-assets/images/logo/b-r.jpg"
                                        alt="avtar img holder"
                                      />
                                      <p style={{ textAlign: "center" }}>
                                        Vip package = <b>$259</b>
                                      </p>
                                      <div className="d-flex justify-content-start align-items-center mb-1">
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s flot-rigt btn btn-danger waves-effect waves-light"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s float-right btn btn-success waves-effect waves-light"
                                          >
                                            Approve
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="card">
                                    <div className="p-1">
                                      <div className="align-items-center bodr-b">
                                        <div className="user-page-info">
                                          <h6>
                                            {" "}
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />{" "}
                                            Test Test{" "}
                                          </h6>
                                        </div>
                                      </div>

                                      <img
                                        className="img-fluid card-img-top rounded-sm mb-2"
                                        src="app-assets/images/logo/b-r.jpg"
                                        alt="avtar img holder"
                                      />
                                      <p style={{ textAlign: "center" }}>
                                        Vip package = <b>$259</b>
                                      </p>
                                      <div className="d-flex justify-content-start align-items-center mb-1">
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s flot-rigt btn btn-danger waves-effect waves-light"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s float-right btn btn-success waves-effect waves-light"
                                          >
                                            Approve
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="card">
                                    <div className="p-1 bg-grey">
                                      <div className="align-items-center bodr-b">
                                        <div className="user-page-info">
                                          <h6>
                                            {" "}
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />{" "}
                                            Osarieme OUMWEN{" "}
                                          </h6>
                                        </div>
                                      </div>

                                      <img
                                        className="img-fluid card-img-top rounded-sm mb-2"
                                        src="app-assets/images/logo/b-r.jpg"
                                        alt="avtar img holder"
                                      />
                                      <p style={{ textAlign: "center" }}>
                                        Vip package = <b>$259</b>
                                      </p>
                                      <div className="d-flex justify-content-start align-items-center mb-1">
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s flot-rigt btn btn-danger waves-effect waves-light"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s float-right btn btn-success waves-effect waves-light"
                                          >
                                            Approve
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="card">
                                    <div className="p-1">
                                      <div className="align-items-center bodr-b">
                                        <div className="user-page-info">
                                          <h6>
                                            {" "}
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />{" "}
                                            Rehmanii{" "}
                                          </h6>
                                        </div>
                                      </div>

                                      <img
                                        className="img-fluid card-img-top rounded-sm mb-2"
                                        src="app-assets/images/logo/b-r.jpg"
                                        alt="avtar img holder"
                                      />
                                      <p style={{ textAlign: "center" }}>
                                        Vip package = <b>$259</b>
                                      </p>
                                      <div className="d-flex justify-content-start align-items-center mb-1">
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s flot-rigt btn btn-danger waves-effect waves-light"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s float-right btn btn-success waves-effect waves-light"
                                          >
                                            Approve
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="card">
                                    <div className="p-1 bg-grey">
                                      <div className="align-items-center bodr-b">
                                        <div className="user-page-info">
                                          <h6>
                                            {" "}
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />{" "}
                                            Shravan{" "}
                                          </h6>
                                        </div>
                                      </div>

                                      <img
                                        className="img-fluid card-img-top rounded-sm mb-2"
                                        src="app-assets/images/logo/b-r.jpg"
                                        alt="avtar img holder"
                                      />
                                      <p style={{ textAlign: "center" }}>
                                        Vip package = <b>$259</b>
                                      </p>
                                      <div className="d-flex justify-content-start align-items-center mb-1">
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s flot-rigt btn btn-danger waves-effect waves-light"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s float-right btn btn-success waves-effect waves-light"
                                          >
                                            Approve
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                  <div className="card">
                                    <div className="p-1">
                                      <div className="align-items-center bodr-b">
                                        <div className="user-page-info">
                                          <h6>
                                            {" "}
                                            <img
                                              className="setting-avatar"
                                              src="app-assets/images/icons/d-avatar.jpg"
                                            />{" "}
                                            Test Test{" "}
                                          </h6>
                                        </div>
                                      </div>

                                      <img
                                        className="img-fluid card-img-top rounded-sm mb-2"
                                        src="app-assets/images/logo/b-r.jpg"
                                        alt="avtar img holder"
                                      />
                                      <p style={{ textAlign: "center" }}>
                                        Vip package = <b>$259</b>
                                      </p>
                                      <div className="d-flex justify-content-start align-items-center mb-1">
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s flot-rigt btn btn-danger waves-effect waves-light"
                                          >
                                            Delete
                                          </a>
                                        </div>
                                        <div className="col-md-6 col-6">
                                          <a
                                            href="#"
                                            className="font-s float-right btn btn-success waves-effect waves-light"
                                          >
                                            Approve
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </tbody>
                          </table>
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
 