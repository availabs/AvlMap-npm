"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var d3scale = _interopRequireWildcard(require("d3-scale"));

var d3format = _interopRequireWildcard(require("d3-format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 20px;\n  height: ", "px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: inline-block;\n  text-align: right;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  align-items: stretch;\n  flex-grow: 1;\n  height: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  color: ", ";\n  border-radius: 4px;\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: 100%;\n  padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MainContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelHeaderBg;
}, function (props) {
  return props.align === "vertical" ? "10px" : "10px 10px 0px 10px";
});

var StyledTitle = _styledComponents["default"].h5(_templateObject2(), function (props) {
  return props.theme.textColorHl;
});

var Title = function Title(_ref) {
  var Title = _ref.Title,
      layer = _ref.layer;
  return /*#__PURE__*/_react["default"].createElement(StyledTitle, null, typeof Title === "function" ? /*#__PURE__*/_react["default"].createElement(Title, {
    layer: layer
  }) : Title);
};

var LegendContainer = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.theme.textColor;
});

var ColorBlock = _styledComponents["default"].div(_templateObject4());

var TextBlock = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.textColor;
});

var VerticalColorBlock = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.height || 20;
});

var HorizontalLegend = function HorizontalLegend(_ref2) {
  var type = _ref2.type,
      format = _ref2.format,
      scale = _ref2.scale,
      range = _ref2.range,
      domain = _ref2.domain,
      title = _ref2.title,
      layer = _ref2.layer;
  var textBlock = {
    width: 100 / (type === 'linear' ? scale.ticks(5).length : range.length) + '%'
  };
  return /*#__PURE__*/_react["default"].createElement(MainContainer, {
    align: "horizontal"
  }, !title ? null : /*#__PURE__*/_react["default"].createElement(Title, {
    Title: title,
    layer: layer
  }), /*#__PURE__*/_react["default"].createElement(LegendContainer, {
    className: "legend-container"
  }, type === "linear" ? scale.ticks(5).map(function (t) {
    return /*#__PURE__*/_react["default"].createElement(ColorBlock, {
      key: t,
      style: _objectSpread({
        backgroundColor: scale(t)
      }, textBlock)
    });
  }) : range.map(function (r, i) {
    return /*#__PURE__*/_react["default"].createElement(ColorBlock, {
      key: i,
      style: _objectSpread({
        backgroundColor: r
      }, textBlock)
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: '100%',
      position: 'relative',
      right: -3
    }
  }, type === "ordinal" ? domain.map(function (d) {
    return /*#__PURE__*/_react["default"].createElement(TextBlock, {
      key: d,
      style: textBlock
    }, format(d));
  }) : type === "linear" ? scale.ticks(5).map(function (t) {
    return /*#__PURE__*/_react["default"].createElement(TextBlock, {
      key: t,
      style: textBlock
    }, format(t));
  }) : range.map(function (r, i) {
    return /*#__PURE__*/_react["default"].createElement(TextBlock, {
      key: i,
      style: textBlock
    }, typeof scale.invertExtent(r)[1] === "number" ? format(scale.invertExtent(r)[1]) : null);
  })));
};

var VerticalLegend = function VerticalLegend(_ref3) {
  var type = _ref3.type,
      format = _ref3.format,
      scale = _ref3.scale,
      range = _ref3.range,
      domain = _ref3.domain,
      title = _ref3.title,
      layer = _ref3.layer;
  range = type === "linear" ? scale.ticks(5).map(function (t) {
    return scale(t);
  }) : range;
  return /*#__PURE__*/_react["default"].createElement(MainContainer, {
    align: "vertical"
  }, !title ? null : /*#__PURE__*/_react["default"].createElement(Title, {
    Title: title,
    layer: layer
  }), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, type === "ordinal" ? domain.map(function (d) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: d
    }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(VerticalColorBlock, {
      style: {
        backgroundColor: scale(d)
      }
    })), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        paddingLeft: "5px"
      }
    }, format(d)));
  }) : type === "quantile" ? range.map(function (r, i) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: r
    }, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(VerticalColorBlock, {
      height: 40,
      style: {
        backgroundColor: r
      }
    })), /*#__PURE__*/_react["default"].createElement("td", null, typeof scale.invertExtent(r)[1] === "number" ? format(scale.invertExtent(r)[1]) : null));
  }) : null)));
};

var Legend = /*#__PURE__*/function (_Component) {
  _inherits(Legend, _Component);

  var _super = _createSuper(Legend);

  function Legend() {
    _classCallCheck(this, Legend);

    return _super.apply(this, arguments);
  }

  _createClass(Legend, [{
    key: "getScale",
    value: function getScale() {
      switch (this.props.type) {
        case "ordinal":
          return d3scale.scaleOrdinal();

        case "quantile":
          return d3scale.scaleQuantile();

        case "quantize":
          return d3scale.scaleQuantize();

        case "threshold":
          return d3scale.scaleThreshold();

        default:
          return d3scale.scaleLinear();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          vertical = _this$props.vertical,
          format = _this$props.format,
          domain = _this$props.domain,
          range = _this$props.range;
      var scale = this.getScale().domain(domain).range(range);

      if (typeof format === "string") {
        format = d3format.format(format);
      }

      return vertical ? /*#__PURE__*/_react["default"].createElement(VerticalLegend, _extends({}, this.props, {
        scale: scale,
        format: format
      })) : /*#__PURE__*/_react["default"].createElement(HorizontalLegend, _extends({}, this.props, {
        scale: scale,
        format: format
      }));
    }
  }]);

  return Legend;
}(_react.Component);

Legend.defaultProps = {
  title: '',
  range: [],
  domain: [],
  type: "linear",
  format: function format(d) {
    return d;
  },
  vertical: false
};
var _default = Legend;
exports["default"] = _default;
