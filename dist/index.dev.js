"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var rootElement = document.getElementById('app'); // const myElement = document.createElement('h1');
// myElement.className = 'orange';
// myElement.innerText = 'Hello world';
// rootElement.appendChild(myElement);
// const myReactElement = React.createElement(
//     'h1',
//     {className: 'orange'},
//     'Hello world!'
// );
// const Hello = (props) => {
//   return React.createElement(
//     'h1',
//     {className: 'orange'},
//     `Hello ${props.time}`
//   )
// }

var Hello =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello(props) {
    var _this;

    _classCallCheck(this, Hello);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Hello).call(this, props));
    _this.state = {
      time: new Date().toLocaleString()
    };
    return _this;
  }

  _createClass(Hello, [{
    key: "tick",
    value: function tick() {
      this.setState(function () {
        return {
          time: new Date().toLocaleString()
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement('h1', {
        className: 'orange'
      }, "Hello ".concat(this.state.time));
    }
  }]);

  return Hello;
}(React.Component);

ReactDOM.render(React.createElement(Hello, {}, null), document.getElementById('app'));