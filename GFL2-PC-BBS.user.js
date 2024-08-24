// ==UserScript==
// @name        追放官方社区PC页面适配
// @icon        https://community.cdn.sunborngame.com/prod/emoji/%E8%AE%A9%E6%88%91%E7%9C%8B%E7%9C%8B.jpg
// @match       https://gf2-bbs.sunborngame.com/*
// @grant       GM_addStyle
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @run-at      document-end
// @version     0.0.1
// @author      Mirco
// @description 拉伸至宽屏+明暗模式切换
// ==/UserScript==

GM_addStyle(`

/*--主页--*/
.home_main{max-width:100% !important}
.head_pc{max-width:unset !important}
.pc_nav{
  left:0.5rem !important;
  transform:unset !important;
}
.pc_right{
  right:0.1rem;
  transform:unset !important;
  left:unset !important;
}
.content{max-width:calc(100% - 4rem) !important}
.swiper-container1{position:absolute !important}
.nav_con{
  height:1.1rem;
  width:calc(100% - 3.58rem) !important;
  margin:0.1rem 0 0.1rem 3.58rem !important
}
.index_con{width:100% !important}
.index_news_item p{width:calc(100% - 0.6rem) !important}
.card_item{width:auto !important}
.content .tab_box_fixed{
  max-width:calc(100% - 4rem) !important;
  min-width:calc(100% - 4rem);
}

/*--帖子页--*/
.content .head{max-width:unset !important}
.content .post_box{max-width:calc(100% - 4rem) !important}
.emoji_box{width:unset !important}
.content .comment_head{width:unset !important}
.card_m1>p{
  font-size:0.18rem !important;
  line-height:0.4rem !important;
  font-weight:bold;
}
.card_m1 .showImg{
  max-width:600px;
  max-height:600px;
}
.card_item .card_con{width:unset !important}
.card_item .card_con_reply{width:unset !important}
.index_con .strage_item{width:98% !important}

/*--攻略页--*/
.strage_item>div{width:calc(100% - 1.6rem) !important}
.van-tabs{min-width:calc(100% - 4rem)}
.tab_box_fixed .van-tabs{max-width:unset !important}

/*--通知页--*/
.van-list .message_item{width:98% !important}
.message_item .message{width:calc(100% - 0.6rem) !important}
.show_message{
  width:50% !important;
  height:70% !important;
  margin:auto;
}

/*--信息卡页--*/
.mine_box{width:90% !important}
.top_img{
  height:2rem;
  width:100% !important;
}

/*--兑换页--*/
.items{width:unset !important}
.strage_item .score{width:auto !important}
.sign{width:unset !important}
.task{width:unset !important}

/*--搜索页--*/
.fire_box{width:unset !important}

`);



//----------明暗模式----------

GM_registerMenuCommand("切换明暗模式(刷新生效)", switch_dark_bright);

function switch_dark_bright(){
  GM_setValue("darkmode",!GM_getValue("darkmode"));
  console.log("darkmode:"+GM_getValue("darkmode"));
}

if (GM_getValue("darkmode") == true){
  GM_addStyle(`

html,body,.card_con_reply,.post_box>span,.van-search,.van-popup,.searc_box,.sign_box{
  background-color:#444 !important;
  color:#eee !important;
}
.nav_con,.van-tabs__nav,.index_news,.conditions1,.card_item,.van-button--primary,.van-button--plain,.comment_head,.post_box,.van-action-sheet__cancel,.list_wrap li,.van-list,.mine_box,.btn1,.btn2,.t_box>div,.item,.w-e-toolbar,.w-e-text-container,.top_box,.sign,.task,.content_rule,.gift_user{
  background-color:#333 !important;
  background:#333 !important;
}
.van-tab,.card_tit p,.card_m1 div,.comment_head>span,.van-action-sheet__cancel,.list_wrap>p,.show_message p,.show_message span,.mine_box p,.item>p,.sign_box>p,.gift_user,.comment_head .ac{color:#eee !important}
.sign_box>p b{color:#ff0 !important}
.card_m1 div a,.show_message a{color:#999 !important}
.card_item,.post_box,.comment_head,.mine_box,.btn1,.btn2,.top_box,.sign,.task{-webkit-box-shadow:0 2px 15px #777 !important}
.pc_right_bt a{color:#444 !important}
.img_popup{background-color:transparent !important}

`);
}


