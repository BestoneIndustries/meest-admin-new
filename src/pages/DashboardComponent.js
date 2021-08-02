import React from "react";
import { Link } from "react-router-dom";

const DashboardComponent = (props) => {
  const { title, icon, count, link } = props;
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <Link to={link}>
        <div className="card card_style">
          <div className="card-header align-items-start pb-0">
            <div className="col-4 mr-0">
              <div className="avatar bg-rgba-primary p-50 m-0">
                <div className="avatar-content" style={{width:"20px",height:"20px"}}>
            
                  <i  className={icon}></i>
                
                </div>
              </div>
            </div>
            <div className="col-8 ml-0">
              <h2 className="text-bold-700 mb-25" style={{fontSize:"18px"}}>{count}</h2>
              <p style={{fontSize:"12px"}} className="mb-1">{title}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default DashboardComponent;
