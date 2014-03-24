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
      "Sande",
      "Orwokubanza",
      "Orwakabiri",
      "Orwakashatu",
      "Orwakana",
      "Orwakataano",
      "Orwamukaaga"
    ],
    "MONTH": [
      "Okwokubanza",
      "Okwakabiri",
      "Okwakashatu",
      "Okwakana",
      "Okwakataana",
      "Okwamukaaga",
      "Okwamushanju",
      "Okwamunaana",
      "Okwamwenda",
      "Okwaikumi",
      "Okwaikumi na kumwe",
      "Okwaikumi na ibiri"
    ],
    "SHORTDAY": [
      "SAN",
      "ORK",
      "OKB",
      "OKS",
      "OKN",
      "OKT",
      "OMK"
    ],
    "SHORTMONTH": [
      "KBZ",
      "KBR",
      "KST",
      "KKN",
      "KTN",
      "KMK",
      "KMS",
      "KMN",
      "KMW",
      "KKM",
      "KNK",
      "KNB"
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
    "CURRENCY_SYM": "UGX",
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
  "id": "nyn",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);