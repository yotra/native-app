/**
 * A component factory, like document.createElement
 * Name convention for custom elements:
 * - two or more words
 * - separated by dash
 * - lowercase
 * - Latin characters
 *
 * @todo switch to custom elements after release
 * @todo use <template> to clone instead building elems from scratch
 * @module
 */

'use strict';

// at this moment it's not a class
// will be converted when custom elements will be released
var NumberPicker = require('./number-picker');
// var DatePicker = require('./date-picker');
// var DateFixedPicker = require('./date-fixed-picker');
// var BooleanSelector = require('./boolean-selector');
// var NumberSelector = require('./number-selector');
// var StringSelector = require('./string-selector');
// var TableContainer = require('./table-container');
// var BodyContainer = require('./body-container');

var buildElement = function(tag, props) {
  switch (tag) {
  case 'number-picker': return NumberPicker(props);
  // case 'date-picker': return DatePicker(props);
  // case 'date-fixed-picker': return DateFixedPicker(props);
  // case 'boolean-selector': return BooleanSelector(props);
  // case 'number-selector': return NumberSelector(props);
  // case 'string-selector': return StringSelector(props);
  // case 'table-container': return TableContainer(props);
  // case 'body-container': return BodyContainer(props);
  default:
    return document.createElement(tag, props);
  }
};

module.exports = {
  createElement: function(tag, props) {
    var elem = buildElement(tag, props);
    // use classes instead tags, while no custom elements
    elem.className = tag;
    return elem;
  }
};
