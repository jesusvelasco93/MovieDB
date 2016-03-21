
// En el módulo moviedb, defino el controlador
angular.module("moviedb").controller("MenuController", 
    ["$scope", function($scope){


        // Scope init
        $scope.model = {
            selectedItem: "movies"
        };

        
    }]
);