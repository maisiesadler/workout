(function () {
    var data = [];
    data.push (workout.addMovement("DL", "Weights"));
})();

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    var data = workout.getMovements();

    var movementView = "views/movement.html";

    $scope.movements = data;

    $scope.startNew = function(){
        $scope.workout = workout.createWorkout($scope.date);
    }

    $scope.add = function(item){
        if ($scope.workout){
            var section = workout.createWeightsSection(item, item.defaultWeight);
            workout.addSection($scope.workout, section);
        }
    };

    $scope.saveMovements = function(){
        workout.setMovements($scope.movements);
        $scope.editMovements = false;
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

    $scope.removeWorkoutFromListAtIndex = function(index) {
        $scope.workouts.removeAt(index);
    };

    $scope.removeMovement = function(index) {
        $scope.movements.removeAt(index);
    };

    $scope.addMovement = function() {
        $scope.movements.push(workout.addBlankMovement());
    };

    $scope.viewWorkoutList = function(){
        $scope.workouts = workout.getWorkouts();
    }

    $scope.saveWorkoutList = function(){
        workout.setWorkouts($scope.workouts);
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