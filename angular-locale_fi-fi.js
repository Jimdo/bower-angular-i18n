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
      "ap.",
      "ip."
    ],
    "DAY": [
      "sunnuntaina",
      "maanantaina",
      "tiistaina",
      "keskiviikkona",
      "torstaina",
      "perjantaina",
      "lauantaina"
    ],
    "MONTH": [
      "tammikuuta",
      "helmikuuta",
      "maaliskuuta",
      "huhtikuuta",
      "toukokuuta",
      "kes\u00e4kuuta",
      "hein\u00e4kuuta",
      "elokuuta",
      "syyskuuta",
      "lokakuuta",
      "marraskuuta",
      "joulukuuta"
    ],
    "SHORTDAY": [
      "su",
      "ma",
      "ti",
      "ke",
      "to",
      "pe",
      "la"
    ],
    "SHORTMONTH": [
      "tammikuuta",
      "helmikuuta",
      "maaliskuuta",
      "huhtikuuta",
      "toukokuuta",
      "kes\u00e4kuuta",
      "hein\u00e4kuuta",
      "elokuuta",
      "syyskuuta",
      "lokakuuta",
      "marraskuuta",
      "joulukuuta"
    ],
    "fullDate": "cccc d. MMMM y",
    "longDate": "d. MMMM y",
    "medium": "d.M.y H.mm.ss",
    "mediumDate": "d.M.y",
    "mediumTime": "H.mm.ss",
    "short": "d.M.y H.mm",
    "shortDate": "d.M.y",
    "shortTime": "H.mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20ac",
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
  "id": "fi-fi",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);