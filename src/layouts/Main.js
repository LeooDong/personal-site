import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import Analytics from '../components/Template/Analytics';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const { REACT_APP_GA_TRACKING_ID } = process.env;

const Main = (props) => (
  <HelmetProvider>
    <ScrollToTop />
    <Helmet titleTemplate="%s | Leo Dong" defaultTitle="Leo Dong" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${REACT_APP_GA_TRACKING_ID}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${REACT_APP_GA_TRACKING_ID}");
        `}
      </script>
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Leo Dong's personal website.",
};

export default Main;
