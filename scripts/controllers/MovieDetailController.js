angular.module("moviedb").controller("MovieDetailController",
    ["$scope", "$routeParams", "$location", "MovieService", "paths", 
    function ($scope, $routeParams, $location, MovieService, paths){
        
        // Scope init
        $scope.model = {};
        $scope.uiState = 'loading';

        // Control init
        MovieService.getMovie($routeParams.id).then(

            // película encontrada
            function(movie){
                $scope.model = movie;
                $scope.uiState = 'ideal';
            },

            // película rechazada
            function(error){

                $location.url(paths.notFound);
            }

        );
    }]
);