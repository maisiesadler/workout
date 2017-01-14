app.component('movements',  {
        bindings: {
            addToWorkout: '&'
        },
        template:[
            '<h2>Movements</h2>',
            '<span ng-click="mov.editMovements = !mov.editMovements">Edit</span>',
            '<span ng-click="mov.addMovement()">Add new</span>',
            '<div class="headers" ng-show="mov.editMovements">',
                '<div class="movement-name">Name</div>',
                '<div class="movement-weight">Wgt</div>',
                '<div class="movement-incr">Incr</div>',
	        '</div>',
            '<ul>',
                '<li ng-repeat="movement in mov.movements" ng-click=mov.addTo(movement)>',
                    '<div ng-show="mov.editMovements">',
                        '<span ng-click="mov.removeMovement($index)" class="remove">X</span>',
                        '<input ng-model="movement.name" class="movement-name" />',
                        '<input ng-model="movement.defaultWeight" type="number" class="movement-weight" />',
                        '<input ng-model="movement.increment" type="number" class="movement-incr" />',
                    '</div>',
                    '<div ng-hide="mov.editMovements">',
                        '<div class="movement-name">{{movement.name}}</div>',
                        '<div class="movement-weight">{{movement.defaultWeight}}</div>',
                        '<div class="movement-incr">{{movement.increment}}</div>',
                    '</div>',
                '</li>',
                '<div ng-show="mov.editMovements" ng-click="mov.saveMovements()">save</div>',
            '</ul>'].join(''),
        controller: function() {
            this.movements = workout.getMovements();
                 
            this.removeMovement = function(index) {
                this.movements.removeAt(index);
            };

            this.addMovement = function() {
                this.movements.push(workout.addBlankMovement());
            };
            
            this.saveMovements = function(){
                workout.setMovements(this.movements);
                this.editMovements = false;
            };

            this.addTo = function(movement){
                this.addToWorkout({movement: movement});
            };
        },
        controllerAs: 'mov'
});