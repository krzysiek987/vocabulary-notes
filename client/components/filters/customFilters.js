var filterModule=angular.module('vocabularyNotesApp.filters', [])

filterModule.filter('or', function() {
    var privateFields;
    return function(items, searchText, fields) {
        fields = fields || privateFields;
        if(angular.isUndefined(fields) && angular.isDefined(items) && items.length > 0){
            fields=[];
            for(var key in items[0]){
                fields.push(key)
            }
            privateFields=fields;
        }
        if(angular.isUndefined(searchText) || typeof searchText !== 'string' || searchText.length == 0){
            return items;
        }
        var out = [];
        angular.forEach(items, function(item) {
            angular.forEach(fields, function(field){
                if(item.hasOwnProperty(field) &&  item[field].indexOf(searchText) >= 0){
                    out.push(item);
                }
            });
        });
        return out;
    }
});