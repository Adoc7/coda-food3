Meteor.subscribe("panier");
Meteor.subscribe("validation");




Template.panier.events({
    'submit .valider'(event){
        event.preventDefault();
        Panier.find().observe({
            added:function (item){
            Validation.insert(item);
        }
        });
    Router.go('validation')
}
});

Template.validation.helpers({
    validation: function(){
        return Validation.find();
    },
    'totalite': function() {
        totalite = 0;
        Validation.find({}, {fields:{total:1}}).map(function(doc) {
            totalite += doc.total;
        });
        return totalite;
    }
});
