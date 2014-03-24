'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u0f66\u0f94\u0f0b\u0f51\u0fb2\u0f7c\u0f0b",
      "\u0f55\u0fb1\u0f72\u0f0b\u0f51\u0fb2\u0f7c\u0f0b"
    ],
    "DAY": [
      "\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f67\u0fb3\u0f42\u0f0b\u0f54\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0f44\u0f66\u0f0b",
      "\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b"
    ],
    "MONTH": [
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f66\u0f74\u0f58\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54\u0f0b"
    ],
    "SHORTDAY": [
      "\u0f49\u0f72\u0f0b\u0f58\u0f0b",
      "\u0f5f\u0fb3\u0f0b\u0f56\u0f0b",
      "\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b",
      "\u0f67\u0fb3\u0f42\u0f0b\u0f54\u0f0b",
      "\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74\u0f0b",
      "\u0f66\u0f44\u0f66\u0f0b",
      "\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b"
    ],
    "SHORTMONTH": [
      "\u0f5f\u0fb3\u0f0b\u0f21",
      "\u0f5f\u0fb3\u0f0b\u0f22",
      "\u0f5f\u0fb3\u0f0b\u0f23",
      "\u0f5f\u0fb3\u0f0b\u0f24",
      "\u0f5f\u0fb3\u0f0b\u0f25",
      "\u0f5f\u0fb3\u0f0b\u0f26",
      "\u0f5f\u0fb3\u0f0b\u0f27",
      "\u0f5f\u0fb3\u0f0b\u0f28",
      "\u0f5f\u0fb3\u0f0b\u0f29",
      "\u0f5f\u0fb3\u0f0b\u0f21\u0f20",
      "\u0f5f\u0fb3\u0f0b\u0f21\u0f21",
      "\u0f5f\u0fb3\u0f0b\u0f21\u0f22"
    ],
    "fullDate": "EEEE, y MMMM dd",
    "longDate": "\u0f66\u0fa6\u0fb1\u0f72\u0f0b\u0f63\u0f7c\u0f0by MMMM\u0f60\u0f72\u0f0b\u0f59\u0f7a\u0f66\u0f0bd\u0f51",
    "medium": "y \u0f63\u0f7c\u0f0b\u0f60\u0f72\u0f0bMMM\u0f59\u0f7a\u0f66\u0f0bd HH:mm:ss",
    "mediumDate": "y \u0f63\u0f7c\u0f0b\u0f60\u0f72\u0f0bMMM\u0f59\u0f7a\u0f66\u0f0bd",
    "mediumTime": "HH:mm:ss",
    "short": "yyyy-MM-dd HH:mm",
    "shortDate": "yyyy-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20b9",
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
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "bo-in",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);