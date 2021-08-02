import React, { useState, useContext, useEffect } from "react";

import Footer from "../../components/Footer";

import { Link } from "react-router-dom";


import { postData } from '../apicall/apiCall';

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import NotificationSystem from 'react-notification-system';
import PushNotificationSettings from "../APISettings/PushNotificationSettings";

export default function emojiManager() {

    return (
        <>
            <div class="app-content content">
                <div class="content-overlay"></div>
                <div class="header-navbar-shadow"></div>
                <div class="content-wrapper">
                    <div class="content-header row">
                        <div class="content-header-left col-md-9 col-12 mb-2">
                            <div class="row breadcrumbs-top">
                                <div class="breadcrumb-wrapper col-12">
                                    <h2 class="content-header-title float-left mb-0">Emoji Manager</h2>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a>
                                        </li>
                                        <li class="breadcrumb-item active">Sticker / Emoji Manager
                                     </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-body">
                        <section id="dashboard-analytics">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="card">
                                        <a href="#">
                                            <div class="card-header">
                                                <div class="col-12 text-center">
                                                    <h2 class="pack-header"> <span class="d-block number">9+</span> <span class="d-block">Total Packs</span></h2>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-12">
                                    <div class="card">
                                        <Link to="add-sticker">
                                            <div class="card-header h-100">
                                                <div class="col-12 text-center">
                                                    <h2 class="pack-header"><i class="fa fa-plus-circle add-cat number" aria-hidden="true"></i> <span class="d-block">Add New Packs</span></h2>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="row" id="table-hover-row">
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-header border-bottom">
                                            <div class="col-12">
                                                <h4 class="card-title">Sticker / Emoji Manager</h4>
                                            </div>
                                        </div>
                                        <div class="card-content  card-body">
                                            <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                                <div class="row justify-content-between" style={{ alignContent: 'center' }}>
                                                    <div class="col-12 col-sm-12 col-md-12 mtop-r1">
                                                        <div id="DataTables_Table_0_filter" class="dataTables_filter bulk-btn">
                                                            <div class="col-7 col-md-10 pr-0 pl-0">
                                                                <input type="text" placeholder="Search for Events" name="query" id="query" class="form-control full-wdth float-left"  />
                                                            </div>
                                                            <div class="col-5 col-md-2 pr-0">
                                                                <button class="btn btn-primary float-left waves-effect waves-light">Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="card">
                                                <div class="card-header border-bottom">
                                                    <div class="sticker-area container">
                                                        <div class="row">
                                                            <div class="custom-card-header w-100 mb-1">
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Id : </span>
                                                                    <span class="d-inline-block" id="pkg-id">#2658 </span>
                                                                </div>
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Name : </span>
                                                                    <h3 class="d-inline-block sticker-title">Coffe (webp)</h3>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 p-0">
                                                                <div class="sticker-medium position-relative">
                                                                    <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                    <img src="app-assets/images/sticker/pic-01.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-8 p-0">
                                                                <div class="sticker-content">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-02.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-03.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-04.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-05.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-06.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-07.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-08.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="edit-sticker.html" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-09.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a class="mini-image d-block add-stick" href="edit-sticker.html" title="Add Sticker"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="sticker-manage">
                                                        <div>
                                                            <ul>
                                                                <li><a href="edit-sticker.html" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li>
                                                                <li><a href="#" data-toggle="modal" title="Delete" data-target="#default1"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="creater-details">
                                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                                <label class="btn btn-success-custom active">
                                                                    <input type="radio" name="options" id="option1" checked /> Active
                                                                 </label>
                                                                <label class="btn btn-success-custom">
                                                                    <input type="radio" name="options" id="option2" /> Disable
                                                                 </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="card">
                                                <div class="card-header border-bottom">
                                                    <div class="sticker-area container">
                                                        <div class="row">
                                                            <div class="custom-card-header w-100 mb-1">
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Id : </span>
                                                                    <span class="d-inline-block" id="pkg-id">#2658 </span>
                                                                </div>
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Name : </span>
                                                                    <h3 class="d-inline-block sticker-title">Coffe (webp)</h3>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 p-0">
                                                                <div class="sticker-medium position-relative">
                                                                    <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                    <img src="app-assets/images/sticker/pic-01.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-8 p-0">
                                                                <div class="sticker-content">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-02.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-03.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-04.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-05.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-06.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-07.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-08.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="edit-sticker.html" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-09.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a class="mini-image d-block add-stick" href="edit-sticker.html" title="Add Sticker"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="sticker-manage">
                                                        <div>
                                                            <ul>
                                                                <li><a href="edit-sticker.html" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li>
                                                                <li><a href="#" data-toggle="modal" title="Delete" data-target="#default1"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="creater-details">
                                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                                <label class="btn btn-success-custom active">
                                                                    <input type="radio" name="options" id="option1" checked /> Active
                                                                 </label>
                                                                <label class="btn btn-success-custom">
                                                                    <input type="radio" name="options" id="option2" /> Disable
                                                                 </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="card">
                                                <div class="card-header border-bottom">
                                                    <div class="sticker-area container">
                                                        <div class="row">
                                                            <div class="custom-card-header w-100 mb-1">
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Id : </span>
                                                                    <span class="d-inline-block" id="pkg-id">#2658 </span>
                                                                </div>
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Name : </span>
                                                                    <h3 class="d-inline-block sticker-title">Coffe (webp)</h3>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 p-0">
                                                                <div class="sticker-medium position-relative">
                                                                    <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                    <img src="app-assets/images/sticker/pic-01.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-8 p-0">
                                                                <div class="sticker-content">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-02.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-03.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-04.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-05.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-06.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-07.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-08.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="edit-sticker.html" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-09.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a class="mini-image d-block add-stick" href="edit-sticker.html" title="Add Sticker"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="sticker-manage">
                                                        <div>
                                                            <ul>
                                                                <li><a href="edit-sticker.html" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li>
                                                                <li><a href="#" data-toggle="modal" title="Delete" data-target="#default1"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="creater-details">
                                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                                <label class="btn btn-success-custom active">
                                                                    <input type="radio" name="options" id="option1" checked /> Active
                                                                 </label>
                                                                <label class="btn btn-success-custom">
                                                                    <input type="radio" name="options" id="option2" /> Disable
                                                                 </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="card">
                                                <div class="card-header border-bottom">
                                                    <div class="sticker-area container">
                                                        <div class="row">
                                                            <div class="custom-card-header w-100 mb-1">
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Id : </span>
                                                                    <span class="d-inline-block" id="pkg-id">#2658 </span>
                                                                </div>
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Name : </span>
                                                                    <h3 class="d-inline-block sticker-title">Coffe (webp)</h3>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 p-0">
                                                                <div class="sticker-medium position-relative">
                                                                    <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                    <img src="app-assets/images/sticker/pic-01.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-8 p-0">
                                                                <div class="sticker-content">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-02.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-03.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-04.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-05.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-06.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-07.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-08.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="edit-sticker.html" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-09.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a class="mini-image d-block add-stick" href="edit-sticker.html" title="Add Sticker"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="sticker-manage">
                                                        <div>
                                                            <ul>
                                                                <li><a href="edit-sticker.html" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li>
                                                                <li><a href="#" data-toggle="modal" title="Delete" data-target="#default1"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="creater-details">
                                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                                <label class="btn btn-success-custom active" >
                                                                    <input type="radio" name="options" id="option1" checked /> Active
                                                                </label>
                                                                <label class="btn btn-success-custom">
                                                                    <input type="radio" name="options" id="option2" /> Disable
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="card">
                                                <div class="card-header border-bottom">
                                                    <div class="sticker-area container">
                                                        <div class="row">
                                                            <div class="custom-card-header w-100 mb-1">
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Id : </span>
                                                                    <span class="d-inline-block" id="pkg-id">#2658 </span>
                                                                </div>
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Name : </span>
                                                                    <h3 class="d-inline-block sticker-title">Coffe (webp)</h3>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 p-0">
                                                                <div class="sticker-medium position-relative">
                                                                    <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                    <img src="app-assets/images/sticker/pic-01.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-8 p-0">
                                                                <div class="sticker-content">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-02.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-03.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-04.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-05.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-06.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-07.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-08.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="edit-sticker.html" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-09.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a class="mini-image d-block add-stick" href="edit-sticker.html" title="Add Sticker"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="sticker-manage">
                                                        <div>
                                                            <ul>
                                                                <li><a href="edit-sticker.html" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li>
                                                                <li><a href="#" data-toggle="modal" title="Delete" data-target="#default1"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="creater-details">
                                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                                <label class="btn btn-success-custom active">
                                                                    <input type="radio" name="options" id="option1" checked /> Active
                                                                </label>
                                                                <label class="btn btn-success-custom">
                                                                    <input type="radio" name="options" id="option2" /> Disable
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="card">
                                                <div class="card-header border-bottom">
                                                    <div class="sticker-area container">
                                                        <div class="row">
                                                            <div class="custom-card-header w-100 mb-1">
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Id : </span>
                                                                    <span class="d-inline-block" id="pkg-id">#2658 </span>
                                                                </div>
                                                                <div class="sticker-details">
                                                                    <span class="d-inline-block">Package Name : </span>
                                                                    <h3 class="d-inline-block sticker-title">Coffe (webp)</h3>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4 p-0">
                                                                <div class="sticker-medium position-relative">
                                                                    <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                    <img src="app-assets/images/sticker/pic-01.png" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="col-md-8 p-0">
                                                                <div class="sticker-content">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-02.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-03.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-04.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-05.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-06.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-07.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="#" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-08.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a href="edit-sticker.html" title="Remove Sticker" class="delete-icon">x</a>
                                                                            <img class="mini-image" src="app-assets/images/sticker/pic-09.png" alt="" />
                                                                        </li>
                                                                        <li>
                                                                            <a class="mini-image d-block add-stick" href="edit-sticker.html" title="Add Sticker"><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-body">
                                                    <div class="sticker-manage">
                                                        <div>
                                                            <ul>
                                                                <li><a href="edit-sticker.html" title="Edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li>
                                                                <li><a href="#" data-toggle="modal" title="Delete" data-target="#default1"><i class="fa fa-trash" aria-hidden="true"></i></a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="creater-details">
                                                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                                                <label class="btn btn-success-custom active">
                                                                    <input type="radio" name="options" id="option1" checked /> Active
                                                                 </label>
                                                                <label class="btn btn-success-custom">
                                                                    <input type="radio" name="options" id="option2" /> Disable
                                                            </label>
                                                            </div>
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
    )
}

