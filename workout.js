workout = {
    addWeightsMovement: function(name, defaultWeight, increment){
        return {
            name: name,
            type: "W",
            defaultWeight: defaultWeight,
            increment: increment
        };
    },

    addCardioMovement: function(name, type, description){
        return {
            name: name,
            type: "C",
            description: description || ""
        };
    },

    addBlankMovement: function(){
        return this.addWeightsMovement("",50,2.5)
    },

    createWorkout: function(date){
        return {
            date: date,
            sections: [],
            notes: ""
        }  
    },

    addSection: function(workout, section){
        workout.sections.push(section);
        return workout;
    },

    createNewCombination: function(name){
        return {
            name: name,
            sections: []
        }
    },

    createWeightsSection: function (movement, weight, reps, sets) {
        return {
            movement: movement, 
            weight: weight,
            reps: reps  || 1,
            sets: sets || 1
        };
    },

    createCardioSection: function(movement, time, metres){
        return {
            movement:movement,
            time: time, 
            distance: metres
        };
    },

    addWorkoutToWorkouts: function(workout){
        var workouts = this.getWorkouts();
        workouts.push(workout);
        this.setWorkouts(workouts);
    },

    setMovements: function(movements){
        window.localStorage.setItem("movements", helper.angularJsonStringify(movements));
    },
    getMovements: function () {
        var movements = JSON.parse(window.localStorage.getItem("movements"));
        return movements;
    },

    setWorkouts: function(workouts){
        window.localStorage.setItem("workouts", helper.angularJsonStringify(workouts));
    },
    getWorkouts: function () {
        var workouts = JSON.parse(window.localStorage.getItem("workouts")) || [];
        return workouts;
    },

    setCombinations: function(combinations){
        window.localStorage.setItem("combinations", helper.angularJsonStringify(combinations));
    },
    getCombinations: function () {
        var combinations = JSON.parse(window.localStorage.getItem("combinations")) || [];
        return combinations;
    }
};