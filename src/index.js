require('bootstrap-webpack!./style/bootstrap.config.js');
require('./style/style.scss');

var React = require('react');
var ReactDOM = require('react-dom');
var Page = require('./App.js');


ReactDOM.render(<Page/>, document.getElementById("root"));


              // window.twttr = (function (d, s, id) {
              //   var t, js, fjs = d.getElementsByTagName(s)[0];
              //   if (d.getElementById(id)) return;
              //   js = d.createElement(s); js.id = id;
              //   js.src= "https://platform.twitter.com/widgets.js";
              //   fjs.parentNode.insertBefore(js, fjs);
              //   return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
              // }(document, "script", "twitter-wjs"));


// $(document).ready(function () {
//         $('.carousel').carousel({
//             interval: 5000
//         });
// });

// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-21118166-4']);
// _gaq.push(['_setDomainName', 'codeforftl.org']);
// _gaq.push(['_setAllowLinker', true]);
// _gaq.push(['_trackPageview']);

// (function() {
//     var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//     ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//     var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();