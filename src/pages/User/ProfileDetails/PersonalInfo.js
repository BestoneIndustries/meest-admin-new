import React from "react";

import * as moment from "moment";

export default function PersonalInfo({ userInfo }) {
  console.log("PersonalInfo -> userInfo", userInfo);

  return (
    <>
      <div
        className="tab-pane"
        id="personal-info"
        aria-labelledby="personal-info-tab"
        role="tabpanel"
      >
        <div className="friend-list">
          <h3>Personal Info</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="personal-info">
              <div className="table-responsive">
                <table className= "table table-bordered">
                  <tr className= "table-light">
                    <th>Name</th>
                    <td>
                      {userInfo && userInfo.firstName}{" "}
                      {userInfo && userInfo.lastName}
                    </td>
                  </tr>
                  {/* <tr>
                    <th>Home Town</th>
                    <td>{userInfo && userInfo.homeTown || "-"}</td>
                  </tr>
                  <tr>
                    <th>Lives in</th>
                    <td>{userInfo && userInfo.livesIn || "-"}</td>
                  </tr> */}
                  <tr className= "table-primary">
                    <th>Date of Birth</th>
                    <td>
                      {(userInfo &&
                        moment(userInfo.dob).format("Do MMM YYYY")) ||
                        "-"}
                    </td>
                  </tr>
                  <tr className= "table-light">
                    <th>Email</th>
                    <td>{userInfo && userInfo.email}</td>
                  </tr>
                  <tr className= "table-primary">
                    <th>Phone No</th>
                    <td>{userInfo && userInfo.mobile}</td>
                  </tr>
                  {/* <tr>
                    <th>Work at</th>
                    <td>{userInfo && userInfo.workAt || "-"}</td>
                  </tr>
                  <tr>
                    <th>Marital Status</th>
                    <td>{userInfo && userInfo.maritalStatus || "-"}</td>
                  </tr> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
