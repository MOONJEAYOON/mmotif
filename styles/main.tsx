import { css } from '@emotion/react';
const main = css`
html {height:100%;width:100%;}
#wrap.main {width:100%;padding-top:0;}
#wrap.main #container {width:100% !important;height:100% !important;min-height:320px;}
#wrap.main #header .header {background-color:transparent;}
#wrap.main #header.on .header {background-color:rgba(55, 55, 55, 0.9);}
#wrap.sub #header .header {background-color:rgba(55,55,55,0.9);}
.nonhead #header {opacity:0;}
.owl-wrapper-outer {width:100%;height:100%;}
.main #container {overflow-y:auto;-webkit-overflow-scrolling:auto;}
.main #container::-webkit-scrollbar { display: none;}
.swiper {/*height:-webkit-calc(100% + 1px);height:calc(100% + 1px);*/height:100%;}

.swiper {height:100%;width:100%;background-color:#fff;}
.swiper {width:100%;height:100%;}
.swiper .swiper-wrapper {width:100%;height:100%;}
.swiper .swiper-wrapper .swiper-slide {width:100%;height:100%;}

.swiper .item  {height:100%;width:100%;position:relative;overflow:hidden;}
.swiper .item img{
        display: block;
        width: 100%;
        height: auto;
}


.swiper .item .fvideo{position:absolute;left:50%;margin-left:-800px;top:0;bottom:0;width:1600px;height:900px;display:none;}

/*.swiper .item .fvideo{
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


#wrap.main {max-height:576px;}
.swiper .item .fvideo, .swiper .item .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
.swiper .item.lam .fvideo, .swiper .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-412px;top:50%;margin-top:-288px;width:1024px;height:576px;}
@media screen and (min-width: 22.5em) and (orientation : portrait){ /* ≥ 360px */
#wrap.main {max-height:640px;}
.swiper .item .fvideo, .swiper .item .fvideo_bg {position:absolute;left:50%;margin-left:-569px;top:50%;margin-top:-320px;width:1138px;height:640px;}
.swiper .item.lam .fvideo, .swiper .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-469px;top:50%;margin-top:-320px;width:1138px;height:640px;}
}
@media screen and (min-width: 23.4383em) and (orientation : portrait){ /* ≥ 375px */
#wrap.main {max-height:668px;}
.swiper .item .fvideo, .swiper .item .fvideo_bg {position:absolute;left:50%;margin-left:-594px;top:50%;margin-top:-334px;width:1188px;height:668px;}
.swiper .item.lam .fvideo, .swiper .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-469px;top:50%;margin-top:-334px;width:1138px;height:668px;}
}
@media screen and (min-width: 25.875em) and (orientation : portrait){ /* ≥ 414px */
#wrap.main {max-height:738px;}
.swiper .item .fvideo, .swiper .item .fvideo_bg {position:absolute;left:50%;margin-left:-656px;top:50%;margin-top:-369px;width:1312px;height:738px;}
.swiper .item.lam .fvideo, .swiper .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-556px;top:50%;margin-top:-369px;width:1312px;height:738px;}
}

@media screen and (min-width: 35.5em){ /* ≥ 568px */
#wrap.main {max-height:576px;}
.swiper .item .fvideo, .swiper .item .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
.swiper .item.lam .fvideo, .swiper .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
}
@media screen and (min-width: 48em){ /* ≥ 768px */
.swiper {height:100%;}
#wrap.main #header.on .header {background-color:transparent;}
#header.on .logo.on path {fill:#000;}
#header.on .logo path {fill:#fff;}
.swiper .item .fvideo{display:block;}
#wrap.main {max-height:576px;}
.swiper .item .fvideo, .swiper .item .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
.swiper .item.lam .fvideo, .swiper .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-512px;top:50%;margin-top:-288px;width:1024px;height:576px;}
}
@media screen and (min-width: 64em){ /* ≥ 1024px */
#wrap.main {max-height:720px;}
.swiper .item .fvideo, .swiper .item .fvideo_bg {position:absolute;left:50%;margin-left:-640px;top:50%;margin-top:-360px;width:1280px;height:720px;}
.swiper .item.lam .fvideo, .swiper .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-640px;top:50%;margin-top:-360px;width:1280px;height:720px;}
}
@media screen and (min-width: 80em){ /* ≥ 1280px */
#wrap.main {max-height:900px;}
.swiper .item .fvideo, .swiper .item .fvideo_bg {position:absolute;left:50%;margin-left:-800px;top:50%;margin-top:-450px;width:1600px;height:900px;}
.swiper .item.lam .fvideo, .swiper .item.lam .fvideo_bg {position:absolute;left:50%;margin-left:-800px;top:50%;margin-top:-450px;width:1600px;height:900px;}
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
export default main;
