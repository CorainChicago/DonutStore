requirejs([
  'jquery',
  'knockout'
  ], function($, ko) {
    var initial = [
        { name: 'Vanilla Glaze', type: 'yeast', cost: '$3.44', rating: 'good', description: 'A good basic donut'} ];
   
   var ViewModel = function(donuts){
        self.donuts = ko.observableArray(donuts);
   }

   ko.applyBindings(new ViewModel(initial))

});
