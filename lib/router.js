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


Router.route('/panier', {name: 'panier'});
Router.onBeforeAction('dataNotFound', {only: 'panier'});