!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Vdeux=e():t.Vdeux=e()}(this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){t.exports=o(1)},function(t,e){"use strict";var o={install:function(t){Object.defineProperty(t.prototype,"$state",{get:function(){return this.$root._store.getState()}}),Object.defineProperty(t.prototype,"$dispatch",{get:function(){return this.$root._store.dispatch}}),t.mixin({beforeCreate:function(){var t=this.$options;t.store?this._store=t.store:t.parent&&t.parent._store&&(this._store=t.parent._store)}})}};t.exports=o}])});