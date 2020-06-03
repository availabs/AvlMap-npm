"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: relative;\n  color: currentColor;\n  height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: currentColor;\n  border-radius: 1px;\n  display: inline-block;\n  padding: 0 4px;\n  position: absolute;\n  top: 45%;\n  left: 10%;\n\n  .text {\n    color: white;\n    font-size: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FileNameTag = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.fontSize;
});

var FileTypeIconWrapper = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.height;
});

var FileTypeIcon = function FileTypeIcon(_ref) {
  var ext = _ref.ext,
      height = _ref.height,
      fontSize = _ref.fontSize;
  return /*#__PURE__*/_react["default"].createElement(FileTypeIconWrapper, {
    height: height
  }, /*#__PURE__*/_react["default"].createElement(_index.File, {
    height: height
  }), /*#__PURE__*/_react["default"].createElement(FileNameTag, {
    fontSize: fontSize
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text"
  }, ext)));
};

var _default = FileTypeIcon;
exports["default"] = _default;
