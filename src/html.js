var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App');

var Main = React.createClass({
  displayName: "App",
  render: function render() {
    return React.createElement(
      "html",
      null,
      React.createElement(
        "head",
        null,
        React.createElement("meta", { charSet: "utf-8" }),
        React.createElement(
          "title",
          null,
          "Code for Fort Lauderdale | A Code for America Brigade"
        ),
        React.createElement("meta", { name: "google-site-verification", content: "mzzt_14vPhLb8c3C3qp-qAqSjDk_w368wxHtru2D4ZI" }),
        React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        React.createElement("meta", { name: "description", content: "Locals helping Fort Lauderdale open their data and create meaningful web and mobile apps" }),
        React.createElement("meta", { name: "geo.position", content: "26.07;-80.22" }),
        React.createElement("meta", { name: "geo.placename", content: "Fort Lauderdale, Florida, USA" }),
        React.createElement("meta", { name: "geo.region", content: "US-FL" }),
        React.createElement("meta", { property: "og:title", content: "Code for Fort Lauderdale" }),
        React.createElement("meta", { name: "twitter:url", content: "http://www.twitter.com/CodeforFTL/" }),
        React.createElement("meta", { name: "twitter:site", value: "@codeforftl" }),
        React.createElement("meta", { property: "og:locality", content: "Fort Lauderdale" }),
        React.createElement("link", { rel: "shortcut icon", href: "favicon.ico" })
      ),
      React.createElement(
        "body", null,
        React.createElement(
          "div", { id: "root" },
          React.createElement(App, null)
        )
      )
    );
  }
});


module.exports = Main;