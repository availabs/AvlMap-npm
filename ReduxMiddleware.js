"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unregister = exports.register = exports.AvlInTheMiddle = void 0;

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

var _lodash = _interopRequireDefault(require("lodash.get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var LISTENERS = new Map();

var AvlInTheMiddle = function AvlInTheMiddle(store) {
  return function (next) {
    return function (action) {
      var result = next(action),
          state = store.getState();

      if (LISTENERS.has(action.type)) {
        LISTENERS.get(action.type).forEach(function (_ref) {
          var comp = _ref.comp,
              path = _ref.path;
          var data = path.length ? (0, _lodash.default)(state, path, {}) : state;
          comp.receiveMessage.call(comp, action.type, data);
        });
      }

      return result;
    };
  };
};

exports.AvlInTheMiddle = AvlInTheMiddle;

var register = function register(comp, action) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (!LISTENERS.has(action)) {
    LISTENERS.set(action, []);
  }

  LISTENERS.get(action).push({
    comp: comp,
    path: path
  });
};

exports.register = register;

var unregister = function unregister(comp) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (action === null) {
    var _iterator = _createForOfIteratorHelper(LISTENERS.keys()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _action = _step.value;
        unregister(comp, _action);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else if (LISTENERS.has(action)) {
    var filtered = LISTENERS.get(action).filter(function (d) {
      return d.comp !== comp;
    });
    LISTENERS.set(action, filtered);
  }
};

exports.unregister = unregister;
