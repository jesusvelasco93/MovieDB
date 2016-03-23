angular.module("moviedb").service("MovieService", 
    ["$http", "$q", function ($http, $q) {

        this.getMovies = function() {

            // crear el objeto diferido
            var deferred = $q.defer();

            //hacer el trabajo asíncrono
            $http.get('/api/movies/').then(
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
    }]
);