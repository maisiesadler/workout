workout = {
    addMovement: function(name, type, defaultWeight, increment){
        return {
            name: name,
            type: type,
            defaultWeight: defaultWeight,
            increment: increment
        };
    },

    addBlankMovement: function(){
        return this.addMovement("", "W", 50,2.5)
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
    }
};