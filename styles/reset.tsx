import { css } from '@emotion/react';
const reset = css`
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
body {background-color:#ffffff;padding-top:44px;;overflow-x:hidden;}

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
body {padding-top:79px;}
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
body {max-width:1600px;margin:0 auto;}
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

.work_project .list {cursor:pointer;}
.work_project .list .middle_inner {position:relative;z-index:1;}
.work_project .list .middle_inner .c_img_logo {width:100%;height:auto;transition:all 0.4s ease-in-out;}
.work_project .list:hover .middle_inner .c_img_logo {opacity:0;visibility:hidden;}
.work_project .list .overlay {text-align:center;padding:15%;opacity:0;visibility:hidden;background-color:rgba(77,132,241,0.8);transition:all 0.4s ease-in-out;}
.work_project .list .overlay * {color:#fff;}
.work_project .list:hover .overlay {opacity:1;visibility:visible;}


.work_project .list .overlay h3 {font-size:12px;font-weight:300;line-height:1.5;letter-spacing:5px;}
.work_project .list .overlay h3:after {content:"";display:block;height:1px;width:100%;background-color:currentcolor;margin-top:10px;}
.work_project .list .overlay p {font-size:21px;line-height:1.3;margin-top:18px;font-weight:400;}

.work_project .list_detail .tbox_1 {padding:37px;text-align:left;width:100%;}
.work_project .list_detail .tbox_1 * {color:#000}
.work_project .list_detail .tbox_1 h3 {font-size:12px;font-weight:300;letter-spacing:5px;}
.work_project .list_detail .tbox_1 .line {width:100%;height:1px;margin-top:9px;font-size:0;line-height:0;}
.work_project .list_detail .tbox_1 .line span {display:inline-block;height:1px;width:50%;min-width:180px;background-color:#000;}
.work_project .list_detail .tbox_1 p {font-size:22px;line-height:1.3;margin-top:10px;font-weight:400;}
.work_project .list_detail .tbox_1 p + p {font-size:12px;}
.work_project .list_detail .tbox_1 p + p span {font-weight:200;}

.work_project .list_detail .tbox_2 {padding:10px 37px;text-align:center;width:100%;}
.work_project .list_detail .tbox_2 * {color:#000;}
.work_project .list_detail .tbox_2 h3 {font-size:12px;font-weight:400;}
.work_project .list_detail .tbox_2 p {font-size:12px;line-height:1.3;margin-top:10px;font-weight:300;}
.work_project .list_detail .tbox_3 {padding:10px 37px;text-align:center;width:100%;}
.work_project .list_detail .tbox_3 * {color:#fff;}
.work_project .list_detail .tbox_3 p {font-size:12px;line-height:1.5;font-weight:300;}

.work_project .list_detail .middle_inner .c_img_logo {width:100%;height:auto;}

.about .about_a {padding:26px;}
.about .about_a .tit_1 {color:#000;line-height:1.3;font-weight:400;font-size:32px;}
.about .about_a .tit_2 {color:#fa2f23;font-weight:400;font-size:18px;letter-spacing:5px;}
.about .about_a .txt_1 {font-size:14px;font-weight:300;padding:20px 0;}
.about .about_a .txt_1 strong {font-weight:400;}
.about .about_a .line {width:100%;height:2px;background-color:#030303;margin-top:30px;}


@media screen and (min-width: 35.5em){ /* ≥ 568px */
.work_project .list_detail .tbox_1 {text-align:center;}
.work_project .list_detail .tbox_3 p {font-size:15px;}
}
@media screen and (min-width: 48em){ /* ≥ 768px */
.work_project .list_detail .tbox_3 p {font-size:12px;}
.about .pure-u-md-2-3 .about_a {padding-top:53px;}
.about .about_a .line2 {display:none;}
}
@media screen and (min-width: 64em){ /* ≥ 1024px */

}
@media screen and (min-width: 80em){ /* ≥ 1280px */

}


.main {height:100%;width:100%;padding-top:0;}
.main #container {width:100% !important;height:100% !important;min-height:320px;}
.main #header .header {background-color:transparent;}
.main #header.on .header {background-color:rgba(55, 55, 55, 0.9);}
.sub #header .header {background-color:rgba(55,55,55,0.9);}
.nonhead #header {opacity:0;}
.owl-wrapper-outer {width:100%;height:100%;}
.main #container {overflow-y:auto;-webkit-overflow-scrolling:auto;}
.main #container::-webkit-scrollbar { display: none;}
#owl-demo {/*height:-webkit-calc(100% + 1px);height:calc(100% + 1px);*/height:100%;}

.owl-carousel {height:100%;width:100%;background-color:#fff;}
.owl-carousel {width:100%;height:100%;}
.owl-carousel .owl-wrapper {width:100%;height:100%;}
.owl-carousel .owl-wrapper .owl-item {width:100%;height:100%;}

#owl-demo .item  {height:100%;width:100%;position:relative;overflow:hidden;}
#owl-demo .item img{
        display: block;
        width: 100%;
        height: auto;
}


#owl-demo .item .fvideo{position:absolute;left:50%;margin-left:-800px;top:0;bottom:0;width:1600px;height:900px;display:none;}

/*#owl-demo .item .fvideo{
\tbottom:0;left:0;min-height:100%;min-width:100%;position:absolute;right:0;top:0;
}*/
video::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}


.fvideo_txt {text-align:center;}
.fvideo_txt.c1 {color:#fff;}

.fvideo_txt.c1 * {color:#fff;}
.fvideo_txt.c2 {color:#fff;}
.fvideo_txt.c2 * {color:#fff;}
.fvideo_txt .panel_tit_1 {letter-spacing:5px;font-size:12px;}
.fvideo_txt .line {width:100%;height:1px;margin-top:9px;font-size:0;line-height:0;}
.fvideo_txt.c1 .line span {background-color:#fff;}
.fvideo_txt.c2 .line span {background-color:#fff;}
.fvideo_txt .line span {display:inline-block;height:1px;width:180px;}
.fvideo_txt .panel_tit_2 {line-height:1.333;margin-top:16px;font-size:30px;}
.fvideo_txt > .middle_inner {width:60%;}
.fvideo_txt .circle {display:inline-block;width:88px;margin-top:16px;}
.fvideo_txt .circle svg {width:88px;height:88px;}
.fvideo_txt.c1 .circle path {fill:#fff;rect:#fff}
.fvideo_txt.c2 .circle path {fill:#fff;rect:#fff}
.fvideo_txt.c1 .circle:hover path, .fvideo_txt.c2 .circle:hover path {fill:#ff3333;rect:#ff3333}

.fvideo_txt .circle .sq_box {padding-bottom:3px;}
.logo path, 
.logo polygon {transition:all 0.8s ease-in-out;}
/*.logo.on path,
.logo.on polygon {fill:#000;}*/

#header.on .logo.on path {fill:#fff;}
.owl-wrapper-outer .owl-theme .owl-controls {position:absolute;bottom:13px;right:0;left:0;}
.owl-wrapper-outer .owl-theme .owl-controls .owl-page span {background-color:#7f7f7f;width:8px;height:8px;margin:5px 6px;opacity:0.3;}

.owl-goUp-out {
\tanimation:scaleToFade .7s ease both
\t-webkit-animation:scaleToFade .7s ease both;
}
.owl-goUp-in {animation:goUp .6s ease both-webkit-animation:goUp .6s ease both;}
@-webkit-keyframes goUp {from {
\ttransform:translateY(100%)
\t-webkit-transform:translateY(100%);
}
}
@keyframes goUp {from {
\ttransform:translateY(100%)
\t-webkit-transform:translateY(100%);
}
}


body.main {max-height:576px;}
#owl-demo .item .fvideo, #owl-demo .item .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
#owl-demo .item.lam .fvideo, #owl-demo .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-412px;top:50%;margin-top:-288px;width:1024px;height:576px;}
@media screen and (min-width: 22.5em) and (orientation : portrait){ /* ≥ 360px */
body.main {max-height:640px;}
#owl-demo .item .fvideo, #owl-demo .item .fvideo_bg {position:absolute;left:50%;margin-left:-569px;top:50%;margin-top:-320px;width:1138px;height:640px;}
#owl-demo .item.lam .fvideo, #owl-demo .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-469px;top:50%;margin-top:-320px;width:1138px;height:640px;}
}
@media screen and (min-width: 23.4383em) and (orientation : portrait){ /* ≥ 375px */
body.main {max-height:668px;}
#owl-demo .item .fvideo, #owl-demo .item .fvideo_bg {position:absolute;left:50%;margin-left:-594px;top:50%;margin-top:-334px;width:1188px;height:668px;}
#owl-demo .item.lam .fvideo, #owl-demo .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-469px;top:50%;margin-top:-334px;width:1138px;height:668px;}
}
@media screen and (min-width: 25.875em) and (orientation : portrait){ /* ≥ 414px */
body.main {max-height:738px;}
#owl-demo .item .fvideo, #owl-demo .item .fvideo_bg {position:absolute;left:50%;margin-left:-656px;top:50%;margin-top:-369px;width:1312px;height:738px;}
#owl-demo .item.lam .fvideo, #owl-demo .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-556px;top:50%;margin-top:-369px;width:1312px;height:738px;}
}

@media screen and (min-width: 35.5em){ /* ≥ 568px */
body.main {max-height:576px;}
#owl-demo .item .fvideo, #owl-demo .item .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
#owl-demo .item.lam .fvideo, #owl-demo .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
}
@media screen and (min-width: 48em){ /* ≥ 768px */
#owl-demo {height:100%;}
body.main #header.on .header {background-color:transparent;}
#header.on .logo.on path {fill:#000;}
#header.on .logo path {fill:#fff;}
#owl-demo .item .fvideo{display:block;}
body.main {max-height:576px;}
#owl-demo .item .fvideo, #owl-demo .item .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
#owl-demo .item.lam .fvideo, #owl-demo .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
}
@media screen and (min-width: 64em){ /* ≥ 1024px */
body.main {max-height:720px;}
#owl-demo .item .fvideo, #owl-demo .item .fvideo_bg {position:absolute;left:50%;margin-left:-640px;top:50%;margin-top:-360px;width:1280px;height:720px;}
#owl-demo .item.lam .fvideo, #owl-demo .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-640px;top:50%;margin-top:-360px;width:1280px;height:720px;}
}
@media screen and (min-width: 80em){ /* ≥ 1280px */
body.main {max-height:900px;}
#owl-demo .item .fvideo, #owl-demo .item .fvideo_bg {position:absolute;left:50%;margin-left:-800px;top:50%;margin-top:-450px;width:1600px;height:900px;}
#owl-demo .item.lam .fvideo, #owl-demo .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-800px;top:50%;margin-top:-450px;width:1600px;height:900px;}
}









/* contents */



/* contact */
#main-content .under_1 {position:relative;left:0;width:100%;padding:26px;height:100%;}
#main-content .under_1 * {color:#fff;}
#main-content .under_1 h3 {font-size:12px;font-weight:300;line-height:1.5;}
#main-content .under_1 h3:after {content:"";display:block;height:1px;transition:width 0.2s ease 0s;width:50%;background-color:currentcolor;margin-top:1px;}
#main-content .under_1:hover h3:after {width:100%;}
#main-content .under_1 p {font-size:20px;line-height:1.3;margin-top:10px;font-weight:300;padding-right:30%;}
#main-content .under_1 .link {position:absolute;bottom:6px;right:6px;text-decoration:none;font-size:12px;font-style: italic;text-align:right;display:block;font-weight:300;padding:20px;}


#main-content .under_2 {position:relative;left:0;width:100%;padding:26px;height:100%;}
#main-content .under_2 * {color:#000;}
#main-content .under_2:hover * {color:#fff;}
#main-content .under_2 h3 {font-size:20px;line-height:1.3;margin-top:6px;font-weight:300;padding-right:20%;}
#main-content .under_2 .txt_1 {font-size:12px;font-weight:300;line-height:1.5;margin-top:10%;}
#main-content .under_2 .txt_1:after {content:"";display:block;height:1px;transition:width 0.2s ease 0s;width:50%;background-color:#000;margin-top:1px;}
#main-content .under_2:hover .txt_1:after {width:100%;background-color:#fff;}
#main-content .under_2 .link {position:absolute;bottom:6px;left:6px;text-decoration:none;font-size:12px;font-style: italic;text-align:right;display:block;font-weight:300;padding:20px;}

@media screen and (min-width: 35.5em){

}

@media screen and (min-width: 48em){
#main-content .under_1 h3 {font-size:14px;}
#main-content .under_1 p {font-size:26px;padding-right:20%;}
#main-content .under_2 h3 {font-size:40px;}
#main-content .under_2 .txt_1:after {width:25%;}
}

@media screen and (min-width: 64em){
#main-content .under_1 h3 {font-size:12px;}
#main-content .under_1 p {font-size:18px;padding-right:20%;}
#main-content .under_1 .link {right:auto;left:6px;}
#main-content .under_2 h3 {font-size:34px;}
}

@media screen and (min-width: 80em){
}



/* ----- 3.2 Loader Pace ----- */
body .loader-wrapper {
\tposition:fixed;
\ttop:0;
\tleft:0;
\twidth:100%;
\theight:100%;
\tz-index:10000;
}

body .loader-wrapper .loader {
\tz-index:1001;
}

.loader-wrapper .loader-section {
\tposition:fixed;
\ttop:0;
\twidth:50%;
\theight:100%;
\tbackground:#000;
\tz-index:1000;
\t-webkit-transform:translateX(0);
\t-ms-transform:translateX(0);
\ttransform:translateX(0);
}

.loader-wrapper .loader-section.section-left {
\tleft:0;
}

.loader-wrapper .loader-section.section-right {
\tright:0;
}

.loaded .loader-wrapper .loader-section.section-left {
\t-webkit-transform:translateX(-100%);
\t-ms-transform:translateX(-100%);
\ttransform:translateX(-100%);
\t-webkit-transition:all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);  
\ttransition:all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}

.loaded .loader-wrapper .loader-section.section-right {
\t-webkit-transform:translateX(100%);
\t-ms-transform:translateX(100%);
\ttransform:translateX(100%);
\t-webkit-transition:all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);  
\ttransition:all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1.000);
}
    
/*.loaded .loader {
\topacity:0;
\t-webkit-transition:opacity 0.3s ease-out;  
\ttransition:opacity 0.3s ease-out;
}*/

.loaded .loader-wrapper {
\tvisibility:hidden;
\t-webkit-transform:translateY(-100%);
\t-ms-transform:translateY(-100%);
\ttransform:translateY(-100%);
\t-webkit-transition:all 0.3s 1s ease-out;  
\ttransition:all 0.3s 1s ease-out;
}

.no-js .loader-wrapper {
\tdisplay:none;
}


.clear-loading {
  text-align: center;
  margin: 0 20px;
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
}
/* Loading Effect */
.loaded .loader {
\topacity:0;
\t-webkit-transition:all 0.3s ease-out;  
\ttransition:all 0.3s ease-out;
}

.loader {width:97px;height:40px;position:absolute;top:45%;left: calc(50% - 48px);}
.loader #logo {width:97px;height:40px;}
@-webkit-keyframes logo-lights {
  0%        {fill: #000}
  20%       {fill: #fff}
  40%, 100% {fill: #000}
}
@keyframes logo-lights {
  0%        {fill: #000}
  20%       {fill: #fff}
  40%, 100% {fill: #000}
}

.loader.on #logo .logo-lights-1 {animation:logo-lights 2.5s ease 0.4s infinite;-webkit-animation:logo-lights 2.5s ease 0.4s infinite;}
.loader.on #logo .logo-lights-2 {animation:logo-lights 2.5s ease 0.5s infinite;-webkit-animation:logo-lights 2.5s ease 0.5s infinite;}
.loader.on #logo .logo-lights-3 {animation:logo-lights 2.5s ease 0.6s infinite;-webkit-animation:logo-lights 2.5s ease 0.6s infinite;}
.loader.on #logo .logo-lights-4 {animation:logo-lights 2.5s ease 0.7s infinite;-webkit-animation:logo-lights 2.5s ease 0.7s infinite;}
.loader.on #logo .logo-lights-5 {animation:logo-lights 2.5s ease 0.8s infinite;-webkit-animation:logo-lights 2.5s ease 0.8s infinite;}
.loader.on #logo .logo-lights-6 {animation:logo-lights 2.5s ease 0.9s infinite;-webkit-animation:logo-lights 2.5s ease 0.9s infinite;}



`;
export default reset;