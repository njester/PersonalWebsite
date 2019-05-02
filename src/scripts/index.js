import cssVars from 'css-vars-ponyfill';
require('intersection-observer');
// Call using defaults
cssVars({
  rootElement  : document,
  shadowDOM    : false,
  include      : 'link[rel=stylesheet],style',
  exclude      : '',
  variables    : {},
  fixNestedCalc: true,
  onlyLegacy   : true,
  onlyVars     : false,
  preserve     : false,
  silent       : false,
  updateDOM    : true,
  updateURLs   : true,
  watch        : false});

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
      }
  };
}

import '../styles/index.scss';