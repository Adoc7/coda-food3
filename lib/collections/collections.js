Categories = new Mongo.Collection('categories');

Pizzas = new Mongo.Collection("pizzas");
Burgers = new Mongo.Collection("burgers");
Salades = new Mongo.Collection("salades");
Desserts = new Mongo.Collection("Desserts");
Boissons = new Mongo.Collection("boissons");


// Categories.allow({
//     insert: function(userId, doc) {
//     // autoriser les posts seulement si l'utilisateur est authentifié//
// return !! userId;
// }
// });