"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 10px;\n\tright: 10px;\n\tpadding: 5px;\n\twidth: 30px;\n\theight: 30px;\n\tdisplay: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n\tcolor: ", ";\n\tbackground-color: ", ";\n  transition: background-color 0.15s, color 0.15s;\n\n  :hover {\n  \tbackground-color: ", ";\n  \tcolor: ", ";\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpointer-events: all;\n\n\tposition: absolute;\n\tleft: 50%;\n\ttransform: translateX(-50%);\n\n\tmin-width: 400px;\n\tdisplay: inline-block;\n\tpadding: 15px 50px 15px 15px;\n\tcolor: ", ";\n\tbackground-color: ", ";\n\ttext-align: left;\n\tborder-radius: 4px;\n\n\tfont-size: 1rem;\n\n\t&.confirm {\n\t\tpadding-right: 15px;\n\n\t\t.confirm-buttons-div {\n\t\t\tmargin-top: 5px;\n\t\t\tbutton:first-child {\n\t\t\t\tfloat: left;\n\t\t\t}\n\t\t\tbutton:last-child {\n\t\t\t\tfloat: right;\n\t\t\t}\n\t\t}\n\t\t.confirm-buttons-div::after {\n\t\t\tcontent: \"\";\n\t\t\tclear: both;\n\t\t\tdisplay: table;\n\t\t}\n\t}\n\n\t@keyframes entering {\n\t\tfrom {\n\t\t\ttop: -", "px;\n\t\t\ttransform: translateX(-50%) scale(0.25, 0.25);\n\t\t}\n\t\tto {\n\t\t\ttop: ", "px;\n\t\t\ttransform: translateX(-50%) scale(1, 1);\n\t\t}\n\t}\n\t&.entering {\n\t\tanimation: entering 1.0s;\n\t\ttransition: top 1.0s;\n\t}\n\n\t@keyframes dismissing {\n\t\tfrom {\n\t\t\ttop: ", "px;\n\t\t\ttransform: translateX(-50%) scale(1, 1);\n\t\t}\n\t\tto {\n\t\t\ttop: -", "px;\n\t\t\ttransform: translateX(-50%) scale(0.25, 0.25);\n\t\t}\n\t}\n\t&.dismissing {\n\t\tanimation: dismissing 1.0s;\n\t\ttransition: top 1.0s;\n\t}\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tleft: 0px;\n\ttop: 0px;\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: 50;\n\tpointer-events: none;\n\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\t> * {\n\t\ttransition: top 0.5s;\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessageContainer = _styledComponents["default"].div(_templateObject());

var MessageStyled = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.height;
}, function (props) {
  return props.top;
}, function (props) {
  return props.top;
}, function (props) {
  return props.height;
});

var DismissButton = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.sidePanelBg;
});

var MapMessages = /*#__PURE__*/function (_React$Component) {
  _inherits(MapMessages, _React$Component);

  var _super = _createSuper(MapMessages);

  function MapMessages() {
    var _this;

    _classCallCheck(this, MapMessages);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      dismissing: new Map(),
      timeouts: new Map(),
      heights: new Map()
    };
    return _this;
  }

  _createClass(MapMessages, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var _this2 = this;

      if (this.props.messages.length > oldProps.messages.length) {
        var length = this.props.messages.length,
            message = this.props.messages[length - 1],
            timeouts = new Map(this.state.timeouts);

        if (message.duration) {
          timeouts.set(message.id, setTimeout(function () {
            return _this2.readyDismiss(message.id);
          }, message.duration));
          this.setState({
            timeouts: timeouts
          });
        }
      } else if (this.props.messages.length === oldProps.messages.length && !(0, _deepEqual["default"])(oldProps.messages.map(function (_ref) {
        var id = _ref.id,
            update = _ref.update;
        return {
          id: id,
          update: update
        };
      }), this.props.messages.map(function (_ref2) {
        var id = _ref2.id,
            update = _ref2.update;
        return {
          id: id,
          update: update
        };
      }))) {
        this.props.messages.forEach(function (_ref3) {
          var update = _ref3.update,
              id = _ref3.id,
              duration = _ref3.duration;
          var old = oldProps.messages.find(function (m) {
            return m.id === id;
          });

          if (old.update !== update && duration) {
            var _timeouts = new Map(_this2.state.timeouts);

            clearTimeout(_timeouts.get(id));

            _timeouts.set(id, setTimeout(function () {
              return _this2.readyDismiss(id);
            }, duration));

            _this2.setState({
              timeouts: _timeouts
            });
          }
        });
      }
    }
  }, {
    key: "readyDismiss",
    value: function readyDismiss(id) {
      var i = this.props.messages.findIndex(function (m) {
        return m.id === id;
      });
      this.dismiss(id, i);
    }
  }, {
    key: "dismiss",
    value: function dismiss(id, i) {
      var _this3 = this;

      clearTimeout(this.state.timeouts.get(id));
      this.state.timeouts["delete"](id);
      var message = this.props.messages.find(function (m) {
        return m.id === id;
      });
      this.props.dismiss(id);
      this.state.heights["delete"](id);
      id = "".concat(id, "-dismissing");
      var dismissing = new Map([].concat(_toConsumableArray(this.state.dismissing), [[id, {
        timeout: setTimeout(function () {
          return _this3.clear(id);
        }, 1000),
        message: _objectSpread(_objectSpread({}, message), {}, {
          id: id
        }),
        i: i
      }]]));
      this.setState({
        dismissing: dismissing
      });
    }
  }, {
    key: "clear",
    value: function clear(id) {
      var dismissing = this.state.dismissing;
      dismissing["delete"](id);
      this.setState({
        dismissing: new Map(dismissing)
      });
    }
  }, {
    key: "reportHeight",
    value: function reportHeight(id, height) {
      var heights = new Map([].concat(_toConsumableArray(this.state.heights), [[id, height]]));
      this.setState({
        heights: heights
      });
    }
  }, {
    key: "getHeight",
    value: function getHeight(id) {
      return this.state.heights.get(id) || 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var dismissing = this.state.dismissing;
      var messages = this.props.messages;

      var Messages = _toConsumableArray(messages);

      dismissing.forEach(function (data, id) {
        Messages.splice(data.i, 0, data.message);
      }); // console.log("<MapMessages.render>", this.props.messages, dismissing)

      var current = 0;

      var getTop = function getTop(id, dismissing) {
        var height = _this4.getHeight(id),
            top = current + 10;

        if (!dismissing) current += height + 10;
        return top;
      };

      return /*#__PURE__*/_react["default"].createElement(MessageContainer, null, Messages.map(function (_ref4, i) {
        var id = _ref4.id,
            rest = _objectWithoutProperties(_ref4, ["id"]);

        return /*#__PURE__*/_react["default"].createElement(MessageFactory, _extends({
          key: id,
          id: id
        }, rest, {
          dismissing: dismissing.has(id),
          dismiss: function dismiss(id) {
            return _this4.readyDismiss(id);
          },
          zIndex: messages.length - i - (dismissing ? messages.length : 0),
          reportHeight: _this4.reportHeight.bind(_this4),
          height: _this4.getHeight(id),
          top: getTop(id, dismissing.has(id))
        }));
      }));
    }
  }]);

  return MapMessages;
}(_react["default"].Component);

MapMessages.defaultProps = {
  messages: []
};
var _default = MapMessages;
exports["default"] = _default;

var MessageFactory = function MessageFactory(_ref5) {
  var props = _extends({}, _ref5);

  return props.onConfirm ? /*#__PURE__*/_react["default"].createElement(ConfirmMessage, props) : /*#__PURE__*/_react["default"].createElement(Message, props);
}; // //


var Message = /*#__PURE__*/function (_React$Component2) {
  _inherits(Message, _React$Component2);

  var _super2 = _createSuper(Message);

  function Message() {
    var _this5;

    _classCallCheck(this, Message);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this5 = _super2.call.apply(_super2, [this].concat(args));
    _this5.comp = null;
    _this5.timeout = null;
    _this5.state = {
      entering: !_this5.props.dismissing
    };
    return _this5;
  }

  _createClass(Message, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this6 = this;

      this.checkHeight();

      if (this.state.entering) {
        this.timeout = setTimeout(function () {
          return _this6.setState({
            entering: false
          });
        }, 1000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      this.checkHeight();
    }
  }, {
    key: "checkHeight",
    value: function checkHeight() {
      var comp = this.comp;
      if (!comp) return;
      var height = comp.clientHeight;

      if (height !== this.props.height) {
        this.props.reportHeight(this.props.id, height);
      }
    }
  }, {
    key: "renderMessage",
    value: function renderMessage() {
      var _this$props = this.props,
          Message = _this$props.Message,
          dismiss = _this$props.dismiss,
          layer = _this$props.layer,
          id = _this$props.id;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, typeof Message === "function" ? /*#__PURE__*/_react["default"].createElement(Message, {
        layer: layer
      }) : Message, /*#__PURE__*/_react["default"].createElement(DismissButton, {
        onClick: function onClick() {
          return dismiss(id);
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa fa-lg fa-close"
      })));
    } // //

  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$props2 = this.props,
          dismissing = _this$props2.dismissing,
          zIndex = _this$props2.zIndex,
          height = _this$props2.height,
          top = _this$props2.top,
          onConfirm = _this$props2.onConfirm;
      var entering = this.state.entering,
          confirm = Boolean(onConfirm);
      return /*#__PURE__*/_react["default"].createElement(MessageStyled, {
        className: (0, _classnames["default"])({
          dismissing: dismissing,
          entering: entering,
          confirm: confirm
        }),
        ref: function ref(comp) {
          return _this7.comp = comp;
        },
        height: height,
        style: {
          zIndex: zIndex,
          top: "".concat(top, "px")
        }
      }, this.renderMessage());
    }
  }]);

  return Message;
}(_react["default"].Component); // //


var ConfirmMessage = /*#__PURE__*/function (_Message) {
  _inherits(ConfirmMessage, _Message);

  var _super3 = _createSuper(ConfirmMessage);

  function ConfirmMessage() {
    _classCallCheck(this, ConfirmMessage);

    return _super3.apply(this, arguments);
  }

  _createClass(ConfirmMessage, [{
    key: "renderMessage",
    value: function renderMessage() {
      var _this$props3 = this.props,
          Message = _this$props3.Message,
          dismiss = _this$props3.dismiss,
          onConfirm = _this$props3.onConfirm,
          layer = _this$props3.layer,
          id = _this$props3.id;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, typeof Message === "function" ? /*#__PURE__*/_react["default"].createElement(Message, {
        layer: layer
      }) : Message, /*#__PURE__*/_react["default"].createElement("div", {
        className: "confirm-buttons-div"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-sm btn-outline-danger",
        onClick: function onClick() {
          return dismiss(id);
        }
      }, "Dismiss"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-sm btn-outline-success",
        onClick: function onClick() {
          onConfirm();
          dismiss(id);
        }
      }, "Confirm")));
    }
  }]);

  return ConfirmMessage;
}(Message);
