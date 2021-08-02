import React from "react";

export default function ChatLog() {
  return (
    <>
      <div className="tab-pane" id="chatlog" aria-labelledby="chatlog-tab" role="tabpanel">
        <div className="content-area-wrapper m-0">
          No chats
          {/* <div className="sidebar-left">
            <div className="sidebar">
              <div className="chat-profile-sidebar">
                <header className="chat-profile-header">
                  <span className="close-icon">
                    <i className="feather icon-x"></i>
                  </span>
                  <div className="header-profile-sidebar">
                    <div className="avatar">
                      <img src="app-assets/images/portrait/small/avatar-s-11.jpg" alt="user_avatar" height="70" width="70" />
                      <span className="avatar-status-online avatar-status-lg"></span>
                    </div>
                    <h4 className="chat-user-name">John Doe</h4>
                  </div>
                </header>
                <div className="profile-sidebar-area">
                  <div className="scroll-area">
                    <h6>About</h6>
                    <div className="about-user">
                      <fieldset className="mb-0">
                        <textarea data-length="120" className="form-control char-textarea" id="textarea-counter" rows="5" placeholder="About User">Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.</textarea>
                      </fieldset>
                      <small className="counter-value float-right"><span className="char-count">108</span> / 120 </small>
                    </div>
                    <h6 className="mt-3">Status</h6>
                    <ul className="list-unstyled user-status mb-0">
                      <li className="pb-50">
                        <fieldset>
                          <div className="vs-radio-con vs-radio-success">
                            <input type="radio" name="userStatus" value="online" checked="checked" />
                            <span className="vs-radio">
                              <span className="vs-radio--border"></span>
                              <span className="vs-radio--circle"></span>
                            </span>
                            <span className="">Active</span>
                          </div>
                        </fieldset>
                      </li>
                      <li className="pb-50">
                        <fieldset>
                          <div className="vs-radio-con vs-radio-danger">
                            <input type="radio" name="userStatus" value="busy" />
                            <span className="vs-radio">
                              <span className="vs-radio--border"></span>
                              <span className="vs-radio--circle"></span>
                            </span>
                            <span className="">Do Not Disturb</span>
                          </div>
                        </fieldset>
                      </li>
                      <li className="pb-50">
                        <fieldset>
                          <div className="vs-radio-con vs-radio-warning">
                            <input type="radio" name="userStatus" value="away" />
                            <span className="vs-radio">
                              <span className="vs-radio--border"></span>
                              <span className="vs-radio--circle"></span>
                            </span>
                            <span className="">Away</span>
                          </div>
                        </fieldset>
                      </li>
                      <li className="pb-50">
                        <fieldset>
                          <div className="vs-radio-con vs-radio-secondary">
                            <input type="radio" name="userStatus" value="offline" />
                            <span className="vs-radio">
                              <span className="vs-radio--border"></span>
                              <span className="vs-radio--circle"></span>
                            </span>
                            <span className="">Offline</span>
                          </div>
                        </fieldset>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sidebar-content card">
                <span className="sidebar-close-icon">
                  <i className="feather icon-x"></i>
                </span>
                <div className="chat-fixed-search">
                  <div className="d-flex align-items-center">
                    <div className="sidebar-profile-toggle position-relative d-inline-flex">
                      <div className="avatar">
                        <img src="app-assets/images/portrait/small/avatar-s-11.jpg" alt="user_avatar" height="40" width="40" />
                        <span className="avatar-status-online"></span>
                      </div>
                      <div className="bullet-success bullet-sm position-absolute"></div>
                    </div>
                    <fieldset className="form-group position-relative has-icon-left mx-1 my-0 w-100">
                      <input type="text" className="form-control round" id="chat-search" placeholder="Search or start a new chat" />
                      <div className="form-control-position">
                        <i className="feather icon-search"></i>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div id="users-list" className="chat-user-list list-group position-relative">
                  <h3 className="primary p-1 mb-0">Chats</h3>
                  <ul className="chat-users-list-wrapper media-list">
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md">
                          <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-3.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Elizabeth Elliott</h5>
                          <p className="truncate">Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25">4:14 PM</span>
                          <span className="badge badge-primary badge-pill float-right">3</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md">
                          <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-7.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Kristopher Candy</h5>
                          <p className="truncate">Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25">9:09 AM</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <h3 className="primary p-1 mb-0">Contacts</h3>
                  <ul className="chat-users-list-wrapper media-list">
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md">
                          <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-8.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Sarah Woods</h5>
                          <p className="truncate">Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing.</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25"></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md">
                          <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-7.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Jenny Perich</h5>
                          <p className="truncate">Tart dragée carrot cake chocolate bar. Chocolate cake jelly beans caramels tootsie roll candy canes.</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25"></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md">
                          <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-5.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Sarah Montgomery</h5>
                          <p className="truncate">Tootsie roll sesame snaps biscuit icing jelly-o biscuit chupa chups powder.</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25"></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md">
                          <img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-9.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Heather Howell</h5>
                          <p className="truncate">Tart cookie dragée sesame snaps halvah. Fruitcake sugar plum gummies cheesecake toffee.</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25"></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md">
                          <mg className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-7.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Kelly Reyes</h5>
                          <p className="truncate">Wafer toffee tart jelly cake croissant chocolate bar cupcake donut. Fruitcake gingerbread tiramisu sweet jelly-o.</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25"></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md"><img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-14.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Vincent Nelson</h5>
                          <p className="truncate">Toffee gummi bears sugar plum gummi bears chocolate bar donut. Pudding cookie lemon drops icing</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25"></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md"><img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-3.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Elizabeth Elliott</h5>
                          <p className="truncate">Candy canes ice cream jelly beans carrot cake chocolate bar pastry candy jelly-o.</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25"></span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="pr-1">
                        <span className="avatar m-0 avatar-md"><img className="media-object rounded-circle" src="app-assets/images/portrait/small/avatar-s-7.jpg" height="42" width="42" alt="Generic placeholder image" />
                          <i></i>
                        </span>
                      </div>
                      <div className="user-chat-info">
                        <div className="contact-info">
                          <h5 className="font-weight-bold mb-0">Kristopher Candy</h5>
                          <p className="truncate">Marzipan bonbon chocolate bar biscuit lemon drops muffin jelly-o sweet jujubes.</p>
                        </div>
                        <div className="contact-meta">
                          <span className="float-right mb-25"></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="content-wrapper">
              <div className="content-header row">
              </div>
              <div className="content-body">
                <div className="chat-overlay"></div>
                <section className="chat-app-window">
                  <div className="start-chat-area">
                    <span className="mb-1 start-chat-icon feather icon-message-square"></span>
                    <h4 className="py-50 px-1 sidebar-toggle start-chat-text">Start Conversation</h4>
                  </div>
                  <div className="active-chat d-none">
                    <div className="chat_navbar">
                      <header className="chat_header d-flex justify-content-between align-items-center p-1">
                        <div className="vs-con-items d-flex align-items-center">
                          <div className="sidebar-toggle d-block d-lg-none mr-1"><i className="feather icon-menu font-large-1"></i></div>
                          <div className="avatar user-profile-toggle m-0 m-0 mr-1">
                            <img src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="" height="40" width="40" />
                            <span className="avatar-status-busy"></span>
                          </div>
                          <h6 className="mb-0">Felecia Rower</h6>
                        </div>
                        <span className="favorite"><i className="feather icon-star font-medium-5"></i></span>
                      </header>
                    </div>
                    <div className="user-chats">
                      <div className="chats">
                        <div className="chat">
                          <div className="chat-avatar">
                            <a className="avatar m-0" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="">
                              <img src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="avatar" height="40" width="40" />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-content">
                              <p>How can we help? We're here for you!</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a className="avatar m-0" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="">
                              <img src="app-assets/images/portrait/small/avatar-s-7.jpg" alt="avatar" height="40" width="40" />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-content">
                              <p>Hey John, I am looking for the best admin template.</p>
                              <p>Could you please help me to find it out?</p>
                            </div>
                            <div className="chat-content">
                              <p>It should be Bootstrap 4 compatible.</p>
                            </div>
                          </div>
                        </div>
                        <div className="divider">
                          <div className="divider-text">Yesterday</div>
                        </div>
                        <div className="chat">
                          <div className="chat-avatar">
                            <a className="avatar m-0" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="">
                              <img src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="avatar" height="40" width="40" />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-content">
                              <p>Absolutely!</p>
                            </div>
                            <div className="chat-content">
                              <p>Vuexy admin is the responsive bootstrap 4 admin template.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a className="avatar m-0" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="">
                              <img src="app-assets/images/portrait/small/avatar-s-7.jpg" alt="avatar" height="40" width="40" />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-content">
                              <p>Looks clean and fresh UI.</p>
                            </div>
                            <div className="chat-content">
                              <p>It's perfect for my next project.</p>
                            </div>
                            <div className="chat-content">
                              <p>How can I purchase it?</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat">
                          <div className="chat-avatar">
                            <a className="avatar m-0" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="">
                              <img src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="avatar" height="40" width="40" />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-content">
                              <p>Thanks, from ThemeForest.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat chat-left">
                          <div className="chat-avatar">
                            <a className="avatar m-0" data-toggle="tooltip" href="#" data-placement="left" title="" data-original-title="">
                              <img src="app-assets/images/portrait/small/avatar-s-7.jpg" alt="avatar" height="40" width="40" />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-content">
                              <p>I will purchase it for sure.</p>
                            </div>
                            <div className="chat-content">
                              <p>Thanks.</p>
                            </div>
                          </div>
                        </div>
                        <div className="chat">
                          <div className="chat-avatar">
                            <a className="avatar m-0" data-toggle="tooltip" href="#" data-placement="right" title="" data-original-title="">
                              <img src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="avatar" height="40" width="40" />
                            </a>
                          </div>
                          <div className="chat-body">
                            <div className="chat-content">
                              <p>Great, Feel free to get in touch on</p>
                            </div>
                            <div className="chat-content">
                              <p>https://pixinvent.ticksy.com/</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
                <div className="user-profile-sidebar">
                  <header className="user-profile-header">
                    <span className="close-icon">
                      <i className="feather icon-x"></i>
                    </span>
                    <div className="header-profile-sidebar">
                      <div className="avatar">
                        <img src="app-assets/images/portrait/small/avatar-s-1.jpg" alt="user_avatar" height="70" width="70" />
                        <span className="avatar-status-busy avatar-status-lg"></span>
                      </div>
                      <h4 className="chat-user-name">Felecia Rower</h4>
                    </div>
                  </header>
                  <div className="user-profile-sidebar-area p-2">
                    <h6>About</h6>
                    <p>Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        */}
        </div>
      </div>
    </>
  );
}
