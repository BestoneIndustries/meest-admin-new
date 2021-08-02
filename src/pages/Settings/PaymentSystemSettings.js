import React, { useState, useContext, useEffect } from "react";

import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

import { postData } from "../apicall/apiCall";

import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import NotificationSystem from "react-notification-system";
import PushNotificationSettings from "../APISettings/PushNotificationSettings";
import SendEmail from "../Tools/SendEmail";

export default function PaymentSystemSettings() {
  const [state, setState] = useState({ select1: "", select2: "", select3: "" });
  // const [state2, setState2] = useState({select2 : "",select2 : ""});
  // const [state3, setState3] = useState({select3 : "",select3 : ""});

  const [transactionLogs, setTransactionLogs] = useState("Enable");
  const [payPal, setPayPal] = useState("Enable");
  const [payPalMode, setPayPalMode] = useState("Live");
  const [payPalCurrency, setPayPalCurrency] = useState("");
  const [payPalClientId, setPayPalClientId] = useState("");
  const [payPalSecretKey, setPayPalSecretKey] = useState("");

  const [stripePaymentMethod, setStripePaymentMethod] = useState("Enable");
  const [aliPayPaymentMethod, setAliPayPaymentMethod] = useState("Enable");
  const [stripeCurrency, setStripeCurrency] = useState("");
  const [stripeSecretKey, setStripeSecretKey] = useState("");
  const [stripePublishableKey, setStripePublishableKey] = useState("");

  const [bankPaymentMode, setBankPaymentMode] = useState("Enable");
  const [bankDescription, setBankDescription] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");

  const [TwoCheckoutPaymentMethod, setTwoCheckoutPaymentMethod] = useState(
    "Enable"
  );
  const [TwoCheckoutMode, setTwoCheckoutMode] = useState("");
  const [TwoCheckoutCurrency, setTwoCheckoutCurrency] = useState("");
  const [TwoCheckoutSellerId, setTwoCheckoutSellerId] = useState("");
  const [TwoCheckoutPublishableKey, setTwoCheckoutPublishableKey] = useState(
    ""
  );
  const [TwoCheckoutPrivateKey, setTwoCheckoutPrivateKey] = useState("");

  const [settingId, setSettingId] = useState("");

  var notificationSystem = React.createRef();
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const [manageSiteFeatures, setManageSiteFeatures] = useState("");

  const success = (msg) => {
    console.log("success -> msg", msg);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "success",
    });
  };

  const error = (msg) => {
    console.log("error -> msg", msg);
    const notification = notificationSystem.current;
    notification.addNotification({
      message: msg,
      title: "Success",
      level: "error",
    });
  };

  const handleChnage = (e) => {
    var object = state;
    // var object2 = state2;
    //var object3 = state3;

    object[e.target.name] = e.target.value;
    //object2[e.target.name] = e.target.value;
    // object3[e.target.name] = e.target.value;
    //console.log("===========================================================",e.target.value);
    setState(object);

    //setState2(object2);
    // setState3(object3);
  };

  useEffect(() => {
    getPaymentSystemSetting();
  }, []);

  async function getPaymentSystemSetting() {
    const { data, code, errorMessage } = await postData(
      "/setting/payment/getAll"
    );
    console.log("fetchData -> resData", data);

    if (code) {
      const {
        payPalSystemSeting,
        localBankPayment,
        stripePaymentSetting,
        TwoCheckoutPayment,
        id,
      } = data;

      setSettingId(id);

      setTransactionLogs(
        payPalSystemSeting.transactionLogs ? "Enable" : "Disable"
      );
      setPayPal(payPalSystemSeting.payPal ? "Enable" : "Disable");
      setPayPalMode(
        payPalSystemSeting.payPalMode === "Live" ? "Live" : "Sandbox"
      );
      setPayPalCurrency(payPalSystemSeting.payPalCurrency);
      setPayPalClientId(payPalSystemSeting.payPalClientId);
      setPayPalSecretKey(payPalSystemSeting.payPalSecretKey);

      setStripePaymentMethod(
        stripePaymentSetting.stripePaymentMethod ? "Enable" : "Disable"
      );
      setAliPayPaymentMethod(
        stripePaymentSetting.aliPayPaymentMethod ? "Enable" : "Disable"
      );
      setStripeCurrency(stripePaymentSetting.stripeCurrency);
      setStripeSecretKey(stripePaymentSetting.stripeSecretKey);
      setStripePublishableKey(stripePaymentSetting.stripePublishableKey);

      setBankPaymentMode(
        localBankPayment.bankPaymentMode ? "Enable" : "Disable"
      );
      setBankDescription(localBankPayment.bankDescription);
      setAdditionalDescription(localBankPayment.additionalDescription);

      setTwoCheckoutPaymentMethod(
        TwoCheckoutPayment.TwoCheckoutPaymentMethod ? "Enable" : "Disable"
      );
      setTwoCheckoutMode(
        TwoCheckoutPayment.TwoCheckoutMode ? "Enable" : "Disable"
      );
      setTwoCheckoutCurrency(TwoCheckoutPayment.TwoCheckoutCurrency);
      setTwoCheckoutSellerId(TwoCheckoutPayment.TwoCheckoutSellerId);
      setTwoCheckoutPublishableKey(
        TwoCheckoutPayment.TwoCheckoutPublishableKey
      );
      setTwoCheckoutPrivateKey(TwoCheckoutPayment.TwoCheckoutPrivateKey);
    }
  }

  async function updateSetting(body) {
    const { code, errorMessage } = await postData("/setting/payment/update", {
      ...body,
      settingId: settingId,
    });
    if (code) {
      success("Setting updated successfully");
    } else {
      error(errorMessage);
    }
  }

  const onPaymentSystemSetting = () => {
    const body = {
      transactionLogs: transactionLogs === "Enable" ? true : false,
      payPal: payPal === "Enable" ? true : false,
      payPalMode: payPalMode === "Live" ? "Live" : "Sandbox",
      payPalCurrency: state.select1,
      payPalClientId: payPalClientId,
      payPalSecretKey: payPalSecretKey,

      stripePaymentMethod: stripePaymentMethod === "Enable" ? true : false,
      aliPayPaymentMethod: aliPayPaymentMethod === "Enable" ? true : false,
      stripeCurrency: state.select2,
      stripeSecretKey: stripeSecretKey,
      stripePublishableKey: stripePublishableKey,

      bankPaymentMode: bankPaymentMode === "Enable" ? true : false,
      bankDescription: bankDescription,
      additionalDescription: additionalDescription,

      TwoCheckoutPaymentMethod:
        TwoCheckoutPaymentMethod === "Enable" ? true : false,
      TwoCheckoutMode: TwoCheckoutMode === "Enable" ? true : false,
      TwoCheckoutCurrency: state.select3,
      TwoCheckoutSellerId: TwoCheckoutSellerId,
      TwoCheckoutPublishableKey: TwoCheckoutPublishableKey,
      TwoCheckoutPrivateKey: TwoCheckoutPrivateKey,
    };
    console.log("updated body " + payPalCurrency);
    updateSetting(body);
  };

  return (
    <>
      <div className="app-content content">
        <div className="content-overlay"></div>
        <div className="header-navbar-shadow"></div>
        <div className="content-wrapper">
          <div className="alert alert-warning">
            <i className="fa fa-question-circle fa-fw"></i>Please note that only
            the supported currencies from the payment provider are showing for
            each payment method.
          </div>
          <div className="content-header row">
            <div className="content-header-left col-md-9 col-12 mb-2">
              <div className="row breadcrumbs-top">
                <div className="breadcrumb-wrapper col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Settings</Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {" "}
                      Payment System Settings
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="dashboard-analytics">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">

                            <h4 className="card-title">
                              PayPal Payment Settings
                            </h4>

                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="">
                              <ul className="list-unstyled mb-0">
                                <h5>Show transaction logs</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="show_transaction_logs"
                                        checked={transactionLogs}
                                        onChange={(e) =>
                                          setTransactionLogs(e.target.value)
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
                                      <input
                                        type="radio"
                                        name="show_transaction_logs"
                                        checked={
                                          transactionLogs === "Enable"
                                            ? false
                                            : true
                                        }
                                        onChange={(e) =>
                                          setTransactionLogs(e.target.value)
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
                            <div className="">
                              <ul className="list-unstyled mt-2 mb-0">
                                <h5>PayPal</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="PayPal"
                                        checked={payPal}
                                        onChange={(e) =>
                                          setPayPal(e.target.value)
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
                                      <input
                                        type="radio"
                                        name="PayPal"
                                        checked={
                                          payPal === "Enable" ? false : true
                                        }
                                        onChange={(e) =>
                                          setPayPal(e.target.value)
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            <div className="">
                              <ul className="list-unstyled mt-2 mb-0">
                                <h5>PayPal Mode</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="PayPal_Mode"
                                        checked={payPalMode}
                                        onChange={(e) =>
                                          setPayPalMode(e.target.value)
                                        }
                                        value="Live"
                                      />
                                      Live
                                    </label>
                                  </fieldset>
                                </li>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="PayPal_Mode"
                                        checked={
                                          payPalMode === "Live" ? false : true
                                        }
                                        onChange={(e) =>
                                          setPayPalMode(e.target.value)
                                        }
                                        value="Sandbox"
                                      />
                                      SandBox
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 mt-2">
                                <h6>PayPal Currency</h6>
                                <div className="form-group">
                                  <select
                                    className="select2 form-control select2-hidden-accessible"
                                    data-select2-id="1"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    name="select1"
                                    onChange={handleChnage}
                                  >
                                    <option>{payPalCurrency} </option>

                                    <option name="USD" value="USD">
                                      USD
                                    </option>

                                    <option name="EUR" value="EUR">
                                      EUR
                                    </option>

                                    <option name="AUD" value="AUD">
                                      AUD
                                    </option>

                                    <option name="BRL" value="BRL">
                                      BRL
                                    </option>

                                    <option name="CAD" value="CAD">
                                      CAD
                                    </option>

                                    <option name="CZK" value="CZK">
                                      CZK
                                    </option>

                                    <option name="DKK" value="DKK">
                                      DKK
                                    </option>

                                    <option name="HKD" value="HKD">
                                      HKD
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>PayPal Client ID</label>
                                    <input
                                      type="text"
                                      name="text"
                                      className="form-control"
                                      placeholder="Enter PayPal Clinet ID"
                                      required=""
                                      aria-invalid="false"
                                      value={payPalClientId}
                                      onChange={(e) =>
                                        setPayPalClientId(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>PayPal Secret Key</label>
                                    <input
                                      type="text"
                                      name="text"
                                      className="form-control"
                                      placeholder="Enter PayPal Secret Key"
                                      required=""
                                      aria-invalid="false"
                                      value={payPalSecretKey}
                                      onChange={(e) =>
                                        setPayPalSecretKey(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 mt-3">
                                <button
                                  onClick={onPaymentSystemSetting}
                                  className="btn btn-primary shadow"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Local bank Payment</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="form-group">
                              <ul className="list-unstyled mb-0">
                                <h5>Bank Payment Method </h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="Bank_Payment_Mode"
                                        checked={bankPaymentMode}
                                        onChange={(e) =>
                                          setBankPaymentMode(e.target.value)
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
                                      <input
                                        type="radio"
                                        name="Bank_Payment_Mode"
                                        checked={
                                          bankPaymentMode === "Enable"
                                            ? false
                                            : true
                                        }
                                        onChange={(e) =>
                                          setBankPaymentMode(e.target.value)
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-group">
                                <fieldset className="form-label-group">
                                  <textarea
                                    className="form-control"
                                    id="label-textarea"
                                    rows="6"
                                    placeholder="Bank description"
                                    value={bankDescription}
                                    onChange={(e) =>
                                      setBankDescription(e.target.value)
                                    }
                                  ></textarea>
                                  <label htmlFor="label-textarea">
                                    Bank description
                                  </label>
                                </fieldset>
                              </div>
                            </div>
                            <div className="col-sm-12">
                              <div className="form-group">
                                <fieldset className="form-label-group">
                                  <textarea
                                    className="form-control"
                                    id="label-textarea"
                                    rows="6"
                                    placeholder="Header Custom JavaScript"
                                    value={additionalDescription}
                                    onChange={(e) =>
                                      setAdditionalDescription(e.target.value)
                                    }
                                  ></textarea>
                                  <label htmlFor="label-textarea">
                                    Bank Transfer Note
                                  </label>
                                </fieldset>
                              </div>
                            </div>
                            <div className="col-sm-12 mt-3">
                              <button
                                onClick={onPaymentSystemSetting}
                                className="btn btn-primary shadow"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* <!-- <div className="row">
                        <div className="col-12">
                           <div className="card">
                              <div className="card-header border-bottom">
                                 <div className="col-12">
                                    <h4 className="card-title">Bitcoin payment Settings</h4>
                                 </div>
                              </div>
                              <div className="card-content">
                                 <div className="card-body">
                                    <div className="">
                                       <ul className="list-unstyled mb-0">
                                          <h5>Bitcoin Payment Method </h5>
                                          <li className="d-inline-block mr-2">
                                             <fieldset>
                                                <label>
                                                <input type="radio" name="radio" />
                                                Enable
                                                </label>
                                             </fieldset>
                                          </li>
                                          <li className="d-inline-block mr-2">
                                             <fieldset>
                                                <label>
                                                <input type="radio" name="radio" />
                                                Disabled
                                                </label>
                                             </fieldset>
                                          </li>
                                       </ul>
                                       <br/>
                                       <p>You can register merchant account : <a href="#">coinpayments.net</a></p>
                                    </div>
                                    <div className="row">
                                       <div className="col-sm-12">
                                          <div className="form-group">
                                             <div className="controls">
                                                <label>Coinpayments API Secret Key Your coinpayments secret key</label>
                                                <input type="text" name="text" className="form-control" placeholder="Enter Coinpayments API" required="" aria-invalid="false" />
                                                <div className="help-block"></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-sm-12">
                                          <div className="form-group">
                                             <div className="controls">
                                                <label>Coinpayments Publishable Key Your coinpayments publishable key</label>
                                                <input type="text" name="text" className="form-control" placeholder="Enter Coinpayments Publishable" required="" aria-invalid="false" />
                                                <div className="help-block"></div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-sm-12 mt-3">
                                          <a href="#" className="btn btn-primary shadow">Save</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div> --> */}
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">
                              Stripe Payment Settings
                            </h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="">
                              <ul className="list-unstyled mb-0">
                                <h5>Stripe Payment Method </h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="Stripe_Payment_Method"
                                        checked={stripePaymentMethod}
                                        onChange={(e) =>
                                          setStripePaymentMethod(e.target.value)
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
                                      <input
                                        type="radio"
                                        name="Stripe_Payment_Method"
                                        checked={
                                          stripePaymentMethod === "Enable"
                                            ? false
                                            : true
                                        }
                                        onChange={(e) =>
                                          setStripePaymentMethod(e.target.value)
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            <div className="">
                              <ul className="list-unstyled mt-2 mb-0">
                                <h5>Alipay Payment Method</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="ali_payment_method"
                                        checked={aliPayPaymentMethod}
                                        onChange={(e) =>
                                          setAliPayPaymentMethod(e.target.value)
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
                                      <input
                                        type="radio"
                                        name="ali_payment_method"
                                        checked={
                                          aliPayPaymentMethod === "Enable"
                                            ? false
                                            : true
                                        }
                                        onChange={(e) =>
                                          setAliPayPaymentMethod(e.target.value)
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 mt-2">
                                <h6>Stripe Currency</h6>
                                <div className="form-group">
                                  <select
                                    className="select2 form-control select2-hidden-accessible"
                                    data-select2-id="1"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    name="select2"
                                    onChange={handleChnage}
                                  >
                                    <option>{stripeCurrency} </option>

                                    <option name="USD" value="USD">
                                      USD
                                    </option>

                                    <option name="EUR" value="EUR">
                                      EUR
                                    </option>

                                    <option name="AUD" value="AUD">
                                      AUD
                                    </option>

                                    <option name="BRL" value="BRL">
                                      BRL
                                    </option>

                                    <option name="CAD" value="CAD">
                                      CAD
                                    </option>

                                    <option name="CZK" value="CZK">
                                      CZK
                                    </option>

                                    <option name="DKK" value="DKK">
                                      DKK
                                    </option>

                                    <option name="HKD" value="HKD">
                                      HKD
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>
                                      Stripe API Secret Key Your Stripe secret
                                      key that starts with sk_
                                    </label>
                                    <input
                                      type="text"
                                      name="text"
                                      className="form-control"
                                      placeholder="Enter Stripe API"
                                      required=""
                                      aria-invalid="false"
                                      value={stripeSecretKey}
                                      onChange={(e) =>
                                        setStripeSecretKey(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>
                                      Stripe Publishable Key Your Stripe
                                      publishable key that starts with pk_
                                    </label>
                                    <input
                                      type="text"
                                      name="text"
                                      className="form-control"
                                      placeholder="Enter Stripe Publishable Key"
                                      required=""
                                      aria-invalid="false"
                                      value={stripePublishableKey}
                                      onChange={(e) =>
                                        setStripePublishableKey(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 mt-3">
                                <button
                                  onClick={onPaymentSystemSetting}
                                  className="btn btn-primary shadow"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Checkout Payment</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body">
                            <div className="">
                              <ul className="list-unstyled mb-0">
                                <h5>Checkout Payment Method</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="2Checkout_Payment_Method"
                                        checked={TwoCheckoutPaymentMethod}
                                        onChange={(e) =>
                                          setTwoCheckoutPaymentMethod(
                                            e.target.value
                                          )
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
                                      <input
                                        type="radio"
                                        name="2Checkout_Payment_Method"
                                        checked={
                                          TwoCheckoutPaymentMethod === "Enable"
                                            ? false
                                            : true
                                        }
                                        onChange={(e) =>
                                          setTwoCheckoutPaymentMethod(
                                            e.target.value
                                          )(e.target.value)
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            <div className="">
                              <ul className="list-unstyled mt-2 mb-0">
                                <h5>2Checkout Mode</h5>
                                <li className="d-inline-block mr-2">
                                  <fieldset>
                                    <label>
                                      <input
                                        type="radio"
                                        name="2Checkout_Mode"
                                        checked={TwoCheckoutMode}
                                        onChange={(e) =>
                                          setTwoCheckoutMode(e.target.value)
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
                                      <input
                                        type="radio"
                                        name="2Checkout_Mode"
                                        checked={
                                          TwoCheckoutMode === "Enable"
                                            ? false
                                            : true
                                        }
                                        onChange={(e) =>
                                          setTwoCheckoutMode(e.target.value)(
                                            e.target.value
                                          )
                                        }
                                        value="Disable"
                                      />
                                      Disabled
                                    </label>
                                  </fieldset>
                                </li>
                              </ul>
                            </div>
                            <div className="row">
                              <div className="col-sm-12 mt-2">
                                <h6>2Checkout Currency</h6>
                                <div className="form-group">
                                  <select
                                    className="select2 form-control select2-hidden-accessible"
                                    data-select2-id="1"
                                    tabindex="-1"
                                    aria-hidden="true"
                                    name="select3"
                                    onChange={handleChnage}
                                  >
                                    <option>{TwoCheckoutCurrency} </option>

                                    <option name="USD" value="USD">
                                      USD
                                    </option>

                                    <option name="EUR" value="EUR">
                                      EUR
                                    </option>

                                    <option name="AUD" value="AUD">
                                      AUD
                                    </option>

                                    <option name="BRL" value="BRL">
                                      BRL
                                    </option>

                                    <option name="CAD" value="CAD">
                                      CAD
                                    </option>

                                    <option name="CZK" value="CZK">
                                      CZK
                                    </option>

                                    <option name="DKK" value="DKK">
                                      DKK
                                    </option>

                                    <option name="HKD" value="HKD">
                                      HKD
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Seller ID</label>
                                    <input
                                      type="text"
                                      name="text"
                                      className="form-control"
                                      placeholder="Enter Seller ID"
                                      required=""
                                      aria-invalid="false"
                                      value={TwoCheckoutSellerId}
                                      onChange={(e) =>
                                        setTwoCheckoutSellerId(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Publishable Key</label>
                                    <input
                                      type="text"
                                      name="text"
                                      className="form-control"
                                      placeholder="Enter Publishable Key"
                                      required=""
                                      aria-invalid="false"
                                      value={TwoCheckoutPublishableKey}
                                      onChange={(e) =>
                                        setTwoCheckoutPublishableKey(
                                          e.target.value
                                        )
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="form-group">
                                  <div className="controls">
                                    <label>Private Key</label>
                                    <input
                                      type="text"
                                      name="text"
                                      className="form-control"
                                      placeholder="Enter Private Key"
                                      required=""
                                      aria-invalid="false"
                                      value={TwoCheckoutPrivateKey}
                                      onChange={(e) =>
                                        setTwoCheckoutPrivateKey(e.target.value)
                                      }
                                    />
                                    <div className="help-block"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-12 mt-3">
                                <button
                                  onClick={onPaymentSystemSetting}
                                  className="btn btn-primary shadow"
                                >
                                  Save
                                </button>
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
  );
}
