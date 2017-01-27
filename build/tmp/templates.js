(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/footer.tpl.html",
    "<div class=\"pure-g\">\n" +
    "\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/header.tpl.html",
    "<div class=\"pure-menu pure-menu-open pure-menu-horizontal\">\n" +
    "  <a class=\"pure-menu-heading\" href=\"\">angular-kickstart <span app-version></span></a>\n" +
    "  <ul>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a href ui-sref=\"root.home\">{{ 'home' | uppercase }}</a>\n" +
    "    </li>\n" +
    "    <li ui-sref-active=\"pure-menu-selected\"><a href ui-sref=\"root.getting-started\">{{ 'Stocks and Chat' | uppercase }}</a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/getting-started/getting-started.tpl.html",
    "<div class=\"\" ng-controller=\"LineCtrl\">\n" +
    "	<div class=\"island3\">\n" +
    "		<h3>{{currentStock}}</h3>\n" +
    "	</div>\n" +
    "	<div class=\"island3\">\n" +
    "		<label>Please type in a valid stock ticker</label>\n" +
    "		<input type=\"text\" ng-model=\"ticker\" placeholder=\"stock ticker symbol\" />\n" +
    "		<button ng-click=\"searchForStock();\">Search</button>\n" +
    "	</div>\n" +
    "	<canvas id=\"line\" class=\"chart chart-line\" chart-data=\"data\"\n" +
    "	chart-labels=\"labels\" chart-series=\"series\" chart-options=\"options\"\n" +
    "	chart-dataset-override=\"datasetOverride\" chart-click=\"onClick\">\n" +
    "	</canvas>\n" +
    "</div>\n" +
    "<hr>\n" +
    "<div class=\"pure-g\" ng-controller=\"ChatCtrl\">\n" +
    "	<div class=\"pure-u-2-3\">\n" +
    "		<h2>Chat History</h2>\n" +
    "		<div ng-repeat=\"prevMsg in chatHistory\">\n" +
    "			<p>{{prevMsg.date}}</p>\n" +
    "			<p>{{prevMsg.content}}</p>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"pure-u-1-3\" style=\"margin-top: 4vh;\">\n" +
    "		<input type=\"text\" placeholder=\"Type msg here...\" ng-model=\"msg\"/>\n" +
    "		<button ng-click=\"sendMsg();\">Send</button>\n" +
    "	</div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/home/home.tpl.html",
    "<div class=\"pure-g\">\n" +
    "  <div class=\"island3 pure-u-1 pure-u-lg-2-3\">\n" +
    "    <h3 style=\"text-align: center;\">Discuss stocks as a group to see if it is a good investment and see stock information as a dashboard while you're discussing.</h3>\n" +
    "  </div>\n" +
    "  <div class=\"island3 pure-u-1 pure-u-lg-1-3\">\n" +
    "    <a href=\"https://github.com/mding5692/pubnub-financial\" class=\"pure-button button-xlarge button-expanded\">\n" +
    "        Download\n" +
    "      </a>\n" +
    "    <a href=\"https://github.com/mding5692/pubnub-financial#readme\" target=\"_blank\" class=\"pure-button button-xlarge button-expanded pure-button-primary\">\n" +
    "        Docs on GitHub\n" +
    "      </a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<hr/>\n" +
    "<div class=\"pure-g island\">\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <div class=\"text-center\">\n" +
    "      <img class=\"pure-img\" src=\"assets/images/stockChart.jpeg\">\n" +
    "    </div>\n" +
    "    <h3>Real-time stock information</h3>\n" +
    "    <p>Check out financial metrics about public companies\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <div class=\"text-center\">\n" +
    "      <img class=\"pure-img\" src=\"assets/images/chat.jpeg\">\n" +
    "    </div>\n" +
    "    <h3>Financial Chatroom</h3>\n" +
    "    <p>Talk about investing in stock among peers\n" +
    "    </p>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"pure-u-1 pure-u-lg-1-3 island\">\n" +
    "    <div class=\"text-center\">\n" +
    "      <img class=\"pure-img\" src=\"assets/images/investment.jpeg\">\n" +
    "    </div>\n" +
    "    <h3>Personal Finance</h3>\n" +
    "    <p>Be able to gather opinions and make a solid investment</p>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
})();
