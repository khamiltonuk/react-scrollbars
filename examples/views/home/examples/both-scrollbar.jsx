var React = require('react');
var ScrollbarMixin = require('react-scrollbar').Mixin;
var Scrollbar = require('react-scrollbar').Scrollbar;

require('./vertical-scrollbar.scss');

var VerticalScrollbar = React.createClass({
  mixins: [ScrollbarMixin],

  getInitialState: function() {
    return {
      scrollbarOffset: 2
    };
  },

  render: function() {
    return (
      <div style={this.scrollbarContainerStyle()} className={this.containerClass()}>
        <div ref="scrollableContent" onScroll={this.handleScroll} className="ScrollbarContent--vertical">
          <img onLoad={this.imageLoaded} src="./../../assets/lift.jpg" style={{display: 'block'}} width="1000"/>
          <Scrollbar
            {... this.getScrollbarProps()}
          />
        </div>
      </div>
    );
  }
});

module.exports = VerticalScrollbar;