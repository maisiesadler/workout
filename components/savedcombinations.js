app.component('savedCombinations',  {
        bindings: {
            selectedCombination: '=',
            onSelectCombination: '&'
        },
        template:[
            '<div>',
                    '<h2>Saved Combinations</h2>',
                    '<div ng-repeat="combination in savc.savedCombinations">',
                        '<span ng-click="savc.removeSectionFromSavedCombination($index)" class="remove">X</span>',
                        '<span ng-click="savc.selectCombination($index)">{{combination.name}}</span>',
                    '</div>',
                    '<div ng-show="savc.savedCombinationChanges" ng-click="savc.saveCombinationChanges()">Save Changes</div>',
                '</div>'].join(''),
        controller: function() {
            this.savedCombinations = workout.getCombinations();

            this.saveCombinationChanges = function() {
                workout.setCombinations(this.savedCombinations);
                this.savedCombinationChanges = false;
            };

            this.removeSectionFromSavedCombination = function(index) {
                this.savedCombinations.removeAt(index);
                this.savedCombinationChanges = true;
            };

            this.selectCombination = function(index){
                this.onSelectCombination({index: index});
            };
        },
        controllerAs: 'savc'
});