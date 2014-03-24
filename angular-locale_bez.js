'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "pamilau",
      "pamunyi"
    ],
    "DAY": [
      "pa mulungu",
      "pa shahuviluha",
      "pa hivili",
      "pa hidatu",
      "pa hitayi",
      "pa hihanu",
      "pa shahulembela"
    ],
    "MONTH": [
      "pa mwedzi gwa hutala",
      "pa mwedzi gwa wuvili",
      "pa mwedzi gwa wudatu",
      "pa mwedzi gwa wutai",
      "pa mwedzi gwa wuhanu",
      "pa mwedzi gwa sita",
      "pa mwedzi gwa saba",
      "pa mwedzi gwa nane",
      "pa mwedzi gwa tisa",
      "pa mwedzi gwa kumi",
      "pa mwedzi gwa kumi na moja",
      "pa mwedzi gwa kumi na mbili"
    ],
    "SHORTDAY": [
      "Mul",
      "Vil",
      "Hiv",
      "Hid",
      "Hit",
      "Hih",
      "Lem"
    ],
    "SHORTMONTH": [
      "Hut",
      "Vil",
      "Dat",
      "Tai",
      "Han",
      "Sit",
      "Sab",
      "Nan",
      "Tis",
      "Kum",
      "Kmj",
      "Kmb"
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
        "negPre": "-",
        "negSuf": "\u00a4",
        "posPre": "",
        "posSuf": "\u00a4"
      }
    ]
  },
  "id": "bez",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);