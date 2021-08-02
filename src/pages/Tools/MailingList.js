import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EmitFlags } from "typescript";
import Footer from "../../components/Footer";
import { url } from "../apiUrl";
import { postData } from "../apicall/apiCall";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

export default function MailingList() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailTo, setEmailTo] = useState("All");
  const [searchUser, setSearchUser] = useState("");
  const [check, setCheck] = useState(false);
  const [error, setError] = useState({});
  const [attachments, setImage] = useState([]);
  //const [message, setMessage] = useState(RichTextEditor.createEmptyValue());

  function onHandleChange(e, value) {
    if (value === "subject") {
      setSubject(e.target.value);
    }
    if (value === "message") {
      setMessage(e.target.value);
    }
    if (value === "emailTo") {
      setEmailTo(e.target.value);
    }
    if (value === "searchUser") {
      setSearchUser(e.target.value);
    }
    if (value === "checkbox") {
      setCheck(e.target.checked);
    }
  }
  // function onChangeSunEditor () {
  //   const contentTestContainer = document.createElement('div');
  //   contentTestContainer.innerHTML = message;
  //   const textContent = contentTestContainer.textContent;
  //   console.log('suneditorText',textContent);
  // }

  function uploadImageCallBack(file) {
    console.log("files", file);
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open("POST", url + "/media/insert");
      xhr.setRequestHeader("x-token", localStorage.getItem("meestToken"));
      const data = new FormData(); // eslint-disable-line no-undef
      data.append("files", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        const response = JSON.parse(xhr.responseText);
        const obj = {
          data: { link: response.data.url },
        };
        resolve(obj);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  }

  async function onSendEmail(e) {
    e.preventDefault();
    let error = {
      subject: false,
      message: false,
      emailTo: false,
    };
    if (subject.length < 1) {
      error.subject = true;
    }
    if (message.length < 1) {
      error.message = true;
    }
    if (emailTo.length < 1) {
      error.emailTo = true;
    }

    setError(error);
    if (!error.subject && !error.message && !error.emailTo) {
      let obj = {
        sendTo: emailTo,
        testMessage: check,
        subject: subject,
        body: message,
        attachments: attachments,
      };

      const response = await postData("/admin/send/mail", obj);
      console.log(response);
      if (response && response.code === 1 && response.success) {
        setSubject("");
        setMessage("");
        setEmailTo("All");
        setCheck(false);
        setSearchUser("");
      }
    }
  }
  const onCHangeFile = async (files, info, uploadHandler) => {
    let fileName = files[0].name;
    let atachment = [];
    console.log(fileName);
    let type = fileName.split(".");

    const formData = new FormData();
    console.log("addlangauteedk", files[0]);
    formData.append("files", files[0]);
    const { code, data } = await postData("/media/insert", formData);
    console.log("onCHangeFile -> data", data);
    if (code) {
      atachment.push({ url: data.url, fileName, fileType: data.mimeType });
      //success("File uploaded successfully");
      setImage(atachment);
      console.log("media ", data);
    }
  };
  //const editorref = useRef
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
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item active">Maling List</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content-body">
            <section id="basic-datatable">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header border-bottom">
                          <div className="col-12">
                            <h4 className="card-title">Send E-mail To Users</h4>
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="card-body card-dashboard">
                            <div className="api-key-wrapper">
                              <form>
                                <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Subject"
                                    className="form-control input-style"
                                    onChange={(e) =>
                                      onHandleChange(e, "subject")
                                    }
                                    value={subject}
                                  />
                                  {error.subject && (
                                    <div className="text-danger">
                                      This field can not be empty
                                    </div>
                                  )}
                                </div>
                                <fieldset className="form-group">
                                  <SunEditor
                                    setContents={message}
                                    onChange={(e) => setMessage(e)}
                                    setOptions={{
                                      height: "300px",
                                      buttonList: buttonList.complex,

                                      // onImageUploadBefore :{onCHangeFile}
                                      // [
                                      //   ['font', 'align','format'],
                                      //   ['image'],
                                      //   ['video'],
                                      //   ['undo'],
                                      //   ['redo'],
                                      // ]
                                    }}
                                     onImageUploadBefore={onCHangeFile}
                                  />

                                  {/* <Editor
                                  
                                    toolbarClassName="rdw-storybook-toolbar"
                                    wrapperClassName="rdw-storybook-wrapper"
                                    editorClassName="rdw-storybook-editor"
                                    // className="form-control"
                                    // id="basicTextarea"
                                    // rows="5"
                                    placeholder="Message (HTML Allowed)"
                                    // onChange={(e) =>
                                    //   onHandleChange(e, "message")
                                    // }
                                    // value={message}
                                    toolbar={{
                                      image: {
                                        uploadCallback: uploadImageCallBack,
                                        alt: {
                                          present: true,
                                          mandatory: false,
                                        },
                                      },
                                    }}
                                  /> */}
                                  {/* <textarea
                                    className="form-control"
                                    id="basicTextarea"
                                    rows="5"
                                    placeholder="Message (HTML Allowed)"
                                    onChange={(e) =>
                                      onHandleChange(e, "message")
                                    }
                                    value={message}
                                  ></textarea> */}
                                  {error.message && (
                                    <div className="text-danger">
                                      This field can not be empty
                                    </div>
                                  )}
                                </fieldset>
                                <label className="mb-1">
                                  <strong>Send E-mail To</strong>
                                </label>
                                <div className="form-group">
                                  <select
                                    className="select2-size-sm form-control"
                                    id="small-select"
                                    onChange={(e) =>
                                      onHandleChange(e, "emailTo")
                                    }
                                    value={emailTo}
                                  >
                                    <option value="All">All Users</option>
                                    <option value="Active Users">
                                      Active Users
                                    </option>
                                    <option value="Inactive Users">
                                      Inactive Users
                                    </option>
                                  </select>
                                  {error.emailTo && (
                                    <div className="text-danger">
                                      Please select one option
                                    </div>
                                  )}
                                </div>
                                {/* <div id="" className="form-group">
                                  <input
                                    type="text"
                                    placeholder="Search Users (Optional)"
                                    className="form-control input-style"
                                    onChange={(e) =>
                                      onHandleChange(e, "searchUser")
                                    }
                                    value={searchUser}
                                  />
                                </div> */}
                                <div id="" className="form-group">
                                  <input
                                    type="checkbox"
                                    onChange={(e) =>
                                      onHandleChange(e, "checkbox")
                                    }
                                    value={check}
                                  />
                                  <label>
                                    Test Message{" "}
                                    <small>(Send to my email first)</small>
                                  </label>
                                </div>
                                <div className="api-buttons mt-2">
                                  <button
                                    onClick={(e) => onSendEmail(e)}
                                    className="btn btn-primary shadow waves-effect waves-light"
                                  >
                                    Send
                                  </button>
                                </div>
                              </form>
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
