var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.startNew = function() {
        $scope.workout = workout.createWorkout($scope.date);
    };

    $scope.updateMode = function (mode) {
        $scope.appmode = mode;
        $scope.$emit('toggleMenu');
    };

    $scope.addMovToWorkout = function(movement) {
        if ($scope.workout) {
            var section = workout.createWeightsSection(movement, movement.defaultWeight);
            workout.addSection($scope.workout, section);
        }
    };

    $scope.addMovToSelectedComb = function(movement) {
        if ($scope.selectedCombination) {
            var section = workout.createWeightsSection(movement, movement.defaultWeight);
            workout.addSection($scope.selectedCombination, section);
        }
    };

    $scope.saveWorkouts = function(){
        workout.addWorkoutToWorkouts($scope.workout);
        $scope.workout = {};
        $scope.editMovements = false;
    };

    var isValid = function(combination){
        return combination.name  && combination.sections && combination.sections.length > 0;
    }

    $scope.saveCombination = function () {
        if (isValid($scope.selectedCombination)) {
            var combs = $scope.getSavedCombinations() || [];
            combs.push($scope.selectedCombination);
            $scope.savedCombinations = combs;
            $scope.setSavedCombinations();
        }
    };

    $scope.getSavedCombinations = function (){
        var combs = workout.getCombinations();
        $scope.savedCombinations = combs;
        return combs;
    };

    $scope.setSavedCombinations = function (){
        workout.setCombinations($scope.savedCombinations);
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

    $scope.removeSectionFromSelectedCombination = function(index) {
        $scope.selectedCombination.sections.removeAt(index);
    };

    $scope.selectCombination = function(index){
        $scope.selectedCombination = $scope.savedCombinations[index];
    };

    $scope.createNewCombination = function(){
	    $scope.selectedCombination = workout.createNewCombination();

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