'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var DECIMALS = function (n) {
  var str = n + '';
  var result = str.indexOf('.');
  return (result == -1) ? 0 : str.length - result - 1;
};
var GET_WT = function (v, f) {
  if (f === 0) {
    return {w: 0, t: 0};
  }

  while ((f % 10) === 0) {
    f /= 10;
    v--;
  }

  return {w: v, t: f};
};
var GET_VF = function (n, opt_precision) {
  var DEFAULT_DIGITS = 3;

  if (undefined === opt_precision) {
    var v = Math.min(DECIMALS(n), DEFAULT_DIGITS);
  } else {
    var v = opt_precision;
  }

  var base = Math.pow(10, v);
  var f = ((n * base) | 0) % base;

  return {v: v, f: f};
};
var PLURAL_CATEGORY = {"ZERO":"zero","ONE":"one","TWO":"two","FEW":"few","MANY":"many","OTHER":"other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "ned\u011ble",
      "pond\u011bl\u00ed",
      "\u00fater\u00fd",
      "st\u0159eda",
      "\u010dtvrtek",
      "p\u00e1tek",
      "sobota"
    ],
    "MONTH": [
      "ledna",
      "\u00fanora",
      "b\u0159ezna",
      "dubna",
      "kv\u011btna",
      "\u010dervna",
      "\u010dervence",
      "srpna",
      "z\u00e1\u0159\u00ed",
      "\u0159\u00edjna",
      "listopadu",
      "prosince"
    ],
    "SHORTDAY": [
      "ne",
      "po",
      "\u00fat",
      "st",
      "\u010dt",
      "p\u00e1",
      "so"
    ],
    "SHORTMONTH": [
      "led",
      "\u00fano",
      "b\u0159e",
      "dub",
      "kv\u011b",
      "\u010dvn",
      "\u010dvc",
      "srp",
      "z\u00e1\u0159",
      "\u0159\u00edj",
      "lis",
      "pro"
    ],
    "fullDate": "EEEE d. MMMM y",
    "longDate": "d. MMMM y",
    "medium": "d. M. y H:mm:ss",
    "mediumDate": "d. M. y",
    "mediumTime": "H:mm:ss",
    "short": "dd.MM.yy H:mm",
    "shortDate": "dd.MM.yy",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "K\u010d",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": "\u00a0",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "cs-cz",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  if (i >= 2 && i <= 4 && vf.v == 0) {    return PLURAL_CATEGORY.FEW;  }  if (vf.v != 0) {    return PLURAL_CATEGORY.MANY;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);