angular.module("moviedb").controller("AppController",
    ["$scope", function ($scope){


        // Model init
        $scope.model = {
            title: ""
        }

        // Scope event listeners
        $scope.$on("OnMenuChange", function(evt, data){
            $scope.model.title = data;
        });
    }]
);