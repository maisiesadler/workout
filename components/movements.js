app.component('movements',  {
        bindings: {
            workoutOnClick: '&',
            editable: '<'
        },
        template:[
            '<h2>Movements</h2>',
            '<span ng-click="mov.editMovements = !mov.editMovements" ng-show="mov.editable">Edit</span>',
            '<span ng-click="mov.addMovement()" ng-show="mov.editable">Add new</span>',
            '<div class="headers" ng-show="mov.editMovements">',
                '<div class="movement-name">Name</div>',
                '<div class="movement-weight">Wgt</div>',
                '<div class="movement-incr">Incr</div>',
	        '</div>',
            '<ul>',
                '<li ng-repeat="movement in mov.movements" ng-click=mov.addTo(movement)>',
                    '<span ng-click="mov.removeMovement($index)" ng-show="mov.editMovements" class="remove">X</span>',
                    '<editable-textbox value="movement.name" is-editable="mov.editMovements" class="movement-name"></editable-textbox>',
                    '<editable-textbox value="movement.defaultWeight" is-editable="mov.editMovements" class="movement-weight"></editable-textbox>',
                    '<editable-textbox value="movement.increment" is-editable="mov.editMovements" class="movement-incr"></editable-textbox>',
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
                if (!this.editMovements){
                    this.workoutOnClick({movement: movement});
                }
            };
        },
        controllerAs: 'mov'
});