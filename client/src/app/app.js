(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl'
          },
          'footer': {
            templateUrl: 'src/common/footer.tpl.html',
            controller: 'FooterCtrl'
          }
        }
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl laoded!');
  }

  function LineCtrl($scope, $http) {
    $scope.ticker = "";
    $scope.currentStock = "Stock name will show up here, search for stock to change";
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A'];
    $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
    ];
    $scope.loadData = function(ticker) {
      console.log("Searching for " + ticker);
      var url = "https://www.quandl.com/api/v3/datasets/WIKI/" + ticker + ".json?column_index=4&start_date=2016-01-01&end_date=2016-12-01&collapse=monthly&transform=diff&api_key=mSjmVxD7fpFDXBjUsYtT"
      $http.get(url).then(function(res) {
        $scope.currentStock = res.data.dataset.name;
        $scope.labels = [];
        $scope.data = [];
        var i = 0;
        for (i = 0; i < res.data.dataset.data.length; i++) {
          $scope.labels.push(res.data.dataset.data[i][0]);
          $scope.data.push(res.data.dataset.data[i][1]);
        }
        console.log(res);
      }, function (err) {
        console.log('Error: ' + err);
        alert("There was something wrong, please try again or check spelling of ticker");
      });
    };

    $scope.searchForStock = function() {
      console.log("Searching...");
      $scope.loadData($scope.ticker);
    };

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };

    $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
    $scope.options = {
      scales: {
        yAxes: [
            {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
            }
          ]
        }
      };
  }

  function ChatCtrl($scope,$http) {
    
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      'home',
      'getting-started',
      'common.header',
      'common.footer',
      'common.services.data',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates',
      'chart.js'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .controller('LineCtrl', LineCtrl)
    .controller('ChatCtrl', ChatCtrl)
    .value('version', '1.1.0');
})();
