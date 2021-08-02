import React from "react";
import { Link } from "react-router-dom";

// li - main - nav-item has-sub
// li - main - nav-item has-sub open
// li - main - active nav-item has-sub sidebar-group-active open

// li - item - ''
// li - item - is-shown
// li - item - is-shown hover
// li - item - is-shown active

export default function Sidebar() {
  return (
    <div
      className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
      data-scroll-to-active="true"
    >
      <div className="navbar-header">
        <ul className="nav navbar-nav flex-row">
          <li className="nav-item mr-auto">
            <Link className="navbar-brand" to="/">
              <div className="brand-logo"></div>
              <h2 className="brand-text mb-0">Meest</h2>
            </Link>
          </li>
          {/* <!-- <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i className="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i className="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>--> */}
        </ul>
      </div>
      <div className="shadow-bottom"></div>
      <div className="main-menu-content">
        <ul
          className="navigation navigation-main"
          id="main-menu-navigation"
          data-menu="menu-navigation"
        >
          <li className="active nav-item">
            <Link to="/NewDashboard">
              <i className="feather icon-home"></i>
              <span className="menu-title" data-i18n="NewDashboard">
                NewDashboard
              </span>
            </Link>
          </li>

          <li className="active nav-item">
            <Link to="/">
              <i className="feather icon-home"></i>
              <span className="menu-title" data-i18n="Dashboard">
                Dashboard
              </span>
            </Link>
          </li>

          {/* <li className="nav-item">
            <a href="#">
              <i className="feather icon-settings"></i>
              <span className="menu-title" data-i18n="Ecommerce">
                Web-Settings
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/General-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    General Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Site-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Details">
                    Site Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-Site-Features">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Wish List">
                    Manage Site Features
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Email-SMS-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Checkout">
                    E-mail &amp; SMS Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Video-Audio-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Checkout">
                    Video &amp; Audio Chat Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Social-Login-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Checkout">
                    Social Login Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Payment-System-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Checkout">
                    Payment System Settings
                  </span>
                </Link>
              </li>
              <!-- <li><Li- to="/manage-currency.html"><i className="feather icon-circle"></i><span className="menu-item" data-i18n="Checkout">Manage Currencies</span></Li->
                        <!-- </li> -->
              <li>
                <Link to="/Storage-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Checkout">
                    Storage Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Post-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Checkout">
                    Post Settings{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}

          {/* <li className=" nav-item">
            <a href="#">
              <i className="feather icon-globe"></i>
              <span className="menu-title" data-i18n="Ecommerce">
                Languages
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Add-New-Languages">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Add New Language &amp; Keys
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-Languages">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Details">
                    Manage Languages
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}

          <li className=" nav-item">
            <a href="#">
              <i className="feather icon-user"></i>
              <span className="menu-title" data-i18n="User">
                User
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Manage-Users">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Manage Users
                  </span>
                </Link>
              </li>
              {/* <li>
                <Link to="/Online-Users">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="View">
                    Online Users
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-User-Stories">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Edit">
                    Manage User Stories / Status
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-User-Profile-Fields">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="List">
                    Manage Custom Profile <br />
                    <p className="pl-1 m-0">
                      {" "}
                      Fields <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </p>
                  </span>
                </Link>
              </li> */}
              {/* <li>
                <Link to="/Manage-Verification-Request">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="View">
                    Manage Verification Requests
                  </span>
                </Link>
              </li> */}
              {/* <!-- <li><Li- to="/#"><i className="feather icon-circle"></i><span className="menu-title" data-i18n="Edit">Affiliates System</span></Li->
                       <!-- <ul className="menu-content"> -->
                        <!-- <li><Li- to="/affiliate-setting.html"><i className="feather icon-circle"></i><span className="menu-item" data-i18n="List">Affiliates Settings</span></Li->
                        <!-- </li> -->
                        <!-- <-><Link to="/payment-request.html"><i className="feather icon-circle"></i><span className="menu-item" data-i18n="View">Payment Requests</span></Link></->
						<!-- </ul> -->
					   <!-- </li>--> */}
              {/* <li>
                <Link to="/Manage-Gender">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Edit">
                    Manage genders
                  </span>
                </Link>
              </li> */}
            </ul>
          </li>

          <li className=" nav-item">
            <Link to="/mailing-list">
              <i className="fa fa-envelope-o"></i>

              <span className="menu-title" data-i18n="User">
                SendEmail
              </span>
            </Link>
          </li>
          {/* 
          <li className=" nav-item">
            <a href="#">
              <i className="feather icon-star"></i>
              <span className="menu-title pro-star" data-i18n="Ecommerce">
                Pro System
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Pro-System-Setting">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Shop">
                    Pro System Settings
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Pro-Features">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Shop">
                    Pro Features
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-Payments">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Details">
                    Manage Payments
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-Pro-Member">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Details">
                    Manage Pro Members
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-Pro-Refund">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Details">
                    Manage Pro Refund
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}

          {/* <li className=" nav-item">
            <a href="#">
              <i className="feather icon-server"></i>
              <span className="menu-title" data-i18n="Ecommerce">
                Manage Features
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Apps">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Details">
                    Apps{" "}
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Pages">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Details">
                    Pages
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Groups">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Details">
                    Groups{" "}
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Posts">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Details">
                    Posts
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Fundings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Details">
                    Fundings{" "}
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Jobs">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Details">
                    Jobs
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Article">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Details">
                    Article (Blog)
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Events">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Details">
                    Events{" "}
                  </span>
                </Link>
              </li>
              <li className=" nav-item">
                <a href="#">
                  <i className="feather icon-circle"></i>
                  <span className="menu-title pro-star" data-i18n="Ecommerce">
                    Forums <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </a>
                <ul className="menu-content">
                  <li>
                    <Link to="/Manage-Forum-Section">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Shop">
                        Manage Forums Sections
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Manage-Forums">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Details">
                        Manage Forums
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Manage-Threads">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Shop">
                        Manage Threads
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Manage-Replies">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Details">
                        Manage Replies
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Create-New-Section">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Shop">
                        Create New Section
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Create-New-Forum">
                      <i className="feather icon-circle"></i>
                      <span className="menu-item" data-i18n="Details">
                        Create New Forum
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li> */}

          {/* <li className=" nav-item">
            <a href="#">
              <i className="fa fa-paper-plane-o"></i>
              <span className="menu-title" data-i18n="Ecommerce">
                Categories
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Page-Categories">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Pages Categories
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Group-Categories">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Details">
                    Groups Categories
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Blog-Categories">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Blogs Categories
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Product-Categories">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Details">
                    Products Categories
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Job-Categories">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Job Categories
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          */}
          {/* <li className=" nav-item">
            <Link to="/Video-Management">
              <i className="fa fa-video-camera"></i>
              <span className="menu-title" data-i18n="User">
                Video Management
              </span>
            </Link>
          </li>
          <li className=" nav-item">
            <Link to="/Audio-Management">
              <i className="fa fa-volume-up" aria-hidden="true"></i>
              <span className="menu-title" data-i18n="User">
                Audio Management
              </span>
            </Link>
          </li> */}
          <li className=" nav-item">
            <Link to="/Hashtag-Manager">
              <i className="fa fa-hashtag"></i>
              <span className="menu-item" data-i18n="Shop">
                Hashtag Manager
              </span>
            </Link>
          </li>
          {/* <li className="nav-item">
            <a href="#">
              <i className="fa fa-smile-o"></i>
              <span className="menu-item" data-i18n="Shop">
                Sticker / Emoji Manager
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="emoji-manager">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Sticker Pack
                  </span>
                </Link>
              </li>
              <li>
                <Link to="sticker-category">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="View">
                    Categories
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}

          <li className="nav-item">
            <a href="#">
              <i className="fa fa-folder-open" aria-hidden="true"></i>
              <span className="menu-item" data-i18n="Shop">
                Resources
              </span>
            </a>
            <ul className="menu-content">
              <li className="nav-item">
                <Link to="/Manage-Activities">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Manage Activities
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Manage-Topics">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Manage Interests
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Manage-Background">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Manage Backgrounds
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Manage-Colors">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Manage Colours
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          {/* <li className=" nav-item">
            <Link to="/Manage-Bank-Receipts">
              <i className="feather icon-credit-card"></i>
              <span className="menu-item" data-i18n="Shop">
                Manage Bank Receipts
              </span>
            </Link>
          </li> */}

          <li className=" nav-item">
            <Link to="/email">
              <i className="fa fa-bell-o"></i>
              <span className="menu-item" data-i18n="Shop">
                Notifications
              </span>
            </Link>
          </li>

          {/* <li className=" nav-item">
            <a href="#">
              <i className="feather icon-life-buoy"></i>
              <span className="menu-title pro-star" data-i18n="User">
                Design
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Themes">
                  <i className="feather icon-circle"></i>
                  <span className="menu-itempro-star" data-i18n="List">
                    Themes
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Change-Site-Design">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="View">
                    Change Site Design
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Custom-JS-CSS">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Edit">
                    Custom JS / CSS
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}

          {/* <li className=" nav-item">
            <a href="#">
              <i className="feather icon-user"></i>
              <span className="menu-title" data-i18n="User">
                Tools
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/User-Invitation">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Users Invitation
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Send-Email">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Send E-mail
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Announcements">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Announcements
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Auto-Delete-Data">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="View">
                    Auto Delete Data
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Auto-Friend">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="Edit">
                    Auto Friend
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Auto-Page-Like">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="List">
                    Auto Page Like
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Auto-Group-Join">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="View">
                    Auto Group Join
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Fake-User-Generator">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item pro-star" data-i18n="List">
                    Fake User Generator
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Mailing-List">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="View">
                    Mailing List
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Mass-Notification">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Edit">
                    Mass Notifications
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Blacklist">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    BlackList
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Generate-SiteMap">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Generate SiteMap
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Invitation-Codes">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Invitation Codes
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Backup-SQL-Files">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Backup SQL &amp; Files
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}

          <li>
            <Link to="/Manage-Custom-Pages">
              <i className="feather icon-file-text"></i>
              <span className="menu-item" data-i18n="List">
                Pages
              </span>
            </Link>
          </li>
          {/* <li className=" nav-item">
            <a href="#">
              <i className="feather icon-file-text"></i>
              <span className="menu-title" data-i18n="User">
                Pages
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Manage-Custom-Pages">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Manage Custom Pages
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Edit-Term-Pages">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="View">
                    Edit Terms Pages
                  </span>
                </Link>
              </li>
            </ul>
          </li>
*/}
          <li className=" nav-item">
            <a to="#">
              <i className="fa fa-signal"></i>
              <span className="menu-title" data-i18n="User">
                {" "}
                Top And Trending View
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="top-elements">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Top
                  </span>
                </Link>
              </li>
              <li>
                <Link to="top-trending">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="View">
                    Trending
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          {/* <li className=" nav-item">
            <a href="#">
              <i className="feather icon-zap rotate-45"></i>
              <span className="menu-title pro-star" data-i18n="User">
                API Settings
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Manage-API-Server-Key">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Manage API Server Key
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Push-Notifications-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="View">
                    Push Notifications Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Verify-Applications">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Edit">
                    Verify Applications
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/3rd-Party-Scripts">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    3rd Party Scripts
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}

          <li className="nav-item">
            <a href="#">
              <i className="feather icon-more-vertical"></i>
              <span className="menu-title" data-i18n="User">
                {" "}
                Manage FAQs
              </span>
            </a>

            <ul className="menu-content">
              <li>
                <Link to="/faqs">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    FAQs
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/faqCategory">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    FAQ Categories
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="feather icon-alert-triangle"></i>
              <span className="menu-title" data-i18n="User">
                {" "}
                Manage Reports
              </span>
            </a>

            <ul className="menu-content">
              <li>
                <Link to="/Manage-ReportOptions">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Manage Reports Options
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-ReportPost">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Post Reports
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-ReportVideo">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Video Reports
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-ReportProfile">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Profile Reports
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-ReportComment">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    Comment Reports
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-ReportSubComment">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Shop">
                    SubComment Reports
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          {/* <li className=" nav-item">
            <a href="#">
              <i className="feather icon-alert-triangle"></i>
              <span className="menu-title" data-i18n="User">
                Reports
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Manage-Report">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Manage Abuse Reports
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}

          {/* <li>
            <Link to="/Advertisement-Dashboard">
              <i className="fa fa-usd"></i>
              <span className="menu-item" data-i18n="List">
                &nbsp;&nbsp;Advertisment Reports
              </span>
            </Link>
          </li> */}
          {/* <li className=" nav-item">
            <a href="#">
              <i className="dollar">
                <b>$ </b>
              </i>
              <span className="menu-title" data-i18n="User">
                {" "}
                Advertisement
              </span>
            </a>
            <ul className="menu-content">
              <li>
                <Link to="/Advertisement-Dashboard">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Advertisement-System-Settings">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="List">
                    Advertisement System Settings
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-Site-Advertisement">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="View">
                    Manage Site Advertisements
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Manage-User-Advertisement">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Edit">
                    Manage User Advertisements
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Create-Campaign">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Edit">
                    Create Campaign
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/Admin-Campaign">
                  <i className="feather icon-circle"></i>
                  <span className="menu-item" data-i18n="Edit">
                    List / Manage Campaign
                  </span>
                </Link>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
