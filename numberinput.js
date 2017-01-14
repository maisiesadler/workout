app.component('numberInput',  {
        bindings: {
            number: '=',
            increment: '<'
        },
        template:['<div class="reps">',
            '<div>{{ni.number}}</div>',
            '<div class="arrows">',
            '<img class="arrow up" src="images/arrowup.svg" ng-click="ni.incrReps()" />',
            '<img class="arrow down" src="images/arrowdown.svg" ng-click="ni.decrReps()" />',
            '</div>',
        '</div>'].join(''),
        controller: function(){
            this.increment = this.increment || 1;
            this.incrReps = function(){
                this.number += this.increment;
            };
            this.decrReps = function(){
                if (this.number > 0){
                    this.number -= this.increment;
                }
            };
        },
        controllerAs: 'ni'
});