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
      "\u0f66\u0f94\u0f0b\u0f46\u0f0b",
      "\u0f55\u0fb1\u0f72\u0f0b\u0f46\u0f0b"
    ],
    "DAY": [
      "\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b"
    ],
    "MONTH": [
      "\u0f5f\u0fb3\u0f0b\u0f51\u0f44\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f63\u0f94\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54\u0f0b"
    ],
    "SHORTDAY": [
      "\u0f5f\u0fb3\u0f0b",
      "\u0f58\u0f72\u0f62\u0f0b",
      "\u0f63\u0fb7\u0f42\u0f0b",
      "\u0f55\u0f74\u0f62\u0f0b",
      "\u0f66\u0f44\u0f66\u0f0b",
      "\u0f66\u0fa4\u0f7a\u0f53\u0f0b",
      "\u0f49\u0f72\u0f0b"
    ],
    "SHORTMONTH": [
      "\u0f21",
      "\u0f22",
      "\u0f23",
      "\u0f24",
      "\u0f25",
      "\u0f26",
      "\u0f27",
      "\u0f28",
      "\u0f29",
      "\u0f21\u0f20",
      "\u0f21\u0f21",
      "12"
    ],
    "fullDate": "EEEE, \u0f66\u0fa4\u0fb1\u0f72\u0f0b\u0f63\u0f7c\u0f0by MMMM \u0f5a\u0f7a\u0f66\u0f0bdd",
    "longDate": "\u0f66\u0fa4\u0fb1\u0f72\u0f0b\u0f63\u0f7c\u0f0by MMMM \u0f5a\u0f7a\u0f66\u0f0b dd",
    "medium": "\u0f66\u0fa4\u0fb1\u0f72\u0f0b\u0f63\u0f7c\u0f0by \u0f5f\u0fb3\u0f0bMMM \u0f5a\u0f7a\u0f66\u0f0bdd \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0bh:mm:ss a",
    "mediumDate": "\u0f66\u0fa4\u0fb1\u0f72\u0f0b\u0f63\u0f7c\u0f0by \u0f5f\u0fb3\u0f0bMMM \u0f5a\u0f7a\u0f66\u0f0bdd",
    "mediumTime": "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0bh:mm:ss a",
    "short": "y-MM-dd \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b h \u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b mm a",
    "shortDate": "y-MM-dd",
    "shortTime": "\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b h \u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Nu.",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 2,
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
        "gSize": 2,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "dz-bt",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);