/*!

=========================================================
* Paper Kit PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AddProduct from "views/examples/AddProduct.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPost_Seoul from "views/sections-sections/BlogPost_Seoul.js";
import BlogPost_Busan from "views/sections-sections/BlogPost_Busan.js";
import BlogPost_Daegu from "views/sections-sections/BlogPost_Daegu.js";
import BlogPost_Daejeon from "views/sections-sections/BlogPost_Daejeon.js";
import BlogPost_Gangwon from "views/sections-sections/BlogPost_Gangwon.js";
import BlogPost_Gwangju from "views/sections-sections/BlogPost_Gwangju.js";
import BlogPost_Incheon from "views/sections-sections/BlogPost_Incheon.js";
import BlogPost_Ulsan from "views/sections-sections/BlogPost_Ulsan.js";
import BlogPost_Jeju from "views/sections-sections/BlogPost_Jeju.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Discover from "views/examples/Discover.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error404 from "views/examples/Error404.js";
import Error422 from "views/examples/Error422.js";
import Error500 from "views/examples/Error500.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SearchWithSidebar from "views/examples/SearchWithSidebar.js";
import Settings from "views/examples/Settings.js";
import TwitterRedesign from "views/examples/TwitterRedesign.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={props => <NucleoIcons {...props} />}
      />
      <Route path="/sections" render={props => <Sections {...props} />} />
      <Route
        path="/presentation"
        render={props => <Presentation {...props} />}
      />
      <Route path="/about-us" render={props => <AboutUs {...props} />} />
      <Route path="/add-product" render={props => <AddProduct {...props} />} />
      <Route path="/blog-post" render={props => <BlogPost {...props} />} />

      <Route path="/blog-post-seoul" 
       // eslint-disable-next-line
       render={props => <BlogPost_Seoul {...props} />} />
      <Route path="/blog-post-daejeon" 
       // eslint-disable-next-line
       render={props => <BlogPost_Daejeon {...props} />} />
      <Route path="/blog-post-busan" 
       // eslint-disable-next-line
       render={props => <BlogPost_Busan {...props} />} />
      <Route path="/blog-post-daegu" 
       // eslint-disable-next-line
       render={props => <BlogPost_Daegu {...props} />} />
       <Route path="/blog-post-gangwon" 
       // eslint-disable-next-line
       render={props => <BlogPost_Gangwon {...props} />} />
       <Route path="/blog-post-gwangju" 
       // eslint-disable-next-line
       render={props => <BlogPost_Gwangju {...props} />} />
       <Route path="/blog-post-incheon" 
       // eslint-disable-next-line
       render={props => <BlogPost_Incheon {...props} />} />
       <Route path="/blog-post-ulsan" 
       // eslint-disable-next-line
       render={props => <BlogPost_Ulsan {...props} />} />
       <Route path="/blog-post-jeju" 
       // eslint-disable-next-line
       render={props => <BlogPost_Jeju {...props} />} />
      <Route path="/blog-posts" render={props => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={props => <ContactUs {...props} />} />
      <Route path="/discover" render={props => <Discover {...props} />} />
      <Route path="/e-commerce" render={props => <Ecommerce {...props} />} />
      <Route path="/error-404" render={props => <Error404 {...props} />} />
      <Route path="/error-422" render={props => <Error422 {...props} />} />
      <Route path="/error-500" render={props => <Error500 {...props} />} />
      <Route
        path="/landing-page"
        render={props => <LandingPage {...props} />}
      />
      <Route path="/login-page" render={props => <LoginPage {...props} />} />
      <Route
        path="/product-page"
        render={props => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/search-with-sidebar"
        render={props => <SearchWithSidebar {...props} />}
      />
      <Route path="/settings" render={props => <Settings {...props} />} />
      <Route
        path="/twitter-redesign"
        render={props => <TwitterRedesign {...props} />}
      />
      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
