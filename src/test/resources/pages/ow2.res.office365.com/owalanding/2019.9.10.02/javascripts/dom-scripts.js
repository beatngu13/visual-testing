jQuery(document).ready(function(e){function t(t){e(".masthead").on("onscreen",function(a,n){n.percentInviewVertical<t?e(".sticky-header").addClass("visible"):e(".sticky-header").removeClass("visible")})}function a(t,a,n){e(t).on("onscreen",function(t,i){i.percentInview>a?e(n||this).addClass("ready-to-animate"):e(n||this).removeClass("ready-to-animate")})}function n(){var e=new Date((new Date).getFullYear()+10,0,1);document.cookie=d+"=speedbump; expires="+e.toUTCString()}function i(){for(var e=document.cookie.split("; "),t=0;t<e.length;t++){if(e[t].split("=")[0]==d)return!1}return!0}function o(){e("#mobile-speedbump").addClass("launched"),e("#mobile-speedbump").attr("aria-hidden","false"),e.each(c,function(t,a){e(a).attr("tabindex","-1")}),e("#mobile-speedbump [tabindex]").attr("tabindex","0"),e("#mobile-speedbump .secondary a").focus(),e("body").addClass("locked"),e(m).ontouchend=function(e){e.preventDefault()}}function s(){e("[tabindex]").attr("tabindex","0"),e("#mobile-speedbump [tabindex]").attr("tabindex","-1"),e("#mobile-speedbump").removeClass("launched"),e("#mobile-speedbump").attr("aria-hidden","true"),e("body").removeClass("locked")}e("body").removeClass("preload"),vhCheck(),e("a:not(.internal)").each(function(){e(this).attr("target","_blank")});var r=getOS();e("body").attr("data-likely-os",getOS()),"iOS"==r||"Android"==r?e("body").attr("data-is-probably-mobile-os","true"):e("body").attr("data-is-probably-mobile-os","false"),e(".user-agent-test li i").html(r),e(".premium-appeal p a").each(function(t,a){e(a).html(e(a).html().replace(/([^\s]+)$/,function(e,t){return'<i class="final-phrase">'+t+"</i>"}))}),e(".halve-me").each(function(t,a){var n=e(a).html(),i=n.split(/\s+/),o=i[Math.floor(i.length/2)],s=n.indexOf(o)+o.length,r=n.slice(0,s),l=n.slice(s,n.length);e(a).html(r+"</span><span>"+l)});var l;e("[name='a-simple-experience']").find(".buttons-captions").attr("data-current","1"),e("[name='a-simple-experience']").find(".buttons-track li:nth-of-type(1)").addClass("current"),e("[name='a-simple-experience'] .buttons-track li").on("focus mouseover",function(){l=e(this).index(),l+=1,e("[name='a-simple-experience'] .buttons-track li").attr("class",""),e(this).addClass("current"),e("[name='a-simple-experience'] .buttons-captions").attr("data-current",l),e(".monitor .scenario").removeClass("active"),e(".monitor .scenario[data-scenario='"+l+"']").addClass("active")}),t("iOS"==r|"Android"==r?55:90),e('[name="productivity-apps"] header span').on("onscreen",function(t,a){a.percentInview>90?e(this).addClass("visible"):e(this).removeClass("visible")}),a(".masthead",0,".masthead .primary-content"),a(".productivity-row",1),a(".premium-appeal .plate",1,".premium-appeal .plate"),a('[name="accessibility-addendum"]',1),a('[name="productivity-apps"] .visualization',1),a(".links-graveyard .bound",1,".links-graveyard"),a(".welcome-to-outlook .text",1,".welcome-to-outlook"),a(".welcome-to-outlook .icons-row",1,".welcome-to-outlook .icons-row"),a('[name="security"]',1),a(".features .icon",99),a('[name="time-management"] .family-photograph',1),a('[name="time-management"] .scenario',1),a('[name="a-simple-experience"] header',1),a(".hotmail-explanation",1);var d=(new LazyLoad({elements_selector:".lazy",threshold:800}),"X-OPS"),c=e("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"),m=e("#mobile-speedbump")[0],p=e("#mobile-speedbump .secondary a")[0],u=e(".mobile-speedbump-close")[0],r=getOS();"iOS"!==r&&"Android"!==r||e("[data-task='signin']").click(function(){i()&&(event.preventDefault(),n(),o())}),e(m).on("keydown",function(e){"Tab"===e.key?e.shiftKey&&document.activeElement===u?(e.preventDefault(),p.focus()):e.shiftKey||document.activeElement!==p||(e.preventDefault(),u.focus()):"Escape"==e.key&&s()}),e("#mobile-speedbump .mobile-speedbump-close").click(function(){s()})});