(window.webpackJsonpBoomer=window.webpackJsonpBoomer||[]).push([["imdb.IMDbWatchlistReactContext"],{"+S9GTnDkZH":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.queue=new Set}return t.prototype.add=function(t){this.queue.add(t)},t.prototype.copy=function(){return new Set(this.queue)},t.prototype.clear=function(){this.queue.clear()},t}();e.default=r},"5RgX/b7LTj":function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=n("hD6aPYlqW/"),u=n("rfcBAs2C1z"),c=n("gAnDFKw2oT"),s=function(){function t(t,e,n){this.watchlistApi=t,this.userStateApi=e,this.metricsApi=n}return t.prototype.init=function(t){return i(this,void 0,void 0,function(){var e;return o(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.watchlistApi.init(t)];case 1:return e=n.sent(),[3,3];case 2:return n.sent(),[2,this.initFailureState(t)];case 3:return 200===e.status?[2,Array.from(t).reduce(function(t,n){return t[n]=r({},n in e.has?u.default.IN_WATCHLIST:u.default.NOT_IN_WATCHLIST),t},{})]:[2,this.initFailureState(t)]}})})},t.prototype.update=function(t,e,n){return i(this,void 0,void 0,function(){var r;return o(this,function(i){switch(i.label){case 0:return[4,this.updateRequest(t,e,n)];case 1:return r=i.sent(),e===c.Action.ADD_TO_WATCHLIST?[2,r?u.default.IN_WATCHLIST:u.default.NOT_IN_WATCHLIST]:[2,r?u.default.NOT_IN_WATCHLIST:u.default.IN_WATCHLIST]}})})},t.prototype.isUserLoggedIn=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.userStateApi.isUserLoggedIn()];case 1:return t.sent().isUserRecognized?[2,a.UserLoggedInState.LOGGED_IN]:[2,a.UserLoggedInState.LOGGED_OFF];case 2:return t.sent(),[2,a.UserLoggedInState.UNKNOWN];case 3:return[2]}})})},t.prototype.getWatchlistCount=function(){return i(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.watchlistApi.getWatchlistCount()];case 1:return[2,t.sent()];case 2:return t.sent(),[2,void 0];case 3:return[2]}})})},t.prototype.updateRequest=function(t,e,n){return i(this,void 0,void 0,function(){var r;return o(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.watchlistApi.update(t,e)];case 1:return r=i.sent(),[3,3];case 2:return i.sent(),[2,!1];case 3:return 200===r.status?(n&&this.metricsApi.submitMetrics(t,e,n),[2,!0]):[2,!1]}})})},t.prototype.initFailureState=function(t){return Array.from(t).reduce(function(t,e){return t[e]=r({},u.default.NOT_IN_WATCHLIST),t},{})},t}();e.WatchlistContextUpdater=s,e.default=s},"6M3jkql3sw":function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e,n){this.initCallback=n,this.watchlistContextUpdater=e,this.watchlistInitializerQueue=t}return t.prototype.run=function(){setInterval(this.execute.bind(this),t.INTERVAL_MS)},t.prototype.execute=function(){return r(this,void 0,void 0,function(){var t,e;return i(this,function(n){switch(n.label){case 0:return(t=this.watchlistInitializerQueue.copy()).size?(this.watchlistInitializerQueue.clear(),[4,this.watchlistContextUpdater.init(t)]):[2];case 1:return e=n.sent(),this.initCallback(e),[2]}})})},t.INTERVAL_MS=2e3,t}();e.default=o},BwmKPM3PmI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("CLihwEPy3T");e.WatchlistProvider=r.default;var i=n("WJ5MJl0h4V");e.WatchlistConsumer=i.default},CLihwEPy3T:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},a=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},u=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var c=n("LDoPTt+kJa"),s=n("hD6aPYlqW/"),l=n("P31I68KPhh"),f=n("5RgX/b7LTj"),h=n("N6opNfNJtd"),p=n("gAnDFKw2oT"),d=n("rfcBAs2C1z"),y=n("j57y8BibkF"),w=n("SjhlRimkXa"),b=n("n6wRU499Cx"),_=n("eoOuVzesrz"),v={isDev:!1};var g=function(t){function e(e){var n,r,i,o=t.call(this,e)||this;return v.isDev?(n=new h.default,r=new w.default,i=new _.default):(n=new p.default,r=new y.default,i=new b.MetricsClient),o.state={isUserLoggedIn:s.UserLoggedInState.UNKNOWN,watchlist:e.data||{}},o.watchlistContextUpdater=new f.default(n,r,i),o.watchlistInitializer=new l.default(o.watchlistContextUpdater,o.updateSingleWatchlistState.bind(o),o.updateWatchlistState.bind(o),o.updateUserLoggedInState.bind(o),o.updateWatchlistCountState.bind(o)),o}return i(e,t),e.prototype.render=function(){return c.createElement(s.default.Provider,{value:{state:this.state,actions:{updateWatchlistWidget:this.updateWatchlistWidget.bind(this),initWatchlistWidget:this.initWatchlistWidget.bind(this)}}},this.props.children)},e.prototype.initWatchlistWidget=function(t){this.state.watchlist[t]||(this.updateSingleWatchlistState(t,d.default.INIT_DEFAULT),this.watchlistInitializer.add(t))},e.prototype.updateWatchlistWidget=function(t,e){return a(this,void 0,void 0,function(){var n,r,i,a;return u(this,function(u){switch(u.label){case 0:return(n=this.state.watchlist[t]).isLoading?[2]:this.state.isUserLoggedIn===s.UserLoggedInState.LOGGED_OFF?[2,this.taskCompletion(t)]:(r=o({},n,{isLoading:!0}),this.updateSingleWatchlistState(t,r),i=n.inWatchlist?p.Action.REMOVE_FROM_WATCHLIST:p.Action.ADD_TO_WATCHLIST,[4,this.watchlistContextUpdater.update(t,i,e)]);case 1:return a=u.sent(),void 0!==this.state.watchlistCount&&this.updateWatchlistCountState(this.state.watchlistCount+(i===p.Action.REMOVE_FROM_WATCHLIST?-1:1)),this.updateSingleWatchlistState(t,a),[2]}})})},e.prototype.taskCompletion=function(t){var e=encodeURIComponent(window.location.pathname+window.location.search),n="https://"+window.location.hostname+"/taskcompletion/issue/addToWatchlist?titleId="+t+"&u="+e;window.location.href=n},e.prototype.updateSingleWatchlistState=function(t,e){var n;this.updateWatchlistState(((n={})[t]=o({},e),n))},e.prototype.updateWatchlistState=function(t){this.setState(function(e){return{watchlist:o({},e.watchlist,t)}})},e.prototype.updateUserLoggedInState=function(t){this.setState({isUserLoggedIn:t})},e.prototype.updateWatchlistCountState=function(t){this.setState({watchlistCount:t})},e}(c.Component);e.default=g},N6opNfNJtd:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=n("gAnDFKw2oT"),a=function(){function t(){}return t.prototype.init=function(e){return r(this,void 0,void 0,function(){return i(this,function(n){return[2,new Promise(function(n){setTimeout(function(){var t=Array.from(e).reduce(function(t,e){return!(Math.floor(2*Math.random())+0)||(t[e]={tconst:[1]}),t},{});n({extra:{name:"49e6c",value:"2633"},has:t,list_id:"ls020550972",status:200})},t.INIT_AJAX_TIME_MS)})]})})},t.prototype.update=function(e,n){return r(this,void 0,void 0,function(){return i(this,function(e){return[2,new Promise(function(e){setTimeout(function(){n===o.Action.ADD_TO_WATCHLIST?e({list_id:"ls020550972",list_item_id:"1586375368",status:200}):e({list_id:"ls020550972",status:200})},t.UPDATE_AJAX_TIME_MS)})]})})},t.prototype.getWatchlistCount=function(){return new Promise(function(e){setTimeout(function(){e(42)},t.GET_COUNT_AJAX_TIME_MS)})},t.INIT_AJAX_TIME_MS=3e3,t.UPDATE_AJAX_TIME_MS=3e3,t.GET_COUNT_AJAX_TIME_MS=3e3,t}();e.MockWatchlistClient=a,e.default=a},P31I68KPhh:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=n("hD6aPYlqW/"),a=n("6M3jkql3sw"),u=n("rfcBAs2C1z"),c=n("+S9GTnDkZH"),s=n("s1DKtra4BZ"),l=function(){function t(t,e,n,r,i){this.watchlistInitializerQueue=new c.default,this.watchlistContextUpdater=t,this.userLoggedInStateCallback=r,this.watchlistSingleStateCallback=e,this.watchlistGlobalStateCallback=n,this.watchlistCountStateCallback=i,this.initialize()}return t.prototype.add=function(t){this.userState===o.UserLoggedInState.LOGGED_OFF?this.watchlistSingleStateCallback(t,u.default.NOT_IN_WATCHLIST):this.watchlistInitializerQueue.add(t)},t.prototype.initialize=function(){return r(this,void 0,void 0,function(){var t,e,n;return i(this,function(r){switch(r.label){case 0:return t=this,[4,this.watchlistContextUpdater.isUserLoggedIn()];case 1:return t.userState=r.sent(),this.userLoggedInStateCallback(this.userState),s||this.userState!==o.UserLoggedInState.LOGGED_IN?[3,3]:(new a.default(this.watchlistInitializerQueue,this.watchlistContextUpdater,this.watchlistGlobalStateCallback).run(),e=this.watchlistCountStateCallback,[4,this.watchlistContextUpdater.getWatchlistCount()]);case 2:return e.apply(this,[r.sent()]),[3,4];case 3:n=Array.from(this.watchlistInitializerQueue.copy()).reduce(function(t,e){return t[e]=u.default.NOT_IN_WATCHLIST,t},{}),this.watchlistGlobalStateCallback(n),r.label=4;case 4:return[2]}})})},t}();e.default=l},SjhlRimkXa:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.prototype.isUserLoggedIn=function(){return r(this,void 0,void 0,function(){return i(this,function(e){return[2,new Promise(function(e){setTimeout(function(){e({isUserRecognized:!0})},t.IS_USER_LOGGED_IN_AJAX_TIME_MS)})]})})},t.IS_USER_LOGGED_IN_AJAX_TIME_MS=1e3,t}();e.default=o},WJ5MJl0h4V:function(t,e,n){"use strict";var r,i=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),o=this&&this.__assign||function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=n("LDoPTt+kJa"),u=n("hD6aPYlqW/"),c=n("rfcBAs2C1z"),s=function(t){function e(e,n){var r=t.call(this,e)||this;return n.actions.initWatchlistWidget(e.id),r}return i(e,t),e.prototype.render=function(){var t=Object.assign({},c.default.INIT_DEFAULT);return this.props.id in this.context.state.watchlist&&(t=this.context.state.watchlist[this.props.id]),this.props.render(o({},t,{onClick:this.context.actions.updateWatchlistWidget.bind(this.context,this.props.id,this.props.metricsContext)}))},e.contextType=u.default,e}(a.Component);e.default=s},eoOuVzesrz:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.prototype.submitMetrics=function(e,n,o){return r(this,void 0,void 0,function(){return i(this,function(e){return console.info(o),[2,new Promise(function(e){setTimeout(function(){e()},t.SUBMIT_METRICS_AJAX_TIME_MS)})]})})},t.SUBMIT_METRICS_AJAX_TIME_MS=200,t}();e.default=o},gAnDFKw2oT:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=n("ekp6onNDDg");!function(t){t.ADD_TO_WATCHLIST="PUT",t.REMOVE_FROM_WATCHLIST="DELETE"}(e.Action||(e.Action={}));var a=function(){function t(){}return t.prototype.init=function(e){return r(this,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return n={"consts[]":Array.from(e),tracking_tag:"watchlistRibbon"},[4,o.default({method:"POST",url:t.URL.WATCHLIST_HAS,headers:{"Content-type":"application/x-www-form-urlencoded"},data:this.encodeParameters(n)})];case 1:return[2,r.sent().data]}})})},t.prototype.update=function(e,n){return r(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,o.default({method:n,url:t.URL.WATCHLIST(e),headers:{"Content-type":"application/x-www-form-urlencoded"}})];case 1:return[2,r.sent().data]}})})},t.prototype.getWatchlistCount=function(){return r(this,void 0,void 0,function(){var e;return i(this,function(n){switch(n.label){case 0:return[4,o.default({method:"GET",url:t.URL.WATCHLIST_COUNT})];case 1:return e=n.sent(),[2,e.data.count]}})})},t.prototype.encodeParameters=function(t){return void 0===t&&(t={}),Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},t.URL={WATCHLIST:function(t){return"/watchlist/"+t},WATCHLIST_HAS:"/list/_ajax/watchlist_has",WATCHLIST_COUNT:"/_ajax/list/watchlist/count"},t}();e.WatchlistClient=a,e.default=a},"hD6aPYlqW/":function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=this;Object.defineProperty(e,"__esModule",{value:!0});var a,u=n("LDoPTt+kJa");!function(t){t.LOGGED_IN="LOGGED_IN",t.LOGGED_OFF="LOGGED_OFF",t.UNKNOWN="UNKNOWN"}(a=e.UserLoggedInState||(e.UserLoggedInState={}));var c=u.createContext({state:{isUserLoggedIn:a.UNKNOWN,watchlist:{}},actions:{initWatchlistWidget:function(){throw new Error("Unable to use WatchlistContext without a provider. Try wrapping your application in a WatchlistContextProvider.")},updateWatchlistWidget:function(){return r(o,void 0,void 0,function(){return i(this,function(t){throw"Unable to use WatchlistContext without a provider. Try wrapping your application in a WatchlistContextProvider.",new Error("Unable to use WatchlistContext without a provider. Try wrapping your application in a WatchlistContextProvider.")})})}}});e.default=c},j57y8BibkF:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},i=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var o=n("ekp6onNDDg"),a=function(){function t(){}return t.prototype.isUserLoggedIn=function(){return r(this,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return[4,o.default({method:"GET",url:t.URL.IS_USER_LOGGED_IN})];case 1:return[2,e.sent().data]}})})},t.URL={IS_USER_LOGGED_IN:"/registration/is-user-recognized"},t}();e.UserStateClient=a,e.default=a},n6wRU499Cx:function(t,e,n){"use strict";var r,i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{c(r.next(t))}catch(e){o(e)}}function u(t){try{c(r.throw(t))}catch(e){o(e)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}c((r=r.apply(t,e||[])).next())})},o=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=n("ekp6onNDDg"),u=n("gAnDFKw2oT"),c=function(){function t(){}return t.prototype.submitMetrics=function(e,n,r){return i(this,void 0,void 0,function(){var i,u;return o(this,function(o){switch(o.label){case 0:i={ref_:r.refTag,pageAction:t.PAGE_ACTION[n],pt:r.pageType,spt:r.subPageType,const:e,ht:t.HIT_TYPE},o.label=1;case 1:return o.trys.push([1,3,,4]),[4,a.default({method:"POST",url:t.URL,headers:{"Content-type":"application/x-www-form-urlencoded"},data:this.encodeParameters(i)})];case 2:return o.sent(),[3,4];case 3:return u=o.sent(),console.error("Failed to submit watchlist metric.",u),[3,4];case 4:return[2]}})})},t.prototype.encodeParameters=function(t){return void 0===t&&(t={}),Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")},t.URL="/tr/",t.PAGE_ACTION=((r={})[u.Action.ADD_TO_WATCHLIST]="watchlist-add",r[u.Action.REMOVE_FROM_WATCHLIST]="watchlist-del",r),t.HIT_TYPE="actionOnly",t}();e.MetricsClient=c},rfcBAs2C1z:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){}return t.IN_WATCHLIST={ariaLabel:"remove from watchlist",inWatchlist:!0,isLoading:!1},t.NOT_IN_WATCHLIST={ariaLabel:"add to watchlist",inWatchlist:!1,isLoading:!1},t.INIT_DEFAULT={ariaLabel:"add to watchlist",inWatchlist:!1,isLoading:!0},t}();e.WatchlistStateConsts=r,e.default=r}}]);