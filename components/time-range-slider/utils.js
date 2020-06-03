"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTimeWidgetTitleFormatter = getTimeWidgetTitleFormatter;
exports.preciseRound = preciseRound;
exports.getRoundingDecimalFromStep = getRoundingDecimalFromStep;
exports.roundValToStep = roundValToStep;
exports.getTimeWidgetHintFormatter = getTimeWidgetHintFormatter;
exports.BASE_SPEED = void 0;
var durationSecond = 1000;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationYear = durationDay * 365;
var BASE_SPEED = 600;
exports.BASE_SPEED = BASE_SPEED;

function getTimeWidgetTitleFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  console.log("<getTimeWidgetTitleFormatter>", domain, diff);
  return diff > durationYear ? 'MM/DD/YY' : diff > durationWeek ? 'MM/DD/YY' : diff > durationDay ? 'MM/DD hha' : 'MM/DD hh:mma';
}

function preciseRound(num, decimals) {
  var t = Math.pow(10, decimals);
  return (Math.round(num * t + (decimals > 0 ? 1 : 0) * (Math.sign(num) * (10 / Math.pow(100, decimals)))) / t).toFixed(decimals);
}

function getRoundingDecimalFromStep(step) {
  var splitZero = step.toString().split('.');

  if (splitZero.length === 1) {
    return 0;
  }

  return splitZero[1].length;
}

function roundValToStep(minValue, step, val) {
  if (isNaN(step)) {
    return val;
  }

  var decimal = getRoundingDecimalFromStep(step);
  var steps = Math.floor((val - minValue) / step);
  var remain = val - (steps * step + minValue); // has to round because javascript turns 0.1 into 0.9999999999999987

  remain = Number(preciseRound(remain, 8));
  var closest;

  if (remain === 0) {
    closest = val;
  } else if (remain < step / 2) {
    closest = steps * step + minValue;
  } else {
    closest = (steps + 1) * step + minValue;
  } // precise round return a string rounded to the defined decimal


  var rounded = preciseRound(closest, decimal);
  return Number(rounded);
}

function getTimeWidgetHintFormatter(domain) {
  if (!Array.isArray(domain)) {
    return null;
  }

  var diff = domain[1] - domain[0];
  return diff > durationYear ? 'MM/DD/YY' : diff > durationWeek ? 'MM/DD' : diff > durationDay ? 'MM/DD hha' : diff > durationHour ? 'hh:mma' : 'hh:mm:ssa';
}
