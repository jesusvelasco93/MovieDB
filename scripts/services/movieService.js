angular.module("moviedb").service("MovieService", 
    ["$http", "$q", "apiPaths", "URL", function ($http, $q, apiPaths, URL) {

        this.apiRequest = function(url){

            // crear el objeto diferido
            var deferred = $q.defer();

            //hacer el trabajo asíncrono
            $http.get(url).then(
                // peticion OK
                function(response){
                    //resolver la promesa
                    deferred.resolve(response.data);
                },
                // peticion KO
                function(response){
                    //rechazar la promesa
                    deferred.reject(response.data);
                }
            );
            //devolver la promesa
            return deferred.promise;
        };

        this.getMovies = function() {

            return this.apiRequest(apiPaths.movies);

        };

        this.getMovie = function(movieID) {
            var url = URL.resolve(apiPaths.movieDetail, { id: movieID });
            return this.apiRequest(url);

        };
    }]
);