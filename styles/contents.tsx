import { css } from '@emotion/react';
const contents = css`
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

`;
export default contents;