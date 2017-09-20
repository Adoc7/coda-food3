Meteor.subscribe("pizzas");
Meteor.subscribe("burgers");
Meteor.subscribe("salades");
Meteor.subscribe("desserts");
Meteor.subscribe("boissons");
Meteor.subscribe("panier");


Template.pizzas.helpers({
    pizzas: function() {return Pizzas.find()}
});
Template.burgers.helpers({
    burgers: function() {return Burgers.find()}
});
Template.salades.helpers({
    salades: function() {return Salades.find()}
});
Template.desserts.helpers({
    desserts: function() {return Desserts.find()}
});
Template.boissons.helpers({
    boissons: function() {return Boissons.find()}
});
Template.panier.helpers({
    panier: function() {return Panier.find()}
});


