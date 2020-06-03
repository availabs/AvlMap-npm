"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _panelHeaderAction = _interopRequireDefault(require("./panelHeaderAction"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: inline-flex;\n  margin-left: 5px;\n  transition: color 0.15s;\n  :hover {\n    color: ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n\n  :hover {\n    cursor: move;\n    color: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 12px;\n  .layer__title__type {\n    color: ", ";\n    font-size: 10px;\n    line-height: 12px;\n    letter-spacing: 0.37px;\n    text-transform: capitalize;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .layer__remove-layer {\n    opacity: 0;\n  }\n  width: 100%;\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .layer__drag-handle {\n      opacity: 1;\n    }\n\n    .layer__remove-layer {\n      opacity: 1;\n    }\n\n    .layer__enable-config {\n      color: white\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var defaultProps = {
  isDragNDropEnabled: true,
  showRemoveLayer: true,
  className: '',
  idx: 1,
  // isConfigActive: false ,
  isVisible: true,
  layerId: 1,
  layerType: '',
  labelRCGColorValues: [255, 0, 0],
  isConfigActive: true,
  onToggleVisibility: function onToggleVisibility() {},
  onUpdateLayerLabel: function onUpdateLayerLabel() {},
  onToggleEnableConfig: function onToggleEnableConfig() {},
  onRemoveLayer: function onRemoveLayer() {}
};
var StyledLayerPanelHeader = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject(), function (props) {
  return props.theme.panelBackgroundHover;
});

var HeaderLabelSection = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.textColor;
});

var HeaderActionSection = _styledComponents["default"].div(_templateObject3());

var LayerTitleSection = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.subtextColor;
});

var DragHandle = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.textColorHl;
});

var ActionBarContainer = _styledComponents["default"].div(_templateObject6());

var IconWrapper = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var ActionBar = function ActionBar(_ref) {
  var layer = _ref.layer,
      actions = _ref.actions,
      actionMap = _ref.actionMap;
  return /*#__PURE__*/_react["default"].createElement(ActionBarContainer, null, actions.map(function (a, i) {
    return /*#__PURE__*/_react["default"].createElement(IconWrapper, {
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      "data-tip": true,
      "data-for": "action-bar-".concat(i),
      onClick: function onClick(e) {
        e.stopPropagation();
        typeof a.action === "function" ? a.action.call(layer) : actionMap[a.action[0]].apply(actionMap, [layer.name].concat(_toConsumableArray(a.action.slice(1))));
      }
    }, /*#__PURE__*/_react["default"].createElement(a.Icon, null)), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "action-bar-".concat(i),
      effect: "solid",
      delayShow: 500
    }, /*#__PURE__*/_react["default"].createElement("span", null, a.tooltip)));
  }));
};

var RemoveIcon = /*#__PURE__*/function (_React$Component) {
  _inherits(RemoveIcon, _React$Component);

  var _super = _createSuper(RemoveIcon);

  function RemoveIcon() {
    _classCallCheck(this, RemoveIcon);

    return _super.apply(this, arguments);
  }

  _createClass(RemoveIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", this.props, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa fa-close"
      }));
    }
  }]);

  return RemoveIcon;
}(_react["default"].Component);

var LayerPanelHeader = function LayerPanelHeader(_ref2) {
  var className = _ref2.className,
      isConfigActive = _ref2.isConfigActive,
      isDragNDropEnabled = _ref2.isDragNDropEnabled,
      isVisible = _ref2.isVisible,
      label = _ref2.label,
      layerType = _ref2.layerType,
      layer = _ref2.layer,
      labelRCGColorValues = _ref2.labelRCGColorValues,
      onToggleVisibility = _ref2.onToggleVisibility,
      onUpdateLayerLabel = _ref2.onUpdateLayerLabel,
      onToggleEnableConfig = _ref2.onToggleEnableConfig,
      onRemoveLayer = _ref2.onRemoveLayer,
      deleteDynamicLayer = _ref2.deleteDynamicLayer,
      showRemoveLayer = _ref2.showRemoveLayer,
      actionMap = _ref2.actionMap;
  return /*#__PURE__*/_react["default"].createElement(StyledLayerPanelHeader, {
    className: (0, _classnames["default"])('layer-panel__header', {
      'sort--handle': !isConfigActive
    }),
    style: layer.actions ? {
      height: "32px"
    } : null,
    active: isConfigActive,
    labelRCGColorValues: labelRCGColorValues,
    onClick: onToggleEnableConfig
  }, /*#__PURE__*/_react["default"].createElement(HeaderLabelSection, {
    className: "layer-panel__header__content"
  }, isDragNDropEnabled && /*#__PURE__*/_react["default"].createElement(DragHandle, {
    className: "layer__drag-handle"
  }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
    height: "20px"
  })), /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__visibility-toggle",
    id: layer.name,
    tooltip: isVisible ? 'hide layer' : 'show layer',
    onClick: onToggleVisibility,
    IconComponent: isVisible ? _icons.EyeSeen : _icons.EyeUnseen,
    active: isVisible,
    flush: true
  }), /*#__PURE__*/_react["default"].createElement(LayerTitleSection, {
    className: "layer__title"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      lineHeight: layer.actions ? "16px" : "26px"
    }
  }, layer.name), !layer.actions ? null : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      lineHeight: "16px"
    }
  }, /*#__PURE__*/_react["default"].createElement(ActionBar, {
    actionMap: actionMap,
    actions: layer.actions,
    layer: layer
  })))), layer.loading ? /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__loading-layer",
    id: layer.name,
    tooltip: 'Layer Loading',
    onClick: null,
    tooltipType: "error",
    IconComponent: _icons.Clock
  }) : null), /*#__PURE__*/_react["default"].createElement(HeaderActionSection, {
    className: "layer-panel__header__actions"
  }, showRemoveLayer ? /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__remove-layer",
    id: layer.name,
    tooltip: 'Remove layer',
    onClick: onRemoveLayer,
    tooltipType: "error",
    IconComponent: RemoveIcon
  }) : null, !layer._isDynamic ? null : /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__remove-layer",
    id: layer.name,
    tooltip: 'Delete Dyanmic Layer',
    onClick: deleteDynamicLayer,
    tooltipType: "error",
    IconComponent: _icons.Trash
  }), /*#__PURE__*/_react["default"].createElement(_panelHeaderAction["default"], {
    className: "layer__enable-config",
    id: layer.name,
    tooltip: 'Layer settings',
    onClick: onToggleEnableConfig,
    IconComponent: _icons.ArrowDown
  })));
};

LayerPanelHeader.defaultProps = defaultProps;
var _default = LayerPanelHeader;
exports["default"] = _default;
