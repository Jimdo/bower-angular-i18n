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
      "\u0642\u0628\u0644 \u062f\u0648\u067e\u06c1\u0631",
      "\u0628\u0639\u062f \u062f\u0648\u067e\u06c1\u0631"
    ],
    "DAY": [
      "\u0627\u062a\u0648\u0627\u0631",
      "\u0633\u0648\u0645\u0648\u0627\u0631",
      "\u0645\u0646\u06af\u0644",
      "\u0628\u062f\u06be",
      "\u062c\u0645\u0639\u0631\u0627\u062a",
      "\u062c\u0645\u0639\u06c1",
      "\u06c1\u0641\u062a\u06c1"
    ],
    "MONTH": [
      "\u062c\u0646\u0648\u0631\u06cc",
      "\u0641\u0631\u0648\u0631\u06cc",
      "\u0645\u0627\u0631\u0686",
      "\u0627\u067e\u0631\u06cc\u0644",
      "\u0645\u0626\u06cc",
      "\u062c\u0648\u0646",
      "\u062c\u0648\u0644\u0627\u0626\u06cc",
      "\u0627\u06af\u0633\u062a",
      "\u0633\u062a\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0645\u0628\u0631",
      "\u062f\u0633\u0645\u0628\u0631"
    ],
    "SHORTDAY": [
      "\u0627\u062a\u0648\u0627\u0631",
      "\u0633\u0648\u0645\u0648\u0627\u0631",
      "\u0645\u0646\u06af\u0644",
      "\u0628\u062f\u06be",
      "\u062c\u0645\u0639\u0631\u0627\u062a",
      "\u062c\u0645\u0639\u06c1",
      "\u06c1\u0641\u062a\u06c1"
    ],
    "SHORTMONTH": [
      "\u062c\u0646\u0648\u0631\u06cc",
      "\u0641\u0631\u0648\u0631\u06cc",
      "\u0645\u0627\u0631\u0686",
      "\u0627\u067e\u0631\u06cc\u0644",
      "\u0645\u0626\u06cc",
      "\u062c\u0648\u0646",
      "\u062c\u0648\u0644\u0627\u0626\u06cc",
      "\u0627\u06af\u0633\u062a",
      "\u0633\u062a\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0645\u0628\u0631",
      "\u062f\u0633\u0645\u0628\u0631"
    ],
    "fullDate": "EEEE\u060c d MMMM\u060c y",
    "longDate": "d MMMM\u060c y",
    "medium": "d MMM\u060c y h:mm:ss a",
    "mediumDate": "d MMM\u060c y",
    "mediumTime": "h:mm:ss a",
    "short": "d/M/yy h:mm a",
    "shortDate": "d/M/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Rs",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
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
        "negPre": "\u00a4-",
        "negSuf": "\u200e",
        "posPre": "\u00a4",
        "posSuf": "\u200e"
      }
    ]
  },
  "id": "ur",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);