Meteor.subscribe("panier");

Template.panier.helpers({
    panier: function() {
        return Panier.find();
    }
});

//
// Template.pizzas_count.events({
//     'submit .pizzas'(event){
//
//         event.preventDefault();
//         var compteur = $("input[name='compteur']").val();
//         Panier.insert({
//             name:this.name,
//             price:this.price,
//             image:this.image,
//             compteur:compteur,
//             total:this.price*compteur
//         });
//     },
// });


Template.pizzas_count.events({
    'submit .pizzas': function (event) {
        event.preventDefault();
        var compteur = $("input[name='compteur']").val();
        Meteor.call('pizzas_count', {compteur: compteur});
    }
});

Meteor.methods({
    pizzas_count: function (post) {
        Panier.insert({
                name:this.name,
                price:this.price,
                image:this.image,
                compteur:compteur,
                total:this.price*compteur
            });
    }
});