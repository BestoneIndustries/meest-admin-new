import React from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

export default function BackupSQLNFiles() {
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
                    <li className="breadcrumb-item active">
                      Backup SQL &amp; Files
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
                        <h4 className="card-title">Backup SQL &amp; Files</h4>
                        <a
                          type="button"
                          className="btn mt-2 btn-primary shadow waves-effect waves-light"
                          href=""
                        >
                          Create New Full Backup
                        </a>
                      </div>
                    </div>
                    <p className="mb-0 pl-2 pt-2">
                      Please note that it may take several minutes.
                    </p>
                    <div className="card-content">
                      <div className="card-body card-dashboard">
                        <div className="back-content">
                          <p>
                            <strong>
                              Last Backup: <span>00-00-0000</span>
                            </strong>
                          </p>
                          <p>
                            <strong>
                              Backups directory: <span>./script_backups/ </span>
                            </strong>
                          </p>
                          <p>
                            <strong>
                              Backup type:{" "}
                              <span>
                                all files including ./upload folder and full
                                backup of your database.
                              </span>
                            </strong>
                          </p>
                          <p>
                            <strong>
                              It's recommended to download the backups via FTP.
                            </strong>
                          </p>
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
