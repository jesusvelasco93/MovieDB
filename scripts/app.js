// Defino el módulo "moviedb"
angular.module("moviedb", ['ngRoute', "ngSanitize", "URL"]).config(
    ["$routeProvider", "paths", function( $routeProvider, paths){

        // Configuración de Route Provider
        $routeProvider.when(paths.movies, {
            templateUrl: 'views/MoviesList.html'
        }).when(paths.movieDetail, {
            templateUrl: 'views/MediaItemDetail.html',
            controller: 'MovieDetailController',
        }).when(paths.series, {
            templateUrl: 'views/SeriesList.html'
        }).when(paths.serieDetail, {
            templateUrl: 'views/MediaItemDetail.html',
            controller: 'SerieDetailController',
        }).when(paths.people, {
            templateUrl: 'views/PeopleList.html'
        }).when(paths.home, {
            redirectTo: paths.movies
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]
);