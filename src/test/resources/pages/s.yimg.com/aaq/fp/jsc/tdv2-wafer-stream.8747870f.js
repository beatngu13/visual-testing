"use strict";window.wafer&&window.wafer.ready(function(){var n=window.encodeURIComponent(document.location.href);window.wafer.on("fetch:success",function(e){var t=e.elem;if(t.classList&&t.classList.contains("stream-batch-fetch")){var a="https://sb.scorecardresearch.com/p2?c1=2&c2=7241469&c14=-1&ns_c=UTF-8",r=window.rapidPageConfig&&window.rapidPageConfig.rapidConfig&&window.rapidPageConfig.rapidConfig.spaceid;if(a&&r){a=a+"&c5="+r+"&c7="+n+"&ns__t="+Date.now().toString();var i=window.__cmp;i?i("getVendorConsents",null,function(e,t){t&&e&&e.gdprApplies&&e.vendorConsents&&(a+="&cs_ucfr="+(e.vendorConsents[77]?1:0)),window.wafer.utils.fireBeacon(a,{useNavigator:!1,useTimestamp:!1})}):window.wafer.utils.fireBeacon(a,{useNavigator:!1,useTimestamp:!1})}}});var l="show-drawer",u=null,f=null,w=null,m="stream-uuid-list",o="userintent-disliked-anim",d="data-uuid",t="youmaylike",g=[],h=[],c=document.querySelector(".stream-items"),s=document.querySelector(".stream-ad-fetch"),v=window.innerWidth||document.documentElement.clientWidth,r="data-ad-fb-hover-beacon",p={};if(c){if(c.addEventListener("animationend",function(e){var t=e&&e.target;e&&t&&("hideStreamItem"===e.animationName||"fadeOutAdConfirm"===e.animationName)&&t.parentNode&&t.parentNode.removeChild(t)}),c.addEventListener("click",function(e){var t=e.target;if(t.classList.contains("userintent-undo")){var a=t.getAttribute("data-wf-toggle-target"),r=c.querySelector(a);if(r){var i=r.getAttribute(d);i&&p[i]&&clearTimeout(p[i])}}}),s&&window.wafer.base&&window.wafer.utils){var e=s.getAttribute("data-wf-url"),a=s.getAttribute("data-wf-state-body");window.wafer.utils.fetchWithCache(e,{body:a,cache:0}).then(function(e){if(e&&e.html){s.innerHTML=e.html;var t=s.querySelectorAll(".stream-ad"),a=c.querySelectorAll(".stream-ad-placeholder");if(t&&a)for(var r=t.length,i=a.length,n=0;n<i&&n<r;n++)a[n].replaceWith(t[n]);s.innerHTML="",window.wafer.base.sync(c)}})}var i=c.querySelectorAll(".js-sponsored-moments-dwell-time");if(i.length){i.forEach(function(e){e.classList&&e.classList.contains("js-reserve-moments")&&(window.DARLA?function e(t){var a=Math.floor(16*v/9),r=t.querySelector("#defaultRESERVEMOMENTS"),i=r&&r.getAttribute("data-html");if(i)if(window.DARLA.inProgress())setTimeout(function(){e(t)},500);else{var n={dest:"defaultRESERVEMOMENTS",flex:{h:{min:a},w:{min:v}},h:a,id:"RESERVEMOMENTS",supports:{"exp-ovr":1,"exp-push":1,"resize-to":1},w:v};window.DARLA.addPos(n);var s=new window.DARLA.Response("RESERVEMOMENTS",{});i=unescape(i),s.add("RESERVEMOMENTS",i),window.DARLA.render(s)}}(e):e.style.display="none")});var y=i[0].querySelector(".js-panorama-scroll-view");y&&0===y.scrollLeft&&(y.scrollLeft=(y.scrollWidth-v)/2)}c.addEventListener("mouseover",function(e){var t=window.wafer.utils.findAncestor(e.target,"stream-ad");if(t){var a=t.getAttribute(r);a&&(window.wafer.utils.fireBeacon(a),t.setAttribute(r,""))}})}window.addEventListener("viewerOpened",function(e){var t=e&&e.detail&&e.detail.uuid;if(t){var a=document.querySelector('li[data-uuid="'+t+'"]'),r=a&&a.getAttribute("data-parent-uuid");if(u=r&&document.querySelector('li[data-uuid="'+r+'"]')||a,w=u&&u.getElementsByClassName("stream-related-drawer")[0]){if(u.classList.contains(l))return;var i=function(){for(var e=Array.prototype.slice.call(document.getElementsByClassName(m)),t=0;t<e.length;t++){var a=e[t],r=a.text;a.classList.remove(m);try{var i=JSON.parse(r);i&&(Array.isArray(i.uuidList)&&g.length+i.uuidList.length<=250&&(g=g.concat(i.uuidList)),Array.isArray(i.adidList)&&h.length+i.adidList.length<=50&&(h=h.concat(i.adidList)))}catch(e){}}return{dedupeADIDs:h,dedupeUUIDs:g}}(),n={config:{dedupeADIDs:i.dedupeADIDs.join(","),relatedUuid:t},ctrl:"StreamRelated",m_id:"tdv2-wafer-stream",m_mode:"json"},s={dedupeUUIDs:i.dedupeUUIDs.join(","),uuid:t},o=w.getAttribute("data-cfg");if(o)try{var d=JSON.parse(o);d&&d.i13n&&(f=d.i13n),n.config=Object.assign(n.config,d)}catch(e){}n.config.tachyonParams=n.config.tachyonParams||{},n.config.tachyonParams.query=n.config.tachyonParams.query||{},n.config.tachyonParams.query.where=Object.assign(s,n.config.tachyonParams.query.where);var c=w.getElementsByClassName("fetch-body")[0];c&&(c.text=JSON.stringify(n),w.classList.remove("wafer-fetch-error","wafer-fetch-complete"),w.classList.add("wafer-fetch"),window.wafer.base.sync(w.parentNode))}}}),window.addEventListener("viewerClosed",function(){if(u&&!u.classList.contains(l)){var e=w&&!!w.getElementsByClassName("stream-realted-list")[0];e&&u.classList.add(l),e&&f&&window.rapidInstance&&window.rapidInstance.beaconClick("strm",t,0,Object.assign(f,{_p:0,cnt_tpc:f.categoryLabel,g:u.getAttribute(d),grpt:"storyCluster",itc:1,pkgt:t})),f="",u=w=null}});window.wafer.on("toggle:change",function(e){if(e&&e.meta&&e.elem){var t=e.elem.getAttribute("data-wf-toggle-target");if("userintent-hidestrmitem"===e.meta.className&&"add"===e.meta.action){if(t&&c){var a=c.querySelector(t),r=a&&a.getAttribute(d);r&&(p[r]=setTimeout((s=a,function(){s.classList.contains(o)||s.classList.add(o)}),8e3))}}else if("show-drawer"===e.meta.className){var i=c.querySelector(t),n=i&&i.getElementsByClassName("drawer-fetch-target")[0];setTimeout(function(){n&&(n.innerHTML="")},300)}}var s})});