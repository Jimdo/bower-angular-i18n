'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u1796\u17d2\u179a\u17b9\u1780",
      "\u179b\u17d2\u1784\u17b6\u1785"
    ],
    "DAY": [
      "\u1790\u17d2\u1784\u17c3\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799",
      "\u200b\u1790\u17d2\u1784\u17c3\u1785\u17d0\u1793\u17d2\u1791",
      "\u1790\u17d2\u1784\u17c3\u17a2\u1784\u17d2\u1782\u17b6\u179a",
      "\u1790\u17d2\u1784\u17c3\u1796\u17bb\u1792",
      "\u1790\u17d2\u1784\u17c3\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd",
      "\u1790\u17d2\u1784\u17c3\u179f\u17bb\u1780\u17d2\u179a",
      "\u1790\u17d2\u1784\u17c3\u179f\u17c5\u179a\u17cd"
    ],
    "MONTH": [
      "\u1798\u1780\u179a\u17b6",
      "\u1780\u17bb\u1798\u17d2\u1797\u17c8",
      "\u1798\u17b7\u1793\u17b6",
      "\u1798\u17c1\u179f\u17b6",
      "\u17a7\u179f\u1797\u17b6",
      "\u1798\u17b7\u1790\u17bb\u1793\u17b6",
      "\u1780\u1780\u17d2\u1780\u178a\u17b6",
      "\u179f\u17b8\u17a0\u17b6",
      "\u1780\u1789\u17d2\u1789\u17b6",
      "\u178f\u17bb\u179b\u17b6",
      "\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",
      "\u1792\u17d2\u1793\u17bc"
    ],
    "SHORTDAY": [
      "\u17a2\u17b6",
      "\u1785",
      "\u17a2",
      "\u1796\u17bb",
      "\u1796\u17d2\u179a",
      "\u179f\u17bb",
      "\u179f"
    ],
    "SHORTMONTH": [
      "\u17e1",
      "\u17e2",
      "\u17e3",
      "\u17e4",
      "\u17e5",
      "\u17e6",
      "\u17e7",
      "\u17e8",
      "\u17e9",
      "\u17e1\u17e0",
      "\u17e1\u17e1",
      "\u17e1\u17e2"
    ],
    "fullDate": "EEEE \u1790\u17d2\u1784\u17c3 d \u1781\u17c2 MMMM \u1786\u17d2\u1793\u17b6\u17c6 y",
    "longDate": "d \u1781\u17c2 MMMM \u1786\u17d2\u1793\u17b6\u17c6 y",
    "medium": "d MMM y H:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "H:mm:ss",
    "short": "d/M/yyyy H:mm",
    "shortDate": "d/M/yyyy",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Riel",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
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
  "id": "km-kh",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);