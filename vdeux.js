!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vdeux=e():t.vdeux=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(1)},function(t,e){"use strict";var o=function(t){return{install:function(e){Object.defineProperty(e.prototype,"$state",{get:function(){return t.getState()}}),Object.defineProperty(e.prototype,"$dispatch",{get:function(){return t.dispatch}})}}};t.exports=o}])});