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

export default function categoryStickets() {

    return (
        <>
            <div class="app-content content">
                <div class="content-overlay"></div>
                <div class="header-navbar-shadow"></div>
                <div class="content-wrapper">
                    <div class="content-header row">
                        <div class="content-header-left col-md-9 col-12 mb-2">
                            <div class="row breadcrumbs-top">
                                <div class="col-12">
                                    <h2 class="content-header-title float-left mb-0">Sticker / Emoji Manager</h2>
                                    <div class="breadcrumb-wrapper col-12">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><a href="index.html">Home</a>
                                            </li>
                                            <li class="breadcrumb-item active">Category
                                    </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <section id="dropzone-examples">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card">
                                        <a href="#">
                                            <div className="card-header">
                                                <div className="col-12 text-center">
                                                    <h2 className="pack-header"><i className="fa fa-mobile" aria-hidden="true"></i> 25 Categories</h2>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    <div className="card">
                                        <Link to="add-sticker-category">
                                            <div className="card-header">
                                                <div className="col-12 text-center">
                                                    <h2 className="pack-header"><i className="fa fa-mobile" aria-hidden="true"></i> New Category</h2>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row" id="table-hover-row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                                <div className="row mb-2" style={{ alignContent: "center" }}>
                                                    <div className="col-12 col-sm-8 col-md-12 mtop-r1">
                                                        <div id="DataTables_Table_0_filter" className="dataTables_filter bulk-btn">
                                                            <div className="col-7 col-md-10 pr-0 pl-0">
                                                                <input type="text" placeholder="Search for User's ID, Name." name="query" id="query" className="form-control full-wdth float-left" value="" />
                                                            </div>
                                                            <div className="col-5 col-md-2 pr-0">
                                                                <button className="btn btn-primary float-left waves-effect waves-light">Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="table-responsive">
                                                    <table className="table table-hover text-center table-bordered mb-0" id="table" role="grid" data-toggle="table" data-pagination="true" data-resizable="true" data-click-to-select="true" >
                                                        <thead className="thead-light">
                                                            <tr>
                                                                <th data-field="cat-id">Category Id</th>
                                                                <th data-field="cat-image">Category Image</th>
                                                                <th data-field="cat-name" data-editable="true">Category Name</th>
                                                                <th data-field="edit" data-editable="true">Edit Category</th>
                                                                <th data-field="remove" data-editable="true">Remove Category</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td><img className="user-avatar" src="app-assets/images/icons/d-avatar.jpg" /></td>
                                                                <td>Airi</td>
                                                                <td><a href="edit-sticker-category.html"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                                                                <td><a href="#" data-toggle="modal" data-target="#default1"><i className="fa fa-trash" aria-hidden="true"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td><img className="user-avatar" src="app-assets/images/icons/d-avatar.jpg" /></td>
                                                                <td>Airi</td>
                                                                <td><a href="edit-sticker-category.html"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                                                                <td><a href="#" data-toggle="modal" data-target="#default1"><i className="fa fa-trash" aria-hidden="true"></i></a></td>
                                                            </tr>
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
    )
}

