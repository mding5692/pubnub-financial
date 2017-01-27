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

  // Angular Controller for manipulating stock graph, uses Angular-Charts
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

  // Angularjs Controller for Chat application using Pubnub Storage & Playback
  function ChatCtrl($scope,$http, Pubnub) {
    $scope.msg = '';
    $scope.chatHistory = [];
    $scope.channel = "stockChatChannel";

    Pubnub.init({
      publish_key: 'pub-c-f5633e1b-f6e8-4364-9c90-a631f0778f73',
      subscribe_key: 'sub-c-bcc893ca-e431-11e6-8919-0619f8945a4f',
      ssl: true
    });

    Pubnub.history({
      channel: $scope.channel,
      callback: function(payload){ 
        console.log("History successfully fetched");
        var j = 0;
          for (j = 0; j < payload[0].length; j++) {
            $scope.chatHistory.push(payload[0][j]);
          }
          $scope.$apply();
        },
      count: 50, 
      reverse: false
    });

    $scope.sendMsg = function() {
      if (!$scope.msg) {
        alert("Error: Can not send empty message");
        return;
      } 

      Pubnub.publish({
              channel: $scope.channel,
              message: {
                  content: $scope.msg,
                  date: new Date()
              },
              callback: function(res) {
                  console.log(res);
              }
          });
          $scope.msg = '';
    }

    Pubnub.subscribe({
      channel: $scope.channel,
      triggerEvents: ['callback']
    }); 

    $scope.$on(Pubnub.getMessageEventNameFor($scope.channel), function (ngEvent, newMsg) {
      $scope.$apply(function () {
          $scope.chatHistory.push(newMsg)
      }); 
    });
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
      'chart.js',
      'pubnub.angular.service'
    ])
    .config(config)
    .controller('MainCtrl', MainCtrl)
    .controller('LineCtrl', LineCtrl)
    .controller('ChatCtrl', ChatCtrl)
    .value('version', '1.1.0');
})();
