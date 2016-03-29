angular.module("moviedb").controller("MovieFormController",
    ["$scope", "APIClient", function ($scope, APIClient){
        // Scope init
        $scope.model = {};
        $scope.successMessage = null;
        $scope.errorMessage = null;


        // Scope methods
        $scope.saveMovie = function(){
            APIClient.createMovie($scope.model).then(
                function (movie){
                    $scope.successMessage = "Movie saved! <a href=\"#/movies/" + movie.id + "\">View new movie detail</a>"; 
                    // alert("PELICULA GUARDADA CON EXITO.");
                    // console.log("successMessage", $scope.successMessage);
                    $scope.model = {};
                    $scope.movieForm.$setPristine();
                    console.log("PELICULA GUARDADA", movie);
                },
                function (error){
                    $scope.errorMessage = "Fatal error. The end is near.";
                    console.log("ERROR AL GUARDAR PELICULA", error);
                }
            )
        };
    }]
);