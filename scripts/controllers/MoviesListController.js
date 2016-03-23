angular.module("moviedb").controller("MoviesListController", 
    ["$scope", "$log", "MovieService", "URL", "paths", 
    function ($scope, $log, MovieService, URL, paths) {

        // Scope init
        $scope.uiState = 'blank';
        $scope.model = [];
        $scope.getMovieDetailURL = function (movie) {
            return URL.resolve(paths.movieDetail, { id: movie.id});
        }

        // Controller start
        $scope.uiState = 'loading';
        MovieService.getMovies().then(
            // promesa resuelta
            function(data){
                $log.log("SUCCESS", data);
                $scope.model = data;
                if ($scope.model.length == 0) {
                    $scope.uiState = 'blank';
                } else {
                    $scope.uiState = 'ideal';
                }
            },

            // promesa rechazada
            function(data){
                $log.error("ERROR", data);
                $scope.uiState = 'error';
            }
        );
    }]
);