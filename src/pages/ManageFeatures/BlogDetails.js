import React from "react";
import Footer from "../../components/Footer";

import { Link } from "react-router-dom";

export default function BlogDetails() {
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
                  <h2 className="content-header-title float-left mb-0">
                    Article (Blogs)
                  </h2>
                  <div className="breadcrumb-wrapper col-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Blogs</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="page-knowledge-base.html">Blogs Details</a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-header-right text-md-right col-md-3 col-12 d-md-block d-none">
              <div className="form-group breadcrum-right">
                <div className="dropdown">
                  <button
                    className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="feather icon-settings"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      Chat
                    </a>
                    <a className="dropdown-item" href="#">
                      Email
                    </a>
                    <a className="dropdown-item" href="#">
                      Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <section id="knowledge-base-question">
              <div className="row">
                <div className="col-lg-3 col-md-5 col-12">
                  <div className="card">
                    <div className="card-body">
                      <h4>Related Questions</h4>
                      <a href="#" className="knowledge-base-question">
                        <ul className="list-group list-group-flush mt-1">
                          <li className="list-group-item">
                            Cake icing gummi bears?
                          </li>
                          <li className="list-group-item">
                            Jelly soufflé apple pie?
                          </li>
                          <li className="list-group-item">
                            Soufflé apple pie ice cream cotton?
                          </li>
                          <li className="list-group-item">
                            Powder wafer brownie?
                          </li>
                          <li className="list-group-item">
                            Toffee donut dragée cotton candy?
                          </li>
                          <li className="list-group-item">
                            Soufflé chupa chups chocolate bar?
                          </li>
                        </ul>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-7 col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="title mb-2">
                        <h1>Dessert halvah carrot cake sweet?</h1>
                        <p>Last updated on 10 Dec 2018</p>
                      </div>
                      <p>
                        Pastry jelly chocolate bar caramels fruitcake gummies
                        marshmallow lemon drops. Powder cupcake topping muffin
                        carrot cake croissant soufflé sugar plum sweet roll.
                        Cotton candy ice cream gummies biscuit bonbon biscuit.
                        Icing pastry bonbon. Sweet roll chocolate cake liquorice
                        jelly beans caramels jelly cookie caramels. Pastry candy
                        canes cake powder lollipop tootsie roll sugar plum. Cake
                        cotton candy dragée danish. Muffin croissant sweet roll
                        candy wafer marzipan cheesecake. Carrot cake toffee
                        gummi bears gingerbread donut biscuit. Donut chupa chups
                        oat cake cheesecake apple pie gummies marzipan icing
                        cake. Macaroon jelly beans gummi bears carrot cake
                        tiramisu liquorice. Sweet tootsie roll cookie marzipan
                        brownie icing cookie jelly tart. Lollipop cookie tootsie
                        roll candy canes.
                      </p>
                      <img
                        src="app-assets/images/pages/kb-article.jpg"
                        className="img-fluid rounded-sm mb-1 w-100"
                        alt="artilcle-img"
                      />
                      <p>
                        Candy canes oat cake biscuit halvah ice cream.
                        Marshmallow icing topping toffee caramels dessert carrot
                        cake. Liquorice soufflé brownie sugar plum dessert
                        cotton candy. Cupcake halvah topping oat cake soufflé
                        pastry dragée pudding cotton candy.
                      </p>
                      <h5 className="mb-1">Topics:</h5>
                      <ul className="article-question p-0 list-unstyled">
                        <li>
                          <i className="feather icon-chevrons-right"></i>{" "}
                          <span>Pastry jelly chocolate bar caramels</span>
                        </li>
                        <li>
                          <i className="feather icon-chevrons-right"></i>
                          <span>Donut chupa chups oat cake</span>
                        </li>
                        <li>
                          <i className="feather icon-chevrons-right"></i>
                          <span>
                            Marshmallow icing topping toffee caramels dessert
                            carrot cake
                          </span>
                        </li>
                      </ul>
                      <p className="mt-2">
                        Chocolate cake powder I love jelly beans lemon drops
                        candy fruitcake. Sesame snaps sugar plum chocolate candy
                        canes muffin. Wafer pastry topping croissant pudding
                        dessert I love. Bonbon apple pie fruitcake candy canes I
                        love. Lollipop sweet gingerbread I love I love dessert.
                        I love halvah marshmallow pie jelly beans macaroon
                        candy. Bonbon ice cream lollipop pie fruitcake oat cake.
                        Topping marshmallow I love sesame snaps dragée. I love
                        sesame snaps jelly. Chocolate sesame snaps jelly I love
                        I love powder jelly-o.
                      </p>
                      <div className="d-flex justify-content-between mt-2">
                        <a href="#">
                          <i className="feather icon-chevrons-left"></i>
                          <span>Previous Article</span>
                        </a>
                        <a href="#">
                          <span>Next Article</span>
                          <i className="feather icon-chevrons-right"></i>
                        </a>
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
