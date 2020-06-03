"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var d3array = _interopRequireWildcard(require("d3-array"));

var _d3Format = require("d3-format");

var _styledComponents2 = require("components/common/styled-components");

var _itemSelector = _interopRequireDefault(require("components/common/item-selector/item-selector"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\twhite-space: nowrap;\n\n\tth, td {\n\t\tpadding-right: 10px;\n\t}\n\tth:last-child, td:last-child {\n\t\tpadding-right: 0px;\n\t}\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 2px 2px 2px 10px;\n\tdisplay: flex;\n\tborder: 2px solid ", ";\n\tborder-radius: 4px;\n\n\t:hover {\n\t\tborder-color: ", ";\n\t}\n\n\t> div:first-child {\n\t\tpadding-right: 5px;\n\t}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\n\t> * {\n\t\twidth: 100%;\n\t\tposition: relative;\n\n\t\t::after {\n\t\t\tcontent: \"\";\n\t\t\tclear: both;\n\t\t\tdisplay: table;\n\t\t}\n\n\t\t> * {\n\t\t\tdisplay: inline-block;\n\n\t\t\t:last-child {\n\t\t\t\tfloat: right;\n\t\t\t}\n\t\t\t&.middle {\n\t\t\t\twidth: 100%;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0px;\n\t\t\t\tleft: 0px;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\tpointer-events: none;\n\t\t\t\t> * {\n\t\t\t\t\tpointer-events: all;\n\t\t\t\t}\n\t\t\t}\n\t\t\t:first-child {\n\t\t\t\tfloat: left;\n\t\t\t}\n\t\t}\n\t}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\tbackground-color: ", ";\n\tcolor: ", ";\n\tborder-radius: 4px;\n\tborder: none;\n\tcursor: pointer;\n\tfont-weight: 400;\n\tposition: relative;\n\n\t:hover {\n\t\tbackground-color: ", ";\n\t}\n\t:disabled,\n\t:disabled:hover {\n\t\tcursor: not-allowed;\n\t\tbackground-color: ", ";\n\t}\n\n\t&.active {\n\t\tbackground-color: ", ";\n\t\tcolor: ", ";\n\t}\n\n\t> .button-dropdown {\n\t\tdisplay: none;\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 100%;\n\t\tbackground-color: ", ";\n\t\tcolor: ", ";\n\t\tpadding: 20px;\n\t\tz-index: 100;\n\t}\n\n\t:hover > .button-dropdown {\n\t\tdisplay: block;\n\t}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\tpadding-top: 2px;\n\tcursor: pointer;\n\t:hover {\n\t\ttext-decoration: underline;\n\t}\n\t&.active {\n\t\ttext-decoration: underline;\n\t}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tpadding: 0px 10px;\n\t", ";\n\toverflow: auto;\n\tmax-height: 500px;\n\tmargin-top: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\t/*max-height: 700px;*/\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var FILTER_ID = 0;

var getFilterId = function getFilterId() {
  return "filter-".concat(++FILTER_ID);
};

var StringEqualityFilter = function StringEqualityFilter(key, value) {
  value = value.toString().toLowerCase();

  function filter(data) {
    return data.filter(function (d) {
      return (0, _lodash["default"])(d, [key], "").toString().toLowerCase().includes(value);
    });
  }

  filter.id = getFilterId();
  filter.display = "".concat(key, " includes ").concat(value);
  return filter;
};

var NotEqualFilter = function NotEqualFilter(key, value) {
  function filter(data) {
    return data.filter(function (d) {
      return (0, _lodash["default"])(d, [key], undefined) != value;
    });
  }

  filter.id = getFilterId();
  filter.display = "".concat(key, " != ").concat(value);
  return filter;
};

var EqualityFilter = function EqualityFilter(key, value) {
  function filter(data) {
    return data.filter(function (d) {
      return (0, _lodash["default"])(d, [key], undefined) == value;
    });
  }

  filter.id = getFilterId();
  filter.display = "".concat(key, " == ").concat(value);
  return filter;
};

var NumericGreaterThanFilter = function NumericGreaterThanFilter(key, value) {
  function filter(data) {
    return data.filter(function (d) {
      return (0, _lodash["default"])(d, [key], undefined) > value;
    });
  }

  filter.id = getFilterId();
  filter.display = "".concat(key, " > ").concat(value);
  return filter;
};

var NumericGreaterThanEqualToFilter = function NumericGreaterThanEqualToFilter(key, value) {
  function filter(data) {
    return data.filter(function (d) {
      return (0, _lodash["default"])(d, [key], undefined) >= value;
    });
  }

  filter.id = getFilterId();
  filter.display = "".concat(key, " >= ").concat(value);
  return filter;
};

var NumericLessThanFilter = function NumericLessThanFilter(key, value) {
  function filter(data) {
    return data.filter(function (d) {
      return (0, _lodash["default"])(d, [key], undefined) < value;
    });
  }

  filter.id = getFilterId();
  filter.display = "".concat(key, " < ").concat(value);
  return filter;
};

var NumericLessThanEqualToFilter = function NumericLessThanEqualToFilter(key, value) {
  function filter(data) {
    return data.filter(function (d) {
      return (0, _lodash["default"])(d, [key], undefined) <= value;
    });
  }

  filter.id = getFilterId();
  filter.display = "".concat(key, " <= ").concat(value);
  return filter;
};

var NumericRangeFilterRegex = /(\[|\()(\d+),(\d+)(\]|\))/;

var NumericRangeFilter = function NumericRangeFilter(key, lower, value1, value2, upper) {
  function filter(data) {
    return data.filter(function (d) {
      var value = (0, _lodash["default"])(d, [key], undefined);
      return (lower === "[" ? value >= value1 : value > value1) && (upper === "]" ? value <= value2 : value < value2);
    });
  }

  filter.id = getFilterId();
  filter.display = "".concat(key, " in range ").concat(lower).concat(value1, ", ").concat(value2).concat(upper);
  return filter;
};

var isNum = function isNum(n) {
  return n !== null && !isNaN(+n);
};

var hierSort = function hierSort(data, keys) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  if (i >= keys.length) return data;
  var groups = new Map();
  var keyData = keys[i];

  var keyFunc = function keyFunc(d) {
    return d[keyData.key];
  };

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      var key = keyFunc(row),
          group = groups.get(key);

      if (group) {
        group.push(row);
      } else {
        groups.set(key, [row]);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(groups),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          _key = _step2$value[0],
          values = _step2$value[1];

      groups.set(_key, hierSort(values, keys, i + 1));
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return Array.from(groups).sort(function (_ref, _ref2) {
    var _ref3 = _slicedToArray(_ref, 1),
        a = _ref3[0];

    var _ref4 = _slicedToArray(_ref2, 1),
        b = _ref4[0];

    if (a === null || a === undefined) return 1;
    if (b === null || b === undefined) return -1;

    if (isNum(a) && isNum(b)) {
      return (a - b) * keyData.dir;
    }

    a = a.toString().toLowerCase();
    b = b.toString().toLowerCase();
    return (a < b ? -1 : b < a ? 1 : 0) * keyData.dir;
  }).reduce(function (a, c) {
    a.push.apply(a, _toConsumableArray(c[1]));
    return a;
  }, []);
};

var AvlTable = /*#__PURE__*/function (_React$Component) {
  _inherits(AvlTable, _React$Component);

  var _super = _createSuper(AvlTable);

  function AvlTable() {
    var _this;

    _classCallCheck(this, AvlTable);

    for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      page: 0,
      filters: [],
      searchKey: null,
      searchString: "",
      sortKey: null,
      sortDirection: 1,
      sortKeys: []
    });

    return _this;
  }

  _createClass(AvlTable, [{
    key: "setPage",
    value: function setPage(page) {
      var maxPage = Math.floor(this.props.data.length / this.props.rowsPerPage);
      this.setState({
        page: Math.max(0, Math.min(maxPage, page))
      });
    }
  }, {
    key: "prevPage",
    value: function prevPage() {
      this.setState({
        page: Math.max(0, this.state.page - 1)
      });
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      var maxPage = Math.floor(this.props.data.length / this.props.rowsPerPage);
      this.setState({
        page: Math.min(maxPage, this.state.page + 1)
      });
    }
  }, {
    key: "addFilter",
    value: function addFilter() {
      var _this$state = this.state,
          searchKey = _this$state.searchKey,
          searchString = _this$state.searchString;
      var filter = false;

      if (searchString.slice(0, 2) === "::") {
        var argsString = searchString.slice(2).trim(),
            args = argsString.split(/\s+/);

        if (args[0] === "==") {
          filter = EqualityFilter(searchKey, argsString.slice(2).trim());
        } else if (args[0] === "!=") {
          filter = NotEqualFilter(searchKey, argsString.slice(2).trim());
        } else if (args[0] === ">") {
          filter = NumericGreaterThanFilter(searchKey, argsString.slice(1).trim());
        } else if (args[0] === ">=") {
          filter = NumericGreaterThanEqualToFilter(searchKey, argsString.slice(2).trim());
        } else if (args[0] === "<") {
          filter = NumericLessThanFilter(searchKey, argsString.slice(1).trim());
        } else if (args[0] === "<=") {
          filter = NumericLessThanEqualToFilter(searchKey, argsString.slice(2).trim());
        } else if (args[0] === "range" || args[0] === "in") {
          var value = argsString.slice(args[0].length).replace("/\s/g", ""),
              match = NumericRangeFilterRegex.exec(value);

          if (match) {
            filter = NumericRangeFilter.apply(void 0, [searchKey].concat(_toConsumableArray(match.slice(1, 5))));
          }
        }
      }

      if (!filter) {
        filter = StringEqualityFilter(searchKey, searchString);
      }

      this.setState({
        filters: [].concat(_toConsumableArray(this.state.filters), [filter]),
        searchKey: null,
        searchString: ""
      });
    }
  }, {
    key: "removeFilter",
    value: function removeFilter(id) {
      this.setState({
        filters: this.state.filters.filter(function (f) {
          return f.id !== id;
        })
      });
    }
  }, {
    key: "setSearchKey",
    value: function setSearchKey() {
      var searchKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var newState = {
        searchKey: searchKey
      };

      if (searchKey !== this.state.searchKey) {
        newState.searchString = "";
      }

      this.setState(newState);
    }
  }, {
    key: "setSearchString",
    value: function setSearchString(searchString) {
      this.setState({
        searchString: searchString
      });
    }
  }, {
    key: "setSortKey",
    value: function setSortKey() {
      var sortKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var sortDirection = 1;

      if (sortKey === this.state.sortKey) {
        sortDirection = this.state.sortDirection * -1;
      }

      this.setState({
        sortKey: sortKey,
        sortDirection: sortDirection
      });
    }
  }, {
    key: "toggleSortKey",
    value: function toggleSortKey(sortKey) {
      var sortKeyFound = false;
      var sortKeys = this.state.sortKeys.reduce(function (a, _ref5) {
        var key = _ref5.key,
            dir = _ref5.dir;
        sortKeyFound = sortKeyFound || key === sortKey;

        if (key === sortKey && dir === 1) {
          a.push({
            key: key,
            dir: -1
          });
        } else if (key !== sortKey) {
          a.push({
            key: key,
            dir: dir
          });
        }

        return a;
      }, []);

      if (!sortKeyFound) {
        sortKeys.push({
          key: sortKey,
          dir: 1
        });
      }

      this.setState({
        sortKeys: sortKeys
      });
    }
  }, {
    key: "getKeys",
    value: function getKeys() {
      var _this$props = this.props,
          keys = _this$props.keys,
          data = _this$props.data;

      if (!keys.length && data.length) {
        keys = Object.keys(data[0]);
      }

      return keys;
    }
  }, {
    key: "getData",
    value: function getData() {
      var data = this.state.filters.reduce(function (data, filter) {
        return filter(data);
      }, _toConsumableArray(this.props.data));

      var isN = function isN(n) {
        return !isNaN(+n);
      };

      var sortKeys = this.state.sortKeys;
      data = hierSort(data, sortKeys);
      return data;
    }
  }, {
    key: "getKeysAndData",
    value: function getKeysAndData() {
      return [this.getKeys(), this.getData()];
    }
  }, {
    key: "downloadAsCsv",
    value: function downloadAsCsv() {
      var filtered = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var keys = this.getKeys();
      var data = this.props.data;

      if (filtered) {
        data = this.getData();
      }

      var csvData = data.reduce(function (csvData, row) {
        csvData.push(keys.map(function (k) {
          return row[k];
        }).join());
        return csvData;
      }, [keys.join()]).join("\n");
      var blob = new Blob([csvData], {
        type: 'text/csv;charset=utf-8;'
      });
      var link = document.createElement('a');

      if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', this.props.downloadedFileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$getKeysAndData = this.getKeysAndData(),
          _this$getKeysAndData2 = _slicedToArray(_this$getKeysAndData, 2),
          keys = _this$getKeysAndData2[0],
          data = _this$getKeysAndData2[1];

      var _this$state2 = this.state,
          page = _this$state2.page,
          searchKey = _this$state2.searchKey,
          searchString = _this$state2.searchString,
          sortKeys = _this$state2.sortKeys;
      var keyMap = sortKeys.reduce(function (a, c, i) {
        return _objectSpread(_objectSpread({}, a), {}, _defineProperty({}, c.key, {
          dir: c.dir,
          i: i
        }));
      }, {});
      var _this$props2 = this.props,
          rowsPerPage = _this$props2.rowsPerPage,
          pageSpread = _this$props2.pageSpread,
          maxPage = Math.max(Math.ceil(data.length / rowsPerPage) - 1, 0),
          length = data.length;
      page = Math.min(maxPage, page);
      data = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
      return /*#__PURE__*/_react["default"].createElement(DivContainer, null, /*#__PURE__*/_react["default"].createElement(NavigationBar, {
        page: page,
        maxPage: maxPage,
        length: length,
        rowsPerPage: rowsPerPage,
        pageSpread: pageSpread,
        prevPage: function prevPage() {
          return _this2.prevPage();
        },
        nextPage: function nextPage() {
          return _this2.nextPage();
        },
        setPage: function setPage(p) {
          return _this2.setPage(p);
        },
        searchKeys: keys,
        searchKey: searchKey,
        setSearchKey: function setSearchKey(key) {
          return _this2.setSearchKey(key);
        },
        searchString: searchString,
        setSearchString: function setSearchString(str) {
          return _this2.setSearchString(str);
        },
        addFilter: function addFilter() {
          return _this2.addFilter();
        },
        removeFilter: function removeFilter(id) {
          return _this2.removeFilter(id);
        },
        filters: this.state.filters,
        downloadFiltered: function downloadFiltered() {
          return _this2.downloadAsCsv(true);
        },
        downloadUnfiltered: function downloadUnfiltered() {
          return _this2.downloadAsCsv(false);
        },
        title: this.props.title,
        showHelp: this.props.showHelp
      }), /*#__PURE__*/_react["default"].createElement(TableContainer, null, /*#__PURE__*/_react["default"].createElement("table", {
        className: "table table-sm"
      }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, keys.map(function (key) {
        return /*#__PURE__*/_react["default"].createElement(TH, {
          key: key,
          onClick: function onClick() {
            return _this2.toggleSortKey(key);
          },
          className: keyMap[key] ? "active" : ""
        }, !keyMap[key] ? null : "(".concat(keyMap[key].i + 1, ")"), " ", key.replace("_", " "), !keyMap[key] ? null : /*#__PURE__*/_react["default"].createElement("span", {
          className: "fa fa-lg fa-caret-down ml-1",
          style: {
            transform: "rotate(".concat(keyMap[key].dir === 1 ? 180 : 0, "deg)")
          }
        }));
      }))), /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (row, i) {
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: i
        }, keys.map(function (key) {
          return /*#__PURE__*/_react["default"].createElement("td", {
            key: key
          }, row[key]);
        }));
      })))));
    }
  }]);

  return AvlTable;
}(_react["default"].Component);

exports["default"] = AvlTable;

_defineProperty(AvlTable, "defaultProps", {
  data: [],
  keys: [],
  rowsPerPage: 10,
  pageSpread: 2,
  downloadedFileName: "data.csv",
  title: "",
  showHelp: false
});

var DivContainer = _styledComponents["default"].div(_templateObject());

var TableContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.theme.scrollBar;
});

var TH = _styledComponents["default"].th(_templateObject3());

var Button = _styledComponents["default"].button(_templateObject4(), function (props) {
  return props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnColor;
}, function (props) {
  return props.theme.primaryBtnBgdHover;
}, function (props) {
  return props.theme.primaryBtnDisabled;
}, function (props) {
  return props.theme.primaryBtnBgdHover;
}, function (props) {
  return props.theme.primaryBtnActColor;
}, function (props) {
  return props.theme.sidePanelHeaderBg;
}, function (props) {
  return props.theme.textColor;
});

var _NavigationBar = _styledComponents["default"].div(_templateObject5());

var getPageSpread = function getPageSpread(page, maxPage, pageSpread) {
  var low = page - pageSpread,
      high = page + pageSpread;

  if (low < 0) {
    high += -low;
    low = 0;
  }

  if (high > maxPage) {
    low -= high - maxPage;
    high = maxPage;
  }

  return d3array.range(Math.max(0, low), Math.min(maxPage, high) + 1);
};

var numberFormat = (0, _d3Format.format)(",d");

var _FilterItem = _styledComponents["default"].div(_templateObject6(), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var FilterItem = function FilterItem(_ref6) {
  var display = _ref6.display,
      remove = _ref6.remove;
  return /*#__PURE__*/_react["default"].createElement(_FilterItem, null, /*#__PURE__*/_react["default"].createElement("div", null, display), /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: remove
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-times"
  })));
};

var NavigationBar = function NavigationBar(_ref7) {
  var prevPage = _ref7.prevPage,
      nextPage = _ref7.nextPage,
      page = _ref7.page,
      maxPage = _ref7.maxPage,
      setPage = _ref7.setPage,
      length = _ref7.length,
      searchKeys = _ref7.searchKeys,
      searchKey = _ref7.searchKey,
      setSearchKey = _ref7.setSearchKey,
      setSearchString = _ref7.setSearchString,
      searchString = _ref7.searchString,
      rowsPerPage = _ref7.rowsPerPage,
      pageSpread = _ref7.pageSpread,
      addFilter = _ref7.addFilter,
      removeFilter = _ref7.removeFilter,
      filters = _ref7.filters,
      downloadFiltered = _ref7.downloadFiltered,
      downloadUnfiltered = _ref7.downloadUnfiltered,
      title = _ref7.title,
      showHelp = _ref7.showHelp;
  return /*#__PURE__*/_react["default"].createElement(_NavigationBar, null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "23px"
    }
  }, title), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: downloadFiltered
  }, "Download Filtered Data"), /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: downloadUnfiltered,
    style: {
      marginLeft: "5px"
    }
  }, "Download Unfiltered Data"), !showHelp ? null : /*#__PURE__*/_react["default"].createElement(Button, {
    style: {
      marginLeft: "5px"
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-question"
  }), /*#__PURE__*/_react["default"].createElement(TableHelp, null)))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "5px"
    }
  }, /*#__PURE__*/_react["default"].createElement("form", {
    style: {
      display: "flex",
      width: "100%"
    },
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      searchKey && searchString && addFilter();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "40%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    placeholder: "Select a filter key...",
    selectedItems: searchKey,
    multiSelect: false,
    searchable: false,
    displayOption: function displayOption(d) {
      return d;
    },
    getOptionValue: function getOptionValue(d) {
      return d;
    },
    onChange: setSearchKey,
    options: searchKeys
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "40%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
    type: "text",
    value: searchString,
    disabled: !Boolean(searchKey),
    onChange: function onChange(_ref8) {
      var value = _ref8.target.value;
      return setSearchString(value);
    },
    placeholder: "filter..."
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "20%",
      display: "flex"
    }
  }, /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: addFilter,
    style: {
      height: "100%",
      width: "100%"
    },
    disabled: !searchKey || !searchString
  }, "Add Filter")))), !filters.length ? null : /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex"
    }
  }, filters.map(function (f, i) {
    return /*#__PURE__*/_react["default"].createElement(FilterItem, {
      key: f.id,
      display: f.display,
      remove: function remove() {
        return removeFilter(f.id);
      }
    });
  })), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "5px"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", null, "Displaying: ", numberFormat(Math.min(page * rowsPerPage + 1, length)), " - ", numberFormat(Math.min(page * rowsPerPage + rowsPerPage, length)), " of ", numberFormat(length)), /*#__PURE__*/_react["default"].createElement("div", null, "Page: ", numberFormat(page + 1), " of ", numberFormat(maxPage + 1))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: function onClick() {
      return setPage(0);
    },
    disabled: page === 0
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-chevron-left"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-chevron-left"
  })), /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: prevPage,
    disabled: page === 0
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-chevron-left"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "middle"
  }, getPageSpread(page, maxPage, pageSpread).map(function (p) {
    return /*#__PURE__*/_react["default"].createElement(Button, {
      key: p,
      disabled: p === page,
      className: p === page ? "active" : "",
      onClick: function onClick() {
        return setPage(p);
      }
    }, numberFormat(p + 1));
  })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: nextPage,
    disabled: page === maxPage
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-chevron-right"
  })), /*#__PURE__*/_react["default"].createElement(Button, {
    onClick: function onClick() {
      return setPage(maxPage);
    },
    disabled: page === maxPage
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-chevron-right"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "fa fa-chevron-right"
  })))));
};

var TableHelp = function TableHelp() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "button-dropdown"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: "1rem"
    }
  }, "Search Commands"), /*#__PURE__*/_react["default"].createElement("div", null, "All search commands must adhere to the following pattern:"), /*#__PURE__*/_react["default"].createElement("div", null, ':: command value'), /*#__PURE__*/_react["default"].createElement("div", null, "Where command is one of the following:"), /*#__PURE__*/_react["default"].createElement(TableHelpTable, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Command"), /*#__PURE__*/_react["default"].createElement("th", null, "Description"), /*#__PURE__*/_react["default"].createElement("th", null, "Value"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: =='), /*#__PURE__*/_react["default"].createElement("td", null, "(equal to)"), /*#__PURE__*/_react["default"].createElement("td", null, "Number / String")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: !='), /*#__PURE__*/_react["default"].createElement("td", null, "(not equal to)"), /*#__PURE__*/_react["default"].createElement("td", null, "Number / String")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: >'), /*#__PURE__*/_react["default"].createElement("td", null, "(greater than)"), /*#__PURE__*/_react["default"].createElement("td", null, "Number / String")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: >='), /*#__PURE__*/_react["default"].createElement("td", null, "(greater than or equal to)"), /*#__PURE__*/_react["default"].createElement("td", null, "Number")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: <'), /*#__PURE__*/_react["default"].createElement("td", null, "(less than)"), /*#__PURE__*/_react["default"].createElement("td", null, "Number / String")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: <='), /*#__PURE__*/_react["default"].createElement("td", null, "(less than or equal to)"), /*#__PURE__*/_react["default"].createElement("td", null, "Number")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: in'), /*#__PURE__*/_react["default"].createElement("td", null, "(value bounds)"), /*#__PURE__*/_react["default"].createElement("td", null, '[( Number, Number )]')))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      fontSize: "1rem",
      marginTop: "5px"
    }
  }, "Examples:"), /*#__PURE__*/_react["default"].createElement(TableHelpTable, null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Command"), /*#__PURE__*/_react["default"].createElement("th", null, "Result"))), /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: == 60'), /*#__PURE__*/_react["default"].createElement("td", null, "All data with selected key that has a value equal to 60")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: > 70'), /*#__PURE__*/_react["default"].createElement("td", null, "All data with selected key that has a value greated than 70")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: <= 90'), /*#__PURE__*/_react["default"].createElement("td", null, "All data with selected key that has a value less than or equal to 90")), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: in [50, 80]'), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", null, "All data with selected key that has a value greater than or equal to 50"), /*#__PURE__*/_react["default"].createElement("div", null, "and all data with selected key that has a value less than or equal to 80"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: in (50, 80)'), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", null, "All data with selected key that has a value greater than 50"), /*#__PURE__*/_react["default"].createElement("div", null, "and all data with selected key that has a value less than 80"))), /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, ':: in [50, 80)'), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", null, "All data with selected key that has a value greater than or equal to 50"), /*#__PURE__*/_react["default"].createElement("div", null, "and all data with selected key that has a value less than 80"))))));
};

var TableHelpTable = _styledComponents["default"].table(_templateObject7());
