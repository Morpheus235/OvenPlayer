/*! For license information please see ovenplayer.provider.DashProvider~ovenplayer.provider.HlsProvider~ovenplayer.provider.Html5~ovenplaye~7afd68cf-0.9.62.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{304:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pickCurrentSource=e.errorTrigger=e.separateLive=e.extractVideoElement=void 0;var n=t(1),r=function(A){return A&&A.__esModule?A:{default:A}}(t(8));e.extractVideoElement=function(A){return r.default.isElement(A)?A:A.getVideoElement?A.getVideoElement():A.media?A.media:null},e.separateLive=function(A){return!(!A||!A.isDynamic)&&A.isDynamic()},e.errorTrigger=function(A,e){e&&(e.setState(n.STATE_ERROR),e.pause(),e.trigger(n.ERROR,A))},e.pickCurrentSource=function(A,e,t){var n=Math.max(0,e);if(A)for(var r=0;r<A.length;r++)if(A[r].default&&(n=r),t.getSourceIndex()===r)return r;return n}},314:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(t(317)),r=l(t(66)),o=l(t(379)),a=t(304),i=t(1);function l(A){return A&&A.__esModule?A:{default:A}}e.default=function(A,e,t){OvenPlayerConsole.log("CORE loaded. ");var l={};(0,r.default)(l);var u=A.element,s=null,g=null,E=!1;A.adTagUrl&&((s=(0,n.default)(u,l,e,A.adTagUrl))||console.log("Can not load due to google ima for Ads.")),g=(0,o.default)(u,l,s?s.videoEndedCallback:null),u.playbackRate=u.defaultPlaybackRate=e.getPlaybackRate();var c=function(n){var r=A.sources[A.currentSource];if(A.framerate=r.framerate,A.framerate||e.setTimecodeMode(!0),t)t(r,n);else{OvenPlayerConsole.log("source loaded : ",r,"lastPlayPosition : "+n);var o=u.src,a=document.createElement("source");a.src=r.file,a.src!==o?(u.src=r.file,o&&u.load()):0===n&&u.currentTime>0&&l.seek(n),n>0&&(l.seek(n),e.isAutoStart()||l.play()),e.isAutoStart()&&l.play()}};return l.getName=function(){return A.name},l.canSeek=function(){return A.canSeek},l.setCanSeek=function(e){A.canSeek=e},l.isSeeking=function(){return A.seeking},l.setSeeking=function(e){A.seeking=e},l.setState=function(e){if(A.state!==e){var t=A.state;if(OvenPlayerConsole.log("Provider : setState()",e),t===i.STATE_AD_PLAYING&&(e===i.STATE_ERROR||e===i.STATE_IDLE))return!1;switch(OvenPlayerConsole.log("Provider : triggerSatatus",e),e){case i.STATE_COMPLETE:l.trigger(i.PLAYER_COMPLETE);break;case i.STATE_PAUSED:l.trigger(i.PLAYER_PAUSE,{prevState:A.state,newstate:i.STATE_PAUSED});break;case i.STATE_AD_PAUSED:l.trigger(i.PLAYER_PAUSE,{prevState:A.state,newstate:i.STATE_AD_PAUSED});break;case i.STATE_PLAYING:l.trigger(i.PLAYER_PLAY,{prevState:A.state,newstate:i.STATE_PLAYING});case i.STATE_AD_PLAYING:l.trigger(i.PLAYER_PLAY,{prevState:A.state,newstate:i.STATE_AD_PLAYING})}A.state=e,l.trigger(i.PLAYER_STATE,{prevstate:t,newstate:A.state})}},l.getState=function(){return A.state},l.setBuffer=function(e){A.buffer=e},l.getBuffer=function(){return A.buffer},l.isLive=function(){return!!A.isLive||u.duration===1/0},l.getDuration=function(){return l.isLive()?1/0:u.duration},l.getPosition=function(){return u?u.currentTime:0},l.setVolume=function(A){if(!u)return!1;u.volume=A/100},l.getVolume=function(){return u?100*u.volume:0},l.setMute=function(A){return!!u&&(void 0===A?(u.muted=!u.muted,l.trigger(i.CONTENT_MUTE,{mute:u.muted})):(u.muted=A,l.trigger(i.CONTENT_MUTE,{mute:u.muted})),u.muted)},l.getMute=function(){return!!u&&u.muted},l.preload=function(t,n){return A.sources=t,A.currentSource=(0,a.pickCurrentSource)(t,A.currentSource,e),c(n||0),new Promise(function(A,t){e.isMute()&&l.setMute(!0),e.getVolume()&&l.setVolume(e.getVolume()),A()})},l.load=function(t){A.sources=t,A.currentSource=(0,a.pickCurrentSource)(t,A.currentSource,e),c(A.sources.starttime||0)},l.play=function(){if(OvenPlayerConsole.log("Provider : play()"),!u)return!1;if(E)return!1;if(E=!0,l.getState()!==i.STATE_PLAYING)if(s&&s.isActive()||s&&!s.started())s.play().then(function(A){E=!1,OvenPlayerConsole.log("Provider : ads play success")}).catch(function(A){E=!1,OvenPlayerConsole.log("Provider : ads play fail",A)});else{var A=u.play();void 0!==A?A.then(function(){E=!1,OvenPlayerConsole.log("Provider : video play success")}).catch(function(A){OvenPlayerConsole.log("Provider : video play error",A.message),E=!1}):(OvenPlayerConsole.log("Provider : video play success (ie)"),E=!1)}},l.pause=function(){if(OvenPlayerConsole.log("Provider : pause()"),!u)return!1;l.getState()===i.STATE_PLAYING?u.pause():l.getState()===i.STATE_AD_PLAYING&&s.pause()},l.seek=function(A){if(!u)return!1;u.currentTime=A},l.setPlaybackRate=function(A){return!!u&&(l.trigger(i.PLAYBACK_RATE_CHANGED,{playbackRate:A}),u.playbackRate=u.defaultPlaybackRate=A)},l.getPlaybackRate=function(){return u?u.playbackRate:0},l.getSources=function(){return u?A.sources.map(function(A,e){return{file:A.file,type:A.type,label:A.label,index:e}}):[]},l.getCurrentSource=function(){return A.currentSource},l.setCurrentSource=function(t,n){return A.currentSource!==t&&(t>-1&&A.sources&&A.sources.length>t?(OvenPlayerConsole.log("source changed : "+t),A.currentSource=t,l.trigger(i.CONTENT_SOURCE_CHANGED,{currentSource:t}),e.setSourceIndex(t),l.setState(i.STATE_IDLE),n&&c(u.currentTime||0),A.currentSource):void 0)},l.getQualityLevels=function(){return u?A.qualityLevels:[]},l.getCurrentQuality=function(){return u?A.currentQuality:null},l.setCurrentQuality=function(A){},l.isAutoQuality=function(){},l.setAutoQuality=function(A){},l.getFramerate=function(){return A.framerate},l.setFramerate=function(e){return A.framerate=e},l.seekFrame=function(e){var t=A.framerate,n=(u.currentTime*t+e)/t;n+=1e-5,l.pause(),l.seek(n)},l.stop=function(){if(!u)return!1;for(OvenPlayerConsole.log("CORE : stop() "),u.removeAttribute("preload"),u.removeAttribute("src");u.firstChild;)u.removeChild(u.firstChild);l.pause(),l.setState(i.STATE_IDLE)},l.destroy=function(){if(!u)return!1;l.stop(),g.destroy(),s&&s.destroy(),l.off(),OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied")},l.super=function(A){var e=l[A];return function(){return e.apply(l,arguments)}},l}},317:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(t(318)),r=a(t(6)),o=(t(304),t(1));function a(A){return A&&A.__esModule?A:{default:A}}e.default=function(A,e,t,a,i){var l="",u="",s={},g=!1,E=!1,c={started:!1,active:!1,isVideoEnded:!1},d=null,C=null,v=null,T=null,f=null,m=null,S=null,y=!1,p=!1,P=t.getBrowser(),O="Android"===P.os||"iOS"===P.os;OvenPlayerConsole.log("ADS : started ","isMobile : ",O,a);try{l=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,u=google.ima.AdErrorEvent.Type.AD_ERROR,google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),d=function(A){console.log(A.getError().getVastErrorCode(),A.getError().getMessage()),E=!0;var t=A.getError().getInnerError();t&&console.log(t.getErrorCode(),t.getMessage()),e.trigger(o.STATE_AD_ERROR,{code:A.getError().getVastErrorCode(),message:A.getError().getMessage()}),c.active=!1,c.started=!0,e.play()},C=function(t){OvenPlayerConsole.log("ADS : OnManagerLoaded ");var r=new google.ima.AdsRenderingSettings;r.restoreCustomPlaybackStateOnAdBreakComplete=!0,f&&(OvenPlayerConsole.log("ADS : destroy adsManager----"),m.destroy(),m=null,f.destroy(),f=null),f=t.getAdsManager(A,r),m=(0,n.default)(f,e,c,d),OvenPlayerConsole.log("ADS : created admanager and listner "),g=!0},v=new google.ima.AdDisplayContainer(function(){var A=document.createElement("div");return A.setAttribute("class","ovp-ads"),A.setAttribute("id","ovp-ads"),t.getContainer().append(A),A}(),A),(T=new google.ima.AdsLoader(v)).addEventListener(l,C,!1),T.addEventListener(u,d,!1),OvenPlayerConsole.log("ADS : adDisplayContainer initialized"),e.on(o.CONTENT_VOLUME,function(A){f&&(A.mute?f.setVolume(0):f.setVolume(A.volume/100))},s);var L=function(){S&&(OvenPlayerConsole.log("ADS : setADWillAutoPlay ","autoplayAllowed",y,"autoplayRequiresMuted",p),S.setAdWillAutoPlay(y),S.setAdWillPlayMuted(p),p&&e.trigger(o.PLAYER_WARNING,{message:o.WARN_MSG_MUTEDPLAY,timer:1e4,iconClass:o.UI_ICONS.volume_mute,onClickCallback:function(){e.setMute(!1)}}))};return s.isActive=function(){return c.active},s.started=function(){return c.started},s.play=function(){return c.started?new Promise(function(A,e){try{f.resume(),A()}catch(A){e(A)}}):(v.initialize(),new Promise(function(n,r){var i=0;(function(){OvenPlayerConsole.log("ADS : checkAutoplaySupport() ");var t=document.createElement("video");t.setAttribute("playsinline","true"),t.src="data:video/mp4;base64, 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",t.load(),O&&e.getName()!==o.PROVIDER_DASH&&A.load();var n=function(A,e){y=A,p=e,t.pause(),t.remove(),L()};return new Promise(function(A,e){if(t.play){var r=t.play();void 0!==r?r.then(function(){OvenPlayerConsole.log("ADS : auto play allowed."),n(!0,!1),A()}).catch(function(e){OvenPlayerConsole.log("ADS : auto play failed",e.message),n(!1,!1),A()}):(OvenPlayerConsole.log("ADS : promise not support"),n(!0,!1),A())}else OvenPlayerConsole.log("ADS : !temporarySupportCheckVideo.play"),n(!0,!1),A()})})().then(function(){t.isAutoStart()&&!y?(OvenPlayerConsole.log("ADS : autoplayAllowed : false"),c.started=!1,r(new Error("autoplayNotAllowed"))):(g=!1,OvenPlayerConsole.log("ADS : initRequest() AutoPlay Support : ","autoplayAllowed",y,"autoplayRequiresMuted",p),(S=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,L(),S.adTagUrl=a,T.requestAds(S),OvenPlayerConsole.log("ADS : requestAds Complete"),function A(){i++,g?(OvenPlayerConsole.log("ADS : ad start!"),f.init("100%","100%",google.ima.ViewMode.NORMAL),f.start(),c.started=!0,n()):E?r(new Error("admanagerLoadingTimeout")):i<150?setTimeout(A,100):r(new Error("admanagerLoadingTimeout"))}())})}))},s.pause=function(){f.pause()},s.videoEndedCallback=function(A){!m||!m.isAllAdComplete()&&m.isLinearAd()?E?A():(c.isVideoEnded=!0,T.contentComplete()):A()},s.destroy=function(){T&&(T.removeEventListener(l,C),T.removeEventListener(u,d)),f&&f.destroy(),v&&v.destroy(),m&&m.destroy();var A=(0,r.default)(t.getContainer()).find(".ovp-ads");A&&A.remove(),e.off(o.CONTENT_VOLUME,null,s)},s}catch(A){return null}}},318:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(A){A&&A.__esModule}(t(6));var n=t(1);e.default=function(A,e,t,r){var o={},a={},i=null,l=google.ima.AdEvent.Type.AD_BUFFERING,u=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,s=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,g=google.ima.AdErrorEvent.Type.AD_ERROR,E=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,c=google.ima.AdEvent.Type.CLICK,d=google.ima.AdEvent.Type.SKIPPED,C=google.ima.AdEvent.Type.COMPLETE,v=google.ima.AdEvent.Type.FIRST_QUARTILE,T=google.ima.AdEvent.Type.LOADED,f=google.ima.AdEvent.Type.MIDPOINT,m=google.ima.AdEvent.Type.PAUSED,S=google.ima.AdEvent.Type.RESUMED,y=google.ima.AdEvent.Type.STARTED,p=google.ima.AdEvent.Type.USER_CLOSE,P=google.ima.AdEvent.Type.THIRD_QUARTILE,O=!1,L=null;return OvenPlayerConsole.log("ADS : Listener Created"),a[u]=function(A){OvenPlayerConsole.log("ADS LISTENER : ",A.type),t.started&&(t.active=!0,e.pause())},a[s]=function(A){OvenPlayerConsole.log("ADS LISTENER : ",A.type),t.active=!1,!t.started||0!==e.getPosition()&&t.isVideoEnded||e.play()},a[g]=function(A){O=!0,r(A)},a[E]=function(A){OvenPlayerConsole.log("ADS LISTENER : ",A.type),O=!0,t.isVideoEnded&&e.setState(n.STATE_COMPLETE)},a[c]=function(A){OvenPlayerConsole.log(A.type),e.trigger(n.PLAYER_CLICKED,{type:n.PLAYER_AD_CLICK})},a[v]=function(A){OvenPlayerConsole.log(A.type)},a[l]=function(A){OvenPlayerConsole.log("AD_BUFFERING",A.type)},a[T]=function(t){OvenPlayerConsole.log(t.type);var r=A.getRemainingTime(),o=t.getAd();e.trigger(n.STATE_AD_LOADED,{remaining:r,isLinear:o.isLinear()})},a[f]=function(A){OvenPlayerConsole.log(A.type)},a[m]=function(A){OvenPlayerConsole.log(A.type),e.setState(n.STATE_AD_PAUSED)},a[S]=function(A){OvenPlayerConsole.log(A.type),e.setState(n.STATE_AD_PLAYING)},a[y]=function(r){OvenPlayerConsole.log(r.type);var o=r.getAd();L=o;var a={isLinear:o.isLinear(),duration:o.getDuration(),skipTimeOffset:o.getSkipTimeOffset()};e.trigger(n.AD_CHANGED,a),o.isLinear()?(e.setState(n.STATE_AD_PLAYING),t.started=!0,i=setInterval(function(){var t=A.getRemainingTime(),r=o.getDuration();e.trigger(n.AD_TIME,{duration:r,skipTimeOffset:o.getSkipTimeOffset(),remaining:t,position:r-t,skippable:A.getAdSkippableState()})},300)):e.play()},a[C]=function(A){OvenPlayerConsole.log(A.type),A.getAd().isLinear()&&clearInterval(i),e.trigger(n.STATE_AD_COMPLETE)},a[d]=function(A){OvenPlayerConsole.log(A.type),A.getAd().isLinear()&&clearInterval(i),e.trigger(n.STATE_AD_COMPLETE)},a[p]=function(A){OvenPlayerConsole.log(A.type),A.getAd().isLinear()&&clearInterval(i),e.trigger(n.STATE_AD_COMPLETE)},a[P]=function(A){OvenPlayerConsole.log(A.type)},Object.keys(a).forEach(function(e){A.removeEventListener(e,a[e]),A.addEventListener(e,a[e])}),o.setAdCompleteCallback=function(A){},o.isAllAdComplete=function(){return O},o.isLinearAd=function(){return!L||L.isLinear()},o.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),Object.keys(a).forEach(function(e){A.removeEventListener(e,a[e])})},o}},379:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t(1),r=t(304);e.default=function(A,e,t){var o={};OvenPlayerConsole.log("EventListener loaded.",A,e);var a={},i=-1,l=A;return o.canplay=function(){e.setCanSeek(!0),e.trigger(n.CONTENT_BUFFER_FULL),OvenPlayerConsole.log("EventListener : on canplay")},o.durationchange=function(){o.progress(),OvenPlayerConsole.log("EventListener : on durationchange")},o.ended=function(){OvenPlayerConsole.log("EventListener : on ended"),e.getState()!==n.STATE_IDLE&&e.getState()!==n.STATE_COMPLETE&&(t?t(function(){e.setState(n.STATE_COMPLETE)}):e.setState(n.STATE_COMPLETE))},o.loadeddata=function(){},o.loadedmetadata=function(){var A=e.getSources(),t=e.getCurrentSource(),r=t>-1?A[t].type:"",o={duration:e.isLive()?1/0:l.duration,type:r};OvenPlayerConsole.log("EventListener : on loadedmetadata",o),e.trigger(n.CONTENT_META,o)},o.pause=function(){return e.getState()!==n.STATE_COMPLETE&&e.getState()!==n.STATE_ERROR&&!l.ended&&!l.error&&l.currentTime!==l.duration&&(OvenPlayerConsole.log("EventListener : on pause"),void e.setState(n.STATE_PAUSED))},o.play=function(){i=-1,l.paused||e.getState()===n.STATE_PLAYING||e.setState(n.STATE_LOADING)},o.playing=function(){OvenPlayerConsole.log("EventListener : on playing"),i<0&&e.setState(n.STATE_PLAYING)},o.progress=function(){var A=l.buffered;if(!A)return!1;var t=l.duration,r=l.currentTime,o=function(A,e,t){return Math.max(Math.min(A,t),e)}((A.length>0?A.end(A.length-1):0)/t,0,1);e.setBuffer(100*o),e.trigger(n.CONTENT_BUFFER,{bufferPercent:100*o,position:r,duration:t}),OvenPlayerConsole.log("EventListener : on progress",100*o)},o.timeupdate=function(){var A=l.currentTime,t=l.duration;isNaN(t)||(t>9e15&&(t=1/0),e.isSeeking()||l.paused||e.getState()!==n.STATE_STALLED&&e.getState()!==n.STATE_LOADING&&e.getState()!==n.STATE_AD_PLAYING||function(A,e){return A.toFixed(2)===e.toFixed(2)}(i,A)||(i=-1,e.setState(n.STATE_PLAYING)),(e.getState()===n.STATE_PLAYING||e.isSeeking())&&e.trigger(n.CONTENT_TIME,{position:A,duration:t}))},o.seeking=function(){e.setSeeking(!0),OvenPlayerConsole.log("EventListener : on seeking",l.currentTime),e.trigger(n.CONTENT_SEEK,{position:l.currentTime})},o.seeked=function(){e.isSeeking()&&(OvenPlayerConsole.log("EventListener : on seeked"),e.setSeeking(!1),e.trigger(n.CONTENT_SEEKED))},o.stalled=function(){OvenPlayerConsole.log("EventListener : on stalled")},o.waiting=function(){OvenPlayerConsole.log("EventListener : on waiting",e.getState()),e.isSeeking()?e.setState(n.STATE_LOADING):e.getState()===n.STATE_PLAYING&&(i=l.currentTime,e.setState(n.STATE_STALLED))},o.volumechange=function(){OvenPlayerConsole.log("EventListener : on volumechange",Math.round(100*l.volume)),e.trigger(n.CONTENT_VOLUME,{volume:Math.round(100*l.volume),mute:l.muted})},o.error=function(){var A=l.error&&l.error.code||0,t={0:n.PLAYER_UNKNWON_ERROR,1:n.PLAYER_UNKNWON_OPERATION_ERROR,2:n.PLAYER_UNKNWON_NEWWORK_ERROR,3:n.PLAYER_UNKNWON_DECODE_ERROR,4:n.PLAYER_FILE_ERROR}[A]||0;OvenPlayerConsole.log("EventListener : on error",t),(0,r.errorTrigger)(n.ERRORS[t],e)},Object.keys(o).forEach(function(A){l.removeEventListener(A,o[A]),l.addEventListener(A,o[A])}),a.destroy=function(){OvenPlayerConsole.log("EventListener : destroy()"),Object.keys(o).forEach(function(A){l.removeEventListener(A,o[A])})},a}}}]);