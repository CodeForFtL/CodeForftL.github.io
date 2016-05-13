// webpack server for development purposes
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.entry.splice(0, 0, `webpack-dev-server/client?http://localhost:${process.env.PORT || 3000}`, 'webpack/hot/only-dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var wp = webpack(config, function(err, stats){
  if (err) console.log(err);
  stats.toString({chunks:false});
});

var webpackDevServer = new WebpackDevServer(wp, {
  publicPath: config.output.publicPath,
  hot: true,
  quiet:true,
  historyApiFallback: true
});


var port = process.env.PORT || 3000;

webpackDevServer.listen(port, 'localhost', function (err, result) {
  if (err) return console.log(err);
  
  console.log(`Listening at ${process.env.HOST || 'localhost'}:3000`);
});
