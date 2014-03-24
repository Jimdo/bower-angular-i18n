'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "kang'ama",
      "kingoto"
    ],
    "DAY": [
      "Ijumapili",
      "Ijumatatu",
      "Ijumanne",
      "Ijumatano",
      "Alhamisi",
      "Ijumaa",
      "Ijumamosi"
    ],
    "MONTH": [
      "Mweri wa kwanza",
      "Mweri wa kaili",
      "Mweri wa katatu",
      "Mweri wa kaana",
      "Mweri wa tanu",
      "Mweri wa sita",
      "Mweri wa saba",
      "Mweri wa nane",
      "Mweri wa tisa",
      "Mweri wa ikumi",
      "Mweri wa ikumi na moja",
      "Mweri wa ikumi na mbili"
    ],
    "SHORTDAY": [
      "Ijp",
      "Ijt",
      "Ijn",
      "Ijtn",
      "Alh",
      "Iju",
      "Ijm"
    ],
    "SHORTMONTH": [
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "M7",
      "M8",
      "M9",
      "M10",
      "M11",
      "M12"
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
    "CURRENCY_SYM": "TSh",
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
  "id": "rof",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);