"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TimeWidget = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _fieldSelector = _interopRequireDefault(require("components/common/field-selector"));

var _styledComponents2 = require("components/common/styled-components");

var _timeRangeFilter = _interopRequireDefault(require("components/filters/time-range-filter"));

var _icons = require("components/common/icons");

var _filterUtils = require("utils/filter-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 0;\n  color: ", ";\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid\n    ", ";\n  color: ", ";\n  display: inline-block;\n  font-size: 12px;\n  height: 24px;\n  margin-right: 4px;\n  text-align: center;\n  width: 24px;\n  line-height: 24px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding-right: 76px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding-right: ", "px;\n  color: ", ";\n\n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n\n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  width: ", "px;\n\n  .bottom-widget--inner {\n    background-color: ", ";\n    padding: 10px ", "px;\n    position: relative;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var innerPdSide = 32;

var WidgetContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
}, function (props) {
  return props.width;
}, function (props) {
  return props.theme.sidePanelBg;
}, innerPdSide);

var TopSectionWrapper = _styledComponents["default"].div(_templateObject2(), innerPdSide * 2, function (props) {
  return props.theme.labelColor;
});
/* eslint-disable no-unused-vars */


var Tabs = _styledComponents["default"].div(_templateObject3());

var Tab = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.active ? props.theme.textColorHl : 'transparent';
}, function (props) {
  return props.active ? props.theme.textColorHl : props.theme.labelColor;
});
/* eslint-enable no-unused-vars */


var StyledTitle = _styledComponents2.CenterFlexbox.extend(_templateObject5(), function (props) {
  return props.theme.textColor;
});

var AnimationSpeedToggle = function AnimationSpeedToggle(_ref) {
  var updateAnimationSpeed = _ref.updateAnimationSpeed,
      speed = _ref.speed;
  return /*#__PURE__*/_react["default"].createElement(Tabs, null, _filterUtils.TIME_ANIMATION_SPEED.map(function (_ref2) {
    var label = _ref2.label,
        value = _ref2.value;
    return /*#__PURE__*/_react["default"].createElement(Tab, {
      key: value,
      active: value === speed,
      onClick: function onClick() {
        return updateAnimationSpeed(value);
      }
    }, label);
  }));
};

var TimeWidget = /*#__PURE__*/function (_Component) {
  _inherits(TimeWidget, _Component);

  var _super = _createSuper(TimeWidget);

  function TimeWidget() {
    var _this;

    _classCallCheck(this, TimeWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "fieldSelector", function (props) {
      return props.fields;
    });

    _defineProperty(_assertThisInitialized(_this), "yAxisFieldsSelector", (0, _reselect.createSelector)(_this.fieldSelector, function (fields) {
      return fields.filter(function (f) {
        return f.type === 'integer' || f.type === 'real';
      });
    }));

    return _this;
  }

  _createClass(TimeWidget, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          enlargedIdx = _this$props.enlargedIdx,
          enlargeFilter = _this$props.enlargeFilter,
          filter = _this$props.filter,
          isAnyFilterAnimating = _this$props.isAnyFilterAnimating,
          _setFilter = _this$props.setFilter,
          setFilterPlot = _this$props.setFilterPlot,
          _toggleAnimation = _this$props.toggleAnimation,
          _updateAnimationSpeed = _this$props.updateAnimationSpeed,
          width = _this$props.width;
      return /*#__PURE__*/_react["default"].createElement(WidgetContainer, {
        width: width
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "bottom-widget--inner"
      }, /*#__PURE__*/_react["default"].createElement(TopSectionWrapper, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
        className: "bottom-widget__field"
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "bottom-widget__icon"
      }, /*#__PURE__*/_react["default"].createElement(_icons.Clock, {
        height: "15px"
      })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, filter.name)), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
        className: "bottom-widget__y-axis"
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
        className: "bottom-widget__icon"
      }, /*#__PURE__*/_react["default"].createElement(_icons.LineChart, {
        height: "15px"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "bottom-widget__field-select"
      }, /*#__PURE__*/_react["default"].createElement(_fieldSelector["default"], {
        fields: this.yAxisFieldsSelector(this.props),
        placement: "top",
        id: "selected-time-widget-field",
        value: filter.yAxis ? filter.yAxis.name : null,
        onSelect: function onSelect(value) {
          return setFilterPlot(enlargedIdx, {
            yAxis: value
          });
        },
        inputTheme: "secondary",
        placeholder: "Select Y Axis",
        erasable: true,
        showToken: false
      }))), /*#__PURE__*/_react["default"].createElement(AnimationSpeedToggle, {
        updateAnimationSpeed: function updateAnimationSpeed(speed) {
          return _updateAnimationSpeed(enlargedIdx, speed);
        },
        speed: filter.speed
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, null, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
        height: "12px",
        onClick: function onClick() {
          return enlargeFilter(enlargedIdx);
        }
      }))), /*#__PURE__*/_react["default"].createElement(_timeRangeFilter["default"], {
        filter: filter,
        setFilter: function setFilter(value) {
          return _setFilter(enlargedIdx, 'value', value);
        },
        isAnyFilterAnimating: isAnyFilterAnimating,
        updateAnimationSpeed: function updateAnimationSpeed(speed) {
          return _updateAnimationSpeed(enlargedIdx, speed);
        },
        toggleAnimation: function toggleAnimation() {
          return _toggleAnimation(enlargedIdx);
        }
      })));
    }
  }]);

  return TimeWidget;
}(_react.Component);

exports.TimeWidget = TimeWidget;

var TimeWidgetFactory = function TimeWidgetFactory() {
  return TimeWidget;
};

var _default = TimeWidgetFactory;
exports["default"] = _default;
