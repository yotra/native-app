var page;

var TextField = require('ui/text-field').TextField ;
var StackLayout = require('ui/layouts/stack-layout').StackLayout;

var app = {
  pageLoaded: function(args) {
    page = args.object;
    
    console.log('loaded', page);

    var layout = new StackLayout();

    page.content = layout;

    var tf = new TextField();
    tf.text = 'SuperText';
    layout.addChild(tf);
  },
  register: function() {
    alert("Registering");
  }
};

module.exports = app;
