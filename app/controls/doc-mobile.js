var Page = require("ui/page").Page;
var Label = require("ui/label").Label;
var Button = require("ui/button").Button;
var TextField = require('ui/text-field').TextField ;
var StackLayout = require("ui/layouts/stack-layout").StackLayout;
var Observable = require("data/observable").Observable;

var createElement = function(tag, props) {
  switch (tag) {
    case 'label':
    var elem = new Label();
    return elem;
    case 'input':
    var elem = new TextField();
    elem.hint = props.placeholder || '';

    var setValue = function(val) {
      elem.off(Observable.propertyChangeEvent, props.onchange);
      elem.text = val;
      setTimeout(function() {
        elem.on(Observable.propertyChangeEvent, props.onchange);
      }, 0);
    };

    // TOOD
    setValue(props.defaultValue || '');
    
    return elem;
    default: return new Label();
  }
};

module.exports = {
  createElement: createElement
};
