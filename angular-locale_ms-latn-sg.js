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
      "PG",
      "PTG"
    ],
    "DAY": [
      "Ahad",
      "Isnin",
      "Selasa",
      "Rabu",
      "Khamis",
      "Jumaat",
      "Sabtu"
    ],
    "MONTH": [
      "Januari",
      "Februari",
      "Mac",
      "April",
      "Mei",
      "Jun",
      "Julai",
      "Ogos",
      "September",
      "Oktober",
      "November",
      "Disember"
    ],
    "SHORTDAY": [
      "Ahd",
      "Isn",
      "Sel",
      "Rab",
      "Kha",
      "Jum",
      "Sab"
    ],
    "SHORTMONTH": [
      "Jan",
      "Feb",
      "Mac",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ogo",
      "Sep",
      "Okt",
      "Nov",
      "Dis"
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "d/MM/yy h:mm a",
    "shortDate": "d/MM/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "$",
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
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "ms-latn-sg",
  "pluralCat": function (n, opt_precision) {  return PLURAL_CATEGORY.OTHER;}
});
}]);