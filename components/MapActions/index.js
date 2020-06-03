"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents2 = require("../common/styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\n\tcolor: #ccc;\n\tbackground-color: #999;\n  border: 2px solid #999;\n\n\twidth: 40px;\n\theight: 40px;\n\tborder-radius: 20px;\n\n\tmargin-top 10px;\n\t:first-child {\n\t\tmargin-top 0px;\n\t}\n\n\tdisplay: flex;\n  justify-content: center;\n  align-items: center;\n\n  cursor: pointer;\n\n  transition: border-color 0.15s, color 0.15s, background-color 0.15s;\n\n  :hover {\n  \tborder: 2px solid #fff;\n\t\tcolor: #fff;\n\t\tbackground-color: #aaa;\n  }\n  &.disabled {\n  \tpointer-events: all;\n  \tcursor: not-allowed;\n  \tcolor: #aaa;\n\t\tbackground-color: #888;\n\t\tborder-color: #888;\n  }\n  &.disabled:hover {\n  \tborder-color: ", ";\n  }\n\n\tsvg {\n\t\twidth: 40px;\n\t\theight: 40px;\n\t\tborder-radius: 20px;\n\n\t\tdisplay: block;\n\t\tposition: absolute;\n\t\ttop: -2px;\n\t\tleft: -2px;\n\n\t\tline {\n\t\t\tstroke: ", ";\n\t\t\tstroke-width: 4px;\n\t\t\ttransition: stroke 0.15s;\n\t\t}\n\t\t:hover line {\n\t\t\tstroke: ", ";\n\t\t}\n\t}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: ", "px;\n\tleft: ", "px;\n\ttransition: left 0.25s;\n\tz-index: 50;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ActionContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.sidebar ? 50 : 20;
}, function (props) {
  return props.sidebar && props.isOpen ? 340 : props.sidebar && !props.isOpen ? 40 : 20;
});

var ActionItem = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.errorColor;
});

var NO_OP = function NO_OP() {};

var MapActions = /*#__PURE__*/function (_React$Component) {
  _inherits(MapActions, _React$Component);

  var _super = _createSuper(MapActions);

  function MapActions() {
    var _this;

    _classCallCheck(this, MapActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.MOUNTED = false;
    _this.state = {
      waitingActions: []
    };
    return _this;
  }

  _createClass(MapActions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.MOUNTED = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.MOUNTED = false;
    }
  }, {
    key: "doAndPauseAction",
    value: function doAndPauseAction(e, disableFor, action, id) {
      var _this2 = this;

      action(e);
      var waitingActions = [].concat(_toConsumableArray(this.state.waitingActions), [id]);
      this.setState({
        waitingActions: waitingActions
      });
      setTimeout(function () {
        var waitingActions = _this2.state.waitingActions.filter(function (d) {
          return d !== id;
        });

        _this2.MOUNTED && _this2.setState({
          waitingActions: waitingActions
        });
      }, disableFor);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var actions = this.props.layers.filter(function (l) {
        return _this3.props.activeLayers.includes(l.name);
      }).reduce(function (actions, layer) {
        if (layer.active) {
          actions.push.apply(actions, _toConsumableArray(Object.keys(layer.mapActions).map(function (actionName) {
            var id = "".concat(layer.name, "-").concat(actionName);

            var _layer$mapActions$act = layer.mapActions[actionName],
                _layer$mapActions$act2 = _layer$mapActions$act.action,
                action = _layer$mapActions$act2 === void 0 ? NO_OP : _layer$mapActions$act2,
                _layer$mapActions$act3 = _layer$mapActions$act.disabled,
                disabled = _layer$mapActions$act3 === void 0 ? false : _layer$mapActions$act3,
                _layer$mapActions$act4 = _layer$mapActions$act.disableFor,
                disableFor = _layer$mapActions$act4 === void 0 ? 0 : _layer$mapActions$act4,
                rest = _objectWithoutProperties(_layer$mapActions$act, ["action", "disabled", "disableFor"]);

            var isDisabled = disabled || _this3.state.waitingActions.includes(id);

            var boundAction = NO_OP.bind(layer);

            if (Array.isArray(action)) {
              var a = action[0];

              if (a in _this3.props.actionMap) {
                var _this3$props$actionMa;

                boundAction = (_this3$props$actionMa = _this3.props.actionMap[a]).bind.apply(_this3$props$actionMa, [layer, layer.name].concat(_toConsumableArray(action.slice(1))));
              }
            } else {
              boundAction = action.bind(layer);
            }

            return _objectSpread({
              action: disableFor ? function (e) {
                return _this3.doAndPauseAction(e, disableFor, boundAction, id);
              } : boundAction,
              id: id,
              layer: layer,
              disabled: isDisabled
            }, rest);
          })));
        }

        return actions;
      }, []);
      return /*#__PURE__*/_react["default"].createElement(ActionContainer, {
        sidebar: this.props.sidebar,
        isOpen: this.props.isOpen
      }, actions.map(function (_ref) {
        var Icon = _ref.Icon,
            id = _ref.id,
            tooltip = _ref.tooltip,
            action = _ref.action,
            disabled = _ref.disabled,
            layer = _ref.layer;
        return /*#__PURE__*/_react["default"].createElement(ActionItem, {
          key: id,
          "data-tip": true,
          "data-for": id,
          onClick: disabled ? null : action,
          className: (0, _classnames["default"])({
            disabled: disabled
          })
        }, /*#__PURE__*/_react["default"].createElement(Icon, {
          layer: layer
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
          id: id,
          effect: "solid",
          place: "right"
        }, /*#__PURE__*/_react["default"].createElement("span", null, typeof tooltip === "function" ? tooltip({
          layer: layer
        }) : tooltip)), !disabled ? null : /*#__PURE__*/_react["default"].createElement("svg", null, /*#__PURE__*/_react["default"].createElement("line", {
          x1: "40",
          x2: "0",
          y1: "0",
          y2: "40"
        })));
      }));
    }
  }]);

  return MapActions;
}(_react["default"].Component);

var _default = MapActions;
exports["default"] = _default;
