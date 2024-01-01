"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(C,c){
var l=require('@stdlib/strided-base-smskmap/dist'),R=require('@stdlib/math-base-special-truncf/dist');function _(e,r,a,s,t,i,u){return l(e,r,a,s,t,i,u,R)}c.exports=_
});var o=n(function(D,m){
var E=require('@stdlib/strided-base-smskmap/dist').ndarray,O=require('@stdlib/math-base-special-truncf/dist');function b(e,r,a,s,t,i,u,y,j,x){return E(e,r,a,s,t,i,u,y,j,x,O)}m.exports=b
});var d=n(function(F,f){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),h=o();g(p,"ndarray",h);f.exports=p
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=d(),v,k=z(w(__dirname,"./native.js"));k instanceof Error?v=A:v=k;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
