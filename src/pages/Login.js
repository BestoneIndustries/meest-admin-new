import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UserContext } from "../context/UserContext";
import { url } from "./apiUrl";
import { setAuthHeader } from "./apicall/apiCall";


// import 'animate.css/animate.compat.css'

export default function Login() {
  const swiper = useRef(null);

  useEffect(() => {
    swiper.current = new Swiper(".swiper-container", {
      spaceBetween: 0,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        autoplayDisableOnInteraction: false,
      },
      loop: true,
    });
  }, []);

  const { dispatch } = useContext(UserContext);

  const history = useHistory();

  // const onLogin = (e) => {
  //   e.preventDefault();
  //   if (username && password) {
  //     axios("https://api.dbmdemo.com/pub/login", {
  //       method: "POST",
  //       data: {
  //         username,
  //         password,
  //       },
  //     })
  //       .then((res) => {
  //         if (res.data.code === 0) {
  //           // TODO: Set Error Msg
  //           console.log(res.data.data);
  //         } else if (res.data.code === 1) {
  //           localStorage.setItem("meestToken", res.data.data.token);
  //           localStorage.setItem(
  //             "meestUser",
  //             JSON.stringify(res.data.data.user)
  //           );

  //           dispatch({ type: "USER", payload: res.data.data.user });
  //           history.push("/");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.response);
  //       });
  //   }
  // };

  return (
    <div className="formWrapper">
      <div className="content-wrapper myWrapper">
        <div className="login-header">
          <div className="login-logo">
            <img src="app-assets/images/m-logo.png" alt="logo" />
          </div>
          {/* <div className="log-rester-btn">
            <Link to="/Register">Register</Link>
          </div> */}
        </div>
        <div className="content-body login-body">
          <section className="container">
            <div className="row">
              <div className="col-xl-10 col-11 offset-xl-1">
                <div className="card login-area bg-authentication mb-0">
                  <div className="row m-0">
                    <div className="col-lg-6 p-0">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="slider-item">
                              <img
                                className="d-block w-100"
                                src="app-assets/images/pages/card-image-4.jpg"
                                alt="First slide"
                              />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="slider-item">
                              <img
                                className="d-block w-100"
                                src="app-assets/images/pages/card-image-5.jpg"
                                alt="First slide"
                              />
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="slider-item">
                              <img
                                className="d-block w-100"
                                src="app-assets/images/pages/card-image-6.jpg"
                                alt="First slide"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="slider-content">
                          <div>
                            <h1>Welcome !</h1>
                            <p>
                              Share What's new and life moments with your
                              friends.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-12 bg-white p-0">
                      <div className="card rounded-0 mb-0 px-3 pt-2">
                        <div className="card-header pb-1">
                          <div className="card-title">
                            <h4 className="mb-0 log-head">Login</h4>
                          </div>
                        </div>
                        <div
                          className="card-content"
                          style={{ marginTop: "30px" }}
                        >
                          <div className="">
                            <Formik
                              initialValues={{
                                username: "",
                                password: "",
                              }}
                              validationSchema={Yup.object().shape({
                                username: Yup.string().required(
                                  "Username is required"
                                ),
                                password: Yup.string().required(
                                  "Password is required"
                                ),
                              })}
                              onSubmit={(
                                values,
                                { setSubmitting, resetForm }
                              ) => {
                                console.log("Login -> values", values);
                                axios(url + "/pub/login", {
                                  method: "POST",
                                  data: values,
                                })
                                  .then((res) => {
                                    if (res.data.code === 0) {
                                      console.log(res);
                                      console.log(res.data.data);
                                      window.alert(res.data.errorMessage);
                                    } else if (res.data.code === 1) {
                                      localStorage.setItem(
                                        "meestToken",
                                        res.data.data.token,
                                        "autoLogout",true
                                      );
                                      localStorage.setItem(
                                         "meestUser",
                                        JSON.stringify(res.data.data.user)
                                      );
                                      localStorage.setItem(
                                       "autoLogout",true
                                      );
                                      setAuthHeader(res.data.data.token);
                                      dispatch({
                                        type: "USER",
                                        payload: res.data.data.user,
                                      });
                                      history.push("/");
                                    }
                                  })
                                  .catch((err) => {
                                    console.log(err.response);
                                  });
                              }}
                              render={({
                                values,
                                errors,
                                touched,
                                isSubmitting,
                              }) => {
                                return (
                                  <Form>
                                    <div className="log-in-label form-group">
                                      <label htmlFor="user-name">
                                        Username
                                      </label>
                                      <Field
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        placeholder=""
                                      />
                                      <ErrorMessage
                                        name="username"
                                        component="div"
                                        className="errorM"
                                      />
                                    </div>
                                    <div className="log-in-label form-group">
                                      <label htmlFor="user-password">
                                        Password
                                      </label>
                                      <Field
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder=""
                                      />
                                      <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="errorM"
                                      />
                                    </div>
                                    <button
                                      type="submit"
                                      className="btn btn-primary login-btn"
                                      style={{ marginTop: "20px" }}
                                    >
                                      Login
                                    </button>
                                  </Form>
                                );
                              }}
                            />
                          </div>
                        </div>
                        {/* <div className="login-footer border-top py-2 mt-3">
                          <div className="footer-btn d-flex justify-content-center">
                            <a href="#">
                              <div className="footer-img">
                                <img
                                  src="app-assets/images/profile/user-uploads/user-01.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <a href="#">
                              <div className="footer-img">
                                <img
                                  src="app-assets/images/profile/user-uploads/user-02.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <a href="#">
                              <div className="footer-img">
                                <img
                                  src="app-assets/images/profile/user-uploads/user-03.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <a href="#">
                              <div className="footer-img">
                                <img
                                  src="app-assets/images/profile/user-uploads/user-04.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <a href="#">
                              <div className="footer-img">
                                <img
                                  src="app-assets/images/profile/user-uploads/user-05.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <a href="#">
                              <div className="footer-img">
                                <img
                                  src="app-assets/images/profile/user-uploads/user-06.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                            <a href="#">
                              <div className="footer-img">
                                <img
                                  src="app-assets/images/profile/user-uploads/user-07.jpg"
                                  alt=""
                                />
                              </div>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <br />
      <br />
      <br />
      <section className="log-footer">
        <div className="row">
          <div className="col-md-6">
            <div className="quick-link">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-language" aria-hidden="true"></i>{" "}
                    Language
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
