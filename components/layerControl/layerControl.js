"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _layerHeader = _interopRequireDefault(require("./layerHeader"));

var _layerFilterPanel = _interopRequireDefault(require("./layerFilterPanel"));

var _legendSelector = _interopRequireDefault(require("./legendSelector"));

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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 5px;\n  background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 12px;\n  border-radius: 1px;\n  padding-left: 12px;\n  padding-right: 12px;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import deepEqual from 'deep-equal'
var StyledFilterPanel = _styledComponents["default"].div(_templateObject());

var StyledLayerControl = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var ModalToggle = function ModalToggle(_ref) {
  var layer = _ref.layer,
      toggle = _ref.toggle;
  return /*#__PURE__*/_react["default"].createElement(StyledFilterPanel, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    onClick: toggle,
    secondary: true,
    small: true,
    width: "100%"
  }, layer.modal.show ? "Hide" : "Show", " Modal"));
};

var LayerControl = /*#__PURE__*/function (_Component) {
  _inherits(LayerControl, _Component);

  var _super = _createSuper(LayerControl);

  function LayerControl() {
    var _this;

    _classCallCheck(this, LayerControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showConfig: true
    });

    return _this;
  }

  _createClass(LayerControl, [{
    key: "onDragStart",
    value: function onDragStart(e, layerName, index) {
      this.props.updateDrag({
        dragging: layerName
      });
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(e, index) {
      e.preventDefault();
      this.props.updateDrag({
        dragover: index
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          layer = _this$props.layer,
          actionMap = _this$props.actionMap,
          index = _this$props.index;
      var showConfig = this.state.showConfig;

      var removeLayer = function removeLayer() {
        _this2.props.removeLayer(layer.name);
      };

      var toggleConfig = function toggleConfig() {
        _this2.setState({
          showConfig: !_this2.state.showConfig
        });
      };

      var toggleVisibility = function toggleVisibility() {
        _this2.props.toggleLayerVisibility(layer.name);
      };

      var deleteDynamicLayer = function deleteDynamicLayer() {
        return _this2.props.deleteDynamicLayer(layer.name);
      };

      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(StyledLayerControl, {
        draggable: true,
        onDragStart: function onDragStart(e) {
          return _this2.onDragStart(e, layer.name, index);
        },
        onDragOver: function onDragOver(e) {
          return _this2.onDragOver(e, index);
        },
        className: "active-layer-container"
      }, /*#__PURE__*/_react["default"].createElement(_layerHeader["default"], {
        layer: layer,
        onRemoveLayer: removeLayer,
        deleteDynamicLayer: deleteDynamicLayer,
        onToggleVisibility: toggleVisibility,
        isVisible: layer._isVisible,
        onToggleEnableConfig: toggleConfig,
        actionMap: actionMap,
        showRemoveLayer: this.props.showRemoveLayer
      })), !showConfig || !layer.modal || !layer.modal.controlButton ? null : /*#__PURE__*/_react["default"].createElement(ModalToggle, {
        layer: layer,
        toggle: function toggle(e) {
          return _this2.props.toggleModal(layer.name);
        }
      }), !showConfig || !layer.legend || !layer.legend.active || layer.legend.legendSelector === false ? null : /*#__PURE__*/_react["default"].createElement(_legendSelector["default"], {
        layer: layer,
        updateLegend: this.props.updateLegend
      }), !showConfig || !layer.filters ? null : /*#__PURE__*/_react["default"].createElement(_layerFilterPanel["default"], {
        layer: layer,
        updateFilter: this.props.updateFilter,
        fetchLayerData: this.props.fetchLayerData
      }));
    }
  }]);

  return LayerControl;
}(_react.Component);

var _default = LayerControl;
exports["default"] = _default;
