import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { postData } from "../apicall/apiCall";

export default function TrendingImages() {
  const [loading, setLoading] = useState();
  const [imageData, setImageData] = useState([]);

  async function openTab(url) {
    const body = {
      key: "days",
      value: 1,
    };
    const resData = await postData("/trending/get/" + url, body);
    console.log("fetchData -> " + url, resData);
    if (resData) {
      if (url === "trendingImages") {
        setImageData(resData.data.rows);
      }
    }
  }
  const currentSlide = () => {};

  useEffect(() => {
    openTab("trendingImages");
  }, []);
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
                      <Link to="/Images">Images</Link>
                    </li>
                    <li className="breadcrumb-item active">Trending Images</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="tab-content"> */}
          <div
            class="tab-pane "
            id="images"
            aria-labelledby="images-tab"
            role="tabpanel"
          >
            <div
              id="DataTables_Table_0_wrapper"
              class="dataTables_wrapper dt-bootstrap4"
            >
              <div class="table-responsive">
                <table
                  class="table table-hover table-bordered mb-0"
                  id="table"
                  role="grid"
                  data-toggle="table"
                  data-pagination="true"
                  data-resizable="true"
                  data-click-to-select="true"
                >
                  <thead class="thead-light">
                    <tr>
                      <th data-field="id">ID</th>
                      <th data-field="username" data-editable="true">
                        Publisher
                      </th>
                      <th data-field="source" data-editable="true">
                        Image
                      </th>
                      <th data-field="email" data-editable="true">
                        Posted
                      </th>
                      <th data-field="likes">Likes</th>
                      <th data-field="views">Views</th>
                      <th data-field="share">Share</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading === "Loading" && (
                      <tr>
                        <td>Loading...</td>
                      </tr>
                    )}
                    {imageData &&
                      imageData.map((ele, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                class="setting-avatar"
                                src={ele.user.displayPicture}
                              />
                              {ele.user.username}
                            </td>
                            <td>
                              {/* <Link
                                to={{
                                  pathname: "/Post-Details",
                                  state: { id: ele.user.id },
                                }}
                              >
                                {" "}
                                Open Posts
                              </Link> */}
                              <a
                                href={ele.posts[0].post}
                                data-lightbox="post-article-gallery"
                                data-title=""
                                className="link-preview"
                                title="IMG"
                              >
                                <img
                                  className="setting-avatar"
                                  onClick={() => currentSlide()}
                                  src={ele.posts[0].post}
                                />
                              </a>
                            </td>
                            <td>{ele.createdAt}</td>
                            <td>{ele.likeCounts}</td>
                            <td>{ele.views}</td>
                            <td>{ele.shareCount}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
}
