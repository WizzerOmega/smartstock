angular.module('smartstock.controller_chart', []) //<-- IMPORTANT: add chart.js to your module's dependency injection

.controller('StatCtrl', function($scope) { // Add a simple controller
  $scope.graph = {};                        // Empty graph object to hold the details for this graph
  $scope.graph.data = [                     // Add bar data, this will set your bars height in the graph
    //Awake
    [16, 15, 20, 12, 16, 12, 8],
    //Asleep
    [8, 9, 4, 12, 8, 12, 14]
  ];
  $scope.graph.labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];    // Add labels for the X-axis
  $scope.graph.series = ['Awake', 'Asleep'];  // Add information for the hover/touch effect

});