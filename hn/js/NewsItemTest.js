var $ = require('jquery');
var NewsItem = require('./NewsItem');
var React = require('react');
var ReactDom = require('react-dom')

$.ajax({
  url: '/json/items.json'
}).then(function (items) {
  // Log the data so we can inspect it in the developer console.
  console.log('items', items);
  // Use a fake rank for now.
  ReactDom.render(<NewsItem item={items[0]} rank={1}/>, $('#content')[0]);
});