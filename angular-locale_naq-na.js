'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u01c1goagas",
      "\u01c3uias"
    ],
    "DAY": [
      "Sontaxtsees",
      "Mantaxtsees",
      "Denstaxtsees",
      "Wunstaxtsees",
      "Dondertaxtsees",
      "Fraitaxtsees",
      "Satertaxtsees"
    ],
    "MONTH": [
      "\u01c3Khanni",
      "\u01c3Khan\u01c0g\u00f4ab",
      "\u01c0Khuu\u01c1kh\u00e2b",
      "\u01c3H\u00f4a\u01c2khaib",
      "\u01c3Khaits\u00e2b",
      "Gama\u01c0aeb",
      "\u01c2Khoesaob",
      "Ao\u01c1khuum\u00fb\u01c1kh\u00e2b",
      "Tara\u01c0khuum\u00fb\u01c1kh\u00e2b",
      "\u01c2N\u00fb\u01c1n\u00e2iseb",
      "\u01c0Hoo\u01c2gaeb",
      "H\u00f4asore\u01c1kh\u00e2b"
    ],
    "SHORTDAY": [
      "Son",
      "Ma",
      "De",
      "Wu",
      "Do",
      "Fr",
      "Sat"
    ],
    "SHORTMONTH": [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
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
  "id": "naq-na",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);