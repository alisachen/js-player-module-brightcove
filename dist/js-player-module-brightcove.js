!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}(window,function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);var n="//players.brightcove.net/{{ account }}/{{ player }}_default/index.min.js",o='\n<video id="{{ player_id }}"\n  data-video-id="{{ videoid }}"\n  data-account="{{ account }}"\n  data-player="{{ player }}"\n  data-embed="default"\n  data-application-id\n  class="video-js"\n  width="{{ width }}"\n  height="{{ height }}"\n  {{ui_controls}}\n  {{ui_autoplay}}\n  {{playsinline}}\n  {{loop}}\n  {{muted}}\n  {{other}}\n></video>\n',a='\n  <div class="display_time">00:00</div>\n  <div class="display_time_par">0%</div>\n  <button class="btn_play btn btn-default">play</button>\n  <button class="btn_pause btn btn-default">pause</button>\n  <button class="btn_stop btn btn-default">stop</button>\n  <button class="btn_mute btn btn-default">mute</button>\n  <div class="seekbar_time"><div class="seekbar_time_bg"></div><span></span></div>\n  <div class="seekbar_vol"><div class="seekbar_vol_bg"></div><span></span></div>\n  <button class="btn_full btn btn-default">full screen</button>\n  <div class="display_poster"><img src="" alt=""></div>\n  <div class="display_name"></div>\n',l="\n#{{ id }} {\n  position: relative;\n}\n#{{ id }} .on {\n  display: none;\n}\n#{{ id }} .off {\n  display: block;\n}\n#{{ id }} .btn_play {\n  width: 120px;\n  height: 30px;\n  display: block;\n  cursor: pointer;\n}\n#{{ id }} .btn_play.active {\n  display: none;\n}\n#{{ id }} .btn_play:hover .on {\n  display: block;\n}\n#{{ id }} .btn_play:hover .off {\n  display: none;\n}\n#{{ id }} .btn_pause {\n  width: 120px;\n  height: 30px;\n  display: none;\n  cursor: pointer;\n}\n#{{ id }} .btn_pause.active {\n  display: block;\n}\n#{{ id }} .btn_pause:hover .on {\n  display: block;\n}\n#{{ id }} .btn_pause:hover .off {\n  display: none;\n}\n#{{ id }} .btn_stop {\n  width: 120px;\n  height: 30px;\n  cursor: pointer;\n}\n#{{ id }} .btn_stop.active {\n  display: block;\n}\n#{{ id }} .btn_stop:hover .on {\n  display: block;\n}\n#{{ id }} .btn_stop:hover .off {\n  display: none;\n}\n#{{ id }} .btn_mute {\n  width: 120px;\n  height: 30px;\n  cursor: pointer;\n}\n#{{ id }} .btn_mute.active .on {\n  display: block;\n}\n#{{ id }} .btn_mute.active .off {\n  display: none;\n}\n#{{ id }} .seekbar_vol {\n  width: 100%;\n  height: 9px;\n  padding: 2px 0;\n  position: relative;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n#{{ id }} .seekbar_vol .seekbar_vol_bg {\n  width: 100%;\n  height: 5px;\n  background: #ddd;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 2px 0;\n}\n#{{ id }} .seekbar_vol span {\n  display: block;\n  width: 0%;\n  height: 100%;\n  background: #666;\n  position: relative;\n}\n#{{ id }} .seekbar_time {\n  width: 100%;\n  height: 9px;\n  padding: 2px 0;\n  position: relative;\n  cursor: pointer;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n#{{ id }} .seekbar_time .seekbar_time_bg {\n  width: 100%;\n  height: 5px;\n  background: #ddd;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 2px 0;\n}\n#{{ id }} .seekbar_time span {\n  display: block;\n  width: 0%;\n  height: 100%;\n  background: #666;\n  position: relative;\n}\n#{{ id }} .display_poster img {\n  max-width: 50%;\n}\n",u=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();
/*!
 * JS PLAYER MODULE BRIGHTCOVE (JavaScript Library)
 *   js-player-module-brightcove.js
 * Version 2.0.11
 * Repository https://github.com/yama-dev/js-player-module-brightcove
 * Copyright yama-dev
 * Licensed under the MIT license.
 */
var s=function(){function e(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var u in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.VERSION="2.0.11",this.currentUrl=location.href,this.config={mode:i.mode||"movie",id:i.id||"pmb",player_id:i.id+"_player"||"pmb_player",videoid:i.videoid||"",account:i.account||"",width:i.width||"",height:i.height||"",player:i.player||"default",volume:i.volume||1,playsinline:!1!==i.playsinline?"webkit-playsinline playsinline":"",loop:!0===i.loop?"loop":"",muted:!0===i.muted?"muted":"",ui_controls:!0===i.ui_controls?"controls":"",ui_autoplay:!0===i.ui_autoplay?"autoplay":"",ui_default:!1!==i.ui_default,ui_default_css:!1!==i.ui_default_css,poster:i.poster||null,ui_round:i.ui_round||null,ui_round_num:i.ui_round_num||146,ui_round_color:i.ui_round_color||"#696969",style_text:i.style_text||"",other:i.other||""},this.PlayerMediaInfo={},this.Player="",this.PlayerLoadFlg=!1,this.PlayerChangeLoadFlg=!0,this.playerHtml=o,this.playerUiHtml=a,this.playerCss=l,this.playerScriptCode=n,"audio"==this.config.mode&&(this.config.width=1,this.config.height=1,this.playerCss+="#"+this.config.player_id+" { opacity: 0; }"),this.config){new RegExp("({{.?"+u+".?}})","g");var s=new RegExp("{{.?("+u+").?}}","g");this.playerHtml.match(s);var r=RegExp.$1;this.playerHtml=this.playerHtml.replace(s,this.config[r])}for(var d in this.config){new RegExp("({{.?"+d+".?}})","g");var c=new RegExp("{{.?("+d+").?}}","g");this.playerScriptCode.match(c);var h=RegExp.$1;this.playerScriptCode=this.playerScriptCode.replace(c,this.config[h])}for(var y in this.config){new RegExp("({{.?"+y+".?}})","g");var f=new RegExp("{{.?("+y+").?}}","g");this.playerCss.match(f);var m=RegExp.$1;this.playerCss=this.playerCss.replace(f,this.config[m])}Element.prototype.hasClass=function(e){return this.className.split(" ").indexOf(e)>=0},Element.prototype.addClass=function(e){if(!this.hasClass(e)){var t=this.className.split(" ");t.push(e),this.className=t.join(" ")}return this},Element.prototype.removeClass=function(e){var t=this.className.split(" "),i=t.indexOf(e);return i>=0&&(t.splice(i,1),this.className=t.join(" ")),this},Element.prototype.toggleClass=function(e){this.hasClass(e)?this.removeClass(e):this.addClass(e)},-1===this.currentUrl.search(/localhost/)&&-1===this.currentUrl.search(/192.168/)||this.DebugMode();var v=document.getElementById(this.config.id),p=document.createElement("div"),g=document.createElement("div"),P=document.createElement("style");p.innerHTML=this.playerHtml,g.innerHTML=this.playerUiHtml,P.innerHTML=this.playerCss,P.id=this.config.id+"_scripttag",v.appendChild(p),this.config.ui_default&&v.appendChild(g),this.config.ui_default_css&&v.appendChild(P),document.addEventListener("DOMContentLoaded",function(e){t.SetPlayer()})}return u(e,[{key:"DebugMode",value:function(){console.log(this)}},{key:"DebugModePlayer",value:function(){console.log("player_id  -> "+this.config.player_id+"\nreadyState -> "+this.Player.readyState()+"\n")}},{key:"SetPlayer",value:function(){var e=this;this.CacheElement();var t=document.createElement("script");t.id=e.config.id+"_scripttag",t.src=this.playerScriptCode,document.body.appendChild(t),t.onload=function(){var t=0,i=setInterval(function(){if(t>=100?(clearInterval(i),console.log("ERROR: not movie loaded.")):t++,videojs(e.config.player_id).mediainfo){if(clearInterval(i),e.Player=videojs(e.config.player_id),e.PlayerJson=e.Player.toJSON(),e.PlayerMediaInfo=e.Player.mediainfo,-1===e.currentUrl.search(/localhost/)&&-1===e.currentUrl.search(/192.168/)||e.DebugModePlayer(),!0===e.PlayerLoadFlg)return!1;e.PlayerLoadFlg=!0,e.SetVolume(),e.SetMute(),e.SetInfo(),e.SetPoster(),e.EventPlay(),e.EventPause(),e.EventStop(),e.EventMute(),e.EventVolon(),e.EventVoloff(),e.EventBtnFull(),e.EventSeekbarVol(),e.EventSeekbarTime(),e.EventChangeVideo(),e.EventStopAll(),videojs(e.config.player_id).on("timeupdate",function(){e.Update()}),videojs(e.config.player_id).on("volumechange",function(){e.$uiSeekbarVolCover.style.width=100*e.Player.volume()+"%"}),videojs(e.config.player_id).on("ended",function(){e.Stop()}),videojs(e.config.player_id).on("error",function(e){console.log(this.error().code)})}},100)},void 0===window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST?(window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST=[],window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST.push({id:e.config.id,player_id:e.config.player_id})):window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST.push({id:e.config.id,player_id:e.config.player_id})}},{key:"CacheElement",value:function(){this.$uiBtnPlay=document.querySelectorAll("#"+this.config.id+" .btn_play")?document.querySelectorAll("#"+this.config.id+" .btn_play"):document.createElement("div"),this.$uiBtnStop=document.querySelectorAll("#"+this.config.id+" .btn_stop")?document.querySelectorAll("#"+this.config.id+" .btn_stop"):document.createElement("div"),this.$uiBtnPause=document.querySelectorAll("#"+this.config.id+" .btn_pause")?document.querySelectorAll("#"+this.config.id+" .btn_pause"):document.createElement("div"),this.$uiBtnMute=document.querySelector("#"+this.config.id+" .btn_mute")?document.querySelector("#"+this.config.id+" .btn_mute"):document.createElement("div"),this.$uiBtnVolon=document.querySelector("#"+this.config.id+" .btn_volon")?document.querySelector("#"+this.config.id+" .btn_volon"):document.createElement("div"),this.$uiBtnVoloff=document.querySelector("#"+this.config.id+" .btn_voloff")?document.querySelector("#"+this.config.id+" .btn_voloff"):document.createElement("div"),this.$uiDisplayTime=document.querySelector("#"+this.config.id+" .display_time")?document.querySelector("#"+this.config.id+" .display_time"):document.createElement("div"),this.$uiDisplayTimeDown=document.querySelector("#"+this.config.id+" .display_time_down")?document.querySelector("#"+this.config.id+" .display_time_down"):document.createElement("div"),this.$uiDisplayTimePar=document.querySelector("#"+this.config.id+" .display_time_par")?document.querySelector("#"+this.config.id+" .display_time_par"):document.createElement("div"),this.$uiDisplayPoster=document.querySelector("#"+this.config.id+" .display_poster")?document.querySelector("#"+this.config.id+" .display_poster"):document.createElement("div"),this.$uiDisplayName=document.querySelector("#"+this.config.id+" .display_name")?document.querySelector("#"+this.config.id+" .display_name"):document.createElement("div"),this.$uiBtnFull=document.querySelector("#"+this.config.id+" .btn_full")?document.querySelector("#"+this.config.id+" .btn_full"):document.createElement("div"),this.$uiSeekbarVol=document.querySelector("#"+this.config.id+" .seekbar_vol")?document.querySelector("#"+this.config.id+" .seekbar_vol"):document.createElement("div"),this.$uiSeekbarVolBg=document.querySelector("#"+this.config.id+" .seekbar_vol .seekbar_vol_bg")?document.querySelector("#"+this.config.id+" .seekbar_vol .seekbar_vol_bg"):document.createElement("div"),this.$uiSeekbarVolCover=document.querySelector("#"+this.config.id+" .seekbar_vol span")?document.querySelector("#"+this.config.id+" .seekbar_vol span"):document.createElement("div"),this.$uiSeekbarTime=document.querySelector("#"+this.config.id+" .seekbar_time")?document.querySelector("#"+this.config.id+" .seekbar_time"):document.createElement("div"),this.$uiSeekbarTimeBg=document.querySelector("#"+this.config.id+" .seekbar_time .seekbar_time_bg")?document.querySelector("#"+this.config.id+" .seekbar_time .seekbar_time_bg"):document.createElement("div"),this.$uiSeekbarTimeCover=document.querySelector("#"+this.config.id+" .seekbar_time span")?document.querySelector("#"+this.config.id+" .seekbar_time span"):document.createElement("div"),this.$uiBtnChange=document.querySelectorAll("#"+this.config.id+" .btn_change")?document.querySelectorAll("#"+this.config.id+" .btn_change"):document.createElement("div"),this.$uiBtnChangeDisplayTime=document.querySelector("#"+this.config.id+" .display_time")?document.querySelector("#"+this.config.id+" .display_time"):document.createElement("div"),this.$uiBtnChangeDisplayTimeDown=document.querySelector("#"+this.config.id+" .display_time_down")?document.querySelector("#"+this.config.id+" .display_time_down"):document.createElement("div"),this.$uiBtnRound=document.querySelector("#"+this.config.id+" .btn_round")?document.querySelector("#"+this.config.id+" .btn_round"):document.createElement("div"),this.$uiBtnRoundSpan=document.querySelector("#"+this.config.id+" .btn_round span")?document.querySelector("#"+this.config.id+" .btn_round span"):document.createElement("div"),this.$uiBtnRoundSvg=document.querySelector("#"+this.config.id+" .btn_roundsvg")?document.querySelector("#"+this.config.id+" .btn_roundsvg"):document.createElement("div"),this.$uiBtnRoundSvgPath=document.querySelector("#"+this.config.id+" .btn_roundsvg .btn_roundsvg__path")?document.querySelector("#"+this.config.id+" .btn_roundsvg .btn_roundsvg__path"):document.createElement("div")}},{key:"EventPlay",value:function(){var e=this,t=this;if(null!==this.$uiBtnPlay&&0!==this.$uiBtnPlay.length)for(var i=0;i<this.$uiBtnPlay.length;++i)this.$uiBtnPlay[i].addEventListener("click",function(i){e.Player.paused()?t.Play():t.Pause()})}},{key:"EventPause",value:function(){var e=this;if(null!==this.$uiBtnPause&&0!==this.$uiBtnPause.length)for(var t=0;t<this.$uiBtnPause.length;++t)this.$uiBtnPause[t].addEventListener("click",function(t){e.Pause()})}},{key:"EventStop",value:function(){var e=this;if(null!==this.$uiBtnStop&&0!==this.$uiBtnStop.length)for(var t=0;t<this.$uiBtnStop.length;++t)this.$uiBtnStop[t].addEventListener("click",function(t){e.Stop()})}},{key:"EventStopAll",value:function(){var e=this;window.addEventListener("blur",function(){e.StopAll()})}},{key:"EventMute",value:function(){var e=this;null!==this.$uiBtnMute&&this.$uiBtnMute.addEventListener("click",function(t){e.Player.muted()?(e.Player.muted(!1),e.Player.volume(e.config.volume),e.$uiBtnMute.removeClass("active")):(e.Player.muted(!0),e.Player.volume(0),e.$uiBtnMute.addClass("active"),e.$uiSeekbarVolCover.style.width="0%")})}},{key:"EventVolon",value:function(){var e=this;null!==this.$uiBtnVolon&&this.$uiBtnVolon.addEventListener("click",function(t){e.Player.muted(!1),e.Player.volume(e.config.volume),e.$uiBtnVolon.removeClass("active")})}},{key:"EventVoloff",value:function(){var e=this;null!==this.$uiBtnVoloff&&this.$uiBtnVoloff.addEventListener("click",function(t){e.Player.muted(!0),e.Player.volume(0),e.$uiBtnVoloff.addClass("active"),e.$uiSeekbarVolCover.style.width="0%"})}},{key:"EventBtnFull",value:function(){var e=this;null!==this.$uiBtnFull&&this.$uiBtnFull.addEventListener("click",function(t){e.Player.requestFullscreen()})}},{key:"EventSeekbarVol",value:function(){var e=this;if(null!==this.$uiSeekbarVol){var t=!1;this.$uiSeekbarVolCover.style.width="100%",this.$uiSeekbarVol.addEventListener("mousedown",function(i){t=!0;var n=e.$uiSeekbarVol.clientWidth,o=e.$uiSeekbarVol.getBoundingClientRect().left,a=(i.pageX-o)/n;e.Player.volume(a),e.config.volume=a}),this.$uiSeekbarVol.addEventListener("mouseleave",function(e){t=!1}),this.$uiSeekbarVol.addEventListener("mouseup",function(e){t=!1}),this.$uiSeekbarVol.addEventListener("mousemove",function(i){if(!0===t){var n=e.$uiSeekbarVol.clientWidth,o=e.$uiSeekbarVol.getBoundingClientRect().left,a=(i.pageX-o)/n;e.Player.volume(a),e.config.volume=a}})}}},{key:"EventSeekbarTime",value:function(){var e=this,t=this;if(null!==this.$uiSeekbarTime){var i=!1;this.$uiSeekbarTime.addEventListener("mousedown",function(n){i=!0,t.Pause();var o=e.$uiSeekbarTime.clientWidth,a=e.$uiSeekbarTime.getBoundingClientRect().left,l=(n.pageX-a)/o,u=e.Player.duration()*l;e.$uiSeekbarTimeCover.style.width=100*l+"%",e.Player.currentTime(u)}),this.$uiSeekbarTime.addEventListener("mouseleave",function(t){if(!0===i){if(e.Player.play(),null!==e.$uiBtnPlay&&0!==e.$uiBtnPlay.length)for(var n=0;n<e.$uiBtnPlay.length;++n)e.$uiBtnPlay[n].addClass("active");if(null!==e.$uiBtnPause&&0!==e.$uiBtnPause.length)for(n=0;n<e.$uiBtnPause.length;++n)e.$uiBtnPause[n].addClass("active")}i=!1}),this.$uiSeekbarTime.addEventListener("mouseup",function(t){if(!0===i){if(e.Player.play(),null!==e.$uiBtnPlay&&0!==e.$uiBtnPlay.length)for(var n=0;n<e.$uiBtnPlay.length;++n)e.$uiBtnPlay[n].addClass("active");if(null!==e.$uiBtnPause&&0!==e.$uiBtnPause.length)for(n=0;n<e.$uiBtnPause.length;++n)e.$uiBtnPause[n].addClass("active")}i=!1}),this.$uiSeekbarTime.addEventListener("mousemove",function(t){if(!0===i){var n=e.$uiSeekbarTime.clientWidth,o=e.$uiSeekbarTime.getBoundingClientRect().left,a=(t.pageX-o)/n,l=e.Player.duration()*a;e.$uiSeekbarTimeCover.style.width=100*a+"%",e.Player.currentTime(l)}})}if(null!==this.$uiBtnRound&&this.$uiBtnRound.addEventListener("click",function(i){t.Pause();var n=e.$uiBtnRound.clientWidth/2,o=e.$uiBtnRound.getBoundingClientRect().left,a=e.$uiBtnRound.getBoundingClientRect().top,l=i.pageX-o-n,u=i.pageY-(a+window.pageYOffset)-n,s=180*Math.atan2(u,l)/Math.PI;s>=-90&&s<=0?s+=90:s>=0&&s<=90?s+=90:s>=90&&s<=180?s+=90:s>=-180&&s<=-90&&(s=s+360+90),e.Player.currentTime(e.Player.duration()*(s/360)),e.$uiBtnRoundSpan.style.webkitTransform="rotate("+s+"deg)",e.Player.play()}),null!==this.$uiBtnRoundSvg){var n=3.14*this.$uiBtnRoundSvg.clientWidth;this.$uiBtnRoundSvg.addEventListener("click",function(i){t.Pause();var o=e.$uiBtnRoundSvg.clientWidth/2,a=e.$uiBtnRoundSvg.getBoundingClientRect().left,l=e.$uiBtnRoundSvg.getBoundingClientRect().top,u=i.pageX-a-o,s=i.pageY-(l+window.pageYOffset)-o,r=180*Math.atan2(s,u)/Math.PI;r>=-90&&r<=0?r+=90:r>=0&&r<=90?r+=90:r>=90&&r<=180?r+=90:r>=-180&&r<=-90&&(r=r+360+90),e.Player.currentTime(e.Player.duration()*(r/360)),e.$uiBtnRoundSvgPath.style.cssText="stroke-dashoffset: "+(n+10-r/365*n)+";",e.Player.play()})}}},{key:"EventChangeVideo",value:function(){var e=this;if(null!==this.$uiBtnChange&&0!==this.$uiBtnChange.length)for(var t=0;t<this.$uiBtnChange.length;++t)this.$uiBtnChange[t].addEventListener("click",function(t){var i=t.currentTarget.dataset.pmbId;e.Change(i)})}},{key:"Update",value:function(){if(this.PlayerChangeLoadFlg){this.$uiDisplayTime.innerHTML=this.GetTime()+"/"+this.GetTimeMax(),this.$uiBtnChangeDisplayTime.innerHTML=this.GetTime()+"/"+this.GetTimeMax(),this.$uiDisplayTimeDown.innerHTML=this.GetTimeDown(),this.$uiBtnChangeDisplayTimeDown.innerHTML=this.GetTimeDown(),this.$uiDisplayTimePar.innerHTML=this.GetTimePar(),this.$uiSeekbarTimeCover.style.width=this.GetTimePar(),this.$uiBtnRoundSpan.style.webkitTransform="rotate("+360*this.GetTimeRatio()+"deg)";var e=3.14*this.$uiBtnRoundSvg.clientWidth!=0?3.14*this.$uiBtnRoundSvg.clientWidth:3.14*this.config.ui_round_num;this.$uiBtnRoundSvgPath.style.cssText="stroke-dashoffset: "+(e+10-360*this.GetTimeRatio()/365*e)+";"}else this.$uiDisplayTime.innerHTML="00:00",this.$uiBtnChangeDisplayTime.innerHTML="00:00",this.$uiDisplayTimeDown.innerHTML="00:00",this.$uiBtnChangeDisplayTimeDown.innerHTML="00:00",this.$uiDisplayTimePar.innerHTML="0%",this.$uiSeekbarTimeCover.style.width="0%",this.$uiBtnRoundSpan.style.webkitTransform="rotate(0deg)",this.$uiBtnRoundSvgPath.style.cssText="stroke-dashoffset: 0;"}},{key:"Play",value:function(){if(null!==this.$uiBtnPlay&&0!==this.$uiBtnPlay.length)if(this.Player.paused()){if(this.Player.play(),null!==this.$uiBtnPlay&&0!==this.$uiBtnPlay.length)for(var e=0;e<this.$uiBtnPlay.length;++e)this.$uiBtnPlay[e].addClass("active");if(null!==this.$uiBtnPause&&0!==this.$uiBtnPause.length)for(e=0;e<this.$uiBtnPause.length;++e)this.$uiBtnPause[e].addClass("active")}else{if(this.Pause(),null!==this.$uiBtnPlay&&0!==this.$uiBtnPlay.length)for(e=0;e<this.$uiBtnPlay.length;++e)this.$uiBtnPlay[e].removeClass("active");if(null!==this.$uiBtnPause&&0!==this.$uiBtnPause.length)for(e=0;e<this.$uiBtnPause.length;++e)this.$uiBtnPause[e].removeClass("active")}}},{key:"Stop",value:function(){if(this.Pause(),this.Player.currentTime(0),null!==this.$uiBtnPlay&&0!==this.$uiBtnPlay.length)for(var e=0;e<this.$uiBtnPlay.length;++e)this.$uiBtnPlay[e].removeClass("active");if(null!==this.$uiBtnPause&&0!==this.$uiBtnPause.length)for(e=0;e<this.$uiBtnPause.length;++e)this.$uiBtnPause[e].removeClass("active");var t=Array.prototype.slice.call(document.querySelectorAll("[data-PMB-id]"));t&&t.forEach(function(e,t){e.removeClass("active")})}},{key:"Pause",value:function(){if(this.Player.pause(),null!==this.$uiBtnPlay&&0!==this.$uiBtnPlay.length)for(var e=0;e<this.$uiBtnPlay.length;++e)this.$uiBtnPlay[e].removeClass("active");if(null!==this.$uiBtnPause&&0!==this.$uiBtnPause.length)for(e=0;e<this.$uiBtnPause.length;++e)this.$uiBtnPause[e].removeClass("active");var t=Array.prototype.slice.call(document.querySelectorAll("[data-PMB-id]"));t&&t.forEach(function(e,t){e.removeClass("active")})}},{key:"Change",value:function(e){var t=this;if(""!=e&&null!=e&&void 0!=e){if(document.querySelector('[data-PMB-id="'+e+'"]')){if(document.querySelector('[data-PMB-id="'+e+'"]').hasClass("active"))return void this.Pause();this.$uiBtnChangeDisplayTime=document.querySelector('[data-PMB-id="'+e+'"] .display_time')?document.querySelector('[data-PMB-id="'+e+'"] .display_time'):document.createElement("div"),this.$uiBtnChangeDisplayTimeDown=document.querySelector('[data-PMB-id="'+e+'"] .display_time_down')?document.querySelector('[data-PMB-id="'+e+'"] .display_time_down'):document.createElement("div")}if(this.config.videoid!==e){this.PlayerChangeLoadFlg=!1;var i=window.navigator.userAgent.toLowerCase();-1==i.indexOf("msie")&&-1==i.indexOf("trident")&&-1==i.indexOf("edge")&&this.Player.currentTime(0),this.Player.muted(!0),this.Player.play(),this.Player.catalog.getVideo(e,function(i,n){if(t.Player.catalog.load(n),setTimeout(function(){t.Player.play(),t.Player.muted(!1)},100),t.PlayerMediaInfo=t.Player.mediainfo,t.config.videoid=e,t.SetInfo(),t.SetPoster(),null!==t.$uiBtnPlay&&0!==t.$uiBtnPlay.length)for(var o=0;o<t.$uiBtnPlay.length;++o)t.$uiBtnPlay[o].addClass("active");if(null!==t.$uiBtnPause&&0!==t.$uiBtnPause.length)for(o=0;o<t.$uiBtnPause.length;++o)t.$uiBtnPause[o].addClass("active");var a=Array.prototype.slice.call(document.querySelectorAll("[data-PMB-id]")),l=document.querySelector('[data-PMB-id="'+e+'"]');a&&a.forEach(function(e,t){e.removeClass("active")}),l&&l.addClass("active")}),this.Player.on("loadeddata",function(){t.PlayerChangeLoadFlg=!0,t.Player.off("loadeddata")})}else{if(this.Player.muted(!1),this.Player.play(),null!==this.$uiBtnPlay&&0!==this.$uiBtnPlay.length)for(var n=0;n<this.$uiBtnPlay.length;++n)this.$uiBtnPlay[n].addClass("active");if(null!==this.$uiBtnPause&&0!==this.$uiBtnPause.length)for(n=0;n<this.$uiBtnPause.length;++n)this.$uiBtnPause[n].addClass("active");var o=Array.prototype.slice.call(document.querySelectorAll("[data-PMB-id]")),a=document.querySelector('[data-PMB-id="'+e+'"]');o&&o.forEach(function(e,t){e.removeClass("active")}),a&&a.addClass("active")}}}},{key:"StopAll",value:function(){for(var e in window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST){if(videojs(window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST[e].player_id).pause(),videojs(window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST[e].player_id).currentTime(0),this.$uiBtnPlayAll=document.querySelectorAll("#"+window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST[e].id+" .btn_play")?document.querySelectorAll("#"+window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST[e].id+" .btn_play"):document.createElement("div"),this.$uiBtnStopAll=document.querySelectorAll("#"+window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST[e].id+" .btn_stop")?document.querySelectorAll("#"+window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST[e].id+" .btn_stop"):document.createElement("div"),this.$uiBtnPauseAll=document.querySelectorAll("#"+window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST[e].id+" .btn_pause")?document.querySelectorAll("#"+window.PLAYER_MODULE_BRIGHTCOVE_PLATLIST[e].id+" .btn_pause"):document.createElement("div"),null!==this.$uiBtnPlayAll&&0!==this.$uiBtnPlayAll.length)for(var t=0;t<this.$uiBtnPlayAll.length;++t)this.$uiBtnPlayAll[t].removeClass("active");if(null!==this.$uiBtnStopAll&&0!==this.$uiBtnStopAll.length)for(t=0;t<this.$uiBtnStopAll.length;++t)this.$uiBtnStopAll[t].removeClass("active");if(null!==this.$uiBtnPauseAll&&0!==this.$uiBtnPauseAll.length)for(t=0;t<this.$uiBtnPauseAll.length;++t)this.$uiBtnPauseAll[t].removeClass("active");var i=Array.prototype.slice.call(document.querySelectorAll("[data-PMB-id]"));i&&i.forEach(function(e,t){e.removeClass("active")})}}},{key:"GetTime",value:function(){function e(e){return"number"==typeof e&&(e=String(e)),e<10?"0"+e:e>=10?e:void 0}var t=e(Math.floor(this.Player.currentTime()/60)),i=e(Math.floor(this.Player.currentTime()%60));return isFinite(i)&&isFinite(t)?t+":"+i:"00:00"}},{key:"GetTimeDown",value:function(){function e(e){return"number"==typeof e&&(e=String(e)),e<10?"0"+e:e>=10?e:void 0}var t=this.Player.duration()-this.Player.currentTime(),i=e(Math.floor(t/60)),n=e(Math.floor(t%60));return isFinite(n)&&isFinite(i)?i+":"+n:"00:00"}},{key:"GetTimeMax",value:function(){function e(e){return"number"==typeof e&&(e=String(e)),e<10?"0"+e:e>=10?e:void 0}return e(Math.floor(this.Player.duration()/60))+":"+e(Math.floor(this.Player.duration()%60))}},{key:"GetTimeRatio",value:function(){return Math.floor(this.Player.currentTime()/this.Player.duration()*1e3)/1e3}},{key:"GetTimePar",value:function(){var e=Math.floor(this.Player.currentTime()/this.Player.duration()*1e3)/10;return isFinite(e)?e+"%":"0%"}},{key:"GetInfo",value:function(){return this.PlayerMediaInfo}},{key:"GetUrlPoster",value:function(){return this.PlayerMediaInfo.poster}},{key:"GetName",value:function(){return this.PlayerMediaInfo.name}},{key:"GetDescription",value:function(){return this.PlayerMediaInfo.description}},{key:"GetTags",value:function(){return this.PlayerMediaInfo.tags}},{key:"SetMute",value:function(){this.Player.muted()?(this.Player.volume(0),this.$uiBtnMute.addClass("active")):(this.Player.volume(this.config.volume),this.$uiBtnMute.removeClass("active"))}},{key:"SetVolume",value:function(){this.config.volume&&this.Player.volume(this.config.volume)}},{key:"SetInfo",value:function(){null!==this.$uiDisplayName&&0!==this.$uiDisplayName.length&&(this.$uiDisplayName.innerHTML=this.PlayerMediaInfo.name)}},{key:"SetPoster",value:function(){"audio"==this.config.mode?this.$uiDisplayPoster.innerHTML="":this.config.poster?(this.Player.poster(this.config.poster),null!==this.$uiDisplayPoster&&0!==this.$uiDisplayPoster.length&&(this.$uiDisplayPoster.innerHTML='<img src="'+this.config.poster+'" alt="">')):null!==this.$uiDisplayPoster&&0!==this.$uiDisplayPoster.length&&(this.$uiDisplayPoster.innerHTML='<img src="'+this.Player.poster()+'" alt="">')}},{key:"SetUrlPoster",value:function(e){this.Player.poster(e)}},{key:"Destroy",value:function(){this.Player.reset()}}]),e}();t.default=s;window.PLAYER_MODULE_BRIGHTCOVE=s}])});