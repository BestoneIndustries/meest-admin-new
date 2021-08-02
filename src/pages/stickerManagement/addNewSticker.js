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

export default function addNewSticker() {
    
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
                                            <li className="breadcrumb-item active">Add Sticker
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
                                                <h4 className="card-title">Add New Pack</h4>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-body">
                                                <form action="#" id="dpz-multiple-files">
                                                    <div className="form-group">
                                                        <label>Pack name</label>
                                                        <input type="text" placeholder="Enter Package Name" className="form-control" />
                                                    </div>
                                                    <div className="categor form-group">
                                                        <label>Categories :</label>
                                                        <ul>
                                                            <li><input type="checkbox" /> Games</li>
                                                            <li><input type="checkbox" /> Funny</li>
                                                            <li><input type="checkbox" /> Animals</li>
                                                            <li><input type="checkbox" /> Cartoon</li>
                                                            <li><input type="checkbox" /> Lovely</li>
                                                            <li><a href="add-sticker-category.html" data-toggle="modal" title="Delete" data-target="#default1"><i className="fa fa-plus-circle" aria-hidden="true"></i> Add Category</a></li>
                                                        </ul>

                                                    </div>
                                                    <div className="row mt-3">
                                                        <div className="col-md-3">
                                                            <img className="pack-demo-image" src="app-assets/images/image_placeholder.jpg" alt="#" />
                                                            <label className="pack-imgae"> Select Pack Image
                                                        <input type="file" />
                                                            </label>

                                                        </div>
                                                        <div className="col-md-9">
                                                            <h3 className="package-review"> Added Stickers </h3>
                                                            <div className="sticker-content added-emogies-stickers">
                                                                <ul>
                                                                    <li className="position-relative">
                                                                        <a href="#" title="Remove Sticker" className="delete-icon">x</a>
                                                                        <img className="mini-image" src="app-assets/images/sticker/pic-02.png" alt="" />
                                                                    </li>
                                                                    <li className="position-relative">
                                                                        <a href="#" title="Remove Sticker" className="delete-icon">x</a>
                                                                        <img className="mini-image" src="app-assets/images/sticker/pic-03.png" alt="" />
                                                                    </li>
                                                                    <li className="position-relative">
                                                                        <a href="#" title="Remove Sticker" className="delete-icon">x</a>
                                                                        <img className="mini-image" src="app-assets/images/sticker/pic-04.png" alt="" />
                                                                    </li>
                                                                    <li className="position-relative">
                                                                        <a href="#" title="Remove Sticker" className="delete-icon">x</a>
                                                                        <img className="mini-image" src="app-assets/images/sticker/pic-05.png" alt="" />
                                                                    </li>
                                                                    <li className="position-relative">
                                                                        <a href="#" title="Remove Sticker" className="delete-icon">x</a>
                                                                        <img className="mini-image" src="app-assets/images/sticker/pic-06.png" alt="" />
                                                                    </li>
                                                                    <li className="position-relative">
                                                                        <a href="#" title="Remove Sticker" className="delete-icon">x</a>
                                                                        <img className="mini-image" src="app-assets/images/sticker/pic-07.png" alt="" />
                                                                    </li>
                                                                    <li className="position-relative">
                                                                        <a href="#" title="Remove Sticker" className="delete-icon">x</a>
                                                                        <img className="mini-image" src="app-assets/images/sticker/pic-08.png" alt="" />
                                                                    </li>
                                                                    <li className="position-relative">
                                                                        <a href="#" title="Remove Sticker" className="delete-icon">x</a>
                                                                        <img className="mini-image" src="app-assets/images/sticker/pic-09.png" alt="" />
                                                                    </li>
                                                                </ul>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="mt-3 py-2 border-top">
                                                    <button type="button" className="btn btn-primary shadow waves-effect waves-light">Add Pack</button>&nbsp;&nbsp;
                                            <Link to="emoji-manager" className="btn btn-primary shadow waves-effect waves-light">Back</Link>
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

