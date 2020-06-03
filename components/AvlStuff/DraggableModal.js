"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("components/common/icons");

var _styledComponents = require("components/common/styled-components");

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var d3selection = _interopRequireWildcard(require("d3-selection"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: inline-block;\n\tcolor: ", ";\n\tposition: absolute;\n\tright: 5px;\n\ttop: 5px;\n\tcursor: pointer;\n\tpadding: 0px 4px 0px 4px;\n\tborder-radius: 4px;\n\n\t:hover {\n\t\tcolor: ", ";\n\t\tbackground-color: ", ";\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tbottom: 5px;\n\tright: 5px;\n\twidth: 25px;\n\theight: 25px;\n\tborder-right: 2px solid ", ";\n\tborder-bottom: 2px solid ", ";\n\tz-index: 50;\n\ttransition: color 0.15s, background-color 0.15s;\n\n\t:hover {\n\t\tborder-right: 3px solid ", ";\n\t\tborder-bottom: 3px solid ", ";\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 5px;\n\tborder-radius: 4px;\n\tcolor: ", ";\n\tz-index: 50;\n\ttransition: color 0.15s, background-color 0.15s;\n\n\tsvg {\n\t\tdisplay: block;\n\t}\n\n\t:hover {\n\t\tcolor: ", ";\n\t\tbackground-color: ", ";\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\t", ";\n\toverflow: auto;\n\twidth: 100%;\n\theight: 100%;\n\tpadding-top: 35px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tz-index: 500;\n\tbackground-color: ", ";\n\tcolor: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DraggableContainer = _styledComponents2["default"].div(_templateObject(), function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.textColor;
});

var DraggableInner = _styledComponents2["default"].div(_templateObject2(), function (props) {
  return props.theme.scrollBar;
});

var DragHandle = _styledComponents2["default"].div(_templateObject3(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.panelBackgroundHover;
});

var ResizeHandle = _styledComponents2["default"].div(_templateObject4(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var CloseWrapper = _styledComponents2["default"].div(_templateObject5(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.panelBackgroundHover;
});

var noop = function noop() {};

var DraggableModal = /*#__PURE__*/function (_React$Component) {
  _inherits(DraggableModal, _React$Component);

  var _super = _createSuper(DraggableModal);

  function DraggableModal() {
    var _this;

    _classCallCheck(this, DraggableModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "container", null);

    _defineProperty(_assertThisInitialized(_this), "dragHandle", null);

    _defineProperty(_assertThisInitialized(_this), "resizeHandle", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      pos: [0, 0],
      dragging: false,
      resizing: false,
      prevPos: [0, 0],
      size: _toConsumableArray(_this.props.startSize)
    });

    return _this;
  }

  _createClass(DraggableModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      d3selection.select(this.dragHandle).on("mousedown.avl", function () {
        return _this2.startDragOrResize("dragging");
      }, {
        bubbles: false
      });
      d3selection.select(this.resizeHandle).on("mousedown.avl", function () {
        return _this2.startDragOrResize("resizing");
      }, {
        bubbles: false
      });
      this.setState(function (state, props) {
        if (!_this2.container) return null;
        if (_this2.resizeOnIdChange()) return null;

        var _state$size = _slicedToArray(state.size, 2),
            width = _state$size[0],
            height = _state$size[1],
            parent = _this2.container.parentElement,
            clientWidth = parent.clientWidth,
            clientHeight = parent.clientHeight;

        if (typeof props.startPos === "string") {
          switch (props.startPos) {
            case "top":
              return {
                pos: [clientWidth * 0.5 - width * 0.5, 20]
              };

            case "bottom":
              return {
                pos: [clientWidth * 0.5 - width * 0.5, clientHeight - height - 20]
              };

            case "bottom-right":
              return {
                pos: [clientWidth - width - 50, clientHeight - height - 20]
              };
          }
        } else {
          return {
            pos: _toConsumableArray(props.startPos)
          };
        }

        return null;
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      d3selection.select(document.body).on("mousemove.avl", null).on("mouseleave.avl", null).on("mouseup.avl", null);
    }
  }, {
    key: "resizeOnIdChange",
    value: function resizeOnIdChange(oldProps) {
      if (this.props.show && this.props.resizeOnIdChange && (0, _lodash["default"])(oldProps, 'meta.id', undefined) !== (0, _lodash["default"])(this.props, 'meta.id', undefined)) {
        var size = _toConsumableArray((0, _lodash["default"])(this.props, 'meta.startSize', this.state.size)),
            startPos = (0, _lodash["default"])(this.props, 'meta.startPos', this.props.startPos);

        var pos = _toConsumableArray(this.state.pos);

        var _size = _slicedToArray(size, 2),
            width = _size[0],
            height = _size[1],
            parent = this.container.parentElement,
            clientWidth = parent.clientWidth,
            clientHeight = parent.clientHeight;

        if (typeof startPos === "string") {
          switch (startPos) {
            case "top":
              {
                pos = [clientWidth * 0.5 - width * 0.5, 20];
                break;
              }

            case "bottom":
              {
                pos = [clientWidth * 0.5 - width * 0.5, clientHeight - height - 20];
                break;
              }

            case "bottom-right":
              pos = [clientWidth - width - 50, clientHeight - height - 20];
              break;
          }
        } else {
          pos = _toConsumableArray(startPos);
        }

        this.setState({
          size: size,
          pos: pos
        });
        return true;
      }

      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      this.resizeOnIdChange(oldProps);
    }
  }, {
    key: "startDragOrResize",
    value: function startDragOrResize(type) {
      var _this$setState;

      d3selection.select(document.body).on("mousemove.avl", this.dragOrResize.bind(this)).on("mouseleave.avl", this.endDragOrResize.bind(this)).on("mouseup.avl", this.endDragOrResize.bind(this));
      d3selection.event.stopPropagation();
      d3selection.event.preventDefault();
      var prevPos = d3selection.mouse(document.body);
      this.setState((_this$setState = {}, _defineProperty(_this$setState, type, true), _defineProperty(_this$setState, "prevPos", prevPos), _this$setState));
    }
  }, {
    key: "dragOrResize",
    value: function dragOrResize() {
      d3selection.event.stopPropagation();
      d3selection.event.preventDefault();

      var _this$state$prevPos = _slicedToArray(this.state.prevPos, 2),
          x1 = _this$state$prevPos[0],
          y1 = _this$state$prevPos[1],
          _d3selection$mouse = d3selection.mouse(document.body),
          _d3selection$mouse2 = _slicedToArray(_d3selection$mouse, 2),
          x2 = _d3selection$mouse2[0],
          y2 = _d3selection$mouse2[1];

      if (this.state.dragging) {
        var _this$state$pos = _slicedToArray(this.state.pos, 2),
            x = _this$state$pos[0],
            y = _this$state$pos[1];

        var newState = {
          pos: [Math.max(0, x + (x2 - x1)), Math.max(0, y + (y2 - y1))],
          prevPos: [x2, y2]
        };
        this.setState(newState);
      } else if (this.state.resizing) {
        var _this$state$size = _slicedToArray(this.state.size, 2),
            width = _this$state$size[0],
            height = _this$state$size[1];

        var _this$props = this.props,
            minWidth = _this$props.minWidth,
            minHeight = _this$props.minHeight;
        var _newState = {
          size: [Math.max(minWidth, width + (x2 - x1)), Math.max(minHeight, height + (y2 - y1))],
          prevPos: [x2, y2]
        };
        this.setState(_newState);
      }
    }
  }, {
    key: "endDragOrResize",
    value: function endDragOrResize() {
      d3selection.select(document.body).on("mousemove.avl", null).on("mouseleave.avl", null).on("mouseup.avl", null);
      d3selection.event.stopPropagation();
      d3selection.event.preventDefault();
      this.setState({
        dragging: false,
        resizing: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          _this$state$pos2 = _slicedToArray(_this$state.pos, 2),
          left = _this$state$pos2[0],
          top = _this$state$pos2[1],
          _this$state$size2 = _slicedToArray(_this$state.size, 2),
          width = _this$state$size2[0],
          height = _this$state$size2[1];

      return /*#__PURE__*/_react["default"].createElement(DraggableContainer, {
        style: {
          left: "".concat(Math.max(0, left), "px"),
          top: "".concat(Math.max(0, top), "px"),
          width: "".concat(width, "px"),
          height: "".concat(height, "px"),
          display: this.props.show ? "block" : "none"
        },
        ref: function ref(comp) {
          return _this3.container = comp;
        }
      }, /*#__PURE__*/_react["default"].createElement(DraggableInner, null, this.props.children), /*#__PURE__*/_react["default"].createElement(CloseWrapper, {
        onClick: this.props.onClose
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "fa fa-2x fa-close",
        "data-tip": true,
        "data-for": "close-modal-btn"
      }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
        id: "close-modal-btn",
        effect: "solid",
        delayShow: 500
      }, /*#__PURE__*/_react["default"].createElement("span", null, "Close Modal"))), /*#__PURE__*/_react["default"].createElement(DragHandle, {
        ref: function ref(comp) {
          return _this3.dragHandle = comp;
        },
        style: {
          cursor: this.state.dragging ? "grabbing" : "grab"
        },
        onMouseDown: function onMouseDown(e) {
          return e.stopPropagation();
        }
      }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
        height: "26px"
      })), /*#__PURE__*/_react["default"].createElement(ResizeHandle, {
        ref: function ref(comp) {
          return _this3.resizeHandle = comp;
        },
        style: {
          cursor: "nwse-resize"
        }
      }));
    }
  }]);

  return DraggableModal;
}(_react["default"].Component);

exports["default"] = DraggableModal;

_defineProperty(DraggableModal, "defaultProps", {
  startPos: "bottom",
  startSize: [800, 500],
  minWidth: 200,
  minHeight: 200,
  onClose: noop,
  meta: null,
  resizeOnIdChange: false
});
