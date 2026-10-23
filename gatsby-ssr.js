/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require('react');

// Light theme is the default. Apply a saved dark preference before first paint to avoid a flash.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.setAttribute('data-theme','dark');}}catch(e){}})();`;

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement('script', {
      key: 'theme-script',
      dangerouslySetInnerHTML: { __html: themeScript },
    }),
  ]);
};
