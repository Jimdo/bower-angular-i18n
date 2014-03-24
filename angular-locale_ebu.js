'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "KI",
      "UT"
    ],
    "DAY": [
      "Kiumia",
      "Njumatatu",
      "Njumaine",
      "Njumatano",
      "Aramithi",
      "Njumaa",
      "NJumamothii"
    ],
    "MONTH": [
      "Mweri wa mbere",
      "Mweri wa ka\u0129ri",
      "Mweri wa kathat\u0169",
      "Mweri wa kana",
      "Mweri wa gatano",
      "Mweri wa gatantat\u0169",
      "Mweri wa m\u0169gwanja",
      "Mweri wa kanana",
      "Mweri wa kenda",
      "Mweri wa ik\u0169mi",
      "Mweri wa ik\u0169mi na \u0169mwe",
      "Mweri wa ik\u0169mi na Ka\u0129r\u0129"
    ],
    "SHORTDAY": [
      "Kma",
      "Tat",
      "Ine",
      "Tan",
      "Arm",
      "Maa",
      "NMM"
    ],
    "SHORTMONTH": [
      "Mbe",
      "Kai",
      "Kat",
      "Kan",
      "Gat",
      "Gan",
      "Mug",
      "Knn",
      "Ken",
      "Iku",
      "Imw",
      "Igi"
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
  "id": "ebu",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);