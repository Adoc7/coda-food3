Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('categories'); }
});

Router.route('/', {
    name: 'Categories'
});


Router.route('/pages/:name', function() {
    this.render(this.params.name,{
        data: {
            name: this.params.name
        }});
});

// Router.route('/panier/:_id', function() {
//     this.render(this.params._id,{
//         data: {
//             name: this.params._id
//         }});
// });

Router.route('/panier', {name: 'panier'});


Router.route('/validation', function(){
    this.render('validation');
});



// var requireLogin = function() {
//     if (! Meteor.user()) {
//         this.render('accessDenied');
//     } else {
//         this.next();
//     }}

// Router.route('/panier', {name: 'panier'});
// Router.onBeforeAction('dataNotFound', {only: 'boissons'});
// Router.onBeforeAction(requireLogin, {only: 'panier'});