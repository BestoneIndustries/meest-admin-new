import React from "react";

export default function Footer() {
  return (
    <footer className="footer footer-static footer-light footer_clr">
      
      <p className="clearfix blue-grey lighten-2 mb-0" >
        <span className="float-md-left d-block d-md-inline-block mt-25">
          COPYRIGHT &copy; 2020
          <a
            className="text-bold-800 grey darken-2"
            href="index.html"
            target="_blank"
          >
            Meest
          </a>
          All rights Reserved
        </span>
        
        <span className="float-md-right d-none d-md-block">
          Hand-crafted &amp; Made with
          <i className="feather icon-heart pink"></i>
        </span>
       
        <button className="btn btn-primary btn-icon scroll-top" type="button">
          <i className="feather icon-arrow-up"></i>
        </button>
      </p>
    
    </footer>
  );
}
