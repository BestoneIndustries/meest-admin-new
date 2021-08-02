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




export default function ManageSiteFeatures() {
  
  const [greetingSystem, setGreetingSystem] = useState("Enable");
  const [pokeSystem, setPokeSystem] = useState("Enable");
  const [pointAndLevelSystem, setPointAndLevelSystem] = useState("Enable");
  const [pagesSystem, setPagesSystem] = useState("Enable");
  const [groupSystem, setGroupSystem] = useState("Enable");
  const [blogSystem, setBlogSystem] = useState("Enable");
  const [whoCanPostBlogs, setWhoCanPostBlogs] = useState("Enable");
  const [blogApprovalSystem, setBlogApprovalSystem] = useState("Enable");
  const [eventSystem, setEventSystem] = useState("Enable");
  const [eventSystemVisibility, setEventSystemVisibility] = useState("Registered User");
  const [productSystemVisibility, setProductSystemVisibility] = useState("Registered User");
  const [forumSystem, setForumSystem] = useState("Registered User");
  const [forumSystemVisibility, setForumSystemVisibility] = useState("Registered User");
  const [advertisementSystem, setAdvertisementSystem] = useState("Enable");
  const [storyStatusSystem, setStoryStatusSystem] = useState("Enable");
  const [gifSystem, setGifSystem] = useState("Enable");
  const [friendsNearbySystem, setFriendsNearbySystem] = useState("Enable");
  const [giftSystem, setGiftSystem] = useState("Enable");
  const [stickerSystem, setStickerSystem] = useState("Enable");
  const [popularPostsAndCommentSystem, setPopularPostsAndCommentSystem] = useState("Enable");
  const [googleMapsSystem, setGoogleMapsSystem] = useState("Enable");
  const [memoriesSystem, setMemoriesSystem] = useState("Enable");
  const [membershipOnSignUpSystem, setMembershipOnSignUpSystem] = useState("Enable");
  const [passwordComplexitySystem, setPasswordComplexitySystem] = useState("Enable");
  const [commonThingsSystem, setCommonThingsSystem] = useState("Enable");
  const [nearbyShopsSystem, setNearbyShopsSystem] = useState("Enable");
  const [nearbyBusinessesSystem, setNearbyBusinessesSystem] = useState("Enable");
  const [shoutBoxSystem, setShoutBoxSystem] = useState("Enable");
  const [bankAccountWithdrawalSystem, setBankAccountWithdrawalSystem] = useState("Enable");
  const [notificationWhenUserCreateNewPost, setNotificationWhenUserCreateNewPost] = useState("Enable");
  const [weatherWidget, setWeatherWidget] = useState("Enable");


  const [weatherWidgetKey, setWeatherWidgetKey] = useState("");

  
  const [allowUserToWithdrawlThoseMoney, setAllowUserToWithdrawlThoseMoney] = useState("Enable");
  const [oneDollerPoints, setOneDollerPoints] = useState("");
  const [comments, setComments] = useState("");
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState("");
  const [wonders, setWonders] = useState("");
  const [reactions, setReactions] = useState("");
  const [createPost, setCreatePost] = useState("");
  const [createBlog, setCreateBlog] = useState("");
  const [freeUserDailyLimit, setFreeUserDailyLimit] = useState("");
  const [proUserDailyLimit, setProUserDailyLimit] = useState("");
           
                  

  const [settingId, setSettingId] = useState("");





  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [manageSiteFeatures, setManageSiteFeatures] = useState("");

  const success = (msg) => {
    console.log("success -> msg", msg)
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'success'
    });
  };

  const error = (msg) => {
    console.log("error -> msg", msg)
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: 'error'
    });
  };


  useEffect(() => {
    getManageSiteFeatureSetting();
  }, []);

  async function getManageSiteFeatureSetting() {
    const { data, code, errorMessage } = await postData('/setting/site/features/getAll');
    console.log("fetchData -> resData", data)
    if (code) {
                const { siteFeatures, PointAndLevelSystemSetting, id } = data;
      
                setSettingId(id);
    
                setGreetingSystem(siteFeatures.greetingSystem ? "Enable" : "Disable");
                setPokeSystem(siteFeatures.pokeSystem ? "Enable" : "Disable");
                setPointAndLevelSystem(siteFeatures.pointAndLevelSystem ? "Enable" : "Disable");
                setPagesSystem(siteFeatures.pagesSystem ? "Enable" : "Disable");
                setGroupSystem(siteFeatures.groupSystem ? "Enable" : "Disable");
                setBlogSystem(siteFeatures.blogSystem ? "Enable" : "Disable");
                setWhoCanPostBlogs(siteFeatures.whoCanPostBlogs ? "Enable" : "Disable");
                setBlogApprovalSystem(siteFeatures.blogApprovalSystem  ? "Enable" : "Disable");
                setEventSystem(siteFeatures.eventSystem ? "Enable" : "Disable");

                setEventSystemVisibility(siteFeatures.eventSystemVisibility ? "Registered User" : "Unregistered User");
                setProductSystemVisibility(siteFeatures.productSystemVisibility ? "Registered User" : "Unregistered User");
                setForumSystem(siteFeatures.forumSystem ? "Registered User" : "Unregistered User");
                setForumSystemVisibility(siteFeatures.forumSystemVisibility ? "Registered User" : "Unregistered User");

                setAdvertisementSystem(siteFeatures.advertisementSystem ? "Enable" : "Disable");
                setStoryStatusSystem(siteFeatures.storyStatusSystem ? "Enable" : "Disable");
                setGifSystem(siteFeatures.gifSystem ? "Enable" : "Disable");
                setFriendsNearbySystem(siteFeatures.friendsNearbySystem ? "Enable" : "Disable");
                setStickerSystem(siteFeatures.stickerSystem ? "Enable" : "Disable");
                setPopularPostsAndCommentSystem(siteFeatures.popularPostsAndCommentSystem ? "Enable" : "Disable");
                setGoogleMapsSystem(siteFeatures.googleMapsSystem ? "Enable" : "Disable");
                setMemoriesSystem(siteFeatures.memoriesSystem ? "Enable" : "Disable");
                setMembershipOnSignUpSystem(siteFeatures.membershipOnSignUpSystem ? "Enable" : "Disable");
                setPasswordComplexitySystem(siteFeatures.passwordComplexitySystem ? "Enable" : "Disable");
                setCommonThingsSystem(siteFeatures.commonThingsSystem ? "Enable" : "Disable");
                setNearbyShopsSystem(siteFeatures.nearbyShopsSystem ? "Enable" : "Disable");
                setNearbyBusinessesSystem(siteFeatures.nearbyBusinessesSystem ? "Enable" : "Disable");
                setShoutBoxSystem(siteFeatures.shoutBoxSystem ? "Enable" : "Disable");
                setBankAccountWithdrawalSystem(siteFeatures.bankAccountWithdrawalSystem ? "Enable" : "Disable");
                setNotificationWhenUserCreateNewPost(siteFeatures.notificationWhenUserCreateNewPost ? "Enable" : "Disable");
                setWeatherWidget(siteFeatures.weatherWidget ? "Enable" : "Disable");

                setWeatherWidgetKey(siteFeatures.weatherWidgetKey);

                
                setAllowUserToWithdrawlThoseMoney(PointAndLevelSystemSetting.allowUserToWithdrawlThoseMoney ? "Enable" : "Disable");
                setOneDollerPoints(PointAndLevelSystemSetting.oneDollerPoints);
                setComments(PointAndLevelSystemSetting.comments);
                setLikes(PointAndLevelSystemSetting.likes);
                setDislikes(PointAndLevelSystemSetting.dislikes);
                setWonders(PointAndLevelSystemSetting.wonders);
                setReactions(PointAndLevelSystemSetting.reactions);
                setCreatePost(PointAndLevelSystemSetting.createPost);
                setCreateBlog(PointAndLevelSystemSetting.createBlog);
                setFreeUserDailyLimit(PointAndLevelSystemSetting.freeUserDailyLimit);
                setProUserDailyLimit(PointAndLevelSystemSetting.proUserDailyLimit);


               
              }
    }

    async function updateSetting(body) {
      const { code, errorMessage } = await postData('/setting/site/features/update', { ...body, settingId: settingId });
      if (code) {
        success("Setting updated successfully");
      } else {
        error(errorMessage);
      }
    }
  
    const onSiteFeaturesSettingsSave = () => {
      console.log(greetingSystem, pokeSystem, pointAndLevelSystem, pagesSystem, groupSystem, blogSystem, whoCanPostBlogs,
        blogApprovalSystem, eventSystem);
      const body = {

        greetingSystem: greetingSystem === "Enable" ? true : false,
        pokeSystem: pokeSystem === "Enable" ? true : false,
        pointAndLevelSystem: pointAndLevelSystem === "Enable" ? true : false,
        pagesSystem: pagesSystem === "Enable" ? true : false,
        groupSystem: groupSystem === "Enable" ? true : false,
        blogSystem: blogSystem === "Enable" ? true : false,
        whoCanPostBlogs: whoCanPostBlogs === "Enable" ? true : false,
        blogApprovalSystem: blogApprovalSystem === "Enable" ? true : false,
        eventSystem: eventSystem === "Enable" ? true : false,
        eventSystemVisibility: eventSystemVisibility === "Registered User" ? true : false,
        productSystemVisibility: productSystemVisibility === "Registered User" ? true : false,
        forumSystem: forumSystem === "Registered User" ? true : false,
        forumSystemVisibility: forumSystemVisibility === "Registered User" ? true : false,
        advertisementSystem: advertisementSystem === "Enable" ? true : false,
        storyStatusSystem: storyStatusSystem === "Enable" ? true : false,
        gifSystem: gifSystem === "Enable" ? true : false,
        friendsNearbySystem: friendsNearbySystem === "Enable" ? true : false,
        giftSystem: giftSystem === "Enable" ? true : false,
        stickerSystem: stickerSystem === "Enable" ? true : false,
        popularPostsAndCommentSystem: popularPostsAndCommentSystem === "Enable" ? true : false,
        googleMapsSystem: googleMapsSystem === "Enable" ? true : false,
        memoriesSystem: memoriesSystem === "Enable" ? true : false,
        membershipOnSignUpSystem: membershipOnSignUpSystem === "Enable" ? true : false,
        passwordComplexitySystem: passwordComplexitySystem === "Enable" ? true : false,
        commonThingsSystem: commonThingsSystem === "Enable" ? true : false,
        nearbyShopsSystem: nearbyShopsSystem === "Enable" ? true : false,
        nearbyBusinessesSystem: nearbyBusinessesSystem === "Enable" ? true : false,
        shoutBoxSystem: shoutBoxSystem === "Enable" ? true : false,
        bankAccountWithdrawalSystem: bankAccountWithdrawalSystem === "Enable" ? true : false,
        notificationWhenUserCreateNewPost: notificationWhenUserCreateNewPost === "Enable" ? true : false,
        weatherWidget: weatherWidget  === "Enable" ? true : false,
        weatherWidgetKey:weatherWidgetKey,     
        
        oneDollerPoints:oneDollerPoints,
        comments:comments,
        likes:likes,
        dislikes:dislikes,
        wonders:wonders,
        reactions:reactions,
        createPost:createPost,
        createBlog:createBlog,
        freeUserDailyLimit:freeUserDailyLimit,
        proUserDailyLimit:proUserDailyLimit
                  

      }
      updateSetting(body);
    };


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
                      <Link to="/">Settings</Link>
                    </li>
                    <li className="breadcrumb-item active"> Manage Features</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="card">
                    <div className="card-header border-bottom border-bottom border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">Site Features</h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Greeting System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Good Afternoon, good morning messages."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="greetingSystem" 
                                    checked={greetingSystem}
                                    onChange={(e) =>
                                      setGreetingSystem(e.target.value)
                                    }
                                    value="Enable"
                                    />{" "}
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="greetingSystem"
                                    checked={
                                      greetingSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setGreetingSystem(e.target.value)
                                    }
                                    value="Disable"
                                    />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <NotificationSystem ref={notificationSystem} />
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Poke System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Poke System"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="poke_system" 
                                    checked={pokeSystem}
                                    onChange={(e) =>
                                      setPokeSystem(e.target.value)
                                    }
                                    value="Enable" />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="poke_system" 
                                     checked={
                                      pokeSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setPokeSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Point & level system{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Users can earn points from liking / sharing / commenting...."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="point_and_level_system" 
                                    checked={pointAndLevelSystem}
                                    onChange={(e) =>
                                      setPointAndLevelSystem(e.target.value)
                                    }
                                    value="Enable" 
                                    />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio"
                                    name="point_and_level_system"
                                      checked={
                                        pointAndLevelSystem === "Enable"
                                          ? false
                                          : true
                                      }
                                      onChange={(e) =>
                                        setPointAndLevelSystem(e.target.value)
                                      }
                                      value="Disable"/>
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- <div className="col-sm-12 mt-2">
                                        <ul className="list-unstyled mb-0">
										<h5>Games System  <i className="feather icon-help-circle" data-toggle="tooltip" title="Allow users to play games."></i></h5>
                                            <li className="d-inline-block mr-2">
                                                <fieldset>
                                                    <label>
                                                       <input type="radio" 
                                    name="group_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                                        Enable
                                                    </label>
                                                </fieldset>
                                            </li>
                                            <li className="d-inline-block mr-2">
                                                <fieldset>
                                                    <label>
                                                       <input type="radio" 
                                    name="group_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                                        Disabled
                                                    </label>
                                                </fieldset>
                                            </li>
                                           
                                        </ul>
										</div> --> */}
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Pages System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow users to create fan pages."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="pages_system" 
                                    checked={pagesSystem}
                                    onChange={(e) =>
                                      setPagesSystem(e.target.value)
                                    }
                                    value="Enable" />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="pages_system"
                                    checked={
                                      pagesSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setPagesSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- <div className="col-sm-12 mt-2">
                                        <ul className="list-unstyled mb-0">
										<h5>Classified (Market System) <i className="feather icon-help-circle" data-toggle="tooltip" title="Allow users to sell products."></i></h5>
                                            <li className="d-inline-block mr-2">
                                                <fieldset>
                                                    <label>
                                                       <input type="radio" 
                                    name="group_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                                        Enable
                                                    </label>
                                                </fieldset>
                                            </li>
                                            <li className="d-inline-block mr-2">
                                                <fieldset>
                                                    <label>
                                                       <input type="radio" 
                                    name="group_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                                        Disabled
                                                    </label>
                                                </fieldset>
                                            </li>
                                           
                                        </ul>
										</div> --> */}

                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Groups System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow users to create groups."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="group_system" 
                                    checked={groupSystem}
                                    onChange={(e) =>
                                      setGroupSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="group_system"
                                    checked={
                                      groupSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setGroupSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Blogs System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow users to create blogs."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="blog_system" 
                                    checked={blogSystem}
                                    onChange={(e) =>
                                      setBlogSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" name="blog_system"
                                    checked={
                                      blogSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setBlogSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Who Can Post Blogs ?</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="who_can_post_blog" 
                                    checked={whoCanPostBlogs}
                                    onChange={(e) =>
                                      setWhoCanPostBlogs(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" name="who_can_post_blog"
                                    checked={
                                      whoCanPostBlogs === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setWhoCanPostBlogs(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Blog Approval System </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="blog_approval_system" 
                                    checked={blogApprovalSystem}
                                    onChange={(e) =>
                                      setBlogApprovalSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="blog_approval_system"
                                    checked={
                                      blogApprovalSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setBlogApprovalSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Events System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow Events System."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" name="event_system" 
                                    checked={eventSystem}
                                    onChange={(e) =>
                                      setEventSystem(e.target.value)
                                    }
                                    value="Enable" />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="event_system"
                                    checked={
                                      eventSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setEventSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Events System Visibility{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Who can see events?"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input 
                                      type="radio"
                                      name="event_system_visibility"
                                      checked={
                                        eventSystemVisibility === "Registered User" ? true : false
                                      }
                                      onChange={(e) =>
                                        setEventSystemVisibility(e.target.value)
                                      }
                                      value="Registered User"
                                     
                                     />
                                    Registered User
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input 
                                     type="radio"
                                     name="event_system_visibility"
                                     checked={
                                       eventSystemVisibility === "Unregistered User" ? true : false
                                     }
                                     onChange={(e) =>
                                       setEventSystemVisibility(e.target.value)
                                     }
                                     value="Unregistered User"
                                    
                                     
                                     />
                                    Unegistered User
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Product System Visibility{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Who can see products?"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input 
                                     type="radio"
                                     name="product_system_visibility"
                                     checked={
                                       productSystemVisibility === "Registered User" ? true : false
                                     }
                                     onChange={(e) =>
                                       setProductSystemVisibility(e.target.value)
                                     }
                                     value="Registered User"
                                    />
                                    Registered User
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input 
                                     type="radio"
                                     name="product_system_visibility"
                                     checked={
                                       productSystemVisibility === "Unregistered User" ? true : false
                                     }
                                     onChange={(e) =>
                                       setProductSystemVisibility(e.target.value)
                                     }
                                     value="Unregistered User"
                                    />
                                    Unregistered User
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Forums System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow forum system."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input 
                                     type="radio"
                                     name="forum_system"
                                     checked={
                                       forumSystem === "Registered User" ? true : false
                                     }
                                     onChange={(e) =>
                                       setForumSystem(e.target.value)
                                     }
                                     value="Registered User"
                                    />
                                    Registered User
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input 
                                     type="radio"
                                     name="forum_system"
                                     checked={
                                       forumSystem === "Unregistered User" ? true : false
                                     }
                                     onChange={(e) =>
                                       setForumSystem(e.target.value)
                                     }
                                     value="Unregistered User"
                                    />
                                    Unregistered User
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Forums System Visibility{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Who can see forums?"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input 
                                         type="radio"
                                         name="forum_system_visibility"
                                         checked={
                                           forumSystemVisibility === "Registered User" ? true : false
                                         }
                                         onChange={(e) =>
                                           setForumSystemVisibility(e.target.value)
                                         }
                                         value="Registered User"                                    
                                    />
                                    Registered User
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input
                                     type="radio"
                                     name="forum_system_visibility"
                                     checked={
                                       forumSystemVisibility === "Unregistered User" ? true : false
                                     }
                                     onChange={(e) =>
                                       setForumSystemVisibility(e.target.value)
                                     }
                                     value="Unregistered User" 
                                    />
                                    Unregistered User
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- <div className="col-sm-12 mt-2">
                                        <ul className="list-unstyled mb-0">
										<h5>Movies System <i className="feather icon-help-circle" data-toggle="tooltip" title="Allow user to watch Movies"></i></h5>
                                            <li className="d-inline-block mr-2">
                                                <fieldset>
                                                    <label>
                                                       <input type="radio" 
                                    name="group_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                                        Enable
                                                    </label>
                                                </fieldset>
                                            </li>
                                            <li className="d-inline-block mr-2">
                                                <fieldset>
                                                    <label>
                                                       <input type="radio" 
                                    name="group_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                                        Disabled
                                                    </label>
                                                </fieldset>
                                            </li>
                                           
                                        </ul>
										</div> --> */}
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Advertisements System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow user to Create Ads."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                  <input type="radio" 
                                    name="advertisement_system" 
                                    checked={advertisementSystem}
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                  <input type="radio" 
                                    name="advertisement_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Story / Status System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow user to Create Stories & Status"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                     <input type="radio" 
                                    name="story_status_system" 
                                    checked={storyStatusSystem}
                                    onChange={(e) =>
                                      setStoryStatusSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="story_status_system"
                                    checked={
                                      storyStatusSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setStoryStatusSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                GIF System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow user to share gif images"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="gif_system" 
                                    checked={gifSystem}
                                    onChange={(e) =>
                                      setGifSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="gif_system"
                                    checked={
                                      gifSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setGifSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Friends Nearby System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow users to search nearby users."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                  <input type="radio" 
                                    name="friends_nearbysystem" 
                                    checked={friendsNearbySystem}
                                    onChange={(e) =>
                                      setFriendsNearbySystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                  <input type="radio" 
                                    name="friends_nearbysystem"
                                    checked={
                                      friendsNearbySystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setFriendsNearbySystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                GIFT System{" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Allow users to send gifts.You can manage gifts via ( Manage Features -> Gifts )"
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="gift_system" 
                                    checked={giftSystem}
                                    onChange={(e) =>
                                      setGiftSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="gift_system"
                                    checked={
                                      giftSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setGiftSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Stickers System</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                     <input type="radio" 
                                    name="stickers_system" 
                                    checked={stickerSystem}
                                    onChange={(e) =>
                                      setStickerSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="stickers_system"
                                    checked={
                                      stickerSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setStickerSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Popular Posts & Comments (Shows in header)
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="popular_post_comments" 
                                    checked={popularPostsAndCommentSystem}
                                    onChange={(e) =>
                                      setPopularPostsAndCommentSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="popular_post_comments"
                                    checked={
                                      popularPostsAndCommentSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setPopularPostsAndCommentSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>
                                Google Maps (Posts, Profile, Settings, Ads){" "}
                                <i
                                  className="feather icon-help-circle"
                                  data-toggle="tooltip"
                                  title="Note: This doesn't disable the map system, it disables google auto complete API."
                                ></i>
                              </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="google_maps" 
                                    checked={googleMapsSystem}
                                    onChange={(e) =>
                                      setGoogleMapsSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="google_maps"
                                    checked={
                                      googleMapsSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setGoogleMapsSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- <div className="col-sm-12 mt-2">
                                        <ul className="list-unstyled mb-0">
										<h5>Job System</h5>
                                            <li className="d-inline-block mr-2">
                                                <fieldset>
                                                    <label>
                                                       <input type="radio" 
                                    name="group_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                                        Enable
                                                    </label>
                                                </fieldset>
                                            </li>
                                            <li className="d-inline-block mr-2">
                                                <fieldset>
                                                    <label>
                                                       <input type="radio" 
                                    name="group_system"
                                    checked={
                                      advertisementSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAdvertisementSystem(e.target.value)
                                    }
                                    value="Disable" />
                                                        Disabled
                                                    </label>
                                                </fieldset>
                                            </li>
                                           
                                        </ul>
                                        </div> --> */}
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Memories System</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="memories_system" 
                                    checked={memoriesSystem}
                                    onChange={(e) =>
                                      setMemoriesSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="memories_system"
                                    checked={
                                      memoriesSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setMemoriesSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Membership On Sign Up System </h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="membership_on_signup" 
                                    checked={membershipOnSignUpSystem}
                                    onChange={(e) =>
                                      setMembershipOnSignUpSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="membership_on_signup"
                                    checked={
                                      membershipOnSignUpSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setMembershipOnSignUpSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Password Complexity System</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="password_complexity_system" 
                                    checked={passwordComplexitySystem}
                                    onChange={(e) =>
                                      setPasswordComplexitySystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="password_complexity_system"
                                    checked={
                                      passwordComplexitySystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setPasswordComplexitySystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Common Things System</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                     <input type="radio" 
                                    name="comman_things_system" 
                                    checked={commonThingsSystem}
                                    onChange={(e) =>
                                      setCommonThingsSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="comman_things_system"
                                    checked={
                                      commonThingsSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setCommonThingsSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Nearby Shops System</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="nearby_shops" 
                                    checked={nearbyShopsSystem}
                                    onChange={(e) =>
                                      setNearbyShopsSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="nearby_shops"
                                    checked={
                                      nearbyShopsSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setNearbyShopsSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Nearby Businesses System</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="nearby_business" 
                                    checked={nearbyBusinessesSystem}
                                    onChange={(e) =>
                                      setNearbyBusinessesSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="nearby_business"
                                    checked={
                                      nearbyBusinessesSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setNearbyBusinessesSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Shout Box System</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="shout_box_system" 
                                    checked={shoutBoxSystem}
                                    onChange={(e) =>
                                      setShoutBoxSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="shout_box_system"
                                    checked={
                                      shoutBoxSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setShoutBoxSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Bank Account Withdrawal System</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="bank_account_withdrawl" 
                                    checked={bankAccountWithdrawalSystem}
                                    onChange={(e) =>
                                      setBankAccountWithdrawalSystem(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="bank_account_withdrawl"
                                    checked={
                                      bankAccountWithdrawalSystem === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setBankAccountWithdrawalSystem(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Notification When User Create New Post</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                    <input type="radio" 
                                    name="notification_when_user_create_new_post" 
                                    checked={notificationWhenUserCreateNewPost}
                                    onChange={(e) =>
                                      setNotificationWhenUserCreateNewPost(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="notification_when_user_create_new_post"
                                    checked={
                                      notificationWhenUserCreateNewPost === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setNotificationWhenUserCreateNewPost(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-12 mt-2">
                            <ul className="list-unstyled mb-0">
                              <h5>Weather Widget</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                     <input type="radio" 
                                    name="weather_widget" 
                                    checked={weatherWidget}
                                    onChange={(e) =>
                                      setWeatherWidget(e.target.value)
                                    }
                                    value="Enable"  />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="weather_widget"
                                    checked={
                                      weatherWidget === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setWeatherWidget(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>

                          <div className="col-sm-12 mt-2">
                            <div className="form-group">
                              <div className="controls">
                                <label>Weather Widget Key</label>
                                <input
                                  type="text"
                                  name="weather_widget_key"
                                  className="form-control"
                                  placeholder="Enter Weather Widget Key"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={weatherWidgetKey}
                                  onChange={(e) => setWeatherWidgetKey(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-3">
                            <button onClick={onSiteFeaturesSettingsSave}

                             className="btn btn-primary shadow">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="card">
                    <div className="card-header border-bottom border-bottom border-bottom">
                      <div className="col-12">
                        <h4 className="card-title">
                          Point & level system settings
                        </h4>
                      </div>
                    </div>
                    <div className="card-content">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-12">
                            <ul className="list-unstyled mb-0">
                              <h5>Allow user to withdrawal those money</h5>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="allow_user_to_withdrawl_those_money" 
                                    checked={allowUserToWithdrawlThoseMoney}
                                    onChange={(e) =>
                                      setAllowUserToWithdrawlThoseMoney(e.target.value)
                                    }
                                    value="Enable"
                                    />
                                    Enable
                                  </label>
                                </fieldset>
                              </li>
                              <li className="d-inline-block mr-2">
                                <fieldset>
                                  <label>
                                   <input type="radio" 
                                    name="allow_user_to_withdrawl_those_money"
                                    checked={
                                      allowUserToWithdrawlThoseMoney === "Enable"
                                        ? false
                                        : true
                                    }
                                    onChange={(e) =>
                                      setAllowUserToWithdrawlThoseMoney(e.target.value)
                                    }
                                    value="Disable" />
                                    Disabled
                                  </label>
                                </fieldset>
                              </li>
                            </ul>
                          </div>

                          <div className="col-sm-12 mt-2">
                            <div className="form-group">
                              <div className="controls">
                                <label>$1.00 = ? Point</label>
                                <input
                                  type="text"
                                  name="dollar_points"
                                  className="form-control"
                                  placeholder="Enter Value"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={oneDollerPoints}
                                  onChange={(e) => setOneDollerPoints(e.target.value)}
                                />
                                
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Comments</label>
                                <input
                                  type="text"
                                  name="comments"
                                  className="form-control"
                                  placeholder="Enter Comments"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={comments}
                                  onChange={(e) => setComments(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Likes</label>
                                <input
                                  type="text"
                                  name="likes"
                                  className="form-control"
                                  placeholder="Enter Likes"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={likes}
                                  onChange={(e) => setLikes(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Dislikes</label>
                                <input
                                  type="text"
                                  name="dislikes"
                                  className="form-control"
                                  placeholder="Enter Dislikes"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={dislikes}
                                  onChange={(e) => setDislikes(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Wonders</label>
                                <input
                                  type="text"
                                  name="wonders"
                                  className="form-control"
                                  placeholder="Enter Wonders"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={wonders}
                                  onChange={(e) => setWonders(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Reaction</label>
                                <input
                                  type="text"
                                  name="reaction"
                                  className="form-control"
                                  placeholder="Enter Reaction"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={reactions}
                                  onChange={(e) => setReactions(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Create Post</label>
                                <input
                                  type="text"
                                  name="create_post"
                                  className="form-control"
                                  placeholder="Enter Create Post"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={createPost}
                                  onChange={(e) => setCreatePost(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Create Blog</label>
                                <input
                                  type="text"
                                  name="create_blog"
                                  className="form-control"
                                  placeholder="Enter Create Blog"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={createBlog}
                                  onChange={(e) => setCreateBlog(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Free users daily limit</label>
                                <input
                                  type="text"
                                  name="free_user_limit"
                                  className="form-control"
                                  placeholder="Enter Free users daily limit"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={freeUserDailyLimit}
                                  onChange={(e) => setFreeUserDailyLimit(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <div className="controls">
                                <label>Pro users daily limit</label>
                                <input
                                  type="text"
                                  name="text"
                                  className="form-control"
                                  placeholder="Enter Pro users daily limit"
                                  required=""
                                  data-validation-required-message="This First Name field is required"
                                  aria-invalid="false"
                                  value={proUserDailyLimit}
                                  onChange={(e) => setProUserDailyLimit(e.target.value)}
                                />
                                <div className="help-block"></div>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-12 mt-3">
                            <button onClick={onSiteFeaturesSettingsSave} className="btn btn-primary shadow">
                              Save
                            </button>
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
  );
}

