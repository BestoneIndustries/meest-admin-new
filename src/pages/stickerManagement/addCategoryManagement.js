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

export default function addCategoryStickets() {

    return (
        <>
            <div className="app-content content">
                <div className="content-overlay"></div>
                <div className="header-navbar-shadow"></div>
                <div className="content-wrapper">
                    <div className="content-header row">
                        <div className="content-header-left col-md-9 col-12 mb-2">
                            <div className="row breadcrumbs-top">
                                <div className="col-12">
                                    <h2 className="content-header-title float-left mb-0">Sticker / Emoji Manager</h2>
                                    <div className="breadcrumb-wrapper col-12">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a>
                                            </li>
                                            <li className="breadcrumb-item active">Add Category
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
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="col-12">
                                                <h4 className="card-title">Add Category</h4>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <form >
                                                    <div className="form-group">
                                                        <label>Category Title</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <div action="#" className="dropzone dropzone-area" id="dp-accept-files">

                                                        <div className="dz-message">Drop Files Here To Upload</div>
                                                    </div>
                                                </form>


                                                <div className="mt-2 pb-2 float-right">
                                                    <a href="sticker-category.html" className="btn btn-primary shadow waves-effect waves-light">Back</a>&nbsp;&nbsp;
                                        <button type="button" className="btn btn-primary shadow waves-effect waves-light">Save Category</button>
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

