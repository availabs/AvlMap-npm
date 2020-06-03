"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScalableLoading = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100vw' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? '100vh' : _ref$height;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: width,
      height: height,
      backgroundColor: "transparent",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "100",
    height: "100"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#35afce",
    d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#eac759",
    d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "1s",
    from: "0 50 50",
    to: "-360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#e85e38",
    d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  }))));
};

exports["default"] = _default;

var ScalableLoading = function ScalableLoading(_ref2) {
  var _ref2$scale = _ref2.scale,
      scale = _ref2$scale === void 0 ? 1 : _ref2$scale;
  var size = 100 * scale;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      position: "relative",
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      transform: "translate(-".concat(50 - size * 0.5, "%, -").concat(50 - size * 0.5, "%) scale(").concat(scale, ", ").concat(scale, ")"),
      width: "100px",
      height: "100px"
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "100",
    height: "100"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#35afce",
    d: "M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#eac759",
    d: "M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "1s",
    from: "0 50 50",
    to: "-360 50 50",
    repeatCount: "indefinite"
  })), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#e85e38",
    d: "M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z"
  }, /*#__PURE__*/_react["default"].createElement("animateTransform", {
    attributeName: "transform",
    attributeType: "XML",
    type: "rotate",
    dur: "2s",
    from: "0 50 50",
    to: "360 50 50",
    repeatCount: "indefinite"
  })))));
};

exports.ScalableLoading = ScalableLoading;
