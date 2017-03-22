// var Page = require("ui/page").Page;
// var Label = require("ui/label").Label;
// var Button = require("ui/button").Button;
// var StackLayout = require("ui/layouts/stack-layout").StackLayout;


/** Pick any number between min and max */

'use strict';

var conv = require('./helpers/conv');
var TextField = require('ui/text-field').TextField ;
var Observable = require("data/observable").Observable;

/**
 * @param {Number} props.value Number or null
 * @param {Function} props.onSelect Callback
 */
module.exports = function(props) {
  var elem = new TextField();
  // elem.type = 'number';
  elem.text = conv.numberToString(props.value);

  // elem.min = conv.numberToString(props.min);
  // elem.max = conv.numberToString(props.max);

  elem.on(Observable.propertyChangeEvent, function(e) {
    var val = conv.stringToNumber(e.value);
    props.onSelect(val);
  });

  if (props.placeholder) { elem.hint = props.placeholder; }

  return elem;
};
