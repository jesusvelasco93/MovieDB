angular.module("moviedb").directive("badwords", function(){
    return {
        require: "ngModel",
        link: function($scope, elem, attrs, cntrl){
            var badwords = ["fuck", "shit"];
            // console.log("badwords link", arguments);
            cntrl.$validators.badwords = function(modelValue, viewValue){
                // console.log("badwords", modelValue, viewValue);
                var rawWords = modelValue || "";
                var words = rawWords.split(" ");
                for (var i in badwords){
                    var badword = badwords[i];
                    if (words.indexOf(badword) >= 0){
                        cntrl.badword = badword;
                        return false;
                    }
                }
                cntrl.badword = "";
                return true;
            }
        }
    };
});