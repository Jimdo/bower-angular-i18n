'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "Lahadi",
      "Litinin",
      "Talata",
      "Laraba",
      "Alhamis",
      "Jumma'a",
      "Asabar"
    ],
    "MONTH": [
      "Janairu",
      "Faburairu",
      "Maris",
      "Afirilu",
      "Mayu",
      "Yuni",
      "Yuli",
      "Agusta",
      "Satumba",
      "Oktoba",
      "Nuwamba",
      "Disamba"
    ],
    "SHORTDAY": [
      "Lh",
      "Li",
      "Ta",
      "Lr",
      "Al",
      "Ju",
      "As"
    ],
    "SHORTMONTH": [
      "Jan",
      "Fab",
      "Mar",
      "Afi",
      "May",
      "Yun",
      "Yul",
      "Agu",
      "Sat",
      "Okt",
      "Nuw",
      "Dis"
    ],
    "fullDate": "EEEE, d MMMM, y",
    "longDate": "d MMMM, y",
    "medium": "d MMM, y HH:mm:ss",
    "mediumDate": "d MMM, y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yy HH:mm",
    "shortDate": "d/M/yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "GHS",
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
  "id": "ha-latn-gh",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);