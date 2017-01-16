var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.startNew = function() {
        $scope.workout = workout.createWorkout($scope.date);
    };

    $scope.updateMode = function (mode) {
        $scope.appmode = mode;
        $scope.$emit('toggleMenu');
    };

    $scope.addMovToWorkout = function(movement){
        if ($scope.workout){
            var section = workout.createWeightsSection(movement, movement.defaultWeight);
            workout.addSection($scope.workout, section);
        }
    };

    $scope.saveWorkouts = function(){
        workout.addWorkoutToWorkouts($scope.workout);
        $scope.workout = {};
        $scope.editMovements = false;
    };

    $scope.clearWorkout = function(){
        clearWorkout();
    };

    var clearWorkout = function(){
        $scope.workout.sections = [];
    };

    $scope.setNow = function() {
        $scope.date = new Date();
    };

    $scope.displayDate = function(date){
        return helper.displayDate(date);
    };

    $scope.removeSectionFromWorkout = function(index) {
        $scope.workout.sections.removeAt(index);
    };

    $scope.auth = function () {
        gdocs.handleAuthClick();
    }
});


// addWos() = function(){
// var data = [];
//     data.push(workout.addMovement("Deadlift", "W"));
//     data.push(workout.addMovement("Dumbell Reverse Pull", "W"));
//     data.push(workout.addMovement("Kettlebell Swings", "W"));
//     data.push(workout.addMovement("Chin Up", "W"));
//     data.push(workout.addMovement("Lat Pull Downs", "W"));
//     data.push(workout.addMovement("Rowing", "W"));
//     workout.setMovements(data);

//     return data;
// }