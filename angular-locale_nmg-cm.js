'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "man\u00e1",
      "kug\u00fa"
    ],
    "DAY": [
      "s\u0254\u0301nd\u0254",
      "m\u0254\u0301nd\u0254",
      "s\u0254\u0301nd\u0254 maf\u00fa m\u00e1ba",
      "s\u0254\u0301nd\u0254 maf\u00fa m\u00e1lal",
      "s\u0254\u0301nd\u0254 maf\u00fa m\u00e1na",
      "mab\u00e1g\u00e1 m\u00e1 sukul",
      "s\u00e1sadi"
    ],
    "MONTH": [
      "ngw\u025bn mat\u00e1hra",
      "ngw\u025bn \u0144mba",
      "ngw\u025bn \u0144lal",
      "ngw\u025bn \u0144na",
      "ngw\u025bn \u0144tan",
      "ngw\u025bn \u0144tu\u00f3",
      "ngw\u025bn h\u025bmbu\u025br\u00ed",
      "ngw\u025bn l\u0254mbi",
      "ngw\u025bn r\u025bbvu\u00e2",
      "ngw\u025bn wum",
      "ngw\u025bn wum nav\u016dr",
      "kr\u00edsimin"
    ],
    "SHORTDAY": [
      "s\u0254\u0301n",
      "m\u0254\u0301n",
      "smb",
      "sml",
      "smn",
      "mbs",
      "sas"
    ],
    "SHORTMONTH": [
      "ng1",
      "ng2",
      "ng3",
      "ng4",
      "ng5",
      "ng6",
      "ng7",
      "ng8",
      "ng9",
      "ng10",
      "ng11",
      "kris"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yyyy HH:mm",
    "shortDate": "d/M/yyyy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "FCFA",
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
  "id": "nmg-cm",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);