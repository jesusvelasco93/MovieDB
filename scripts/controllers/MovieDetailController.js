angular.module("moviedb").controller("MovieDetailController",
    ["$scope", "$routeParams", "$location", "APIClient", "paths", 
    function ($scope, $routeParams, $location, APIClient, paths){
        
        // Scope init
        $scope.model = {};
        $scope.uiState = 'loading';

        // Control init
        $scope.$emit("ChangeTitle", "Loading...");
        APIClient.getMovie($routeParams.id).then(

            // película encontrada
            function(movie){
                $scope.model = movie;
                $scope.uiState = 'ideal';
                $scope.$emit("ChangeTitle", $scope.model.title);
            },

            // película rechazada
            function(error){

                // TODO error manager
                $location.url(paths.notFound);
            }

        );
    }]
);