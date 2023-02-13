import { css } from '@emotion/react';
const reset = css`

/*!
Pure v0.6.0
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yahoo/pure/blob/master/LICENSE.md
*/
/*!
normalize.css v^3.0 | MIT License | git.io/normalize
Copyright (c) Nicolas Gallagher and Jonathan Neal
*/
/*! normalize.css v3.0.2 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}.hidden,[hidden]{display:none!important}.pure-img{max-width:100%;height:auto;display:block}/*!
Pure v0.6.0
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yahoo/pure/blob/master/LICENSE.md
*/
.pure-g{letter-spacing:-.31em;*letter-spacing:normal;*word-spacing:-.43em;text-rendering:optimizespeed;font-family:FreeSans,Arimo,"Droid Sans",Helvetica,Arial,sans-serif;display:-webkit-flex;-webkit-flex-flow:row wrap;display:-ms-flexbox;-ms-flex-flow:row wrap;-ms-align-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start}.opera-only :-o-prefocus,.pure-g{word-spacing:-.43em}.pure-u{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-g [class *="pure-u"]{font-family:sans-serif}.pure-u-1,.pure-u-1-1,.pure-u-1-2,.pure-u-1-3,.pure-u-2-3,.pure-u-1-4,.pure-u-3-4,.pure-u-1-5,.pure-u-2-5,.pure-u-3-5,.pure-u-4-5,.pure-u-5-5,.pure-u-1-6,.pure-u-5-6,.pure-u-1-8,.pure-u-3-8,.pure-u-5-8,.pure-u-7-8,.pure-u-1-12,.pure-u-5-12,.pure-u-7-12,.pure-u-11-12,.pure-u-1-24,.pure-u-2-24,.pure-u-3-24,.pure-u-4-24,.pure-u-5-24,.pure-u-6-24,.pure-u-7-24,.pure-u-8-24,.pure-u-9-24,.pure-u-10-24,.pure-u-11-24,.pure-u-12-24,.pure-u-13-24,.pure-u-14-24,.pure-u-15-24,.pure-u-16-24,.pure-u-17-24,.pure-u-18-24,.pure-u-19-24,.pure-u-20-24,.pure-u-21-24,.pure-u-22-24,.pure-u-23-24,.pure-u-24-24{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-1-24{width:4.1667%;*width:4.1357%}.pure-u-1-12,.pure-u-2-24{width:8.3333%;*width:8.3023%}.pure-u-1-8,.pure-u-3-24{width:12.5%;*width:12.469%}.pure-u-1-6,.pure-u-4-24{width:16.6667%;*width:16.6357%}.pure-u-1-5{width:20%;*width:19.969%}.pure-u-5-24{width:20.8333%;*width:20.8023%}.pure-u-1-4,.pure-u-6-24{width:25%;*width:24.969%}.pure-u-7-24{width:29.1667%;*width:29.1357%}.pure-u-1-3,.pure-u-8-24{width:33.3333%;*width:33.3023%}.pure-u-3-8,.pure-u-9-24{width:37.5%;*width:37.469%}.pure-u-2-5{width:40%;*width:39.969%}.pure-u-5-12,.pure-u-10-24{width:41.6667%;*width:41.6357%}.pure-u-11-24{width:45.8333%;*width:45.8023%}.pure-u-1-2,.pure-u-12-24{width:50%;*width:49.969%}.pure-u-13-24{width:54.1667%;*width:54.1357%}.pure-u-7-12,.pure-u-14-24{width:58.3333%;*width:58.3023%}.pure-u-3-5{width:60%;*width:59.969%}.pure-u-5-8,.pure-u-15-24{width:62.5%;*width:62.469%}.pure-u-2-3,.pure-u-16-24{width:66.6667%;*width:66.6357%}.pure-u-17-24{width:70.8333%;*width:70.8023%}.pure-u-3-4,.pure-u-18-24{width:75%;*width:74.969%}.pure-u-19-24{width:79.1667%;*width:79.1357%}.pure-u-4-5{width:80%;*width:79.969%}.pure-u-5-6,.pure-u-20-24{width:83.3333%;*width:83.3023%}.pure-u-7-8,.pure-u-21-24{width:87.5%;*width:87.469%}.pure-u-11-12,.pure-u-22-24{width:91.6667%;*width:91.6357%}.pure-u-23-24{width:95.8333%;*width:95.8023%}.pure-u-1,.pure-u-1-1,.pure-u-5-5,.pure-u-24-24{width:100%}/*!
Pure v0.6.0
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
https://github.com/yahoo/pure/blob/master/LICENSE.md
*/
@media screen and (min-width:35.5em){.pure-u-sm-1,.pure-u-sm-1-1,.pure-u-sm-1-2,.pure-u-sm-1-3,.pure-u-sm-2-3,.pure-u-sm-1-4,.pure-u-sm-3-4,.pure-u-sm-1-5,.pure-u-sm-2-5,.pure-u-sm-3-5,.pure-u-sm-4-5,.pure-u-sm-5-5,.pure-u-sm-1-6,.pure-u-sm-5-6,.pure-u-sm-1-8,.pure-u-sm-3-8,.pure-u-sm-5-8,.pure-u-sm-7-8,.pure-u-sm-1-12,.pure-u-sm-5-12,.pure-u-sm-7-12,.pure-u-sm-11-12,.pure-u-sm-1-24,.pure-u-sm-2-24,.pure-u-sm-3-24,.pure-u-sm-4-24,.pure-u-sm-5-24,.pure-u-sm-6-24,.pure-u-sm-7-24,.pure-u-sm-8-24,.pure-u-sm-9-24,.pure-u-sm-10-24,.pure-u-sm-11-24,.pure-u-sm-12-24,.pure-u-sm-13-24,.pure-u-sm-14-24,.pure-u-sm-15-24,.pure-u-sm-16-24,.pure-u-sm-17-24,.pure-u-sm-18-24,.pure-u-sm-19-24,.pure-u-sm-20-24,.pure-u-sm-21-24,.pure-u-sm-22-24,.pure-u-sm-23-24,.pure-u-sm-24-24{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-sm-1-24{width:4.1667%;*width:4.1357%}.pure-u-sm-1-12,.pure-u-sm-2-24{width:8.3333%;*width:8.3023%}.pure-u-sm-1-8,.pure-u-sm-3-24{width:12.5%;*width:12.469%}.pure-u-sm-1-6,.pure-u-sm-4-24{width:16.6667%;*width:16.6357%}.pure-u-sm-1-5{width:20%;*width:19.969%}.pure-u-sm-5-24{width:20.8333%;*width:20.8023%}.pure-u-sm-1-4,.pure-u-sm-6-24{width:25%;*width:24.969%}.pure-u-sm-7-24{width:29.1667%;*width:29.1357%}.pure-u-sm-1-3,.pure-u-sm-8-24{width:33.3333%;*width:33.3023%}.pure-u-sm-3-8,.pure-u-sm-9-24{width:37.5%;*width:37.469%}.pure-u-sm-2-5{width:40%;*width:39.969%}.pure-u-sm-5-12,.pure-u-sm-10-24{width:41.6667%;*width:41.6357%}.pure-u-sm-11-24{width:45.8333%;*width:45.8023%}.pure-u-sm-1-2,.pure-u-sm-12-24{width:50%;*width:49.969%}.pure-u-sm-13-24{width:54.1667%;*width:54.1357%}.pure-u-sm-7-12,.pure-u-sm-14-24{width:58.3333%;*width:58.3023%}.pure-u-sm-3-5{width:60%;*width:59.969%}.pure-u-sm-5-8,.pure-u-sm-15-24{width:62.5%;*width:62.469%}.pure-u-sm-2-3,.pure-u-sm-16-24{width:66.6667%;*width:66.6357%}.pure-u-sm-17-24{width:70.8333%;*width:70.8023%}.pure-u-sm-3-4,.pure-u-sm-18-24{width:75%;*width:74.969%}.pure-u-sm-19-24{width:79.1667%;*width:79.1357%}.pure-u-sm-4-5{width:80%;*width:79.969%}.pure-u-sm-5-6,.pure-u-sm-20-24{width:83.3333%;*width:83.3023%}.pure-u-sm-7-8,.pure-u-sm-21-24{width:87.5%;*width:87.469%}.pure-u-sm-11-12,.pure-u-sm-22-24{width:91.6667%;*width:91.6357%}.pure-u-sm-23-24{width:95.8333%;*width:95.8023%}.pure-u-sm-1,.pure-u-sm-1-1,.pure-u-sm-5-5,.pure-u-sm-24-24{width:100%}}@media screen and (min-width:48em){.pure-u-md-1,.pure-u-md-1-1,.pure-u-md-1-2,.pure-u-md-1-3,.pure-u-md-2-3,.pure-u-md-1-4,.pure-u-md-3-4,.pure-u-md-1-5,.pure-u-md-2-5,.pure-u-md-3-5,.pure-u-md-4-5,.pure-u-md-5-5,.pure-u-md-1-6,.pure-u-md-5-6,.pure-u-md-1-8,.pure-u-md-3-8,.pure-u-md-5-8,.pure-u-md-7-8,.pure-u-md-1-12,.pure-u-md-5-12,.pure-u-md-7-12,.pure-u-md-11-12,.pure-u-md-1-24,.pure-u-md-2-24,.pure-u-md-3-24,.pure-u-md-4-24,.pure-u-md-5-24,.pure-u-md-6-24,.pure-u-md-7-24,.pure-u-md-8-24,.pure-u-md-9-24,.pure-u-md-10-24,.pure-u-md-11-24,.pure-u-md-12-24,.pure-u-md-13-24,.pure-u-md-14-24,.pure-u-md-15-24,.pure-u-md-16-24,.pure-u-md-17-24,.pure-u-md-18-24,.pure-u-md-19-24,.pure-u-md-20-24,.pure-u-md-21-24,.pure-u-md-22-24,.pure-u-md-23-24,.pure-u-md-24-24{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-md-1-24{width:4.1667%;*width:4.1357%}.pure-u-md-1-12,.pure-u-md-2-24{width:8.3333%;*width:8.3023%}.pure-u-md-1-8,.pure-u-md-3-24{width:12.5%;*width:12.469%}.pure-u-md-1-6,.pure-u-md-4-24{width:16.6667%;*width:16.6357%}.pure-u-md-1-5{width:20%;*width:19.969%}.pure-u-md-5-24{width:20.8333%;*width:20.8023%}.pure-u-md-1-4,.pure-u-md-6-24{width:25%;*width:24.969%}.pure-u-md-7-24{width:29.1667%;*width:29.1357%}.pure-u-md-1-3,.pure-u-md-8-24{width:33.3333%;*width:33.3023%}.pure-u-md-3-8,.pure-u-md-9-24{width:37.5%;*width:37.469%}.pure-u-md-2-5{width:40%;*width:39.969%}.pure-u-md-5-12,.pure-u-md-10-24{width:41.6667%;*width:41.6357%}.pure-u-md-11-24{width:45.8333%;*width:45.8023%}.pure-u-md-1-2,.pure-u-md-12-24{width:50%;*width:49.969%}.pure-u-md-13-24{width:54.1667%;*width:54.1357%}.pure-u-md-7-12,.pure-u-md-14-24{width:58.3333%;*width:58.3023%}.pure-u-md-3-5{width:60%;*width:59.969%}.pure-u-md-5-8,.pure-u-md-15-24{width:62.5%;*width:62.469%}.pure-u-md-2-3,.pure-u-md-16-24{width:66.6667%;*width:66.6357%}.pure-u-md-17-24{width:70.8333%;*width:70.8023%}.pure-u-md-3-4,.pure-u-md-18-24{width:75%;*width:74.969%}.pure-u-md-19-24{width:79.1667%;*width:79.1357%}.pure-u-md-4-5{width:80%;*width:79.969%}.pure-u-md-5-6,.pure-u-md-20-24{width:83.3333%;*width:83.3023%}.pure-u-md-7-8,.pure-u-md-21-24{width:87.5%;*width:87.469%}.pure-u-md-11-12,.pure-u-md-22-24{width:91.6667%;*width:91.6357%}.pure-u-md-23-24{width:95.8333%;*width:95.8023%}.pure-u-md-1,.pure-u-md-1-1,.pure-u-md-5-5,.pure-u-md-24-24{width:100%}}@media screen and (min-width:64em){.pure-u-lg-1,.pure-u-lg-1-1,.pure-u-lg-1-2,.pure-u-lg-1-3,.pure-u-lg-2-3,.pure-u-lg-1-4,.pure-u-lg-3-4,.pure-u-lg-1-5,.pure-u-lg-2-5,.pure-u-lg-3-5,.pure-u-lg-4-5,.pure-u-lg-5-5,.pure-u-lg-1-6,.pure-u-lg-5-6,.pure-u-lg-1-8,.pure-u-lg-3-8,.pure-u-lg-5-8,.pure-u-lg-7-8,.pure-u-lg-1-12,.pure-u-lg-5-12,.pure-u-lg-7-12,.pure-u-lg-11-12,.pure-u-lg-1-24,.pure-u-lg-2-24,.pure-u-lg-3-24,.pure-u-lg-4-24,.pure-u-lg-5-24,.pure-u-lg-6-24,.pure-u-lg-7-24,.pure-u-lg-8-24,.pure-u-lg-9-24,.pure-u-lg-10-24,.pure-u-lg-11-24,.pure-u-lg-12-24,.pure-u-lg-13-24,.pure-u-lg-14-24,.pure-u-lg-15-24,.pure-u-lg-16-24,.pure-u-lg-17-24,.pure-u-lg-18-24,.pure-u-lg-19-24,.pure-u-lg-20-24,.pure-u-lg-21-24,.pure-u-lg-22-24,.pure-u-lg-23-24,.pure-u-lg-24-24{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-lg-1-24{width:4.1667%;*width:4.1357%}.pure-u-lg-1-12,.pure-u-lg-2-24{width:8.3333%;*width:8.3023%}.pure-u-lg-1-8,.pure-u-lg-3-24{width:12.5%;*width:12.469%}.pure-u-lg-1-6,.pure-u-lg-4-24{width:16.6667%;*width:16.6357%}.pure-u-lg-1-5{width:20%;*width:19.969%}.pure-u-lg-5-24{width:20.8333%;*width:20.8023%}.pure-u-lg-1-4,.pure-u-lg-6-24{width:25%;*width:24.969%}.pure-u-lg-7-24{width:29.1667%;*width:29.1357%}.pure-u-lg-1-3,.pure-u-lg-8-24{width:33.3333%;*width:33.3023%}.pure-u-lg-3-8,.pure-u-lg-9-24{width:37.5%;*width:37.469%}.pure-u-lg-2-5{width:40%;*width:39.969%}.pure-u-lg-5-12,.pure-u-lg-10-24{width:41.6667%;*width:41.6357%}.pure-u-lg-11-24{width:45.8333%;*width:45.8023%}.pure-u-lg-1-2,.pure-u-lg-12-24{width:50%;*width:49.969%}.pure-u-lg-13-24{width:54.1667%;*width:54.1357%}.pure-u-lg-7-12,.pure-u-lg-14-24{width:58.3333%;*width:58.3023%}.pure-u-lg-3-5{width:60%;*width:59.969%}.pure-u-lg-5-8,.pure-u-lg-15-24{width:62.5%;*width:62.469%}.pure-u-lg-2-3,.pure-u-lg-16-24{width:66.6667%;*width:66.6357%}.pure-u-lg-17-24{width:70.8333%;*width:70.8023%}.pure-u-lg-3-4,.pure-u-lg-18-24{width:75%;*width:74.969%}.pure-u-lg-19-24{width:79.1667%;*width:79.1357%}.pure-u-lg-4-5{width:80%;*width:79.969%}.pure-u-lg-5-6,.pure-u-lg-20-24{width:83.3333%;*width:83.3023%}.pure-u-lg-7-8,.pure-u-lg-21-24{width:87.5%;*width:87.469%}.pure-u-lg-11-12,.pure-u-lg-22-24{width:91.6667%;*width:91.6357%}.pure-u-lg-23-24{width:95.8333%;*width:95.8023%}.pure-u-lg-1,.pure-u-lg-1-1,.pure-u-lg-5-5,.pure-u-lg-24-24{width:100%}}@media screen and (min-width:80em){.pure-u-xl-1,.pure-u-xl-1-1,.pure-u-xl-1-2,.pure-u-xl-1-3,.pure-u-xl-2-3,.pure-u-xl-1-4,.pure-u-xl-3-4,.pure-u-xl-1-5,.pure-u-xl-2-5,.pure-u-xl-3-5,.pure-u-xl-4-5,.pure-u-xl-5-5,.pure-u-xl-1-6,.pure-u-xl-5-6,.pure-u-xl-1-8,.pure-u-xl-3-8,.pure-u-xl-5-8,.pure-u-xl-7-8,.pure-u-xl-1-12,.pure-u-xl-5-12,.pure-u-xl-7-12,.pure-u-xl-11-12,.pure-u-xl-1-24,.pure-u-xl-2-24,.pure-u-xl-3-24,.pure-u-xl-4-24,.pure-u-xl-5-24,.pure-u-xl-6-24,.pure-u-xl-7-24,.pure-u-xl-8-24,.pure-u-xl-9-24,.pure-u-xl-10-24,.pure-u-xl-11-24,.pure-u-xl-12-24,.pure-u-xl-13-24,.pure-u-xl-14-24,.pure-u-xl-15-24,.pure-u-xl-16-24,.pure-u-xl-17-24,.pure-u-xl-18-24,.pure-u-xl-19-24,.pure-u-xl-20-24,.pure-u-xl-21-24,.pure-u-xl-22-24,.pure-u-xl-23-24,.pure-u-xl-24-24{display:inline-block;*display:inline;zoom:1;letter-spacing:normal;word-spacing:normal;vertical-align:top;text-rendering:auto}.pure-u-xl-1-24{width:4.1667%;*width:4.1357%}.pure-u-xl-1-12,.pure-u-xl-2-24{width:8.3333%;*width:8.3023%}.pure-u-xl-1-8,.pure-u-xl-3-24{width:12.5%;*width:12.469%}.pure-u-xl-1-6,.pure-u-xl-4-24{width:16.6667%;*width:16.6357%}.pure-u-xl-1-5{width:20%;*width:19.969%}.pure-u-xl-5-24{width:20.8333%;*width:20.8023%}.pure-u-xl-1-4,.pure-u-xl-6-24{width:25%;*width:24.969%}.pure-u-xl-7-24{width:29.1667%;*width:29.1357%}.pure-u-xl-1-3,.pure-u-xl-8-24{width:33.3333%;*width:33.3023%}.pure-u-xl-3-8,.pure-u-xl-9-24{width:37.5%;*width:37.469%}.pure-u-xl-2-5{width:40%;*width:39.969%}.pure-u-xl-5-12,.pure-u-xl-10-24{width:41.6667%;*width:41.6357%}.pure-u-xl-11-24{width:45.8333%;*width:45.8023%}.pure-u-xl-1-2,.pure-u-xl-12-24{width:50%;*width:49.969%}.pure-u-xl-13-24{width:54.1667%;*width:54.1357%}.pure-u-xl-7-12,.pure-u-xl-14-24{width:58.3333%;*width:58.3023%}.pure-u-xl-3-5{width:60%;*width:59.969%}.pure-u-xl-5-8,.pure-u-xl-15-24{width:62.5%;*width:62.469%}.pure-u-xl-2-3,.pure-u-xl-16-24{width:66.6667%;*width:66.6357%}.pure-u-xl-17-24{width:70.8333%;*width:70.8023%}.pure-u-xl-3-4,.pure-u-xl-18-24{width:75%;*width:74.969%}.pure-u-xl-19-24{width:79.1667%;*width:79.1357%}.pure-u-xl-4-5{width:80%;*width:79.969%}.pure-u-xl-5-6,.pure-u-xl-20-24{width:83.3333%;*width:83.3023%}.pure-u-xl-7-8,.pure-u-xl-21-24{width:87.5%;*width:87.469%}.pure-u-xl-11-12,.pure-u-xl-22-24{width:91.6667%;*width:91.6357%}.pure-u-xl-23-24{width:95.8333%;*width:95.8023%}.pure-u-xl-1,.pure-u-xl-1-1,.pure-u-xl-5-5,.pure-u-xl-24-24{width:100%}}

@import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display:block;}
body {line-height:1.5;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}
h1, h2, h3, h4, h5, h6 {line-height:1.2;}
sub, sup {line-height:0;}
ol, ul {list-style:none;}
blockquote, q {quotes:none;}
blockquote:before, blockquote:after, q:before, q:after {content:'';content:none;}
table {border-collapse:collapse;border-spacing:0;}
caption, th, td {text-align:left;font-weight:normal;float:none !important;}
table, th, td {vertical-align:middle;}
a {text-decoration:none;}

* {font-family: 'Open Sans', 'Malgun Gothic', '맑은 고딕', Dotum, '돋움', 'Segoe UI Symbol', sans-serif !important;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;}


@media screen and (min-device-width: 64em){
* {font-family: 'Noto Sans KR', sans-serif !important;}
}


svg {vertical-align:top;}
*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
.text--uppercase {text-transform:uppercase}
.text--left {text-align:left}
.text--center {text-align:center}
.text--right {text-align:right}
.text--justify {text-align:justify}


#wrap {position:absolute;width:100%;height:100vh;margin:0 auto;}

 /* 배경색 */
.bk_gray_1 {background-color:#8e8e8e;}
.bk_gray_1, .bk_gray_1 * {transition:all 0.2s ease-in-out;}
.bk_gray_1:hover {background-color:#393939}
.bk_gray_1:hover .c_Office p {color:#ff3333;}
.bk_gray_1:hover .c_Office p * {color:#ff3333;}
.bk_gray_1:hover .c_Office .link {color:#ff3333;}

.bk_red_2 {background-color:#424242;}
.bk_red {background-color:#424242;}
.bk_red, .bk_gray_1 * {transition:all 0.2s ease-in-out;}
.bk_red:hover {background-color:#292929}
.bk_red:hover .c_Contact p {color:#ff3333;}
.bk_red:hover .c_Contact .link {color:#ff3333;}

.bk_gray_2 {background-color:#dcdcdc}
.bk_gray_2, .bk_gray_2 * {transition:all 0.2s ease-in-out;}
.bk_gray_2:hover {background-color:#424242;}
#aside .bk_gray_2:hover .panel_tit_1 {color:#fff;}
#aside .bk_gray_2:hover .line span {background-color:#fff;}
#aside .bk_gray_2:hover .panel_tit_2 {color:#ff3333;}
#aside .bk_gray_2:hover .icon path {fill:#ff3333;}

.bk_gray_3 {background-color:#d2d2d2}
.bk_gray_3, .bk_gray_3 * {transition:all 0.2s ease-in-out;}
.bk_gray_3:hover {background-color:#393939;}
#aside .bk_gray_3:hover .panel_tit_1 {color:#fff;}
#aside .bk_gray_3:hover .line span {background-color:#fff;}
#aside .bk_gray_3:hover .panel_tit_2 {color:#ff3333;}
#aside .bk_gray_3:hover .icon path {fill:#ff3333;}




#header {position:fixed;top:0;right:0;left:0;z-index:50;}
#header .header {height:44px;position:relative;background-color:rgba(55,55,55,0.9);transition: background-color 0.3s ease 0s;}
#header h1.logo {position:absolute;top:7px;left:20px;display:block;width:30px;height:30px;overflow:hidden;}
#header h1.logo a {width:100%;height:100%;display:block;}
#header h1.logo #logo {width:30px;height:30px;}

.img_map  {display:none;}
html {background: linear-gradient(to bottom, #f8faff, #fffaff)}
#wrap {background-color:#ffffff;padding-top:44px;}

/* tab */
#tab {position:relative;}
#tab h3 {position:relative;text-align:left;font-weight:300;letter-spacing:5px;background-color:#d2d2d2;cursor:pointer;padding:11px 20px;font-size:12px;line-height:1.5;}
#tab h3:focus,#tab h3:hover{background-color:#eff7f9}
#tab h3 .icon_Arrow {position:absolute;top:14px;right:20px;width:20px;height:11px;transition: all 0.3s ease-in-out 0s;transform: rotateX(0deg);-webkit-transform:rotateX(0deg);}
#tab.on h3 .icon_Arrow {transform: rotateX(180deg);-webkit-transform: rotateX(180deg);}
#tab ul {position:relative;width:100%;max-height:0;transition:all 0.5s ease 0s;overflow:hidden;}
#tab.on ul {max-height:500px;}
#tab ul:after {clear:both;content:"";display:block;}
#tab ul li {float:left;width:100%;font-weight:300;text-align:center;}
#tab ul li a {width:100%;letter-spacing:5px;display:block;color:#000;text-decoration:none;font-size:12px;line-height:1.5;padding:11px;}
#tab ul li:nth-child(1) a {background-color:rgba(220,220,220,0.9);}
#tab ul li:nth-child(2) a {background-color:rgba(210,210,210,0.9);}
#tab ul li:nth-child(3) a {background-color:rgba(220,220,220,0.9);}
#tab ul li:nth-child(4) a {background-color:rgba(210,210,210,0.9);}
#tab ul li a.current {background-color:rgba(60,60,60,0.9);color:#fff; font-weight:400}
#tab ul li a:hover {background-color:rgba(70,70,70,0.8);color:#fff;}
.work_project {padding-top:40px;}
@media screen and (min-width: 48em){ /* ≥ 768px */
#tab h3 {display:none;}
#tab ul {max-height:500px;}
#tab ul li {width:25%;}
#tab ul li a {padding:18px 11px;}
.work_project {padding-top:54px;}
}



/* contact */
.c_Office {position:relative;left:0;width:100%;padding:26px;height:100%;}
.c_Office * {color:#fff;}
.c_Office h3 {font-size:14px;font-weight:300;line-height:1.5;}
.c_Office h3:after {content:"";display:block;height:1px;transition:width 0.2s ease 0s;width:80px;background-color:currentcolor;margin-top:1px;}
.c_Office:hover h3:after {width:100%;}
.c_Office p {font-size:11px;line-height:1.5;margin-top:6px;}
.c_Office p .inbk {display:block;}
.c_Office p + p {margin-top:16px;}
.c_Office .link {position:absolute;bottom:26px;right:26px;text-decoration:none;font-size:11px;font-style: italic;text-align:right;display:block;}
 
.c_Contact {position:relative;left:0;width:100%;padding:26px;height:100%;}
.c_Contact * {color:#fff;}
.c_Contact h3 {font-size:14px;font-weight:300;line-height:1.5;}
.c_Contact h3:after {content:"";display:block;height:1px;transition:width 0.2s ease 0s;width:80px;background-color:currentcolor;margin-top:1px;}
.c_Contact:hover h3:after {width:100%;}
.c_Contact p {font-size:11px;line-height:1.5;margin-top:6px;}
.c_Contact p + p {margin-top:16px;}
.c_Contact .link {position:absolute;bottom:26px;right:26px;text-decoration:none;font-size:11px;font-style: italic;text-align:right;display:block;}

/* aside */
#aside {text-align:center;}
#aside .slogan {background-color:#757575;color:#cbcbcb;font-size:14px;line-height:1.5;text-align:center;padding:12px 60px;}
#aside .panel_tit_1 {font-size:10px;line-height:1.5;color:#000;font-weight:300;letter-spacing:5px;}
#aside .line {width:100%;height:1px;margin-top:9px;font-size:0;line-height:0;}
#aside .line span {display:inline-block;height:1px;width:180px;background-color:#000;}
#aside .panel_tit_2 {font-size:22px;line-height:1.5;color:#000;margin-top:6px;}
#aside .icon {display:block;margin-top:22px;}
#aside .icon svg {width:68px;height:68px;}

/* footer */
#footer .f_link {}
#footer .f_link {padding:16px 36px;}
#footer .f_link .icon {float:left;}
#footer .f_link .icon svg {width:57px;height:57px;}
#footer .f_link .beside {font-size:12px;line-height:1.2;color:#fff;display:table;height:57px;}
#footer .f_link .beside .table-cell {display:table-cell;vertical-align:middle;padding-left:10px;}
#footer .f_link .beside .table-cell a {color:#fff;}
#footer .f_link .beside .table-cell .inbk {display:block;}


@media screen and (min-width: 35.5em){
/* contact */
.c_Office p {font-size:10px;}
.c_Office .link {left:26px;right:auto;}
.c_Contact p {font-size:10px;}
.c_Contact .link {left:26px;right:auto;}
}

@media screen and (min-width: 48em){
#wrap {padding-top:79px;}
#header .header {height:79px;}
#header h1.logo {width:43px;height:43px;top:18px;left:36px;}
#header h1.logo #logo {width:43px;height:43px;}

.c_Office {padding:36px;}
.c_Office p {font-size:11px;}
.c_Office p .inbk {display:inline;}
.c_Office .link {bottom:36px;left:36px;}
.c_Contact {padding:36px;}
.c_Contact p {font-size:11px;}
.c_Contact .link {bottom:36px;left:36px;}

#aside .slogan {padding:33px 60px;}
#aside .panel_tit_1 {font-size:12px;line-height:1.5;}
#aside .panel_tit_2 {font-size:22px;}
#aside .icon svg {width:88px;height:88px;}

}

@media screen and (min-width: 64em){
.img_map  {display:inline;}
.img_map_s  {display:none;}
}

@media screen and (min-width: 80em){
}




/* 공통 레잉아웃 */
body {max-width:1600px;margin:0 auto;position:relative;}
#header .header {max-width:1600px;margin:0 auto;}
#header #tab {max-width:1600px;margin:0 auto;}
#container {max-width:1600px;margin:0 auto;}
#aside {max-width:1600px;margin:0 auto;}
#footer {max-width:1600px;margin:0 auto;}

/* 작은거에서없다 */

/* 박스 레이아웃 */
.sq_box {position:absolute;top:0;bottom:0;left:0;right:0;white-space:nowrap;overflow:hidden;}
.sq_box:after{content:"";position:relative;display:inline-block;height:100%;vertical-align:middle;}
.sq_box > .middle_inner {display:inline-block;vertical-align:middle;white-space:normal;}
.sq_box_t {position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden;}

.pure-u-none {display:none;}
.sq-u-1 {position:relative;padding-bottom:100%;}
.sq-u-2 {position:relative;padding-bottom:75%;}
.sq-u-3 {position:relative;padding-bottom:66.6667%;}
.sq-u-4 {position:relative;padding-bottom:50%;}
.sq-u-5 {position:relative;padding-bottom:80%;}
.sq-u-6 {position:relative;padding-bottom:68.75%;}
.sq-u-7 {position:relative;padding-bottom:125%;}
.sq-u-8 {position:relative;padding-bottom:25%;}
@media screen and (min-width: 35.5em){ /* ≥ 568px */
.pure-u-none {display:inline-block;}
.pure-u-sm-none {display:none;}
.sq-u-sm-1 {position:relative;padding-bottom:100%;}
.sq-u-sm-2 {position:relative;padding-bottom:75%;}
.sq-u-sm-3 {position:relative;padding-bottom:66.6667%;}
.sq-u-sm-4 {position:relative;padding-bottom:50%;}
.sq-u-sm-5 {position:relative;padding-bottom:80%;}
.sq-u-sm-6 {position:relative;padding-bottom:68.75%;}
.sq-u-sm-7 {position:relative;padding-bottom:125%;}
.sq-u-sm-8 {position:relative;padding-bottom:25%;}
}
@media screen and (min-width: 48em){ /* ≥ 768px */
.pure-u-sm-none {display:inline-block;}
.sq-u-md-1 {position:relative;padding-bottom:100%;}
.sq-u-md-2 {position:relative;padding-bottom:75%;}
.sq-u-md-3 {position:relative;padding-bottom:66.6667%;}
.sq-u-md-4 {position:relative;padding-bottom:50%;}
.sq-u-md-5 {position:relative;padding-bottom:80%;}
.sq-u-md-6 {position:relative;padding-bottom:68.75%;}
.sq-u-md-7 {position:relative;padding-bottom:125%;}
.sq-u-md-8 {position:relative;padding-bottom:25%;}
}
@media screen and (min-width: 64em){ /* ≥ 1024px */
.sq-u-lg-1 {position:relative;padding-bottom:100%;}
.sq-u-lg-2 {position:relative;padding-bottom:75%;}
.sq-u-lg-3 {position:relative;padding-bottom:66.6667%;}
.sq-u-lg-4 {position:relative;padding-bottom:50%;}
.sq-u-lg-5 {position:relative;padding-bottom:80%;}
.sq-u-lg-6 {position:relative;padding-bottom:68.75%;}
.sq-u-lg-7 {position:relative;padding-bottom:125%;}
.sq-u-lg-8 {position:relative;padding-bottom:25%;}
}
@media screen and (min-width: 80em){ /* ≥ 1280px */
.sq-u-xl-1 {position:relative;padding-bottom:100%;}
.sq-u-xl-2 {position:relative;padding-bottom:75%;}
.sq-u-xl-3 {position:relative;padding-bottom:66.6667%;}
.sq-u-xl-4 {position:relative;padding-bottom:50%;}
.sq-u-xl-5 {position:relative;padding-bottom:80%;}
.sq-u-xl-6 {position:relative;padding-bottom:68.75%;}
.sq-u-xl-7 {position:relative;padding-bottom:125%;}
.sq-u-xl-8 {position:relative;padding-bottom:25%;}
}




/* 이미지 레이아웃 */
.sq_box_hidden {overflow:hidden;}
.sq_box.img-u-2 {left:-100%;right:-100%;}
.sq_box .c_img {position:absolute;height:101%;width:auto;}
.img-u-1 .c_img {left:0;right:auto;}
.img-u-2 .c_img {left:0;right:0;margin:0 auto;}
.img-u-3 .c_img {left:auto;right:0;}
@media screen and (min-width: 35.5em){ /* ≥ 568px */
.img-u-sm-1 .c_img {left:0;right:auto;}
.img-u-sm-2 .c_img {left:auto;right:auto;}
.img-u-sm-3 .c_img {left:auto;right:0;}
}
@media screen and (min-width: 48em){ /* ≥ 768px */
.img-u-md-1 .c_img {left:0;right:auto;}
.img-u-md-2 .c_img {left:0;right:0;margin:0 auto;}
.img-u-md-3 .c_img {left:auto;right:0;}
}
@media screen and (min-width: 64em){ /* ≥ 1024px */
.img-u-lg-1 .c_img {left:0;right:auto;}
.img-u-lg-2 .c_img {left:0;right:0;margin:0 auto;}
.img-u-lg-3 .c_img {left:auto;right:0;}
}
@media screen and (min-width: 80em){ /* ≥ 1280px */
.img-u-xl-1 .c_img {left:0;right:auto;}
.img-u-xl-2 .c_img {left:0;right:0;margin:0 auto;}
.img-u-xl-3 .c_img {left:auto;right:0;}
}



.fl-u-0 {left:0;right:0;}
.fl-u-1 {left:-100%;right:100%;}
.fl-u-2 {left:100%;right:-100%;}
@media screen and (min-width: 35.5em){ /* ≥ 568px */
.fl-u-sm-0 {left:0;right:0;}
.fl-u-sm-1 {left:-100%;right:100%;}
.fl-u-sm-2 {left:100%;right:-100%;}
}
@media screen and (min-width: 48em){ /* ≥ 768px */
.fl-u-md-0 {left:0;right:0;}
.fl-u-md-1 {left:-100%;right:100%;}
.fl-u-md-2 {left:100%;right:-100%;}
}
@media screen and (min-width: 64em){ /* ≥ 1024px */
.fl-u-lg-0 {left:0;right:0;}
.fl-u-lg-1 {left:-100%;right:100%;}
.fl-u-lg-2 {left:100%;right:-100%;}
}
@media screen and (min-width: 80em){ /* ≥ 1280px */
.fl-u-xl-0 {left:0;right:0;}
.fl-u-xl-1 {left:-100%;right:100%;}
.fl-u-xl-2 {left:100%;right:-100%;}
}

/* gnb */
#header.on {width:100%;height:100%;}
#header.on #nav {position:absolute;top:44px;bottom:0;left:0;right:0;max-width:1600px;margin:0 auto;z-index:50;}
/*body.main #header.on .header {background-color:rgba(44,51,68,0.9);}
body.sub #header.on .header {background-color:rgba(44,51,68,0.9);}*/




.menu-toggle {display:inline-block;margin:0;padding:0;overflow:visible;border:0;background-color:transparent;font-style:normal;font-size:inherit;font-weight:400;font-family:Open Sans,Helmet,Freesans,Trebuchet MS,sans-serif;text-align:center;vertical-align:middle;cursor:pointer;outline:0}
.menu-toggle,.menu-toggle:active,.menu-toggle:focus,.menu-toggle:hover,.menu-toggle:visited {text-decoration:none}
button {background-color:transparent;appearance:none;background-image:none;-webkit-appearance:none;-o-appearance:none;-moz-appearance:none;-ms-appearance:none;}

.header .menu-toggle {display:block;color:#fff;position:relative;z-index:1;float:right;height:44px;transition:padding-right 0 .3s;padding:15px 20px 15px 52px;-webkit-transition:padding-right 0 .3s;}
.header .menu-toggle.on {color:#fff;}

#header.on .header .menu-toggle {display:block;}
.header .menu-toggle:before {display:block;position:absolute;top:0;right:48px;content:attr(data-label);transition:color .2s ease,opacity .3s,visibility .3s;padding:8px 0;-webkit-transition:color .2s ease,opacity .3s,visibility .3s;font-weight:300;}

#header.on .header .menu-toggle:before {opacity:0;visibility: hidden;}

.icon-bars {position:relative; color:inherit}
.icon-bars,.icon-bars:after,.icon-bars:before{display:block;width:20px;height:2px;background-color:#fff;}
.header .menu-toggle.on .icon-bars,.header .menu-toggle.on .icon-bars:after,.header .menu-toggle.on .icon-bars:before {background-color:#fff;}
#header.on .header .menu-toggle.on .icon-bars,#header.on .header .menu-toggle.on .icon-bars:after,#header.on .header .menu-toggle.on .icon-bars:before {background-color:#fff;}


.icon-bars:after,.icon-bars:before {position:absolute;content:"";left:0}
.icon-bars:before {top:.4em}
.icon-bars:after {top:-.4em}


.menu-toggle .icon-bars {transition:transform .3s ease-in,background-color .2s ease;-webkit-transition:-webkit-transform .3s ease-in,background-color .2s ease;}
.menu-toggle .icon-bars:after,.menu-toggle .icon-bars:before {transition:top .3s .3s ease-in,transform .3s ease-in,background-color .2s ease;-webkit-transition:top .3s .3s ease-in,-webkit-transform .3s ease-in,background-color .2s ease;}
#header.on .menu-toggle .icon-bars,.menu-toggle:active .icon-bars {transition:transform .3s .2s ease-in,background-color .2s ease;transform:rotate3d(0,0,1,135deg);-webkit-transition:-webkit-transform .3s .2s ease-in,background-color .2s ease; -webkit-transform:rotate3d(0,0,1,135deg);-ms-transform:rotate(135deg);}
#header.on .menu-toggle .icon-bars:after,#header.on .menu-toggle .icon-bars:before,.menu-toggle:active .icon-bars:after,.menu-toggle:active .icon-bars:before {transition:top .2s ease-in,transform .3s .2s ease-in,background-color .2s ease;transform:rotate3d(0,0,1,90deg);top:0;-webkit-transition:top .2s ease-in,-webkit-transform .3s .2s ease-in,background-color .2s ease; -webkit-transform:rotate3d(0,0,1,90deg);-ms-transform:rotate(90deg);}


#header #nav {visibility:hidden;opacity:0;}
#header.on #nav {height:auto;visibility:visible;opacity:1;}
#header #nav .nav_wrap {position:absolute;top:0;bottom:0;left:0;right:0;white-space:nowrap;overflow:hidden;background-color:rgba(190,190,190,0.95);transition: opacity 0.3s ease 0s, visibility 0.3s ease 0s;visibility:hidden;opacity:0;}
#header.on #nav .nav_wrap {visibility:visible;opacity:1;}
#header.on #nav .nav_wrap:after{content:"";position:relative;display:inline-block;height:100%;vertical-align:middle;}
#header #nav .nav_wrap .menu {display:inline-block;vertical-align:middle;white-space:normal;width:100%;text-align:center;opacity: 0.4;transform:scale(0.9);transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;}
#header.on #nav .nav_wrap .menu {opacity:1;transform: scale(1);transition: transform 0.5s ease 0s, opacity 0.5s ease 0s;}
#header #nav .nav_wrap .menu li a {padding:5% 0;color:#000;display:block;font-size:28px;font-weight:200;transition:all 0.5s ease 0s;}
#header #nav .nav_wrap .menu li a:hover {background-color:rgba(75,75,75,1);color:#fff;}

body.sub #header #nav.on .nav_wrap .menu li a {color:#fff;}
body.sub .logo path,
body.sub .logo.on path,
body.sub .logo polygon,
body.sub .logo.on polygon {fill:#fff;}
body.sub .header .menu-toggle.on {color:#fff;}
body.sub .header .menu-toggle.on .icon-bars,body.sub .header .menu-toggle.on .icon-bars:after,body.sub .header .menu-toggle.on .icon-bars:before {background-color:#fff;}

@media screen and (min-width: 35.5em){ /* ≥ 568px */

}
@media screen and (min-width: 48em){ /* ≥ 768px */
#header.on .header .menu-toggle {display:none;}
body.main #header.on .header {background-color:transparent;}
body.sub #header.on .header {background-color:rgba(249,24,11,0.9);}
.header .menu-toggle {display:none;}
#header.on {height:79px;}
#header.on #nav, #header #nav {position:absolute;top:0;bottom:auto;left:0;right:0;display:inline;width:100%;max-width:1600px;margin:0 auto;visibility:visible;opacity:1;}
#header #nav .nav_wrap {position:absolute;top:0;bottom:auto;left:0;right:0;white-space:nowrap;overflow:visible;background-color:transparent;transition: opacity 0.3s ease 0s, visibility 0.3s ease 0s;visibility:visible;opacity:1;}
#header.on #nav .nav_wrap {position:absolute;top:0;bottom:auto;left:0;right:0;white-space:nowrap;overflow:visible;background-color:transparent;transition: opacity 0.3s ease 0s, visibility 0.3s ease 0s;visibility:visible;opacity:1;}
#header.on #nav .nav_wrap:after {content:none;}
#header #nav .nav_wrap .menu {position:absolute;top:14px;right:33px;display:inline-block;vertical-align:middle;white-space:normal;width:auto;text-align:center;opacity:1;transform:scale(1);transition:none;}
#header #nav .nav_wrap .menu li {float:left;}
#header #nav .nav_wrap .menu li a {display:block;font-size:14px;font-weight:400;height:auto;padding:15px;color:#fff;transition:color 0.5s ease 0s;}
#header #nav .nav_wrap .menu li a:hover {background-color:transparent;color:#ff3333;}
body.sub #header #nav .nav_wrap .menu li a:hover {color:#000;}
#header #nav.on .nav_wrap .menu li a {color:#fff;}
#header #nav.on .nav_wrap .menu li a:hover {color:#ff3333;}



}
@media screen and (min-width: 64em){ /* ≥ 1024px */

}
@media screen and (min-width: 80em){ /* ≥ 1280px */

}



`;
export default reset;