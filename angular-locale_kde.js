'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Muhi",
      "Chilo"
    ],
    "DAY": [
      "Liduva lyapili",
      "Liduva lyatatu",
      "Liduva lyanchechi",
      "Liduva lyannyano",
      "Liduva lyannyano na linji",
      "Liduva lyannyano na mavili",
      "Liduva litandi"
    ],
    "MONTH": [
      "Mwedi Ntandi",
      "Mwedi wa Pili",
      "Mwedi wa Tatu",
      "Mwedi wa Nchechi",
      "Mwedi wa Nnyano",
      "Mwedi wa Nnyano na Umo",
      "Mwedi wa Nnyano na Mivili",
      "Mwedi wa Nnyano na Mitatu",
      "Mwedi wa Nnyano na Nchechi",
      "Mwedi wa Nnyano na Nnyano",
      "Mwedi wa Nnyano na Nnyano na U",
      "Mwedi wa Nnyano na Nnyano na M"
    ],
    "SHORTDAY": [
      "Ll2",
      "Ll3",
      "Ll4",
      "Ll5",
      "Ll6",
      "Ll7",
      "Ll1"
    ],
    "SHORTMONTH": [
      "Jan",
      "Feb",
      "Mac",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Okt",
      "Nov",
      "Des"
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
  "id": "kde",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);