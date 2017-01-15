app.component('workoutViewer',  {
        bindings: {
            number: '=',
            increment: '<'
        },
        template:['<div class="workout-viewer">',
                '<h2>Workouts</h2>',
                '<span ng-click="wv.viewWorkoutList()">Refresh</span>',
                '<div ng-repeat="workout in wv.workouts">',
                    '<span class="remove" ng-click="wv.removeWorkoutFromListAtIndex($index)">X</span>',
                    '{{wv.displayDate(workout.date)}}',
                    '<div class="section-desc" ng-repeat="section in workout.sections">',
                        '{{section.movement.name}} ({{section.sets}}x{{section.reps}} @ {{section.weight}})',
                    '</div>',
                '</div>',
                '<div ng-click="wv.saveWorkoutList()" ng-show="wv.changed">Save</div>',
            '</div>'].join(''),
        controller: function(){
            this.changed = false;
            this.viewWorkoutList = function(){
                this.workouts = workout.getWorkouts();
            }

            this.viewWorkoutList();

            this.saveWorkoutList = function(){
                workout.setWorkouts(this.workouts);
                this.changed = false;
            }

            this.displayDate = function(date){
                return helper.displayDate(date);
            };

            this.removeWorkoutFromListAtIndex = function(index) {
                this.workouts.removeAt(index);
                this.changed = true;
            };
        },
        controllerAs: 'wv'
});