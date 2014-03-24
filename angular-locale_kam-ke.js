'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u0128yakwakya",
      "\u0128yaw\u0129oo"
    ],
    "DAY": [
      "Wa kyumwa",
      "Wa kwamb\u0129l\u0129lya",
      "Wa kel\u0129",
      "Wa katat\u0169",
      "Wa kana",
      "Wa katano",
      "Wa thanthat\u0169"
    ],
    "MONTH": [
      "Mwai wa mbee",
      "Mwai wa kel\u0129",
      "Mwai wa katat\u0169",
      "Mwai wa kana",
      "Mwai wa katano",
      "Mwai wa thanthat\u0169",
      "Mwai wa muonza",
      "Mwai wa nyaanya",
      "Mwai wa kenda",
      "Mwai wa \u0129kumi",
      "Mwai wa \u0129kumi na \u0129mwe",
      "Mwai wa \u0129kumi na il\u0129"
    ],
    "SHORTDAY": [
      "Wky",
      "Wkw",
      "Wkl",
      "Wt\u0169",
      "Wkn",
      "Wtn",
      "Wth"
    ],
    "SHORTMONTH": [
      "Mbe",
      "Kel",
      "Kt\u0169",
      "Kan",
      "Ktn",
      "Tha",
      "Moo",
      "Nya",
      "Knd",
      "\u0128ku",
      "\u0128km",
      "\u0128kl"
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "dd/MM/yyyy h:mm a",
    "shortDate": "dd/MM/yyyy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Ksh",
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
  "id": "kam-ke",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);