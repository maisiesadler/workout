helper = {
    displayDate: function (date) {
        if (date){
            if (typeof date === "string"){
                date = new Date(date);
            }
            return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        }
        return "";
    },

    angularJsonStringify: function(json){
        var clone = JSON.parse(JSON.stringify(json));
        clone.forEach(c => {
            delete c.$$hashKey;
            if (c.sections && c.sections.length > 0){
                c.sections.forEach(s => {
                    delete s.$$hashKey;
                    delete s.weight.$$hashKey;s
                });
            }
            if (c.weight){
                delete c.weight.$$hashKey;
            }
        });
        return JSON.stringify(clone);
    }
};

Array.prototype.removeAt = function (idx){
    var a = this;
    var b = a.splice(idx, 1).slice(1);
    b.forEach(i => this.push(i));
};