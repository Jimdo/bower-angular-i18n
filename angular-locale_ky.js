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
      "\u0442\u04af\u0448\u043a\u04e9 \u0447\u0435\u0439\u0438\u043d\u043a\u0438",
      "\u0442\u04af\u0448\u0442\u04e9\u043d \u043a\u0438\u0439\u0438\u043d\u043a\u0438"
    ],
    "DAY": [
      "\u0416\u0435\u043a",
      "\u0414\u04af\u0439",
      "\u0428\u0435\u0439",
      "\u0428\u0430\u0440",
      "\u0411\u0435\u0439",
      "\u0416\u0443\u043c",
      "\u0418\u0448\u043c"
    ],
    "MONTH": [
      "\u044f\u043d\u0432\u0430\u0440\u044c",
      "\u0444\u0435\u0432\u0440\u0430\u043b\u044c",
      "\u043c\u0430\u0440\u0442",
      "\u0430\u043f\u0440\u0435\u043b\u044c",
      "\u043c\u0430\u0439",
      "\u0438\u044e\u043d\u044c",
      "\u0438\u044e\u043b\u044c",
      "\u0430\u0432\u0433\u0443\u0441\u0442",
      "\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c",
      "\u043e\u043a\u0442\u044f\u0431\u0440\u044c",
      "\u043d\u043e\u044f\u0431\u0440\u044c",
      "\u0434\u0435\u043a\u0430\u0431\u0440\u044c"
    ],
    "SHORTDAY": [
      "\u0416\u043a",
      "\u0414\u0448",
      "\u0428\u0435",
      "\u0428\u0430",
      "\u0411\u0448",
      "\u0416\u043c",
      "\u0418\u0448"
    ],
    "SHORTMONTH": [
      "\u044f\u043d\u0432.",
      "\u0444\u0435\u0432.",
      "\u043c\u0430\u0440.",
      "\u0430\u043f\u0440.",
      "\u043c\u0430\u0439",
      "\u0438\u044e\u043d.",
      "\u0438\u044e\u043b.",
      "\u0430\u0432\u0433.",
      "\u0441\u0435\u043d.",
      "\u043e\u043a\u0442.",
      "\u043d\u043e\u044f.",
      "\u0434\u0435\u043a."
    ],
    "fullDate": "EEEE, d-MMMM, y-'\u0436'.",
    "longDate": "d-MMMM, y-'\u0436'.",
    "medium": "dd.MM.y HH:mm:ss",
    "mediumDate": "dd.MM.y",
    "mediumTime": "HH:mm:ss",
    "short": "dd.MM.yy HH:mm",
    "shortDate": "dd.MM.yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "KGS",
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
  "id": "ky",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);