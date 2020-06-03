"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _DraggableModal = _interopRequireDefault(require("../DraggableModal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var data = _taggedTemplateLiteral(["\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 10px;\n\tleft: 40px;\n\tfont-size: 1.25rem;\n\tcolor: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t", ";\n\t/*background-color: ", ";*/\n\tdisplay: inline-flex;\n\tposition: relative;\n\tpointer-events: all;\n\tpadding: 0px 20px 20px 20px;\n\t/*overflow: auto;*/\n\twidth: 100%;\n\theight: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalWrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.theme.panelBackground;
});

var ModalTitle = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColorHl;
});

var MapModal = /*#__PURE__*/function (_React$Component) {
  _inherits(MapModal, _React$Component);

  var _super = _createSuper(MapModal);

  function MapModal() {
    var _this;

    _classCallCheck(this, MapModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.MODAL_ID = undefined;
    return _this;
  }

  _createClass(MapModal, [{
    key: "close",
    value: function close(e, _ref) {
      var layerName = _ref.layerName,
          modalName = _ref.modalName;
      e.preventDefault();
      e.stopPropagation();
      this.props.toggleModal(layerName, modalName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var modal = this.props.layers.filter(function (l) {
        return _this2.props.activeLayers.includes(l.name);
      }).reduce(function (a, layer) {
        var m = null;

        if (layer.modals) {
          for (var key in layer.modals) {
            if (layer.modals[key].show) {
              m = _objectSpread(_objectSpread({}, layer.modals[key]), {}, {
                id: "".concat(layer.name, "-").concat(key),
                layerName: layer.name,
                modalName: key,
                props: layer.modals[key].props || {},
                layer: layer,
                startSize: layer.modals[key].startSize || [800, 500],
                startPos: layer.modals[key].position || "bottom"
              });
            }
          }
        }

        return m || a;
      }, {});
      Boolean(modal.comp) && (this.MODAL_ID = modal.id);
      return /*#__PURE__*/_react["default"].createElement(_DraggableModal["default"], {
        show: Boolean(modal.comp),
        onClose: function onClose(e) {
          return _this2.close(e, modal);
        },
        meta: {
          id: this.MODAL_ID,
          startSize: modal.startSize,
          startPos: modal.startPos
        },
        resizeOnIdChange: true
      }, modal.title && /*#__PURE__*/_react["default"].createElement(ModalTitle, null, modal.title), /*#__PURE__*/_react["default"].createElement(ModalWrapper, null, !Boolean(modal.comp) ? null : /*#__PURE__*/_react["default"].createElement(modal.comp, _extends({}, modal.props, {
        layer: modal.layer
      }))));
    }
  }]);

  return MapModal;
}(_react["default"].Component);

var _default = MapModal;
exports["default"] = _default;
