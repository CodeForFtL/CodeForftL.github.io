var webpack = require("webpack");
var config = require('./webpack.config.js');
var fs = require('fs');
config.output.filename = 'renderToString.js';
config.entry = ['./src/App.js'];



var React = require('react');
var ReactDOMServer = require('react-dom/server');
var DOM = React.DOM;
var body = DOM.body;
var div = DOM.div;
var script = DOM.script;



var ReactDOM = require('react-dom/server')

// returns a Compiler instance
var compiler = webpack(config);


var props = {};









var Main = React.createFactory(require('./src/html'));

// var str = ReactDOMServer.renderToString(App());
var html = ReactDOMServer.renderToStaticMarkup(body(null,
  // The actual server-side rendering of our component occurs here, and we
  // pass our data in as `props`. This div is the same one that the client
  // will "render" into on the browser from browser.js
  div({id: 'root', dangerouslySetInnerHTML: {__html:
    ReactDOMServer.renderToString(Main())
  }}),


  // Then the browser will fetch and run the browserified bundle consisting
  // of browser.js and all its dependencies.
  // We serve this from the endpoint a few lines down.
  script({src: '/dist/bundle.js'})
));


fs.writeFile('./index.html', html, (err) => {
	if (err) console.error(err);
});


// compiler.run(function(err, stats) {
// 	// The actual server-side rendering of our component occurs here, and we
// 	// pass our data in as `props`. This div is the same one that the client
// 	// will "render" into on the browser from browser.js


// });

// function safeStringify(obj) {
//   return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
// }


