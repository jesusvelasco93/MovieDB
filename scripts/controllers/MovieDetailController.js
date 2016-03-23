angular.module("moviedb").controller("MovieDetailController",
    ["$scope", "$routeParams", "MovieService", 
    function ($scope, $routeParams, MovieService){
                // Scope init
        $scope.uiState = 'loading';
    }]
);