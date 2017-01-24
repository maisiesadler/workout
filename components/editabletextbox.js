app.component('editableTextbox',  {
        bindings: {
            isEditable: '=',
            value: '='
        },
        template:['<div class="input">',
            '<div ng-hide="et.isEditable" >{{et.value}}</div>',
            '<input ng-model="et.value" ng-show="et.isEditable" />',
        '</div>'].join(''),
        controller: function(){
            
        },
        controllerAs: 'et'
});