import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData, postDataAll } from '../apicall/apiCall';

export default function ManageVerificationRequest() {  
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [selectState, setSelectState] = useState("")

  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  async function updateAdharSate(id,state) {
    const resData = await postData('/admin/updateAdharState',{
      id:id,
      isAdharVerified:state
    });
    getAllUsers(pageNumber,pageSize,selectState);
    console.log("fetchData -> updateAdharState", resData.data.isAdharVerified)
  }
  const getAllUsers = async (pgNum,pgSize,state) => {

    setPageSize(pgSize);
    setPageNumber(pgNum);
    setSelectState(state);
    var body={
      pageNumber:pgNum,
      pageSize: pgSize,
      isAdharVerified:state
    }
    const resData = await postData('/admin/adharVerificationUsers',body);
    console.log(resData)
    if (resData) setTableData(resData.data.rows)
  };
  var slideIndex = 1;

  

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    alert("dasd")
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    console.log("n:",n);
    console.log("slides.length:",slides.length);
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    // captionText.innerHTML = dots[slideIndex - 1].alt;
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
    getAllUsers(pageNumber,pageSize,selectState);
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
                      <Link to="/">User</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      Manage Verification Request
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              {/* <div className="card">
                <div className="card-header border-bottom">
                  <div className="col-12">
                    <h4 className="card-title">Filters</h4>
                  </div>
                  <a className="heading-elements-toggle">
                    <i className="fa fa-ellipsis-v font-medium-3"></i>
                  </a>
                  <div className="heading-elements">
                    <ul className="list-inline mb-0">
                      <li>
                        <a data-action="collapse">
                          <i className="feather icon-chevron-down"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="">
                          <i className="feather icon-rotate-cw users-data-filter"></i>
                        </a>
                      </li>
                      <li>
                        <a data-action="close">
                          <i className="feather icon-x"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-content collapse show">
                  <div className="card-body">
                    <div className="users-list-filter">
                      <form>
                        <div className="row" style={{ alignItems: "center" }}>
                          <div className="col-12 col-sm-6 col-lg-3">
                            <label for="users-list-verified">User Name</label>
                            <fieldset className="form-group">
                              <input
                                type="text"
                                placeholder=""
                                className="form-control input-style"
                              />
                            </fieldset>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-3">
                            <label for="users-list-role">State</label>
                            <fieldset className="form-group">
                              <select
                                className="form-control"
                                id="users-list-role"
                              >
                                <option></option>
                                <option value="">Punjab</option>
                                <option value="user">Delhi</option>
                                <option value="staff">Mumbai</option>
                              </select>
                            </fieldset>
                          </div>
                          <div className="col-12 col-sm-6 col-lg-3">
                            <label for="users-list-status">Source</label>
                            <fieldset className="form-group">
                              <select
                                className="form-control"
                                id="users-list-status"
                              >
                                <option></option>
                                <option value="">IOS</option>
                                <option value="Active">Android</option>
                              </select>
                            </fieldset>
                          </div>

                          <div className="col-12 col-sm-6 col-lg-3">
                            <a
                              href="#"
                              className="float-right btn btn-primary shadow full-wdth"
                            >
                              Filter{" "}
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row" id="table-hover-row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header border-bottom">
                      <div className="col-12">
                        <h4>Manage Verification Requests</h4>
                      </div>
                    </div>

                    <div className="card-content card-body">
                      <div
                        id="DataTables_Table_0_wrapper"
                        className="dataTables_wrapper dt-bootstrap4"
                      >
                        <div
                          className="row mb-2"
                          style={{ alignItems: "center" }}
                        >
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
                                  onChange={(e) =>{getAllUsers(1,parseInt(e.target.value),selectState)}}
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
                            <label>
                              Verification State -
                            </label>
                              <select
                                name="DataTables_Table_0_length"
                                aria-controls="DataTables_Table_0"
                                className="custom-select custom-select-sm form-control form-control-sm"
                                onChange={(e)=>{
                                  console.log(e.currentTarget.value)
                                  getAllUsers(1,pageSize,e.currentTarget.value)
                                }}
                              >
                                <option value="">All</option>
                                <option value="0">Pending</option>
                                <option value="1">Verified</option>
                                <option value="-1">Rejected</option>
                              </select>
                            </div>
                          </div>
                          {/* <div className="col-12 col-sm-6 col-md-3 mtop-r1">
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
                          </div> */}
                        </div>

                        <div className="table-responsive">
                          <table
                            className="table table-hover table-bordered mb-0"
                            id="table"
                            role="grid"
                            data-toggle="table"
                            data-pagination="false"
                            data-resizable="true"
                            data-click-to-select="false"
                          >
                            <thead className="thead-light">
                              <tr>
                                <th data-field="id">ID</th>
                                <th data-field="keyname" data-editable="true" style={{width:"10%"}}>
                                  User Name / Email
                                </th>
                                <th data-field="value" data-editable="true">
                                  Mobile
                                </th>
                                <th data-field="value" data-editable="true">
                                  DOB
                                </th>
                                <th data-field="value" data-editable="true">
                                  Adhaar Number
                                </th>
                                <th data-field="value" data-editable="true">
                                  Adhaar Image
                                </th>
                                <th data-field="value" data-editable="true">
                                  State
                                </th>
                                <th data-field="action">Verify</th>
                                <th data-field="action">Reject</th>
                              </tr>
                            </thead>
                            <tbody>
                              
                            {tableData.map((item, index) => {
                                  return (
                               <tr>
                               <td>{(index + 1+(pageSize*(pageNumber-1)))}</td>
                               
                               <td style={{width:"10%"}}>
                                 <div className="user-image-name">
                                   <img
                                     className="setting-avatar"
                                     src={item.displayPicture}
                                   />
                                   <Link
                                     to={{ pathname: "/Profile-Details", state: { id: item.id } }}
                                     className="user-name"
                                   >
                                     {" "}
                                     {item.username}
                                   </Link>
                                 </div>
                               </td>
                                <td>{item.mobile}</td>
                                <td>
                                  {item.dob.split("-")[2]}
                                  <sup>th</sup>{" "}
                                  {`${months[item.dob.split("-")[1] - 1]
                                    } ${item.dob.split("-")[0]}`}
                                </td>
                                <td>1234 XXXX XXXX
                                {item.adharNumber}
                                </td>
                                <td>
                                        <a
                                          href="app-assets/images/adhaar-card/pic-01.jpg"
                                          data-lightbox="post-article-gallery"
                                          data-title=""
                                          className="link-preview"
                                          title="Adhaar Card"
                                        >
                                          <img
                                            className="setting-avatar1"
                                            onClick={() => currentSlide(1)}
                                            src="app-assets/images/adhaar-card/pic-01.jpg"
                                          />
                                        </a>
                                        <a
                                          href="app-assets/images/adhaar-card/pic-02.png"
                                          data-lightbox="post-article-gallery"
                                          data-title=""
                                          className="link-preview"
                                          title="Adhaar Card"
                                        >
                                          <img
                                            className="setting-avatar1"
                                            onClick={() => currentSlide(3)}
                                            src="app-assets/images/adhaar-card/pic-02.png"
                                          />
                                        </a>
                                      </td>
                                <td>
                                  {
                                    item.isAdharVerified===-1 && ( 
                                      <svg color="red" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM4 12C4 10.154 4.634 8.458 5.688 7.103L16.897 18.312C15.499 19.4058 13.7751 20.0001 12 20C7.589 20 4 16.411 4 12ZM18.312 16.897L7.103 5.688C8.50105 4.5943 10.225 4.00006 12 4C16.411 4 20 7.589 20 12C19.9995 13.775 19.4053 15.4987 18.312 16.897Z" fill="#af2d2d"/>
                                      </svg>
                                    )
                                  }
                                  {
                                    !item.isAdharVerified && ( 
                                      <svg color="yellow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.625C6.82233 2.625 2.625 6.82233 2.625 12C2.625 17.1777 6.82233 21.375 12 21.375C17.1777 21.375 21.375 17.1777 21.375 12C21.375 6.82233 17.1777 2.625 12 2.625ZM0.375 12C0.375 5.57969 5.57969 0.375 12 0.375C18.4203 0.375 23.625 5.57969 23.625 12C23.625 18.4203 18.4203 23.625 12 23.625C5.57969 23.625 0.375 18.4203 0.375 12Z" fill="#ffa62b"/>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9545 4.8295C12.5758 4.8295 13.0795 5.33318 13.0795 5.9545V11.4885L15.75 14.159C16.1893 14.5983 16.1893 15.3107 15.75 15.75C15.3107 16.1893 14.5983 16.1893 14.159 15.75L11.159 12.75C10.948 12.539 10.8295 12.2529 10.8295 11.9545V5.9545C10.8295 5.33318 11.3332 4.8295 11.9545 4.8295Z" fill="#ffa62b"/>
                                      </svg>
                                    )
                                  }
                                  {
                                    item.isAdharVerified>0 && ( 
                                      <svg color="green" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3772 0.779621C13.6878 0.273443 12.8549 0.000488281 11.9997 0.000488281C11.1444 0.000488281 10.3115 0.273443 9.62218 0.779621L8.23018 1.79962C8.00092 1.96811 7.73437 2.07874 7.45318 2.12212L5.74468 2.38462C4.90006 2.51446 4.11885 2.91028 3.51459 3.51453C2.91034 4.11879 2.51453 4.9 2.38468 5.74462L2.12218 7.45462C2.0788 7.73581 1.96817 8.00236 1.79968 8.23162L0.779682 9.62362C0.273504 10.313 0.000549316 11.1459 0.000549316 12.0011C0.000549316 12.8564 0.273504 13.6893 0.779682 14.3786L1.79968 15.7706C1.96918 16.0001 2.07868 16.2656 2.12218 16.5476L2.38468 18.2546C2.51453 19.0992 2.91034 19.8805 3.51459 20.4847C4.11885 21.089 4.90006 21.4848 5.74468 21.6146L7.45168 21.8771C7.73218 21.9206 7.99918 22.0301 8.22868 22.1996L9.62068 23.2196C10.31 23.7258 11.1429 23.9988 11.9982 23.9988C12.8534 23.9988 13.6863 23.7258 14.3757 23.2196L15.7677 22.1996C15.9967 22.0307 16.2634 21.92 16.5447 21.8771L18.2517 21.6146C19.0968 21.485 19.8785 21.0891 20.4831 20.4845C21.0876 19.8799 21.4835 19.0982 21.6132 18.2531L21.8757 16.5461C21.9192 16.2656 22.0287 15.9986 22.1982 15.7691L23.2182 14.3771C23.7244 13.6878 23.9973 12.8549 23.9973 11.9996C23.9973 11.1444 23.7244 10.3115 23.2182 9.62212L22.1982 8.23012C22.0297 8.00083 21.9191 7.73429 21.8757 7.45312L21.6147 5.74462C21.4848 4.9 21.089 4.11879 20.4848 3.51453C19.8805 2.91028 19.0993 2.51446 18.2547 2.38462L16.5477 2.12212C16.2665 2.07869 16 1.96806 15.7707 1.79962L14.3772 0.779621ZM10.9542 2.59162C11.5767 2.13412 12.4242 2.13412 13.0452 2.59162L14.4372 3.61162C14.9592 3.99562 15.5652 4.24612 16.2072 4.34512L17.9112 4.60612C18.6762 4.72312 19.2747 5.32312 19.3917 6.08662L19.6527 7.79212C19.7517 8.43262 20.0022 9.03862 20.3862 9.56212L21.4062 10.9526C21.8637 11.5751 21.8637 12.4226 21.4062 13.0436L20.3862 14.4356C20.0025 14.9578 19.7508 15.5651 19.6527 16.2056L19.3917 17.9096C19.3349 18.282 19.1607 18.6264 18.8943 18.8928C18.628 19.1591 18.2835 19.3334 17.9112 19.3901L16.2057 19.6511C15.5652 19.7493 14.9579 20.0009 14.4357 20.3846L13.0452 21.4046C12.4227 21.8621 11.5752 21.8621 10.9542 21.4046L9.56218 20.3846C9.03998 20.0009 8.43271 19.7493 7.79218 19.6511L6.08818 19.3901C5.71584 19.3334 5.37137 19.1591 5.10504 18.8928C4.83871 18.6264 4.66445 18.282 4.60768 17.9096L4.34668 16.2041C4.24853 15.5636 3.99687 14.9563 3.61318 14.4341L2.59318 13.0436C2.37067 12.7404 2.25069 12.3742 2.25069 11.9981C2.25069 11.6221 2.37067 11.2558 2.59318 10.9526L3.61318 9.56062C3.99718 9.03862 4.24768 8.43262 4.34668 7.79062L4.60768 6.08662C4.72468 5.32162 5.32468 4.72312 6.08818 4.60612L7.79368 4.34512C8.43421 4.24696 9.04148 3.99531 9.56368 3.61162L10.9542 2.59162V2.59162ZM16.9197 10.1696C17.1184 9.95636 17.2266 9.67429 17.2214 9.38284C17.2163 9.09139 17.0982 8.81331 16.8921 8.60719C16.686 8.40107 16.4079 8.283 16.1165 8.27786C15.825 8.27272 15.5429 8.3809 15.3297 8.57962L10.4997 13.4096L8.66968 11.5796C8.45642 11.3809 8.17435 11.2727 7.8829 11.2779C7.59145 11.283 7.31337 11.4011 7.10725 11.6072C6.90113 11.8133 6.78306 12.0914 6.77792 12.3828C6.77278 12.6743 6.88096 12.9564 7.07968 13.1696L9.70468 15.7946C9.91562 16.0053 10.2016 16.1236 10.4997 16.1236C10.7978 16.1236 11.0837 16.0053 11.2947 15.7946L16.9197 10.1696V10.1696Z" fill="#03c4a1"/>
                                      </svg>
                                    )
                                  }
                                </td>
                                <td>
                                  { !(item.isAdharVerified >0) && 
                                  <a
                                    href="#" 
                                    className="btn btn-primary"
                                    onClick={()=>updateAdharSate(item.id,1)}
                                  >
                                    Verify
                                  </a>
                                  }
                                  </td>
                                  <td>
                                  { !(item.isAdharVerified ===-1) &&<a
                                    href="#"
                                    className="btn btn-danger"
                                    onClick={()=>updateAdharSate(item.id,-1)}
                                  >
                                    Reject
                                  </a>}
                                </td>
                              </tr>
                             );
                            })}
                            </tbody>
                          </table>
                          <div style={{width:"100%"}}>
                            {
                              pageNumber>1?
                              (
                                <a onClick={(e) =>{getAllUsers(pageNumber-1,pageSize,selectState)}} href={ pageNumber>1 &&("#")}>&lt;&lt;</a>
                              ):(
                                <a>&lt;&lt;</a>
                              )
                            }
                            <span>  Showing Page {pageNumber}  </span>
                            {
                              tableData.length >= pageSize?
                              (
                                <a onClick={(e) =>{getAllUsers(pageNumber+1,pageSize,selectState)}} href={ pageNumber>1 &&("#")}>&gt;&gt;</a>
                              ):(
                                <a>&gt;&gt;</a>
                              )
                            }
                          </div>
                          <br />
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
      <div
        className="modal fade text-left show"
        id="mydocument"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel18"
        style={{ paddingRight: "17px", display: "none" }}
        aria-modal="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="mySlides">
                <img
                  src="app-assets/images/icons/d-avatar.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="mySlides">
                <img
                  src="app-assets/images/icons/d-page.jpg"
                  style={{ width: "100%" }}
                />
              </div>
              <a className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </a>
              <a className="next" onClick={() => plusSlides(1)}>
                &#10095;
              </a>
            </div>
            <div className="modal-footer">
              {/* <!-- <button type="button" className="btn btn-primary waves-effect waves-light" data-dismiss="modal">Ok</button> --> */}
              <button
                type="button"
                className="btn btn-primary waves-effect waves-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
     
     </>
  );
}
